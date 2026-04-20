# Business Impact Discovery — Gesprächsleitfaden

> **Zweck:** Vorbereitung und Durchführung des ersten Gesprächs mit dem Kunden — *bevor* CRAFT eingesetzt wird.  
> Ziel: Den konkreten Business-Schmerz verstehen, nicht nur das AI-Interesse.
>
> **Wann nutzen:** Vor der Context Exploration (Ebene 1). Idealerweise im Kick-off-Gespräch oder Discovery-Call.  
> **Aufwand:** 30–60 Min Gespräch  
> **Wer führt es:** AI Transformation Manager

---

## Warum dieses Gespräch zuerst?

CRAFT misst AI-Reife. Aber Reife ist kein Selbstzweck — sie muss einen Business Outcome antreiben.

Ohne diesen Anker passiert das hier:
> *"Ihr seid auf Level 2 in Adoption — ihr solltet Level 3 erreichen."*  
> Kunde: *"Und warum brauche ich das?"*

Mit diesem Gespräch wird daraus:
> *"Ihr verliert Kunden wegen Delivery-Problemen. Dafür ist Adoption Level 3 entscheidend — weil das eure Time-to-Market halbiert."*

---

## Teil 1 — Den Schmerz lokalisieren

### Eröffnungsfrage (immer stellen)

> *"Was hat euch dazu gebracht, heute über AI-Transformation zu sprechen? Was läuft gerade nicht so, wie ihr es euch wünscht?"*

Wenn die Antwort vage bleibt ("Wir wollen moderner werden" / "Die Konkurrenz macht das auch"), weiter mit:

> *"Was würde sich für euch konkret verbessern, wenn die Transformation erfolgreich ist — in 12 Monaten?"*

---

### Powerful Questions nach Symptom-Typ

Nutze diese je nachdem, welches Symptom sich abzeichnet:

**Symptom: zu langsame Delivery / Time-to-Market**
- *"Wann habt ihr zuletzt ein Feature ausgeliefert und gedacht: das hat zu lange gedauert? Was hat gebremst?"*
- *"Wie viel Prozent der Entwicklerzeit schätzt ihr geht für Rework, Warten oder Abstimmung drauf?"*
- *"Was würde passieren, wenn ihr morgen doppelt so schnell liefern könntet?"*

**Symptom: Qualität / Fehler / hohe Fehlerrate**
- *"Wie viele Bugs findet ihr nach dem Release im Vergleich davor? Was kostet euch das?"*
- *"Welcher Fehler hätte vermieden werden können, wenn ihr mehr Zeit oder bessere Tools gehabt hättet?"*

**Symptom: Kosten / Effizienz / Marge**
- *"Wenn ihr auf euren letzten Projektabschluss schaut — was hat am meisten Zeit gefressen, das eigentlich Value bringen sollte?"*
- *"Was würde es bedeuten, 20% der Entwicklerzeit für tatsächlichen Mehrwert zu befreien?"*

**Symptom: Fluktuation / Mitarbeiterzufriedenheit**
- *"Was sagen Entwickler, wenn sie das Unternehmen verlassen? Was frustriert sie am meisten?"*
- *"Welche Aufgaben würden eure besten Leute lieber nicht mehr machen?"*

**Symptom: Kundenzufriedenheit / NPS**
- *"Welche Beschwerden bekommt ihr am häufigsten von Kunden — und welche davon haben mit eurer Software-Delivery zu tun?"*
- *"Was würde sich für eure Kunden morgen spürbar verbessern, wenn ihr euren Prozess optimieren würdet?"*

**Symptom: Konkurrenz / Marktdruck**
- *"Wo holt die Konkurrenz gerade auf oder überholt euch? Was machen die anders?"*
- *"Was ist eure größte Angst, wenn ihr in 2 Jahren auf heute zurückschaut und AI nicht systematisch eingesetzt habt?"*

**Symptom: Wachstum**
- *"Könnt ihr eure Umsatzziele mit dem aktuellen Team und Prozess erreichen — ohne massiv zu skalieren?"*

---

## Teil 2 — Business Ziel schärfen

Sobald der Schmerz klar ist, das Ziel konkret machen:

> *"Wenn diese Transformation funktioniert: Was genau ist dann anders? Habt ihr schon eine Vorstellung, wie ihr den Erfolg messen würdet?"*

Dann gemeinsam prüfen, ob das Ziel SMART formuliert werden kann:

| Dimension | Kunden-Aussage | Konkretisierung |
|---|---|---|
| Velocity | "Schneller liefern" | "Lead Time von 3 Wochen auf unter 10 Tage" |
| Qualität | "Weniger Bugs" | "Change Failure Rate unter 5%" |
| Kosten | "Effizienter werden" | "20% Reduktion Effort/Story Point in 6 Monaten" |
| Zufriedenheit | "Weniger Fluktuation" | "Developer Satisfaction Score +15 Punkte" |
| Kundenzufriedenheit | "Kunden begeistern" | "NPS +10 in 12 Monaten" |

