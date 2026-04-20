# Block 4: Vom Chat zum Agenten — GitHub Copilot als Projektpartner

**Phase:** AI & ARBEIT
**Dauer:** 60 Min
**Lernziel:** Teilnehmer verstehen den qualitativen Unterschied zwischen Chat-Interaktion und agentischer Arbeit. Sie kennen den Delegations-Bogen als Modell, haben ein echtes AI-Projekt in VS Code gestartet und wissen, wie sie bis zum naechsten Block autonom weiterarbeiten.

**Voraussetzung:** Block 3 ("Stufen 4 & 5 der Kontextleiter")

---

## Motivation-Hook + Show & Tell (7 Min)

*Trainer eroeffnet mit Live-Demo — KEIN Vortrag. Ziel: in 5 Minuten zeigen, was heute in einer Stunde moeglich ist.*

### Show & Tell (2 Min)

- 1-2 Teilnehmer berichten aus dem Transfer-Auftrag von Block 3 (max. 1 Min pro Person, vorbereitet im Team-Check-in)
- Trainer-Frage: *"Wer hat erlebt, dass die AI laenger ohne euch arbeiten konnte?"*

### Live-Demo: Retro-Auswertung in 5 Minuten (5 Min)

Trainer hat vorbereitet:
- Eine Datei `retro-sticky-notes.md` mit 6-8 anonymisierten Retro-Beitraegen aus dem echten Kurs (oder einem realistischen Beispiel)
- Eine `copilot-instructions.md` mit einer klaren Rollenbeschreibung (z.B. "Du bist erfahrener Agile Coach...")

Trainer uebergibt in GitHub Copilot Chat:

```
Hier sind die Sticky Notes aus unserer letzten Retro.
Clustere sie in Themen, identifiziere die Top-3-Handlungsfelder
und schreibe einen Statusbericht fuer den Stakeholder (max. 5 Saetze, sachlich, loesungsorientiert).
```

→ Copilot liefert: Cluster + Top-3-Actions + Stakeholder-E-Mail

> *"Das waren 5 Minuten. Und ich habe nicht einen Prompt formuliert — ich habe einen Auftrag uebergeben. Das ist heute euer Startpunkt."*

---

## Connection: "Unsere echten Probleme" (5 Min)

*Mural-Board mit vorbereiteten Themen. Trainer deckt sie auf — sie kommen aus der Gruppe selbst.*

**Nervige Themen-Board:** Die Liste aus der letzten Session erscheint mit 4 vorbereiteten Clustern:

| Cluster | Themen |
|---------|--------|
| **A: Meeting Lifecycle** | Meetingtimeslots finden, Meetings vorbereiten, Meeting-Nachbereitung |
| **B: Kommunikation & Inbox** | Mails sortieren, Ankuendigungen filtern, Termineinladungen schreiben |
| **C: Administration** | Replicon-Buchungen, Zeiterfassung |
| **D: Wissensarbeit & Events** | Workshop-Vorbereitung, Facilitation, Templates |

**Dot-Voting (2 Min):** Jeder klebt 2 Dots — "Welches nervt euch am meisten?"

**Bruecke:** *"Genau diese Themen werden wir heute angehen — nicht mit besseren Prompts, sondern mit echten Auftraegen. Und dafuer brauchen wir ein Modell."*

---

## Concept 1: Der Delegations-Bogen (10 Min)

*Kontextleiter aus Block 2+3 ist im Mural sichtbar. Trainer ergaenzt jetzt eine zweite Dimension.*

### Der Delegations-Bogen im Mural

Fuenf Stationen von links (Ich steuere) nach rechts (AI steuert). Farbverlauf: Blau → Gruen.

| | Stufe 1 | Stufe 2 | Stufe 3 | Stufe 4 | Stufe 5 |
|---|---|---|---|---|---|
| **Was uebergebe ich?** | Frage | Prompt | Klaerungsgespraech | Aufgabe | Ziel |
| **Wer entscheidet?** | Ich (100%) | Ich (90%) | Wir (60/40) | AI uebernimmt Schritte | AI plant + entscheidet |
| **AI arbeitet alleine fuer:** | 1 Antwort | 1 Antwort | je Turn | Minuten | Stunden |
| **Das brauche ich dafuer:** | Nichts | Template | Geduld + Feedback | System-Kontext | Vertrauen + LLM-Qualitaet |

