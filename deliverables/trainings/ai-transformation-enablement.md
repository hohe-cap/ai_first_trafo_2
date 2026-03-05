# Trainingskonzept: AI Transformation Enablement

## Ueberblick

- **Zielgruppe:** Berater, Entwickler, Architekten, POs — kuenftige Mitglieder von AI Adoption Teams
- **Dauer:** 10 Bloecke à 60 Min (woechentlich, Remote)
- **Format:** Remote (MS Teams / Zoom)
- **Lernziel:** Von "AI-interessiert, aber unsystematisch" zu "kann AI-Tools produktiv nutzen UND eine AI-Transformation beim Kunden strukturiert begleiten"
- **Max. Teilnehmer:** 16 (4 feste Vierer-Teams)
- **Voraussetzungen:** Laptop mit Internetzugang, Zugang zu MS Copilot / ChatGPT / GitHub Copilot (wird im Onboarding sichergestellt)
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
- **Eroeffnung (5 Min):** "Show & Tell" — Teilnehmer zeigen Erfolge und Erkenntnisse aus der Zwischen-Anwendung (ab Block 2)
- **4-Cs-Kern (45 Min):** Connection → Concept → Concrete Practice → Conclusion
- **Transfer-Auftrag (5 Min):** Konkrete Aufgabe fuer die kommende Woche
- **Punkte-System:** Teams sammeln XP fuer Show & Tell, Uebungen, Zwischen-Aufgaben

---

## Lernziele (Backward Design)

Was sollen die Teilnehmer NACH dem Training koennen?

1. **Anwenden:** AI-Chat-Tools (ChatGPT, MS Copilot) und Code-Assistenten (GitHub Copilot) fuer konkrete Arbeitsaufgaben produktiv einsetzen
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
- "Ich nutze AI-Chat-Tools (ChatGPT, Copilot Chat) regelmaessig" (1-5)
- "Ich kenne VS Code und kann Extensions installieren" (1-5)
- "Ich habe bereits mit GitHub Copilot gearbeitet" (1-5)
- "Ich kenne Begriffe wie Prompt Engineering, RAG, Token" (1-5)

**Ergebnis → 2 Gruppen:**
- **Fast Track:** Score >= 12 → Nur kurzes "Was ist neu?"-Video (10 Min)
- **Starter Kit:** Score < 12 → Vorbereitungs-Session (60 Min, optional aber empfohlen)

**Starter-Kit-Session (vor Block 1):**
- VS Code installieren + Extensions (GitHub Copilot, Continue.dev)
- Erster Chat mit ChatGPT/Copilot: "Erklaere mir, was du bist"
- Begriffe klaeren: Prompt, Token, Kontext, Halluzination
- Buddy-Zuweisung: Jeder Starter bekommt einen Fast-Track-Buddy

---

## Gamification: Team-XP-System

### Teams
4 feste Teams à 4 Personen (gemischt nach Vorwissen). Teams bekommen Namen (self-assigned in Block 1).

### Punkte
| Aktivitaet | XP |
|---|---|
| Show & Tell praesentiert (pro Person) | 10 |
| Zwischen-Aufgabe erledigt (pro Person) | 10 |
| Beste Loesung in der Uebung (Team-Vote) | 20 |
| Gast-Trainer-Challenge gewonnen | 30 |
| Hilfe an anderes Team (peer support) | 15 |

### Leaderboard
Miro-Board oder einfaches Shared Sheet — wird zu Beginn jedes Blocks aktualisiert. Kein High-Stakes-Wettbewerb, sondern spielerischer Anreiz. Am Ende: symbolischer Preis fuer alle (kein Verlierer).

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

---

## Agenda: 10 Bloecke

---

### PHASE 1: ICH & AI (Bloecke 1–3)

---

### Block 1: Kickoff — AI als Denkpartner (60 Min)

**Lernziel:** Teilnehmer koennen einen AI-Chat effektiv fuer eine Arbeitsaufgabe nutzen und kennen ihr Team.

**Connection (10 Min)**
- Aktivitaet: **Standing Survey** (Mentimeter) — "Wie oft nutzt du AI-Tools bei der Arbeit?" (taeglich / woechentlich / selten / nie)
- Team-Bildung: 4 Teams, 3 Min fuer Teamname + Team-Kanal (Slack/Teams)
- Leitfrage: "Was war dein bester und schlechtester Moment mit AI bisher?"

**Concept (15 Min)**
- Input (10 Min): Was kann AI heute? Live-Demo: gleiche Aufgabe in ChatGPT, MS Copilot und GitHub Copilot — Unterschiede zeigen
- Interaktion: **Chat Waterfall** — "Welches Tool wuerdest du fuer welche Aufgabe waehlen?" Alle tippen, keiner sendet, dann gleichzeitig

**Concrete Practice (25 Min)**
- Uebung: **Prompt Battle (Team-Challenge)**
  - Aufgabe: "Schreibt den besten Prompt fuer: [konkretes Arbeitsszenario, z.B. Meeting-Zusammenfassung erstellen]"
  - Jedes Team probiert in Breakout Rooms (15 Min)
  - Ergebnisse in Miro posten, alle voten (10 Min)
  - Gewinner-Team: 20 XP

**Conclusion (5 Min)**
- **3-2-1:** 3 Dinge gelernt, 2 Ideen fuer den Alltag, 1 offene Frage (im Chat posten)
- XP-Stand aktualisieren

**Transfer-Auftrag (5 Min):**
> Nutze diese Woche AI fuer EINE echte Arbeitsaufgabe. Mache einen Screenshot vom besten Ergebnis und bereite 2 Saetze fuer "Show & Tell" vor.

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
- Hands-on: Teams waehlen 1 SDLC-Phase und erstellen eine "AI-Intervention" fuer ihr aktuelles Projekt