> **Achtung:** Wenn der Kunde noch keine konkreten Zahlen hat, ist das normal. Helfende Frage:  
> *"Was habt ihr zuletzt gemessen? Welche Zahl würde eurem Management wichtig sein?"*

---

## Teil 3 — North Star Metrics definieren

Der wichtigste Output dieses Gesprächs: **2–3 North Star Metrics**, die direkt das identifizierte Business-Problem messen — nicht generische Metriken, sondern exakt die Kennzahlen, an denen der Sponsor den Erfolg der Transformation ablesen wird.

### Vorgehensweise

1. **Vom SMART-Ziel (Teil 2) zur Metrik:** Jedes konkretisierte Ziel hat eine natürliche Metrik. Diese wird zur North Star Metric.
2. **Maximal 3 Metriken:** Mehr verwässert den Fokus. Wenn der Kunde 5 Probleme hat, priorisieren: *"Welches Problem würde euer Management als erstes gelöst sehen wollen?"*
3. **Baseline erheben oder schätzen:** Ohne Ausgangswert kein Delta. Wenn keine Daten vorhanden: gemeinsam eine qualifizierte Schätzung machen und als "geschätzte Baseline" kennzeichnen.
4. **Zielwert und Zeitrahmen festlegen:** Jede North Star Metric bekommt einen konkreten Zielwert mit Zeitrahmen.

### Beispiele

| Business-Schmerz | North Star Metric | Baseline (Beispiel) | Ziel |
|---|---|---|---|
| Zu langsame Delivery | Median Lead Time for Changes | 3 Wochen | < 10 Tage in 6 Monaten |
| Hohe Fehlerrate | Change Failure Rate | 18% | < 8% in 6 Monaten |
| Code Reviews dauern zu lang | Median Code Review Cycle Time | 3–5 Tage | < 24h in 6 Monaten |
| Fluktuation | Voluntary Attrition Rate + Developer Satisfaction Score | 15% / 55 Punkte | < 10% / > 70 Punkte in 12 Monaten |
| Sinkende Marge | Effort pro Story Point (Kosten-Proxy) | 8 PT | < 6 PT in 6 Monaten |
| Onboarding dauert zu lang | Time to Productivity (neue Teammitglieder) | 4 Wochen | < 2 Wochen in 6 Monaten |

### Wohin fließen die North Star Metrics?

- **CRAFT Report:** Prominent auf Seite 1, vor den CRAFT-Dimension-Scores
- **Iterations-Review (Woche 4 jedes Zyklus):** Werden als erstes besprochen, vor CRAFT-Scores und DORA
- **KPI-Framework Schicht 3:** Bilden den Top-down-Teil der Business Impact-Messung (siehe Framework Kap. 5)
- **Pulse Check:** Die übergreifende Business-Outcome-Frage (BO-M1) referenziert die North Star Metrics
- **Sponsor-Reporting:** Quartalsweise als Headline-Metrik kommuniziert

> **Zusammenfassung für den AI Transformation Manager:** Ohne North Star Metrics wird die Transformation zum Selbstzweck. Die North Star Metrics sind der rote Faden, der sich durch jeden Zyklus, jedes Review und jedes Sponsor-Reporting zieht. Wenn du nur einen Satz aus diesem Dokument mitnimmst: *Jede Intervention muss sich daran messen lassen, ob sie die North Star Metrics bewegt.*

---

## Teil 3b — Wirkmodell: Wie CRAFT-Dimensionen Business-Wert erzeugen

> **Warum dieser Schritt?** Im ersten Teil hast du den Business-Schmerz lokalisiert und in Teil 3 North Star Metrics definiert. Jetzt die entscheidende Frage: *Hat CRAFT überhaupt etwas damit zu tun?* Die Antwort ist: manchmal direkt, manchmal mittelbar, manchmal kaum. Dieser Abschnitt macht das explizit.

### Die drei Rollen im Wirkmodell

Nicht alle 5 CRAFT-Dimensionen erzeugen direkt Business-Wert. Sie spielen unterschiedliche Rollen in der Kausalkette — eine Unterscheidung, die in der Praxis oft fehlt:

| Rolle | Dimensionen | Was sie tun |
|---|---|---|
| **Primäre Value Driver** | **F** (Flow), **A** (Adoption) | Erzeugen direkt messbare Delivery-Outcomes. Wenn DORA und North Stars sich bewegen sollen, müssen F und A steigen. |
| **Voraussetzung** | **R** (Readiness) | Bestimmt, ob F und A nachhaltig wirken. Adoption ohne psychologische Sicherheit bleibt oberflächlich. |
| **Freischalter** | **C** (Compliance), **T** (Technical) | Müssen ein Mindest-Level erreichen, damit die Value Driver überhaupt greifen können. Ihr directes Business-Impact-Potenzial ist gering — ihr Blockade-Potenzial ist hoch. |

