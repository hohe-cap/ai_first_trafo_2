# AGENTS.md Blueprint — Vollständiges Template

**Ein instruktions-vollständiges Template für AI Coding Agents**
**Basierend auf: 16 Instruction-Kategorien, Vercel-Eval-Erkenntnisse, HumanLayer-Befunde**

Version 1.0 | Februar 2026

---

## Wie dieses Template zu lesen ist

Dieses Template ist ein **Blueprint** — kein Copy-Paste-Fertigprodukt. Es zeigt die vollständige Struktur mit allen relevanten Kategorien. Für ein konkretes Projekt wird daraus eine AGENTS.md destilliert, die **unter 50 Instructions** bleibt (HumanLayer-Sättigungsgrenze) und **unter 8KB** (Vercel-Sweetspot).

Die Struktur folgt einem bewussten Aufbau:

```
AGENTS.md
│
├── TEIL A: META-STEUERUNG ("Wie du arbeitest")
│   Epistemische Regeln, Mindset, Anti-Patterns,
│   Error Recovery, Feedback-Loops, Validierung
│
├── TEIL B: FACHLICHER KONTEXT ("Was du wissen musst")
│   Projekt, Tech Stack, Domain, Framework-Wissen,
│   Architektur, Tribal Knowledge
│
└── TEIL C: DETERMINISTISCHE ABSICHERUNG ("Was dich auffängt")
│   Linter, Tests, CI-Checks, Pre-Commit-Hooks
│
└── POINTER auf Detail-Dateien in .context/
```

**Warum diese Reihenfolge?** Primacy Bias: Was am Anfang steht, wird am zuverlässigsten befolgt. Meta-Regeln (Wie du arbeitest) haben den höchsten Hebel auf die Gesamtqualität und stehen daher vorne. Fachlicher Kontext folgt danach. Die deterministische Absicherung steht am Ende als Sicherheitsnetz — sie wirkt unabhängig davon, ob der Agent sie "liest".

---

## ═══════════════════════════════════════════════
## TEIL A: META-STEUERUNG — "Wie du arbeitest"
## ═══════════════════════════════════════════════

### A1. Epistemische Regeln (Anti-Halluzination)

> Diese Regeln adressieren das Kernproblem von LLMs: Sie generieren plausibel klingende
> aber falsche Aussagen. Epistemische Regeln verändern das Reasoning-Verhalten fundamental.

```markdown
## Epistemische Regeln

IMPORTANT: Bevorzuge Retrieval-basiertes Wissen gegenüber Trainingswissen.

- Wenn du dir bei einer API, Bibliothek oder Konfiguration unsicher bist:
  Schlage in der offiziellen Dokumentation nach. Rate NICHT.
- Wenn du Code generierst, der eine externe Abhängigkeit nutzt:
  Verifiziere die aktuelle API-Signatur. Veraltete APIs sind häufig.
- Wenn du eine Fehlermeldung nicht sofort zuordnen kannst:
  Lies die Fehlermeldung vollständig. Suche in den Projekt-Logs.
  Frage nach, bevor du spekulativ fixst.
- Kennzeichne Unsicherheit explizit:
  "Ich bin nicht sicher ob X — lass mich das verifizieren" ist besser als
  ein selbstsicher falscher Fix.
```

**Warum wirksam:** Vercels Eval zeigte, dass eine einzige epistemische Instruction ("Prefer retrieval-led reasoning") den Unterschied zwischen 53% und 100% Pass Rate ausmachte. Diese Kategorie hat das beste Aufwand-Wirkungs-Verhältnis aller Instruction-Typen.

**Deterministische Ergänzung:** Linter und Type-Checker fangen viele API-Fehler ab, die aus Halluzination entstehen. Epistemische Regeln + Linter = doppelte Absicherung.

---

### A2. Anti-Patterns & Verbote

