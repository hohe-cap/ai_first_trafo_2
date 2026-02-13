# AI Navigator — App-Plan

**Version:** 2.0
**Erstellt:** 2026-02-13
**Status:** Stories 1-3 implementiert, ab Story 4 mit Backend-Architektur

---

## Vision

Die AI Navigator App misst den aktuellen AI-Reifegrad einer Organisationseinheit
mithilfe des CRAFT-Frameworks und liefert die Datenbasis für konkrete
Verbesserungsinitiativen.

**Kernversprechen:** AI-Reifegrad messen → konkrete Verbesserungsinitiativen ableiten und umsetzen.

---

## Rahmenbedingungen

| Aspekt | Entscheidung |
|--------|-------------|
| **Nutzer** | AI Transformation Manager (Facilitator) + Teammitglieder (Self-Service) |
| **Modi** | Begleitet (Facilitator tippt, Team diskutiert) + Unbegleitet (Team füllt eigenständig aus) |
| **Surveys im MVP** | Pulse Check + 5 Deep-Dives (aus YAML, runtime geladen) |
| **Fragetypen** | Maturity (5 Verhaltensstufen), Diagnostic (SC/MC), Powerful Question (Freitext), Context |
| **Scoring** | Automatisch nach METHODOLOGY.md (Median über alle Teilnehmer) |
| **Ergebnis** | Spider/Radar-Chart + Score-Tabelle + JSON Export |
| **Sprache** | Bilingual (DE/EN) von Anfang an |
| **Tech-Stack** | Vite + Vue 3 + TypeScript + Tailwind CSS + Chart.js + js-yaml (Frontend) / Node.js + Fastify (Backend) |
| **Deployment** | Docker, air-gapped (keine externen Abhängigkeiten zur Laufzeit) |
| **Speicherung** | JSON-Dateien auf dem Server (lesbar, inspizierbar) |
| **Responsiveness** | Desktop-first, Tablet/Smartphone als Nice-to-have |
| **Browser** | Nur moderne Browser (Chrome, Edge, Firefox aktuell) |

---

## Architektur

### Überblick

```
┌─────────────────────────────────────────────┐
│                  Docker Container            │
│                                              │
│  ┌──────────┐        ┌──────────────────┐   │
│  │ Vue SPA  │◄──────►│ Fastify Backend  │   │
│  │ (Static) │  API   │ (Node.js)        │   │
│  └──────────┘        └────────┬─────────┘   │
│                               │              │
│                     ┌─────────▼──────────┐   │
│                     │  JSON File Storage │   │
│                     │  data/             │   │
│                     │  ├── sessions/     │   │
│                     │  └── responses/    │   │
│                     └────────────────────┘   │
└─────────────────────────────────────────────┘
```

### Workflow

1. **Facilitator** erstellt eine Assessment-Session (Typ, Team-Name)
2. Bekommt einen **Teilnahme-Code** (kurz, z.B. 6 Zeichen)
3. **Teammitglieder** öffnen die App-URL, geben den Code ein
4. Füllen die Fragen **anonym** aus, Antworten werden auf dem Server gespeichert
5. **Facilitator** sieht Live-Dashboard mit aggregierten Scores (Median)

### JSON File Storage

```
server/data/
├── question-banks/              # YAMLs (kopiert aus deliverables/)
│   ├── pulse-check.yaml
│   └── deep-dive-*.yaml
├── sessions/                    # 1 Datei pro Session
│   └── {session-id}.json       # { id, type, code, team, created_at, status }
└── responses/                   # 1 Datei pro Teilnehmer-Antwort
    └── {session-id}/
        └── {response-id}.json  # { id, session_id, answers, submitted_at }
```

**Vorteile:**
- Human-readable, inspizierbar mit Texteditor
- Einfach zu backupen (Ordner kopieren)
- Keine DB-Abhängigkeit
- Später auf SQLite/DB migrierbar

---

## Architektur-Prinzipien

- **YAML = Source of Truth:** Question Banks als YAML-Dateien, runtime geladen
- **Clean Code / KISS:** Einfach, lesbar, wartbar — keine Über-Abstraktion
- **Erweiterbar:** Neue Surveys = neue YAML-Datei, kein Rebuild
- **Air-gapped:** Alles gebundled, keine CDN-Abhängigkeiten
- **JSON Storage:** Lesbar, inspizierbar, keine DB nötig für MVP
- **Offen für Iteration 2+:** Login, Trend-Tracking, AI-Empfehlungen

---

## Nicht im MVP (aber architektonisch vorbereitet)

