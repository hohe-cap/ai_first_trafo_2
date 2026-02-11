# Übersicht: Wie AI-Coding-Agenten Instructions erhalten

**Stand: Februar 2026 | Web-Recherche-basiert**

---

## 1. Übersicht der Instruction-Dateien nach Tool

| Tool | Primäre Datei(en) | Speicherort | AGENTS.md Support |
|---|---|---|---|
| **Claude Code** | `CLAUDE.md` | Projekt-Root, `~/.claude/CLAUDE.md` (global), `.claude/rules/` | Via `@AGENTS.md` Import |
| **Cursor** | `.cursor/rules/*.mdc` | Projekt `.cursor/rules/`, Global in Settings | Ja, nativ |
| **GitHub Copilot** | `.github/copilot-instructions.md`, `.github/instructions/*.instructions.md` | `.github/`-Verzeichnis | Ja (AGENTS.md) |
| **OpenAI Codex** | `AGENTS.md`, `AGENTS.override.md` | Projekt-Root, `~/.codex/AGENTS.md` (global), hierarchisch | Ja (ist der Standard) |
| **Cline** | `.clinerules/*.md` oder `.clinerules` (einzelne Datei) | Projekt-Root, globales Verzeichnis | Feature Request offen |
| **Continue.dev** | `.continue/rules/*.md`, `.continuerules` | `.continue/rules/`, Config-YAML | Feature Request offen |
| **Windsurf** | `.windsurf/rules/*.md`, `.windsurfrules` (legacy), `global_rules.md` | Projekt-Root, Global | Ja, nativ |
| **Gemini (CLI/IDE)** | `GEMINI.md`, `AGENTS.md` | Projekt-Root, hierarchisch | Ja, nativ (GEMINI.md hat Vorrang) |
| **Aider** | `CONVENTIONS.md` | Projekt-Root | Nein (eigener Standard) |
| **Sourcegraph Cody** | `.sourcegraph/*.rule.md` | `.sourcegraph/`-Verzeichnis | Unklar |
| **Amp** | `AGENT.md` | Projekt-Root | Äquivalent |

---

## 2. Detail-Analyse pro Tool

### 2.1 Claude Code

**Instruction-Hierarchie (von breit nach spezifisch):**

1. **System Prompt** (~50 Einzelanweisungen, vom System vorgegeben)
2. **Globale CLAUDE.md** (`~/.claude/CLAUDE.md`) — persönliche Präferenzen für alle Projekte
3. **Projekt CLAUDE.md** (im Repository-Root) — projektspezifische Regeln
4. **Verzeichnis-CLAUDE.md** (nested) — Bereichs-spezifische Anweisungen
5. **`.claude/rules/`** — modulare Rule-Dateien
6. **Skills** (`SKILL.md` in `.claude/skills/`) — on-demand geladene Expertise
7. **Slash Commands** (`.claude/commands/*.md`) — wiederverwendbare Prompt-Templates
8. **Subagents** — delegierte Teilaufgaben mit eigenem Kontext

**Wie sicher werden sie genutzt?**

- **Kritisch:** Claude Code injiziert ein `<system-reminder>` Tag, das explizit sagt: *"this context may or may not be relevant to your tasks. You should not respond to this context unless it is highly relevant."* Das bedeutet: Claude **kann und wird** CLAUDE.md-Inhalte ignorieren, wenn es sie als irrelevant erachtet.
- **Befund von HumanLayer:** Mit steigender Anzahl von Instructions sinkt die Befolgungsqualität **gleichmäßig über alle Anweisungen** — nicht nur die neuen werden ignoriert, sondern alle.
- **Primacy/Recency Bias:** Anweisungen am Anfang (System Prompt) und am Ende (letzte User-Nachricht) werden bevorzugt. Mittlere Inhalte leiden.
- **Empfehlung:** So wenige, universell anwendbare Regeln wie möglich in CLAUDE.md. Task-spezifische Infos in separate Dateien auslagern und per `@`-Import referenzieren.

**Besonderheit:** Sessions haben kein Gedächtnis. `CLAUDE.local.md` und Session Memory bieten begrenztes Lernen über Sessions hinweg.

---

### 2.2 Cursor

**Instruction-Hierarchie:**

1. **User Rules** (Global, in Cursor Settings > Rules for AI)
2. **Project Rules** (`.cursor/rules/*.mdc`) — mit Frontmatter-Metadaten
3. **Legacy `.cursorrules`** (im Root, wird deprecated)
4. **AGENTS.md** — nativ unterstützt
5. **Memories** — automatisch generierte Kontext-Erinnerungen

**Rule-Typen in `.mdc` Dateien:**