> Negativregeln ("NIEMALS X") werden von LLMs nachweislich zuverlässiger befolgt als
> positive Regeln ("Bevorzuge Y"). Sie sind konkreter, weniger interpretierbar,
> und leichter verifizierbar.

```markdown
## Verbote (NIEMALS)

- NIEMALS API Keys, Secrets oder Passwörter hardcoden
- NIEMALS .env, .secret, oder Credential-Dateien committen
- NIEMALS `any` als Typ verwenden (TypeScript) / `dynamic` (Dart) ohne Begründung
- NIEMALS Breaking Changes ohne Migrations-Pfad einführen
- NIEMALS Dependencies hinzufügen ohne explizite Diskussion
- NIEMALS bestehende Tests löschen um sie "grün" zu machen
- NIEMALS Fehler still verschlucken (leere catch-Blöcke)
- NIEMALS User-Input unvalidiert in Queries/Commands einsetzen
```

**Warum wirksam:** "NIEMALS X" ist eindeutig. "Bevorzuge Y gegenüber Z" ist interpretierbar. Die Arize-AI-Studie zeigte, dass klare Verbote die Cline-Accuracy auf SWE-bench um 10-15% steigerten.

**Deterministische Ergänzung:** Jedes "NIEMALS" sollte einen entsprechenden Linter-Check oder Pre-Commit-Hook haben. Beispiel: `NIEMALS .env committen` → `.gitignore` + `pre-commit detect-secrets`. Der LLM folgt der Regel probabilistisch, der Hook deterministisch.

---

### A3. Persona & Mindset

> Das Mindset beeinflusst die gesamte Output-Qualität. Ein Agent, der als
> "erfahrener Senior Developer" agiert, produziert nachweislich anderen Code
> als einer ohne Persona-Definition.

```markdown
## Mindset & Arbeitsweise

Du arbeitest als erfahrener Senior Developer mit dem Ziel, wartbaren,
verständlichen Code zu produzieren.

Prinzipien:
- Korrektheit > Performance > Lesbarkeit > Kürze
- Einfachheit bevorzugen: Die einfachste Lösung, die das Problem löst, ist die beste
- Explizit vor implizit: Lieber eine Zeile mehr als eine clevere Abkürzung
- Wenn zwei Ansätze gleichwertig sind: Wähle den konventionelleren
```

**Hinweis für Framework-spezifische Arbeit:**
```markdown
## Framework-Mindset (bei AI Transformation Aufgaben)

Bei Aufgaben, die AI Transformation, Change Management oder SDLC-Optimierung betreffen:
Nutze das AI Value Stream Transformer Framework als Referenzrahmen.
Bevorzuge Framework-basiertes Reasoning gegenüber allgemeinem Trainingswissen.
→ Siehe Framework-Digest in Abschnitt B4
```

---

### A4. Feedback-Loops & Plan-First

> Verhindert das häufigste Problem autonomer Agents: Voreiliges Handeln
> ohne Rückversicherung, das in Sackgassen führt.

```markdown
## Feedback & Planung

- Bei Tasks die > 3 Dateien betreffen: Zeige ZUERST einen Plan
- Bei Architektur-Entscheidungen: Nenne Alternativen mit Trade-offs
- Bei Unsicherheit: Frage nach statt zu raten
- Bei destruktiven Operationen (Löschen, Umbenennen, Schema-Änderungen):
  Hole explizite Bestätigung ein
- Nach jeder größeren Änderung: Fasse zusammen was geändert wurde und warum
```

---

### A5. Error Recovery & Eskalation

> Reduziert Endlos-Schleifen, in denen Agents denselben fehlerhaften Fix
> wiederholt versuchen. Gibt dem Agent eine strukturierte Escalation-Leiter.