### Wirkmodell je Dimension

| Dimension | Rolle | Operativer Hebel | Lead Indicator (frühes Signal) | Bewegt typischerweise | Zeitverzug | Direkt nur wenn... |
|---|---|---|---|---|---|---|
| **F – Flow** | Value Driver | SDLC-Bottlenecks werden identifiziert und mit AI-Interventionen adressiert. Wartezeiten sinken. | Flow Efficiency ↑, Cycle Time per Phase ↓, Anzahl AI-Interventionen pro SDLC-Phase | Lead Time for Changes, Change Failure Rate, Cycle Time (direkt) | 1–2 Zyklen | A ≥ Level 2 (es muss jemand die Tools nutzen) |
| **A – Adoption** | Value Driver | AI-Nutzung im Arbeitsalltag setzt Entwicklerkapazität frei. Mehr Phases des SDLC werden abgedeckt. | DAU/Team ↑, AI-assisted Commits % ↑, SDLC-Phasen-Abdeckung | Lead Time, Effort/Story Point, Developer Satisfaction | 1–3 Zyklen | F ≥ Level 2 (Adoption ohne Prozessintegration ist Fremdkörper) |
| **R – Readiness** | Voraussetzung | Psychologische Sicherheit und Skill-Aufbau machen Adoption nachhaltig statt episodisch. | Skill Self-Rating ↑, Champion-Aktivität ↑, Training-Abschlüsse | Developer Satisfaction → Attrition-Rate (langfristig) | 2–4 Zyklen | Immer nötig, Wirkung aber verzögert |
| **C – Compliance** | Freischalter | Governance-Blocker werden beseitigt. Freigegebene Tools ermöglichen breite Nutzung. | Approved-Tool-Count ↑, Shadow-AI-Rate ↓, Approval-Time ↓ | Unblocks A und T; kein eigener North-Star-Effekt | 1–2 Zyklen (danach wirken andere) | C blockt gerade aktiv (sonst keine Intervention nötig) |
| **T – Technical** | Freischalter | Tools sind verfügbar, integriert und sicher nutzbar. | Tool Availability Score, Integration Depth (chat → IDE → workflow) | Unblocks A und F; kein eigener North-Star-Effekt | Relativ sofort (Tools sind da oder nicht) | T fehlt gerade als Bottleneck |

> **Kernaussage:** Wenn du Lead Time senken willst, musst du F und A verbessern. Wenn dein Team psychologisch nicht bereit ist, wird A nicht nachhaltig. Wenn Compliance blockiert oder Tools fehlen, kommen F und A nicht ins Laufen. **C und T lösen das Problem nicht — sie ermöglichen, dass F und A es lösen.**

### Hypothesen-Template: CRAFT → Intervention → North Star

Für jede Intervention im Zyklus sollte folgende Hypothese explizit formuliert werden, bevor die Maßnahme startet:

```
Wenn wir [Intervention X] in Dimension [D] durchführen,
dann verbessert sich [Lead Indicator L] von [Ist] auf [Ziel] innerhalb [T] Wochen,
weil [Wirkmechanismus],
was danach [North Star Metric N] um [erwartetes Delta] bewegen sollte.
Wenn das nicht eintritt, prüfen wir [Confounders / Pivot].
```

**Beispiel:**
> Wenn wir einen Value Stream Mapping Workshop für das Backend-Team (F-Intervention) durchführen,  
> dann sinkt die Cycle Time für Code Review von 5 Tagen auf 2 Tage innerhalb 2 Zyklen,  
> weil wir den Wartezeit-Bottleneck vor Review sichtbar machen und mit AI-Assisted Review adressieren,  
> was danach die Lead Time for Changes (North Star) um ca. 30% senken sollte.  
> Wenn das nicht eintritt, prüfen wir ob Adoption (A) oder Readiness (R) der eigentliche Blocker ist.

> **Wichtiger Hinweis:** Diese Hypothesen sind nicht Verträge, sondern Lerninstrumente. Die relevante Frage in Woche 4 (Business Problem Check) ist nicht "haben wir recht behalten?", sondern "was haben wir über die tatsächliche Kausalkette gelernt?". Externe Einflussfaktoren (Teamumbau, Marktveränderungen, neue Anforderungen) können die Kette stören — das ist kein Scheitern, sondern Information.

### Limitation: Wann CRAFT-Verbesserung Business-Wert *nicht* direkt erklärt

In drei Fällen ist die Kopplung schwach oder nicht nachweisbar:

