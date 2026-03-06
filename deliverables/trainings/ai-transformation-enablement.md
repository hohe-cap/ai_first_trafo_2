# Trainingskonzept: AI Transformation Enablement

## Ueberblick

- **Zielgruppe:** Berater, Entwickler, Architekten, POs — kuenftige Mitglieder von AI Adoption Teams
- **Dauer:** 10 Bloecke à 60 Min (woechentlich, Remote)
- **Format:** Remote (MS Teams / Zoom)
- **Lernziel:** Von "AI-interessiert, aber unsystematisch" zu "kann AI-Tools produktiv nutzen UND eine AI-Transformation beim Kunden strukturiert begleiten"
- **Max. Teilnehmer:** 16 (4 feste Vierer-Teams)
- **Voraussetzungen:** Laptop mit Internetzugang, Zugang zu MS Copilot (inkl. Copilot Chat) / GitHub Copilot (wird im Onboarding sichergestellt)
- **Sicherheitsstufe:** Stufe 1 (Public Cloud)
- **Didaktik:** Training from the Back of the Room (4 Cs), Backward Design, Kirkpatrick, 70:20:10

## Roter Faden: Die Reise

Das Training folgt einer durchgaengigen Metapher: **"Vom Entdecker zum Guide"**

```
Block 1-3: ICH & AI (eigene Faehigkeiten aufbauen)
Block 4-6: AI & ARBEIT (AI in den Arbeitsprozess integrieren)
Block 7-9: AI & TRANSFORMATION (andere befaehigen, Kunden begleiten)
Block 10:  COMMUNITY (Netzwerk festigen, Weiterlernen)
```

Jeder Block hat:
- **Eroeffnung (5 Min):** "Show & Tell" — Teilnehmer zeigen Erfolge, neue Erkenntnisse und Fails aus der Zwischen-Anwendung (ab Block 2). Explizit erwuenscht: *"Das Lustigste, was AI fuer mich falsch gemacht hat"* — schafft Verbindung, nimmt Erwartungsdruck und erzeugt die besten Lacher.
- **4-Cs-Kern (45 Min):** Connection → Concept → Concrete Practice → Conclusion
- **Transfer-Auftrag (5 Min):** Konkrete Aufgabe fuer die kommende Woche
- **Growth XP:** Teams sammeln XP fuer Show & Tell (inkl. Fails), Uebungen, Zwischen-Aufgaben und Wachstumsmomente

---

## Lernziele (Backward Design)

Was sollen die Teilnehmer NACH dem Training koennen?

1. **Anwenden:** AI-Chat-Tools (MS Copilot Chat, GitHub Copilot Chat) und Code-Assistenten (GitHub Copilot) fuer konkrete Arbeitsaufgaben produktiv einsetzen
2. **Anwenden:** Effektive Prompts systematisch formulieren und iterativ verbessern
3. **Analysieren:** AI-generierte Outputs kritisch bewerten (Halluzination, Bias, Qualitaet)
4. **Anwenden:** AI-Interventionen ueber den gesamten SDLC identifizieren und einsetzen
5. **Erklaeren:** Die 5 CRAFT-Dimensionen und das Iterationsmodell einem Kunden vermitteln
6. **Anwenden:** Den CRAFT Explorer einsetzen und Ergebnisse interpretieren
7. **Entwerfen:** Eine AI-Transformations-Roadmap fuer einen Kunden skizzieren
8. **Bewerten:** Die eigene Rolle im AI Adoption Team einordnen

---

## Onboarding & Differenzierung (vor Block 1)

### Problem: Unterschiedliches Vorwissen

Teilnehmer haben verschiedene Startpunkte (manche nutzen AI taeglich, andere noch nie).

### Loesung: Gestuftes Pre-Work + Selbsteinschaetzung

**1 Woche vor Start — Self-Assessment (5 Min):**
Kurze Umfrage (MS Forms / Google Forms):
- "Ich nutze AI-Chat-Tools (MS Copilot Chat, GitHub Copilot Chat) regelmaessig" (1-5)
- "Ich kenne VS Code und kann Extensions installieren" (1-5)
- "Ich habe bereits mit GitHub Copilot gearbeitet" (1-5)
- "Ich kenne Begriffe wie Prompt Engineering, RAG, Token" (1-5)

**Ergebnis → 2 Gruppen:**
- **Fast Track:** Score >= 12 → Nur kurzes "Was ist neu?"-Video (10 Min)
- **Starter Kit:** Score < 12 → Vorbereitungs-Session (60 Min, optional aber empfohlen)

**Starter-Kit-Session (vor Block 1):**
- VS Code installieren + Extensions (GitHub Copilot, Continue.dev)
- Erster Chat mit MS Copilot Chat: "Erklaere mir, was du bist"
- Begriffe klaeren: Prompt, Token, Kontext, Halluzination
- Buddy-Zuweisung: Jeder Starter bekommt einen Fast-Track-Buddy

