---
module: assessment
category: [diagnostic]
industry: [banking, healthcare, insurance, public_sector, ecommerce, startup]
compliance_tier: [tier_1_high, tier_2_medium, tier_3_flexible]
role: [consultant, cto, executive]
maturity_level: [L0, L1, L2, L3, L4]
topics: [context_analysis, question_design, adaptive_testing]
content_type: [guide]
review_status: [approved]
pilot_tested: [yes]
last_updated: "2025-12-16"
chunk_priority: [high]
---

# Context Assessment Methodology

**Kernbotschaft:** Systematische Erfassung des Projekt-Kontexts als Foundation für adaptive, individualisierte Assessment-Workflows und kontextbasierte Tool-Empfehlungen.

---

## 🎯 **Warum Context Assessment?**

### **Das Problem: One-Size-Fits-All Assessments**

**Traditionelle Assessment-Probleme:**
- ❌ Banking-Projekt bekommt dieselben Fragen wie Startup
- ❌ Python-Team sieht Java-spezifische Tool-Empfehlungen
- ❌ Reguliertes Environment bekommt Cloud-Native Empfehlungen (nicht erlaubt)
- ❌ 99 generische Fragen → 40% irrelevant → Frustration

**Business Impact:**
- **-30% Completion Rate** bei generischen Assessments
- **-50% Actionability** durch irrelevante Empfehlungen
- **-25% Conversion** zu paid engagements

### **Die Lösung: Context-First Sequential Assessment**

**Context Assessment als Foundation:**
```
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: Context Assessment (12-20 Fragen, 5-7 Min)          │
├─────────────────────────────────────────────────────────────┤
│ Erfasst:                                                     │
│ • Projekt-Basics (Size, Duration, Phase)                     │
│ • Business-Kontext (Industry, Compliance, Criticality)       │
│ • Tech-Stack (Languages, Frameworks, Legacy)                 │
│ • Arbeitsweise (Methodology, Deployment, Collaboration)      │
│ • Ziele & Timeline                                           │
│                                                              │
│ Output: ProjectContext Object mit Pattern Matching           │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 2: Pre-Readiness Assessment (adaptiert auf Context)    │
├─────────────────────────────────────────────────────────────┤
│ Fragen werden gefiltert basierend auf:                       │
│ • Compliance-Tier → Banking bekommt BaFin-spezifische Fragen │
│ • Tech-Stack → Python-Team: PyCharm/VS Code, nicht IntelliJ │
│ • Team-Size → Kleine Teams überspringen Governance-Fragen   │
│                                                              │
│ Ergebnis: 30-35% weniger Fragen, höhere Relevanz            │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ STEP 3: Maturity Assessment (adaptiert auf Context + Culture)│
├─────────────────────────────────────────────────────────────┤
│ Fragen werden gefiltert basierend auf:                       │
│ • Culture Pattern (aus Pre-Readiness) → Move-Fast vs. Safety│
│ • Compliance-Tier → Kein "Public Code Suggestions" für Banks│
│ • Maturity Baseline (aus Pre-Readiness Score)               │
│                                                              │
│ Ergebnis: Fokus auf relevante Maturity-Dimensions           │
└─────────────────────────────────────────────────────────────┘
```

**Measured Impact:**
- **+35% Completion Rate** durch relevantere Fragen
- **+60% Actionability** durch tech-stack-spezifische Empfehlungen
- **+40% Conversion** durch individualisierte Roadmaps

---

## 📋 **Context Assessment Fragenkatalog**

**Total: 22 Fragen** (erweitert von original 20)

### **Kategorie 1: Projekt-Basics (4 Fragen)**
- C1: Team-Größe
- C2: Projekt-Laufzeit
- C3: Projekt-Phase
- C4: Projekt-Typ

### **Kategorie 2: Business-Kontext & Compliance (4 Fragen)**
- C5: Kunden-Branche
- C6: Datenverarbeitungs-Standort
- C7: Code-Ownership
- C8: Projekt-Kritikalität

### **Kategorie 3: Tech-Stack (4 Fragen)**
- C9: Programmiersprachen
- C10: Hauptframework
- C11: Legacy-Code-Anteil
- C12: Code-Qualitäts-Niveau

### **Kategorie 4: Arbeitsweise (4 Fragen)**
- C13: Entwicklungs-Methodik
- C14: Sprint-Länge
- C15: Deployment-Frequenz
- C16: Zusammenarbeits-Modell

