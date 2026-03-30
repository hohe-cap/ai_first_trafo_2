# Mural-Design: Die Kontextleiter

**Zweck:** Permanentes visuelles Element auf dem Mural-Board, das ab Block 2 eingefuehrt wird und bis Block 10 als Referenzmodell dient.
**Platzierung:** Eigene Zone im Mural — sichtbar neben dem Growth-Log-Bereich, nicht im Block-Arbeitsbereich (der sich woechentlich aendert).

---

## 1. Die Kontextleiter — Hauptelement

### Layout: Vertikale Leiter, 5 Sprossen

Die Leiter ist **vertikal** angeordnet (unten = Stufe 1, oben = Stufe 5), weil "aufsteigen" intuitiv mit "mehr Kontext, mehr Moeglichkeiten" assoziiert wird. Jede Sprosse ist eine eigene Zone mit Farbe, Icon und Kurzbeschreibung.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DIE KONTEXTLEITER                                │
│           "Nicht der Prompt macht den Unterschied —                 │
│            der Kontext macht den Unterschied."                      │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  STUFE 5 — AGENTISCHER KONTEXT              🤖  [lila]     │    │
│  │  Das System holt sich den Kontext selbst                    │    │
│  │  Memory · RAG · Tool Use · Skills                           │    │
│  │  → Claude Code, Custom Agents, Copilot Agents               │    │
│  │  "Du baust die Infrastruktur, nicht den Prompt"             │    │
│  └─────────────────────────────────────────────────────────────┘    │
│       ▲                                                             │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  STUFE 4 — SYSTEM-KONTEXT                    🏗️  [blau]     │    │
│  │  Die Arbeitsumgebung liefert den Kontext                    │    │
│  │  IDE · Projektdateien · M365 Graph · Custom Instructions    │    │
│  │  → GitHub Copilot (Projekt), MS Copilot (Mails/Docs)       │    │
│  │  "Einmal einrichten, bei jeder Anfrage profitieren"         │    │
│  └─────────────────────────────────────────────────────────────┘    │
│       ▲                                                             │
│  ╔═════════════════════════════════════════════════════════════╗    │
│  ║  ────────── Ab hier: System managed Kontext ──────────     ║    │
│  ║  ────────── Darunter: User managed Kontext  ──────────     ║    │
│  ╚═════════════════════════════════════════════════════════════╝    │
│       ▲                                                             │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  STUFE 3 — DER DIALOG                        💬  [gruen]    │    │
│  │  User + LLM bauen gemeinsam Verstaendnis auf                │    │
│  │  Iterieren · Korrigieren · Vertiefen · Schaerfen            │    │
│  │  → Chat-Session mit mehreren Turns                          │    │
│  │  "Wie ein Gespraech mit einem faehigen Kollegen"            │    │
│  └─────────────────────────────────────────────────────────────┘    │
│       ▲                                                             │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  STUFE 2 — DER STRUKTURIERTE PROMPT           📋  [gelb]    │    │
│  │  User gibt Rolle, Ziel, Rahmenbedingungen, Struktur         │    │
│  │  Rolle · Kontext · Aufgabe · Format · Gliederung            │    │
│  │  → Chat mit Template oder Gliederung                        │    │
│  │  "Du sagst der AI, wer du bist und was du brauchst"         │    │
│  └─────────────────────────────────────────────────────────────┘    │
│       ▲                                                             │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  STUFE 1 — DIE NACKTE FRAGE                   ❓  [rot]     │    │
│  │  Nur die Frage, kein Kontext                                │    │
│  │  Die LLM raet, wer du bist und was du willst                │    │
│  │  → Chat-Fenster, spontane Eingabe                           │    │
│  │  "Die AI faellt auf den Durchschnitt zurueck"               │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐   │
│  │ 👤 VERORTUNG: Wo stehe ich?                                  │   │
│  │ (Hier platzieren Teilnehmer ihre Sticky Dots —               │   │
│  │  aktualisiert in Block 2 und Block 3)                        │   │
│  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Farb-Codierung

