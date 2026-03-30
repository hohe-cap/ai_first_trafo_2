# CRAFT Explorer — Setup-Anleitung (Azure)

> **Version:** 1.0 | **Stand:** 2026-03-25
> **Fuer:** IT-Team / DevOps, das den CRAFT Explorer auf Azure bereitstellt

---

## 1. Was ist der CRAFT Explorer?

Eine Web-Anwendung zur Messung der AI-Reife in Teams. Facilitatoren erstellen Sessions, Teilnehmer beantworten Fragen ueber einen 6-stelligen Code, und die App berechnet Scores pro CRAFT-Dimension (Compliance, Readiness, Adoption, Flow, Technical).

---

## 2. Tech Stack auf einen Blick

| Schicht | Technologie | Details |
|---------|------------|---------|
| **Frontend** | Vue 3 + TypeScript | Single Page App, Tailwind CSS, Chart.js fuer Radar-Charts |
| **Backend** | Node.js 22 + Fastify | REST-API, dient auch das Frontend aus |
| **Datenhaltung** | JSON-Dateien | Kein Datenbank-Setup noetig, Dateien auf Disk |
| **Container** | Docker (node:22-alpine) | Multi-Stage Build, ~150 MB Image |
| **Fragenkatalog** | YAML-Dateien | Werden beim Build in den Container kopiert |
| **Auth** | Admin-Passwort (Env-Variable) | Schuetzt den Facilitator-Bereich |

**Architektur:**

```
┌──────────────────────────────────────────────┐
│           Docker Container (Port 3000)        │
│                                               │
│   Vue 3 SPA ──── Fastify API ──── JSON Files │
│   (Browser)      /api/*            (Disk)     │
└──────────────────────────────────────────────┘
```

- **Keine externen Abhaengigkeiten** — kein Datenbankserver, kein Redis, kein externer Auth-Provider
- **Ein einziger Container** — Frontend + Backend + Daten in einem Prozess
- **Air-gapped-faehig** — funktioniert ohne Internetzugang nach dem Build

---

## 3. Voraussetzungen

Auf dem Rechner, der das Deployment durchfuehrt:

- **Docker** (Version 20+) — zum Bauen des Container-Images
- **Azure CLI** (`az`) — zum Erstellen der Azure-Ressourcen
- **Azure Subscription** mit Berechtigung fuer:
  - Resource Groups erstellen
  - Azure Container Registry (ACR) erstellen
  - Azure Container Instances (ACI) erstellen
  - Storage Accounts erstellen

```bash
# Azure CLI pruefen
az --version

# In Azure einloggen
az login

# Subscription pruefen
az account show
```

---

## 4. Paketinhalt

```
craft-explorer-package/
├── app/                          # Anwendungs-Quellcode
│   ├── Dockerfile                # Container-Build-Anweisungen
│   ├── deploy/
│   │   ├── azure-deploy.sh       # Automatisiertes Deployment-Script
│   │   ├── docker-compose.azure.yml  # Fuer lokalen Test
│   │   └── README.md             # Detaillierte Deployment-Doku
│   ├── docker-compose.yml        # Einfache Docker-Compose-Datei
│   ├── TECH-STACK.md             # Detaillierte Tech-Stack-Beschreibung
│   └── ...                       # Quellcode (TypeScript, Vue, etc.)
├── deliverables/
│   └── question_banks/           # Fragenkataloge (YAML)
├── .dockerignore                 # Docker-Build-Filter
└── SETUP-ANLEITUNG.md            # Diese Datei
```

---

## 5. Installation — Automatisch (empfohlen)

### 5.1 Paket entpacken

```bash
unzip craft-explorer-package.zip
cd craft-explorer-package
```

### 5.2 Deployment ausfuehren

```bash
cd app
./deploy/azure-deploy.sh --admin-secret "EUER_GEHEIMES_PASSWORT"
```

Das Script erledigt alles automatisch:

1. **Resource Group** erstellen (`rg-craft-explorer` in `germanywestcentral`)
2. **Azure Container Registry** erstellen und Image bauen + pushen
3. **Storage Account + File Share** fuer persistente Daten
4. **Azure Container Instance** starten mit dem Image

