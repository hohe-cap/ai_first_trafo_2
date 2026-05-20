# Training Block 8: Understand → Plan → Create

**Das Prinzip strukturierter KI-Arbeit**

---

## Übersicht

- **Zielgruppe:** ~15 Agile Enabler, Capgemini (agentische Copilot-Erfahrung vorhanden)
- **Dauer:** 60 Minuten
- **Format:** Virtuell (Teams/Zoom + GitHub Copilot + MS Copilot)
- **Lernziel:** Von "ich nutze KI für Einzelfragen" zu "ich führe KI strukturiert
  vom Problem bis zur Lösung — bei jeder Art von Aufgabe"
- **Voraussetzung:** GitHub Copilot Agent Mode oder MS Copilot bereit

---

## Lernziele

Nach dieser Session können Teilnehmer:

1. **Erklären**, warum KI und Menschen dieselben strukturellen Herausforderungen
   haben — und warum kurze, messbare Zyklen deshalb auch mit KI funktionieren
2. **Anwenden**: Understand → Plan → Create auf ein eigenes Problem anwenden —
   unabhängig davon ob das Ergebnis Code, Konzept, Entscheidung oder Dokument ist
3. **Produzieren**: Einen `challenge-context.md` und einen `task-brief.md` erstellen,
   die als Kontext-Übergabe zwischen KI-Sessions dienen

---

## Das Framework

### Die 3 Phasen

```
UNDERSTAND (Frame + Diagnose)
→ Was ist die Herausforderung?
→ Welche Rahmenbedingungen herrschen vor?
→ Was soll am Ende erreicht werden?
→ Kein Einzel-Prompt — gelenkter Dialog bis das Bild vollständig ist
→ Output: challenge-context.md

PLAN (Scope + Delegate)
→ Auftrag + Akzeptanzkriterien definieren
→ Kurze, messbare Zyklen (Blöcke) festlegen
→ Autonomie entscheiden: KI allein / zusammen / ich allein
→ Output: task-brief.md

CREATE (Build + Verify + Ship)
→ Umsetzung in Blöcken — iterativ
→ Testen · erklären lassen · vereinfachen
→ ↩ Bei Bedarf: zurück zu Plan — oder zurück zu Understand
→ Veröffentlichen / übergeben / committen
```

### Warum Plan unverzichtbar ist

KI hat dieselben Herausforderungen wie Menschen:

- **Begrenzter Kontext:** Ergebnisse werden deutlich schlechter, wenn die
  Kontextgrenze überschritten wird — genau wie bei Menschen in zu langen Meetings
- **Aufmerksamkeit auf Anfang und Ende:** Was in der Mitte steht, geht verloren —
  das "Lost in the Middle"-Problem gilt für KI wie für jeden Leser
- **Fehlbar:** Halluzination ist real. Semantische Intelligenz wird nur simuliert,
  nicht verstanden. KI irrt sich selbstsicher.

**Konsequenz:** Was bei Menschen gut funktioniert hat, gilt auch für KI:
Schnell in kleinen, wertvollen Stories denken und liefern. Kurze, messbare Zyklen.
Agile Denke ist vollständig richtig — sie schützt uns auch vor KI-Fehlern.

### Die 7 Schritte als konkreter Guide

Die 3 Phasen lassen sich in 7 konkrete Schritte übersetzen:

| Phase | Schritte | Output |
|-------|---------|--------|
| Understand | 1. Frame → 2. Diagnose | challenge-context.md |
| Plan | 3. Scope → 4. Delegate | task-brief.md |
| Create | 5. Build → 6. Verify → 7. Ship | Finales Ergebnis |

Verify kann zur Plan-Phase zurückführen (Scope anpassen), wenn das Ergebnis die
Akzeptanzkriterien nicht erfüllt. In seltenen Fällen geht der Weg auch zurück zu
Understand — wenn sich das Problem als anders herausstellt als erwartet.

Das Ergebnis kann alles sein: Code, Präsentation, Konzept, Analyse,
Entscheidung, Aktionsplan, Workshop-Design, Infografik.

---

## Agenda (60 min)

### C1 — Connection (5 min)

**Chat Waterfall:** Alle tippen gleichzeitig, niemand sendet bis der
Trainer "go" sagt:

> *"Beschreibe in einem Satz: Eine Aufgabe, bei der KI nicht das
> geliefert hat, was du erwartet hast — was war das?"*

Trainer liest 3–4 Antworten vor, kommentiert nicht.
Überleitung: *"Genau da setzt das Prinzip heute an."*

---

### C2 — Concept + Live Demo (13 min)

**Input (5 min):** Die 3 Phasen auf einem Slide zeigen.

Kernbotschaften:
- Die meisten starten bei CREATE — das ist der häufigste Fehler
- Understand ist KI als Sparringspartner: Problem wirklich verstehen
  bevor irgendetwas gebaut wird
- Plan ist nicht optional: KI hat begrenzten Kontext, Aufmerksamkeit
  nur auf Anfang/Ende, ist fehlbar — kurze Zyklen schützen davor
- Markdown-Übergabe macht KI-Arbeit transparent, teilbar, wiederholbar

**Live Demo (7 min):** Trainer zeigt Understand-Phase live in
GitHub Copilot Agent Mode (Frame + Diagnose).

Demo-Problem (nicht-technisch, für alle relevant):

> *"Mein Auftraggeber beim Kunden ist seit Wochen skeptisch
> gegenüber unserem AI-Pilot. Ich verstehe den eigentlichen
> Widerstand nicht."*