**Buddy-System im Detail:**
- **Wöchentliches Buddy Check-in (15 Min, selbstorganisiert):** Zwischen jedem Block tauschen sich Buddy-Paare aus: *"Was hast du diese Woche probiert? Wo war ich nuetzlich?"* — kein Pflichtformat, aber strukturierter Impuls.
- **Expert Sidekick (ab Block 3):** Bei Team-Challenges kann ein deutlich erfahrenerer Teilnehmer die Rolle des *Expert Sidekick* uebernehmen: er coacht sein Team aktiv statt nur mitzumachen. Bewertung: Qualitaet der Unterstuetzung, nicht direkt der Team-Output. Entsprechend Growth XP.
- **Buddy-Anpassung nach Block 1:** Die Prompt-Kitchen-Uebung (Block 1) zeigt real, wer tatsaechlich fortgeschritten ist — unabhaengig vom Self-Assessment. Trainer beobachtet und notiert kurz. Buddy-Paare koennen nach Block 1 justiert werden, falls Self-Assessment und Realitaet auseinanderklaffen.
- **Gemeinsame Show & Tell:** Ab Block 3 gelegentlich: *"Buddy-Paar zeigt gemeinsam"* — macht das gegenseitige Lernen sichtbar und erzeugt Verbindung ueber Team-Grenzen hinaus.

---

## Tech Stack Readiness — Pre-Training Kommunikationsplan

### Ziel
Sicherstellen, dass alle Teilnehmer am ersten Block sofort mit den Tools arbeiten koennen. Kein Lernzeitverlust durch fehlende Lizenzen oder technische Probleme am Tag selbst.

### Timeline

| Zeitpunkt | Aktion | Verantwortlich |
|---|---|---|
| 2 Wochen vor Start | Self-Assessment-Umfrage + Ankuendigung der Tech-Anforderungen | Trainer |
| 10 Tage vor Start | Tech-Check-E-Mail mit Checkliste (s.u.) | Trainer |
| 5 Tage vor Start | Smoke-Test selbst durchfuehren (s.u.) | Teilnehmer |
| 1 Woche vor Start | Starter-Kit-Session (nur fuer Teilnehmer mit Problemen beim Smoke-Test) | Trainer + Teilnehmer |
| Tag vor Block 1 | Erinnerung: Miro-Link, Zoom-Link, Checkliste nochmal | Trainer |

### Smoke-Test (5 Min, selbst durchfuehren)
> *Oeffne GitHub Copilot in VS Code. Schreibe eine Funktion, die deinen Namen in Grossbuchstaben zurueckgibt — mit Copilot-Unterstuetzung. Screenshot machen und fuer Block 1 aufbewahren.*
>
> Funktioniert das nicht? → Starter-Kit-Session anmelden (kein Stress, dafuer gibt es sie).

### Tech-Checkliste pro Teilnehmer

| Tool | Minimalanforderung | Selbstcheck |
|---|---|---|
| GitHub Copilot | Lizenz aktiv + VS Code Extension installiert | `code --list-extensions \| grep copilot` |
| MS Copilot Chat | Erreichbar ueber microsoft365.com oder MS Teams | Login-Test |
| VS Code | Version >= 1.85 | `code --version` |
| Miro | Account vorhanden oder Gastzugang funktioniert | Test-Board-Link (vorab verschicken) |
| Zoom / MS Teams | Breakout Rooms funktionieren | Testmeeting |

### Kommunikation nach Seniority-Track

**Fast Track (Score >= 12):**
> *"Alles bereit? Mach den Smoke-Test. Wenn er klappt, bist du ready. Falls du Lust hast: Was ist seit dem Self-Assessment neu fuer dich?"*

**Starter Kit (Score < 12):**
> *"Bitte mach den Smoke-Test. Falls Probleme auftreten — kein Stress, dafuer ist die Starter-Kit-Session da. Meld dich, wenn du nicht weiterkommst."*

---

Das XP-System belohnt **Wachstum, nicht Vorsprung**. Wer von einem niedrigen Niveau aus einen grossen Sprung macht, sammelt mehr XP als wer schon vorne startet und vorne bleibt. Der Fokus liegt auf dem Delta — was neu dazugekommen ist. Ein grosser erster Schritt ist wertvoller als ein kleiner Fortschritt auf hohem Niveau.

### Teams
4 feste Teams à 4 Personen (gemischt nach Vorwissen). Teams bekommen Namen (self-assigned in Block 1). Jedes Team fuehrt ein **Growth Log** (Miro-Karte oder Shared Doc) mit drei Feldern:
- *Wo starten wir?* (Self-Assessment-Score Beginn)
- *Was haben wir diese Woche zum ersten Mal gemacht?*
- *Was war unser bestes "Aha" oder lustigstes Fail?*

### Punkte
| Aktivitaet | Growth XP | Warum |
|---|---|---|
| Etwas zum ersten Mal ausprobiert (im Growth Log dokumentiert) | 15 | Wert: neues Terrain betreten |
| Show & Tell: Eine Niederlage + was dazugelernt wurde | 20 | Wert: Wachstum sichtbar machen |
| Team-Miniziel aus letztem Block erreicht (selbstgesetzt) | 20 | Wert: eigene Messlatte schlagen |
| Zwischen-Aufgabe erledigt (pro Person) | 10 | Wert: dranbleiben |
| Starter uebernimmt etwas, das Fast-Tracker noch nicht probiert hat | 25 | Wert: Richtung umkehren |
| Buddy-Paar zeigt gemeinsame Loesung im Show & Tell | 15 | Wert: voneinander lernen |
| Gast-Trainer-Challenge mitgemacht (alle Teams) | 15 | Wert: Mut zeigen |

### Zielsetzung pro Block
Jedes Team setzt sich zu Beginn jedes Blocks ein Miniziel: *"Was wollen wir heute zum ersten Mal ausprobieren?"* — Ziel erledigt = Growth XP. Das schafft Ownership ohne externen Vergleichsdruck.

