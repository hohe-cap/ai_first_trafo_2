# CRAFT — AI Transformation Framework

> Von Experimenten zu messbarer Wirkung. CRAFT verbindet technisches Enablement, Prozessintegration, Change Management und Governance zu einem iterativen Framework fuer die AI-Transformation im Software Development Life Cycle.

---

## Was ist das hier?

Dieses Repository enthaelt drei integrierte Komponenten:

| Komponente | Beschreibung | Verzeichnis |
|---|---|---|
| **Framework** | Das CRAFT-Modell — 5 Dimensionen, Iterationsmodell, KPI-Architektur, Rollenmodell | `framework/` |
| **Assessment-System** | Drei-Ebenen-Fragebogen (YAML) mit Scoring-Methodik fuer strukturierte Standortbestimmung | `deliverables/question_banks/` |
| **CRAFT Explorer App** | Web-App (Vue 3 + Fastify) zum Durchfuehren von Assessments, Berechnen von Scores und Visualisieren von Ergebnissen | `app/` |

---

## Die 5 CRAFT-Dimensionen

Alle fuenf Dimensionen werden **gleichzeitig und iterativ** in 4-Wochen-Zyklen bearbeitet:

| Dim. | Name | Kernfrage |
|------|------|-----------|
| **C** | Compliance & Governance | Was darf das Team? Was muss es? |
| **R** | Readiness — Human & Cultural | Koennen und wollen die Menschen AI nutzen? |
| **A** | Adoption & Usage | Wird AI tatsaechlich genutzt — breit ueber den SDLC? |
| **F** | Flow & Process Integration | Wo sind die echten Bottlenecks — und wo hat AI den groessten Hebel? |
| **T** | Technical Enablement | Welches Setup braucht das Team konkret? |

Reifestufen: **Exploring** → Experimenting → **Embedding** → Scaling → **Evolving**

---

## Projektstruktur

```
.
├── framework/                          # Source of Truth: CRAFT Framework (v1.0 DRAFT)
│   └── ai-transformation-framework-craft.md
│
├── deliverables/                       # Arbeitsergebnisse
│   ├── question_banks/                 # Assessment-Fragebogen (YAML = Source of Truth)
│   │   ├── METHODOLOGY.md             # Design-Bibel: Scoring, Kalibrierung, Aggregation
│   │   ├── context-readiness.yaml     # Ebene 1: Kontext & Readiness (35 Fragen, einmalig)
│   │   ├── pulse-check.yaml           # Ebene 2: Pulse Check (16 Fragen, regelmaessig)
│   │   └── deep-dive-*.yaml           # Ebene 3: 5x Deep-Dives (je ~10 Fragen, on-demand)
│   ├── presentation/                   # HTML-Praesentationen (bright + dark)
│   └── *.md                            # Pitch, Use Cases, Interventionskatalog
│
├── app/                                # CRAFT Explorer Web-App (MVP komplett)
│   ├── src/                            # Vue 3 + TypeScript Frontend
│   ├── server/                         # Fastify Backend (REST API, JSON File Storage)
│   ├── tests/                          # Vitest Unit Tests
│   ├── APP-PLAN.md                     # Architektur & Feature-Spezifikation
│   ├── Dockerfile                      # Container-Image
│   └── docker-compose.yml              # Lokale Entwicklungsumgebung
│
├── archive/                            # Veraltete/ersetzte Dokumente
├── AGENTS.md                           # Agent-Instruktionen + komprimierter Framework-Digest
├── CLAUDE.md                           # Claude-spezifische Konfiguration
└── GEMINI.md                           # Gemini-spezifische Konfiguration
```

### Wichtige Dateien fuer den Einstieg

| Datei | Wann lesen? |
|---|---|
| `framework/ai-transformation-framework-craft.md` | Um das Framework vollstaendig zu verstehen |
| `deliverables/question_banks/METHODOLOGY.md` | Um das Scoring und die Assessment-Logik zu verstehen |
| `app/APP-PLAN.md` | Um die App-Architektur und den Funktionsumfang zu verstehen |
| `AGENTS.md` | Fuer AI-Agents: komprimierter Framework-Digest + Projektregeln |

---

## Assessment-System (3 Ebenen)

| Ebene | Umfang | Frequenz | Dauer | Zweck |
|-------|--------|----------|-------|-------|
| **1: Context & Readiness** | 35 Fragen (Org-Kontext) | Einmalig (Kickoff) | ~30 Min | Rahmenbedingungen erfassen |
| **2: Pulse Check** | 16 Fragen (1 pro Dimension + uebergreifend) | Regelmaessig | ≤15 Min | Reife-Snapshot, Fortschritt messen |
| **3: Deep-Dives** | 5 Dateien × ~10 Fragen (4 Sub-Topics pro Dimension) | Kickoff-Baseline + on-demand | 15–20 Min/Dimension | Detaildiagnose, Sub-Topic-Profile |

**Scoring:**
- Pulse Check: **Median** ueber alle Teilnehmer
- Deep-Dive: **(Median × 0.6) + (Min × 0.4)** — Balance zwischen Konsens und Mindest-Readiness

YAML ist Source of Truth. Markdown-Dateien sind abgeleitete Ansichten.

