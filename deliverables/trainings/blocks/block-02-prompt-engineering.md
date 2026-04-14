# Block 2: Vom Prompt zum Dialog — Kontextmanagement Stufe 1–3

**Phase:** ICH & AI
**Dauer:** 60 Min (+ 15 Min Team-Check-in davor)
**Lernziel:** Teilnehmer verstehen, dass die Qualitaet von AI-Ergebnissen vom mitgegebenen Kontext abhaengt — nicht von der "Cleverness" des Prompts. Sie koennen die Kontextleiter (Stufen 1–3) bewusst einsetzen und den Unterschied an eigenen Aufgaben erleben.

---

## Rahmenkonzept: Die Kontextleiter

Dieses und das naechste Training (Block 3) basieren auf einer zentralen Erkenntnis:

> **Der Weg von einem einfachen Prompt bis zum agentischen System ist im Kern eine Frage des Kontextmanagements.** Nicht die Formulierung macht den Unterschied — sondern welche Information die LLM hat, wenn sie antwortet.

Die Kontextleiter beschreibt fuenf Stufen — von "die LLM weiss nichts ueber mich" bis "das System managed seinen Kontext selbst":

| Stufe | Name | Kontextquelle | Wer liefert den Kontext? | Typisches Tool |
|-------|------|---------------|--------------------------|----------------|
| 1 | Die nackte Frage | Nur die Frage selbst | User, ad hoc | Chat-Fenster |
| 2 | Der strukturierte Prompt | Rolle + Ziel + Rahmenbedingungen + Struktur | User, geplant | Chat mit Template |
| 3 | Der Dialog | Iterativ aufgebaut ueber mehrere Turns | User + LLM gemeinsam | Chat-Session |
| 4 | System-Kontext | Dateien, Projektstruktur, Regeln, Graph | System / Infrastruktur | Copilot in IDE, M365 |
| 5 | Agentischer Kontext | Memory, RAG, Tools, Skills | Agent autonom | Claude Code, Custom Agents |

**Block 2 behandelt Stufen 1–3** (was jeder sofort anwenden kann).
**Block 3 behandelt Stufen 3–5** (wo das System den Kontext managt).

Die Kontextleiter bleibt als **permanentes visuelles Element im Mural** und dient als Referenzmodell fuer alle folgenden Bloecke.

---

## Show & Tell Eroeffnung (5 Min)

- Ab Block 2: Beste Fails und Erkenntnisse der Woche
- 1 Team teilt kurz im Plenum (vorbereitet im Team-Check-in, max. 2 Min)
- Trainer-Frage an alle: *"Wer hat etwas Aehnliches erlebt?"* — kurze Handzeichen / Reaktionen

---

## Connection: "Das Praktikanten-Experiment" (8 Min)

*Im Plenum, interaktiv. Trainer zeigt auf dem geteilten Bildschirm live drei Anfragen an MS Copilot — alle zur selben Aufgabe.*

**Aufgabe:** "Erstelle eine Risikoanalyse fuer ein IT-Migrationsprojekt"

**Prompt 1 (Stufe 1 — die nackte Frage):**
```
Erstelle eine Risikoanalyse fuer ein IT-Migrationsprojekt.
```
→ Ergebnis: generisch, passt ueberall und nirgends

**Prompt 2 (Stufe 2 — strukturierter Kontext):**
```
Du bist IT-Projektleiter in einem mittelstaendischen Unternehmen (500 MA).
Wir migrieren unser On-Prem ERP auf SAP S/4HANA Cloud.
Timeline: 18 Monate. Budget: 2 Mio EUR. Kritisch: Betriebsrat muss zustimmen.

Erstelle eine Risikoanalyse mit den Kategorien:
Technisch, Organisatorisch, Rechtlich, Finanziell.
Pro Kategorie: Top-2-Risiken mit Eintrittswahrscheinlichkeit und Massnahme.
```
→ Ergebnis: deutlich spezifischer, strukturiert, verwertbar

**Prompt 3 (Stufe 3 — Dialog ueber 3-4 Turns):**
- Turn 1: Wie Prompt 2
- Turn 2: *"Das Risiko 'Datenmigration' ist zu generisch. Unsere Hauptsorge ist, dass die historischen Buchungsdaten (10 Jahre) nicht 1:1 uebertragbar sind. Schaerfe das nach."*
- Turn 3: *"Ergaenze: Der Betriebsrat hat in der Vergangenheit aehnliche Projekte um 6 Monate verzoegert. Wie beeinflusst das die Timeline-Risiken?"*
→ Ergebnis: massgeschneidert, enthält Insider-Wissen, direkt nutzbar

**Interaktion:** Die drei Ergebnisse stehen nebeneinander. Trainer fragt:

> *"Welches Ergebnis wuerdet ihr eurem Kunden schicken?"*

