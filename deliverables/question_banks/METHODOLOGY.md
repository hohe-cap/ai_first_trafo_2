# CRAFT Explorations-Methodik

**Version:** 2.0 | **Stand:** Feb 2026 | **Status:** Draft

> Dieses Dokument ist die Design-Referenz ("Design Bible") fuer alle CRAFT Question Banks.
> Es beschreibt die methodischen Prinzipien, Scoring-Logik und Kalibrierungsregeln,
> die sicherstellen, dass Explorationen konsistent, vergleichbar und handlungsleitend sind.

---

## 1) Drei-Ebenen-Architektur

| Ebene | Datei | Zweck | Frequenz | Respondent | Dauer |
|-------|-------|-------|----------|------------|-------|
| 1 | `context-readiness.yaml` | Kontext & Readiness (Fakten, Rahmenbedingungen) | Einmalig (Kickoff) | AI Transformation Manager / Tech Lead (1-2 Personen) | ~30 Min |
| 2 | `pulse-check.yaml` | CRAFT Pulse Check (High-Level Spider-Score) | Quartalweise | Alle Teammitglieder (anonym) | ≤15 Min |
| 3 | `deep-dive-*.yaml` (5 Dateien) | Dimension Deep-Dives (granulare Sub-Topic-Analyse) | 1x Kickoff (Baseline) + on-demand | Alle Teammitglieder (anonym) | ~15-20 Min pro Dimension |

### Beziehung Pulse Check ↔ Deep-Dive

```
Deep-Dive (Dimension C):
  ├── Sub-Topic 1: Policy-Klarheit        → Maturity 1-5
  ├── Sub-Topic 2: Governance-Speed        → Maturity 1-5
  ├── Sub-Topic 3: Datenklassifizierung    → Maturity 1-5
  └── Sub-Topic 4: Regulatorische Readiness → Maturity 1-5
                                              ↓ aggregiert zu
Pulse Check (Dimension C):
  └── C-M1: Compliance & Governance         → Maturity 1-5 (Summary)
```

- **Pulse Check** = 1 Maturity-Frage pro Dimension (Macro-Blick, 5 Fragen gesamt)
- **Deep-Dive** = 3-5 Maturity-Fragen pro Dimension auf Sub-Topic-Ebene (Micro-Blick)
- Der Pulse Check ist ein **Extrakt** der Deep-Dives
- Der Deep-Dive wird 1x beim **Kickoff als Baseline** durchgefuehrt, danach on-demand

### Kontext-Exploration (Ebene 1) — Sonderrolle

Ebene 1 unterscheidet sich fundamental von Ebene 2 und 3:
- **Fakten, nicht Meinungen** — erfasst Rahmenbedingungen (Branche, Team-Groesse, Tech-Stack, etc.)
- **Nicht anonym** — wird von 1-2 Personen ausgefuellt (AI Transformation Manager / Tech Lead)
- **Kein Maturity-Modell** — Antworten sind kategorial (Branche, Methodik) oder diagnostisch (Readiness 0-100%)
- **Steuert adaptives Filtering** — Ergebnisse bestimmen, welche Fragen/Optionen in Pulse Check und Deep-Dives erscheinen

---

## 2) Universelles Maturity-Progressionsmuster

**KRITISCH:** Jede Maturity-Frage in Pulse Check und Deep-Dives folgt demselben 5-Level-Muster. Dies stellt sicher, dass Level 3 in Sub-Topic A vergleichbar ist mit Level 3 in Sub-Topic B.