### Growth Story statt Leaderboard
Kein Ranking, kein Sieger. Stattdessen wird zu Beginn jedes Blocks der stärkste **Wachstumsmoment der Vorwoche** kurz hervorgehoben (1 Minute, Trainer-Nominierung oder Peer-Tipp). Am Ende des Trainings entsteht eine **Growth Story des gesamten Jahrgangs** — die besten Aha-Momente, die mutigsten Experimente, die lustigsten Fails. Diese kann in der Community-Bibliothek landen.

---

## Gast-Trainer-Integration

### Prinzip
Gast-Trainer bringen ihr Thema und ihre Vorbereitung mit. Integration ins Gesamtkonzept durch:

1. **Briefing-Template** fuer Gast-Trainer (vorab):
   - Block-Nummer und Thema im roten Faden
   - Erwartete Lernziele (was sollen TN danach koennen?)
   - 4-Cs-Struktur: "Bitte plane 10 Min Connection, 15 Min Input, 25 Min Hands-on, 10 Min Wrap-up"
   - Vorwissen der Teilnehmer (Ergebnis aus Self-Assessment)
   - Team-Struktur (4 Teams, bitte Uebungen in Teams)

2. **Slot im Block:** Gast-Trainer bekommen den Concept + Concrete Practice Teil (40 Min). Connection und Conclusion macht der Haupt-Trainer fuer Kontinuitaet.

3. **Vorgeschlagene Gast-Trainer-Bloecke:** Block 4, 6, 8 (markiert mit [GAST])

4. **Ton-Hinweis fuer Gast-Trainer:** Professionell und engagiert, aber nicht steif. Uebungen duerfen witzig sein — ein gutes Lachen oeffnet den Kopf fuer neues Wissen. Bring dein eigenes bestes AI-Fail mit: nichts baut Vertrauen schneller auf als Authentizitaet. Albern wird es nicht, solange der Kontext klar ist. Der Rahmen traegt — du kannst die Uebungen mit Persoenlichkeit fuellen.

---

## Agenda: 10 Bloecke

---

### PHASE 1: ICH & AI (Bloecke 1–3)

---

### Block 1: Kickoff — AI als Denkpartner (60 Min)

**Lernziel:** Teilnehmer koennen einen AI-Chat effektiv fuer eine Arbeitsaufgabe nutzen und kennen ihr Team.

**Connection (15 Min)**
- Aktivitaet: **Standing Survey** (Mentimeter) — "Wie oft nutzt du AI-Tools bei der Arbeit?" (taeglich / woechentlich / selten / nie)
- Team-Bildung: 4 Teams, 3 Min fuer Teamname + Team-Kanal (Slack/Teams)
- Leitfrage: "Was war dein bester und schlechtester Moment mit AI bisher?"
- **"So lernen wir hier" (5 Min):** Kurze Erklaerung des Trainingsdesigns — kein theoretischer Exkurs, sondern Bewusstsein schaffen:
  - *Why Connection first?* Das Gehirn verankert Neues besser, wenn es an Bekanntes anknuepft (Ausubel, Meaningful Learning)
  - *Why Show & Tell statt Test?* Retrieval Practice: aktives Erinnern ist effektiver als passiver Input (Roediger & Butler, 2011)
  - *Why Teams?* Soziales Lernen macht 20% des 70:20:10 aus — und wer etwas erklaert, versteht es tiefer
  - *Why Weekly Transfer?* Spaced Repetition: verteiltes Ueben schlaegt Intensivbloecke (Ebbinghaus Forgetting Curve)
  - Botschaft: "Dieser Aufbau ist kein Zufall — er folgt dem, was Lernforschung als wirksam belegt. Ihr muesst nichts blind glauben, aber ihr koennt euch darauf einlassen."

**Concept (10 Min)**
- Input (5 Min): Was kann AI heute? Live-Demo: gleiche Aufgabe in MS Copilot Chat und GitHub Copilot Chat — Unterschiede in Kontext, Staerken und Einsatzbereich zeigen
- Interaktion: **Chat Waterfall** — "Welches Tool wuerdest du fuer welche Aufgabe waehlen?" Alle tippen, keiner sendet, dann gleichzeitig

**Concrete Practice (25 Min)**
- Uebung: **Prompt Kitchen (Team-Challenge)**
  - Aufgabe: "Kocht den besten Prompt fuer: [konkretes Arbeitsszenario, z.B. Meeting-Zusammenfassung erstellen]"
  - Basis-Zutaten: Rolle, Kontext, Aufgabe, Format. Wuerzen: Ton, Beispiele, Einschraenkungen.
  - Jedes Team kocht in Breakout Rooms (15 Min)
  - Rezepte in Miro posten, alle probieren und voten (10 Min)
  - Growth XP fuer das kreativste Rezept + fuer dokumentierten Erst-Versuch im Growth Log

**Conclusion (5 Min)**
- **3-2-1:** 3 Dinge gelernt, 2 Ideen fuer den Alltag, 1 offene Frage (im Chat posten)
- **Growth Log starten:** Jedes Team traegt ein erstes "Zum ersten Mal heute" ein
- **Team-Miniziel setzen:** "Was wollen wir naechste Woche zum ersten Mal ausprobieren?" — Growth XP wenn erreicht

**Transfer-Auftrag (5 Min):**
> Nutze diese Woche AI fuer EINE echte Arbeitsaufgabe. Mache einen Screenshot vom besten Ergebnis — oder vom lustigsten Fail. Bereite 2 Saetze fuer "Show & Tell" vor.

