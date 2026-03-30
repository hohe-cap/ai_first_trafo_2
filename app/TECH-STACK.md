# CRAFT Explorer — Tech Stack

> Übersicht über den technischen Stack, Architekturentscheidungen und Deployment-Modell.

---

## Architektur-Überblick

```
┌─────────────────────────────────────────────────┐
│              Docker Container (node:22-alpine)   │
│                                                  │
│  ┌──────────────┐     ┌───────────────────────┐ │
│  │  Vue 3 SPA   │────▶│  Fastify API Server   │ │
│  │  (dist/)     │     │  (server-dist/)        │ │
│  │              │     │                        │ │
│  │  - Tailwind  │     │  /api/sessions         │ │
│  │  - Chart.js  │     │  /api/responses        │ │
│  │  - Pinia     │     │  /api/results          │ │
│  │  - i18n      │     │  /api/health           │ │
│  └──────────────┘     └──────────┬────────────┘ │
│                                  │               │
│                       ┌──────────▼────────────┐ │
│                       │  JSON File Storage     │ │
│                       │  (server-data/)        │ │
│                       │                        │ │
│                       │  sessions/*.json       │ │
│                       │  responses/**/*.json   │ │
│                       │  question-banks/*.yaml │ │
│                       └───────────────────────┘ │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │  Scoring Engine (src/scoring/engine.ts)   │   │
│  │  Shared: Frontend + Backend               │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

**Monolithische Single-Container-Architektur** — bewusst einfach gehalten für Air-Gapped-Deployment und minimale Infrastruktur-Abhängigkeiten.

---

## Frontend

| Komponente | Technologie | Version | Warum |
|-----------|-------------|---------|-------|
| **Framework** | Vue 3 (Composition API) | 3.5 | Leichtgewichtig, TypeScript-first, reaktiv |
| **Build Tool** | Vite | 7.3 | Schnellster Build, HMR in Dev, optimierter Prod-Build |
| **Sprache** | TypeScript | 5.9 | Typsicherheit für Scoring-Logik und API-Contracts |
| **Styling** | Tailwind CSS | 4.x | Utility-first, kein CSS-Bloat, Dark/Light Theme |
| **State Management** | Pinia | 3.0 | Offizieller Vue-Store, typsicher, DevTools-Support |
| **Routing** | Vue Router (Hash Mode) | 4.6 | Hash-basiert für Air-Gapped-Deployment ohne Server-Config |
| **Charts** | Chart.js + vue-chartjs | 4.5 / 5.3 | Radar-Charts für CRAFT-Spider-Diagramme |
| **YAML Parsing** | js-yaml | 4.1 | Question Banks sind YAML (Source of Truth) |
| **i18n** | Custom Composable | — | Bilingual DE/EN ohne Framework-Overhead |

**Build-Output:** ~728 KB (dist/) — wird vom Fastify-Server als Static Files ausgeliefert.

---

## Backend

| Komponente | Technologie | Version | Warum |
|-----------|-------------|---------|-------|
| **Runtime** | Node.js | 22 (LTS) | Stabil, performant, gleiche Sprache wie Frontend |
| **HTTP Server** | Fastify | 5.7 | Schnellster Node-Server, Schema-Validierung, Plugin-System |
| **Static Serving** | @fastify/static | 9.0 | SPA-Auslieferung + YAML-Files ohne separaten Webserver |
| **CORS** | @fastify/cors | 11.2 | Konfigurierbar via Env-Variable |
| **Build** | esbuild (via Vite) | — | Blitzschneller Server-Build zu single .mjs |

**API-Endpunkte:**
- `GET /api/health` — Health Check
- `POST/GET/PATCH/DELETE /api/sessions` — Session-Management (Facilitator)
- `POST/GET /api/sessions/:id/responses` — Antworten speichern/laden (Teilnehmer)
- `GET /api/sessions/:id/results` — Scoring berechnen (Facilitator)
- `GET /api/sessions/code/:code` — Session per Teilnehmer-Code finden

---

## Scoring Engine

| Aspekt | Detail |
|--------|--------|
| **Datei** | `src/scoring/engine.ts` (554 Zeilen) |
| **Sharing** | Identischer Code in Frontend UND Backend (ESM-Import) |
| **Tests** | 29 Unit Tests (Vitest) |
| **Algorithmen** | Pulse: Median; Deep-Dive: (Median×0.6)+(Min×0.4); Context: gewichteter Durchschnitt |
| **Features** | Challenge Detection (9 Patterns), Cross-Validation (4 Checks), Profil-Gewichtung |

---

## Datenhaltung

| Aspekt | Detail | Warum |
|--------|--------|-------|
| **Speicher** | JSON-Dateien auf Disk | Kein DB-Setup nötig, Air-Gapped-kompatibel, menschenlesbar |
| **Struktur** | `sessions/{id}.json`, `responses/{session-id}/{respondent-id}.json` | Einfache Backup/Restore (Verzeichnis kopieren) |
| **Sicherheit** | Path-Traversal-Schutz, ID-Validierung | Kein SQL-Injection-Risiko (kein SQL) |
| **Skalierung** | Ausreichend für ~1000 Sessions, ~10.000 Responses | Für Enterprise-Scale: Migration auf SQLite/PostgreSQL |

---

## Deployment & Infrastruktur

| Aspekt | Detail |
|--------|--------|
| **Container** | Docker, Multi-Stage Build (node:22-alpine) |
| **Image-Größe** | ~150 MB (Alpine + Production Deps) |
| **Orchestrierung** | Docker Compose (Single Service) |
| **Health Check** | `curl -f http://localhost:3000/api/health` (30s Interval, 3 Retries) |
| **Persistenz** | Docker Volume `app-data:/app/server-data` |
| **Port** | 3000 (konfigurierbar via `PORT` Env) |
| **TLS** | Nicht im Container — wird vom Ingress/Load Balancer terminiert |