---

## CRAFT Explorer App

### Tech Stack

- **Frontend:** Vite + Vue 3 + TypeScript + Tailwind CSS + Chart.js
- **Backend:** Node.js + Fastify (minimal, REST API)
- **Speicherung:** JSON-Dateien (kein SQLite, lesbar und inspizierbar)
- **Deployment:** Docker (air-gapped, ein Container, keine externen Abhaengigkeiten zur Laufzeit)
- **Sprachen:** Deutsch/Englisch (von Anfang an bilingual)

### Lokale Entwicklung

```bash
cd app
npm install
npm run dev          # Frontend (Vite) + Backend (Fastify) parallel
```

Die App laeuft auf `http://localhost:5173` (Frontend) und `http://localhost:3000` (API).

### Docker

```bash
cd app
docker compose up --build
```

### MVP-Funktionsumfang (Stories 1–9, abgeschlossen)

- Session-Erstellung durch Facilitator (Teilnahme-Code)
- 4 Fragetypen: Maturity (5-stufig), Multiple Choice, Freitext, Kontext
- Scoring Engine (Median-Aggregation nach METHODOLOGY.md)
- Ergebnis-Visualisierung: Radar-Chart, Score-Tabelle, Diagnostik-Balken
- JSON-Export (Session-Metadaten + Scores, keine PII)
- Live-Dashboard (Auto-Refresh 30s)
- Dark/Light Theme, DE/EN Toggle

---

## Praesentationen

Im Verzeichnis `deliverables/presentation/` befinden sich selbststaendige HTML-Dateien (kein PowerPoint). Jede Datei enthaelt CSS, JS und Inhalte — einfach im Browser oeffnen.

| Datei | Zweck |
|---|---|
| `craft-exec-pyramid_bright/dark.html` | Executive Deck (11 Slides, Minto-Pyramide) |
| `craft-pitch-deck_bright/dark.html` | Pitch Deck (5 Slides, kompakt) |
| `craft-community-talk_bright/dark.html` | Community Talk |
| `craft-framework-presentation_bright/dark.html` | Detaillierte Framework-Praesentation |

Navigation: Pfeiltasten, Leertaste oder Swipe.

---

## Konventionen

### Sprache
- **Dokumentation und Kommunikation:** Deutsch
- **Code und Code-Kommentare:** Englisch

### Commits
[Conventional Commits](https://www.conventionalcommits.org/):
```
feat:     Neues Feature
fix:      Bugfix
docs:     Dokumentation
refactor: Code-Umbau ohne Funktionsaenderung
```

### Branching
Trunk-based Development mit Feature-Branches. `main` ist der Hauptbranch.

### Sources of Truth
- **Framework:** `framework/ai-transformation-framework-craft.md` (nicht AGENTS.md — dort steht nur der Digest)
- **Question Banks:** `deliverables/question_banks/*.yaml` (nicht die .md-Dateien)
- **Scoring-Regeln:** `deliverables/question_banks/METHODOLOGY.md`

---

## Mitarbeiten

### Framework weiterentwickeln

1. Aenderung in `framework/ai-transformation-framework-craft.md` vornehmen
2. Komprimierten Digest in `AGENTS.md` aktualisieren (Abschnitt "Framework-Referenz")
3. Sicherstellen, dass beide Versionen konsistent sind

### Question Banks bearbeiten

1. YAML-Datei in `deliverables/question_banks/` editieren
2. Scoring-Regeln in `METHODOLOGY.md` pruefen/anpassen
3. Abgeleitete Markdown-Ansichten bei Bedarf neu generieren

### App erweitern

1. `app/APP-PLAN.md` fuer Architektur-Entscheidungen und offene Stories konsultieren
2. Tests mit `npm test` ausfuehren
3. Build mit `npm run build` validieren

### AI-Agents nutzen

Dieses Repo ist fuer die Zusammenarbeit mit AI-Agents optimiert:
- `AGENTS.md` — universelle Instruktionen (Claude, Gemini, Copilot)
- `CLAUDE.md` — Claude-spezifisch (importiert AGENTS.md)
- `GEMINI.md` — Gemini-spezifisch
- `.clinerules/` — Cline IDE-Integration

Die Agent-Dateien enthalten einen komprimierten Framework-Digest, damit Agents ohne Vollzugriff auf `framework/` arbeiten koennen.

---

## Referenzmodelle

CRAFT baut auf etablierten Frameworks auf:

- **AI Maturity:** [MITRE AI Maturity Model](https://aida.mitre.org/ai-maturity-model/)
- **Delivery Metrics:** [DORA](https://dora.dev/)
- **Change Management:** Kotter 8 Accelerators, Prosci ADKAR
- **Empirie:** MIT NANDA (95% AI-Pilot-Failure), McKinsey State of AI 2025

---

## Status

| Komponente | Status |
|---|---|
| Framework (CRAFT v1.0) | DRAFT — aktiv in Nutzung |
| Question Banks (3 Ebenen) | Komplett, kalibriert |
| CRAFT Explorer App (MVP) | Stories 1–9 abgeschlossen |
| Praesentationen | Executive Deck, Pitch Deck, Community Talk |

---

*Company Confidential. Capgemini 2026.*