---

### Block 2: Prompt Engineering Praxis (60 Min)

**Lernziel:** Teilnehmer koennen systematisch effektive Prompts formulieren und iterativ verbessern.

**Show & Tell Eroeffnung (5 Min)**
- 2 freiwillige Teilnehmer zeigen ihren Screenshot + 2 Saetze (je 2 Min)
- Team-XP fuer Teilnahme

**Connection (5 Min)**
- **Myth or Fact** (Miro): 5 Aussagen zu AI-Prompts ("Laengere Prompts sind besser", "AI kann keine Tabellen", etc.)

**Concept (15 Min)**
- Input (10 Min): Prompt-Patterns vorstellen:
  - Rolle + Kontext + Aufgabe + Format
  - Few-Shot Prompting (Beispiele geben)
  - Chain-of-Thought ("Denke Schritt fuer Schritt")
  - Iteratives Verfeinern
- Interaktion: **Rapid Writing** — "Schreibe in 60 Sek den Prompt fuer: Erstelle ein Architektur-Review"

**Concrete Practice (25 Min)**
- Uebung: **Prompt-Werkstatt (Pair Work in Breakout Rooms)**
  - 3 Szenarien aus dem echten Arbeitsalltag (vorbereitet, z.B. E-Mail formulieren, Code erklaeren, Testfaelle generieren)
  - Jedes Paar waehlt 1 Szenario, schreibt Prompt, testet, verbessert
  - Beste Prompts werden in Team-Prompt-Library gesammelt (Shared Doc)

> 💡 **Walk the Talk:** Den Prompt nicht nur schreiben, sondern sofort live in MS Copilot Chat oder GitHub Copilot Chat testen und iterativ verbessern. Das Tool ist aktiver Mitmacher, nicht Zielscheibe.

**Conclusion (5 Min)**
- **Each Teach:** Jeder sagt 1 Satz: "Mein wichtigster Prompt-Tipp ist..."
- XP-Update

**Transfer-Auftrag:**
> Erweitere die Team-Prompt-Library um 2 Prompts aus deinem Arbeitsalltag. Teste sie und notiere, was gut funktioniert hat.

---

### Block 3: AI im Code — GitHub Copilot & Co. (60 Min)

**Lernziel:** Teilnehmer koennen GitHub Copilot produktiv im Editor nutzen und AI-generierten Code kritisch bewerten.

**Show & Tell (5 Min)**
- Team-Prompt-Libraries vergleichen: Welches Team hat die meisten/besten Prompts? (Peer Vote, 20 XP)

**Connection (5 Min)**
- **Think-Pair-Share** (Breakout, 3 Min): "In welcher Situation beim Coden wuenschst du dir am meisten Hilfe?"

**Concept (15 Min)**
- Input (10 Min): Live-Coding-Demo:
  - Copilot Inline Suggestions
  - Copilot Chat: Code erklaeren, refactoren, Testfaelle generieren
  - Context Management: Welche Dateien sieht Copilot? `@workspace`, `#file`
- Interaktion: **Signal Cards** (Thumbs Up/Down in Chat): "Haettet ihr diesen Vorschlag akzeptiert?"

**Concrete Practice (25 Min)**
- Uebung: **Code-Challenge (Team-Battle)**
  - Vorbereitete Aufgabe (z.B. eine Funktion schreiben, die X tut)
  - Teams loesen in Breakout Rooms MIT Copilot (15 Min)
  - Bewertung: Korrektheit + Code-Qualitaet + wie wurde Copilot genutzt?
  - 30 XP fuer Gewinner

**Conclusion (5 Min)**
- **Commitment Card:** "Was werde ich naechste Woche mit Copilot probieren?"

**Transfer-Auftrag:**
> Nutze GitHub Copilot fuer eine echte Aufgabe im Projekt. Dokumentiere: Was hat funktioniert? Wo hat Copilot versagt? Bring ein Beispiel fuer beides zum naechsten Block.

---

### PHASE 2: AI & ARBEIT (Bloecke 4–6)

---

### Block 4: AI im SDLC — Von Requirements bis Ops [GAST] (60 Min)

**Lernziel:** Teilnehmer koennen identifizieren, in welchen SDLC-Phasen AI den groessten Hebel hat.

**Show & Tell (5 Min)**
- 2 Teilnehmer: "Wo hat Copilot versagt und warum?"

**Connection (5 Min)** *(Haupt-Trainer)*
- **Graffiti Wall** (Miro): "In welchen Arbeitsschritten nutzt du HEUTE schon AI?" — Teilnehmer kleben Post-its auf eine SDLC-Zeitleiste (Requirements → Design → Dev → Test → Deploy → Ops)

**Concept + Concrete Practice (40 Min)** *(Gast-Trainer)*
- Gast-Trainer zeigt reale Beispiele: AI in Requirements (User Stories), Testing (Testfall-Generierung), Documentation (API-Docs), Operations (Log-Analyse)
- Hands-on: Teams waehlen 1 SDLC-Phase und erarbeiten eine "AI-Intervention" fuer ihr aktuelles Projekt

> 💡 **Walk the Talk:** Die AI-Intervention wird MIT AI erarbeitet — nicht darueber geredet, sondern direkt mit MS Copilot Chat oder GitHub Copilot entwickelt, verfeinert und bewertet. Team: eine Person promptet, eine reviewt kritisch.