1. **Externe Dominanz:** Business-Metriken werden von Markt, Sales oder Org-Umbau dominiert. CRAFT erklärt dann nur einen kleinen Anteil.
2. **Reifegradsprünge brauchen Zeit:** Level 1→2 bringt kaum messbaren Business-Impact. Erst ab Level 3 (Embedding) werden DORA-Metriken zuverlässig bewegt.
3. **Adoption ohne Flow-Integration:** Wenn A steigt, F aber auf Level 1 bleibt, nutzen Entwickler AI als Einzelkämpfer — ohne Prozesseinbettung landet der Produktivitätsgewinn nicht im Lead Time-Delta.

**Alternative wenn Kopplung unklar ist:** North Stars vorerst provisorisch aufnehmen und erst nach 2 Zyklen mit echten Daten eine Kausalkette rekonstruieren ("Retrospektives Wirkmodell").

---

## Teil 4 — CRAFT-Relevanz-Mapping

Ergänzend zum Wirkmodell (Teil 3b) zeigt dieses Mapping, welche Dimensionen je nach Business-Schmerz prioritär adressiert werden sollten. **Ausgangspunkt sind immer die Primary Value Driver F und A — Compliance/Technical sind Voraussetzungen, keine Ziele.**

| Business-Schmerz | Primär relevante Dimensionen | Wirkmechanismus |
|---|---|---|
| Zu langsame Delivery | **F** → A → (R) | VSM identifiziert Bottlenecks; AI-Interventionen adressieren Wartezeiten; Adoption setzt Kapazität frei |
| Hohe Fehlerrate / Tech Debt | **A** → F → T | AI-assisted Testing/Review erhöht Qualität; muss in Prozess eingebettet sein (F) |
| Governance blockiert / Shadow AI | **C** (Freischalter!) → dann A, F | C-Blocker beseitigen, damit Value Driver wirken können |
| Team-Widerstand / Angst | **R** (Voraussetzung!) → dann A | Readiness sicherstellen, sonst kollabiert Adoption |
| Kosten / Effizienz | **F** → A | Flow Efficiency-Analyse zeigt Waste; AI reduziert manuellen Aufwand in den identifizierten Phasen |
| Tool-Chaos / fehlende Infrastruktur | **T** (Freischalter!) → dann A, F | T-Blocker beseitigen; kein direkter Business Impact durch T allein |
| Skalierung / Wachstum | **A** priorisieren, **F** absichern | Breite Nutzung vor Tiefe; Prozessintegration verhindert, dass Skalierung in Chaos endet |

**Welcher Reifegrad ist nötig für messbare Wirkung?**

- Für **kurzfristige Quick Wins** (< 3 Monate): F und A auf Level 2 (Experimenting) — erste messbare Signale möglich
- Für **zuverlässige DORA-Verbesserung**: F und A auf Level 3 (Embedding) — ab hier bewegen sich Lead Time und CFR konsistent
- Für **strategische AI-Transformation**: F und A auf Level 4 (Scaling), R auf Level 3+ — nachhaltiger, skalierbarer Effekt

---

## Teil 5 — Überleitung zur Context Exploration

Am Ende des Gesprächs:

> *"Das hilft mir sehr. Damit ich euch ein passgenaues Bild geben kann, machen wir jetzt einen strukturierten Context-Check — dauert ~30 Minuten und gibt uns die Grundlage für alles Weitere."*

→ Danach: [context-readiness.yaml](context-readiness.yaml) / Context Exploration (Ebene 1)  
→ Ergebnis der Frage `ctx_business_pain` mit diesem Gespräch abgleichen und in Analyse aufnehmen  
→ North Star Metrics in den CRAFT Report übernehmen und als Referenz für alle weiteren Zyklen dokumentieren

---

## Hinweise zur Gesprächsführung

**Wenn jemand sein Business Problem nicht kennt:**
Das passiert häufiger als gedacht. Oft weiß die technische Seite das Problem, aber der Sponsor hat es nie klar formuliert. In diesem Fall:
1. Zuerst zuhören, nicht korrigieren
2. Hypothesen anbieten: *"Höre ich raus, dass...? Stimmt das ungefähr?"*
3. Wenn nichts kommt: Den AI Intervention Katalog als Bauchladen öffnen — konkrete Beispiele erzeugen oft erst das Bewusstsein

**Stakeholder-Mapping:**
Neben dem Schmerz auch kurz klären:
- *"Wer muss am Ende davon überzeugt sein, dass das funktioniert?"*
- *"Wer im Unternehmen wird diese Transformation aktiv unterstützen — und wer könnte dagegen arbeiten?"*

→ Ergebnisse fließen in Readiness-Exploration (Kategorie `leadership`) ein.

---

**Version:** 1.0  
**Erstellt:** 2026-03-10  
**Referenz:** Context Exploration `ctx_business_pain` (order 18)
