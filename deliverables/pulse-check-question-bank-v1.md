# Pulse Check Question Bank (CRAFT) — anonym & segmentierbar (v1)

Stand: Feb 2026 | Draft

## Ziel
Ein kurzer, quartalsweiser Pulse Check (≤15 Minuten), der:
- anonym bleibt (ehrliche Antworten)
- dennoch eine **organisatorische Verortung** erlaubt (Interventionen richtig platzieren)
- Trends über Zeit sichtbar macht
- einen **Spider-Score (1–5) pro Dimension** liefert, direkt visualisierbar

**Design-Regeln**
- Pro Dimension: **1 Maturity-Level-Frage** (Spider-Score) + **1–2 MC-Fragen** (Diagnostik) + 0–1 Freitext.
- **Keine Likert-Skalen.** Stattdessen: Maturity-Stufen mit konkreten Beschreibungen (eindeutig, wenig Interpretationsspielraum).
- Segmentfelder sind **nicht-identifizierend** und werden nur bei **k‑Anonymity** ausgewertet.
- Keine personenbezogenen Daten (Name, E-Mail, Mitarbeiter-ID). Keine Freitextfelder, die zu Identifikation verleiten.
- **Context-adaptive Filterung:** Fragen und MC-Optionen werden basierend auf dem CRAFT Context Assessment angepasst (→ `craft-context-assessment.md`). Irrelevante Fragen/Optionen werden ausgeblendet, branchenspezifische ergänzt.

**Warum Maturity-Stufen statt Likert?**
- Jede Stufe beschreibt ein **konkretes Verhalten/eine konkrete Situation** — weniger Interpretationsspielraum als „stimme eher zu".
- Der Median ergibt einen **natürlichen Spider-Score** (1–5), vergleichbar über Dimensionen und Quartale.
- Kein Response-Shift-Problem: Stufe 3 bleibt Stufe 3, auch wenn das Bewusstsein steigt.
- MC-Fragen liefern daneben die **diagnostische Tiefe** (Was blockiert? Was hilft?).

---

## 1) Anonymität + Verortung: Segmentfelder (empfohlen)

### Pflicht (minimal)
1. **Team-/Cluster-Code** (vordefiniert, nicht frei getippt)
   - Beispiel: „Team A", „Team B", „Cluster Claims", „Platform", „Ops"
2. **Rollen-Familie** (Bucket)
   - Dev, QA/Test, PO/BA, Ops/SRE, Security/Compliance, Management/Lead, Other
3. **Arbeitskontext**
   - Produktteam, Plattformteam, Shared Service, Projekt/Programm

### Optional (wenn k groß genug)
4. **Seniority**
   - Junior, Mid, Senior, Lead/Principal
5. **Domänen-Nähe**
   - hoch / mittel / gering (wie oft arbeite ich mit fachlich sensiblen Daten)

### Auswertungsregeln (k‑Anonymity)
- Segment-Ergebnisse nur anzeigen, wenn **k ≥ 5** Antworten im Segment.
- Keine Kreuztabellen, die zu kleinen Gruppen führen (z.B. Team+Rolle+Seniority nur wenn k stabil bleibt).
- Freitext nur als **Themen-Cluster** veröffentlichen, nie als Rohtext.

---

## 2) Fragenkatalog nach Dimension

### Fragetypen
- **Maturity (M):** „Welche Stufe beschreibt eure/deine aktuelle Situation am besten?" → 5 Stufen mit konkreter Beschreibung → **Spider-Score**
- **Multiple Choice (MC):** Diagnostik-Fragen → Blocker, Hebel, Prioritäten
- **Freitext (FT):** optional, max. 1 pro Dimension

---

### C — Compliance & Governance

**C-M1 (Spider-Score):** „Welche Stufe beschreibt eure aktuelle Compliance/Governance-Situation am besten?"

| Stufe | Beschreibung |
|-------|-------------|
| 1 | Ich weiß nicht, welche AI-Tools ich nutzen darf; es gibt keine klare Policy. |
| 2 | Ich kenne die Regeln grob, aber bei Unsicherheit weiß ich nicht, wen ich fragen soll oder warte sehr lange auf Antwort. |
| 3 | Policies existieren und sind bekannt; Freigaben/Antworten kommen, aber dauern oft zu lang oder sind nicht praxisnah. |
| 4 | Policies sind klar und praxisnah; bei Unsicherheit bekomme ich schnell eine verlässliche Antwort. |
| 5 | Compliance ist in meinen Workflow integriert (automatisierte Checks, Self-Service-Freigaben, klare Entscheidungsbäume). |

