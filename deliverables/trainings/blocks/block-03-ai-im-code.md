# Block 3: Vom Dialog zum System — Kontextmanagement Stufe 3–5

**Phase:** ICH & AI
**Dauer:** 60 Min (+ 15 Min Team-Check-in davor)
**Lernziel:** Teilnehmer verstehen den Unterschied zwischen manuell geliefertem und systemisch bereitgestelltem Kontext. Sie erleben, wie System-Kontext (IDE, M365) und agentischer Kontext (Memory, RAG) die Ergebnisqualitaet veraendern — und wissen, wann welche Stufe angemessen ist.

**Voraussetzung:** Block 2 ("Vom Prompt zum Dialog", Stufen 1–3)

---

## Verbindung zu Block 2

Block 2 hat die Kontextleiter eingefuehrt und die Stufen 1–3 erfahrbar gemacht:
- Stufe 1: Die nackte Frage
- Stufe 2: Strukturierter Prompt (Rolle, Kontext, Gliederung)
- Stufe 3: Iterativer Dialog

**Block 3 macht den naechsten Sprung:** Von "ich manage den Kontext manuell" zu "das System managed den Kontext fuer mich". Das ist ein qualitativer Unterschied — nicht nur ein quantitativer.

---

## Show & Tell Eroeffnung (5 Min)

- Teilnehmer berichten aus dem Transfer-Auftrag:
  - *"Wo war der Unterschied zwischen Stufe 1 und 3 am groessten?"*
  - *"Hat jemand erlebt, dass Stufe 3 NICHT besser war als Stufe 2?"*
  - *"Hat jemand gemerkt, dass zu viel Kontext das Ergebnis verschlechtert hat?"*
- 1-2 kurze Berichte (vorbereitet im Team-Check-in)

---

## Connection: "Der Gedaechtnis-Test" (8 Min)

*Live-Demo im Plenum. Trainer zeigt zwei Szenarien — moeglichst nah beieinander, damit der Kontrast sichtbar wird.*

### Szenario A — Blanker Chat

Trainer oeffnet einen **neuen** MS Copilot Chat und fragt nach Hilfe bei einem komplexen Thema, z.B.:

```
Hilf mir, ein Review fuer unseren letzten Sprint zu schreiben.
```

→ Die LLM weiss nichts ueber das Projekt, das Team, die Ziele, die Ergebnisse. Sie produziert ein generisches Template.

### Szenario B — System mit Kontext-Infrastruktur

Trainer zeigt eines der folgenden (je nach Verfuegbarkeit):

**Option 1 — GitHub Copilot in VS Code:**
- Projekt geoeffnet, relevante Dateien sichtbar
- Gleiche Frage im Copilot Chat → Antwort bezieht sich auf den tatsaechlichen Code, die Projektstruktur, die offenen Issues

**Option 2 — MS Copilot mit M365-Kontext:**
- Verweis auf ein bestehendes Dokument, eine E-Mail oder ein Meeting-Protokoll
- *"Fasse die Ergebnisse aus dem letzten Sprint-Review-Meeting zusammen und erstelle einen Statusbericht fuer den Stakeholder"*
- → Copilot greift auf reale Daten zu (Meeting-Transkript, Dokumente)

**Option 3 — Claude Code mit CLAUDE.md** (fuer Tech-affine Gruppen):
- Trainer zeigt kurz, wie Claude Code das Projekt "kennt" durch CLAUDE.md, Projektdateien, Memory
- → Die AI versteht Konventionen, Architektur, Teamregeln — ohne dass man sie erklaert

### Reflexionsfrage

> *"Was ist der Unterschied? In Szenario B habt ihr den Kontext nicht geschrieben. Das System hat ihn bereitgestellt. Die AI wusste schon, wer ihr seid und worum es geht — weil die Infrastruktur das geliefert hat."*

---

## Concept: Stufen 4 & 5 — System-Kontext und agentischer Kontext (10 Min)

*Kurzer Theorie-Input. Kontextleiter im Mural ist sichtbar — Stufen 4 und 5 werden jetzt "aufgedeckt".*

### Stufe 4 — System-Kontext