| Level | Label | Universelles Muster | Organisatorischer Reifegrad |
|-------|-------|---------------------|-----------------------------|
| 1 | **Exploring** | Kein Bewusstsein, keine Struktur, keine Prozesse | Einzelne Enthusiasten, keine systematische Nutzung |
| 2 | **Experimenting** | Bewusstsein vorhanden, aber ad-hoc und unsicher | Erste Piloten, keine Standardisierung |
| 3 | **Embedding** | Definierter Prozess, funktioniert grundlegend | Breite Nutzung, Teil des Workflows |
| 4 | **Scaling** | Effektiv, gemessen, praxisnah | Standardprozess, messbare Outcomes |
| 5 | **Evolving** | Integriert, automatisiert, kontinuierlich optimiert | AI treibt Prozessinnovation |

### Kalibrierungsregeln

Beim Schreiben neuer Maturity-Beschreibungen:

1. **Jede Stufe beschreibt konkretes Verhalten** — nicht "stimme zu/nicht zu" (kein Likert)
2. **Von der Ich-Perspektive schreiben** — "Ich weiss nicht..." / "Ich kann..." (nahbar, ehrlich)
3. **Progression muss monoton steigend sein** — jede Stufe ist klar besser als die vorherige
4. **Stufe 3 ist der Wendepunkt** — von ad-hoc zu definiert; die meisten Organisationen starten hier oder darunter
5. **Stufe 5 ist aspirational** — die wenigsten erreichen Stufe 5 auf allen Sub-Topics; das ist ok und gewollt
6. **Keine Ueberlappung** — ein Respondent muss sich eindeutig einer Stufe zuordnen koennen

---

## 3) Design-Regeln fuer Fragen

### Keine Likert-Skalen

**Verboten:**
- "Stimme voll zu / Stimme eher zu / Neutral / ..."
- "Sehr hoch / Hoch / Mittel / Niedrig / Sehr niedrig"
- "Sehr zufrieden / Zufrieden / Neutral / Unzufrieden / ..."

**Stattdessen:** Konkrete Verhaltensbeschreibungen, die eine reale Situation abbilden.

**Warum?**
- Likert-Skalen haben **Interpretationsspielraum** — "stimme eher zu" bedeutet fuer jeden etwas anderes
- Maturity-Stufen beschreiben **konkretes Verhalten** — weniger Bias, vergleichbarer ueber Zeit
- Kein **Response-Shift-Problem** — Stufe 3 bleibt Stufe 3, auch wenn das Bewusstsein steigt
- Der Median ergibt einen **natuerlichen Spider-Score** (1-5)

### Fragetypen pro Exploration

| Typ | Symbol | Zweck | Im Spider-Score? |
|-----|--------|-------|-----------------|
| **Maturity** | M | 5-Level Verhaltensbeschreibung → Spider-Score | **Ja** (direkt) |
| **Context/Metrik** | CTX | Faktische Fragen (Dauer, Existenz, Anzahl) | **Nein** (informiert Analyse) |
| **MC-Diagnostik** | MC | Erklaert das WARUM (Blocker, Hebel, Prioritaeten) | **Nein** (informiert Intervention) |
| **Powerful Question** | PQ | Freitext-Reflexion, individueller Raum | **Nein** (qualitative Insights) |

### Deep-Dive Struktur (pro Dimension)

```
1. Context/Metrik-Fragen        (2-3 Stueck, faktisch)
2. Maturity-Fragen              (3-5 Stueck, je 1 pro Sub-Topic, kalibriert)
3. MC-Diagnostik                (1-2 Stueck, Blocker + Intervention)
4. Powerful Question             (1 Stueck, optional, max. 280 Zeichen)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Gesamt: ~8-10 Fragen, ~15-20 Minuten
```

### Pulse Check Struktur (pro Dimension)

```
1. Maturity-Frage               (1 Stueck, High-Level-Summary)
2. MC-Diagnostik                (1-2 Stueck)
3. Freitext                     (0-1 Stueck, nur bei Compliance)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Gesamt pro Dimension: 2-3 Fragen
Gesamt Pulse Check: ~16 Fragen, ≤15 Minuten
```

---

## 4) Scoring-Methodik

### Spider-Score: Min-gewichtete Aggregation