### **Kategorie 5: Ziele & Timeline (6 Fragen)** ⭐ *Erweitert mit C21, C22*
- C17: Hauptziel der AI-Transformation
- C18: Verfügbares Budget (monatlich für AI-Tools)
- C19: Gewünschte Timeline
- C20: Risikobereitschaft
- **C21: Projekt-Budget (jährlich)** ⭐ *NEU - für Tier-Scoring*
- **C22: Vertragsmodell** ⭐ *NEU - für Incentive-Alignment*

**Estimated Time:** 7-10 Minuten (22 Fragen)

---

### **Kategorie 1: Projekt-Basics (4 Fragen)**

#### **C1: Team-Größe**
**Frage:** "Wie groß ist das Projekt-Team?"

**Optionen:**
- Solo (1 Person)
- Klein (2-5 Personen)
- Mittel (6-15 Personen)
- Groß (16-30 Personen)
- Enterprise (>30 Personen)

**Warum wichtig:**
- **Solo/Klein:** Agile Transformation, keine Governance-Overhead
- **Mittel:** Change Management erforderlich
- **Groß/Enterprise:** Strukturierte Governance, Change Coalition, phased rollout

**Adaptive Impact:**
- Solo/Klein → Skip "Governance Structure" Fragen in Pre-Readiness
- Groß/Enterprise → Add "Change Coalition Formation" Fragen

---

#### **C2: Projekt-Laufzeit**
**Frage:** "Wie lange läuft das Projekt bereits?"

**Optionen:**
- Neu (0-3 Monate)
- Jung (3-12 Monate)
- Etabliert (1-3 Jahre)
- Legacy (>3 Jahre)

**Warum wichtig:**
- **Neu:** Greenfield → AI-First von Anfang
- **Jung:** Quick Wins möglich
- **Etabliert:** Change Management kritisch
- **Legacy:** Tech Debt, Workflow-Redesign komplex

**Adaptive Impact:**
- Neu → Focus auf "AI-First Setup" Fragen
- Legacy → Focus auf "Workflow Redesign" und "Tech Debt" Fragen

---

#### **C3: Projekt-Phase**
**Frage:** "In welcher Phase befindet sich das Projekt?"

**Optionen:**
- Discovery/Planning
- Development (Active)
- Maintenance/Support
- Transition/Sunset

**Warum wichtig:**
- **Discovery:** Optimaler Zeitpunkt für AI-First Design
- **Development:** Mid-Flight Integration
- **Maintenance:** Inkrementelle Optimierung
- **Transition:** Limited ROI, nur Quick Wins

**Adaptive Impact:**
- Discovery → Add "Architecture Design" Fragen in Maturity
- Maintenance → Skip "Workflow Redesign", focus "Tool Optimization"

---

#### **C4: Projekt-Typ**
**Frage:** "Was ist der Haupt-Projekt-Typ?"

**Optionen:**
- Greenfield (Neuentwicklung)
- Brownfield (Bestehende Codebase)
- Modernisierung (Legacy → Modern)
- Wartung/Support

**Warum wichtig:**
- **Greenfield:** Maximale AI-Integration möglich
- **Brownfield:** Balance zwischen Innovation und Stabilität
- **Modernisierung:** Opportunity für fundamentale Redesign
- **Wartung:** Minimal Disruption, Tool-Support-Focus

---

### **Kategorie 2: Business-Kontext & Compliance (4 Fragen)**

#### **C5: Kunden-Branche**
**Frage:** "In welcher Branche ist der Kunde tätig?"

**Optionen:**
- Banking/Finance
- Healthcare/Pharma
- Automotive/Manufacturing
- Logistics/Transportation
- Technology/Software
- Retail/E-Commerce
- Public Sector
- Startup/Scale-Up

**Warum wichtig:**
Branchen-spezifische Compliance-Anforderungen bestimmen erlaubte AI-Tools:
- **Banking:** BaFin → Keine Public Code Suggestions, EU-Only Data
- **Healthcare:** HIPAA, DSGVO → Strikte Datenschutz-Anforderungen
- **Automotive:** TISAX → Security-First
- **Startup:** Move-Fast → Minimal Restrictions

**Adaptive Impact:**
- Banking → Add "BaFin Compliance" Fragen, remove "Public AI" Tools
- Healthcare → Add "HIPAA Compliance" Fragen
- Startup → Skip Compliance-Heavy Fragen

---

#### **C6: Datenverarbeitungs-Standort**
**Frage:** "Wo dürfen Daten in diesem Projekt verarbeitet werden?"

**Optionen:**
- EU-Only (DSGVO-strict)
- US-Acceptable (Privacy Shield)
- Global/Flexible
- On-Premise-Only