**Env-Variablen:**
```
NODE_ENV=production
PORT=3000
HOST=0.0.0.0
DATA_DIR=/app/server-data
CORS_ORIGIN=https://craft.example.com
```

---

## Entwicklung

| Aspekt | Detail |
|--------|--------|
| **Dev-Modus** | `npm run dev` — Vite HMR + Fastify Watch (concurrently) |
| **Tests** | `npm test` — Vitest (Scoring Engine + Validierung) |
| **Build** | `npm run build` + `npm run build:server` |
| **Standalone** | `npm run build:standalone` — ZIP-Archive für Windows/macOS/Linux |
| **Demo-Daten** | `npm run seed` — Generiert Beispiel-Sessions |

---

## Bewusste Architekturentscheidungen

### Warum kein separater Webserver (Nginx)?
Fastify liefert Static Files performant aus. Ein einzelner Prozess vereinfacht Deployment und Debugging. Für Production übernimmt Azure/Cloud den Ingress + TLS.

### Warum JSON-Files statt Datenbank?
- Zero-Dependency-Deployment (kein DB-Setup)
- Air-Gapped-kompatibel (kein externer Service)
- Menschenlesbar (Debug, Audit, Export)
- Ausreichend für erwartete Last (~50-200 Teilnehmer pro Session)

### Warum Hash-Routing (#/) statt History-Routing?
Hash-Routing funktioniert ohne Server-seitige Rewrite-Rules — kritisch für Air-Gapped-Szenarien und einfaches Static Hosting.

### Warum TypeScript durchgängig?
Scoring-Engine wird von Frontend UND Backend importiert — gleiche Sprache eliminiert Serialisierungs-Bugs und doppelte Logik.

### Warum kein Auth-Framework?
MVP-Entscheidung: Facilitator-Zugang ist über Netzwerkisolation geschützt (internes Netz). Teilnehmer-Zugang läuft über 6-stellige Session-Codes. Für Production wird ein einfacher API-Key-Schutz ergänzt.

---

**Version:** 1.0
**Stand:** 2026-03-25