**C-MC1:** „Welche Situation blockiert euch am häufigsten?"
- unklare Datenklassifizierung / Tool nicht freigegeben / BR/Privacy unklar / Security-Prozess langsam / Kosten/Quota / nichts blockiert aktuell / anderes

**C-FT1** (optional): „Welche 1 Regel/Änderung würde euch sofort helfen?" (max. 280 Zeichen)

---

### R — Readiness (Human & Cultural)

**R-M1 (Spider-Score):** „Welche Stufe beschreibt deine persönliche AI-Readiness am besten?"

| Stufe | Beschreibung |
|-------|-------------|
| 1 | Ich habe kein Verständnis dafür, was AI für meine Arbeit bedeutet; es gibt keine Enablement-Angebote. |
| 2 | Ich habe ein grobes Verständnis, fühle mich aber unsicher in der Anwendung; ich weiß nicht, wo ich anfangen soll. |
| 3 | Ich kann AI-Tools grundlegend bedienen und im Team offen darüber sprechen, bin aber unsicher bei Qualitätsbewertung (Halluzinationen, Grenzen). |
| 4 | Ich kann AI-Outputs kritisch bewerten und sinnvoll in meinen Alltag einbauen; ich verstehe, wie sich meine Rolle verändert. |
| 5 | Ich bin sicher im Umgang mit AI, unterstütze andere aktiv (Champion-Rolle), und gestalte Veränderungen in meiner Rolle proaktiv. |

**R-MC1:** „Was wäre für dich der stärkste Enablement-Hebel?"
- kurze Beispiele/Playbooks / Pairing mit erfahrenen Kolleg:innen / strukturiertes Training / bessere Prompts/Templates / mehr Zeit zum Experimentieren / Champion-Support im Team

**R-MC2:** „Was hemmt dich aktuell am meisten?"
- Unsicherheit über Qualität der Outputs / unklar, wofür AI sinnvoll ist / fehlende Zeit / fehlendes Training / Sorge um Rolle/Arbeitsplatz / technische Hürden / nichts hemmt mich

---

### A — Adoption & Usage

**A-M1 (Spider-Score):** „Welche Stufe beschreibt deine tatsächliche AI-Nutzung am besten?"

| Stufe | Beschreibung |
|-------|-------------|
| 1 | Ich nutze keine AI-Tools für meine Arbeit. |
| 2 | Ich nutze AI gelegentlich für einfache Aufgaben (z.B. Textformulierung, Quick Questions), nicht regelmäßig. |
| 3 | Ich nutze AI regelmäßig (mind. wöchentlich) in 1–2 Arbeitsbereichen und es spart mir merklich Zeit. |
| 4 | AI ist fester Bestandteil meiner täglichen Arbeit in mehreren Bereichen/SDLC-Phasen. |
| 5 | AI ist durchgängig in meinen Workflow integriert; ich optimiere aktiv Prompts/Workflows und teile Best Practices. |

**A-MC1:** „Welcher Nutzungsmodus beschreibt deine typische GenAI-Nutzung am besten?" (Usage Mode)
- 1: gar nicht
- 2: Chat-basiert (Q&A/Copy-Paste), nicht integriert
- 3: integriert (IDE/Workflow), Schritt-für-Schritt gesteuert
- 4: agentisch (teilautonom), mit Review/Gates
- 5: multi-agentisch (mehrere Agenten), end-to-end Aufgaben

**A-MC2:** „In welchen SDLC-Phasen nutzt du AI heute?" (Mehrfachauswahl)
- Requirements / Design / Coding / Code Review / Testing / Docs / Ops / Incident / Security / keine

**A-MC3:** „Nutzt du aktuell nicht-freigegebene Tools (Shadow AI) für Arbeitszwecke?"
- nie / selten / gelegentlich / häufig
- *(Hinweis im Survey: anonym, nur Trend wird ausgewertet)*

---

### F — Flow & Process Integration

**F-M1 (Spider-Score):** „Welche Stufe beschreibt die AI-Integration in eure Team-Workflows am besten?"