**Warum wichtig:**
Bestimmt erlaubte AI-Tools:
- **EU-Only:** GitHub Copilot ✅, ChatGPT ❌ (US-Server)
- **US-Acceptable:** Alle Tools erlaubt
- **On-Premise-Only:** Nur Self-Hosted Tools (z.B. Ollama)

**Adaptive Impact:**
- EU-Only → Filter Tool-Empfehlungen (nur EU-Server)
- On-Premise-Only → Empfehle Ollama, nicht Cloud-Tools

---

#### **C7: Code-Ownership**
**Frage:** "Wem gehört der Code?"

**Optionen:**
- Kunde (IP-Transfer)
- Shared (Joint Ownership)
- Eigenes IP (Produkt)

**Warum wichtig:**
- **Kunde:** Kunde-Approval für AI-Tools erforderlich
- **Shared:** Beide Seiten müssen zustimmen
- **Eigenes IP:** Volle Freiheit bei Tool-Wahl

**Adaptive Impact:**
- Kunde → Add "Client AI Policy" Fragen
- Eigenes IP → Skip Client-Consent Fragen

---

#### **C8: Projekt-Kritikalität**
**Frage:** "Wie kritisch ist das Projekt für das Business?"

**Optionen:**
- Mission-Critical (Revenue-Impact)
- Business-Critical (Operations)
- Important (Support)
- Experimental (Innovation)

**Warum wichtig:**
- **Mission-Critical:** Risk-Averse → Structured AI Adoption
- **Experimental:** Risk-Tolerant → Fast AI Integration

**Adaptive Impact:**
- Mission-Critical → Add "Risk Management" Fragen
- Experimental → Skip "Governance" Fragen

---

### **Kategorie 3: Tech-Stack (4 Fragen)**

#### **C9: Programmiersprachen**
**Frage:** "Welche Programmiersprachen werden verwendet?"

**Optionen (Multi-Select):**
- Python
- Java/Kotlin
- JavaScript/TypeScript
- C#/.NET
- Go
- Ruby
- PHP
- C/C++

**Warum wichtig:**
Tech-Stack bestimmt optimale AI-Tools:
- **Python:** GitHub Copilot (exzellent), Cursor AI (exzellent)
- **Java:** IntelliJ AI Assistant (optimal)
- **JavaScript:** GitHub Copilot (sehr gut), Cursor (gut)

**Adaptive Impact:**
- Python → Empfehle Copilot + Cursor + Ruff (Linter)
- Java → Empfehle IntelliJ AI Assistant + Copilot
- JavaScript → Empfehle Copilot + ESLint AI

---

#### **C10: Hauptframework**
**Frage:** "Welches Hauptframework wird verwendet?"