Die IDE, das Projekt, die Dateien, die Organisationsregeln — Kontext wird durch die **Arbeitsumgebung** geliefert, ohne dass der User ihn pro Anfrage formuliert.

**Beispiele:**
- **GitHub Copilot** "kennt" den geoeffneten Code, die Projektstruktur, die Imports
- **MS Copilot im M365-Kontext** "kennt" Mails, Dokumente, Meetings, Kalender (via Microsoft Graph)
- **Custom Instructions / System Prompts** als "Grundpersoenlichkeit" — z.B. "Du bist Experte fuer agile Transformation und arbeitest im DACH-Raum"
- **CLAUDE.md / .github/copilot-instructions.md** als projektspezifische Regeln

**Der Shift:** Auf Stufe 1–3 formuliert ihr den Kontext jedes Mal neu. Auf Stufe 4 investiert ihr **einmal** in die Kontext-Infrastruktur — und profitiert bei jeder Anfrage.

### Stufe 5 — Agentischer Kontext

Das System entscheidet **selbst**, welchen Kontext es braucht — und holt ihn sich.

**Mechanismen:**
- **Memory:** Was hat der User letzte Woche gesagt? Was sind seine Praeferenzen?
- **RAG (Retrieval Augmented Generation):** Welches Dokument ist relevant fuer diese Frage? → System sucht und findet es selbst
- **Tool Use:** Ich brauche aktuelle Daten → System durchsucht das Web, ruft APIs auf, liest Dateien
- **Skills:** Vordefinierte Faehigkeiten, die der Agent bei Bedarf aktiviert

**Der Shift:** Der Mensch definiert nicht mehr den Kontext pro Anfrage, sondern die **Kontext-Infrastruktur**. Er baut das System, das den Kontext managed.

> *"Das ist wie der Unterschied zwischen: Ihr erklaert einem neuen Kollegen jeden Tag aufs Neue, wie euer Projekt funktioniert (Stufe 1–3) — oder ihr gebt ihm Zugang zu Confluence, Jira und dem Team-Kanal, und er findet sich selbst zurecht (Stufe 4–5)."*

### Der Sweet-Spot-Graph (Visualisierung im Mural)

Trainer zeigt die **umgekehrte U-Kurve:**

```
Ergebnis-    │
qualitaet    │         ╭──── Sweet Spot ────╮
             │        ╱                      ╲
             │       ╱   relevanter Kontext    ╲
             │      ╱                            ╲
             │     ╱                              ╲  irrelevanter Kontext
             │    ╱                                ╲ ueberfordert die LLM
             │   ╱
             │  ╱  zu wenig Kontext
             │ ╱   → generische Antworten
             │╱
             └─────────────────────────────────────────
                          Kontextmenge →
```

**Kernbotschaft:**

> *"Mehr Kontext hilft — bis zu einem Punkt. Danach schadet irrelevanter Kontext. Die LLM verliert den Fokus, vernachlaessigt wichtige Informationen, oder produziert schlechtere Ergebnisse. Das Ziel ist nicht maximaler Kontext, sondern **relevanter** Kontext. Und genau das koennen Systeme auf Stufe 4–5 besser als wir manuell: Sie waehlen den relevanten Kontext aus."*

### Entscheidungshilfe: Wann welche Stufe?

| Situation | Empfohlene Stufe |
|-----------|-----------------|
| Schnelle Einzelfrage, geringes Risiko | Stufe 1–2 reicht |
| Wichtiges Deliverable, kundenrelevant | Mindestens Stufe 3 |
| Wiederkehrende Aufgabe, selbes Muster | Stufe 4 einrichten (Templates, Custom Instructions) |
| Komplexes Projekt, viele Beteiligte | Stufe 5 evaluieren |

---

## Concrete Practice: "System-Kontext erleben" (27 Min)

*Die Uebung bleibt in den festen Teams. Eine Aufgabe, die mit verschiedenen Tools loesbar ist — Business-Teilnehmer nutzen MS Copilot, Dev-Teilnehmer nutzen GitHub Copilot. Die Reflexionsfrage ist fuer alle dieselbe.*

