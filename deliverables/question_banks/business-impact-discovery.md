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

## Teil 4 — CRAFT-Relevanz-Mapping

Sobald der Business-Schmerz, das Ziel und die North Star Metrics bekannt sind, kannst du grob ableiten, welche CRAFT-Dimensionen am relevantesten sind. **Dieses Mapping ist ein Gesprächseinstieg, kein Ergebnis ohne Assessment.**

| Business-Schmerz | Primär relevante Dimensionen | Warum |
|---|---|---|
| Zu langsame Delivery | **Flow (F)**, Adoption (A) | Bottlenecks im Value Stream + AI-Nutzung in SDLC-Phasen |
| Hohe Fehlerrate / Tech Debt | **Adoption (A)**, Technical (T) | AI-unterstütztes Testing, Code Review, Refactoring |
| Governance blockiert / Shadow AI | **Compliance (C)**, Readiness (R) | Fehlende Policies + Angst/Ablehnung im Team |
| Team-Widerstand / Angst | **Readiness (R)** | Psychological Safety, Rollenentwicklung |
| Kosten / Effizienz | **Flow (F)**, Adoption (A) | VSM zeigt Waste; AI reduziert manuellen Aufwand |
| Tool-Chaos / fehlende Infrastruktur | **Technical (T)**, Compliance (C) | Tool-Katalog + Sicherheitsstufen |
| Skalierung / Wachstum | Alle 5, aber **Adoption (A)** priorisieren | Breite Nutzung vor Tiefe |

**Welcher Reifegrad ist nötig für messbare Wirkung?**

Es gibt keine allgemeine Antwort, aber als Orientierung:
- Für **kurzfristige Quick Wins** (< 3 Monate): Level 2 (Experimenting) auf relevanten Dimensionen reicht
- Für **messbare DORA-Verbesserung**: Level 3 (Embedding) auf Flow + Adoption nötig
- Für **strategische AI-Transformation**: Level 4 (Scaling) auf allen 5 Dimensionen mittelfristig anstreben

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
