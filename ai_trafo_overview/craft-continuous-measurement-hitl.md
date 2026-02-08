# CRAFT Continuous Measurement & Improvement — HITL Operating System (v1)

Stand: Feb 2026 | Draft

## Ziel
Die 5 CRAFT-Dimensionen (C, R, A, F, T) kontinuierlich **messen** und daraus in 4‑Wochen‑Zyklen **konkrete Verbesserungen** ableiten – im Modus intensiver **Human‑in‑the‑Loop (HITL)** Kollaboration.

Leitprinzipien:
- **Outcome > Output:** Metriken steuern Entscheidungen, nicht Berichte.
- **Minimal-invasiv:** So wenig Datenerhebung wie möglich, so viel wie nötig.
- **Anonymität by design:** Pulse Checks anonym; Segment-Auswertungen nur bei ausreichender Gruppengröße.
- **HITL immer:** AI liefert Synthese/Optionen; Menschen entscheiden, priorisieren, tragen Verantwortung.

---

## 1) Mess-Architektur: 3 Sensor-Typen

### Sensor A — Pulse Check (anonym, quartalsweise)
- Erfasst **Wahrnehmung, Readiness, Blocker**, Dinge die Tool-Daten nicht zeigen.
- 15 Minuten, 3–4 Fragen je Dimension + 3–6 Segment-Felder (nicht-identifizierend).

### Sensor B — Delivery/Flow Telemetrie (kontinuierlich, team-/repo-aggregiert)
- DORA + value-stream-nahe Durchlaufzeiten (PR Review Time, Queue Times, Cycle Time je Stage).
- Quellen: CI/CD, Repo/PR-Analytics, Ticket-System. Keine personenbezogene Auswertung.

### Sensor C — Enablement/Governance Tracking (ereignisbasiert)
- Governance-Reife (Policies, Freigaben, Incident/Exception-Counts), Enablement (Tool-Verfügbarkeit, Latenz, SSO, Ausfälle), Trainings-/Workshop-Events.

**Wichtig:** Sensor A (Pulse) ist **subjektiv** und essenziell. Sensor B/C sind **objektiv** und stabilisieren die Steuerung.

---

## 2) Cadence: Der Takt, der nicht nervt

### 4‑Wochen‑Zyklus (operativ)
- **W1 (Plan):** AI+Mensch Review der letzten Daten, Hypothesen & Zielwerte, Zyklus-Backlog.
- **W2–W3 (Do):** 1–3 Interventionen umsetzen (klein, messbar, reversibel).
- **W4 (Check/Adjust):** Metriken-Review, Retro, **Readiness Gate** (Erweitern/Vertiefen/Konsolidieren).

### Quartal (strategisch)
- **Pulse Check** durchführen.
- Roadmap und Metrik-Set nachschärfen (Fragen werden besser, nicht länger).

---

## 3) Verantwortlichkeit: Dimension Owners + AI Co‑Pilot

Empfohlen pro Team/Cluster:
- **C Owner:** Governance/Compliance Liaison
- **R Owner:** Change & People Lead / Scrum Master / People Partner
- **A Owner:** AI Transformation Manager (oder Enablement Lead)
- **F Owner:** Value Stream Coach / Eng Manager
- **T Owner:** Technical AI Lead / Platform Lead

**AI Rolle (Co‑Pilot, nicht Owner):**
- Aggregiert Daten, schreibt Executive Summary, generiert Interventionsoptionen, simuliert Trade-offs.
- Darf **nie** alleine Entscheidungen treffen oder Policies „auslegen“.

---

## 4) Dimensionen messen: Minimal-Set (Start), dann ausbauen

### Querschnitt: AI Usage Mode Maturity (U) — „WIE“ wird GenAI genutzt?

Dieser Aspekt ist wichtig, aber er ist keine eigene CRAFT-Dimension. Er gehört
- in **A (Adoption & Usage)** als *tatsächlich gelebter Nutzungsmodus* und
- gespiegelt in **T (Technical Enablement)** als *offiziell unterstützter Modus*.

**Usage-Mode Stufen (1–5):**
1. **None:** keine Nutzung
2. **Chat-only:** Q&A/Copy-Paste, nicht integriert
3. **Integrated Assistant:** IDE/Workflow-Integration, Mensch steuert Schritt-für-Schritt
4. **Agentic (single):** teilautonome Agenten erledigen Teilaufgaben (mit Review/Gates)
5. **Multi-agent / Org-agentic:** mehrere Agenten koordinieren Aufgaben end-to-end (starkes Governance/Controls nötig)

Hinweis: Stufe 4–5 ist nicht „immer besser“; sie erhöht Hebel *und* Risiko (Governance, Fehlerrisiko, Nachvollziehbarkeit).

### D1 — C: Compliance & Governance
**Zielbild:** „Klarheit + Geschwindigkeit“ (erlaubt/unerlaubt ist eindeutig, und blockiert nicht unnötig).

Start-Metriken (team-/org-aggregiert):
- **Policy Coverage:** existiert eine klare Policy je Sicherheitsstufe (ja/nein + Aktualität)
- **Decision Latency:** Median Zeit bis Freigabe/Antwort auf AI‑Request (Tage)
- **Exception Rate:** # Ausnahmen / Monat (und Gründe-Cluster)
- **Incident Signals:** # policy-relevante Vorfälle / Quartal (klassifiziert)

