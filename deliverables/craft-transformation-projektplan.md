# AI Transformation — Projektplan: Teams-First & Dual-Track
## Mai – Dezember 2026

**Status:** Entwurf v0.1 — zur Abstimmung mit Management
**Erstellt:** Mai 2026
**Methodik:** CRAFT AI Transformation Framework v1.0
**Referenz:** `framework/ai-transformation-framework-craft.md`

---

## 0. Leitprinzipien

Drei Grundsatz-Entscheidungen prägen den gesamten Ansatz. Sie sind nicht verhandelbar — wer eine davon verändert, verändert das Fundament, nicht ein Detail.

### Teams-First: Transformation findet dort statt, wo die Arbeit ist

Kein dediziertes AI-Projektteam. Die Transformation geschieht in bestehenden Teams — begleitet, nicht ersetzt.

**Warum kein Sonderteam funktioniert:**
- **Brain Drain** — die AI-affinsten Personen werden herausgezogen, also genau die, die eigentlich die Transformation in ihren Teams tragen sollten. Die Quellteams werden dadurch AI-ärmer, nicht AI-reifer.
- **Rückkehr-Illusion** — nach 10–14 Wochen in einem Sonderkontext ist die Reintegration schwieriger als geplant. Die Teams haben sich ohne sie entwickelt.
- **Wissenstransfer ist das ungelöste Problem** — Wissen entsteht im Sonderkontext, landet aber nicht wirklich im Alltag. Das ist der häufigste Scheiterpunkt.
- **Elite-Dynamik** — ein Sonderteam schafft ein "die vs. wir"-Gefühl und blockiert Psychological Safety in den übrigen Teams.
- **Verzögerung** — die echten Teams starten ihre Transformation erst in Monat 4, nicht jetzt.

> Ein Kollege im gleichen Team, der ein Problem mit AI löst, wirkt mehr als ein externer Change Agent.

### Dual-Track: Tiefe und Breite parallel

Zwei Spuren laufen ab Phase 2 gleichzeitig:
- **Tiefenspur** — 2 Pilotteams, voller CRAFT-Prozess, individuelle Begleitung
- **Breitenspur** — alle übrigen Teams, leichtgewichtige Kommunikation und AI-Basics-Nuggets

Details → Kapitel 3.

### Iterativ: CRAFT als Entscheidungsreferenz

Keine linearen Transformationspläne. 4-Wochen-Zyklen mit eingebautem Business Problem Check und Readiness Gate. Wenn das Framework eine Empfehlung gibt, ist sie Argument — nicht Meinung.

> **Wer definiert, was gemessen wird, führt.** Der AI Transformation Manager ist Autor der Metriken. Das ist strukturelle Stärke, keine Verwaltungsaufgabe.

---

## 1. Business-Ziele & Kennzahlen

Die AI Transformation verfolgt drei gleichrangige Zielsetzungen. Sie bilden den Rahmen, an dem alle CRAFT-Aktivitäten gemessen werden. Baselines werden in Phase 1 erhoben — ohne Baseline kein Delta, ohne Delta kein belegbarer Erfolg.

### Ziel 1 — Effizienz: Kosten und Aufwand senken

**Leitfrage:** Wo kostet uns die heutige Arbeitsweise mehr als nötig — und wo kann AI systematisch entlasten?

Das Management-Ziel von "30% Automatisierung" muss präzisiert werden: 30% welcher Aktivitäten, gemessen an was? Das ist Aufgabe von Phase 0.

| Kennzahl | Baseline | Ziel | Wann messbar |
|---|---|---|---|
| Anteil automatisiert bearbeiteter Tickets (definierte Kategorien) | TBD (Phase 1) | ≥ 30% der definierten Kategorien | Ab Zyklus 1 |
| Durchschnittliche Lead Time (Ziel-Ticketkategorien) | TBD (Phase 1) | –X% vs. Baseline | Ab Zyklus 1 |
| Tooling-Nutzung (DAU/Team) | TBD (Phase 1) | ≥ 60% der Entwickler täglich | Ab Skalierungsphase |

### Ziel 2 — Qualität: Bessere Ergebnisse, weniger Fehler

**Leitfrage:** Wo entstehen heute Qualitätsprobleme, die AI-Unterstützung systematisch reduzieren kann?