```markdown
## Fehlerbehandlung

Wenn ein Build/Test fehlschlägt:
1. Lies die VOLLSTÄNDIGE Fehlermeldung (nicht nur die erste Zeile)
2. Prüfe ob es ein bekanntes Problem ist (→ .context/known-issues.md)
3. Prüfe Dependencies und Versionskompatibilität
4. Versuche maximal 2 verschiedene Lösungsansätze
5. Wenn nach 2 Versuchen nicht gelöst: Beschreibe das Problem und frage nach

NIEMALS:
- Denselben Fix wiederholt versuchen
- Fehlermeldungen ignorieren und weitermachen
- Tests auskommentieren um den Build grün zu bekommen
```

---

### A6. Rollback & Checkpoint-Regeln

> Sicherheitsnetz für autonome Operationen. Besonders relevant für
> Claude Code und Codex, die Dateien direkt ändern.

```markdown
## Checkpoints

- Vor größeren Refactorings: Beschreibe den aktuellen Zustand
- Bei mehrstufigen Migrationen: Ein Schritt pro Commit/Iteration
- Wenn eine Änderung rückgängig gemacht werden muss:
  Nutze git revert/reset statt manueller Umkehr
- Bei Datenbankschema-Änderungen: Immer Rollback-Migration mitliefern
```

---

### A7. Kontextmanagement

> Der Agent muss wissen, wie er sein eigenes Context-Budget managt.
> Ohne diese Regeln liest er zu viel (Context Overload) oder zu wenig.

```markdown
## Kontextmanagement

- Lies nur die Dateien, die für die aktuelle Aufgabe relevant sind
- Bei großen Codebasen: Nutze Suche statt vollständiges Lesen
- Fasse dich in Erklärungen kurz, sei in Code präzise
- Bei langen Sessions: Referenziere explizit auf AGENTS.md Konventionen
  (als "Contextual Refresher" gegen AI Drift)
```

---

### A8. Interaktions-Stil

> Meta-Steuerung der Kommunikation. Besonders relevant wenn
> mehrere Personen mit unterschiedlichen Präferenzen am selben Projekt arbeiten.

```markdown
## Kommunikation

- Sprache: Deutsch für Erklärungen, Englisch für Code und Kommentare
- Bei Code-Änderungen: Erkläre das "Warum", nicht nur das "Was"
- Gib bei Architektur-Fragen immer mindestens 2 Alternativen
- Vermeide Plattitüden ("Das ist eine gute Frage") — komm direkt zum Punkt
```

---

## ═══════════════════════════════════════════════
## TEIL B: FACHLICHER KONTEXT — "Was du wissen musst"
## ═══════════════════════════════════════════════

### B1. Projekt-Überblick

```markdown
## Projekt

[Projektname]: [2-3 Sätze was es tut und für wen]

Aktueller Status: [MVP / Production / Maintenance]
Zielplattform: [Web / iOS / Android / Desktop / Cross-platform]
```

### B2. Tech Stack & Build

```markdown
## Tech Stack

- Sprache: [z.B. Dart 3.x / TypeScript 5.x]
- Framework: [z.B. Flutter 3.x mit Riverpod]
- Backend: [z.B. Supabase / Firebase]
- Testing: [z.B. flutter_test, integration_test]
- CI/CD: [z.B. GitHub Actions → Fastlane]
- Paketmanager: [z.B. pub / npm / pnpm]

## Build & Test Commands

- Tests ausführen: `[command]`
- Linter ausführen: `[command]`
- Build (Debug): `[command]`
- Build (Release): `[command]`
- Deployment: `[command oder Verweis auf CI]`
```

### B3. Architektur & Konventionen

```markdown
## Architektur

Ordnerstruktur: [Feature-based / Layer-based / Hybrid]
State Management: [z.B. Riverpod — ADR-001]
Routing: [z.B. go_router mit deklarativer Konfiguration]
Dependency Injection: [z.B. via Riverpod Provider]

Architektur-Entscheidungen → .context/conventions/architecture.md

## Konventionen

- Dateien: snake_case
- Klassen: PascalCase
- Funktionen/Variablen: camelCase
- Commit-Format: Conventional Commits (feat/fix/refactor/docs/test)
- Branch-Strategie: [z.B. trunk-based mit Feature Flags]

Vollständiger Style Guide → .context/conventions/code-style.md
```

