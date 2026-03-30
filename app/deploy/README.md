# CRAFT Explorer — Azure Deployment

## Schnellstart

### Voraussetzungen

- [Azure CLI](https://aka.ms/installazurecli) installiert und eingeloggt (`az login`)
- [Docker](https://docs.docker.com/get-docker/) installiert
- Zugriff auf eine Azure Subscription

### 1. Deployment mit einem Befehl

```bash
cd app
./deploy/azure-deploy.sh --admin-secret "mein-geheimes-passwort"
```

Das Script erstellt automatisch:
- Resource Group (`rg-craft-explorer`)
- Azure Container Registry (ACR)
- Storage Account + File Share (persistente Daten)
- Azure Container Instance (ACI)

**Ergebnis:** URL wie `http://craft-explorer.germanywestcentral.azurecontainer.io:3000`

### 2. Konfiguration

| Parameter | Default | Beschreibung |
|-----------|---------|-------------|
| `--admin-secret` | *(leer)* | Passwort fuer den Facilitator-Bereich |
| `--location` | `germanywestcentral` | Azure Region |
| `--resource-group` | `rg-craft-explorer` | Name der Resource Group |
| `--dns-label` | `craft-explorer` | DNS-Praefix fuer die URL |

Oder via Umgebungsvariablen:

```bash
export AZURE_LOCATION=westeurope
export AZURE_RESOURCE_GROUP=rg-meineapp
export ADMIN_SECRET=mein-passwort
./deploy/azure-deploy.sh
```

### 3. Verwaltung

```bash
# Logs ansehen
az container logs -g rg-craft-explorer -n craft-explorer

# Container stoppen (Kosten sparen)
az container stop -g rg-craft-explorer -n craft-explorer

# Container starten
az container start -g rg-craft-explorer -n craft-explorer

# Alles loeschen
./deploy/azure-deploy.sh --teardown
```

### 4. Admin-Secret aendern

```bash
# Container mit neuem Secret neu erstellen
ADMIN_SECRET=neues-passwort ./deploy/azure-deploy.sh
```

---

## Lokaler Test (Azure-Konfiguration)

Zum Testen der Produktions-Konfiguration lokal:

```bash
# Mit Admin-Schutz
ADMIN_SECRET=test123 docker compose -f deploy/docker-compose.azure.yml up -d --build

# Ohne Admin-Schutz
docker compose -f deploy/docker-compose.azure.yml up -d --build

# Oeffne http://localhost:3000
```

---

## Architektur auf Azure

```
Internet
    |
    v
Azure Container Instance (ACI)
  - craft-explorer:latest
  - Port 3000
  - 0.5 vCPU, 1 GB RAM
  - Health Check: /api/health
    |
    v
Azure File Share
  - sessions/*.json
  - responses/**/*.json
  - question-banks/*.yaml
```

**Kosten:** ~15-25 EUR/Monat (ACI + Storage, Germany West Central)

---

## Admin-Schutz

Wenn `ADMIN_SECRET` gesetzt ist:
- **Geschuetzt:** Facilitator-Dashboard, Session-Erstellung, Ergebnis-Ansicht, Session-Management
- **Offen:** Startseite, Teilnehmer-Zugang (via 6-stelligem Code), Antworten speichern, Health Check

Der Facilitator muss das Passwort einmal pro Browser-Tab eingeben (gespeichert in `sessionStorage`).

---

## Haeufige Probleme

### Container startet nicht
```bash
az container logs -g rg-craft-explorer -n craft-explorer
az container show -g rg-craft-explorer -n craft-explorer --query "instanceView.events"
```

### DNS-Name bereits vergeben
```bash
./deploy/azure-deploy.sh --dns-label mein-anderer-name
```

### Image aktualisieren
```bash
# Einfach erneut deployen — Script baut und pusht neues Image
./deploy/azure-deploy.sh --admin-secret "passwort"
```