| Kennzahl | Baseline | Ziel | Wann messbar |
|---|---|---|---|
| Change Failure Rate (DORA) | TBD (Phase 1) | –X% vs. Baseline | Ab Zyklus 1 |
| Testabdeckung (automatisch generierte Tests) | TBD (Phase 1) | +X Prozentpunkte | Ab Zyklus 2 |
| Review-Zyklen je Ticket (Durchschnitt) | TBD (Phase 1) | Reduktion vs. Baseline | Ab Zyklus 1 |

### Ziel 3 — Organisationale Lernfähigkeit aufbauen

**Leitfrage:** Was wollen wir als Organisation über AI in unserem spezifischen Kontext gelernt haben — und wie fließt dieses Wissen in weitere Initiativen?

| Was wir lernen wollen | Wie wir es erheben | Verwendung |
|---|---|---|
| Welche Ticketkategorien sind unter public-1 automatisierbar? | Pilotzyklen 1–2, Qualitätsmessung | Scope-Definition für Skalierung |
| Wie verändert sich AI-Reife (CRAFT-Score) über Zyklen? | Pulse Check je 4 Wochen | Steuerung der Transformation |
| Welche Interventionen wirken — welche nicht? | Business Problem Check, Retros | Interventionskatalog für das Projekt |
| Was brauchen Teams, um AI nachhaltig zu nutzen? | CRAFT Dimension R, Champion-Feedback | Skalierungsdesign, HR-Konsequenzen |

---

## 2. Projektstruktur

### 2.1 AI Transformation Core Team

Das Core Team koordiniert das Gesamtprojekt — ohne Linienverantwortung, aber mit Gestaltungsauftrag. Es ist die koordinierende Querschnittsfunktion, nicht das ausführende Projektteam.

**Aufgaben des Core Teams:**
- CRAFT-Zyklen taktieren: alle 4 Wochen Pulse Check + Business Problem Check + Readiness Gate
- Sponsor-Kommunikation und Business-Impact-Kennzahlen verantworten
- Streams koordinieren und gemeinsames Lernen ermöglichen
- Kurskorrektur wenn Metriken stagnieren oder Blocker entstehen

| Rolle | Besetzung | Schwerpunkt | Kapazität |
|---|---|---|---|
| **AI Transformation Manager** | ✅ besetzt | Core Lead, Orchestrierung, Zyklen, Messung, Sponsor-Komm. | 100% |
| **Org-Enabler** | ✅ besetzt | Raum schaffen, Kapazitäten freischaufeln, Mgmt-Interface | projektbegleitend |
| **Technical AI Lead** | ✅ besetzt | Tooling, Modell-Anbindung, IDE-Integration, technische Begleitung | 50–100% |
| **Change & People Lead** | ⚠️ **offen — höchste Priorität** | R-Dimension: Psychological Safety, ADKAR-Begleitung, Champion-Aufbau, Widerstand | 50–80% |

> **Zur Change & People Lead Rolle:** Diese Position ist die größte aktuelle Lücke des Projekts. Psychological Safety, ADKAR-Begleitung und Champion-Onboarding sind der häufigste Scheiterpunkt von AI Transformationen — nicht Technologie. Wer diese Rolle besetzt, kann bei ausreichend Kapazität auch Stream C gründen und führen. Die Core-Team-Mitgliedschaft hat dabei Priorität vor der Stream-Leitung.

### 2.2 Die 4 Streams

Die inhaltliche Arbeit der Transformation ist in vier Streams organisiert, die parallel laufen und alle fünf CRAFT-Dimensionen abdecken.

| Stream | CRAFT-Dimensionen | Schwerpunkt | Besetzung |
|---|---|---|---|
| **A — AI Adoption Program** | A, T | Nutzungsförderung, DAU-Messung, SDLC-Phasenabdeckung, Tooling-Rollout | ✅ |
| **B — AI Integration in SDLC** | F, T | Value Stream Mapping, Bottleneck-Analyse, AI-Interventionen nach SDLC-Phase | ✅ |
| **C — Human Readiness & Change** | R | Psychological Safety, ADKAR-Begleitung, Champion-Aufbau, Shadow AI Amnestie | ⚠️ offen — kann durch Change & People Lead aus Core Team gegründet werden |
| **D — AI & Governance** | C, T | EU AI Act, Betriebsrat, Datenschutz, public-1-Grenzen, Policy-Rahmen | ⚠️ Bestehende Compliance-Funktion einbinden |

