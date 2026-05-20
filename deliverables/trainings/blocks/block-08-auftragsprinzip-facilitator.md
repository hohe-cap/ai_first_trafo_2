# Facilitator-Leitfaden — Block 8: Das Auftragsprinzip

**Für:** Trainer · virtuell · 60 min · ~15 Teilnehmer · GitHub Copilot + MS Copilot

---

## Vor der Session

**Technisch vorbereiten:**
- [ ] GitHub Copilot Agent Mode in VS Code oder JetBrains geöffnet und getestet
- [ ] Backup: MS Copilot im Browser (falls Copilot nicht funktioniert)
- [ ] Slides geöffnet im Browser (Vollbild, F11)
- [ ] Screen Share im Videokonferenz-Tool getestet
- [ ] Chat im Meeting-Tool aktiv (für Chat Waterfall)

**Demo vorbereiten:**
- [ ] Demo-Problem einmal komplett durchgespielt (~7 min, allein geprobt)
- [ ] Copilot-Ergebnis als `challenge-context.md` zwischengespeichert (Fallback falls Live-Demo stockt)
- [ ] Weiß, wo ich die Datei schnell öffnen kann

**Teilnehmer vorab informieren:**
> "GitHub Copilot Agent Mode oder MS Copilot bitte geöffnet haben.
> Optional: ein konkretes Problem mitbringen, das euch gerade beschäftigt."

---

## Minuten-für-Minuten-Guide

### 00:00 – 00:05 | Connection — Chat Waterfall (Slide 4)

**Was du sagst:**
> "Bevor wir ins Thema einsteigen — ich möchte von euch wissen, was ihr selbst
> schon erlebt habt. Bitte alle gleichzeitig tippen, aber **niemand sendet**, bis
> ich 'go' sage. Die Frage steht auf dem Slide."

**Was du tust:**
1. Slide 4 zeigen (Chat-Waterfall-Frage)
2. 30–45 Sekunden warten, alle tippen lassen
3. "Go!" sagen
4. Antworten kurz überfliegen (5 sec), 3–4 laut vorlesen
5. **Nicht kommentieren** — nur vorlesen und direkt überleiten:

> "Danke. Genau da setzt das Prinzip an, das ich euch heute zeigen möchte.
> Die meisten dieser Frustrations-Momente entstehen, weil wir bei Phase 3 anfangen
> — statt bei Phase 1."

---

### 00:05 – 00:10 | Concept — Die 3 Phasen (Slide 2 + 3)

**Slide 2 — Understand → Plan → Create:**

> "Drei Phasen. Jede Aufgabe. Egal ob das Ergebnis Code, Konzept oder Entscheidung ist."

Zeige auf Understand:
> "Understand — das sind Frame und Diagnose. Das ist KI als **Sparringspartner**.
> Ihr nutzt KI nicht um etwas zu bauen, sondern um das Problem selbst erst richtig
> zu verstehen. Von Symptomen zu Root Causes. Kein Einzel-Prompt — ein gelenkter Dialog."

Zeige auf Plan:
> "Plan — das sind Scope und Delegate. Hier wird der Auftrag präzise, Akzeptanzkriterien
> definiert, und der Auftrag in kleine Blöcke aufgeteilt."

Zeige auf Create:
> "Create — Build, Verify, Ship. Verify kann zurück zu Plan führen — das ist kein
> Fehler, das ist das System. Manchmal sogar zurück zu Understand, wenn sich das
> Problem als ein anderes herausstellt."

**Slide 3 — Warum Plan unverzichtbar ist:**

> "Warum kurze Blöcke? Nicht nur weil Agile das schon immer gesagt hat —
> sondern weil KI exakt dieselben Grenzen hat wie Menschen."

Drei Punkte durchgehen:
> "Begrenzter Kontext: Wenn ihr KI zu viel auf einmal gebt, werden die Ergebnisse
> deutlich schlechter. Ihr kennt das aus Meetings, die zu lange gehen."
>
> "Aufmerksamkeit auf Anfang und Ende: Was in der Mitte eines langen Prompts steht,
> geht verloren. Das 'Lost in the Middle'-Problem — das gilt für KI wie für jeden Leser."
>
> "Fehlbar: Halluzination ist real. KI simuliert Intelligenz, sie versteht nicht wirklich.
> Sie irrt sich selbstsicher."

Abschluss:
> "Ich zeige euch gleich, was ich damit meine — konkret."

---

### 00:10 – 00:13 | KI-Fehlbarkeit — Live Quiz (Slide 4 + 5)