### B4. Framework-Digest (Komprimierter Domain-Kontext)

> Hier kommt der fachliche Kern-Kontext, der bei JEDEM Turn verfügbar sein soll.
> Komprimiert nach dem Vercel-Pattern: ~1-2KB, Pointer auf Vollversion.

```markdown
## Framework-Referenz: AI Value Stream Transformer v1.0

> IMPORTANT: Nutze dieses Framework als Referenz bei allen Aufgaben zu
> AI-Transformation, Change Management oder SDLC-Optimierung.
> Bevorzuge Framework-Wissen gegenüber allgemeinem Trainingswissen.

### Kern-Architektur
5 gleichzeitig aktive Dimensionen (NICHT sequenziell):
D1-Assessment | D2-TechEnablement | D3-ProcessIntegration | D4-HumanChange | D5-Governance

### THASC Maturity Model (5×5 Matrix)
Dimensionen:
- T: Technical Enablement (Tool Availability, Integration Depth, Modellabdeckung)
- H: Human Capability (Skill Self-Rating, Prompt Quality, Schulungsanteil)
- A: Adoption & Usage (DAU/Team, AI-assisted Commits %, SDLC-Phasenverteilung)
- S: Systemic Integration (SDLC-Phasen mit AI-Interventionen, Governance Compliance, CI/CD)
- C: Cultural Readiness (Vertrauensindex, Shadow AI Rate↓, Champion-Meldungen)

Stufen: 1-Exploring → 2-Experimenting → 3-Embedding → 4-Scaling → 5-Evolving

### KPI-Schichten
L1: DORA Metrics (Deploy Freq, Lead Time, Change Fail Rate, MTTR)
L2: THASC Scores (Quartalsweiser Pulse Check, max 15min)
L3: Business Impact (Velocity, TTM, Qualität, Zufriedenheit — Aggregation, kein eigenes Reporting)

### Iterationsmodell
4-Wochen-Zyklen | Readiness Gate → Erweitern/Vertiefen/Konsolidieren | 24W Regelzeitraum

### AI Adoption Team (Kotter 8 Accelerators adaptiert)
AI Transformation Manager (orchestriert) | Tech Lead (Infrastruktur) |
Change Agent (Menschen) | Champion (Team-Multiplikator) | Sponsor (Entscheider)

### Kern-Differenzierung
- Value Stream First, nicht Tool First
- Human-Centric Change = gleichberechtigte Dimension
- Alle 5 Dimensionen parallel, nicht sequenziell
- Volle SDLC-Abdeckung, nicht nur Coding-Phase

### Referenzmodelle
MITRE AI MM | SEI/Accenture AAMM | Gartner | DORA | Kotter 8 Accelerators | Prosci ADKAR

→ Vollversion: .context/frameworks/ai-value-stream-transformer.md
→ Originaldokument: ai-value-stream-transformer-framework.md
```

**Größe dieses Digests:** ~1.5KB. Deutlich unter dem 8KB-Sweetspot.

### B5. Team-Wissen & Tribal Knowledge

```markdown
## Bekannte Besonderheiten

- [z.B. "Das Auth-Modul nutzt einen Custom Token-Refresh wegen Bug X in Library Y"]
- [z.B. "Die API-Rate-Limits sind strenger als dokumentiert: max 50 req/min"]
- [z.B. "Package Z Version 4.x ist inkompatibel mit unserem Setup, pinned auf 3.8"]

→ Details: .context/known-issues.md
```

### B6. Compliance & Sicherheit