- Login / Authentifizierung (aktuell: Facilitator-Code reicht)
- Anonymes Tracking / Duplikat-Erkennung
- Automatische Handlungsempfehlungen (Katalog oder AI-generiert)
- Trend-Tracking über Zeit (Quartalsvergleich)
- Context & Readiness Umfrage (Ebene 1)
- PDF-Export
- Branding / Theming

---

## INVEST-Stories

### Story 1 — Projektgerüst aufsetzen ✅

> Als Entwickler kann ich das Projekt mit einem Befehl starten und deployen.

**Status: DONE** — Vite + Vue 3 + Tailwind + Docker, YAML-Copy-Script

---

### Story 2 — YAML-Loader & Datenmodell ✅

> Als App kann ich die Question-Bank-YAMLs laden und als typisierte Daten bereitstellen.

**Status: DONE** — Fetch + Parse + Validation + Pinia Store

---

### Story 3 — i18n & Sprachwechsel ✅

> Als User kann ich zwischen Deutsch und Englisch wechseln.

**Status: DONE** — useI18n() Composable, LanguageToggle, localStorage-Persistenz

---

### Story 4 — Backend & Session-Verwaltung

> Als Facilitator kann ich eine Assessment-Session erstellen und bekomme
> einen Teilnahme-Code, den ich an mein Team weitergeben kann.

**Scope:**
- Fastify-Server mit REST-API
- Session erstellen: POST /api/sessions → { id, code, type, team }
- Session abrufen: GET /api/sessions/:code
- Session-Status: open / closed
- JSON File Storage für Sessions
- Facilitator-Startseite: Session erstellen, Code anzeigen

**API-Endpunkte:**
- `POST /api/sessions` — Session erstellen (Typ, Team-Name)
- `GET /api/sessions/:code` — Session-Info abrufen (für Teilnehmer)
- `GET /api/sessions` — Alle Sessions auflisten (für Facilitator)
- `PATCH /api/sessions/:id/status` — Session öffnen/schließen

**Akzeptanzkriterien:**
- [ ] Facilitator kann Session erstellen und bekommt 6-stelligen Code
- [ ] Teilnehmer kann mit Code die Session finden
- [ ] Sessions werden als JSON-Dateien gespeichert
- [ ] Session-Liste auf Facilitator-Dashboard sichtbar

---

### Story 5 — Fragen-Flow (Kern)

> Als Teilnehmer kann ich über den Session-Code an einem Assessment
> teilnehmen und Fragen beantworten.

**Scope:**
- Teilnehmer-Einstieg: Code eingeben → Fragen laden
- Segmentation-Felder erfassen (Rolle, Arbeitskontext)
- Maturity-Fragen: 5 Verhaltensbeschreibungen als auswählbare Karten
- Diagnostic: Single Choice / Multiple Choice
- Powerful Questions: Freitext (optional, max 280 Zeichen)
- Context-Fragen: Single/Multiple Choice
- Fortschrittsanzeige + Vor/Zurück-Navigation
- Antwort-Zwischenspeicherung (localStorage als Fallback, Server als Ziel)

**Akzeptanzkriterien:**
- [ ] Kompletter Pulse Check durchklickbar (16 Fragen)
- [ ] Kompletter Deep-Dive durchklickbar (9-10 Fragen)
- [ ] Alle Antworttypen funktionieren korrekt
- [ ] Antworten werden auf dem Server gespeichert

---

### Story 6 — Antwort-Speicherung & Resume

> Als Teilnehmer kann ich ein unterbrochenes Assessment fortsetzen.
> Alle Antworten werden serverseitig gespeichert.

**Scope:**
- API: POST /api/sessions/:id/responses — Antworten speichern
- API: GET /api/sessions/:id/responses/:respondentId — Antworten laden
- Respondent-ID per Browser generieren (UUID in localStorage)
- Automatische Speicherung nach jeder Antwort
- Resume: Bei erneutem Aufruf mit gleichem Code → letzte Antworten laden

**Akzeptanzkriterien:**
- [ ] Antworten werden als JSON auf dem Server gespeichert
- [ ] Browser schließen → neu öffnen → Assessment fortsetzen
- [ ] Mehrere Teilnehmer können parallel ausfüllen

---

### Story 7 — Scoring Engine

> Als App berechne ich automatisch die CRAFT-Scores über alle Teilnehmer.

**Scope:**
- Pulse Check: Median der Maturity-Antworten pro Dimension über alle Teilnehmer
- Deep-Dive: `(Median × 0.6) + (Min × 0.4)` über Sub-Topic-Maturity-Fragen
- Aggregation über alle Responses einer Session
- Score-Berechnung als reine Funktionen (shared zwischen Frontend und Backend)
- API: GET /api/sessions/:id/results — Aggregierte Scores