> **Häufigste Fehlerquelle:** Technical (Stream A + B) wird besetzt, Stream C (Human Readiness) und Stream B (Flow) werden vergessen. Das Ergebnis: gute Tools, die niemand nutzt, an den falschen Stellen.

### 2.3 Champion-Netzwerk: Zwei Ebenen

Champions sind das operative Rückgrat der Transformation in den Teams. Entscheidend: Sie werden nicht herausgelöst — sie bleiben in ihren Teams als Peers.

**Tier 1 — Pilot-Champions (Tiefenspur)**

- 1 Person pro Pilotteam (2 Champions gesamt)
- ~20–30% Kapazität für AI-Themen im eigenen Team
- Direkter Kanal zum AI Transformation Core Team
- **Erstellen Pilot Stories** für die Breitenspur: alle 4 Wochen, 5 Min. async — was wurde ausprobiert, was hat funktioniert, was nicht. Authentisch, nicht poliert.

**Tier 2 — Breitenspur-Champions (Nicht-Pilot-Teams)**

- 1 Person pro Nicht-Pilot-Team als Ansprechpartner
- Empfängt Nuggets und Pilot Stories von Tier-1-Champions
- Führt **AI Coffee Chats** im eigenen Team (monatlich, optional, 30 Min., keine Agenda)
- Sammelt Feedback und gibt es an Core Team zurück (Lightweight Pulse)
- ~10% Kapazität — deutlich geringer als Tier 1

```
Core Team
    │
Tier 1: Pilot-Champions ──────→ Pilot Stories / Nuggets
    │                                      │
    │                           Tier 2: Breitenspur-Champions
    │                                      │
    └─── direkter Kanal ────────→ Nicht-Pilot-Teams
```

> **Identifikation Tier-2-Champions:** In Phase 1 (Leicht-Assessment) Early Adopters in allen Nicht-Pilot-Teams identifizieren. Nicht nominieren — ansprechen und fragen.

---

## 3. Das Dual-Track-Modell

### Überblick: Tiefenspur vs. Breitenspur

| | Tiefenspur | Breitenspur |
|---|---|---|
| **Zielgruppe** | 2 Pilotteams | Alle übrigen Teams |
| **Prozess** | Voller CRAFT-Prozess, 4-Wochen-Zyklen | Pre-kuratiertes AI Basics Paket |
| **Aufwand** | Hoch — Deep-Dive, Champions, Dashboard | Niedrig — 1–2h pro Team pro Monat |
| **Inhalt** | Individuell auf Bottleneck zugeschnitten | Aus Pilot-Learnings destillierte Nuggets |
| **Champions** | Tier 1 — tiefe Begleitung | Tier 2 — Multiplikatoren |
| **Messung** | CRAFT Score, DORA, Business Problem Check | Lightweight Pulse (2–3 Fragen) |

### Verbindungsmechanismus: Schritt 6 als Quelle

Schritt 6 der Tiefenspur (KI-gestützte Hebelanalyse) liefert direkt die Inhalte der Breitenspur. Was im Pilot validiert und governance-gecheckt ist, wird als AI Basics Nugget aufbereitet — ohne neuen Freigabeprozess.

```
Tiefenspur: Hebelanalyse (Schritt 6) → validierte Quick Wins → AI Basics Nuggets
                                                                       │
                                                         Tier-2-Champions → Breitenspur-Teams
```

### Awareness & Desire: Die menschliche Begleitschicht

Technische Nuggets, die auf Unwissenheit oder Angst treffen, erzeugen Druck statt Neugier. Die Breitenspur braucht deshalb eine A&D-Kommunikationsschicht, die **vor und neben** den fachlichen Inhalten wirkt.

**Schicht A — Awareness** *(Warum passiert das? Was bedeutet das für mich?)*

| Format | Inhalt | Frequenz | Wer |
|---|---|---|---|
| **Pilot Story** | Tier-1-Champion erzählt: was ausprobiert, was geklappt, was nicht. Peer-to-Peer, unpoliert — kein Management-Statement. | Alle 4 Wochen, async (5 Min.) | Tier-1-Champion |
| **Reflexionsfrage** | Nach jeder Pilot Story: eine Frage an das Team. Keine Antwortpflicht — nur Raum zum Nachdenken. | Parallel zur Pilot Story | Tier-2-Champion |