```markdown
## Compliance

- Datenschutz: [z.B. DSGVO-konform, keine Nutzerdaten in Logs]
- AI-spezifisch: [z.B. EU AI Act Konformität beachten]
- Keine externen Services ohne Genehmigung
- Personenbezogene Daten: [Verarbeitungsregeln]
- Audit-Trail: [z.B. Alle DB-Änderungen protokollieren]

→ Details: .context/security/compliance-rules.md
```

---

## ═══════════════════════════════════════════════
## TEIL C: DETERMINISTISCHE ABSICHERUNG
## ═══════════════════════════════════════════════

> Dieser Abschnitt beschreibt, welche probabilistischen LLM-Instructions
> durch deterministische Tools abgesichert werden.
> Der Agent soll diese Tools nutzen. Aber selbst wenn er es vergisst:
> CI/CD fängt es auf.

### C1. Validierungs-Befehle

```markdown
## Validierung (nach JEDER Änderung)

Pflicht-Checks:
1. Linter: `[command]` — MUSS ohne Warnings durchlaufen
2. Tests: `[command]` — MUSS grün sein
3. Type-Check: `[command]` — KEINE Typ-Fehler

Optional (bei relevanten Änderungen):
4. Security Scan: `[command]`
5. Build: `[command]` — Kompiliert ohne Fehler
```

### C2. Mapping: Instruction → Deterministische Absicherung

> Diese Tabelle zeigt die Defense-in-Depth-Strategie.
> Linke Spalte: Was der Agent befolgen SOLL (probabilistisch).
> Rechte Spalte: Was ihn auffängt, wenn er es NICHT tut (deterministisch).

```markdown
## Defense in Depth

| Probabilistische Instruction | Deterministische Absicherung |
|------------------------------|------------------------------|
| "Keine API Keys hardcoden" | pre-commit: detect-secrets, .gitignore |
| "Keine `any` Types" | eslint: @typescript-eslint/no-explicit-any |
| "Tests müssen grün sein" | CI: Test-Gate blockiert Merge |
| "Keine Breaking Changes" | CI: API-Kompatibilitäts-Check |
| "Code-Style einhalten" | Linter + Formatter (auto-fix) |
| "Keine .env committen" | .gitignore + pre-commit check |
| "Dependencies prüfen" | Dependabot / Renovate |
| "Commit-Format einhalten" | commitlint pre-commit hook |
| "Keine leeren catch-Blöcke" | Linter-Rule: no-empty-catch |
| "Dokumentation aktualisieren" | CI: Doc-Coverage-Check (optional) |
```

**Prinzip:** Jede kritische Instruction sollte eine deterministische Absicherung haben. Der LLM ist die erste Verteidigungslinie (schnell, flexibel, versteht Kontext). Der Linter/CI ist die zweite (langsamer, aber 100% zuverlässig).

---

## ═══════════════════════════════════════════════
## Anhang: Instruction-Budget-Kalkulation
## ═══════════════════════════════════════════════

### Zielgrößen

| Metrik | Zielwert | Quelle |
|--------|----------|--------|
| Max Instructions in AGENTS.md | ~30-40 | HumanLayer: Degradation ab ~50 |
| Max Dateigröße AGENTS.md | 4-8 KB | Vercel: 8KB Sweetspot |
| Framework-Digest | 1-2 KB | Komprimiert nach Vercel-Pattern |
| Detail-Dateien (.context/) | unbegrenzt | Werden on-demand gelesen |

### Verteilung im Template

| Teil | Instructions | Budget-Anteil |
|------|-------------|---------------|
| A: Meta-Steuerung | ~15 | ~40% |
| B: Fachlicher Kontext | ~12 | ~35% |
| C: Deterministische Absicherung | ~8 | ~25% |
| **Gesamt** | **~35** | **100%** |

Das lässt Raum für ~15 weitere projektspezifische Instructions, bevor die Sättigungsgrenze erreicht wird.

---

## ═══════════════════════════════════════════════
## Anhang: Vollständige Kategorie-Checkliste (16+2)
## ═══════════════════════════════════════════════

