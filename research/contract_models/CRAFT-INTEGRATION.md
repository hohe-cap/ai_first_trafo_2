# Contract Models → CRAFT Integration Notes

**Status:** Research → aktiv integriert
**Datum:** 2026-03-03
**Quelle:** `research/contract_models/` (portiert aus externem Projekt)

---

## Kernerkenntnis

Das Vertragsmodell ist kein reines Business-Development-Thema — es ist ein **struktureller Flow-Constraint** der AI-Transformation. Die Verbindung läuft über eine einfache Kausalkette:

```
T&M-Vertrag
  → AI-Effizienz = weniger Stunden = weniger Revenue
  → systemischer Fehlanreiz gegen AI-Adoption
  → kein Budget für Champions (20% Kapazität)
  → kein Budget für Tooling ohne Stunden-ROI
  → VSM-Workshops nicht gegenüber Kunden begründbar
  → Shadow AI statt offizieller Adoption
  → CRAFT-Transformation scheitert strukturell
```

Dies erklärt einen wesentlichen Teil des MIT NANDA-Datenpunkts
("95% Enterprise AI-Piloten scheitern") aus einer kommerziellen statt
technischen Perspektive.

---

## Integration in CRAFT

### Wo es reingehört: Dimension F (Flow & Process Integration)

Commercial Flow Alignment ist kein separates Thema, sondern ein Sub-Topic
von Dimension F — analog zu Value Stream Mapping, aber auf der kommerziellen
statt operativen Ebene.

**Integration erfolgt (2026-03-03):**

| Dokument | Änderung |
|---|---|
| `framework/ai-transformation-framework-craft.md` | Neuer Abschnitt "Commercial Flow Alignment" in Section 2.4 |
| `framework/ai-transformation-framework-craft.md` | F-KPI-Zeile um "Commercial Flow Alignment Score" erweitert |
| `deliverables/question_banks/context-readiness.yaml` | 2 neue Readiness-Fragen: `rdy_commercial_flow_alignment`, `rdy_contract_transition_readiness` |
| `deliverables/question_banks/context-readiness.yaml` | Category "processes" zu "Prozesse, Workflows & Commercial Flow" erweitert |
| `AGENTS.md` | F-Dimension-Beschreibung aktualisiert |

**Bereits vorhanden (vor Integration):**
- `ctx_contract_model` Frage (order 14) in context-readiness.yaml
- `incentive_alignment` als derived pattern im Scoring

---

## Abgrenzung: Was aus den Contract Models ins Framework gehört

### ✅ Integriert (als Commercial Flow Alignment in Dimension F)
- T&M-Paradoxon und systemischer Fehlanreiz
- Vertragsmodell-Kompatibilitätsmatrix (4 Typen)
- 3 Interventionspfade (Innovation Budget, Vertragsrunde, Transparenz-Strategie)
- Readiness-Check im Kickoff (Commercial Flow Check)
- AI Intervention Katalog: neue Kategorie "Commercial Flow Interventions"

### ⏳ Potenzielle weitere Integration (noch offen)
- Gainsharing Pilot Design als Deliverable
  → würde ein eigenes `deliverables/contract_models/` Dokument
    (adaptiert aus research) rechtfertigen, wenn konkret gebraucht
- Kunden-Workshop "AI-First Commercial Models" als Workshop-Design
  → könnte als Training-Deliverable entstehen (Training-Design Skill)
- Detaillierte Vertragsklauseln / Templates
  → gehört zum Governance Starter Kit (Dimension C), nicht Dimension F

### ❌ Nicht integriert (bleibt in research/)
- Salesforce-Beispiele und externe Revenue-Benchmarks
  → für CRAFT-Nutzer zu spezifisch / zu vertriebs-fokussiert
- Detaillierte Pricing-Mathematik (Tier-Modelle, Revenue-Projektionen)
  → Scope außerhalb der Transformation-Begleitung
- Market-Data 2024/2025 (BCG, McKinsey Benchmarks zu Seat-based Pricing)
  → als Referenz wertvoll, aber kein CRAFT-Deliverable

---

## Verbindung zu anderen CRAFT-Dimensionen

| Dimension | Bezug zu Commercial Flow |
|---|---|
| **C – Compliance** | Vertragsmodell-Änderungen brauchen Betriebsrats-Clearance und ggf. EU AI Act-Prüfung |
| **R – Readiness** | Shadow AI Amnestie wird durch T&M-Druck verstärkt; Psychological Safety leidet wenn Effizienz "versteckt" wird |
| **A – Adoption** | T&M-Umgebungen zeigen oft niedrige offizielle Adoption bei hoher Shadow-AI-Rate |
| **F – Flow** | Direkter Sub-Topic: Commercial Flow Alignment (neu integriert) |
| **T – Technical** | Tooling-Budget direkt abhängig vom Vertragsmodell |

---

## Deep-Dive: T&M-Exit-Strategien (aus research/contract_models/)

Für den AI Transformation Manager bei T&M-Kunden gibt es drei praxiserprobte Pfade:

### Pfad 1: Innovation Budget (kurzfristig, 0-6 Monate)
`research/contract_models/contract_models_overview.md` → Hybrid Pricing Variante A

Verhandlung eines separaten "AI Transformation Budgets" außerhalb der T&M-Stunden.
Positionierung: "Einmalige Investition für dauerhafte Effizienzsteigerung."
Vorteil: Keine Vertragsumstellung nötig, schnell umsetzbar.
Risiko: Endet nach Budget-Periode, keine strukturelle Lösung.

### Pfad 2: Gainsharing Pilot (mittelfristig, 6-18 Monate)
`research/contract_models/contract_models_overview.md` → Gainsharing Contracts

Effizienzgewinne transparent machen (z.B. -30% Test-Aufwand durch AI),
50/50-Teilung vereinbaren. Vorteil: Kein Vertragsrisiko für den Kunden,
konkreter Business Case, natürlicher Start für Outcome-Orientierung.

### Pfad 3: Vertragsmodell-Wechsel (langfristig, 12-24 Monate)
`research/contract_models/contract_models_overview.md` → Outcome-Based Pricing

Vollständiger Wechsel zu 60-70% Base Fee + 30-40% Performance Fee.
Erfordert: Messinfrastruktur (DORA-Metriken als Baseline),
KPI-Definitionen im Voraus, höheres gegenseitiges Vertrauen.
CRAFT gibt hier den Rahmen: DORA-Metriken aus Schicht 1 werden zur
Verhandlungsgrundlage für Performance-Fees.

---

*Vollständige Contract Model Details: `research/contract_models/`*
*CRAFT Framework Integration: `framework/ai-transformation-framework-craft.md` Section 2.4*
