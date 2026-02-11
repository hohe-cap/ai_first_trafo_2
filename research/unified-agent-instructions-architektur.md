# Unified Agent Instructions Architecture

**Single Source of Truth für Claude Code, GitHub Copilot, Gemini & Cline**

Version 1.0 | Februar 2026 | Jan

---

## 1. Das Problem

Vier AI Coding Agents, vier verschiedene Instruction-Systeme, ein Ziel: Alle sollen mit denselben Informationen arbeiten, ohne dass Wissen redundant gepflegt werden muss.

| Agent | Primäres System | Natives AGENTS.md | Eigene Dateien |
|-------|----------------|-------------------|----------------|
| Claude Code | CLAUDE.md | Via `@`-Import | `.claude/rules/*.md`, `.claude/skills/` |
| GitHub Copilot | `.github/copilot-instructions.md` | Ja (liest AGENTS.md) | `.github/instructions/*.instructions.md` |
| Gemini | GEMINI.md (Vorrang) | Ja (auto-scan Parent-Dirs) | — |
| Cline | `.clinerules/*.md` | Nein (Feature Request #5033) | `.clinerules/` |

**Kernproblem:** Wenn Framework-Wissen, Konventionen oder Projektkontext in vier verschiedenen Dateien gepflegt wird, divergieren sie über Zeit. Änderungen müssen 4× nachgezogen werden. Das passiert nie zuverlässig.

---

## 2. Design-Prinzipien

Basierend auf der Vercel-Eval-Studie (Jan 2026) und der breiteren Recherche:

### Prinzip 1: Passiver Kontext schlägt aktives Retrieval

> "A compressed 8KB docs index embedded directly in AGENTS.md achieved a 100% pass rate, while skills maxed out at 79% even with explicit instructions telling the agent to use them." — Vercel Blog

**Konsequenz:** Kritisches Wissen gehört direkt in die Instruction-Dateien, nicht in externe Dateien, die der Agent erst aktiv laden muss. Skills/externe Docs sind Ergänzung, nicht Ersatz.

### Prinzip 2: Single Source of Truth + Tool-Bridges

Eine primäre Wissensdatei, die alle anderen referenzieren oder einbinden. Keine Kopien.

### Prinzip 3: Komprimierung statt Volltext

Vercels 8KB komprimierter Index funktionierte genauso gut wie 40KB Volltext. Für Framework-Wissen heißt das: Ein komprimierter "Framework Digest" mit Pointer auf Detail-Dateien.

### Prinzip 4: Unter 50 Instructions bleiben

HumanLayer-Studie: ~50 Instructions = Sättigungspunkt, ab dem Compliance über alle Regeln gleichmäßig degradiert. Lieber 15–20 präzise Kernregeln als 80 ausführliche.

---

## 3. Empfohlene Dateistruktur

```
project-root/
│
├── AGENTS.md                          # ① Primary Source of Truth
│
├── .context/                          # ② Shared Knowledge Base
│   ├── frameworks/
│   │   └── ai-value-stream-transformer.md   # Framework-Digest (komprimiert)
│   ├── conventions/
│   │   ├── code-style.md
│   │   ├── architecture.md
│   │   └── commit-conventions.md
│   ├── domain/
│   │   └── business-glossary.md
│   └── security/
│       └── compliance-rules.md
│
├── CLAUDE.md                          # ③ Claude Code Bridge
│
├── .github/
│   └── copilot-instructions.md        # ④ GitHub Copilot Bridge
│
├── GEMINI.md                          # ⑤ Gemini Bridge (optional)
│
└── .clinerules/
    └── main.md                        # ⑥ Cline Bridge
```

---

## 4. Die Dateien im Detail

### ① AGENTS.md — Primary Source of Truth

Diese Datei enthält alles, was JEDER Agent wissen muss. Sie ist die kanonische Quelle.

```markdown
# AGENTS.md — [Projektname]

## Projekt-Überblick
[2-3 Sätze, was dieses Projekt ist und tut]

## Tech Stack
- Sprache: [z.B. Dart/Flutter 3.x]
- Framework: [z.B. Riverpod, go_router]
- Backend: [z.B. Supabase, Firebase]
- Testing: [z.B. flutter_test, integration_test]
- CI/CD: [z.B. GitHub Actions → Fastlane]

## Architektur-Entscheidungen
- [ADR-001: State Management via Riverpod — weil X]
- [ADR-002: Feature-based Ordnerstruktur — weil Y]
- Siehe `.context/conventions/architecture.md` für Details

## Wichtige Konventionen
- Namenskonvention: [z.B. snake_case für Dateien, PascalCase für Klassen]
- Commit-Format: [z.B. Conventional Commits]
- Keine neuen Dependencies ohne Diskussion
- Tests vor jedem Commit: `flutter test`
- Linter muss clean sein: `flutter analyze`

## Kritische Regeln (IMMER beachten)
- NIEMALS API Keys oder Secrets hardcoden
- NIEMALS .env Dateien committen
- KEINE Breaking Changes ohne Migration
- Bei Unsicherheit über eine API: Docs lesen, nicht raten
- Korrektheit > Performance > Lesbarkeit

## Domain-Kontext
[Komprimierter Domain-Kontext, max 500 Wörter]

## Framework-Referenz: AI Value Stream Transformer
[Komprimierter Framework-Digest — siehe Abschnitt 5]

## Weiterführende Dokumentation
Für Details siehe:
- `.context/conventions/` — Code-Style, Architektur, Commits
- `.context/frameworks/` — Framework-Referenzen
- `.context/domain/` — Business-Glossar
- `.context/security/` — Compliance & Datenschutz
- `docs/` — Projektdokumentation
```

### ② .context/ — Shared Knowledge Base

Hier liegt das Detail-Wissen, das Agents bei Bedarf nachlesen können. Der Vorteil: Diese Dateien sind tool-agnostisch und werden von allen Agents gelesen, wenn sie darauf verwiesen werden.

**Wichtig:** Der komprimierte Digest in AGENTS.md reicht für die meisten Aufgaben. Die .context/-Dateien sind für Deep Dives.

### ③ CLAUDE.md — Claude Code Bridge

```markdown
# CLAUDE.md

# Importiere die zentrale Wissensbasis
@AGENTS.md

# Claude-spezifische Ergänzungen (nur was NUR für Claude relevant ist)

## Bevorzugtes Verhalten
- Antworte auf Deutsch, Code-Kommentare auf Englisch
- Bei komplexen Änderungen: Erst Plan zeigen, dann umsetzen
- Nutze `todowrite` für mehrstufige Tasks

## MCP Server
- [Falls konfiguriert: Welche MCP Server verfügbar sind]

## Projekt-spezifische Commands
- `/test` → `flutter test`
- `/lint` → `flutter analyze`
- `/build` → `flutter build apk --release`
```

**Erklärung:** Der `@AGENTS.md`-Import lädt den gesamten Inhalt von AGENTS.md in Claude Codes Kontext. Keine Kopie, keine Divergenz. Claude-spezifische Dinge (wie MCP-Server oder Slash-Commands) stehen nur hier.

### ④ .github/copilot-instructions.md — GitHub Copilot Bridge

```markdown
# GitHub Copilot Instructions

<!-- Copilot liest auch AGENTS.md automatisch, wenn es im Root liegt. -->
<!-- Diese Datei enthält NUR Copilot-spezifische Ergänzungen. -->

Dieses Projekt verwendet die Konventionen aus AGENTS.md im Projekt-Root.
Lies AGENTS.md für Architektur, Tech Stack und Konventionen.

## Copilot-spezifisch
- Generiere immer auch Unit Tests bei neuen Funktionen
- Bevorzuge explizite Typen statt `var` / `dynamic`
- Bei PR-Reviews: Prüfe gegen die Regeln in AGENTS.md
```

**Optional — Path-spezifische Instructions** (Copilot-exklusives Feature):

```markdown
<!-- .github/instructions/flutter-widgets.instructions.md -->
---
applyTo: "lib/features/**/widgets/**"
---
Für Widget-Dateien in diesem Projekt:
- Jedes Widget hat einen eigenen Test in `test/features/**/widgets/`
- Verwende `const` Konstruktoren wo möglich
- Extrahiere Widgets ab 80 Zeilen
```

### ⑤ GEMINI.md — Gemini Bridge (optional)

```markdown
# GEMINI.md

Dieses Projekt verwendet AGENTS.md als zentrale Wissensbasis.
Lies AGENTS.md für alle Projekt-Konventionen.

## Gemini-spezifisch
- Bevorzuge ausführliche Erklärungen bei Architektur-Entscheidungen
- Bei Code Reviews: Fokus auf Sicherheit und Performance
```

**Hinweis:** Gemini liest AGENTS.md automatisch (auto-scan). GEMINI.md hat Vorrang bei Konflikten, sollte aber minimal sein.

### ⑥ .clinerules/main.md — Cline Bridge

```markdown
# Cline Project Rules

## Zentrale Wissensbasis
Alle Konventionen und Architektur-Entscheidungen sind in AGENTS.md definiert.
Lies AGENTS.md vor jeder Aufgabe.

## Cline-spezifisches Verhalten
- Wechsle in den Plan-Modus bei Tasks > 3 Dateien
- Frage nach Bestätigung vor destruktiven Operationen
- Erstelle einen Checkpoint vor großen Refactorings

## Validierung
- Nach jeder Änderung: `flutter test` ausführen
- Linter muss clean sein: `flutter analyze`
```

**Hinweis:** Cline hat kein natives AGENTS.md-Support (Feature Request #5033 offen). Daher muss hier explizit auf AGENTS.md verwiesen werden. Cline injiziert .clinerules direkt in den System Prompt — dadurch ist die Anweisung "Lies AGENTS.md" zuverlässiger als bei Tools, die Instructions optional behandeln.

---

## 5. Framework-Wissen als persistenten Kontext einbetten

### Das Vercel-Pattern adaptiert

Vercel komprimiert 40KB Next.js-Docs auf 8KB mit einem Pipe-delimited Index. Für das AI Value Stream Transformer Framework adaptieren wir dieses Pattern:

### Schritt 1: Framework-Digest erstellen (für AGENTS.md)

Dieser komprimierte Block kommt direkt in AGENTS.md und ist damit bei JEDEM Agent-Turn im Kontext:

```markdown
## Framework-Referenz: AI Value Stream Transformer v1.0

> IMPORTANT: Nutze dieses Framework-Wissen als Referenz bei allen Aufgaben,
> die AI-Transformation, Change Management oder SDLC-Optimierung betreffen.
> Bevorzuge dieses Wissen gegenüber allgemeinem Trainingswissen zum Thema.

### Kern-Architektur
5 gleichzeitig aktive Dimensionen (nicht sequenziell):
D1-Assessment|D2-TechEnablement|D3-ProcessIntegration|D4-HumanChange|D5-Governance

### THASC Maturity Model (5 Dimensionen × 5 Stufen)
T-TechnicalEnablement|H-HumanCapability|A-Adoption&Usage|S-SystemicIntegration|C-CulturalReadiness
Stufen: 1-Exploring→2-Experimenting→3-Embedding→4-Scaling→5-Evolving

### KPI-Schichten
L1-DORA(DeployFreq,LeadTime,ChangeFailRate,MTTR)
L2-THASC(je5Metriken,QuartalsweiserPulseCheck,15min)
L3-BusinessImpact(Aggregation→Velocity,TTM,Qualität,Zufriedenheit)

### Iterationsmodell
4-Wochen-Zyklen|ReadinessGate(Erweitern/Vertiefen/Konsolidieren)|24W-Regelzeitraum

### AI Adoption Team (nach Kotter 8 Accelerators)
Rollen: AITransformationManager(orchestriert)|TechLead(Infrastruktur)|
ChangeAgent(Menschen)|Champion(TeamMultiplikator)|Sponsor(Entscheider)

### Kern-Differenzierung
- Value Stream First (nicht Tool First)
- Human-Centric Change gleichberechtigt mit Tech
- Iterativ statt sequenziell (alle 5 Dim. parallel)
- SDLC-Abdeckung (nicht nur Coding)

### Detail-Dokumentation
→ .context/frameworks/ai-value-stream-transformer.md (Vollversion)
→ Originaldokument: ai-value-stream-transformer-framework.md
```

**Größe:** ~1.2KB komprimiert. Passt problemlos in jedes Context Window und wird von keinem Tool als "zu groß" abgeschnitten.

### Schritt 2: Vollversion in .context/ ablegen

Die vollständige Framework-Dokumentation (das Markdown-File aus unserem anderen Chat) kommt nach `.context/frameworks/ai-value-stream-transformer.md`. Agents können dort nachschlagen, wenn der Digest nicht ausreicht.

### Schritt 3: Kontextuelle Aktivierung

Der Digest in AGENTS.md ist **immer** da. Aber wann wird er aktiv genutzt?

**Automatisch relevant bei:**
- Jede Erwähnung von "AI Transformation", "THASC", "Maturity", "Adoption"
- Aufgaben rund um Change Management, SDLC-Optimierung
- Erstellung von Präsentationen, Dokumenten, Workshops zum Thema

**Nicht relevant bei:**
- Reines Feature-Development (Flutter Widget bauen)
- Bug Fixing
- Infrastruktur-Tasks

Die Formulierung `IMPORTANT: Nutze dieses Framework-Wissen als Referenz bei allen Aufgaben, die AI-Transformation betreffen` gibt dem Agent die Entscheidungshilfe, ohne ihn bei irrelevanten Tasks zu belasten.

---

## 6. Synchronisations-Strategie

### Option A: Symlinks (empfohlen für lokale Entwicklung)

```bash
# Setup-Script: setup-agent-instructions.sh
#!/bin/bash

# AGENTS.md ist die Source of Truth — keine Symlinks nötig, liegt im Root

# Claude Code: Import statt Symlink (CLAUDE.md referenziert via @AGENTS.md)
# → CLAUDE.md manuell pflegen, enthält nur @AGENTS.md + Claude-spezifisches

# Copilot: Liest AGENTS.md nativ — .github/copilot-instructions.md nur für Extras

# Gemini: Liest AGENTS.md nativ — GEMINI.md nur für Extras

# Cline: Kein nativer Support
# → .clinerules/main.md manuell pflegen mit Verweis auf AGENTS.md

echo "✅ Agent instructions are configured."
echo "📄 Primary source: AGENTS.md"
echo "🔗 Bridges: CLAUDE.md, .github/copilot-instructions.md, GEMINI.md, .clinerules/main.md"
```

### Option B: Git Pre-Commit Hook (für Team-Nutzung)

```bash
#!/bin/bash
# .git/hooks/pre-commit — prüft AGENTS.md-Konsistenz

# Prüfe ob Bridge-Dateien noch auf AGENTS.md verweisen
for bridge in "CLAUDE.md" ".github/copilot-instructions.md" "GEMINI.md" ".clinerules/main.md"; do
    if [ -f "$bridge" ]; then
        if ! grep -q "AGENTS.md" "$bridge"; then
            echo "⚠️  WARNING: $bridge referenziert AGENTS.md nicht mehr!"
        fi
    fi
done
```

### Option C: Makefile / Task Runner

```makefile
# Makefile
.PHONY: sync-instructions validate-instructions

validate-instructions:
	@echo "Prüfe Agent Instructions Konsistenz..."
	@test -f AGENTS.md || (echo "❌ AGENTS.md fehlt!" && exit 1)
	@grep -q "@AGENTS.md" CLAUDE.md 2>/dev/null || echo "⚠️  CLAUDE.md: @AGENTS.md Import fehlt"
	@grep -q "AGENTS.md" .github/copilot-instructions.md 2>/dev/null || echo "⚠️  Copilot: AGENTS.md Verweis fehlt"
	@echo "✅ Validierung abgeschlossen"
```

---

## 7. Wartung & Evolution

### Was wohin gehört — Entscheidungsbaum

```
Neue Instruction hinzufügen?
│
├─ Gilt für ALLE Agents? ──────────→ AGENTS.md
│
├─ Gilt nur für EINEN Agent? ──────→ Jeweilige Bridge-Datei
│   (z.B. MCP-Server → CLAUDE.md)
│
├─ Ist es Detail-Wissen? ─────────→ .context/[kategorie]/[datei].md
│   (z.B. vollständiges ADR)         + Komprimierte Referenz in AGENTS.md
│
└─ Ist es pfad-spezifisch? ───────→ .github/instructions/[name].instructions.md
    (z.B. Widget-Konventionen)        (Copilot-exklusiv, andere Agents: in .context/)
```

### Regelmäßige Reviews

- **Monatlich:** Sind alle Bridge-Dateien noch konsistent?
- **Bei jedem neuen Tool:** Neue Bridge-Datei anlegen
- **Bei Framework-Updates:** Digest in AGENTS.md aktualisieren
- **Instruction Count prüfen:** Unter 50 bleiben (Sättigungsgrenze)

### Versionierung

Alle Instruction-Dateien gehören ins Git. Änderungen an AGENTS.md sollten in Commit Messages erklärt werden, da sie das Verhalten aller Agents beeinflussen.

---

## 8. Bekannte Einschränkungen & Workarounds

### Claude Code: Relevanz-Filterung
Claude Code kann CLAUDE.md-Inhalte ignorieren, wenn es sie als irrelevant einstuft. Der System-Prompt enthält: "this context may or may not be relevant to your tasks."

**Workaround:** Framework-Digest knapp halten und mit `IMPORTANT:`-Prefix versehen. Bei Framework-relevanten Tasks explizit referenzieren: "Nutze den AI Value Stream Transformer Kontext aus AGENTS.md".

### Cline: Kein AGENTS.md-Support
Feature Request #5033 ist offen. Bis dahin muss .clinerules/main.md den Verweis "Lies AGENTS.md" enthalten.

**Workaround:** Da Cline .clinerules direkt in den System Prompt injiziert, ist der explizite Verweis relativ zuverlässig. Alternativ: Kern-Instructions aus AGENTS.md nach .clinerules/main.md kopieren (akzeptierte Redundanz für ein Test-Tool).

### Context Window Limits bei langen Sessions
Alle Agents verlieren über lange Sessions den Bezug zu frühen Instructions ("AI Drift").

**Workaround:** Bei langen Sessions periodisch referenzieren: "Beachte die Konventionen aus AGENTS.md". Windsurf nennt das "Contextual Refresher" — funktioniert bei allen Agents.

### GitHub Copilot: Keine @-Imports
Copilot kann keine externen Dateien per Import laden. Es liest AGENTS.md und seine eigenen Instructions-Dateien.

**Workaround:** Der Framework-Digest muss in AGENTS.md selbst stehen (nicht nur als Verweis). Das ist ohnehin die empfohlene Architektur.

---

## 9. Checkliste für die Einrichtung

- [ ] AGENTS.md im Projekt-Root erstellen mit allen universellen Instructions
- [ ] Framework-Digest (komprimiert, ~1-2KB) in AGENTS.md einbetten
- [ ] Vollversion nach `.context/frameworks/` ablegen
- [ ] CLAUDE.md erstellen mit `@AGENTS.md` Import + Claude-spezifisches
- [ ] `.github/copilot-instructions.md` erstellen mit AGENTS.md-Verweis + Copilot-spezifisches
- [ ] GEMINI.md erstellen (minimal, Gemini liest AGENTS.md nativ)
- [ ] `.clinerules/main.md` erstellen mit explizitem AGENTS.md-Verweis
- [ ] Alle Dateien ins Git committen
- [ ] Validierungs-Script einrichten (Pre-Commit Hook oder Makefile)
- [ ] Team briefen: "AGENTS.md ist die Source of Truth"

---

## 10. Zusammenfassung

```
                    ┌─────────────┐
                    │  AGENTS.md  │ ← Single Source of Truth
                    │  (+ Digest) │    Universelle Instructions
                    └──────┬──────┘    + Framework-Digest
                           │
              ┌────────────┼────────────┐
              │            │            │
        ┌─────┴─────┐ ┌───┴────┐ ┌────┴─────┐
        │ CLAUDE.md  │ │GEMINI  │ │.clinerules│
        │ @AGENTS.md │ │  .md   │ │ /main.md  │
        │ +spezif.   │ │+spezif.│ │ +spezif.  │
        └────────────┘ └────────┘ └───────────┘
              │
    ┌─────────┴──────────┐
    │.github/copilot-    │
    │instructions.md     │
    │+spezif. +path-rules│
    └────────────────────┘

    ┌──────────────────────────────┐
    │        .context/             │ ← Shared Detail-Wissen
    │  frameworks/ conventions/    │    (On-Demand, nicht immer
    │  domain/     security/       │     im Kontext)
    └──────────────────────────────┘
```

**Kernprinzip:** AGENTS.md enthält alles Universelle (inkl. komprimiertem Framework-Wissen). Bridge-Dateien enthalten nur `@import` / Verweis + tool-spezifische Ergänzungen. Detail-Wissen liegt in `.context/` für On-Demand-Zugriff.
