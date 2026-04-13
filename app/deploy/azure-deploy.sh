#!/usr/bin/env bash
#
# CRAFT Explorer — Azure Deployment Script
#
# Deploys the CRAFT Explorer as a container on Azure using:
#   - Azure Container Registry (ACR) for image storage
#   - Azure Container Instances (ACI) for running the container
#   - Azure File Share for persistent data
#
# Prerequisites:
#   - Azure CLI installed and logged in (az login)
#   - Docker installed (for building the image)
#
# Usage:
#   ./azure-deploy.sh                    # Deploy with defaults
#   ./azure-deploy.sh --admin-secret XY  # Deploy with admin protection
#   ./azure-deploy.sh --teardown         # Remove all resources

set -euo pipefail

# ─── Configuration (override via environment variables) ───

RESOURCE_GROUP="${AZURE_RESOURCE_GROUP:-rg-craft-explorer}"
LOCATION="${AZURE_LOCATION:-germanywestcentral}"
ACR_NAME="${AZURE_ACR_NAME:-craftexploreracr}"
CONTAINER_NAME="${AZURE_CONTAINER_NAME:-craft-explorer}"
IMAGE_NAME="craft-explorer"
IMAGE_TAG="${IMAGE_TAG:-latest}"
DNS_LABEL="${AZURE_DNS_LABEL:-craft-explorer}"
ADMIN_SECRET="${ADMIN_SECRET:-}"
STORAGE_ACCOUNT="${AZURE_STORAGE_ACCOUNT:-craftexplorerstorage}"
FILE_SHARE_NAME="craft-data"
CPU="0.5"
MEMORY="1.0"

# ─── Colors ───

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log()  { echo -e "${BLUE}[INFO]${NC} $*"; }
ok()   { echo -e "${GREEN}[OK]${NC} $*"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $*"; }
err()  { echo -e "${RED}[ERROR]${NC} $*"; exit 1; }

# ─── Parse arguments ───

TEARDOWN=false
while [[ $# -gt 0 ]]; do
  case $1 in
    --admin-secret)  ADMIN_SECRET="$2"; shift 2 ;;
    --teardown)      TEARDOWN=true; shift ;;
    --location)      LOCATION="$2"; shift 2 ;;
    --resource-group) RESOURCE_GROUP="$2"; shift 2 ;;
    --dns-label)     DNS_LABEL="$2"; shift 2 ;;
    *)               err "Unknown argument: $1" ;;
  esac
done

# ─── Teardown ───

if [ "$TEARDOWN" = true ]; then
  log "Tearing down CRAFT Explorer resources..."
  az group delete --name "$RESOURCE_GROUP" --yes --no-wait 2>/dev/null && \
    ok "Resource group $RESOURCE_GROUP deletion initiated." || \
    warn "Resource group $RESOURCE_GROUP not found or already deleted."
  exit 0
fi

# ─── Pre-flight checks ───

command -v az >/dev/null 2>&1 || err "Azure CLI (az) not found. Install: https://aka.ms/installazurecli"
command -v docker >/dev/null 2>&1 || err "Docker not found. Install: https://docs.docker.com/get-docker/"

az account show >/dev/null 2>&1 || err "Not logged in to Azure. Run: az login"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
APP_DIR="$PROJECT_ROOT/app"

[ -f "$APP_DIR/Dockerfile" ] || err "Dockerfile not found at $APP_DIR/Dockerfile"

# ─── Step 1: Resource Group ───

log "Creating resource group: $RESOURCE_GROUP in $LOCATION..."
az group create \
  --name "$RESOURCE_GROUP" \
  --location "$LOCATION" \
  --output none
ok "Resource group ready."

# ─── Step 2: Container Registry ───

log "Creating Azure Container Registry: $ACR_NAME..."
az acr create \
  --resource-group "$RESOURCE_GROUP" \
  --name "$ACR_NAME" \
  --sku Basic \
  --admin-enabled true \
  --output none
ok "Container Registry ready."

# Get ACR credentials
ACR_SERVER=$(az acr show --name "$ACR_NAME" --query loginServer -o tsv)
ACR_USER=$(az acr credential show --name "$ACR_NAME" --query username -o tsv)
ACR_PASS=$(az acr credential show --name "$ACR_NAME" --query "passwords[0].value" -o tsv)

# ─── Step 3: Build & Push Docker Image ───

log "Building Docker image..."
docker build -t "$IMAGE_NAME:$IMAGE_TAG" -f "$APP_DIR/Dockerfile" "$PROJECT_ROOT"
ok "Image built."

log "Tagging for ACR..."
docker tag "$IMAGE_NAME:$IMAGE_TAG" "$ACR_SERVER/$IMAGE_NAME:$IMAGE_TAG"