| Stufe | Farbe | Hex (Mural) | Begruendung |
|-------|-------|-------------|-------------|
| 1 | Rot | #FF6B6B | Warnung — hier verschenkt ihr Potenzial |
| 2 | Gelb | #FFD93D | Einstieg — bewusster Kontext, guter Start |
| 3 | Gruen | #6BCB77 | Sweet Spot fuer die meisten Alltagsaufgaben |
| 4 | Blau | #4D96FF | Infrastruktur — einmalige Investition |
| 5 | Lila | #9B59B6 | Fortgeschritten — System denkt mit |

### Verortungs-Zone

Unterhalb der Leiter gibt es eine **Verortungs-Zone**, in der Teilnehmer persoenliche Sticky Dots platzieren:
- In Block 2: *"Auf welcher Stufe arbeite ich aktuell meistens?"*
- In Block 3: *"Hat sich meine Position veraendert?"*
- Optional in spaeteren Bloecken: erneute Verortung zeigt Entwicklung

**Umsetzung in Mural:** 5 horizontale Bereiche (einer pro Stufe), in die Teilnehmer kleine farbige Dots mit ihrem Namen ziehen. Pro Stufe sieht man, wie viele Teilnehmer sich dort verorten.

---

## 2. Sweet-Spot-Kurve — Begleitelement

### Layout: Neben oder unter der Kontextleiter

```
┌─────────────────────────────────────────────────────────┐
│           DER KONTEXT-SWEET-SPOT                         │
│                                                          │
│  Ergebnis-    │                                          │
│  qualitaet    │         ╭──────╮                         │
│               │        ╱  ✓   ╲                         │
│       ✓✓✓     │       ╱ SWEET  ╲                        │
│               │      ╱  SPOT    ╲                       │
│       ✓✓      │     ╱             ╲                     │
│               │    ╱               ╲                    │
│       ✓       │   ╱                 ╲                   │
│               │  ╱                   ╲                  │
│               │ ╱                     ╲                 │
│               │╱                       ╲                │
│               └──────────────────────────────            │
│                    Kontextmenge →                        │
│                                                          │
│  ◀── zu wenig        genau richtig      zu viel ──▶     │
│  generische          relevanter         LLM verliert     │
│  Antworten           Kontext            den Fokus        │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │  "Das Ziel ist nicht maximaler Kontext,          │   │
│  │   sondern relevanter Kontext."                   │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Drei Zonen der Kurve

| Zone | Beschreibung | Typisches Problem |
|------|-------------|-------------------|
| Links (zu wenig) | Generische, austauschbare Antworten | "Die AI versteht mich nicht" |
| Mitte (Sweet Spot) | Relevanter, strukturierter Kontext | Beste Ergebnisse |
| Rechts (zu viel) | LLM verliert den Fokus, "Lost in the Middle", irrelevante Details ueberlagern relevante | "Die AI faselt" oder ignoriert wichtige Teile |

---

## 3. Entscheidungshilfe — Wann welche Stufe?

### Layout: Kompakte Tabelle als Referenzkarte

```
┌─────────────────────────────────────────────────────────────────┐
│            WANN WELCHE STUFE? — Schnellentscheidung             │
│                                                                  │
│  ┌────────────────────────┬──────────────┬────────────────────┐ │
│  │ Situation              │ Stufe        │ Beispiel           │ │
│  ├────────────────────────┼──────────────┼────────────────────┤ │
│  │ Schnelle Einzelfrage   │ 1–2          │ "Was bedeutet      │ │
│  │ geringes Risiko        │              │  DORA?"            │ │
│  ├────────────────────────┼──────────────┼────────────────────┤ │
│  │ Wichtiges Deliverable  │ mind. 3      │ Kundenangebot,     │ │
│  │ kundenrelevant         │              │ Konzeptpapier      │ │
│  ├────────────────────────┼──────────────┼────────────────────┤ │
│  │ Wiederkehrende Aufgabe │ 4 einrichten │ Woechentlicher     │ │
│  │ selbes Muster          │              │ Statusbericht      │ │
│  ├────────────────────────┼──────────────┼────────────────────┤ │
│  │ Komplexes Projekt      │ 5 evaluieren │ Transformations-   │ │
│  │ viele Beteiligte       │              │ programm           │ │
│  └────────────────────────┴──────────────┴────────────────────┘ │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. Kontext-Zutatenliste — Team-Artefakt