**Conclusion (5 Min)** *(Haupt-Trainer)*
- **Gallery Walk** (Miro): Alle Team-Interventionen anschauen, Dot-Voting fuer "Beste Idee"
- XP-Update

**Transfer-Auftrag:**
> Probiere EINE AI-Intervention ausserhalb der Coding-Phase aus (z.B. Meeting-Protokoll, Testfall-Design, Doku). Bereite 2 Min Show & Tell vor.

---

### Block 5: AI-Patterns, Pitfalls & Teamwork (60 Min)

**Lernziel:** Teilnehmer koennen typische AI-Fehler (Halluzination, Bias, Over-Reliance) erkennen und damit umgehen — und wissen, wie Teams effektiv gemeinsam mit AI arbeiten.

**Show & Tell (5 Min)**
- 2 Teilnehmer: AI-Intervention ausserhalb der Coding-Phase

**Connection (5 Min)**
- **Myth or Fact:** "AI halluziniert haeufiger bei Fakten als bei Code" / "Laengere Konversationen machen AI besser" / "AI kann vertrauliche Daten leaken" — Teilnehmer voten, Aufloesung

**Concept (15 Min)**
- Input (12 Min): Die 5 haeufigsten Fehler im Umgang mit AI — plus kollaborative Muster fuer Teams:
  1. Blindes Vertrauen (Output nicht pruefen)
  2. Zu wenig Kontext geben
  3. Zu viel auf einmal verlangen
  4. Sensible Daten eingeben
  5. AI als Ersatz statt als Verstaerkung sehen
  6. **AI im Team: Wer promptet? Wer reviewt? Wie teilt man?**
     - *Pilot & Navigator* (wie Pair Programming): Eine Person promptet, die andere reviewt kritisch — beide lernen
     - *Diverge & Converge*: Alle prompten separat, dann bestes Ergebnis gemeinsam auswaehlen
     - *Shared Prompt Library* als lebendes Team-Asset (bereits im Training aktiv)
     - *Async vs. Sync*: AI in der Vorbereitung vs. AI im laufenden Meeting — wann was?
- Interaktion: **Teach-Back** — Paare erklaeren sich gegenseitig je 1 Fehler oder Muster + Gegenmassnahme

**Concrete Practice (25 Min)**
- Uebung: **AI-Detektiv (Team-Challenge)**
  - 4 AI-generierte Outputs (Code, Text, Analyse, Zusammenfassung) — mit eingebauten Fehlern
  - Teams muessen die Fehler finden und korrigieren (Breakout, 15 Min)
  - Aufloesung im Plenum (10 Min), 20 XP fuer meiste gefundene Fehler

**Conclusion (5 Min)**
- **One-Minute Closer:** "Die groesste Gefahr bei AI-Nutzung ist fuer mich..."

**Transfer-Auftrag:**
> Fuehre ein "AI-Review" durch: Lass AI etwas fuer dich erstellen und pruefe das Ergebnis systematisch. Was war korrekt, was nicht?
>
> **Bonus fuer Teams:** Schreibt gemeinsam eine kurze AI-Zusammenarbeits-Vereinbarung (max. 1 Seite): *"Bei uns promptet..., bei uns reviewt..., Ergebnisse teilen wir ueber..."* — Growth XP fuer Teams, die sie beim naechsten Show & Tell vorstellen.

---

### Block 6: MS Copilot im Arbeitsalltag — Office, Teams, Mail [GAST] (60 Min)

**Lernziel:** Teilnehmer koennen MS Copilot in Outlook, Teams und Office produktiv einsetzen.

**Show & Tell (5 Min)**
- 2 Teilnehmer: AI-Review — was hat AI falsch gemacht?

**Connection (5 Min)** *(Haupt-Trainer)*
- **Fast Pass** (Breakout, 2 Min, zufaellige Paare): "Welche wiederkehrende Office-Aufgabe nervt dich am meisten?"

**Concept + Concrete Practice (40 Min)** *(Gast-Trainer)*
- Live-Demos + sofortiges Nachmachen:
  - Teams-Meeting zusammenfassen lassen
  - E-Mail-Entwurf mit Copilot
  - Excel-Analyse / PowerPoint-Erstellung
  - Word-Dokument umschreiben / kuerzen
- Uebung: Jedes Team bekommt ein Szenario (z.B. "Erstelle aus diesen Meeting-Notizen eine Praesentation fuer das Management")

**Conclusion (5 Min)** *(Haupt-Trainer)*
- **Action Plan:** "Welche 3 Office-Aufgaben lasse ich ab jetzt von Copilot unterstuetzen?"
- XP-Update

**Transfer-Auftrag:**
> Nutze MS Copilot fuer 3 verschiedene Office-Aufgaben. Miss die Zeitersparnis (grob geschaetzt).

---

### PHASE 3: AI & TRANSFORMATION (Bloecke 7–9)

---

### Block 7: Das CRAFT-Framework verstehen (60 Min)

**Lernziel:** Teilnehmer koennen die 5 CRAFT-Dimensionen erklaeren und auf ein Kunden-Szenario anwenden.

**Show & Tell (5 Min)**
- Zeitersparnis-Reports: Welches Team hat die meiste Zeit gespart? (20 XP)

**Connection (5 Min)**
- **Think-Pair-Share:** "Stell dir vor, ein Kunde sagt: 'Wir haben GitHub Copilot ausgerollt, aber niemand nutzt es.' — Was wuerdest du fragen?"

