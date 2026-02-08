# Pulse Check Question Bank (CRAFT) — anonym & segmentierbar (v1)

Stand: Feb 2026 | Draft

## Ziel
Ein kurzer, quartalsweiser Pulse Check (≤15 Minuten), der:
- anonym bleibt (ehrliche Antworten)
- dennoch eine **organisatorische Verortung** erlaubt (Interventionen richtig platzieren)
- Trends über Zeit sichtbar macht

**Design-Regeln**
- Pro Dimension **3–4 Fragen** (Likert oder Multiple Choice) + 0–1 Freitext.
- Segmentfelder sind **nicht-identifizierend** und werden nur bei **k‑Anonymity** ausgewertet.
- Keine personenbezogenen Daten (Name, E-Mail, Mitarbeiter-ID). Keine Freitextfelder, die zu Identifikation verleiten.

---

## 1) Anonymität + Verortung: Segmentfelder (empfohlen)

### Pflicht (minimal)
1. **Team-/Cluster-Code** (vordefiniert, nicht frei getippt)
   - Beispiel: „Team A“, „Team B“, „Cluster Claims“, „Platform“, „Ops“
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

Antwortskalen (Standard):
- Likert 1–5: stimme nicht zu … stimme voll zu
- Multiple Choice: 4–6 Optionen

### C — Compliance & Governance
1) „Ich weiß, welche AI‑Tools ich für Arbeitszwecke nutzen darf.“ (Likert)
2) „Wenn ich unsicher bin, bekomme ich schnell eine verlässliche Antwort.“ (Likert)
3) „Die Regeln/Policies sind praxisnah und behindern meine Arbeit nicht unnötig.“ (Likert)
4) (MC) „Welche Situation blockiert euch am häufigsten?“
   - unklare Datenklassifizierung / Tool nicht freigegeben / BR/Privacy unklar / Security-Prozess langsam / Kosten/Quota / anderes
Freitext (optional): „Welche 1 Policy/Regel würde euch sofort helfen?“

### R — Readiness (Human & Cultural)
1) „Ich fühle mich sicher genug, AI‑Nutzung (inkl. Fehler) im Team offen anzusprechen.“ (Likert)
2) „Ich kann AI‑Outputs kritisch bewerten (Qualität, Halluzinationen, Security).“ (Likert)
3) „Ich verstehe, wie AI meine Rolle verändert (Aufgaben, Verantwortung).“ (Likert)
4) (MC) „Was wäre für dich der stärkste Enablement‑Hebel?“
   - kurze Beispiele/Playbooks / Pairing-Sessions / Training / bessere Prompts / mehr Zeit / Champion-Support

### A — Adoption & Usage
1) (MC) „Wie häufig nutzt du AI‑Unterstützung für deine Arbeit?“
   - täglich / mehrmals pro Woche / wöchentlich / selten / nie
2) (MC) „Welcher Nutzungsmodus beschreibt deine typische GenAI‑Nutzung am besten?“
   - 1: gar nicht
   - 2: Chat-basiert (Q&A/Copy-Paste), nicht integriert
   - 3: integriert (IDE/Workflow), Schritt-für-Schritt gesteuert
   - 4: agentisch (teilautonom), mit Review/Gates
   - 5: multi-agentisch (mehrere Agenten), end-to-end Aufgaben
2) (MC) „In welchen SDLC‑Phasen nutzt ihr AI heute?“ (Mehrfachauswahl)
   - Requirements / Design / Coding / Code Review / Testing / Docs / Ops / Incident / Security
3) „AI spart mir in relevanten Aufgaben messbar Zeit oder verbessert Qualität.“ (Likert)
4) (MC) „Nutzt du aktuell nicht-freigegebene Tools (Shadow AI) für Arbeitszwecke?“
   - nie / selten / gelegentlich / häufig (mit Hinweis: anonym, Trend zählt)

### F — Flow & Process Integration
1) „AI ist bei uns in konkrete Workflows eingebettet (nicht nur ‘Chat nebenbei’).“ (Likert)
2) (MC) „Wo ist euer größter Prozess-Bottleneck aktuell?“
   - PR Review / QA / Release approvals / Umgebungen / Anforderungen / Abhängigkeiten / anderes
3) „Die wichtigsten Bottlenecks werden aktiv mit klaren Experimenten angegangen.“ (Likert)
4) (MC) „Welche AI‑Intervention würde euch am ehesten helfen?“
   - PR Pre‑Review / Testdaten / Testgenerierung / Doc‑Automation / Incident Assist / Ticket‑Refinement

### T — Technical Enablement
1) „Die freigegebenen Tools sind zuverlässig verfügbar und schnell genug.“ (Likert)
2) „AI ist in meinem Hauptwerkzeug integriert (IDE/Repo/CI), nicht nur als separater Chat.“ (Likert)
3) (MC) „Welcher Nutzungsmodus ist bei euch offiziell (Tools/Policies) realistisch unterstützt?“
   - 1: keine Nutzung möglich
   - 2: Chat-only
   - 3: integrierter Assistant
   - 4: agentisch (single)
   - 5: multi-agentisch
3) (MC) „Was ist die größte technische Reibung?“
   - kein Zugang / SSO/Provisioning / Latenz / falsche Modelle / Kontext fehlt / Kosten/Quota / Policies blockieren
4) „Ich habe Zugriff auf wiederverwendbare Prompts/Playbooks für meine Rolle.“ (Likert)

---

## 3) Auswertung & HITL-Review (empfohlen)
- AI erstellt:
  - Trend-Analyse je Dimension (Δ zum letzten Quartal)
  - Top‑3 Treiber (aus MC + Themen-Clustering)
  - 5–10 Interventionsvorschläge als Optionen (mit Aufwand/Impact)
- Menschen entscheiden in einem 60–90 Min Review:
  - 1–3 Interventionen pro Zyklus
  - Welche Segmente priorisiert werden
  - Welche Fragen im nächsten Pulse Check angepasst/gestrichen werden

---

## 4) Anti-Patterns
- Pulse Check als Performance-Ranking von Individuen
- Segment-Drilldown unter k‑Schwelle
- Zu viele Fragen ("nur noch 5 Minuten mehr")
- Freitext ohne klare Moderation (Deanonymisierung durch Details)