**Akzeptanzkriterien:**
- [ ] Unit Tests mit bekannten Eingaben → erwartete Scores
- [ ] Aggregation über mehrere Teilnehmer korrekt (Median)
- [ ] Deep-Dive Score korrekt (Median×0.6 + Min×0.4)
- [ ] Stufen-Label stimmt mit Score überein

---

### Story 8 — Ergebnis-Dashboard & Spider Chart

> Als Facilitator sehe ich das Live-Dashboard mit aggregierten CRAFT-Scores.

**Scope:**
- Chart.js Radar-Chart mit 5 CRAFT-Dimensionen (C-R-A-F-T)
- Score-Tabelle: Dimension, Score (1-5), Stufen-Label
- Anzahl Teilnehmer anzeigen
- Diagnostik-Zusammenfassung: Häufigste MC-Antworten pro Dimension
- Auto-Refresh oder manuell "Aktualisieren"
- Responsive (Desktop + Tablet)

**Akzeptanzkriterien:**
- [ ] Radar-Chart zeigt 5 Dimensionen mit korrekten Werten
- [ ] Tabelle zeigt Score + Label pro Dimension
- [ ] Teilnehmeranzahl sichtbar
- [ ] MC-Diagnostik wird zusammengefasst dargestellt

---

### Story 9 — JSON Export

> Als Facilitator kann ich Assessment-Ergebnisse exportieren,
> damit sie archivierbar und weiterverarbeitbar sind.

**Scope:**
- Export-Button auf Ergebnis-Seite → JSON-Download
- JSON enthält: Session-Metadaten, aggregierte Scores, Diagnostik-Summary
- Optional: Rohdaten-Export (alle anonymisierten Einzel-Responses)

**Akzeptanzkriterien:**
- [ ] Export erzeugt valide, lesbare JSON-Datei
- [ ] Enthält Scores + Diagnostik
- [ ] Keine personenbezogenen Daten im Export

---

## Reihenfolge

```
Story 1 ✅ → 2 ✅ → 3 ✅ → 4 → 5 → 6 → 7 → 8 → 9
                                         ↑
                                     7 kann parallel zu 6
```

---

## Ordnerstruktur

```
app/
├── APP-PLAN.md
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
│
├── public/                            # Statische Assets (Frontend)
│
├── server/                            # Backend (Fastify)
│   ├── index.ts                       # Server-Einstieg
│   ├── routes/
│   │   ├── sessions.ts                # Session CRUD
│   │   └── responses.ts               # Antwort-Speicherung
│   ├── storage/
│   │   └── json-store.ts              # JSON File Storage Layer
│   └── data/                          # Persistierte Daten (Volume in Docker)
│       ├── question-banks/            # YAML-Dateien
│       ├── sessions/                  # Session-JSONs
│       └── responses/                 # Response-JSONs
│
├── src/                               # Frontend (Vue SPA)
│   ├── main.ts
│   ├── App.vue
│   ├── views/
│   │   ├── HomeView.vue               # Startseite: Facilitator + Teilnehmer
│   │   ├── FacilitatorView.vue        # Session-Verwaltung + Dashboard
│   │   ├── AssessmentView.vue         # Fragen-Flow (Teilnehmer)
│   │   └── ResultsView.vue            # Spider Chart + Scores
│   ├── components/
│   │   ├── assessment/                # Frage-Komponenten
│   │   ├── results/                   # Ergebnis-Komponenten
│   │   ├── layout/                    # Header, Footer, Toggle
│   │   └── common/                    # Shared UI
│   ├── stores/                        # Pinia
│   ├── scoring/                       # Scoring-Logik (shared mit Server)
│   ├── loader/                        # YAML-Loader
│   ├── api/                           # API-Client (fetch-Wrapper)
│   ├── i18n/                          # Übersetzungen
│   ├── types/                         # TypeScript-Typen (shared)
│   ├── utils/                         # Helpers
│   └── router/
│
├── scripts/
│   └── copy-yamls.sh
│
└── tests/
    ├── scoring/
    └── server/
```

### Hinweis zu den YAMLs

Die YAML Source of Truth bleibt in `deliverables/question_banks/`.
Ein Build-Script kopiert sie nach `server/data/question-banks/`.
Der Fastify-Server serviert sie an das Frontend.

---

## Iterationen nach MVP

**Iteration 2:** Login/Auth, Trend-Tracking (Quartalsvergleich), Duplikat-Erkennung
**Iteration 3:** AI-Empfehlungen, PDF-Export, Branding/Theming