**Formel:**
```
Dimensions-Score = (Median der Sub-Topic-Scores × 0.6) + (Minimum × 0.4)
```

**Warum nicht einfach Median?**
- Ein einzelner Sub-Topic auf Level 1 ist ein **Blocker**, egal wie gut der Rest ist
- Reiner Median versteckt kritische Schwaechen
- Der Minimum-Anteil (40%) sorgt dafuer, dass Blocker sichtbar bleiben

**Beispiel:**
```
Sub-Topic Scores: [4, 1, 3, 5]
Reiner Median:    3.5 → "Embedding" (klingt ok)
Min-gewichtet:    (3.5 × 0.6) + (1 × 0.4) = 2.5 → "Experimenting" (zeigt Problem)
```

### Aggregationsreihenfolge

```
Schritt 1: Pro Sub-Topic → Median ueber alle Respondenten
           (eine Person mit Extrem-Antwort verzieht nicht den Score)

Schritt 2: Pro Dimension → Min-gewichtete Formel ueber Sub-Topic-Scores
           (Blocker bleiben sichtbar)
```

### Context-Fragen als Validierung

Context/Metrik-Fragen fliessen **nicht** in den Spider-Score, aber sie koennen Maturity-Scores **validieren oder widersprechen**.

Beispiel: Wenn das Team bei Governance-Speed Level 4 angibt, aber die Context-Frage "Tool-Approval-Dauer" zeigt 8 Wochen — dann stimmt etwas nicht. Dies wird im HITL-Review diskutiert.

### Pulse Check Scoring

Beim Pulse Check gibt es nur 1 Maturity-Frage pro Dimension → der Score ist direkt der Median ueber alle Respondenten. Keine Min-Gewichtung noetig (nur 1 Frage).

---

## 5) Darstellungsprinzipien

### Drei-Ebenen-Visualisierung

**Ebene 1: Spider-Diagramm** (5 Achsen: C-R-A-F-T)
- High-Level-Ueberblick
- Zeigt Gesamtreife und Ungleichgewichte zwischen Dimensionen
- Quartals-Overlay fuer Trend-Darstellung

**Ebene 2: Sub-Topic-Profil** (Balkendiagramm pro Dimension)
- Granulare Ansicht innerhalb einer Dimension
- Zeigt WO genau der Schuh drueckt
- **Entscheidende Darstellung fuer Interventionsplanung**

```
Compliance & Governance
━━━━━━━━━━━━━━━━━━━━━━
Policy-Klarheit       ████████░░  4/5  Scaling
Governance-Speed      ██░░░░░░░░  1/5  Exploring  ← ⚠️ Blocker
Datenklassifizierung  ██████░░░░  3/5  Embedding
Reg. Readiness        ██████████  5/5  Evolving
```

**Ebene 3: MC-Diagnostik + Powerful Question**
- Erklaert das WARUM hinter den Scores
- Freitext-Insights als Themen-Cluster (nie als Rohtext)

### Anti-Patterns in der Darstellung

- Spider-Scores **ohne** Sub-Topic-Profil zeigen (Zahl ohne Kontext)
- Sub-Topic-Scores als **Ranking** zwischen Teams missbrauchen
- Segment-Drilldown unter **k-Anonymitaets-Schwelle** (k < 5)
- Freitext als **Rohtext** veroeffentlichen (Deanonymisierungsrisiko)

---

## 6) Anonymitaet & Segmentierung

### Pulse Check und Deep-Dives

- **Anonym** — keine personenbezogenen Daten
- **Segmentierbar** — Team-Cluster, Rollen-Familie, Arbeitskontext
- **k-Anonymitaet** — Segment-Ergebnisse nur bei k ≥ 5 Antworten
- **Keine Kreuztabellen** die zu kleinen Gruppen fuehren

### Segmentfelder