log "Logging in to ACR..."
echo "$ACR_PASS" | docker login "$ACR_SERVER" -u "$ACR_USER" --password-stdin

log "Pushing image to ACR..."
docker push "$ACR_SERVER/$IMAGE_NAME:$IMAGE_TAG"
ok "Image pushed to $ACR_SERVER/$IMAGE_NAME:$IMAGE_TAG"

# ─── Step 4: Storage Account + File Share (persistent data) ───

log "Creating storage account: $STORAGE_ACCOUNT..."
az storage account create \
  --resource-group "$RESOURCE_GROUP" \
  --name "$STORAGE_ACCOUNT" \
  --location "$LOCATION" \
  --sku Standard_LRS \
  --output none
ok "Storage account ready."

STORAGE_KEY=$(az storage account keys list \
  --resource-group "$RESOURCE_GROUP" \
  --account-name "$STORAGE_ACCOUNT" \
  --query "[0].value" -o tsv)

log "Creating file share: $FILE_SHARE_NAME..."
az storage share create \
  --name "$FILE_SHARE_NAME" \
  --account-name "$STORAGE_ACCOUNT" \
  --account-key "$STORAGE_KEY" \
  --output none
ok "File share ready."

# ─── Step 5: Deploy Container Instance ───

log "Deploying container instance: $CONTAINER_NAME..."

# Build environment variables
ENV_VARS="NODE_ENV=production DATA_DIR=/app/server-data PORT=3000 HOST=0.0.0.0"
SECURE_ENV_VARS=""

if [ -n "$ADMIN_SECRET" ]; then
  SECURE_ENV_VARS="ADMIN_SECRET=$ADMIN_SECRET"
  ok "Admin protection enabled."
else
  warn "No ADMIN_SECRET set — facilitator area is unprotected."
  warn "Set with: --admin-secret YOUR_SECRET"
fi

log "Creating container instance"
MSYS_NO_PATHCONV=1 az container create \
  --resource-group "$RESOURCE_GROUP" \
  --name "$CONTAINER_NAME" \
  --image "$ACR_SERVER/$IMAGE_NAME:$IMAGE_TAG" \
  --registry-login-server "$ACR_SERVER" \
  --registry-username "$ACR_USER" \
  --registry-password "$ACR_PASS" \
  --dns-name-label "$DNS_LABEL" \
  --ports 3000 \
  --cpu "$CPU" \
  --memory "$MEMORY" \
  --os-type Linux \
  --restart-policy Always \
  --environment-variables $ENV_VARS \
  ${SECURE_ENV_VARS:+--secure-environment-variables $SECURE_ENV_VARS} \
  --azure-file-volume-account-name "$STORAGE_ACCOUNT" \
  --azure-file-volume-account-key "$STORAGE_KEY" \
  --azure-file-volume-share-name "$FILE_SHARE_NAME" \
  --azure-file-volume-mount-path "/app/server-data" \
  --output none

ok "Container deployed."

# ─── Step 6: Get URL ───

FQDN=$(az container show -g "$RESOURCE_GROUP" -n "$CONTAINER_NAME" --query "ipAddress.fqdn" -o tsv)

STATE=$(az container show \
  --resource-group "$RESOURCE_GROUP" \
  --name "$CONTAINER_NAME" \
  --query "instanceView.state" -o tsv)

echo ""
echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}  CRAFT Explorer deployed successfully!${NC}"
echo -e "${GREEN}════════════════════════════════════════════════════════════${NC}"
echo ""
echo -e "  URL:              ${BLUE}http://${FQDN}:3000${NC}"
echo -e "  Container State:  ${STATE}"
echo -e "  Resource Group:   ${RESOURCE_GROUP}"
echo -e "  Registry:         ${ACR_SERVER}"
echo -e "  Data Volume:      ${STORAGE_ACCOUNT}/${FILE_SHARE_NAME}"
if [ -n "$ADMIN_SECRET" ]; then
echo -e "  Admin Protected:  ${GREEN}Yes${NC}"
else
echo -e "  Admin Protected:  ${YELLOW}No${NC} (set --admin-secret to enable)"
fi
echo ""
echo -e "  ${YELLOW}Logs:${NC}  az container logs -g $RESOURCE_GROUP -n $CONTAINER_NAME"
echo -e "  ${YELLOW}Stop:${NC}  az container stop -g $RESOURCE_GROUP -n $CONTAINER_NAME"
echo -e "  ${YELLOW}Start:${NC} az container start -g $RESOURCE_GROUP -n $CONTAINER_NAME"
echo -e "  ${YELLOW}Delete:${NC} $0 --teardown"
echo ""