**Concept (15 Min)**
- Input (10 Min): CRAFT-Framework Ueberblick:
  - Die 5 Dimensionen (C-R-A-F-T) mit je einem konkreten Beispiel
  - Warum alle 5 gleichzeitig? (Iterativ, nicht sequenziell)
  - Die 5 Reifestufen (Exploring → Evolving)
  - Das AI Adoption Team und seine Rollen
- Interaktion: **Jigsaw** — 5 Breakout-Gruppen, jede liest 1 Dimension (vorbereitetes 1-Pager), dann mischen und lehren

**Concrete Practice (25 Min)**
- Uebung: **Dimensions-Mapping (Team-Arbeit)**
  - Case Study: Fiktiver Kunde (3 Teams, 300 Entwickler, nutzen ChatGPT heimlich, keine Governance)
  - Jedes Team erstellt ein CRAFT-Profil: Wo steht der Kunde auf jeder Dimension (1-5)?
  - Ergebnisse vergleichen — warum unterschiedliche Einschaetzungen?

> 💡 **Walk the Talk:** AI als Analyse-Partner nutzen: Erst eigene Einschaetzung, dann MS Copilot Chat fragen: *"Ein Unternehmen mit [Beschreibung] — wie wuerdest du die CRAFT-Reife einschaetzen?"* Vergleicht die AI-Einschaetzung mit eurer. Wo stimmt sie ueberein? Wo ueberrascht sie?

**Conclusion (5 Min)**
- **Each Teach:** "Die Dimension, die am meisten ueberrascht hat, ist..."

**Transfer-Auftrag:**
> Schau dir den CRAFT Explorer an (URL/Demo). Ueberlege: Wenn du morgen zu einem neuen Kunden kommst — welches Instrument wuerdest du zuerst einsetzen, Deep Dive oder Pulse Check? Notiere deine Begruendung fuer Block 8.

---

### Block 8: CRAFT Explorer & Interventionen [GAST] (60 Min)

**Lernziel:** Teilnehmer koennen den CRAFT Explorer einsetzen und aus den Ergebnissen Interventionen ableiten.

**Show & Tell (5 Min)**
- 2 Teilnehmer zeigen ihr Pulse-Check-Ergebnis und ihre Interpretation

**Connection (5 Min)** *(Haupt-Trainer)*
- **Standing Survey** (Mentimeter): "Bei welcher CRAFT-Dimension faellt es dir am schwersten, einem Kunden zu erklaeren, was zu tun ist?"

**Concept + Concrete Practice (40 Min)** *(Gast-Trainer)*
- Live-Walkthrough: CRAFT Explorer Session erstellen, Fragen beantworten, Ergebnisse interpretieren
- **Zwei Instrumente erklaeren — wann was:** 
  - **Deep Dive** (5×, je ~45–60 Min): Wird am Anfang der Transformation als **Kickoff-Baseline** durchgefuehrt — einmalig, um ein vollstaendiges Profil zu erstellen. Danach nur noch **punktuell**, wenn der Pulse Check Auffaelligkeiten zeigt (z.B. eine Dimension laeuft rueckwaerts) und mehr Tiefe gebraucht wird.
  - **Pulse Check** (16 Fragen, ~15 Min): Laeuft **mindestens alle 4 Wochen** — im Rhythmus der Iterations-Zyklen. Dient als Fruehwarnsystem: Entwickelt sich etwas in die falsche Richtung, loest das einen gezielten Deep Dive auf einer oder mehreren Dimensionen aus.
- Scoring-Logik erklaeren: Median (Pulse Check), (Median×0.6)+(Min×0.4) (Deep Dive), Cross-Validation
- Spider-Chart lesen und Handlungsempfehlungen ableiten
- Uebung: Teams bekommen vorgefuellte Ergebnisse und muessen:
  1. Die 2 kritischsten Dimensionen identifizieren
  2. Je 1 konkrete Intervention vorschlagen
  3. Entscheiden: Braucht eine Dimension einen Deep Dive — und warum?

> 💡 **Walk the Talk:** Die Interventionsvorschlaege werden MIT AI erarbeitet: Erst eigene Ideen, dann MS Copilot Chat als Sparringspartner: *"Fuer ein Team mit diesem CRAFT-Profil — welche Intervention wuerdest du in Dimension X empfehlen?"* Ergebnis: AI-Vorschlag reviewen, anpassen, begruenden.

**Conclusion (5 Min)** *(Haupt-Trainer)*
- **Gallery Walk** (Miro): Team-Interventionsplaene, Peer-Feedback mit Post-its

**Transfer-Auftrag:**
> Lies die Challenge Map (`CHALLENGE-MAP.md`). Waehle 3 Herausforderungen, die du bei einem aktuellen oder vergangenen Kunden wiedererkennst.

---

### Block 9: AI Transformation planen — Vom Assessment zur Roadmap (60 Min)

**Lernziel:** Teilnehmer koennen eine AI-Transformations-Roadmap fuer einen Kunden skizzieren.

**Show & Tell (5 Min)**
- Teams teilen ihre 3 wiedererkannten Herausforderungen — Muster?

**Connection (5 Min)**
- **Graffiti Wall:** "Was sind die groessten Hindernisse, wenn ein Unternehmen AI einfuehren will?"