Kurze Mentimeter-Abstimmung oder Handzeichen.

> *"Was war der Unterschied? Die AI war dieselbe. Das Modell war dasselbe. Der Unterschied war der **Kontext**, den wir mitgegeben haben."*

---

## Concept: Die Kontextleiter — Stufen 1–3 (7 Min)

*Kurzer Theorie-Input, maximal 5-6 Slides. Trainer stellt die Kontextleiter vor (alle 5 Stufen zeigen, Fokus auf 1–3 fuer heute).*

### Die drei Stufen, die ihr sofort nutzen koennt

**Stufe 1 — Die nackte Frage**
Die LLM raet, wer du bist und was du willst. Sie faellt auf den Durchschnitt aller Texte zurueck, die sie im Training gesehen hat. Ergebnis: generisch, austauschbar.

**Stufe 2 — Der strukturierte Prompt**
Du sagst der LLM, wer du bist, was du willst und unter welchen Bedingungen. Das umfasst:
- **Rolle:** Wer bist du, wer ist die Zielgruppe?
- **Rahmenbedingungen:** Was sind die Constraints?
- **Struktur:** Gib eine Gliederung vor — lass die AI den Inhalt fuellen, nicht die Struktur erfinden
- **Format:** Tabelle, Bullet Points, Fliesstext?

> 💡 **Praxis-Tipp "Struktur als Kontext":** Eines der wirksamsten Werkzeuge auf Stufe 2 ist, der AI eine Gliederung vorzugeben. Ihr definiert die Kapitel — die AI fuellt sie mit Inhalt. Ihr reviewt, korrigiert, ergaenzt. Euer Job ist nicht mehr der erste Entwurf, sondern die Struktur und das kritische Review.

**Stufe 3 — Der Dialog**
Du und die LLM bauen gemeinsam Verstaendnis auf. Du korrigierst, vertiefst, schaerfst. Das Ergebnis entsteht iterativ — wie ein Gespraech mit einem faehigen Kollegen, der den Kunden noch nicht kennt.

### Kernbotschaft

> *"Die Qualitaet eurer Ergebnisse haengt direkt von der Qualitaet des Kontexts ab, den ihr mitgebt. Nicht von der Cleverness eures Prompts."*

### Zwei wichtige Grenzen

**Grenze 1 — Relevanz schlaegt Menge:**
Mehr Kontext ist **nicht** automatisch besser. LLMs haben einen Sweet Spot: Zu wenig Kontext → generische Antworten. Relevanter Kontext → beste Ergebnisse. Zu viel oder irrelevanter Kontext → die LLM verliert den Fokus, vernachlaessigt wichtige Teile, oder produziert schlechtere Ergebnisse. Das Ziel ist nicht maximaler Kontext, sondern **relevanter Kontext**.

*(Visualisierung: Sweet-Spot-Kurve im Mural — umgekehrtes U)*

**Grenze 2 — Nicht jeder Kontext darf in den Prompt:**
Auch wenn Kontext die Qualitaet steigert: sensible Daten, vertrauliche Kundeninformationen oder personenbezogene Daten gehoeren nicht in jedes Tool. Faustregel: *"Wuerdest du es einem externen Berater schicken, den du gerade erst kennengelernt hast? Dann darf es in den Prompt. Sonst nicht."*

### Ausblick

*"In Block 3 schauen wir uns Stufen 4 und 5 an — da liefert nicht mehr ihr den Kontext, sondern das System. Das aendert die Spielregeln grundlegend."*

---

## Concrete Practice: "Die Kontext-Challenge" (30 Min)

### Phase 1 — Solo-Erfahrung (12 Min)

*Jeder Teilnehmer waehlt eine **echte Aufgabe aus dem eigenen Arbeitsalltag** — keine fiktiven Szenarien.*

**Beispiele als Hilfestellung** (auf dem Mural als Sticky Notes):
- Eine E-Mail an einen schwierigen Stakeholder
- Eine Zusammenfassung eines komplexen Sachverhalts
- Ein Konzeptentwurf fuer einen Workshop oder ein Meeting
- Ein Code-Review oder Refactoring-Plan (fuer Entwickler)
- Eine Risikobewertung oder Entscheidungsvorlage

**Ablauf — dieselbe Aufgabe auf drei Stufen:**

1. **Stufe 1** ausprobieren — den einfachsten Prompt, der einem einfaellt (3 Min)
2. **Stufe 2** — denselben Anwendungsfall, aber mit Rolle, Kontext, Rahmenbedingungen, ggf. Gliederung (4 Min)
3. **Stufe 3** — in den Dialog gehen: nachfassen, korrigieren, schaerfen, vertiefen (5 Min)