**Der entscheidende Sprung:** Zwischen Stufe 3 und 4 wechselt die Grundfrage:
- Stufe 1–3: *"Wie formuliere ich besser?"*
- Stufe 4–5: *"Wie baue ich ein System, dem ich vertrauen kann?"*

### Konkret-Beispiel durchspielen: Workshop-Vorbereitung (Cluster D)

Trainer zeigt alle 5 Stufen fuer dieselbe Aufgabe — im Mural als Zeitleiste:

- **S1:** *"Wie bereite ich einen Retro-Workshop vor?"* → generische Tipps
- **S2:** Prompt mit Team-Kontext, Dauer, Problem → passende Agenda
- **S3:** Dialog: *"Die Uebung ist zu akademisch — mach was Visuelleres"* → abgestimmte Agenda nach 3-4 Turns
- **S4:** `copilot-instructions.md` + `sprint-notizen.md` → Facilitationsguide + Einladungstext in 3 Min
- **S5:** Auftrag: *"Bereite die Retro vor — hier sind die Notizen, die letzten 3 Protokolle und das Working Agreement"* → AI liefert alles, du reviewst am Ende

> *"Der Unterschied zwischen S4 und S5 ist nicht die Qualitaet des Prompts — es ist wie viel du loslassen kannst. Und das haengt von einem ab: dem LLM. Nur sehr leistungsfaehige Modelle koennen laenger autonom arbeiten, ohne den Faden zu verlieren. Das ist kein Fehler — das ist der aktuelle Stand der Technologie."*

---

## Concept 2: Tool-Panorama + Worauf achten (6 Min)

*Kurz und konkret. Keine Deep-Dives — Orientierung geben.*

### Fuenf Produkte fuer agentische Arbeit (je ~30 Sek)

| Tool | Einstieg / Stufe | Besonderheit |
|------|-----------------|--------------|
| **GitHub Copilot** (VS Code) | Stufe 4 | Kennt euren Code + Projektstruktur. Alle haben es — heute nutzen wir es. |
| **Claude Projects** | Stufe 4-5 | Langer Kontextspeicher, stark bei Dokumenten und Analyse |
| **Cursor** | Stufe 4-5 | IDE wie VS Code, sehr stark fuer Code-intensive Projekte |
| **n8n / Make** | Stufe 5 | Workflow-Automatisierung ohne Code — gut fuer Cluster B/C |
| **MS Copilot** | Stufe 3-4 | Bruecke zur M365-Welt — habt ihr schon, gut fuer Mail + Kalender |

### Kontextgroesse — die "Kurzzeitgedaechtnis"-Analogie

> *"Stell dir vor, dein neuer Senior-Kollege liest vor jedem Meeting genau die letzten 15 Seiten Notizen — nicht mehr, nicht weniger. Zu viele Dokumente und er verliert den Faden. Zu wenige und die Antworten sind generisch."*

**Daumenregel fuer heute:**
- 1 klares Ziel (`README.md` oder Auftrag)
- 2-3 relevante Dateien max.
- 1 `copilot-instructions.md` als Rollenbeschreibung

---

## Concrete Practice: Euer erstes AI-Projekt (25 Min)

*Einstieg als Einzelarbeit (5 Min stilles Nachdenken + Template ausfullen), dann Team (10 Min gemeinsames Aufbauen), dann grosses Plenum (10 Min Gallery).*

### Phase 1: Einzelarbeit — Auftrag formulieren (5 Min)

Jeder Teilnehmer:
1. Waehlt **ein Thema** aus den 4 Clustern (oder eigenes — z.B. AI Trafo Framework, Workshop-Konzept, Projektorganisation)
2. Oeffnet in VS Code: [`templates/ai-auftrags-template.md`](../templates/ai-auftrags-template.md)
3. Fuellt **Ziel + Kontext + Constraints** aus (nur diese drei — still, alleine)