**Ergebnis:** Eine URL wie `http://craft-explorer.germanywestcentral.azurecontainer.io:3000`

### 5.3 Optionen anpassen

```bash
# Andere Azure-Region
./deploy/azure-deploy.sh --admin-secret "passwort" --location westeurope

# Anderer DNS-Name (bestimmt die URL)
./deploy/azure-deploy.sh --admin-secret "passwort" --dns-label mein-craft

# Andere Resource Group
./deploy/azure-deploy.sh --admin-secret "passwort" --resource-group rg-meine-gruppe
```

---

## 6. Installation — Manuell (Schritt fuer Schritt)

Falls das automatische Script nicht passt oder ihr mehr Kontrolle braucht:

### 6.1 Docker-Image bauen

```bash
cd craft-explorer-package

# Image bauen (Build-Kontext = dieses Verzeichnis)
docker build -t craft-explorer:latest -f app/Dockerfile .
```

### 6.2 Lokal testen

```bash
# Starten mit Admin-Schutz
docker run -d \
  --name craft-explorer \
  -p 3000:3000 \
  -e ADMIN_SECRET="test-passwort" \
  -v craft-data:/app/server-data \
  craft-explorer:latest

# Pruefen
curl http://localhost:3000/api/health
# Erwartet: {"status":"ok"}

# Browser oeffnen: http://localhost:3000
```

### 6.3 Image in Azure Container Registry pushen

```bash
# ACR erstellen (einmalig)
az group create -n rg-craft-explorer -l germanywestcentral
az acr create -g rg-craft-explorer -n craftexploreracr --sku Basic --admin-enabled true

# Credentials holen
ACR_SERVER=$(az acr show -n craftexploreracr --query loginServer -o tsv)
ACR_PASS=$(az acr credential show -n craftexploreracr --query "passwords[0].value" -o tsv)

# Image taggen und pushen
docker tag craft-explorer:latest $ACR_SERVER/craft-explorer:latest
echo $ACR_PASS | docker login $ACR_SERVER -u craftexploreracr --password-stdin
docker push $ACR_SERVER/craft-explorer:latest
```

### 6.4 Storage fuer persistente Daten

```bash
az storage account create -g rg-craft-explorer -n craftexplorerstorage -l germanywestcentral --sku Standard_LRS
STORAGE_KEY=$(az storage account keys list -g rg-craft-explorer -n craftexplorerstorage --query "[0].value" -o tsv)
az storage share create --name craft-data --account-name craftexplorerstorage --account-key $STORAGE_KEY
```

### 6.5 Container Instance starten

```bash
az container create \
  -g rg-craft-explorer \
  -n craft-explorer \
  --image $ACR_SERVER/craft-explorer:latest \
  --registry-login-server $ACR_SERVER \
  --registry-username craftexploreracr \
  --registry-password $ACR_PASS \
  --dns-name-label craft-explorer \
  --ports 3000 \
  --cpu 0.5 --memory 1.0 \
  --os-type Linux \
  --restart-policy Always \
  --environment-variables NODE_ENV=production PORT=3000 HOST=0.0.0.0 \
  --secure-environment-variables ADMIN_SECRET="EUER_PASSWORT" \
  --azure-file-volume-account-name craftexplorerstorage \
  --azure-file-volume-account-key $STORAGE_KEY \
  --azure-file-volume-share-name craft-data \
  --azure-file-volume-mount-path /app/server-data
```

### 6.6 URL abrufen

```bash
az container show -g rg-craft-explorer -n craft-explorer --query "ipAddress.fqdn" -o tsv
```

---

## 7. Nach dem Deployment

### Zugriff testen

1. **Health Check:** `curl http://EURE-URL:3000/api/health` → `{"status":"ok"}`
2. **Startseite:** `http://EURE-URL:3000` im Browser oeffnen
3. **Facilitator:** "Ich bin Facilitator" klicken → Admin-Passwort eingeben
4. **Session erstellen:** Typ waehlen, Team-Name eingeben → 6-stelliger Code wird generiert
5. **Teilnehmer:** Auf anderem Geraet Code eingeben → Fragen beantworten