**Conclusion (5 Min)** *(Haupt-Trainer)*
- **Gallery Walk** (Miro): Alle Team-Interventionen anschauen, Dot-Voting fuer "Beste Idee"
- XP-Update

**Transfer-Auftrag:**
> Probiere EINE AI-Intervention ausserhalb der Coding-Phase aus (z.B. Meeting-Protokoll, Testfall-Design, Doku). Bereite 2 Min Show & Tell vor.

---

### Block 5: Effektiv mit AI zusammenarbeiten — Patterns & Pitfalls (60 Min)

**Lernziel:** Teilnehmer koennen typische AI-Fehler (Halluzination, Bias, Over-Reliance) erkennen und damit umgehen.

**Show & Tell (5 Min)**
- 2 Teilnehmer: AI-Intervention ausserhalb der Coding-Phase

**Connection (5 Min)**
- **Myth or Fact:** "AI halluziniert haeufiger bei Fakten als bei Code" / "Laengere Konversationen machen AI besser" / "AI kann vertrauliche Daten leaken" — Teilnehmer voten, Aufloesung

**Concept (15 Min)**
- Input (10 Min): Die 5 haeufigsten Fehler im Umgang mit AI:
  1. Blindes Vertrauen (Output nicht pruefen)
  2. Zu wenig Kontext geben
  3. Zu viel auf einmal verlangen
  4. Sensible Daten eingeben
  5. AI als Ersatz statt als Verstaerkung sehen
- Interaktion: **Teach-Back** — Paare erklaeren sich gegenseitig je 1 Fehler + Gegenmassnahme

**Concrete Practice (25 Min)**
- Uebung: **AI-Detektiv (Team-Challenge)**
  - 4 AI-generierte Outputs (Code, Text, Analyse, Zusammenfassung) — mit eingebauten Fehlern
  - Teams muessen die Fehler finden und korrigieren (Breakout, 15 Min)
  - Aufloesung im Plenum (10 Min), 20 XP fuer meiste gefundene Fehler

**Conclusion (5 Min)**
- **One-Minute Closer:** "Die groesste Gefahr bei AI-Nutzung ist fuer mich..."

**Transfer-Auftrag:**
> Fuehre ein "AI-Review" durch: Lass AI etwas fuer dich erstellen und pruefe das Ergebnis systematisch. Was war korrekt, was nicht?

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

**Conclusion (5 Min)**
- **3-2-1:** 3 Dinge, die ich einem Kunden sofort empfehlen wuerde / 2 Dinge, die ich noch vertiefen will / 1 Sache, die ich morgen anders mache

**Transfer-Auftrag:**
> Bereite fuer Block 10 einen 3-Min-Pitch vor: "Was ich aus diesem Training mitnehme und wie ich es einsetzen werde." Kann kreativ sein (Slides, Demo, Story).

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
| 1 | ICH & AI | Kickoff — AI als Denkpartner | ChatGPT, MS Copilot, Orientierung | — |
| 2 | ICH & AI | Prompt Engineering Praxis | Prompt-Patterns, Prompt-Library | — |
| 3 | ICH & AI | AI im Code | GitHub Copilot, Code-Generierung | — |
| 4 | AI & ARBEIT | AI im SDLC | SDLC-Phasen, AI-Interventionen | GAST |
| 5 | AI & ARBEIT | Patterns & Pitfalls | Halluzination, Bias, kritisches Denken | — |
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
Es gibt ein Punkte-System. Wenn du eine Team-Challenge einbaust,
kann das Gewinner-Team 30 XP bekommen.

## Technik
- Remote via [Teams/Zoom]
- Miro-Board (Link wird geteilt)
- Teilnehmer haben Zugang zu: MS Copilot, ChatGPT, GitHub Copilot
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
- **20% sozial:** Team-XP-System, Buddy-Pairs, Community of Practice (ab Block 10 selbstorganisiert), Show & Tell als Peer-Learning
- **70% on-the-job:** Woechentliche Transfer-Aufgaben mit echten Arbeitsaufgaben, Prompt-Library als lebendes Arbeitsmittel, erste CRAFT-Assessments bei echten Kunden (ab Block 8)

---

## Materialien & Vorbereitung

### Trainer-Checkliste
- [ ] Miro-Board vorbereiten (Templates fuer alle 10 Bloecke)
- [ ] Self-Assessment-Umfrage erstellen und versenden (2 Wochen vor Start)
- [ ] Starter-Kit-Session planen (1 Woche vor Start)
- [ ] Team-Einteilung (nach Self-Assessment, gemischt nach Vorwissen)
- [ ] XP-Leaderboard einrichten
- [ ] Gast-Trainer briefen (Briefing-Template, min. 2 Wochen vorher)
- [ ] CRAFT Explorer Demo-Instanz bereitstellen
- [ ] Uebungs-Szenarien vorbereiten (Case Studies, Code-Challenges, vorgefuellte CRAFT-Ergebnisse)
- [ ] Transfer-Aufgaben pro Block formulieren
- [ ] Feedback-Umfrage erstellen (Halbzeit + Ende)

### Teilnehmer-Vorbereitung
- Self-Assessment ausfuellen
- Ggf. Starter-Kit-Session besuchen
- Zugang sicherstellen: MS Copilot, ChatGPT, GitHub Copilot, VS Code
- Miro-Account (oder Gastzugang)

### Technische Voraussetzungen
- MS Teams / Zoom mit Breakout Rooms
- Miro Board (oder FigJam)
- Mentimeter (oder Slido) fuer Umfragen
- Shared Document fuer Prompt-Library (Notion / Confluence / Google Doc)
- CRAFT Explorer Instanz (Demo oder Produktion)