**Concept (15 Min)**
- Input (10 Min):
  - Iterationsmodell: 4-Wochen-Zyklen, Readiness Gates
  - Messzyklus: Pulse Check mindestens alle 4 Wochen (Fruehwarnsystem) — bei Auffaelligkeiten gezielter Deep Dive auf betroffenen Dimensionen
  - AI Adoption Team aufbauen: Rollen, Kapazitaeten, Champion-Netzwerk
  - Typischer Verlauf: 6 Zyklen / 24 Wochen (Start: Deep Dive Kickoff-Baseline → dann Pulse Checks im 4-Wochen-Rhythmus)
  - KPI-Framework: DORA + CRAFT + Business Impact
- Interaktion: **Rapid Writing** — "Welche Rolle im AI Adoption Team passt am besten zu dir? Warum?"

**Concrete Practice (25 Min)**
- Uebung: **Roadmap-Design (Team-Challenge, die grosse Abschlussuebung)**
  - Szenario: Kunde hat CRAFT-Explorer-Ergebnis (vorbereitet), 4 Teams, 200 Entwickler
  - Jedes Team erstellt eine 6-Zyklen-Roadmap (Miro-Template):
    - Zyklus 1-2: Was zuerst?
    - Zyklus 3-4: Wo vertiefen?
    - Zyklus 5-6: Wie skalieren?
    - Welche Rollen im AI Adoption Team?
  - Praesentationen (je 3 Min) + Peer-Feedback

> 💡 **Walk the Talk:** Die Roadmap wird MIT AI co-entwickelt. Eine Person promptet in MS Copilot Chat: *"Erstelle eine grobe 6-Zyklen-Roadmap fuer [Kundenszenario]"* — dann diskutiert das Team: Wo stimmt ihr zu? Wo widersprecht ihr? Warum? AI als Ersteller, Menschen als strategische Reviewer.

**Conclusion (5 Min)**
- **3-2-1:** 3 Dinge, die ich einem Kunden sofort empfehlen wuerde / 2 Dinge, die ich noch vertiefen will / 1 Sache, die ich morgen anders mache

**Transfer-Auftrag:**
> Bereite fuer Block 10 einen 3-Min-Pitch vor: "Was ich aus diesem Training mitnehme und wie ich es einsetzen werde." Kann kreativ sein (Slides, Demo, Story).
>
> 💡 **Walk the Talk:** Nutze AI bei der Pitch-Vorbereitung: MS Copilot Chat als Sparringspartner fuer die Struktur, Copilot fuer Folien-Entwuerfe, oder einfach: *"Reviewe meinen Pitch auf Klarheit und Ueberzeugungskraft."*

---

### PHASE 4: COMMUNITY (Block 10)

---

### Block 10: Community Day — Feiern, Vernetzen, Weiterlernen (60 Min)

**Lernziel:** Teilnehmer haben ein Netzwerk, einen Weiterbildungsplan und Vertrauen in ihre Faehigkeiten.

**Connection (10 Min)**
- **Celebration Round:** Gesamt-XP-Stand, Sieger-Team-Ehrung (symbolisch)
- Highlight-Reel: Trainer zeigt die besten Show & Tell Momente, die besten Prompts, die kreativsten Loesungen

**Concept (10 Min)**
- Kein neuer Input — stattdessen: **Teilnehmer-Pitches**
  - 4-6 freiwillige 3-Min-Pitches: "Was ich mitnehme und wie ich es einsetze"
  - Applaus und kurzes Feedback

**Concrete Practice (25 Min)**
- **Community-Design Workshop (alle zusammen)**
  - Wie wollen wir als Community weiterlernen?
  - Breakout-Diskussion (10 Min): Format? Frequenz? Themen? Plattform?
  - Ergebnisse sammeln und abstimmen
  - Konkret festlegen: Naechster Termin, Verantwortliche, Kanal
- **Persoenlicher Aktionsplan** (5 Min):
  - "Meine 3 naechsten Schritte mit AI"
  - Buddy-Zuweisung: Wer folgt in 4 Wochen nach?

**Conclusion (10 Min)**
- **Each Teach (Final):** Jeder 1 Satz: "Fuer mich war das Wichtigste..."
- **Learning Log abschliessen**
- **Feedback-Umfrage** (Link im Chat)
- Verabschiedung: Danke + naechster Community-Termin

---

## Block-Uebersicht

| Block | Phase | Titel | Fokus | Gast? |
|-------|-------|-------|-------|-------|
| 0 | Pre | Onboarding & Starter Kit | Vorwissen angleichen | — |
| 1 | ICH & AI | Kickoff — AI als Denkpartner | MS Copilot Chat, GitHub Copilot, Orientierung | — |
| 2 | ICH & AI | Prompt Engineering Praxis | Prompt-Patterns, Prompt-Library | — |
| 3 | ICH & AI | AI im Code | GitHub Copilot, Code-Generierung | — |
| 4 | AI & ARBEIT | AI im SDLC | SDLC-Phasen, AI-Interventionen | GAST |
| 5 | AI & ARBEIT | AI-Patterns, Pitfalls & Teamwork | Fehler, Bias, kollaborative AI-Nutzung | — |
| 6 | AI & ARBEIT | MS Copilot im Office | Teams, Outlook, Excel, PowerPoint | GAST |
| 7 | AI & TRAFO | CRAFT-Framework | 5 Dimensionen, Reifestufen, Rollen | — |
| 8 | AI & TRAFO | CRAFT Explorer & Interventionen | Assessment durchfuehren, Ergebnisse lesen | GAST |
| 9 | AI & TRAFO | Transformation planen | Roadmap, Zyklen, AI Adoption Team | — |
| 10 | COMMUNITY | Community Day | Pitches, Netzwerk, Weiterlernen | — |