**Optionen:**
- Django/Flask (Python)
- Spring Boot (Java)
- React/Next.js (JavaScript)
- .NET Core (C#)
- Rails (Ruby)
- Laravel (PHP)
- Kein Framework (Vanilla)

**Warum wichtig:**
Framework-spezifische AI-Pattern-Libraries:
- **Django:** AI kann Django-ORM, Migrations, Admin generieren
- **React:** AI kann Components, Hooks, State Management generieren

**Adaptive Impact:**
- Django → Add "Django-ORM Optimization" Tool-Empfehlungen
- React → Add "Component Generation" Best Practices

---

#### **C11: Legacy-Code-Anteil**
**Frage:** "Wie viel Legacy-Code existiert?"

**Optionen:**
- Kein Legacy (100% Modern)
- Wenig Legacy (<20%)
- Moderat Legacy (20-50%)
- Viel Legacy (50-80%)
- Mostly Legacy (>80%)

**Warum wichtig:**
- **Kein Legacy:** AI-First sofort möglich
- **Viel Legacy:** Refactoring-First, dann AI

**Adaptive Impact:**
- Mostly Legacy → Add "Tech Debt Reduction" Fragen
- Kein Legacy → Skip "Refactoring Strategy" Fragen

---

#### **C12: Code-Qualitäts-Niveau**
**Frage:** "Wie ist die aktuelle Code-Qualität?"

**Optionen:**
- Exzellent (Tests, Docs, Low Debt)
- Gut (Meist getestet, dokumentiert)
- Okay (Gemischt)
- Problematisch (Wenig Tests, hohe Debt)
- Kritisch (Keine Tests, sehr hohe Debt)

**Warum wichtig:**
- **Exzellent:** AI kann sofort auf hohem Niveau arbeiten
- **Kritisch:** Erst Quality-Foundation, dann AI

**Adaptive Impact:**
- Kritisch → Add "Testing Strategy" Fragen in Pre-Readiness
- Exzellent → Focus auf "Advanced AI Patterns"

---

### **Kategorie 4: Arbeitsweise (4 Fragen)**

#### **C13: Entwicklungs-Methodik**
**Frage:** "Welche Entwicklungs-Methodik wird verwendet?"

**Optionen:**
- Scrum
- Kanban
- SAFe (Scaled Agile)
- Waterfall
- Ad-hoc

**Warum wichtig:**
- **Scrum/Kanban:** AI-Integration in Sprint Planning
- **Waterfall:** AI-Integration in Phase Gates

**Adaptive Impact:**
- Scrum → Add "Sprint Planning mit AI" Empfehlungen
- Waterfall → Focus auf "Phase-Specific AI Use Cases"

---

#### **C14: Sprint-Länge**
**Frage:** "Wie lang sind die Sprints?"

**Optionen:**
- 1 Woche
- 2 Wochen
- 3-4 Wochen
- Keine Sprints

**Warum wichtig:**
- **1-2 Wochen:** Quick AI Iteration möglich
- **3-4 Wochen:** Mehr Planung erforderlich

**Adaptive Impact:**
- 1-2 Wochen → Empfehle "Daily AI Standup Pattern"
- 3-4 Wochen → Empfehle "Mid-Sprint AI Review"

---

#### **C15: Deployment-Frequenz**
**Frage:** "Wie oft wird deployed?"

**Optionen:**
- Multiple/Tag (CD)
- Täglich
- Wöchentlich
- Monatlich
- Seltener

**Warum wichtig:**
- **Multiple/Tag:** AI-Generated Tests critical (schnelles Feedback)
- **Monatlich:** Mehr Manuelles Review okay

**Adaptive Impact:**
- Multiple/Tag → Add "AI-Generated Tests" Pflicht-Fragen
- Monatlich → Skip "CD Pipeline" Fragen

---

#### **C16: Zusammenarbeits-Modell**
**Frage:** "Wie arbeitet das Team zusammen?"

**Optionen:**
- Remote-First
- Hybrid
- Office-Based
- Async-First

**Warum wichtig:**
- **Remote:** AI-Pairing Tools (Cursor Composer) kritischer
- **Office:** In-Person Pairing weiterhin möglich

**Adaptive Impact:**
- Remote → Add "AI-Pairing Tools" Empfehlungen
- Office → Focus auf "In-Person + AI Hybrid"

---

### **Kategorie 5: Ziele & Timeline (4 Fragen)**

#### **C17: Hauptziel der AI-Transformation**
**Frage:** "Was ist das Hauptziel?"

**Optionen:**
- Geschwindigkeit (+Velocity)
- Qualität (+Code Quality)
- Kostenreduktion (-Effort)
- Innovation (New Capabilities)
- Team-Upskilling

**Warum wichtig:**
Bestimmt Fokus-Metriken und Quick Wins:
- **Geschwindigkeit:** Focus Velocity-Metriken
- **Qualität:** Focus Bug Density, Coverage
- **Kosten:** Focus Effort Reduction

**Adaptive Impact:**
- Geschwindigkeit → Priorisiere "Code Generation" Tools
- Qualität → Priorisiere "AI Review" Tools

---

#### **C18: Verfügbares Budget**
**Frage:** "Welches Budget steht für AI-Tools zur Verfügung?"

**Optionen:**
- Minimal (€0-500/Monat)
- Low (€500-2000/Monat)
- Medium (€2k-10k/Monat)
- High (€10k+/Monat)

**Warum wichtig:**
Budget bestimmt Tool-Auswahl:
- **Minimal:** Free Tools (VS Code + Ollama)
- **High:** Enterprise Tools (GitHub Copilot Enterprise, Cursor Business)

**Adaptive Impact:**
- Minimal → Empfehle Free/Open-Source Tools
- High → Empfehle Premium Enterprise Tools

---

#### **C19: Gewünschte Timeline**
**Frage:** "Bis wann sollen erste Ergebnisse sichtbar sein?"

**Optionen:**
- Sofort (1-2 Wochen)
- Kurz (1-3 Monate)
- Mittel (3-6 Monate)
- Lang (6-12 Monate)

**Warum wichtig:**
Timeline bestimmt Transformation-Approach:
- **Sofort:** Quick Wins only
- **Lang:** Strukturierter 4-Phasen-Ansatz

**Adaptive Impact:**
- Sofort → Focus "Quick Win Patterns" in Maturity
- Lang → Focus "Sustainable Transformation" Patterns

---

#### **C20: Risikobereitschaft**
**Frage:** "Wie risikobereit ist das Team?"

**Optionen:**
- Sehr risikoavers (Safety-First)
- Vorsichtig (Balanced)
- Offen (Innovation-Focused)
- Sehr risikofreudig (Move-Fast)

**Warum wichtig:**
Bestimmt Change-Management-Strategie:
- **Sehr risikoavers:** Piloted Rollout, extensive Training
- **Sehr risikofreudig:** Fast Rollout, learn-by-doing

**Adaptive Impact:**
- Sehr risikoavers → Add "Risk Mitigation" Fragen
- Sehr risikofreudig → Skip "Change Resistance" Fragen

---

#### **C21: Projekt-Budget (Jährlich)**
**Frage:** "Welches jährliche Budget steht für das gesamte Projekt zur Verfügung?"

**Optionen:**
- Minimal (€0-50.000/Jahr)
- Low (€50k-200k/Jahr)
- Medium (€200k-500k/Jahr)
- High (€500k-1M/Jahr)
- Enterprise (>€1M/Jahr)

**Warum wichtig:**
Budget korreliert mit Risk-Tolerance und Governance-Overhead:
- **Minimal/Low:** Lean, move-fast culture, weniger Prozesse
- **High/Enterprise:** Risk-averse, strukturierte Governance, mehr Quality Gates

**Scoring-Relevanz für Tier Classification:**
Budget-Dimension im Tier-Scoring (10% Gewichtung):
- Minimal (€0-50k) → Score 0 (Startup-Modus, schnelle Iteration)
- Low (€50k-200k) → Score 25 (Moderate Prozesse)
- Medium (€200k-500k) → Score 50 (Balanced Governance)
- High (€500k-1M) → Score 75 (Risk-averse)
- Enterprise (>€1M) → Score 100 (Maximum Governance, BaFin-level)

**Wissenschaftliche Begründung:**
Höheres Budget korreliert mit höheren Compliance-Anforderungen und Risk-Aversion (Organizational Risk Culture Research, Kaplan & Mikes 2012). Large-Budget-Projekte haben typischerweise mehr Stakeholder, längere Approval-Chains und strengere Audit-Requirements.

**Adaptive Impact:**
- Minimal → Skip "Change Coalition Formation" Fragen
- Enterprise → Add "Stakeholder Management" und "Governance Structure" Fragen

---

#### **C22: Vertragsmodell (Dienstleister)**
**Frage:** "Welches Vertragsmodell gilt für dieses Projekt?" *(Nur relevant für IT-Dienstleister)*

**Optionen:**
- Time & Material (T&M) - Abrechnung nach Aufwand
- Fixed Price - Festpreis für Scope
- Value-Based / Outcome-Based - Erfolgsabhängige Vergütung
- Hybrid (T&M + Success Bonus)
- Internal Project (keine externe Abrechnung)

**Warum wichtig:**
**KRITISCH für AI-Transformations-Incentives:**
- **Time & Material:** ⚠️ **Fehlanreiz!** AI-Produktivität (+30% Effizienz) = -30% Umsatz (weniger Stunden abrechenbar)
  - **Risiko:** Team vermeidet AI-Tools, weil sie sich selbst "wegrationalisieren"
  - **Lösungsansatz:** Gainsharing-Modelle einführen (Teil der Effizienzgewinne an Dienstleister)
  
- **Fixed Price:** ✅ **Positive Incentives!** Höhere Produktivität = höhere Marge
  - **Vorteil:** Team motiviert, AI-Tools maximal zu nutzen
  - **Risiko:** Scope-Creep-Konflikte
  
- **Value-Based / Outcome-Based:** ✅✅ **Optimale Incentives!** AI-Produktivität → mehr Outcomes → mehr Vergütung
  - **Vorteil:** Alignment zwischen Effizienz und Vergütung
  - **Best Practice:** Outcome-Metriken definieren (z.B. Features delivered, Tech Debt reduced)
  
- **Internal Project:** ✅ Keine Incentive-Konflikte, volle AI-Integration möglich

**Transformation Impact:**
```
Vertragsmodell-Analyse:

T&M (Time & Material):
  ❌ AI-Produktivität wird zur Bedrohung
  ⚠️ Team vermeidet GitHub Copilot, weil es "zu schnell" macht
  → Ergebnis: Shadow AI (Heimliche Nutzung ohne Transparenz)
  
  **Intervention:**
  - Change zu Hybrid-Modell mit Success-Bonus
  - Gainsharing-Klausel: 50% der Effizienzgewinne gehen an Dienstleister
  - Transparente AI-Tool-Nutzung (keine Shadow AI)

Fixed Price:
  ✅ Team profitiert von AI-Produktivität (höhere Marge)
  ⚠️ Kunde sieht keine Effizienzgewinne (alle gehen an Dienstleister)
  
  **Intervention:**
  - Transparente Effizienz-Kommunikation
  - Nächster Contract: Outcome-Based Pricing
  - Win-Win demonstrieren (schneller Time-to-Market für Kunde)

Value-Based:
  ✅✅ Optimales Modell für AI-Transformation
  ✅ Alignment: Mehr Outputs = mehr Vergütung
  → Keine Intervention nötig, best practice
```

**Adaptive Impact Pre-Readiness:**
- **T&M:** Add Frage "Wie ist das Team-Mindset zu AI-Tools?" (Shadow-AI-Risiko prüfen)
- **T&M:** Add Frage "Gibt es Transparenz über Tool-Nutzung?" (Change Management Bedarf)
- **Fixed Price:** Skip "Incentive Alignment" Fragen
- **Value-Based:** Skip "Contract Model Change" Empfehlungen

**Adaptive Impact Tool-Recommendations:**
- **T&M:** ⚠️ Warning: "Your contract model creates misaligned incentives. Consider Gainsharing."
- **T&M:** Empfehle Tools mit Transparenz-Features (Team-Analytics in GitHub Copilot Business)
- **Fixed Price/Value-Based:** Standard Tool-Empfehlungen ohne Warnings

**Referenz:**
- `framework_core/transformation_urgency/03_case_studies/delivery_pain_points.md` - Pain Point #5
- `framework_core/working_backwards/framework_integration_mapping.md` - Modul 15: Contract Models

---

## 🔄 **Context-Based Adaptive Filtering**

### **Pattern Matching System**

Das Context Assessment generiert **Pattern Matches** für:

#### **1. Tech-Pattern-Match**
```python
def detect_tech_pattern(context: ProjectContext) -> str:
    """Detect tech stack pattern for tool recommendations."""
    
    if context.languages == ["Python"] and context.framework in ["Django", "Flask"]:
        return "python_web"
    elif context.languages == ["JavaScript", "TypeScript"] and context.framework == "React":
        return "javascript_react"
    elif context.languages == ["Java"] and context.framework == "Spring Boot":
        return "java_enterprise"
    # ... more patterns
```

**Impact:**
- `python_web` → Empfehle GitHub Copilot + Cursor + Ruff + Black
- `javascript_react` → Empfehle Copilot + ESLint + Prettier
- `java_enterprise` → Empfehle IntelliJ AI Assistant

---

#### **2. Compliance-Tier-Match**
```python
def detect_compliance_tier(context: ProjectContext) -> int:
    """Detect compliance strictness (1=Flexible, 2=Moderate, 3=Strict)."""
    
    if context.industry in ["Banking", "Healthcare"]:
        return 3  # Strict
    elif context.industry in ["Automotive", "Public Sector"]:
        return 2  # Moderate
    else:
        return 1  # Flexible
```

**Impact:**
- Tier 3 (Strict) → Filter out "Public Code Suggestions" Tools
- Tier 2 (Moderate) → Add "Compliance Review" Fragen
- Tier 1 (Flexible) → Alle Tools erlaubt

---

#### **3. Culture-Pattern-Match**
```python
def detect_culture_pattern(context: ProjectContext) -> str:
    """Detect organizational culture pattern."""
    
    if context.risk_tolerance == "Very Risk-Averse":
        return "safety_first"
    elif context.risk_tolerance == "Very Risk-Tolerant":
        return "move_fast"
    else:
        return "balanced"
```

**Impact:**
- `safety_first` → Add "Governance" Fragen, slow rollout
- `move_fast` → Skip "Risk Management" Fragen, fast rollout

---

### **Filtering Rules Examples**

**Rule 1: Team-Size-Based Filtering**
```python
if context.team_size in ["Solo", "Small"]:
    # Skip governance questions
    filter_out_questions(["governance_structure", "change_coalition"])
```

**Rule 2: Compliance-Based Filtering**
```python
if context.compliance_tier == 3:  # Strict
    # Remove public AI tool questions
    filter_out_tools(["ChatGPT", "Claude (Public)"])
    # Add compliance questions
    add_questions(["bafin_compliance", "hipaa_compliance"])
```

**Rule 3: Tech-Stack-Based Filtering**
```python
if context.tech_pattern == "python_web":
    # Add Python-specific questions
    add_questions(["django_orm_optimization", "pytest_ai_generation"])
    # Remove Java-specific questions
    filter_out_questions(["intellij_setup", "maven_optimization"])
```

---

## 📊 **Context Assessment Output**

### **ProjectContext Object**

```python
@dataclass
class ProjectContext:
    # Raw Answers
    team_size: str
    project_duration: str
    project_phase: str
    customer_industry: str
    data_location: str
    code_ownership: str
    criticality: str
    languages: List[str]
    framework: str
    legacy_percentage: str
    code_quality: str
    methodology: str
    sprint_length: str
    deployment_frequency: str
    collaboration_model: str
    main_goal: str
    budget: str
    timeline: str
    risk_tolerance: str
    
    # Derived Pattern Matches (computed)
    tech_pattern_match: str  # e.g., "python_web"
    compliance_tier: int     # 1, 2, or 3
    culture_pattern_match: str  # "safety_first", "balanced", "move_fast"
    
    # Filtering Metadata
    filtered_questions_count: int
    recommended_tools: List[str]
```

### **Example Context Instance**

```python
context = ProjectContext(
    team_size="Medium (6-15)",
    project_duration="Established (1-3 years)",
    project_phase="Development",
    customer_industry="Banking",
    data_location="EU-Only",
    code_ownership="Customer",
    criticality="Mission-Critical",
    languages=["Python", "JavaScript"],
    framework="Django",
    legacy_percentage="Moderate (20-50%)",
    code_quality="Okay",
    methodology="Scrum",
    sprint_length="2 Wochen",
    deployment_frequency="Weekly",
    collaboration_model="Hybrid",
    main_goal="Speed",
    budget="Medium (2k-10k/month)",
    timeline="Medium (3-6 months)",
    risk_tolerance="Cautious",
    
    # Derived
    tech_pattern_match="python_web",
    compliance_tier=3,  # Banking = Strict
    culture_pattern_match="safety_first",
    
    # Metadata
    filtered_questions_count=24,  # 35% reduction
    recommended_tools=["GitHub Copilot Enterprise", "Cursor Pro", "Ruff"]
)
```

---

## 🎯 **Integration mit Pre-Readiness & Maturity**

### **Context → Pre-Readiness Filtering**

**Before Context (Generic Pre-Readiness):**
- 70 Fragen, viele irrelevant

**After Context (Filtered Pre-Readiness):**
- 45 Fragen (-35%), alle relevant

**Example Filtering:**
```python
def filter_prereadiness_questions(
    all_questions: List[Question],
    context: ProjectContext
) -> List[Question]:
    """Filter Pre-Readiness questions based on context."""
    
    filtered = []
    
    for q in all_questions:
        # Skip governance for small teams
        if q.category == "governance" and context.team_size in ["Solo", "Small"]:
            continue
        
        # Skip client policy for own IP
        if q.id == "client_ai_policy" and context.code_ownership == "Own IP":
            continue
        
        # Skip BaFin for non-banking
        if q.id == "bafin_compliance" and context.customer_industry != "Banking":
            continue
        
        # Keep question
        filtered.append(q)
    
    return filtered
```

---

### **Context + Pre-Readiness → Maturity Filtering**

**Before Context (Generic Maturity):**
- 80 Fragen, viele nicht anwendbar

**After Context + Pre-Readiness (Filtered Maturity):**
- 50 Fragen (-37%), fokussiert auf relevante Dimensionen

**Example Filtering:**
```python
def filter_maturity_questions(
    all_questions: List[Question],
    context: ProjectContext,
    prereadiness_result: ReadinessResult
) -> List[Question]:
    """Filter Maturity questions based on context + pre-readiness."""
    
    filtered = []
    
    for q in all_questions:
        # Skip advanced questions if pre-readiness score low
        if q.difficulty == "advanced" and prereadiness_result.percentage < 60:
            continue
        
        # Skip team questions for solo
        if q.flight_level == 2 and context.team_size == "Solo":
            continue
        
        # Skip public AI questions for strict compliance
        if q.tool_type == "public_ai" and context.compliance_tier == 3:
            continue
        
        # Keep question
        filtered.append(q)
    
    return filtered
```

---

## 📈 **Business Impact: Context Assessment**

### **Completion Rate Improvement**

**Before Context Assessment:**
- Generic 99-question assessment
- **45% Completion Rate**
- Reason: 40% Fragen irrelevant → Frustration

**After Context Assessment:**
- 60-65 relevante Fragen (-35%)
- **80% Completion Rate** (+35 percentage points)
- Reason: Alle Fragen relevant → Engagement

---

### **Actionability Improvement**

**Before Context Assessment:**
- Generic "Install GitHub Copilot" Empfehlung
- **50% Actionability** (Banking kann nicht, Java-Team will nicht)

**After Context Assessment:**
- Tech-Stack-spezifisch: "Install IntelliJ AI Assistant (Java optimal)"
- Compliance-aware: "Install Copilot Enterprise (EU-Only)"
- **80% Actionability** (+60% improvement)

---

### **Conversion Rate Improvement**

**Before Context Assessment:**
- Generic Roadmap: "Implement AI Tools in 90 Days"
- **15% Conversion** zu Paid Engagement

**After Context Assessment:**
- Individualisierter Roadmap: "Django + Copilot + Ruff in 60 Days"
- **21% Conversion** (+40% improvement)

---

## 🔧 **Technical Implementation**

### **Context Analyzer Service**

```python
class ContextAnalyzer:
    """Analyzes ProjectContext and enriches with patterns."""
    
    @staticmethod
    def analyze_and_enrich(context: ProjectContext) -> ProjectContext:
        """Enrich context with derived patterns."""
        
        # Tech Pattern
        context.tech_pattern_match = ContextAnalyzer._detect_tech_pattern(context)
        
        # Compliance Tier
        context.compliance_tier = ContextAnalyzer._detect_compliance_tier(context)
        
        # Culture Pattern
        context.culture_pattern_match = ContextAnalyzer._detect_culture_pattern(context)
        
        # Recommended Tools
        context.recommended_tools = ContextAnalyzer._get_recommended_tools(context)
        
        return context
    
    @staticmethod
    def _detect_tech_pattern(context: ProjectContext) -> str:
        # ... pattern matching logic ...
        pass
    
    @staticmethod
    def _detect_compliance_tier(context: ProjectContext) -> int:
        # ... compliance tier logic ...
        pass
```

---

### **Question Engine Service**

```python
class QuestionEngine:
    """Loads and filters questions based on context."""
    
    def load_filtered_questions(
        self,
        assessment_type: str,
        context: Optional[ProjectContext] = None,
        culture_data: Optional[dict] = None
    ) -> List[Question]:
        """Load questions with optional context-based filtering."""
        
        # Load raw questions
        questions = self._load_raw_questions(assessment_type)
        
        # No filtering for context assessment itself
        if assessment_type == "context":
            return questions
        
        # Filter pre-readiness based on context
        if assessment_type == "prereadiness" and context:
            return self._filter_prereadiness(questions, context)
        
        # Filter maturity based on context + culture
        if assessment_type == "maturity" and context and culture_data:
            return self._filter_maturity(questions, context, culture_data)
        
        return questions
```

---

## 🚀 **Next Steps**

### **Für Assessment-Durchführung:**

1. **Start Context Assessment:**
   - Route: `/modular/context/start`
   - Dauer: 5-7 Minuten
   - Output: ProjectContext Object

2. **Proceed to Pre-Readiness:**
   - Route: `/modular/readiness/start`
   - Fragen werden basierend auf Context gefiltert
   - Dauer: 10-12 Minuten (statt 15-20 generic)

3. **Proceed to Maturity:**
   - Route: `/modular/maturity/start`
   - Fragen werden basierend auf Context + Pre-Readiness gefiltert
   - Dauer: 12-15 Minuten (statt 20-25 generic)

**Total Time:** 27-34 Minuten (vs. 50-65 generic) = **-45% Zeit**

---

### **Für Framework-Integration:**

- **Siehe:** [ai_maturity_assessment_methodology.md](ai_maturity_assessment_methodology.md) für Maturity Details
- **Siehe:** [README.md](README.md) für Sequential Assessment Flow
- **Siehe:** `../change_management/` für Change Management basierend auf Context

---

## 📚 **Referenzen**

**POC Implementation:**
- `ai_first_poc/app/config/context_questions.py` - Fragen-Katalog
- `ai_first_poc/app/services/context_analyzer.py` - Pattern Matching
- `ai_first_poc/app/services/question_engine.py` - Filtering Logic
- `ai_first_poc/CONTEXT_AWARE_SEQUENTIAL_ARCHITECTURE.md` - Architecture Dokumentation

**Research Basis:**
- **User Research (2024):** 45% Completion bei generischen Assessments vs. 80% bei kontextbasierten
- **A/B Test (60 Teilnehmer):** +35% Completion, +60% Actionability, +40% Conversion

---

**Status:** ✅ Implemented in POC, Now documented in Framework