### Aufgabe fuer alle Teams

> *"Erstellt eine 4-Wochen-Pilotplan fuer ein 8-koepfiges Team, das AI in seinen Arbeitsalltag integrieren will. Das Team hat MS Copilot Chat seit 3 Wochen — aber niemand nutzt es wirklich."*

*Diese Aufgabe ist bewusst ein Vorgeschmack auf Block 9 (AI Transformation planen). Heute lernt ihr das Handwerk — spaeter wendet ihr es mit echten Kundendaten an.*

### Phase 1 — Baseline: Manueller Kontext, Stufe 2–3 (8 Min)

Jedes Team erstellt den Pilotplan im **blanken Chat** (neuer Chat, kein Kontext aus vorherigen Sessions):
- Nutzt die Techniken aus Block 2: Rolle, Rahmenbedingungen, Gliederung vorgeben, iterieren
- Ergebnis als Sticky Note im Mural posten
- Qualitaet bewerten: 🔴🟡🟢

### Phase 2 — System-Kontext: Stufe 4 erleben (12 Min)

**Jetzt derselbe Anwendungsfall — aber mit System-Kontext:**

**Fuer Business-Teilnehmer (MS Copilot):**
- Verweist auf ein bestehendes Dokument, eine E-Mail oder ein Meeting-Protokoll: *"Nutze die Infos aus [Dokument X / Meeting Y], um den Pilotplan zu schaerfen"*
- Oder: Nutzt Custom Instructions / Copilot Agent mit hinterlegtem Kontext
- Beobachtet: Was aendert sich, wenn Copilot Zugriff auf euren echten Arbeitskontext hat?

**Fuer Entwickler (GitHub Copilot):**
- Oeffnet ein Projekt in VS Code (vorbereitetes Beispiel-Repo oder eigenes Projekt)
- Fragt GitHub Copilot Chat eine Frage zum Code — erst *ohne* geoeffnete Dateien, dann *mit* relevanten Dateien
- Nutzt `@workspace` oder Dateireferenzen, um gezielt Kontext zu steuern
- Beobachtet: Wann hat mehr Kontext geholfen, wann hat es verwirrt?

**Ergebnis:** Zweites Ergebnis als Sticky Note neben das erste im Mural posten. Qualitaet bewerten.

> 💡 **Falls kein M365-Kontext verfuegbar:** Alternative fuer Business-Teilnehmer: Kopiert einen Absatz aus einem echten Projektdokument in den Chat als "manuellen System-Kontext" und vergleicht das Ergebnis mit dem blanken Prompt. Der Effekt ist kleiner, aber sichtbar.

### Phase 3 — Team-Reflexion (7 Min)

*Zurueck im Plenum oder in Breakout Rooms (je nach Gruppengroesse):*

Leitfragen:
- Was war der **spuerbare Unterschied** zwischen Stufe 2–3 und Stufe 4?
- Gab es Momente, wo der System-Kontext **stoerend** war — z.B. weil irrelevante Informationen einflossen?
- Wenn ihr euch auf der Kontextleiter verortet: Wo steht ihr im Arbeitsalltag **aktuell** — und wo **solltet** ihr stehen?

**Team-Artefakt aktualisieren:**
Jedes Team ergaenzt seine **Kontext-Zutatenliste** aus Block 2 um Erkenntnisse zu System-Kontext:
- *"Welche Art von System-Kontext wuerde uns im Alltag am meisten helfen?"*
- Ergebnis als Ergaenzung im Mural

---

## Conclusion: Die Kontextleiter als Entscheidungshilfe (5 Min)

Trainer zeigt die vollstaendige Kontextleiter im Mural und stellt die **Entscheidungsfrage:**

> *"Bevor ihr das naechste Mal einen Prompt schreibt, fragt euch zwei Dinge:*
> *1. Auf welcher Stufe arbeite ich gerade?*
> *2. Auf welcher Stufe SOLLTE ich fuer diese Aufgabe arbeiten?"*

**Verortung:** Jeder Teilnehmer aktualisiert seinen Sticky Dot auf der Kontextleiter im Mural — hat sich die Position seit Block 2 verschoben?

