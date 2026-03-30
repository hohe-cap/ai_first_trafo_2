# Paketierung fuer Kollegen — Interne Anleitung

> **Fuer:** Jan (Ersteller des Pakets)
> **Zweck:** Wie erstelle ich das Deployment-Paket, das ich an die Kollegen schicke?

---

## Was muss ins Paket?

Der Docker-Build braucht zwei Verzeichnisse aus unserem Repo:

```
craft-explorer-package/
├── app/                            # Komplettes app-Verzeichnis
│   ├── Dockerfile                  # Multi-Stage Build
│   ├── package.json
│   ├── package-lock.json
│   ├── server/                     # Backend-Quellcode
│   ├── src/                        # Frontend-Quellcode
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   ├── tsconfig.json
│   ├── scripts/
│   │   └── copy-yamls.sh
│   ├── deploy/                     # Deployment-Scripte + Doku
│   │   ├── azure-deploy.sh
│   │   ├── docker-compose.azure.yml
│   │   └── README.md
│   ├── docker-compose.yml
│   ├── TECH-STACK.md
│   └── .nvmrc
├── deliverables/
│   └── question_banks/             # NUR die YAML-Dateien
│       ├── pulse-check.yaml
│       ├── deep-dive-combined.yaml
│       ├── context-readiness.yaml
│       ├── deep-dive-adoption.yaml
│       ├── deep-dive-compliance.yaml
│       ├── deep-dive-flow.yaml
│       ├── deep-dive-readiness.yaml
│       └── deep-dive-technical.yaml
├── .dockerignore                   # Aus dem Repo-Root
└── SETUP-ANLEITUNG.md              # Anleitung fuer Kollegen (separat erstellt)
```

## Paket erstellen — Schritt fuer Schritt

### Option A: ZIP-Archiv (empfohlen)

Ausfuehren im Projekt-Root (`~/Projects/ai_first_trafo_2`):

```bash
# Temporaeres Verzeichnis erstellen
mkdir -p /tmp/craft-explorer-package

# App-Verzeichnis kopieren (ohne Build-Artefakte)
rsync -av --progress app/ /tmp/craft-explorer-package/app/ \
  --exclude node_modules \
  --exclude dist \
  --exclude server-dist \
  --exclude server-data \
  --exclude standalone \
  --exclude 'public/data/*.yaml' \
  --exclude .local

# Question Bank YAMLs kopieren
mkdir -p /tmp/craft-explorer-package/deliverables/question_banks
cp deliverables/question_banks/*.yaml /tmp/craft-explorer-package/deliverables/question_banks/

# .dockerignore kopieren
cp .dockerignore /tmp/craft-explorer-package/

# Setup-Anleitung kopieren (aus deploy/)
cp app/deploy/SETUP-ANLEITUNG.md /tmp/craft-explorer-package/

# ZIP erstellen
cd /tmp
zip -r craft-explorer-package.zip craft-explorer-package/

# Aufraeumen
rm -rf /tmp/craft-explorer-package

echo "Paket erstellt: /tmp/craft-explorer-package.zip"
```

### Option B: Schnell-Einzeiler

```bash
cd ~/Projects/ai_first_trafo_2
tar czf /tmp/craft-explorer-package.tar.gz \
  --exclude='app/node_modules' \
  --exclude='app/dist' \
  --exclude='app/server-dist' \
  --exclude='app/server-data' \
  --exclude='app/standalone' \
  --exclude='app/public/data/*.yaml' \
  app/ \
  deliverables/question_banks/*.yaml \
  .dockerignore
```

## Passwort — wo wird es gesetzt?

Das Admin-Passwort ist **nicht im Code und nicht im Paket** — es wird erst beim Deployment
als Umgebungsvariable gesetzt. Das Paket bleibt also immer passwortfrei.

Der Kollege waehlt das Passwort frei beim Ausfuehren des Deploy-Scripts:

```bash
./deploy/azure-deploy.sh --admin-secret "selbst-gewaehltes-passwort"
```

Azure speichert es als `--secure-environment-variables` (verschluesselt, nicht im Image).

---

## Vor dem Versenden pruefen

- [ ] `app/package-lock.json` ist dabei (wird fuer `npm ci` im Container gebraucht)
- [ ] Alle 8 YAML-Dateien in `deliverables/question_banks/` sind dabei
- [ ] `.dockerignore` ist dabei (liegt im Root, nicht in app/)
- [ ] Keine `node_modules/` mit verpackt (waere >200MB)
- [ ] Keine `.private/` oder `.env` Dateien mit verpackt
- [ ] `SETUP-ANLEITUNG.md` liegt im Root des Pakets

## Was gehoert NICHT ins Paket

- `node_modules/` — wird im Container frisch installiert
- `dist/`, `server-dist/` — wird im Container gebaut
- `server-data/` — wird zur Laufzeit angelegt
- `.private/` — persoenliche Notizen
- `.git/` — Git-History
- `research/`, `archive/` — nicht fuer den Betrieb relevant
- `framework/` — Framework-Doku, nicht fuer Installation relevant
- `Feedback/` — interne Feedback-Daten
- `AGENTS.md`, `CLAUDE.md` — AI-Agent-Instruktionen

## Paketgroesse

Erwartete Groesse: **~2-5 MB** (hauptsaechlich TypeScript-Quellcode + YAML-Fragen).