Typische Verbesserungshebel:
- Datenklassifizierungs-Entscheidungsbaum, Standard-Setups pro Sicherheitsstufe, BR-Kommunikationspaket.

### D2 — R: Readiness (Human & Cultural)
**Zielbild:** „Können + Wollen + Sicherheit“ (psychologisch und praktisch).

Start-Metriken (Pulse-getrieben):
- **Self‑Efficacy Index:** „Ich kann AI in meinem Alltag sinnvoll nutzen“ (Likert)
- **Psychological Safety (AI):** „Ich kann offen über AI‑Nutzung/Fehler sprechen“
- **Role Clarity:** „Ich verstehe, wie sich meine Rolle verändert“
- **Learning Reach:** % Teammitglieder mit min. 1 Enablement‑Session pro Quartal

Hebel:
- Champion-Netzwerk mit Zeitbudget, Safety Workshop, Rollenbilder, Lernpfade.

### D3 — A: Adoption & Usage
**Zielbild:** reale Nutzung in relevanten SDLC‑Phasen, ohne Shadow‑AI‑Risiken.

Start-Metriken (mix aus Pulse + aggregierter Telemetrie):
- **Adoption Rate (self‑report):** % die AI mind. wöchentlich nutzen (anonym)
- **Usage Mode Index (UMI):** Median der Usage-Mode-Stufe (1–5) + Verteilung (anonym)
- **Breadth (SDLC):** # SDLC‑Phasen mit AI‑Unterstützung (Selbstangabe)
- **Shadow AI Rate (self‑report):** % die nicht-freigegebene Tools nutzen (Trend zählt)
- **Usefulness:** „AI spart mir messbar Zeit/Qualität“ (Likert)

Hebel:
- Prompt Libraries, „golden workflows“ (z.B. PR Pre‑Review), Onboarding, schnelleres Tooling.

### D4 — F: Flow & Process Integration
**Zielbild:** AI ist Teil des Workflows (nicht Add‑on), Bottlenecks sinken.

Start-Metriken (Delivery/Flow):
- **PR Review Time:** Median + P85
- **Queue Time:** Zeit in Warte-States (PR, QA, CAB)
- **Flow Efficiency:** aktiv vs. wartend (aus VSM + Tool-Daten)
- **Rework Rate:** # Review-Runden / PR (oder Defects nach QA)

Hebel:
- AI‑Pre‑Review, Testdaten-Automatisierung, Dokumentations-Automation, CI/CD‑Checks.

### D5 — T: Technical Enablement
**Zielbild:** AI ist verfügbar, performant, integriert, verlässlich.

Start-Metriken (platform):
- **Availability:** Tool verfügbar (SLO) + Ausfallminuten
- **Latency/Throughput:** grobe Latenz-Buckets (z.B. <2s/<10s/>)
- **Integration Depth:** Standalone → IDE → Workflow (Score 1–3)
- **Supported Mode Level:** höchster offiziell unterstützter Usage-Mode (1–5) + Guardrails je Level
- **Access Friction:** SSO/Provisioning Zeit (Median)

Hebel:
- Standard-IDE-Konfig, Modellwahl, Guardrails, Kosten/Quota-Management.

---

## 5) Der Verbesserungs-Loop (HITL): Hypothese → Experiment → Review

Pro Zyklus:
1. **Hypothese:** „Wenn wir X ändern, verbessert sich Metrik Y um Z.“
2. **Intervention:** klein, in 1–2 Wochen implementierbar.
3. **Messpunkt:** vorher/nachher + qualitative Stimmen.
4. **Entscheidung:** adoptieren / iterieren / verwerfen.

Regeln:
- Max **3 Interventionen** parallel (sonst Attribution unklar).
- Jede Intervention hat **Owner**, **Definition of Done**, **Stop‑Kriterien**.

---

## 6) Readiness Gate (Ende Zyklus)

**Erweitern**, wenn:
- Adoption stabil steigt, Flow-Metriken nicht schlechter werden, kein Governance-Blocker.

**Vertiefen**, wenn:
- Adoption ok, aber Nutzen/Flow nicht sichtbar (Integration/Skills fehlt).

**Konsolidieren**, wenn:
- Governance/BR/Privacy oder kulturelle Themen zuerst gelöst werden müssen.

---

## 7) Was besonders zu berücksichtigen ist (Deutschland/Enterprise)
- **Betriebsrat & Datenschutz:** Früh einbinden; Telemetrie-Design transparent, minimal, team-aggregiert.
- **Anonymität:** Segment-Auswertungen nur ab Mindestgröße (z.B. k≥5) und keine „kleinen Teams“ drill-down.
- **Goodhart’s Law:** Metriken nicht als Leistungsbewertung nutzen; sonst werden Pulse Checks unbrauchbar.
- **Change Fatigue:** lieber wenige Rituale, konsequent.

---

## 8) Praktischer Start (MVP in 2 Zyklen)
- Zyklus 1: Metrik-Set festziehen (Minimal-Set), Baselines ziehen, 1 Workflow-Intervention (z.B. PR Pre‑Review).
- Zyklus 2: Pulse Check v1 + Segmentierung, zweite Intervention (z.B. Testdaten), erstes Readiness Gate mit Sponsor.