---

## Gast-Trainer-Briefing Template

```markdown
# Briefing fuer Gast-Trainer — Block [X]: [Titel]

## Kontext
- Training: "AI Transformation Enablement", 10 Bloecke Remote
- Teilnehmer: ~16 Personen, 4 feste Teams, unterschiedliches Vorwissen
- Bisherige Bloecke: [kurze Zusammenfassung was schon lief]
- Dein Block im roten Faden: [wo passt dieser Block hin]

## Dein Slot
- **Gesamt:** 40 Min (Connection + Conclusion macht der Haupt-Trainer)
- **Bitte plane:**
  - ~10-15 Min Input (mit Interaktion, nicht reiner Vortrag)
  - ~25 Min Hands-on-Uebung (in den 4 Teams, Breakout Rooms)
  - Ergebnisse so, dass sie auf Miro gepostet werden koennen

## Lernziel fuer diesen Block
[Was sollen die Teilnehmer danach koennen?]

## Teams
4 feste Vierer-Teams. Bitte plane Uebungen in diesen Teams.
Team-Namen: [werden nach Block 1 ergaenzt]

## Gamification
Es gibt ein Growth Story System. Wenn du eine Team-Challenge einbaust, koennen Teilnehmer Growth XP bekommen (z.B. 15 fuer Teilnahme, mehr fuer dokumentierten Erst-Versuch).

## Walk the Talk
Teilnehmer arbeiten IN den Uebungen MIT AI — nicht nur ueber AI. Bitte gestalte deine Hands-on-Aufgaben so, dass AI aktiv genutzt wird: als Co-Autor, Sparringspartner oder kritischer Reviewer. Beispiel: *"Erarbeitet die Loesung gemeinsam mit MS Copilot Chat, dann reviewt das Ergebnis kritisch."* Der Ansatz: AI first — Menschen entscheiden.

## Technik
- Remote via [Teams/Zoom]
- Miro-Board (Link wird geteilt)
- Teilnehmer haben Zugang zu: MS Copilot (inkl. Copilot Chat), GitHub Copilot
```

---

## Transfer & Erfolgsmessung (Kirkpatrick)

| Level | Was messen | Wie |
|-------|-----------|-----|
| 1 Reaction | War das Training relevant und motivierend? | Feedback-Umfrage nach Block 10 + kurzes Pulse nach Block 5 (Halbzeit) |
| 2 Learning | Koennen TN die Lernziele demonstrieren? | Roadmap-Uebung (Block 9), Pitches (Block 10), Prompt-Library-Qualitaet |
| 3 Behavior | Wird AI im Arbeitsalltag angewendet? | 4-Wochen-Follow-up mit Buddy, Community-Aktivitaet |
| 4 Results | Messbarer Impact? | Erste CRAFT-Assessments bei Kunden, AI-Nutzungsquoten im Team |

## Transfer-Sicherung (70:20:10)

- **10% formal:** Dieses Training (10 Bloecke)
- **20% sozial:** Growth Story System, Buddy-Pairs mit wöchentlichen Check-ins, Community of Practice (ab Block 10 selbstorganisiert), Show & Tell (inkl. Fails) als Peer-Learning
- **70% on-the-job:** Wöchentliche Transfer-Aufgaben mit echten Arbeitsaufgaben, Prompt-Library als lebendes Arbeitsmittel, Walk-the-Talk in jeder Uebung, erste CRAFT-Assessments bei echten Kunden (ab Block 8)

---

## Materialien & Vorbereitung

### Trainer-Checkliste
- [ ] Miro-Board vorbereiten (Templates fuer alle 10 Bloecke inkl. Growth Log pro Team)
- [ ] Self-Assessment-Umfrage erstellen und versenden (2 Wochen vor Start)
- [ ] Tech-Check-E-Mail versenden (10 Tage vor Start)
- [ ] Smoke-Test-Aufgabe vorbereiten und versenden (5 Tage vor Start)
- [ ] Starter-Kit-Session planen fuer Teilnehmer mit Tech-Problemen (1 Woche vor Start)
- [ ] Team-Einteilung (nach Self-Assessment, gemischt nach Vorwissen)
- [ ] Growth Log-Template einrichten (Miro-Karte oder Shared Doc pro Team)
- [ ] Gast-Trainer briefen (Briefing-Template inkl. Walk-the-Talk-Hinweis, min. 2 Wochen vorher)
- [ ] CRAFT Explorer Demo-Instanz bereitstellen
- [ ] Uebungs-Szenarien vorbereiten (Case Studies, Code-Challenges, vorgefuellte CRAFT-Ergebnisse)
- [ ] Transfer-Aufgaben pro Block formulieren
- [ ] Feedback-Umfrage erstellen (Halbzeit nach Block 5 + Ende nach Block 10)

### Teilnehmer-Vorbereitung
- Self-Assessment ausfuellen
- Ggf. Starter-Kit-Session besuchen
- Zugang sicherstellen: MS Copilot (inkl. Copilot Chat), GitHub Copilot, VS Code
- Miro-Account (oder Gastzugang)

### Technische Voraussetzungen
- MS Teams / Zoom mit Breakout Rooms
- Miro Board (oder FigJam)
- Mentimeter (oder Slido) fuer Umfragen
- Shared Document fuer Prompt-Library (Notion / Confluence / Google Doc)
- CRAFT Explorer Instanz (Demo oder Produktion)