### Layout: Eine Spalte pro Team, waechst ueber Block 2 + 3

```
┌─────────────────────────────────────────────────────────────────────┐
│                   KONTEXT-ZUTATENLISTE                               │
│        "Was macht den Unterschied? Unsere Erfahrungen."             │
│                                                                      │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌────────────┐ │
│  │  Team Alpha  │ │  Team Beta   │ │  Team Gamma  │ │ Team Delta │ │
│  │              │ │              │ │              │ │            │ │
│  │  Block 2:    │ │  Block 2:    │ │  Block 2:    │ │ Block 2:   │ │
│  │  ┌────────┐  │ │  ┌────────┐  │ │  ┌────────┐  │ │ ┌────────┐│ │
│  │  │ Top 3  │  │ │  │ Top 3  │  │ │  │ Top 3  │  │ │ │ Top 3  ││ │
│  │  │Zutaten │  │ │  │Zutaten │  │ │  │Zutaten │  │ │ │Zutaten ││ │
│  │  └────────┘  │ │  └────────┘  │ │  └────────┘  │ │ └────────┘│ │
│  │              │ │              │ │              │ │            │ │
│  │  Block 3:    │ │  Block 3:    │ │  Block 3:    │ │ Block 3:   │ │
│  │  ┌────────┐  │ │  ┌────────┐  │ │  ┌────────┐  │ │ ┌────────┐│ │
│  │  │System- │  │ │  │System- │  │ │  │System- │  │ │ │System- ││ │
│  │  │Kontext │  │ │  │Kontext │  │ │  │Kontext │  │ │ │Kontext ││ │
│  │  │Insights│  │ │  │Insights│  │ │  │Insights│  │ │ │Insights││ │
│  │  └────────┘  │ │  └────────┘  │ │  └────────┘  │ │ └────────┘│ │
│  │              │ │              │ │              │ │            │ │
│  └──────────────┘ └──────────────┘ └──────────────┘ └────────────┘ │
│                                                                      │
│  → Fliesst in die Prompt-Library ein (ab Block 4)                   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Funktionsweise

**Block 2 (Phase 3 — Plenum-Ernte):**
Jedes Team postet seine **Top-3 Kontext-Zutaten** als Sticky Notes in die eigene Spalte. Typische Ergebnisse:
- "Rolle und Expertise angeben"
- "Gliederung vorgeben statt freien Text anfordern"
- "Konkretes Beispiel mitgeben"
- "Einschraenkungen nennen (was NICHT gewuenscht ist)"

**Block 3 (Phase 3 — Team-Reflexion):**
Jedes Team ergaenzt Erkenntnisse zu **System-Kontext**:
- "Dateien oeffnen bevor man fragt (GitHub Copilot)"
- "Auf bestehendes Dokument verweisen (MS Copilot)"
- "Custom Instructions einrichten fuer wiederkehrende Aufgaben"

**Ab Block 4:** Die Zutatenlisten fliessen in die gemeinsame **Prompt-Library** ein.

---

## 5. Gesamtlayout — Platzierung auf dem Mural-Board

```
┌──────────────────────────────────────────────────────────────────────────┐
│                          MURAL-BOARD GESAMT                              │
│                                                                          │
│  ┌──────────────────────┐  ┌──────────────────────────────────────────┐ │
│  │                      │  │                                          │ │
│  │   KONTEXTLEITER      │  │        ARBEITSBEREICH                    │ │
│  │   (permanent)        │  │        (wechselt pro Block)              │ │
│  │                      │  │                                          │ │
│  │   5 Stufen           │  │   Block 2: Praktikanten-Experiment,     │ │
│  │   + Verortung        │  │   Solo-Ergebnisse (🔴🟡🟢),             │ │
│  │                      │  │   Team-Ergebnisse                       │ │
│  │   ─────────────      │  │                                          │ │
│  │                      │  │   Block 3: Baseline vs. System-Kontext, │ │
│  │   SWEET-SPOT-KURVE   │  │   Vergleichsergebnisse                  │ │
│  │   (permanent)        │  │                                          │ │
│  │                      │  │                                          │ │
│  │   ─────────────      │  │                                          │ │
│  │                      │  │                                          │ │
│  │   ENTSCHEIDUNGS-     │  │                                          │ │
│  │   HILFE              │  │                                          │ │
│  │   (permanent)        │  │                                          │ │
│  │                      │  │                                          │ │
│  └──────────────────────┘  └──────────────────────────────────────────┘ │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────────┐│
│  │                                                                      ││
│  │   KONTEXT-ZUTATENLISTE (4 Team-Spalten, waechst ueber Block 2+3)   ││
│  │                                                                      ││
│  └──────────────────────────────────────────────────────────────────────┘│
│                                                                          │
│  ┌──────────────────────┐  ┌──────────────────┐  ┌────────────────────┐ │
│  │  GROWTH LOG          │  │  LINK-SAMMLUNG   │  │  PARKPLATZ         │ │
│  │  (4 Teams, permanent)│  │  (permanent)     │  │  (permanent)       │ │
│  └──────────────────────┘  └──────────────────┘  └────────────────────┘ │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