**Was du sagst (Slide 4 — nur Fragen):**

> "Sechs Fragen. Für Menschen trivial. Tippt kurz eure Antworten in den Chat —
> aber **noch nicht senden**. Wir schauen dann gemeinsam, was KI sagt."

30 Sekunden warten. Dann weiterschalten zu Slide 5.

**Slide 5 — Auflösung:**

> "Hier die Antworten — und was KI typischerweise antwortet."

Geh kurz durch 2–3 Beispiele, die besonders überraschen:

- **Wochentage mit 't':** "Die Antwort ist: alle sieben. Montag, Dienstag, Mittwoch,
  Donnerstag, Freitag, Samstag, Sonntag — jeder enthält ein 't'. KI zählt oft nur
  einen Teil, weil sie token-basiert arbeitet und keine echte Zeichenwahrnehmung hat."

- **Schwestern-Frage:** "GPT-4o sagt hier fast immer '2' — weil es den Perspektivwechsel
  nicht vollzieht. Alice ist selbst eine Schwester, aber KI zählt nur von Alice aus."

- **17 Schafe:** "KI rechnet 17 − 9. Klassischer Fehler: sie versteht 'alle bis auf 9'
  als Rechenaufgabe, nicht als Aussage über Überlebende."

- **Witwe:** "KI erklärt hier oft das Familienrecht — ohne zu merken, dass der Mann
  tot sein müsste, um eine Witwe zu hinterlassen."

Abschluss:
> "Das ist dieselbe KI, die euren task-brief.md ausführen wird.
> Deshalb ist Plan nicht optional — klare Akzeptanzkriterien und kleine Blöcke
> schützen euch davor."

**Rapid Writing (1 min):**
> "60 Sekunden — schreibt für euch: Was habt ihr gerade gesehen, was ihr bisher
> noch nicht so gemacht habt?"
(Stille lassen. Nicht unterbrechen.)

---

### 00:13 – 00:20 | Live Demo (Slide 7)

**Was du sagst, bevor du den Screen teilst:**
> "Ich zeige euch jetzt die Understand-Phase live — Frame + Diagnose für ein Problem,
> das ihr alle kennt. Achtet darauf, wie sich die Problem-Beschreibung zwischen dem
> ersten Prompt und der Root-Cause-Analyse verändert."

**Screen Share einschalten — GitHub Copilot Agent Mode öffnen.**

**Demo-Ablauf (strikt einhalten, sonst zu lang):**

**Schritt 1 — Frame (1 min):**
Tippe in Copilot:
```
Ich bin Agile Enabler bei einem Beratungsunternehmen. Mein Auftraggeber beim
Kunden ist seit etwa 3 Wochen merklich distanzierter gegenüber unserem AI-Pilot.
Meetings werden kürzer, Rückmeldungen kommen zögerlicher. Ich verstehe nicht,
was dahintersteckt.
```

**Schritt 2 — Diagnose (3 min):**
Tippe:
```
Welche Root Causes könnten hinter diesem Verhalten stecken? Bitte 5 Hypothesen,
geordnet nach Wahrscheinlichkeit.
```

Warte auf Antwort. Kommentiere kurz 1–2 interessante Hypothesen.

Dann:
```
Was übersehe ich möglicherweise? Welche Annahmen treffe ich, die falsch sein könnten?
```

**Schritt 3 — Output speichern (1 min):**
Kopiere das Ergebnis in eine neue Datei `challenge-context.md`, zeige es kurz im Editor.

> "Das ist unser Übergabe-Dokument für die nächste Phase. Wenn ich jetzt den Kontext
> lösche und eine neue Session starte, fange ich mit genau diesem File an — nicht von vorne.
> Das ist der Übergang von Understand zu Plan."

**Screen Share ausschalten.**

---

### 00:20 – 00:22 | Themen-Auswahl (Slide 8)

> "Ihr habt jetzt 28 Minuten. Wählt ein Thema — eigenes Problem mitgebracht?
> Perfekt, das nehmt ihr. Sonst steht hier eine Auswahl auf dem Slide.
> Öffnet GitHub Copilot oder MS Copilot und legt los.
> Der Guide für alle drei Phasen kommt gleich auf dem nächsten Slide."

Slide 9 zeigen (Leitfragen).

> "Diese drei Spalten bleiben während der ganzen Übung auf dem Slide.
> Understand → Plan → Create. Schritt für Schritt, kein Stress. Wer Plan fertig hat,
> kann optional mit Create anfangen."