- **Always Apply** (`alwaysApply: true`): Wird immer geladen
- **Auto Attached**: Aktiviert per Glob-Pattern wenn passende Dateien referenziert werden
- **Agent Requested**: Agent entscheidet basierend auf Beschreibung, ob die Regel geladen wird
- **Manual**: Nur bei expliziter Nutzung

**Wie sicher werden sie genutzt?**

- **Erfahrungsberichte sind gemischt:** Viele Entwickler berichten, dass Cursor-Rules "inkonsistent oder gar nicht" befolgt werden (Medium-Artikel von März 2025).
- Der Agent sieht die Rules als `<available_instruction_rules>` in seinem Kontext und **entscheidet selbst**, welche relevant sind.
- `alwaysApply: true` bietet die höchste Zuverlässigkeit, frisst aber Kontext-Budget.
- Die `/Generate Cursor Rules` Funktion kann Regeln aus Conversations ableiten.

---

### 2.3 GitHub Copilot

**Instruction-Hierarchie:**

1. **Personal Instructions** (höchste Priorität, pro Nutzer)
2. **Repository Instructions** (`.github/copilot-instructions.md`)
3. **Path-specific Instructions** (`.github/instructions/*.instructions.md` mit `applyTo`-Frontmatter)
4. **Organization Instructions** (niedrigste Priorität)
5. **Chat Modes** (`.github/chatmodes/`) — Persona-Definitionen
6. **Prompt Files** (`.github/prompts/`) — wiederverwendbare Task-Prompts

**Wie sicher werden sie genutzt?**

- **Relativ transparent:** Instructions werden als "Reference" in Chat-Antworten angezeigt — man kann verifizieren, ob sie geladen wurden.
- **Coding Agent:** Beim ersten PR in einem Repository bietet Copilot an, automatisch Instructions zu generieren — das ist ein starkes Signal, dass GitHub selbst den Mehrwert als hoch einstuft.
- **Automatische Onboarding-Instruktion:** Der Coding Agent erhält ein internes System-Prompt, das ihn anweist, AGENTS.md gründlich zu lesen und zu befolgen.
- **Path-specific Instructions** sind ein Alleinstellungsmerkmal — verschiedene Regeln für verschiedene Codebereiche mit Glob-Patterns.

---

### 2.4 OpenAI Codex

**Instruction-Hierarchie:**

1. **System Message** (fest, veröffentlicht von OpenAI)
2. **Globale AGENTS.md/AGENTS.override.md** (`~/.codex/`)
3. **Projekt AGENTS.md** (Repository-Root)
4. **Verschachtelte AGENTS.md** (Verzeichnis-Hierarchie, Root-to-Leaf)
5. **Skills** (`SKILL.md` in `.codex/skills/` oder `.agents/skills/`)
6. **Config** (`~/.codex/config.toml`)

**Wie sicher werden sie genutzt?**

- **Stärkstes Compliance-Modell:** Das System-Prompt enthält explizit: *"For every file you touch in the final patch, you MUST obey instructions in any AGENTS.md file whose scope includes that file."*
- **Override-Mechanismus:** `AGENTS.override.md` überschreibt `AGENTS.md` — nützlich für temporäre Änderungen.
- **Limit:** `project_doc_max_bytes` (Standard 32 KiB). Bei Überschreitung wird abgeschnitten.
- **Priorität:** Direkte User-Prompts > AGENTS.md Anweisungen.
- **Codex-1/GPT-5-Codex** wurde explizit per Reinforcement Learning auf Instruction-Following trainiert.

---

### 2.5 Cline

**Instruction-Hierarchie:**

1. **System Prompt** (inkl. Tool-Beschreibungen)
2. **Global Rules** (globales `.clinerules/`-Verzeichnis)
3. **Workspace Rules** (`.clinerules/*.md` oder einzelne `.clinerules` Datei)
4. **Remote Rules** (Organisations-API für Enterprise)
5. **Externe Rules** (importiert von Cursor, Windsurf via Toggle)

**Wie sicher werden sie genutzt?**

- **Direkte System-Prompt-Integration:** Rules werden als Teil des System Prompts injiziert — nicht als optionaler Kontext.
- **Toggleable:** Regeln können im UI an/ausgeschaltet werden — bietet Kontrolle, aber auch Risiko des Vergessens.
- **Plan/Act Mode:** Einzigartiges Zwei-Phasen-Modell. Plan-Mode ist read-only und kann Regeln besser berücksichtigen, bevor Aktionen erfolgen.
- **Human-in-the-Loop:** Jede Dateiänderung und jeder Terminal-Befehl braucht Genehmigung — das kompensiert teilweise fehlende Rule-Compliance.
- **Arize AI Studie:** Durch Optimierung der `.clinerules` konnte die Accuracy von Cline auf SWE-bench um 10-15% gesteigert werden — das zeigt, wie stark die Wirkung guter Rules ist.