### Hinweise zur Umsetzung in Mural

**Kontextleiter:**
- Nutze **Shapes** (abgerundete Rechtecke) fuer die 5 Stufen mit der jeweiligen Hintergrundfarbe
- Die Trennlinie "Ab hier: System managed Kontext" als **gestrichelte Linie** mit Text-Label
- Verortungs-Zone: **Voting Dots** oder kleine farbige Kreise mit Initialen der Teilnehmer

**Sweet-Spot-Kurve:**
- Als **Image** einfuegen (vorher in einem Grafiktool erstellen) oder als **Freehand Drawing** skizzieren
- Die drei Zonen (zu wenig / Sweet Spot / zu viel) farblich hinterlegen

**Kontext-Zutatenliste:**
- 4 **Frameworks** (Mural-Feature) oder abgegrenzte Bereiche
- Sticky Notes in Teamfarben (jedes Team hat eine eigene Farbe, konsistent mit Growth Log)

**Entscheidungshilfe:**
- Als **Table** oder als gestaltetes Textfeld — kompakt genug, um auf einen Blick erfassbar zu sein

**Sichtbarkeit:**
- Die permanenten Elemente (Kontextleiter, Sweet-Spot, Entscheidungshilfe) sollten auch bei Zoom-Out erkennbar sein
- Empfehlung: Linke Spalte des Mural-Boards, damit sie beim Scrollen durch die Block-Arbeitsbereiche immer sichtbar bleibt

---

## 6. Nutzung in spaeteren Bloecken

Die Kontextleiter ist nicht nur fuer Block 2+3 relevant. Sie kann in jedem spaeteren Block referenziert werden:

| Block | Kontextleiter-Bezug |
|-------|---------------------|
| 4 (AI im SDLC) | *"Auf welcher Kontextstufe arbeiten wir in jeder SDLC-Phase?"* |
| 5 (AI Teamwork) | *"Wie aendert sich die Kontextstufe, wenn ein Team zusammenarbeitet statt eine Einzelperson?"* |
| 6 (MS Copilot Office) | Konkretes Erleben von Stufe 4 im M365-Kontext |
| 7 (CRAFT Framework) | CRAFT-Dimension T (Technical Enablement) = Kontext-Infrastruktur der Organisation |
| 9 (Roadmap) | *"Welche Kontextstufe empfehlen wir dem Kunden als Ziel fuer Zyklus 1–2 vs. 5–6?"* |

---

**Version:** 1.0
**Erstellt:** 2026-03-26