> **Nicht:** E-Mail mit AI-Statistiken oder Tool-Demo ohne Alltagsbezug.
> **Ja:** "Unser Team hat letzten Montag 2h damit gespart, Testfälle zu schreiben — hier ist wie."

**Schicht D — Desire** *(Ich will dabei sein — aus eigenem Antrieb)*

| Format | Inhalt | Frequenz | Wer |
|---|---|---|---|
| **Shadow AI Amnestie** | Explizite Einladung: "Wer nutzt schon AI-Tools — auch privat? Erzähl uns. Keine Bewertung, kein Risiko." Kanalisierung statt Verbot. | Einmalig zum Start (Phase 2), danach offen | Change & People Lead + Champions |
| **AI Coffee Chat** | Tier-2-Champion lädt ein — keine Slides, keine Agenda. Nur: "Was bewegt euch? Was macht euch Sorgen?" | Monatlich, optional, 30 Min. | Tier-2-Champion |

**Bewusst vermieden:** Verpflichtende Trainings ohne Opt-out · Erfolgs-Marketing ("AI ist toll!") · Messung individueller Nutzung in frühen Phasen.

> **ADKAR-Reihenfolge:** Pilot Stories = Awareness. Amnestie + Coffee Chats = Desire. Erst wenn beides wirkt, landen die Nuggets (Knowledge) auf fruchtbarem Boden. Die Reihenfolge ist nicht optional — sie ist der Mechanismus.

### Guardrails: Wann die Breitenspur funktioniert

1. **Governance pre-cleared** — Nur Interventionen, die im Pilot bereits freigegeben sind (Compliance, Datenschutz, Betriebsrat). Kein neuer Freigabeprozess.
2. **Wirklich niedrigschwellig** — Nicht nur leicht zu erklären, sondern leicht anzuwenden — ohne Prozessanpassung oder neue Infrastruktur.
3. **"Fundament, nicht Ziel"-Framing** — Teams verstehen: Breitenspur baut Awareness und erste Fähigkeiten auf — sie ersetzt die Tiefenspur nicht. Wer die Nuggets gemacht hat, ist nicht fertig transformiert.

---

## 4. Phasenplan

Die Tiefenspur folgt einem klaren Phasenplan mit Wochenreferenzen. Die Breitenspur läuft ab Phase 2 parallel — die relevanten Breitenspur-Aktivitäten sind je Phase integriert ausgewiesen.

---

### Phase 0 — Konstitution
**Zeitraum:** KW 18–19 (~1 Woche) · **Ziel:** Klare Struktur, bevor die Transformation startet

**Tiefenspur:**
- Rollenpapier erstellen (1 Seite, CRAFT-basiert) — wer entscheidet was, welcher Stream trägt welche Dimension, wer ist für welche Kennzahl verantwortlich
- Core Team konstituieren, Streams benennen
- **Klärungsgespräch mit Management: 30%-Ziel operationalisieren**
  - Welche Ticketkategorien sind gemeint?
  - Was gilt als "automatisiert bearbeitet"?
  - Ergebnis: schriftliche Zieldefinition + Auftrag Baseline-Erhebung
  - Empfehlung: *"Ich möchte sicherstellen, dass wir das Ziel so definieren, dass wir es am Ende belegen können. Welche Ticketkategorien stehen im Fokus — und was gilt als 'automatisiert': vollständig ohne menschliche Prüfung, oder AI hat die Arbeit gemacht und ein Mensch hat bestätigt?"*
- **Governance-Check beauftragen** *(kritischer Pfad)*
  - Welche Daten und Inhalte dürfen durch das Modell unter public-1?
  - Wenn unklar: alles andere wartet — kein Pilot ohne Governance-Klarheit

**Breitenspur:**
- Nicht-Pilot-Teams identifizieren, Tier-2-Champion-Kandidaten vorab sondieren
- Kommunikationsplan für Breitenspur-Launch vorbereiten

---

### Phase 1 — Orientierung & Baseline
**Zeitraum:** KW 19–20 (~2 Wochen) · **Ziel:** Verstehen, wo wir stehen, bevor wir loslaufen