> Trainer: *"Kein perfekter Auftrag — ein echter. Fuenf Minuten, dann teilt ihr."*

### Phase 2: Team-Arbeit — Projekt aufbauen (10 Min)

Teams versammeln sich (Breakout Room). Gemeinsam:

1. **Ordner anlegen** in VS Code — z.B. `retro-vorbereitung/` oder `mail-filter/`
2. **`README.md`:** Problem-Statement in 1 Satz (den jemand aus Phase 1 hat)
3. **`copilot-instructions.md`:** Rolle der AI beschreiben (2-3 Saetze reichen)
4. **Auftrag uebergeben** an GitHub Copilot Chat — vollstaendiges Template, inkl. Rueckfragen-Regel
5. **Erste Antwort reviewen:** Was hat die AI richtig verstanden? Was fehlt?

> 💡 **Option B (kein IDE-Fokus):** Wer kein eigenes Coding-Projekt will, baut die gleiche Struktur in einem MS Word/Markdown-Dokument auf und nutzt Copilot Chat — gleiche Schritte, anderes Interface.

> 💡 **Trainer-Rundgang:** 1-2 Min pro Team — Fragen: "Was habt ihr uebergeben? Was hat euch ueberrascht?"

### Phase 3: Plenum — Gallery Walk (10 Min)

- Jedes Team postet im Mural: **Projekt-Titel + ein Screenshot oder 3 Bullets** (was hat die AI geliefert)
- Jedes Team: **45 Sek** → "Unser Projekt — und das hat uns am meisten ueberrascht"
- Dot-Voting: "Welchen Output moechtest du gerne selbst ausprobieren?"

---

## Conclusion: Commitment + Ausblick (7 Min)

### Ausblick in 1 Satz (1 Min)

> *"Spaeter im Training werden wir das auf den SDLC anwenden: wie man mit AI aus einer Roadmap direkt INVEST-Quality-Stories formuliert — aber das Prinzip ist dasselbe, das ihr heute gelernt habt."*

### Growth Log (6 Min)

Jeder traegt ein:
- 🎯 **Mein AI-Projekt:** Welches Thema nehme ich mit?
- 🔥 **Mein Commit:** Was konkret mache ich bis naechste Woche?
- 🤝 **Ich suche...:** Wer hat ein aehnliches Problem — koennen wir uns kurz zusammentun?

---

## Transfer-Auftrag

> Arbeite 2–3 Sessions an deinem Projekt weiter. Nutze das Auftrags-Template als Ausgangspunkt.
>
> Protokolliere:
> - **1 Win:** Was hat die AI besser gemacht als du erwartet hast?
> - **1 Fail:** Was hat sie falsch verstanden — und wie hast du nachgebessert?
>
> Bereite beides als Show & Tell fuer Block 5 vor (90 Sek).

**Aufwand:** ~45 Min gesamt

---

## Materialien & Vorbereitung

| Material | Wer | Was |
|----------|-----|-----|
| `retro-sticky-notes.md` | Trainer | 6-8 anonymisierte Retro-Beitraege (Demo-Datei) |
| `copilot-instructions.md` (Demo) | Trainer | Beispiel-Rollenbeschreibung fuer die Live-Demo |
| Mural: Nervige Themen Board | Trainer | Vorbereitete Cluster A-D mit Dot-Voting-Feldern |
| Mural: Team-Projekt-Boards | Trainer | 4 leere Boards (je Team 1) fuer Gallery Walk |
| [`templates/ai-auftrags-template.md`](../templates/ai-auftrags-template.md) | Repo | Copy-Paste-ready in VS Code — liegt im Kurs-Repo |
| VS Code + GitHub Copilot | Teilnehmer | Onboarding sichergestellt (Block 0) |

---

**Framework-Referenz:** [AI Transformation Framework — Kap. 3.3 Adoption & Usage, Dimension T: Technical Enablement](../../framework/ai-transformation-framework-craft.md)

← [Block 3: Vom Dialog zum System — Kontextmanagement Stufe 3–5](block-03-ai-im-code.md) | [Block 5: Pitfalls](block-05-pitfalls.md) →