| Stufe | Beschreibung |
|-------|-------------|
| 1 | AI wird bei uns nicht in Prozesse/Workflows eingebunden. |
| 2 | Einzelne nutzen AI nebenbei (z.B. Chat), aber es ist kein Teil unserer Team-Workflows. |
| 3 | Wir haben erste AI-gestützte Workflows (z.B. PR Pre-Review, Testgenerierung), aber die meisten Prozesse laufen wie vorher. |
| 4 | AI ist in mehreren Kern-Workflows eingebettet und reduziert messbar Wartezeiten oder Rework. |
| 5 | AI ist systematisch in unsere Wertschöpfungskette integriert; Bottlenecks werden datengetrieben identifiziert und adressiert. |

**F-MC1:** „Wo ist euer größter Prozess-Bottleneck aktuell?"
- PR Review / QA/Testing / Release Approvals / Umgebungen / Anforderungen/Refinement / Abhängigkeiten (andere Teams) / keiner dominant / anderes

**F-MC2:** „Welche AI-Intervention würde euch am ehesten helfen?"
- PR Pre-Review / Testdaten-Generierung / Testgenerierung / Dokumentations-Automation / Incident Assist / Ticket-Refinement / anderes

---

### T — Technical Enablement

**T-M1 (Spider-Score):** „Welche Stufe beschreibt euer aktuelles AI-Tooling am besten?"

| Stufe | Beschreibung |
|-------|-------------|
| 1 | Ich habe keinen Zugang zu freigegebenen AI-Tools. |
| 2 | Ich habe Zugang, aber nur als separaten Chat (nicht in IDE/Workflow integriert); Zugang einzurichten war umständlich. |
| 3 | AI ist in mein Hauptwerkzeug integriert (z.B. IDE), aber Verfügbarkeit oder Performance schwankt; Prompts/Playbooks fehlen. |
| 4 | AI-Tools sind zuverlässig, performant und in IDE/CI integriert; wiederverwendbare Prompts/Playbooks sind verfügbar. |
| 5 | AI-Tooling ist vollständig integriert (IDE, CI/CD, Monitoring), Self-Service-Provisioning, automatisierte Guardrails, Kosten-Transparenz. |

**T-MC1:** „Welcher Nutzungsmodus ist bei euch offiziell (Tools/Policies) realistisch unterstützt?"
- 1: keine Nutzung möglich
- 2: Chat-only
- 3: integrierter Assistant
- 4: agentisch (single)
- 5: multi-agentisch

**T-MC2:** „Was ist die größte technische Reibung?"
- kein Zugang / SSO/Provisioning / Latenz/Performance / falsche oder limitierte Modelle / fehlender Kontext (Repo/Docs) / Kosten/Quota / Policies blockieren Tooling / keine Reibung

---

## 3) Spider-Diagramm & Auswertung

### Spider-Score berechnen
- Pro Dimension: **Median** der Maturity-Antworten (M1) = Score 1–5.
- Optional: nach Segment aufschlüsseln (Team, Rolle, Arbeitskontext) — nur bei k ≥ 5.
- 5 Achsen (C, R, A, F, T) → Radar-/Spider-Chart.

### Trend-Darstellung
- Quartalsvergleich: Spider-Overlay (aktuell vs. vorheriges Quartal).
- Delta-Tabelle: je Dimension +/- Stufen (Median-Shift).

### HITL-Review (empfohlen)
- AI erstellt:
  - Spider-Diagramm + Trend-Overlay
  - Delta-Analyse je Dimension (Δ zum letzten Quartal)
  - Top-3 Blocker/Treiber (aus MC-Antworten + Themen-Clustering der Freitexte)
  - 5–10 Interventionsvorschläge als Optionen (mit geschätztem Aufwand/Impact)
- Menschen entscheiden in einem 60–90 Min Review:
  - 1–3 Interventionen pro Zyklus
  - Welche Segmente priorisiert werden
  - Welche Fragen im nächsten Pulse Check angepasst/gestrichen werden

---

## 4) Anti-Patterns
- Pulse Check als Performance-Ranking von Individuen
- Segment-Drilldown unter k-Schwelle
- Zu viele Fragen ("nur noch 5 Minuten mehr")
- Freitext ohne klare Moderation (Deanonymisierung durch Details)
- Maturity-Stufen als Bewertung von Teams nutzen (statt als Steuerungsinstrument)
- Spider-Scores ohne MC-Diagnostik interpretieren (Zahl ohne Kontext)