**Persoenliches Ziel setzen:** Jeder traegt im Growth Log ein neues 🎯 ein:
*"Eine wiederkehrende Aufgabe, die ich von Stufe 1–2 auf Stufe 4 bringen will — und mein erster Schritt dafuer."*

---

## Transfer-Auftrag

> Identifiziert eine **wiederkehrende Aufgabe** in eurem Arbeitsalltag, bei der ihr aktuell auf Stufe 1–2 arbeitet. Ueberlegt, wie ihr dafuer auf **Stufe 4** kommen koenntet:
> - Ein Template oder eine Gliederung, die ihr wiederverwendet?
> - Eine Custom Instruction in MS Copilot?
> - Ein Copilot Agent mit hinterlegtem Kontext?
> - Eine Projektstruktur, die GitHub Copilot besseren Kontext gibt?
>
> **Bringt euren Plan naechste Woche mit.** Nicht die fertige Loesung — den Plan.
>
> **Bonus:** Probiert den Sweet-Spot aus: Gebt der AI bewusst einmal *zu viel* Kontext (z.B. ein ganzes Dokument statt der relevanten Abschnitte). Was passiert mit der Ergebnisqualitaet?

**Aufwand:** ~30–45 Min

---

## Trainer-Notizen

### Vorbereitung — KRITISCH

**Fuer die Live-Demo (Connection) wird mindestens eines benoetigt:**

- [ ] **Option 1 — GitHub Copilot Demo:** Kleines Beispiel-Repo vorbereiten (z.B. eine einfache Anwendung mit 5-10 Dateien). Fragen vorbereiten, die mit und ohne Projekt-Kontext unterschiedliche Antworten liefern.
- [ ] **Option 2 — MS Copilot M365 Demo:** Testdokument in SharePoint/OneDrive platzieren (z.B. ein fiktives Sprint-Review-Protokoll). Prompt vorbereiten, der mit und ohne Dokumentenverweis getestet wird.
- [ ] **Option 3 — Claude Code Demo:** CLAUDE.md in einem Projekt zeigen. Gleiche Frage mit und ohne Projektkontext.

**Ohne vorbereitete Demo bleibt Stufe 4 theoretisch — das ist der groesste Risikofaktor dieses Blocks.**

### Weitere Vorbereitung
- [ ] Sweet-Spot-Kurve als permanentes Element im Mural platzieren
- [ ] Fallback fuer Phase 2 vorbereiten: Falls M365-Kontext nicht verfuegbar, Textabschnitte aus einem Projektdokument zum Einkopieren bereithalten
- [ ] Entscheidungshilfe-Tabelle als Handout oder Mural-Element vorbereiten

### Beobachtung waehrend der Uebung
- Wer erlebt einen echten "Aha-Moment" beim Unterschied Stufe 3 vs. 4?
- Wer ist frustriert, weil der System-Kontext nicht verfuegbar ist? → Individuelles Follow-up anbieten
- Welche wiederkehrenden Aufgaben nennen die Teams? → Input fuer Block 4 (AI im SDLC)

### Nach Block 3
- Kontext-Zutatenliste konsolidieren → wird Teil der Prompt-Library
- Transfer-Plaene einsammeln → im naechsten Team-Check-in nachfragen
- Kontextleiter-Verortung dokumentieren → zeigt Entwicklung ueber die Bloecke

### Bruecke zu Block 4
Block 4 (AI im SDLC, Gast-Trainer) schliesst nahtlos an: Die Kontextleiter gibt den Teilnehmern das Werkzeug, um fuer jede SDLC-Phase zu fragen: *"Auf welcher Kontextstufe arbeiten wir hier — und auf welcher sollten wir arbeiten?"*

---

**Framework-Referenz:** [AI Transformation Framework — Kap. 3.3 Adoption & Usage, Kap. 3.5 Technical Enablement](../../framework/ai-transformation-framework-craft.md)

← [Block 2: Vom Prompt zum Dialog](block-02-prompt-engineering.md) | [Block 4: AI im SDLC](block-04-sdlc.md) →