**Dokumentation:** Teilnehmer bewerten die Ergebnisqualitaet jeder Stufe im Mural:
- Ampelsystem: 🔴 unbrauchbar / 🟡 Basis, braucht viel Nacharbeit / 🟢 sofort nutzbar
- Optional: kurze Notiz, welcher Kontexttyp den groessten Unterschied gemacht hat

> 💡 **Walk the Talk:** Das Tool ist aktiver Mitmacher — MS Copilot Chat, GitHub Copilot Chat, oder ein anderes verfuegbares AI-Tool. Testen, nicht nur schreiben.

### Phase 2 — Team-Austausch in Breakout Rooms (12 Min)

*Teams vergleichen ihre Erfahrungen. Leitfragen fuer die Diskussion:*

- Wer hatte den groessten Qualitaetssprung — und zwischen welchen Stufen?
- Welcher **Kontexttyp** hat am meisten gebracht? (Rolle? Beispiele? Constraints? Struktur/Gliederung? Iteration?)
- Gab es Faelle, wo Stufe 2 schon gereicht hat und Stufe 3 **keinen** Mehrwert brachte?
- Gab es Faelle, wo mehr Kontext das Ergebnis **schlechter** gemacht hat?

**Team-Ergebnis — zwei Artefakte:**

1. **"Unsere Top-3 Kontext-Zutaten"** — die drei Arten von Kontext, die den groessten Unterschied gemacht haben (als Sticky Notes im Mural)
2. **"Unser Team-Anwendungsfall"** — ein konkreter Anwendungsfall, den das Team naechste Woche gemeinsam auf Stufe 3 ausprobieren will (fuer den naechsten Team-Check-in)

### Phase 3 — Plenum-Ernte (6 Min)

- Jedes Team nennt seine Top-3 Kontext-Zutaten (je 1 Minute)
- Trainer sammelt live auf dem Mural in der **"Kontext-Zutatenliste"** — das erste Stueck der Team-Prompt-Library
- Trainer ordnet ein: *"Seht ihr das Muster? Die meisten eurer wirksamsten Zutaten sind Kontext — nicht Prompt-Tricks. Rolle, Rahmenbedingungen, Struktur, Beispiele, Iteration."*

> 💡 **Kontext-Zutatenliste als Team-Artefakt:** Diese Liste waechst ueber beide Sessions (Block 2 + 3) und fliesst in die Prompt-Library ein. Jedes Team hat seine eigene — das gibt den Teams ein gemeinsames Werk.

---

## Conclusion (5 Min)

- **Each Teach:** Jeder sagt 1 Satz: *"Mein wichtigster Kontext-Tipp ist..."*
- **Kontextleiter-Verortung:** Jeder markiert im Mural auf der Kontextleiter: *"Auf welcher Stufe arbeite ich aktuell meistens?"* (Sticky Dot)
- **Persoenliches Ziel setzen:** Jeder traegt im Growth Log ein neues 🎯 *"Welche Stufe will ich diese Woche bewusst einsetzen?"*

---

## Transfer-Auftrag

> Nimm dir diese Woche eine **wiederkehrende Aufgabe** vor. Mach sie einmal auf Stufe 1, einmal auf Stufe 3. Dokumentiere den Unterschied im Growth Log.
>
> **Bonus:** Finde heraus, wo Stufe 3 **NICHT** besser war als Stufe 2 — das ist genauso wertvoll. Und: Gab es einen Moment, wo du gemerkt hast, dass du der AI zu viel Kontext gegeben hast und das Ergebnis schlechter wurde?

**Aufwand:** ~30 Min

---

## Trainer-Notizen

### Vorbereitung
- [ ] Drei Prompts (Stufe 1, 2, 3) fuer die Live-Demo vorbereiten und vorher testen
- [ ] Kontextleiter als permanentes Mural-Element einrichten (siehe Mural-Design unten)
- [ ] Sweet-Spot-Kurve als Visualisierung im Mural platzieren
- [ ] Beispiel-Aufgaben als Sticky Notes im Mural vorbereiten

### Beobachtung waehrend der Uebung
- Wer springt direkt zu Stufe 3 und iteriert natuerlich?
- Wer bleibt bei Stufe 1 haengen und braucht Hilfe beim Kontextaufbau?
- Welche Kontext-Zutaten tauchen teamuebergreifend auf? → Muster fuer Block 3

### Nach Block 2
- Kontext-Zutatenliste im Mural konsolidieren
- Team-Anwendungsfaelle notieren → im naechsten Team-Check-in nachfragen
- Growth Log pruefen: Haben die Teams ihre Verortung auf der Kontextleiter dokumentiert?

---

**Framework-Referenz:** [AI Transformation Framework — Kap. 3.2 Readiness (Human & Cultural), Kap. 3.5 Technical Enablement](../../framework/ai-transformation-framework-craft.md)

← [Block 1: Kickoff](block-01-kickoff.md) | [Block 3: Vom Dialog zum System](block-03-ai-im-code.md) →