**Stille lassen. Nicht moderieren. Teilnehmer arbeiten.**

---

### 00:22 – 00:47 | Concrete Practice (Slide 9 bleibt)

**Was du tust:**
- Chat im Auge behalten — bei Fragen kurz antworten
- Nach ~15 min einmal im Chat posten:
  > "Wer schon einen challenge-context.md hat: kurzes Daumen-hoch im Chat 👍"
- Bei ~25 min:
  > "Noch 3 Minuten für Plan, dann kommen wir zusammen."

**Häufige Fragen und Antworten:**

| Frage | Antwort |
|-------|---------|
| "Wie lang soll das Dokument sein?" | 1 Seite reicht. Wichtiger ist Klarheit als Länge. |
| "Soll ich wirklich alles auf Deutsch promten?" | Egal — was sich natürlicher anfühlt. Viele promten englisch, Output deutsch. |
| "Was wenn KI zu allgemeine Antworten gibt?" | Mehr Kontext geben. KI ist so gut wie der Frame. |
| "Soll ich das als Chat oder Agent Mode?" | Für heute Chat reicht. Agent Mode für Build-Phase. |
| "Ich bin fertig — was jetzt?" | Mit Create anfangen: Block 1 des task-brief.md umsetzen. |

---

### 00:47 – 00:51 | Screen Shares (Slide 9 oder leer)

> "Wer möchte kurz seinen task-brief.md zeigen? Ich suche 2 Freiwillige — 2 Minuten pro Person."

**Was du tust:**
- Person Screen teilen lassen
- Gruppe im Chat fragen: "Was überrascht dich — am Problem, an den Root Causes, am Auftrag?"
- 2–3 Chat-Antworten laut vorlesen
- **Nicht bewerten** — nur spiegeln und weiterleiten

---

### 00:51 – 00:53 | Checkout-Runde

> "Eine letzte Sache im Chat, alle gleichzeitig wieder — niemand sendet bis 'go':
> Mein nächstes echtes Problem, das ich nach diesem Prinzip angehe: ___"

Kurze Pause, dann:
> "Go!"

3–4 Antworten laut vorlesen.

---

### 00:53 – 00:55 | Transfer-Auftrag (Slide 10)

> "Hausaufgabe bis zur nächsten Session: Eine echte Aufgabe — vollständig durch
> alle 3 Phasen. Understand → Plan → Create. Egal was rauskommt. Code, Konzept,
> Entscheidung, Präsentation. Wir starten die nächste Session mit:
> Wer hat's gemacht? Was hat überrascht?"

---

### 00:55 – 01:00 | Puffer + offene Fragen

Für spontane Diskussion oder technische Nachfragen.

---

## Wenn etwas nicht klappt

**Copilot funktioniert nicht:**
> "Kein Problem — öffnet MS Copilot im Browser. Das Prinzip ist tool-agnostisch."
Backup-Link: copilot.microsoft.com

**Teilnehmer kommen nicht in die Gänge:**
> "Fangt mit Understand an — einfach das Problem in 3–5 Sätzen beschreiben.
> Ihr müsst KI dafür noch nicht mal nutzen, das ist erstmal nur für euch."

**Demo dauert länger als 7 min:**
Abkürzen bei Schritt 3 (Output speichern). Einfach sagen:
> "Das Ergebnis würde ich jetzt als challenge-context.md speichern — das zeige ich euch nochmal beim nächsten Mal."

**Jemand sagt "ich will keinen Code schreiben":**
> "Perfekt — das ist der Punkt dieser Session. Das Prinzip gilt für jede
> Aufgabe. Nehmt Thema C oder D — die haben nichts mit Entwicklung zu tun."

**Jemand fragt: Warum nicht einfach direkt loslegen mit KI?**
> "Weil KI dieselben Grenzen hat wie wir: begrenzter Kontext, Aufmerksamkeit nur
> auf Anfang und Ende, und sie ist fehlbar. Kurze Blöcke und ein klarer Auftrag
> schützen euch davor — das ist kein Agile-Dogma, das ist Pragmatismus."

---

## Nächste Session — Anschluss

**Einstieg nächste Session:**
- 10 min: Erfahrungsaustausch Transfer-Auftrag (wer hat's gemacht, was war das Ergebnis?)
- Optionale Vertiefung: Create-Phase live zusammen durchführen
- Oder: Verify-Schleife üben (bewusst ein suboptimales Build erzeugen und zurück zu Plan)