**Pflicht (minimal):**
1. Team-/Cluster-Code (vordefiniert)
2. Rollen-Familie (Dev, QA, PO, Ops, Security, Management, Other)
3. Arbeitskontext (Produktteam, Plattformteam, Shared Service, Projekt)

**Optional (wenn k gross genug):**
4. Seniority (Junior, Mid, Senior, Lead/Principal)

### Context-Exploration (Ebene 1)

- **Nicht anonym** — wird von 1-2 benannten Personen ausgefuellt
- Keine Segmentierung noetig

---

## 7) Powerful Questions — Leitlinien

Powerful Questions geben individuellen Reflexionsraum und erzeugen qualitative Insights, die quantitative Scores nicht liefern koennen.

**Regeln:**
- Max. **280 Zeichen** (knapp genug um Fokus zu erzwingen, lang genug fuer einen Gedanken)
- Immer **optional** — niemand muss antworten
- Nur als **Themen-Cluster** veroeffentlichen (AI-gestuetztes Clustering), nie als Rohtext
- Pro Deep-Dive: **1 Powerful Question** am Ende
- Im Pulse Check: **1 uebergreifende** Powerful Question (nur bei Compliance als Pilot)

**Beispiele pro Dimension:**

| Dimension | Powerful Question |
|-----------|------------------|
| C | "Welche Governance-Regel wuerde sich morgen aendern, wenn du entscheiden duerftest?" |
| R | "Was muesste passieren, damit du dich sicher fuehlst, AI aktiv in deinem Arbeitsalltag zu nutzen?" |
| A | "Beschreibe einen konkreten Moment, in dem AI dir wirklich geholfen hat — oder dich frustriert hat." |
| F | "Wenn du einen Schritt in eurem Delivery-Prozess mit AI automatisieren koenntest — welchen?" |
| T | "Welches AI-Tool oder Feature vermisst du am meisten, das es eigentlich geben muesste?" |

---

## 8) HITL-Review (Human-in-the-Loop)

Nach jeder Explorationsrunde (Baseline oder Quartal) findet ein strukturierter Review statt:

**AI erstellt:**
- Spider-Diagramm + Sub-Topic-Profile
- Trend-Overlay (aktuell vs. vorheriges Quartal)
- Delta-Analyse je Dimension und Sub-Topic
- Validierung: Context-Fragen vs. Maturity-Scores (Widersprueche?)
- Top-3 Blocker/Treiber (aus MC-Antworten + Freitext-Clustering)
- 5-10 Interventionsvorschlaege als Optionen

**Menschen entscheiden (60-90 Min Review):**
- 1-3 Interventionen pro Zyklus
- Welche Segmente priorisiert werden
- Welche Fragen in der naechsten Exploration angepasst werden
- Ob ein Deep-Dive fuer eine bestimmte Dimension ausgeloest wird

---

## 9) Versionierung & Weiterentwicklung

- **YAML = Source of Truth** — MD-Dokumente sind abgeleitete Ansichten
- **Versionierung** in jeder YAML-Datei (version: "2.0")
- **Aenderungen an der Methodik** erfordern Update dieses Dokuments
- **Neue Sub-Topics** koennen hinzugefuegt werden, muessen aber dem universellen Progressionsmuster folgen
- **Fragentext** kann angepasst werden, aber die 5-Level-Kalibrierung muss beibehalten werden

---

## Referenzen

- **Framework:** `framework/ai-transformation-framework-craft.md`
- **Question Banks:** `deliverables/question_banks/*.yaml`
- **Pulse Check (menschenlesbar):** `deliverables/pulse-check-question-bank-v1.md`
- **Maturity-Modell:** CRAFT Framework Reifestufen (Exploring → Evolving)
- **Scoring-Inspiration:** DORA Metrics (Median-basiert), Psychometrie (formative Messmodelle)

---

**Letzte Aktualisierung:** 2026-02-12
**Autoren:** AI Transformation Team