**Tiefenspur:**
- **Leicht-Assessment mit allen Kandidatenteams** (~15 Min. Pulse Check je Team)
  - Kein vollständiger Deep-Dive auf Vorrat — der kostet 2–3h, weckt Erwartungen und wird nur mit den 2 ausgewählten Teams durchgeführt
  - Optional: 30-Min.-Gespräch mit Software Lead zur Vertiefung
  - Ziel: Reifegrad einschätzen, Offenheit ertasten, potenzielle Tier-1-Champions identifizieren

- **Pilotteam-Auswahl: 2 Teams (strategisch, nicht politisch)**

  Auswahlkriterien (transparent kommunizieren):
  - Höchster CRAFT-Score in Readiness & Technical
  - Software Lead signalisiert Bereitschaft
  - Potenzielle Tier-1-Champions erkennbar
  - Tickets aus automatisierbaren Kategorien vorhanden

  Ergebnis im Core Team abstimmen + kurze Information an Sponsor (1 Seite)

- **Ticketkategorien-Analyse** (parallel)
  - Welche Ticket-Typen gibt es? Welche sind automatisierbar (Dependency-Updates, Docs, Tests, kleine Bugfixes)?
  - Volumenschätzung: Wie viel % des Gesamtvolumens?
  - Ergebnis: konkrete Basis für 30%-Gespräch

**Breitenspur:**
- Tier-2-Champions in Nicht-Pilot-Teams ansprechen und bestätigen
- Ankündigung an alle Teams: Was passiert in den nächsten Wochen, warum, was bedeutet das für sie — kurz, ehrlich, kein Erfolgs-Marketing

---

### Phase 2 — Einbindung & Kickoff
**Zeitraum:** KW 21 (~1 Woche) · **Ziel:** Commitment, Baseline, erste Richtung

**Tiefenspur:**
- **CRAFT Deep-Dive je Pilotteam** (2–3h Workshop) — nur mit den 2 ausgewählten Teams
  - Alle 5 CRAFT-Dimensionen, Spider-Chart als Output
  - Das Team entwickelt das gemeinsam — kein Präsentationsformat, kein Audit
  - Hypothesen für erste Interventionen entwickeln

- **Shadow AI Amnestie** (Pilotteams)
  - "Was nutzt ihr schon?" — offen, keine Konsequenzen, Erkenntnisinteresse
  - Ergebnisse fließen in Interventionshypothesen ein

- **Tier-1-Champions ansprechen**
  - 1 Person pro Team, die Lust hat tiefer reinzugehen
  - Commitment: ~20–30% für AI-Themen im eigenen Team
  - Bleibt im Team — keine Herauslösung
  - Direkter Kanal zum Core Team
  - Briefing: Sie werden in 4 Wochen die erste Pilot Story schreiben

- **Tooling-Setup** (Technical AI Lead)
  - Continue.dev / Cline, Modell-Anbindung
  - In der ersten Team-Session demonstrieren, nicht vorab

- Readiness Gate Entscheidung: Bereit für Zyklus 1?

**Breitenspur:**
- **Shadow AI Amnestie** (alle Nicht-Pilot-Teams via Tier-2-Champions)
  - Gleiche Botschaft, gleiche Sicherheit — kein zeitlicher Verzug gegenüber den Pilotteams
- Erste Pilot Story ankündigen: "In 4 Wochen hört ihr von Team X, was sie ausprobiert haben"
- Tier-2-Champions: erstes Briefing, Erwartungen klären, Coffee-Chat-Format vorbereiten

---

### Phase 3 — Zyklus 1
**Zeitraum:** KW 22–25 / Juni · **Ziel:** Erste messbare Ergebnisse, Muster verstehen

**Woche 1 — Maßnahmenplan**
- Basierend auf Deep-Dive: 1–2 Interventionen pro Team festlegen
- SDLC-Phase + Ticketkategorie + Werkzeug konkret benennen
- Metriken festlegen (Lead Time, Automatisierungsrate, Testabdeckung)

**Woche 2–3 — Teams arbeiten**
- Pilotteams nutzen AI-Tooling an echten Tickets
- Tier-1-Champions als erste Anlaufstelle im Team
- AI Transformation Manager: wöchentlicher kurzer Check-in mit Tier-1-Champions
  *(Champions sind die Brücke — kein direktes Hineinarbeiten in Teams)*
- Tier-1-Champions bereiten erste Pilot Story vor (für Ende Woche 3 / Beginn Woche 4)