### Wichtige Befehle

```bash
# Logs ansehen
az container logs -g rg-craft-explorer -n craft-explorer

# Container neustarten
az container restart -g rg-craft-explorer -n craft-explorer

# Container stoppen (spart Kosten)
az container stop -g rg-craft-explorer -n craft-explorer

# Container wieder starten
az container start -g rg-craft-explorer -n craft-explorer

# Alles loeschen
az group delete -n rg-craft-explorer --yes
```

---

## 8. Konfiguration

### Umgebungsvariablen

| Variable | Pflicht | Default | Beschreibung |
|----------|---------|---------|-------------|
| `ADMIN_SECRET` | **Ja (Production)** | *(leer)* | Passwort fuer den Facilitator-Bereich |
| `PORT` | Nein | `3000` | Server-Port |
| `HOST` | Nein | `0.0.0.0` | Bind-Adresse |
| `NODE_ENV` | Nein | `production` | Umgebungsmodus |
| `CORS_ORIGIN` | Nein | *(alle)* | Erlaubte Origins (z.B. `https://craft.firma.de`) |

### Admin-Schutz

Wenn `ADMIN_SECRET` gesetzt ist:
- **Geschuetzt:** Facilitator-Dashboard, Session-Erstellung/-Verwaltung, Ergebnis-Ansicht
- **Offen:** Startseite, Teilnahme per Code, Antworten abgeben

Der Facilitator gibt das Passwort einmal pro Browser-Tab ein.

### Ports und Netzwerk

- Container lauscht auf Port **3000**
- Protokoll: **HTTP** (kein TLS im Container)
- Fuer HTTPS: Azure Application Gateway oder Reverse Proxy davor schalten

---

## 9. Ressourcen und Kosten

### Azure Container Instance (ACI)

| Ressource | Konfiguration | Geschaetzte Kosten/Monat |
|-----------|--------------|--------------------------|
| ACI | 0.5 vCPU, 1 GB RAM | ~10-15 EUR |
| ACR (Basic) | 10 GB Storage | ~5 EUR |
| Storage Account | Standard LRS, <1 GB | ~1 EUR |
| **Gesamt** | | **~15-25 EUR** |

### Skalierung

- Fuer **bis zu 200 gleichzeitige Teilnehmer** reicht die Standard-Konfiguration
- Mehr CPU/RAM: `--cpu 1 --memory 2` beim `az container create`
- Fuer Hochverfuegbarkeit: Migration auf Azure App Service oder AKS

---

## 10. Troubleshooting

| Problem | Loesung |
|---------|---------|
| Container startet nicht | `az container logs -g rg-craft-explorer -n craft-explorer` pruefen |
| "Unauthorized" im Browser | Admin-Passwort pruefen, ggf. `ADMIN_SECRET` Env-Variable pruefen |
| DNS-Name vergeben | Anderen `--dns-label` waehlen |
| Health Check schlaegt fehl | Warten (10s Start-Grace), dann Logs pruefen |
| Daten nach Neustart weg | Azure File Share korrekt gemountet? `--azure-file-volume-mount-path /app/server-data` |
| Image-Build schlaegt fehl | Docker-Version pruefen (20+), `npm ci` braucht Internetzugang |

---

## 11. Update / Neue Version einspielen

1. Neues Paket von Jan erhalten und entpacken
2. Image neu bauen und pushen:
   ```bash
   docker build -t craft-explorer:v2 -f app/Dockerfile .
   docker tag craft-explorer:v2 $ACR_SERVER/craft-explorer:v2
   docker push $ACR_SERVER/craft-explorer:v2
   ```
3. Container mit neuem Image neu erstellen (gleicher `az container create`-Befehl mit `--image ...:v2`)
4. Daten bleiben erhalten (Azure File Share)

---

## Kontakt

Bei Fragen zum Deployment: **[Jan eintragen]**
Bei Fragen zur Anwendung: **[Jan eintragen]**