Zur Selbst-Prüfung: Deckt meine AGENTS.md alle relevanten Kategorien ab?

### Meta-Steuerung (Wie)

| # | Kategorie | Im Template | Abschnitt |
|---|-----------|-------------|-----------|
| 1 | Epistemische Regeln | ✅ | A1 |
| 2 | Anti-Patterns & Verbote | ✅ | A2 |
| 3 | Persona / Mindset | ✅ | A3 |
| 4 | Feedback-Loops | ✅ | A4 |
| 5 | Error Recovery & Eskalation | ✅ | A5 |
| 6 | Rollback / Checkpoints | ✅ | A6 |
| 7 | Kontextmanagement | ✅ | A7 |
| 8 | Interaktions-Stil | ✅ | A8 |
| 9 | Priorisierungs-Hinweise | ✅ | A3 (in Mindset) |
| 10 | Progressive Disclosure | ✅ | Pointer-Architektur |

### Fachlicher Kontext (Was)

| # | Kategorie | Im Template | Abschnitt |
|---|-----------|-------------|-----------|
| 11 | Projekt & Tech Stack | ✅ | B1, B2 |
| 12 | Architektur & Konventionen | ✅ | B3 |
| 13 | Domain/Framework-Wissen | ✅ | B4 |
| 14 | Team-Wissen / Tribal Knowledge | ✅ | B5 |
| 15 | Compliance / Regulatory | ✅ | B6 |
| 16 | Collaboration-Regeln | ◻️ | Bei Bedarf ergänzen |
| 17 | ADRs | ◻️ | In .context/ |
| 18 | Dependency-Regeln | ✅ | A2 (als Verbot) |

### Absicherung

| # | Kategorie | Im Template | Abschnitt |
|---|-----------|-------------|-----------|
| 19 | Validierungs-Checks | ✅ | C1 |
| 20 | Defense-in-Depth Mapping | ✅ | C2 |

---

## ═══════════════════════════════════════════════
## Anhang: Anwendung auf verschiedene Kontexte
## ═══════════════════════════════════════════════

### Kontext 1: Solo-Entwickler (z.B. City Guide App)

Fokus auf: A1 (Epistemic), A2 (Verbote), A3 (Mindset), B1-B3 (Projekt), B4 (Framework falls relevant), C1 (Validierung).
Weglassen: A8 (Interaktions-Stil, nur 1 Person), B6 (Compliance, falls kein reguliertes Umfeld).
Budget: ~20 Instructions. Schlanke AGENTS.md.

### Kontext 2: Team-Projekt (z.B. Container-Platform / DRV-Bund)

Alles relevant, besonders: A2 (Verbote → Security), A4 (Feedback-Loops), A5 (Error Recovery), B5 (Tribal Knowledge), B6 (Compliance → DSGVO), C2 (Defense-in-Depth).
Budget: ~35-40 Instructions. Vollständige AGENTS.md.

### Kontext 3: AI Transformation Beratung (Framework-Arbeit)

Fokus auf: A1 (Epistemic → Framework-Wissen bevorzugen), A3 (Mindset → Value Stream Denken), B4 (Framework-Digest → immer im Kontext).
Weniger relevant: C1/C2 (keine Code-Validierung nötig).
Budget: ~25 Instructions. Framework-zentrierte AGENTS.md.

### Kontext 4: Diesen Claude.ai Chat

AGENTS.md ist hier nicht direkt anwendbar, aber die Prinzipien gelten:
- User Preferences in Claude.ai = Meta-Steuerung (A-Ebene)
- Memory = Fachlicher Kontext (B-Ebene, insbes. B4 Framework-Digest)
- Kein deterministischer Layer (C) verfügbar → höhere Eigenverantwortung

Für Claude.ai empfiehlt sich: Den Framework-Digest als Referenz-Dokument hochladen
oder in den ersten Prompt einfügen. Die User Preferences für Meta-Steuerung nutzen.