Ablauf live:
1. Frame: Problem in 2–3 Sätzen beschreiben
2. Diagnose: KI nach Root-Cause-Hypothesen fragen, kritisch
   hinterfragen lassen ("Was übersehe ich?")
3. Ergebnis als `challenge-context.md` speichern — sichtbar für
   alle im Screen Share

**Rapid Writing (1 min):**
> *"Schreib 60 Sekunden: Was hast du gerade gesehen, was du bisher
> noch nicht so gemacht hast?"*

---

### C3 — Concrete Practice (35 min)

**Ziel:** Jeder Teilnehmer führt Understand + Plan (Frame → Diagnose →
Scope) für ein eigenes Problem durch und produziert einen
`task-brief.md`.

**Schritt 1 — Thema wählen (2 min)**

Trainer zeigt Auswahlliste (Slide oder Miro):

| # | Beispiel-Problem | Passt wenn... |
|---|-----------------|--------------|
| A | Teamkonflikt der sich wiederholt — ich verstehe die Ursache nicht | ...du gerade ein schwieriges Team-Thema hast |
| B | Auftraggeber unzufrieden mit Pilot-Fortschritt | ...ein Projekt nicht wie erwartet läuft |
| C | Welche Skills soll ich in den nächsten 12 Monaten aufbauen? | ...du über deine eigene Entwicklung nachdenkst |
| D | Skeptischen CTO von AI-Transformation überzeugen | ...eine konkrete Pitch-Situation ansteht |
| E | Welche Probleme treiben IT-Leitungen unserer Kunden gerade um? | ...du Markt- und Kundenkontext verstehen willst |
| F | Eigenes Thema | ...du ein konkretes echtes Problem mitgebracht hast |

**Schritt 2 — Understand + Plan (28 min)**

Jeder arbeitet individuell mit GitHub Copilot oder MS Copilot.

Leitfragen auf Slide als Hilfestellung:

```
UNDERSTAND
→ Beschreibe das Problem in 3–5 Sätzen
   (Kontext, Beteiligte, warum es dich beschäftigt)
→ Bitte KI: "Welche Root Causes könnten hinter diesem Problem stecken?"
→ Bitte KI: "Was davon ist am wahrscheinlichsten — und warum?"
→ Bitte KI: "Was übersehe ich möglicherweise?"
→ Output: challenge-context.md

PLAN
→ Bitte KI: "Formuliere einen präzisen Auftrag auf Basis des Problem Statements"
→ Ergänze: "Was sind die Akzeptanzkriterien — woran erkenne ich ein gutes Ergebnis?"
→ Optional: "Teile den Auftrag in 2–3 kleinere Blöcke auf"
→ Output: task-brief.md
```

**Schritt 3 — Optional: Create beginnen (5 min)**

Wer Understand + Plan abgeschlossen hat:
> *"Starte Block 1 des Auftrags — entweder allein oder zusammen mit KI.
> Halte es klein: ein Block, nicht alles auf einmal."*

---

### C4 — Conclusion (7 min)

**Screen Share (4 min):** 2 Freiwillige zeigen ihren `task-brief.md`
live (je 2 min).

Gruppe reagiert im Chat:
> *"Was überrascht dich — am Problem, an den Root Causes oder am
> Auftrag?"*

**Checkout-Runde (2 min):** Jeder schreibt in den Chat:

> *"Mein nächstes echtes Problem, das ich nach diesem Prinzip
> angehe: ___"*

**Transfer-Auftrag (1 min):**

> *"Bis zur nächsten Session: Eine echte Aufgabe vollständig durch
> alle 3 Phasen führen. Ergebnis mitbringen — egal ob Code,
> Konzept, Entscheidung oder Dokument."*

---

## Transfer & Erfolgsmessung (Kirkpatrick)

| Level | Was messen | Wie |
|-------|-----------|-----|
| 1 Reaktion | War es relevant und direkt anwendbar? | Chat-Reaktionen + Checkout-Runde |
| 2 Lernen | Können sie Understand + Plan selbst durchführen? | task-brief.md Output der Teilnehmer |
| 3 Verhalten | Nutzen sie das Prinzip in der Arbeit? | Nächste Session: wer hat's angewendet? |
| 4 Ergebnis | Bessere KI-Outputs, weniger Frust, bewusstere Nutzung | Qualitative Rückmeldungen in späteren Blocks |

**70:20:10 Transfer:**
- 10% formal: diese Session
- 20% sozial: Nächste Session startet mit Erfahrungsaustausch
  (wer hat's gemacht, was hat geholfen?)
- 70% on-the-job: Transfer-Auftrag (eine echte Aufgabe, alle 3 Phasen)

---

## Materialien & Vorbereitung

**Trainer:**
- [ ] 1 Slide: 3-Phasen-Übersicht (Understand / Plan / Create + 7-Schritte-Mapping)
- [ ] 1 Slide: Warum Plan unverzichtbar ist (KI = menschliche Grenzen)
- [ ] 1 Slide: Themen-Auswahl (Tabelle oben)
- [ ] 1 Slide: Leitfragen für Concrete Practice
- [ ] Demo-Problem vorbereitet und einmal geprobt (max. 7 min)
- [ ] GitHub Copilot Agent Mode bereit + Screen Share getestet
- [ ] Backup: MS Copilot falls Copilot nicht stabil

**Teilnehmer (vorab kommunizieren):**
- GitHub Copilot Agent Mode oder MS Copilot geöffnet haben
- Optional: Ein konkretes eigenes Problem mitbringen