**Woche 4 — Business Problem Check**
- Kennzahlen: Was hat sich gemessen verändert?
- CRAFT Pulse Check (16 Fragen, ~15 Min.)
- Core Team: Was lernen wir aus beiden Teams? Muster? Abweichungen?
- Readiness Gate: Erweitern / Vertiefen / Konsolidieren
- Kurzes Update an Sponsor (1–2 Slides)

**Breitenspur (laufend):**
- Ende Woche 3: Erste Pilot Stories der Tier-1-Champions an alle Breitenspur-Teams
- Tier-2-Champions senden Reflexionsfrage in ihre Teams
- Ende Woche 4: Erste AI Basics Nuggets (aus validierten Interventionen) aufbereiten und verteilen
- Erster Coffee Chat durch Tier-2-Champions (sofern Amnestie-Phase abgeschlossen)

---

### Phase 4 — Skalierung der Tiefenspur
**Zeitraum:** Ab KW 26, wenn Readiness Gate "Erweitern" · **Ziel:** Skalierung durch Peer-Effekt

- Tier-1-Champions aus Pilotteams begleiten neue Teams — Peer überzeugt Peer
- Erkenntnisse aus Zyklus 1 fließen direkt in neue Teams ein
- AI Transformation Manager koordiniert, Champions tragen
- Messung aggregieren: Gesamtbild für Management-Reporting
- Breitenspur wächst eigenständig: neue Zyklen = neue validierte Nuggets

> **Wachstumsbedingung:** Neue Teams werden in die Tiefenspur aufgenommen, sobald ihr Readiness Gate "Erweitern" erlaubt — nicht früher. Qualität vor Geschwindigkeit.

---

## 5. Der 4-Wochen-Zyklus

Der Zyklus ist das operative Herzstück der Transformation. Er wiederholt sich ab Phase 3 bis zur Selbstorganisation.

### Wochenprogramm

| Zeitraum | Fokus | Tiefenspur | Breitenspur |
|---|---|---|---|
| **Woche 1** | Kick-off & Planung | Pulse Check, Interventionen schärfen, Verantwortlichkeiten klären, Unterstützung aktivieren | Tier-2-Champions: Vorschau auf Zyklus kommunizieren |
| **Woche 2–3** | Umsetzen | Team setzt Maßnahmen um, Tier-1-Champions begleiten operativ, Core Team unblockiert, Hindernisse dokumentieren | Pilot Story vorbereiten |
| **Woche 4** | Messen & Entscheiden | Business-Kennzahlen reviewen, CRAFT-Score aktualisieren, Business Problem Check, nächsten Zyklus festlegen | Pilot Story + Nuggets an Breitenspur, Reflexionsfrage, Coffee Chat |

↩ Der Zyklus wiederholt sich — bis das Team selbst führt

### Business Problem Check (Woche 4)

Vier Fragen, in dieser Reihenfolge:

1. **Kennzahlen-Delta:** Was haben sich die Business-Impact-Kennzahlen verändert? Positiver Trend, Stagnation, Rückgang?
2. **Interventions-Alignment:** Adressieren die aktuellen Interventionen noch das richtige Problem?
3. **Root Cause Check:** Ist das, was wir beobachten, Symptom oder Ursache?
4. **Kurskorrektur:** Was ändert sich im nächsten Zyklus — und warum?

### Readiness Gate: Drei Entscheidungen

| Entscheidung | Bedingung |
|---|---|
| ✅ **Erweitern** | Adoption >60%, DORA stabil oder verbessert, Business-Kennzahlen positiver Trend, kein Governance-Blocker |
| 🔄 **Neue Intervention** | Business-Prio stagniert oder neues Bottleneck sichtbar — Kurs korrigieren ohne den Zyklus zu unterbrechen |
| ⏸ **Konsolidieren** | Governance-Änderung, Teamumbau, kultureller Widerstand — erst stabilisieren, dann weiterskalieren |

---

## 6. CRAFT Dashboard

> **Status: Todo — erste Prototyp-Version in Vorbereitung, Integration in den laufenden Projektplan geplant**

Das Dashboard macht den aktuellen Transformationsstand für alle sichtbar — jederzeit, ohne Push-Benachrichtigungen, ohne Meeting-Anfragen. Es ist die Brücke zwischen Team-Autonomie und Organisations-Transparenz.

**Geplante Inhalte:**

