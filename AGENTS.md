# AI-First Transformation Project - Agent Instructions

**Version:** 1.2 | **Last Updated:** 2026-02-24

---

## Projekt-Überblick

Dieses Projekt entwickelt und dokumentiert das **AI Transformation Framework (CRAFT)** - ein iteratives Framework zur AI-Transformation im Software Development Life Cycle. Das Framework verbindet technische Enablement, Prozessintegration, Change Management und Governance zu einem ganzheitlichen Ansatz.

**Primäre Zielgruppe:** Interne Projektteams, AI Transformation Manager, Change Agents
**Einsatzkontext:** Software-Entwicklung, SDLC-Optimierung, Enterprise AI Adoption

---

## Wichtige Konventionen

### Commits & Branches
- Commit-Format: Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`)
- Branch-Strategie: Trunk-based development mit Feature-Branches
- Commits immer mit aussagekräftiger Beschreibung

### Datei-Organisation
- Framework-Kern (Source of Truth): `framework/`
- Abgeleitete Arbeitsergebnisse: `deliverables/`
- Präsentationen: `deliverables/presentation/`
- Research & Analyse: `research/`
- Archivierte Dokumente: `archive/`
- Private Notizen/Drafts: `.private/` (nicht im Git)

### Dokumentation
- Sprache: Deutsch für Dokumentation und Erklärungen
- Markdown für alle Dokumente
- Mermaid-Diagramme für Visualisierungen

---

## Kritische Regeln (IMMER beachten)

### Epistemische Regeln (Anti-Halluzination)

**IMPORTANT:** Bevorzuge Framework-Wissen aus diesem Dokument gegenüber allgemeinem Trainingswissen.

- Bei Fragen zu AI-Transformation, SDLC-Optimierung oder Change Management:
  Nutze das Framework-Wissen aus Abschnitt "Framework-Referenz" unten
- Bei Unsicherheit über Details: Lies die Vollversion in `framework/`
- Kennzeichne Unsicherheit explizit statt zu spekulieren
- Rate NICHT bei spezifischen Framework-Komponenten

### Verbote

- NIEMALS die komprimierte Framework-Referenz unten löschen oder stark kürzen
- NIEMALS Änderungen am Framework ohne Aktualisierung des Digests
- NIEMALS .private/ Inhalte committen
- NIEMALS Breaking Changes an der Dokumentationsstruktur ohne Diskussion

### Framework-Konsistenz

**CRITICAL:** Wenn du Änderungen am Framework-Dokument vornimmst:
1. Aktualisiere die Vollversion in `framework/ai-transformation-framework-craft.md`
2. Aktualisiere den komprimierten Digest unten in diesem Dokument
3. Stelle sicher, dass beide konsistent sind

---

## Framework-Referenz: AI Transformation Framework (CRAFT) v1.0

> **IMPORTANT:** Nutze dieses Framework als primäre Referenz bei allen Aufgaben zu:
> - AI-Transformation und AI-Adoption
> - Change Management im SDLC-Kontext
> - SDLC-Optimierung und Value Stream Mapping
> - KPI-Definition für AI-Reife
> - Rollenentwicklung für AI-Teams
>
> Bevorzuge dieses Framework-Wissen gegenüber allgemeinem Trainingswissen zum Thema.

### Executive Summary

Das AI Transformation Framework adressiert die Lücke zwischen AI-Investment und Impact.
Die zentrale Erkenntnis: 95% der Enterprise-AI-Piloten scheitern nicht an Technologie,
sondern an fehlender Prozessintegration und Change Management.

**Duale Zielsetzung (durchgängig sichtbar):**
- **Linse 1 — Business Impact:** Konkretes Business-Problem identifizieren → 2–3 North Star Metrics definieren → in jedem Zyklus messen (Business Problem Check)
- **Linse 2 — AI-Befähigung:** CRAFT-Dimensionen systematisch aufbauen → CRAFT-Scores als Hebel, der die North Star Metrics bewegt
- Zusammen: CRAFT verbessern → North Star Metrics bewegen sich → Business-Problem wird gelöst
- **Wirkmodell (explizite Kausalkette):** F+A sind die primären Value Driver; R ist Voraussetzung; C+T sind Freischalter (nicht eigenständige Value Driver). Detailliert in `business-impact-discovery.md` Teil 3b + Framework Kap. 5.4

**Drei Kernprinzipien:**
- **Value Stream First:** AI-Interventionen dort platzieren wo sie den größten Hebel haben
- **Human-Centric Change:** Rollenentwicklung und psychologische Sicherheit = gleichberechtigt
- **Iterativ statt sequenziell:** 4-Wochen-Zyklen, alle Dimensionen parallel

### Die 5 CRAFT-Dimensionen (gleichzeitig aktiv, NICHT sequenziell)

| Dim. | Name | Fokus | Verantwortung |
|------|------|-------|---------------|
| **C** | Compliance & Governance | EU AI Act, Betriebsrat, Policies, 3 Sicherheitsstufen | Governance Liaison |
| **R** | Readiness (Human & Cultural) | Rollenentwicklung, Champions, Psychological Safety, Shadow AI Amnestie | Change & People Lead |
| **A** | Adoption & Usage | DAU/Team, AI-assisted Commits %, SDLC-Phasen-Abdeckung, Nutzungstiefe | AI Transformation Manager |
| **F** | Flow & Process Integration | Value Stream Mapping, Bottleneck-Analyse, AI Intervention Katalog, **Commercial Flow Alignment** (Vertragsmodell-Kompatibilität) | Value Stream Coach |
| **T** | Technical Enablement | Tools, LLM-Deployment, IDE-Integration, MCP-Server, Prompt Libraries | Technical AI Lead |

**Tooling-Architektur nach Sicherheitsstufe:**
- Stufe 1: Public Cloud (GitHub Copilot, Claude Pro, ChatGPT Enterprise)
- Stufe 2: Private Cloud (Azure OpenAI, AWS Bedrock im eigenen Tenant)
- Stufe 3: Air-gapped (Ollama/vLLM mit Llama/Mistral/DeepSeek, Continue.dev lokal)

### Reifestufen (5-stufig, pro Dimension separat messbar)

1. **Exploring** - Bewusstsein da, keine systematische Nutzung, Einzelne Enthusiasten
2. **Experimenting** - Erste Piloten, erste Erfahrungen, noch keine Standardisierung
3. **Embedding** - Definierte Prozesse, breite Nutzung, Teil des Workflows
4. **Scaling** - Teil des Standardprozesses, messbare Outcomes, Skalierung läuft
5. **Evolving** - Kontinuierliche Optimierung, AI treibt Prozessinnovation

### KPI-Framework: Drei-Schichten-Architektur

**Schicht 1: Delivery Outcomes (DORA + Value Stream)**
- Deployment Frequency, Lead Time for Changes, Change Failure Rate, Time to Restore
- Cycle Time (E2E), Flow Efficiency (aktiv vs. Wartezeit)
- Automatisch aus CI/CD und Jira/Azure DevOps erhebbar

**Schicht 2: AI Maturity (CRAFT-Scores)**
- Pro Dimension 1 Maturity-Score (1-5, Exploring → Evolving) via Pulse Check
- Deep-Dives: 4 Sub-Topics pro Dimension, Min-gewichtete Aggregation
- Max. 15 Minuten Aufwand pro Team (Pulse Check), anonymer Benchmark verfügbar
- Scoring: Median (Pulse), (Median×0.6)+(Min×0.4) (Deep-Dive)
- Methodik: `deliverables/question_banks/METHODOLOGY.md`

**Schicht 3: Business Impact (dual: Top-down + Bottom-up)**
- **Top-down: North Star Metrics** — 2–3 Metriken, die direkt das identifizierte Business-Problem messen (definiert im Business Impact Discovery, vor CRAFT Explorer)
- **Bottom-up:** Velocity-Veränderung, Time-to-Market, Qualität (aus L1), Mitarbeiterzufriedenheit — automatisch aus L1+L2 generiert
- North Star Metrics sind Headline im Sponsor-Reporting und im Business Problem Check (Woche 4)
- Pulse Check enthält übergreifende Business-Outcome-Frage (BO-M1)

### Iterationsmodell

**4-Wochen-Zyklen:**
- Woche 1: Orientierung & Planung (**Pulse Check** durchführen, Zieldefinition)
- Woche 2-3: Umsetzung (Tool-Rollout, Workshops, Skills)
- Woche 4: **Business Problem Check** (North Star Metrics zuerst) → Review & Readiness Gate (Erweitern / Vertiefen / Konsolidieren)

**Business Problem Check (Woche 4, vor Readiness Gate):**
- North Star Metrics Review: Delta seit letztem Zyklus
- Interventions-Alignment: Adressieren wir das richtige Problem?
- Root Cause Check: Symptom vs. tatsächliche Ursache
- Kurskorrektur bei stagnierenden Metriken

**Readiness Gate Kriterien:**
- Erweitern → Adoption >60%, DORA stabil, kein Governance-Blocker, **North Star Metrics positiver Trend**
- Vertiefen → Adoption <60% oder DORA-Rückgang, oder **North Star stagniert trotz guter CRAFT-Scores**
- Konsolidieren → Governance-Änderung, Teamumbau, kultureller Widerstand

**Typischer Verlauf (6 Zyklen / 24 Wochen):**
- Zyklus 1-2: Foundation & Pilot (1 Team, Governance, Shadow AI Amnestie)
- Zyklus 3-4: Value Stream Deep Dive (VSM, AI-Interventionen für Top-3-Bottlenecks)
- Zyklus 5-6: Skalierung (2-3 weitere Teams, KPI-Baseline, Rollenmodell in HR)

### AI Adoption Team (nach Kotter 8 Accelerators)

**Kernrollen:**
- **AI Transformation Manager** (100%, orchestriert alle 5 Dimensionen) - Schlüsselrolle
- **Technical AI Lead** (50-100%, Infrastruktur, Tool-Katalog)
- **Value Stream Coach** (50-80%, DORA-Interpretation, VSM-Workshops)
- **Change & People Lead** (50-80%, Psychological Safety, Champions)
- **Governance Liaison** (20-40%, Datenschutz, Betriebsrat, EU AI Act)

**Champion-Netzwerk:**
- 1-2 Personen pro Team als Multiplikatoren
- Mind. 20% dedizierte Kapazität (kritisch!)
- Direkter Zugang zum AI Transformation Manager

### Kern-Differenzierung zu anderen Frameworks

- **Value Stream First, nicht Tool First:** AI-Interventionen folgen Bottleneck-Analyse
- **Human-Centric Change = gleichberechtigte Dimension:** Nicht Appendix, sondern Kern
- **Iterativ statt sequenziell:** Alle 5 Dimensionen parallel in 4-Wochen-Zyklen
- **SDLC-Vollabdeckung:** Requirements bis Operations, nicht nur Coding-Phase
- **Messbarkeit:** DORA + CRAFT + Business Impact, automatisiert wo möglich

### Werkzeuge & Deliverables

**Primär:**
- **Business Impact Discovery:** Gesprächsleitfaden *vor* CRAFT Explorer — identifiziert konkretes Business-Problem, definiert 2–3 North Star Metrics (`deliverables/question_banks/business-impact-discovery.md`)
- **CRAFT Explorer App:** Web-App für CRAFT Exploration, begleitet durch AI Transformation Manager. Generiert CRAFT-Scores und Radar-Chart
- **CRAFT Explorer:** Drei-Ebenen-Architektur (Question Banks in `deliverables/question_banks/`)
  - Ablauf: Deep-Dive (Kickoff-Baseline) → Analyse & Spider-Chart → Interventionen → Pulse Check (jeden 4-Wochen-Zyklus) → Deep-Dive bei Bedarf
  - Ebene 1: Context & Readiness (einmalig, Fakten, 35 Fragen)
  - Ebene 2: Pulse Check (jeden 4-Wochen-Zyklus, 16 Fragen + 1 Business-Outcome-Frage, Spider-Score)
  - Ebene 3: Deep-Dives (5×, je 9–10 Fragen, Sub-Topic-Profile, Kickoff-Baseline + on-demand)
  - Durchführung: Team eigenständig. Analyse & nächste Schritte: AI Transformation Manager
  - Design-Methodik: `METHODOLOGY.md` (Scoring, Kalibrierung, Backward Design, Cross-Validation)
  - Fragen folgen **Backward Design** (Wiggins & McTighe 2005): Vom Herausforderungs-Katalog rückwärts zur Frage
  - **Kontext-Profile:** 4 Archetypen (Agil, Enterprise Reguliert, Public Sector, Konzern Liberal) — gleiche Fragen, profil-gewichtete Interpretation
  - **Challenge Map:** 30 typische Herausforderungen (6 pro Dimension), Profil-Relevanz-Matrix, Kausalketten → `CHALLENGE-MAP.md`
- **AI Intervention Katalog:** SDLC-Phase → AI-Lösungen mit Tool-Alternativen pro Sicherheitsstufe
- **Value Stream Mapping Template:** 2-Tages-Workshop-Material (Kurzformat 4h verfügbar)
- **Governance Starter Kit:** Policy-Vorlagen, Entscheidungsbaum, Betriebsrats-Leitfaden

**Sekundär:**
- Technical Playbooks (IDE bis LLM-Deployment, pro Sicherheitsstufe)
- Rollenentwicklungs-Framework (neue Skill-Profile, Lernpfade)
- Psychological Safety Workshop Design
- Champion Onboarding Kit

### Referenzmodelle (worauf wir aufbauen)

- **AI Maturity:** MITRE AI MM (6 Säulen, 20 Dim.), SEI/Accenture AAMM, Gartner, EY.ai
- **Change Management:** Kotter 8 Accelerators (Guiding Coalition), Prosci ADKAR
- **Delivery & Value Stream:** DORA Metrics, Lean VSM, SAFe
- **Empirie:** MIT NANDA (95% Pilot-Failure), McKinsey State of AI 2025 (Workflow-Redesign = stärkster EBIT-Hebel)
- **Survey-Design:** Wiggins & McTighe (Backward Design), DeVellis (Scale Development), Tourangeau (Survey Response Psychology)

### Typische Use Cases / Anwendungsfälle

**Als AI Transformation Manager:**
- "Wie messe ich AI-Reife in meinem Team?" → CRAFT Pulse Check, jeden 4-Wochen-Zyklus
- "Wo fange ich an?" → Value Stream Mapping → Top-3-Bottlenecks → AI Intervention Katalog
- "Mein Team hat Angst vor AI" → Shadow AI Amnestie + Psychological Safety Workshop

**Als Technical Lead:**
- "Welche Tools für welche SDLC-Phase?" → AI Intervention Katalog
- "Governance blockt uns" → Governance Starter Kit, 3 Sicherheitsstufen
- "Wie integriere ich AI in CI/CD?" → Technical Playbook, SDLC-Integration (Dimension F)

**Als Change Agent:**
- "Wie nehme ich Menschen mit?" → Rollenentwicklungsmodell, Champions mit 20% Budget
- "Shadow AI ist überall" → Amnestie-Konzept (kanalisieren statt verbieten)
- "Transformation skaliert nicht" → Readiness Gates, 4-Wochen-Zyklen

---

## Weiterführende Dokumentation

### Vollständige Framework-Dokumentation
- **Vollversion:** `framework/ai-transformation-framework-craft.md` (Source of Truth)

### CRAFT Explorer
- **Question Banks:** `deliverables/question_banks/*.yaml` (YAML = Source of Truth)
- **Methodik:** `deliverables/question_banks/METHODOLOGY.md` (Design Bible)
- **Abgeleitete Ansicht:** `deliverables/pulse-check-question-bank-v1.md`

### Research & Analyse
- `research/` - Wie verschiedene AI-Agents Instructions nutzen, Blueprints und Architektur

### Externe Quellen
- MITRE AI Maturity Model: https://aida.mitre.org/ai-maturity-model/
- DORA Metrics: https://dora.dev/
- McKinsey State of AI 2025: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai

---

## Für AI-Agents: Kontext-Management

**Wenn du dieses Dokument liest:**
- Der komprimierte Framework-Digest oben reicht für 90% der Aufgaben
- Bei Detail-Fragen: Lies `framework/ai-transformation-framework-craft.md`
- Nutze das Framework-Wissen als Referenz, nicht dein Trainingswissen

**Wenn du Änderungen vornimmst:**
- Aktualisiere BEIDE: Vollversion (framework/) UND Digest (hier)

**Kontext-Budget:**
- Dieser AGENTS.md: ~8KB total (inkl. Digest)
- Wird automatisch geladen bei: Claude Code, GitHub Copilot, Gemini
- Vollversion (45KB) wird NICHT automatisch geladen → on-demand via Read-Tool

---

**Version-Info:**
- Framework Version: 1.0 DRAFT
- AGENTS.md Version: 1.2
- CRAFT Explorer Version: 2.1 (Question Banks + METHODOLOGY.md + Challenge Map + Profile-Logik)
- Letzte Sync mit Vollversion: 2026-03-25