---

### 2.6 Continue.dev

**Instruction-Hierarchie:**

1. **Base System Message** (Standard-Chat-Instructions)
2. **Hub Rules** (Continue Hub, cloud-basiert)
3. **Local Rules** (`.continue/rules/*.md`)
4. **Legacy `.continuerules`** (Projekt-Root)
5. **Config YAML** (`rules:` Sektion in `config.yaml`)

**Wie sicher werden sie genutzt?**

- **Bekannte Probleme:** GitHub Issue #6905 (Juli 2025) — "Rules are completely ignored" — Rules wurden nicht in den System Prompt eingefügt.
- **Dokumentations-Chaos:** Issue #6076 — Docs stimmen nicht mit Extension-Verhalten überein.
- **AGENTS.md nicht nativ unterstützt** (Stand: Feature Request #6716 von Juli 2025).
- **Risiko bei Multi-Folder-Workspaces:** Issue #4090 — Rules aus ALLEN Folders werden geladen, auch irrelevante.
- **Fazit:** Continue ist im Rules-Bereich weniger ausgereift als die Konkurrenz. Die Open-Source-Natur erlaubt aber Community-Fixes.

---

### 2.7 Windsurf

**Instruction-Hierarchie:**

1. **Global Rules** (`global_rules.md`, erreichbar via "Manage memories")
2. **Project Rules** (`.windsurf/rules/*.md` oder legacy `.windsurfrules`)
3. **AGENTS.md** (nativ unterstützt, hierarchisch)
4. **Memories** (automatisch gelernte Präferenzen aus Konversationen)
5. **Codemaps** (strukturelle Codebase-Informationen)

**Wie sicher werden sie genutzt?**

- **Memories-System:** Windsurf speichert automatisch Kontextinformationen über Projekte und Nutzerverhalten — kann aber auch fehlleiten wenn veraltet.
- **Cascade-Agent:** Hat verschiedene Modi (Write, Chat, Legacy) die Rules unterschiedlich intensiv nutzen.
- **Kombination mit AGENTS.md:** Gute hierarchische Unterstützung mit Verzeichnis-spezifischen Anweisungen.
- **Kritischer Punkt:** "AI Drift" — über längere Sessions werden Instructions zunehmend vergessen. Windsurf empfiehlt "contextual refresher" in Prompts.

---

### 2.8 Gemini (CLI / Android Studio / IDEs)

**Instruction-Hierarchie:**

1. **GEMINI.md** (hat Vorrang über AGENTS.md wenn im selben Verzeichnis)
2. **AGENTS.md** (hierarchisch, von Root nach Working Directory)
3. **`@`-Imports** (Referenzen auf externe Markdown-Dateien in AGENTS.md)
4. **Gems** (Gemini App: gespeicherte System-Prompts mit Persona)
5. **Google Jules** (`JULES.md` — für den Cloud-Coding-Agent)

**Wie sicher werden sie genutzt?**

- **Automatisches Preamble:** Gemini scannt das aktuelle Verzeichnis und alle Elternverzeichnisse nach AGENTS.md und fügt deren Inhalt als Preamble an jeden Prompt an.
- **Context Drawer:** In Android Studio können AGENTS.md-Dateien für bestimmte Queries explizit an/abgewählt werden — hohe Transparenz.
- **Kritik aus Praxis-Tests:** Cambridge Software Crafters Experiment (Juni 2025) — Gemini war "reactive and not proactive", erklärte sein Reasoning nicht und ignorierte teilweise Windsurf-Rules.

---

## 3. Der AGENTS.md Standard — Konvergenz-Trend

Es gibt einen klaren Trend zur Vereinheitlichung:

- **Bereits nativ unterstützt:** Codex, Cursor, Windsurf, Gemini, GitHub Copilot (zusätzlich zu eigenen Formaten)
- **Per Import/Symlink:** Claude Code (`@AGENTS.md` in CLAUDE.md)
- **Feature Requests offen:** Cline (#5033), Continue (#6716)
- **Adoption:** Über 40.000 Open-Source-Projekte nutzen bereits AGENTS.md

**Vorteile:** Ein File, das alle Tools lesen können. Schluss mit redundanten Konfigurationen.

**Kritischer Blick:** AGENTS.md ist kein "Standard" im formalen Sinne — es gibt keine Spezifikation, keine Governance-Struktur, keine Versionierung. Es ist eher eine Konvention, die durch Adoption entsteht. Die Frage ist, ob Tools wie Claude Code jemals ihren proprietären Ansatz aufgeben werden, oder ob die Fragmentierung bestehen bleibt.

---

## 4. Wie zuverlässig werden Instructions tatsächlich befolgt?

### Grundlegende Probleme (toolübergreifend)

| Problem | Beschreibung |
|---|---|
| **Instruction Saturation** | Ab ~50 Anweisungen sinkt die Befolgungsqualität gleichmäßig (HumanLayer Analyse) |
| **Primacy/Recency Bias** | Anweisungen am Anfang und Ende des Kontexts werden bevorzugt |
| **Relevanz-Filtering** | Einige Tools (Claude Code) lassen das Modell selbst entscheiden, ob Instructions relevant sind |
| **Context Window Limits** | Bei langen Sessions gehen frühere Instructions verloren |
| **AI Drift** | Über viele Turns hinweg driften Agenten von initialen Anweisungen ab |
| **Probabilistisch** | LLMs sind nicht deterministisch — gleiche Instructions können unterschiedliche Ergebnisse liefern |

### Zuverlässigkeits-Ranking (subjektive Einschätzung basierend auf Recherche)

| Rang | Tool | Instruction-Compliance | Begründung |
|---|---|---|---|
| 1 | **OpenAI Codex** | Hoch | Explizites MUST im System-Prompt, RL-Training auf Instruction-Following |
| 2 | **GitHub Copilot** | Mittel-Hoch | Transparentes Referenz-System, Automatic Onboarding |
| 3 | **Claude Code** | Mittel | Starkes Modell, aber Relevanz-Filtering kann Instructions überspringen |
| 4 | **Cline** | Mittel | Direkte System-Prompt-Injektion, aber keine Garantie |
| 5 | **Cursor** | Mittel-Niedrig | Häufige Berichte über ignorierte Rules, Agent-eigene Relevanz-Entscheidung |
| 6 | **Windsurf** | Mittel-Niedrig | AI Drift Probleme, Memory kann fehlleiten |
| 7 | **Gemini** | Mittel-Niedrig | Automatisches Preamble, aber wenig Feedback-Loop |
| 8 | **Continue.dev** | Niedrig | Dokumentierte Bugs, Rules werden teilweise komplett ignoriert |

**Wichtig:** Diese Einschätzung basiert auf Stand Februar 2026 und kann sich schnell ändern. Die Qualität hängt stark vom verwendeten Basis-Modell ab.

---

## 5. Kategorien von Instructions

### 5.1 Was du bereits abdeckst

**Inhaltlich-fachliche Information:**
- Projekt-Architektur und -Struktur
- Tech-Stack und Dependencies
- Build/Test/Deploy-Commands
- API-Konventionen und Schnittstellen
- Business-Logik und Domain-Wissen

**Meta-Informationen (Vorgehensweise):**
- Code-Style Guidelines
- Naming Conventions
- Design Principles (DRY, SOLID, etc.)
- Commit-Konventionen
- Review-Kriterien

### 5.2 Was du möglicherweise noch nicht berücksichtigst

| Kategorie | Beispiele | Warum relevant? |
|---|---|---|
| **Anti-Patterns und Verbote** | "Nutze NIEMALS ORM X", "Keine default exports", "Keine `any` Types" | Negativregeln sind oft wirksamer als positive |
| **Tooling-Anweisungen für den Agenten selbst** | "Laufe vor jedem Commit `npm test`", "Nutze den MCP-Server für Shadcn" | Der Agent braucht Wissen über seine eigenen Tools |
| **Validierungs-Checks** | "Führe nach jeder Änderung das Linter-Script aus" | Codex befolgt programmatische Checks besonders zuverlässig |
| **Error-Recovery Strategien** | "Wenn Build fehlschlägt: erst Dependencies prüfen, dann Cache löschen" | Reduziert Endlos-Schleifen bei Fehlern |
| **Sicherheits-Constraints** | "Committe keine .env Dateien", "API-Keys nie hardcoden" | Besonders wichtig bei autonomen Agenten |
| **Kontextgrößen-Management** | "Lese nur die relevanten Dateien", "Fasse dich kurz" | Verhindert Kontext-Overload |
| **Persona / Mindset** | "Du bist ein erfahrener Senior Developer", "Erkläre dein Reasoning" | Beeinflusst Qualität und Nachvollziehbarkeit |
| **Collaboration-Regeln** | "Erstelle PRs mit klarer Beschreibung", "Tagge relevante Reviewer" | Für Integration in Team-Workflows |
| **Feedback-Loops** | "Wenn du dir unsicher bist, frage nach", "Zeige immer zuerst deinen Plan" | Verhindert voreiliges Handeln |
| **Progressive Disclosure** | "Lies zuerst SKILL.md bevor du anfängst", "Prüfe docs/ für Kontext" | Effizientes Kontext-Loading |
| **Rollback/Checkpoint-Regeln** | "Erstelle vor größeren Änderungen einen Checkpoint" | Sicherheitsnetz bei autonomen Operationen |
| **Epistemische Regeln** | "Wenn du dir bei einer API unsicher bist, schlage in der Doku nach statt zu raten" | Reduziert Halluzinationen |
| **Priorisierungs-Hinweise** | "Korrektheit > Performance > Lesbarkeit" | Hilft bei Trade-off-Entscheidungen |
| **Team-Wissen / Tribal Knowledge** | "Das Auth-Modul hat einen Workaround für Bug X" | Kontextwissen, das nur im Team existiert |
| **Compliance/Regulatory** | "DSGVO-Konformität beachten", "Keine externen Services ohne Genehmigung" | Besonders relevant für DRV-Bund-Kontext |
| **Konversations-/Interaktions-Stil** | "Antworte auf Deutsch", "Gib immer Alternativen an" | Meta-Steuerung des Dialogs |
| **Architektur-Entscheidungs-Records (ADRs)** | "Dokumentiere Architekturentscheidungen in docs/adr/" | Nachvollziehbarkeit für das Team |
| **Abhängigkeits-Regeln** | "Füge keine neuen Dependencies ohne Rücksprache hinzu" | Kontrolle über Dependency-Bloat |

---

## 6. Architektur-Patterns für Instruction-Management

### Pattern 1: Pointer statt Kopie (Claude Code empfohlen)
```
CLAUDE.md (kurz, nur Universelles)
├── @docs/architecture.md
├── @docs/testing.md
└── @docs/conventions.md
```
Vorteil: CLAUDE.md bleibt schlank, Kontext wird on-demand geladen.

### Pattern 2: Hierarchische Vererbung (Codex/Gemini)
```
~/.codex/AGENTS.md          (Global: persönliche Präferenzen)
├── /repo/AGENTS.md          (Projekt: gemeinsame Standards)
│   ├── /repo/backend/AGENTS.md  (Backend-spezifisch)
│   └── /repo/frontend/AGENTS.md (Frontend-spezifisch)
```
Vorteil: Spezifische Override-Möglichkeit. Root-to-Leaf Reihenfolge.

### Pattern 3: Single Source of Truth + Symlinks
```
AGENTS.md                    (primäre Quelle)
├── CLAUDE.md → symlink      (für Claude Code)
├── .cursor/rules/ → symlink (für Cursor)
└── .windsurf/rules/ → symlink (für Windsurf)
```
Vorteil: Ein File pflegen, alle Tools bedienen.

### Pattern 4: Skill-basiertes Progressive Disclosure
```
.claude/skills/
├── security-review/SKILL.md
├── database-migration/SKILL.md
└── code-review/SKILL.md
```
Vorteil: Agent lädt nur was er braucht. Spart Kontext-Budget.

---

## 7. Empfehlungen

1. **Starte mit AGENTS.md** als universelles Format und ergänze tool-spezifische Dateien per Symlink oder Import.

2. **Weniger ist mehr:** Halte die Root-Instruction-Datei auf maximal 15-20 Kernanweisungen. Alles andere in referenzierte Dateien.

3. **Validierbarkeit einbauen:** Wo immer möglich, ergänze Instructions durch deterministische Checks (Linter, Tests, CI-Pipeline). LLMs folgen Regeln probabilistisch — Linter folgen deterministisch.

4. **Feedback-Loops etablieren:** Regelmäßig prüfen, ob Instructions befolgt werden. Tools wie Arize AI bieten Optimierungs-Algorithmen für Rules.

5. **Team-Onboarding:** AGENTS.md ist nicht nur für den AI-Agenten — es ist auch ein hervorragendes Onboarding-Dokument für neue Teammitglieder.

6. **Compliance first:** Für regulierte Umgebungen: DSGVO-Constraints, Datenschutz-Anforderungen und Security-Policies gehören in die Root-Instructions.

---

*Quellen: GitHub Docs, Cursor Docs, Windsurf Docs, OpenAI Codex Docs, Cline Docs, Continue.dev Docs, HumanLayer Blog, Arize AI, layer5.io, builder.io, diverse Medium-Artikel und GitHub Issues. Recherche-Datum: 08.02.2026*