| Bereich | Inhalt | Zielgruppe |
|---|---|---|
| Business-Kennzahlen | Lead Time, Deployment Frequency, Change Failure Rate, AI-Assisted Commits % | Management, Sponsor |
| CRAFT-Dimensionen | Ø Score 1–5 pro Dimension, Trend über Zyklen | Core Team, Champions |
| Aktuelle Interventionen | Status: ✓ Done / ◐ In Arbeit / ○ Geplant | Alle |
| Nächster Meilenstein | Countdown zum nächsten Business Problem Check | Alle |
| Breitenspur-Status | Nuggets verteilt, Coffee Chats durchgeführt, Lightweight Pulse | Core Team |

**Prinzip:** Kein Push. Kein Meeting. Einfach nachschauen.

---

## 7. Skalierung bis zur Selbstorganisation

Das Ziel ist nicht, dass das Core Team immer mehr Teams betreut. Das Ziel ist, dass Teams lernen, sich selbst zu führen — und das Wissen weitergeben.

### Drei Stufen (Tiefenspur)

| Stufe | Zeitraum | Fokus | Ownership |
|---|---|---|---|
| **Pilot** | Zyklen 1–2 | 2 Pilotteams, Governance & Tooling klären, Tier-1-Champions aufbauen, erste messbare Ergebnisse, Lessons Learned dokumentieren | 🤝 Core Team führt |
| **Skalierung** | Zyklen 3–5 | 2–3 neue Teams in Tiefenspur, Pilot-Erfahrungen direkt nutzen, Tier-1-Champions der alten Teams helfen mit, Readiness Gates sichern Qualität | 🔗 Champions co-führen |
| **Selbstorganisation** | Ab Zyklus 6 | Tier-1-Champions übernehmen operativ, Pulse Checks laufen eigenständig, Dashboard ersetzt Reporting, Core Team: neue Teams und neue Themen | 🚀 Teams führen selbst |

### Breitenspur wächst parallel mit

- Jeder neue Pilot-Zyklus → neue validierte Nuggets → Breitenspur-Inhalte aktualisieren sich
- Tier-2-Champions übernehmen zunehmend selbstständig: Coffee Chats, Lightweight Pulse, lokale Fragen
- Ab Zyklus 3: Breitenspur-Teams mit Interesse und Readiness können aktiv in die Tiefenspur wechseln
- Die Breitenspur wirkt als Awareness- und Motivationsfilter: Sie bringt die richtigen Teams zum richtigen Zeitpunkt in die Tiefenspur

> **Die Balance:** Neue Teams onboarden, ohne alte zu vernachlässigen — das gelingt durch Champions, das Dashboard und klare Readiness-Kriterien, bevor ein Team "entlassen" wird. Wer zu früh loslässt, verliert die Wirkung. Wer zu lange hält, verhindert Selbstorganisation.

---

## Strukturelle Leitprinzipien

**Framework als Entscheidungsreferenz**
Wenn Interventionen oder Rollen diskutiert werden: Bezug auf das CRAFT Framework herstellen. "Das CRAFT Framework empfiehlt X, weil Y" ist strukturell stabiler als eine persönliche Meinung — und nimmt Reibung aus Rollendiskussionen heraus.

**Champions als strukturelle Verbindung**
Der Einfluss des AI Transformation Projekts in den Teams läuft über die Champions — nicht über direkte Präsenz. Wenn diese Beziehungen früh aufgebaut werden, entstehen direkte Kontakte in jedem Team. Das ist strukturelle Stärke, die keine kontinuierliche Intervention erfordert.

**Breitenspur als Motivationsfilter**
Die Breitenspur ist kein Warte-Saal. Sie erzeugt Nachfrage für die Tiefenspur. Teams, die über Pilot Stories, Coffee Chats und Nuggets echten Mehrwert erleben, melden sich — sie müssen nicht überzeugt werden.

---

**Version:** 0.1
**Nächste Review:** Nach Klärungsgespräch mit Management (Phase 0)
**Offene Punkte:**
- [ ] Change & People Lead Rolle besetzen
- [ ] 30%-Ziel mit Management operationalisieren
- [ ] Governance-Check public-1 abschließen
- [ ] Stream C Entscheidung (eigener Stream vs. Core-Team-Rolle reicht)
- [ ] CRAFT Dashboard Integration (Prototyp vorhanden)
- [ ] Tier-2-Champions in Nicht-Pilot-Teams identifizieren
