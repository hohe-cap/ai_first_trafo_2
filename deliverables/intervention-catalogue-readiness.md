# Interventionskatalog: Dimension R — Readiness (Human & Cultural)

**Version:** 1.0 DRAFT
**Erstellt:** 2026-02-20
**Verantwortlich:** Change & People Lead (Durchführung), AI Transformation Manager (Steuerung)
**Voraussetzung:** Mindestens ein Deep-Dive Readiness oder Pulse Check durchgeführt

---

## 1. Zweck dieses Katalogs

Dieser Katalog beantwortet die Frage: **"Der CRAFT Explorer zeigt in Dimension R einen niedrigen Score — was tun wir jetzt konkret?"**

Er überbrückt die Lücke zwischen Messergebnis und Handlung. Jede Intervention ist so beschrieben, dass ein AI Transformation Manager sie innerhalb eines 4-Wochen-Zyklus einplanen und durchführen kann.

### Wie dieser Katalog verwendet wird

```
CRAFT Exploration (Pulse Check / Deep-Dive)
    │
    ▼
CRAFT-Scores + Radar-Chart
    │
    ▼
Analyse durch AI Transformation Manager
    │
    ├─ Absolut niedrig? (Score < 2.5 → Sofort adressieren)
    ├─ Relativ niedrig? (>1 Stufe unter Durchschnitt → Priorisieren)
    └─ Diagnostik-Antworten? (Blocker + Enablement-Hebel → Intervention wählen)
    │
    ▼
Intervention(en) aus diesem Katalog wählen
    │
    ▼
Einplanung in nächsten 4-Wochen-Zyklus
    │
    ▼
Wirkung im nächsten Pulse Check überprüfen
```

### Grundregeln

1. **Maximal 2-3 Interventionen pro Zyklus** — mehr überfordert das Team
2. **Diagnostik schlägt Score** — die MC-Antworten (R-MC-BLOCKER, R-MC-ENABLEMENT) zeigen die Ursache, der Score nur das Symptom
3. **Quick Wins zuerst** — eine schnell spürbare Verbesserung baut Vertrauen für größere Maßnahmen auf
4. **Nicht alle Sub-Topics gleichzeitig** — fokussiere auf das schwächste Sub-Topic, es zieht den Gesamt-Score am stärksten runter (Min-Gewichtung in der Scoring-Formel)

---

## 2. Score-Interpretation für Dimension R

### Gesamt-Score (aus Deep-Dive)

Die Scoring-Formel `(Median × 0.6) + (Min × 0.4)` bestraft bewusst einzelne Schwachstellen. Ein Team mit Sub-Topic-Scores von 4, 4, 4, 1 bekommt nicht 3.25, sondern 2.8. Das ist Absicht: Ein einziges schwaches Sub-Topic (z.B. fehlende psychologische Sicherheit) kann die gesamte Readiness untergraben.

| Score | Stufe | Bedeutung | Dringlichkeit |
|-------|-------|-----------|---------------|
| 1.0–1.9 | Exploring | Hohe Unsicherheit, keine Strukturen. Team hat Angst oder Desinteresse | **Sofort** — ohne Readiness-Arbeit scheitern alle anderen Dimensionen |
| 2.0–2.9 | Experimenting | Bewusstsein da, aber Skills und Strukturen fehlen | **Hoch** — in diesem und nächstem Zyklus adressieren |
| 3.0–3.4 | Embedding (früh) | Grundlagen gelegt, aber noch fragil und personenabhängig | **Mittel** — gezielt vertiefen |
| 3.5–4.4 | Scaling | Breite Basis, systematische Strukturen entstehen | **Niedrig** — optimieren, nicht reparieren |
| 4.5–5.0 | Evolving | Team ist selbsttragend, AI ist Teil der Identität | **Beobachten** — Rückfall verhindern, Best Practices teilen |

### Relative Schwäche erkennen

Mindestens so wichtig wie der absolute Score ist der **Vergleich mit anderen Dimensionen**:

| Muster | Bedeutung | Implikation |
|--------|-----------|-------------|
| R niedrig, T hoch | Tools sind da, Menschen können/wollen sie nicht nutzen | Klassisches Change-Problem — mehr Tooling hilft nicht |
| R niedrig, C niedrig | Unsicherheit + fehlende Governance = Paralyse | Shadow AI Amnestie + Governance Starter Kit **gemeinsam** angehen |
| R niedrig, A niedrig | Weder Readiness noch Adoption — Kaltstart | Psychologische Sicherheit zuerst, dann kleine Adoption-Erfolge |
| R hoch, T niedrig | Team will, Infrastruktur fehlt | Dimension T priorisieren, nicht R |
| R hoch, F niedrig | Menschen bereit, aber AI nicht in Prozesse eingebettet | Dimension F priorisieren (Value Stream Mapping) |

---

## 3. Interventionen nach Sub-Topic

### 3.1 Psychologische Sicherheit

**Deep-Dive-Frage:** R-M-SAFETY
**Misst:** Darf ich mit AI experimentieren, ohne Angst vor Bewertung oder Bestrafung?

#### Stufe 1–2: "Experimentieren wird skeptisch gesehen oder nur toleriert"

| # | Intervention | Format | Aufwand | Erwartete Wirkung |
|---|-------------|--------|---------|-------------------|
| R-PS-1 | **Shadow AI Amnestie** | Team-Event (60 Min). Leadership erklärt: "Wir bestrafen nicht, wir kanalisieren." Bestehende Shadow-AI-Nutzung wird erfasst, offizielle Wege geöffnet. Kein Reporting individueller Nutzung | 1 Woche Vorbereitung, Leadership-Commitment nötig | Sofort reduziertes Risiko. Vertrauen wächst in 1–2 Zyklen |
| R-PS-2 | **Leadership Goes First** | Manager nutzt AI sichtbar in Meetings — Meeting-Zusammenfassung, Agenda-Vorbereitung, Entscheidungsvorlagen. Keine Delegation an andere, selbst machen und zeigen | Sofort umsetzbar, kein Budget | Signal-Wirkung in 2–3 Wochen |
| R-PS-3 | **Experimentier-Budget** | Jede:r bekommt 2h/Woche offiziell für AI-Experimentieren. Im Sprint eingeplant, nicht "wenn Zeit ist". Ergebnis: kurze Sharing-Notiz (3 Sätze) im Team-Channel | Management-Entscheidung + Sprint-Planung | 1 Zyklus für erste Wirkung |

**Erfolgsindikatoren:**
- Teammitglieder teilen AI-Erfahrungen proaktiv (nicht nur auf Nachfrage)
- Keine Berichte über Sanktionen oder Abmahnung bei AI-Nutzung
- R-M-SAFETY Score steigt um mindestens 1 Stufe im nächsten Deep-Dive

#### Stufe 3: "Experimentieren ist ok, aber es hängt vom Manager/Projekt ab"

| # | Intervention | Format | Aufwand | Erwartete Wirkung |
|---|-------------|--------|---------|-------------------|
| R-PS-4 | **Fail Forward Sessions** | Monatliches 30-Min-Format: Team teilt AI-Fails & Learnings. Kein Blame, nur Lernen. Moderiert durch Champion. Format: "Ich habe X probiert, es hat nicht funktioniert weil Y, ich habe Z gelernt" | 1h Vorbereitung/Monat | Normalisierung von Scheitern in 2–3 Zyklen |
| R-PS-5 | **AI-Experimente in Retros** | Fester Retro-Punkt: "Was haben wir mit AI probiert? Was haben wir gelernt?" Nicht optional, sondern Standard-Agenda | Sofort umsetzbar | Systematische Verankerung in 1–2 Zyklen |
| R-PS-6 | **Teamvereinbarung AI-Umgang** | Team erarbeitet gemeinsam 5–7 Regeln für den Umgang mit AI. Z.B. "Wir reviewen AI-Output wie menschlichen Code", "Wir teilen Prompts offen" | 1h Workshop | Sofortige Klarheit, wirkt 2–3 Zyklen |

#### Stufe 4+: "Aktive Ermutigung, Fehler als Lernen, Sharing-Sessions existieren"

Keine akute Intervention nötig. Empfehlung: Erkenntnisse als Best Practice dokumentieren und an andere Teams weitergeben. Fail Forward Sessions beibehalten.

---

### 3.2 Skill-Level & Vertrauen

**Deep-Dive-Frage:** R-M-SKILL
**Misst:** Kann ich AI-Tools effektiv nutzen?

#### Stufe 1–2: "Weiß nicht, was AI kann / fühle mich unsicher"

| # | Intervention | Format | Aufwand | Erwartete Wirkung |
|---|-------------|--------|---------|-------------------|
| R-SK-1 | **Rollenspezifische Prompt Playbooks** | 3–5 konkrete Prompts pro Rolle (Dev, QA, PO) für tägliche Aufgaben. Nicht generisch, sondern aus echten Team-Use-Cases extrahiert. Format: Problem → Prompt → erwartetes Ergebnis → Variationen | 1 Woche Erstellung durch Champion/Technical Lead | Sofortige Wirkung — senkt Einstiegshürde massiv |
| R-SK-2 | **Pair-Prompting Sessions** | Champion + Teammate arbeiten 30 Min gemeinsam an einer echten Aufgabe mit AI. Keine Schulung, sondern Ko-Arbeit an einem realen Problem. Wechselnde Partner | 30 Min/Woche pro Pairing | 2–4 Wochen für messbare Skill-Verbesserung |
| R-SK-3 | **"AI in 15 Minutes" Micro-Learnings** | Wöchentlich 15 Min: Ein konkreter Use Case, live vorgemacht (nicht Folien). Aufgezeichnet als Bibliothek. Rotation: Verschiedene Teammitglieder zeigen ihre Nutzung | 1h Vorbereitung/Woche | 3–4 Wochen für Breitenwirkung |

**Erfolgsindikatoren:**
- Mehr als 50% des Teams können mindestens einen AI-Use-Case für ihre Rolle benennen
- Prompt Playbooks werden tatsächlich genutzt (Downloads/Views im internen Wiki)
- R-M-SKILL Score steigt um mindestens 1 Stufe

#### Stufe 3: "Kann AI grundlegend nutzen, brauche aber mehr Praxis"

| # | Intervention | Format | Aufwand | Erwartete Wirkung |
|---|-------------|--------|---------|-------------------|
| R-SK-4 | **Prompt-Review in Code Reviews** | AI-Prompts werden (freiwillig) in PRs/Reviews geteilt — "Hier hat mir AI geholfen, so sah mein Prompt aus." Kein Zwang, aber Ermutigung | Kulturelle Vereinbarung | Organische Skill-Diffusion in 2–3 Zyklen |
| R-SK-5 | **AI-Challenge der Woche** | Wöchentliche Mini-Challenge: "Löse [konkretes Problem] mit AI-Unterstützung." Ergebnisse werden geteilt, bester Ansatz wird zum Playbook-Eintrag | 30 Min/Woche | Gamification-Effekt, 2–3 Zyklen |
| R-SK-6 | **Vertiefte Workshops** | Halbtags-Workshop zu fortgeschrittenen Themen: Multi-Turn-Prompting, AI-assisted Architecture, Agent-basiertes Arbeiten. Extern oder intern durch Technical Lead | 1 Tag Vorbereitung + halber Tag Durchführung | 1 Zyklus |

#### Stufe 4+: "Kann AI-Output kritisch bewerten, hilft anderen"

Empfehlung: Diese Personen als Champions identifizieren und mandatieren (→ Sub-Topic Peer Support). Fortgeschrittene Formate anbieten: Prompt Libraries kuratieren, eigene Micro-Learnings halten.

---

### 3.3 Rollenentwicklung & Klarheit

**Deep-Dive-Frage:** R-M-ROLE
**Misst:** Verstehe ich, wie sich meine Rolle mit AI verändert?

#### Stufe 1–2: "Keine Vorstellung / Unklar, was es für MICH bedeutet"

| # | Intervention | Format | Aufwand | Erwartete Wirkung |
|---|-------------|--------|---------|-------------------|
| R-RE-1 | **"Meine Rolle 2026" Workshop** | 2h-Workshop: Was macht AI in meiner Rolle besser/schneller? Was bleibt uniquely human? Ergebnis: persönliche Entwicklungs-Skizze pro Teilnehmer. Nutzung des Rollenentwicklungsmodells aus dem Framework | 1 Tag Vorbereitung + 2h Durchführung | Sofortige Klarheit, reduziert Angst |
| R-RE-2 | **Skill-Shift-Narrativ** | Leadership kommuniziert regelmäßig und konkret: "Weniger Boilerplate, mehr Design & Review." Nicht als Phrase, sondern mit Beispielen aus dem eigenen Kontext. Wiederholung in Town Halls, Sprint Reviews, 1:1s | Management-Arbeit, kein Budget | 2–3 Zyklen für Verankerung |
| R-RE-3 | **Job Crafting Gespräche** | Strukturiertes 1:1 zwischen Manager und Teammitglied: "Welche Routine-Aufgaben willst du abgeben? Was willst du stattdessen machen?" Ergebnis: konkrete Vereinbarung (2–3 Punkte) | 1h/Person | 1 Zyklus, wenn Vereinbarungen eingehalten werden |

**Erfolgsindikatoren:**
- Jedes Teammitglied kann in 2 Sätzen beschreiben, wie sich seine Rolle mit AI verändert
- Keine Aussagen mehr wie "AI nimmt mir meinen Job weg" in Retros oder Surveys
- R-M-ROLE Score steigt um mindestens 1 Stufe

#### Stufe 3: "Verstehe grob, aber kein konkreter Entwicklungsplan"

| # | Intervention | Format | Aufwand | Erwartete Wirkung |
|---|-------------|--------|---------|-------------------|
| R-RE-4 | **Kuratierte Lernpfade pro Rolle** | Nicht Kurskatalog, sondern geführter Pfad: Dev → Prompt Engineering → AI-assisted Architecture → Agent-basiertes Arbeiten. Max. 3 Stufen, jede mit konkreten Ressourcen und Meilenstein | 2 Wochen Erstellung | 1–2 Zyklen für erste Durchläufe |
| R-RE-5 | **"Day in the Life" Showcases** | Erfahrene AI-Nutzer (intern oder extern) zeigen live ihren Arbeitsalltag mit AI. Fokus: Wie sieht die Rolle _jetzt_ aus, nicht in 5 Jahren? Realitätsnah, nicht Marketing | 2h Vorbereitung + 1h Durchführung | Sofortige Inspiration |
| R-RE-6 | **Rollenentwicklung in HR-Prozesse** | Neue Skill-Profile in Mitarbeitergespräche, Zielvereinbarungen und Stellenausschreibungen integrieren. AI-Skills werden entwickelt, nicht vorausgesetzt | HR-Abstimmung, 2–4 Wochen | 2–3 Zyklen, aber nachhaltigste Intervention |

#### Stufe 4+: "Klares Narrativ, Lernpfade verfügbar, aktive Weiterentwicklung"

Empfehlung: Team als Referenz für andere Teams nutzen. Rollenmodelle dokumentieren und im Rollenentwicklungs-Framework verankern. "Day in the Life" Showcases für andere Teams anbieten.

---

### 3.4 Peer-Support & Champions

**Deep-Dive-Frage:** R-M-SUPPORT
**Misst:** Gibt es ein Unterstützungsnetzwerk?

#### Stufe 1–2: "Niemand zum Fragen / informelle Unterstützung ohne Struktur"

| # | Intervention | Format | Aufwand | Erwartete Wirkung |
|---|-------------|--------|---------|-------------------|
| R-SU-1 | **Champion identifizieren & mandatieren** | 1–2 Personen pro Team, freiwillig, mit **mindestens 20% dedizierter Zeit** (kritisch!). Direkte Anbindung an AI Transformation Manager. Ohne Zeitbudget ist diese Intervention wirkungslos | Management-Entscheidung + Kapazitätsplanung | 1 Zyklus für Aufbau, danach kontinuierlich |
| R-SU-2 | **AI Office Hours** | Wöchentlich 30 Min: Champion ist verfügbar für Fragen, Live-Demos, gemeinsames Troubleshooting. Kein formaler Workshop, sondern offener Slot. Kann remote oder vor Ort sein | 30 Min/Woche Champion-Zeit | 2–3 Wochen für Akzeptanz |
| R-SU-3 | **AI-Buddy-System** | Jedes neue Teammitglied bekommt einen AI-Buddy für die ersten 4 Wochen. Buddy zeigt Tools, teilt Prompts, ist Ansprechpartner für Fragen. Strukturiertes Mini-Onboarding (Checkliste) | Buddy-Zuordnung + 2h Onboarding-Checkliste erstellen | Sofort für Onboardees |

**Erfolgsindikatoren:**
- Champions sind namentlich bekannt und haben nachweislich dedizierte Zeit
- Office Hours werden von mindestens 30% des Teams genutzt (innerhalb von 2 Zyklen)
- Neue Teammitglieder bewerten AI-Onboarding positiv

#### Stufe 3: "Champions benannt, aber keine dedizierte Zeit"

| # | Intervention | Format | Aufwand | Erwartete Wirkung |
|---|-------------|--------|---------|-------------------|
| R-SU-4 | **Champion-Zeitbudget durchsetzen** | Explizite Vereinbarung zwischen Champion, Manager und AI Transformation Manager: 20% = 1 Tag/Woche. In Sprint-Kapazität berücksichtigen, nicht als "Zusatzaufgabe" | Management-Entscheidung | 1 Zyklus — ohne das bleibt alles fragil |
| R-SU-5 | **Community of Practice** | Monatliches teamübergreifendes Treffen (60 Min): Use Cases teilen, Probleme diskutieren, Tool-News. Rotation des Gastgebers. Mix aus Show & Tell + offene Diskussion | 2h Vorbereitung/Monat | 2–3 Zyklen für Vernetzungseffekt |
| R-SU-6 | **Champion Onboarding Kit** | Strukturiertes Paket für neue Champions: Was ist meine Rolle? Was wird erwartet? Welche Ressourcen habe ich? Kommunikationsvorlagen, erste 30 Tage Fahrplan | 1 Woche Erstellung (einmalig) | Sofort für neue Champions |

#### Stufe 4+: "Aktives Champion-Netzwerk, regelmäßige Office Hours, Pairing-Sessions"

Empfehlung: Champions vernetzen sich teamübergreifend. Community of Practice institutionalisieren. Peer Learning systematisieren (z.B. "Jeder Champion hält 1 Micro-Learning pro Quartal"). Neue Champions aus dem Team heraus entwickeln (Nachfolge sichern).

---

## 4. Diagnostik-gesteuerte Interventionsauswahl

Die Diagnostik-Fragen aus dem Deep-Dive zeigen nicht nur _wie schlecht_ ein Score ist, sondern _warum_. Sie sind der wichtigste Hebel für die richtige Interventionswahl.

### 4.1 Blocker-Analyse (R-MC-BLOCKER)

| Diagnostik-Antwort | Primäre Ursache | Empfohlene Interventionen | Priorität |
|---|---|---|---|
| **"Sorge um meine Rolle / meinen Arbeitsplatz"** | Existenzangst, fehlendes Narrativ | R-RE-1 (Rolle 2026 Workshop) + R-RE-2 (Skill-Shift-Narrativ) | Sofort — blockiert alles andere |
| **"Fehlende Skills"** | Keine Übung, kein Material | R-SK-1 (Prompt Playbooks) + R-SK-2 (Pair-Prompting) | Hoch — Quick Win möglich |
| **"Keine Zeit zum Lernen"** | Management priorisiert AI nicht | R-PS-3 (Experimentier-Budget) — **Management-Entscheidung!** | Hoch — ohne Zeit keine Veränderung |
| **"Unklar, wofür AI sinnvoll ist"** | Fehlende Use Cases für eigene Arbeit | R-SK-1 (Rollenspezifische Playbooks) + R-SK-3 (Micro-Learnings) | Hoch |
| **"Misstrauen gegenüber AI-Qualität"** | Negative Erfahrung oder fehlendes Verständnis für Grenzen | R-SK-2 (Pair-Prompting) + R-PS-4 (Fail Forward) | Mittel — baut sich durch Erfahrung ab |
| **"Technische Hürden"** | Zugang, Performance, Tool-Probleme | **→ Weiterleitung an Dimension T** — kein R-Problem | Hoch, aber anderer Katalog |
| **"Nichts hemmt mich"** | Kein Blocker, guter Zustand | Keine Intervention nötig. Person als potenziellen Champion identifizieren | Beobachten |

### 4.2 Enablement-Hebel (R-MC-ENABLEMENT)

| Diagnostik-Antwort | Was das Team sich wünscht | Empfohlene Interventionen |
|---|---|---|
| **"Kurze Beispiele / Playbooks"** | Konkrete Anleitung, kein Theorie-Workshop | R-SK-1 (Prompt Playbooks) |
| **"Pairing mit Erfahrenen"** | Lernen durch Zusammenarbeit | R-SK-2 (Pair-Prompting) + R-SU-3 (Buddy-System) |
| **"Strukturiertes Training"** | Formales Lernangebot | R-SK-3 (Micro-Learnings) + R-SK-6 (Workshops) |
| **"Bessere Prompts / Templates"** | Qualität der AI-Interaktion verbessern | R-SK-1 (Prompt Playbooks) + R-SK-4 (Prompt-Review in PRs) |
| **"Mehr Zeit zum Experimentieren"** | Kapazität fehlt | R-PS-3 (Experimentier-Budget) |
| **"Champion-Support"** | Anlaufstelle im Team fehlt | R-SU-1 (Champion mandatieren) + R-SU-2 (Office Hours) |

### 4.3 Kombinierte Auswahl (Praxis-Beispiel)

> **Szenario:** Deep-Dive ergibt R-Score = 2.1
> - R-M-SAFETY = 2 (toleriert, nicht gefördert)
> - R-M-SKILL = 2 (unsicher, weiß nicht wo anfangen)
> - R-M-ROLE = 1 (keine Vorstellung, Angst)
> - R-M-SUPPORT = 3 (informell bekannte Ansprechpartner)
>
> **Diagnostik:**
> - Top-Blocker: "Sorge um meine Rolle" (40%), "Fehlende Skills" (35%)
> - Top-Enablement: "Pairing mit Erfahrenen" (45%), "Playbooks" (30%)
>
> **Interventions-Empfehlung für Zyklus 1:**
> 1. R-RE-1 "Meine Rolle 2026" Workshop (adressiert den Hauptblocker Angst)
> 2. R-SK-1 Rollenspezifische Prompt Playbooks (senkt Einstiegshürde)
> 3. R-SK-2 Pair-Prompting Sessions (gewünscht vom Team, nutzt vorhandene informelle Supporter)
>
> **Für Zyklus 2:**
> - R-PS-2 Leadership Goes First (Signal setzen)
> - R-SU-1 Champion mandatieren (informelle Supporter formalisieren)

---

## 5. Powerful Questions als qualitative Vertiefung

Die offene Frage R-PQ ("Was müsste passieren, damit du dich sicher fühlst, AI aktiv zu nutzen?") liefert Themen-Cluster, die über die MC-Diagnostik hinausgehen.

### Typische Cluster und Intervention-Mapping

| Themen-Cluster | Typische Aussagen (anonymisiert) | Intervention |
|---|---|---|
| **Angst & Kontrolle** | "Wenn ich sicher wüsste, dass AI mich nicht ersetzt", "Wenn klar wäre, was mit meinen Daten passiert" | R-RE-1 + R-RE-2 (Rollenklarheit), ggf. C-Katalog (Governance-Transparenz) |
| **Praxis & Anleitung** | "Wenn mir jemand zeigt, wie das konkret geht", "Mehr Beispiele aus meinem Bereich" | R-SK-1 + R-SK-2 (Playbooks + Pairing) |
| **Zeit & Erlaubnis** | "Wenn ich Zeit dafür hätte", "Wenn mein Manager das ok findet" | R-PS-3 + R-PS-2 (Experimentier-Budget + Leadership Goes First) |
| **Qualität & Vertrauen** | "Wenn die Ergebnisse zuverlässiger wären", "Wenn ich verstehe, wann AI falsch liegt" | R-SK-6 (Workshop zu AI-Grenzen) + R-PS-4 (Fail Forward) |
| **Infrastruktur** | "Wenn die Tools schneller wären", "Wenn ich Zugang hätte" | **→ Dimension T** |

---

## 6. Wechselwirkungen mit anderen Dimensionen

Readiness existiert nicht isoliert. Ein niedriger R-Score kann Symptom eines Problems in einer anderen Dimension sein — oder ein R-Problem kann andere Dimensionen blockieren.

### R blockiert andere Dimensionen

| Wenn R niedrig... | ...dann leidet auch | Warum |
|---|---|---|
| R-M-SAFETY < 2 | **A (Adoption)** | Ohne psychologische Sicherheit nutzt niemand AI offen → Shadow AI steigt statt offizieller Adoption |
| R-M-SKILL < 2 | **A (Adoption)**, **F (Flow)** | Ohne Skills keine sinnvolle Nutzung, keine Prozesseinbettung möglich |
| R-M-ROLE < 2 | **A (Adoption)** | Angst um die Rolle → aktive oder passive Verweigerung |
| R-M-SUPPORT < 2 | **Alle Dimensionen** | Ohne Unterstützung bleibt alles am AI Transformation Manager hängen → skaliert nicht |

### Andere Dimensionen beeinflussen R

| Dimension | Einfluss auf R | Intervention liegt bei |
|---|---|---|
| **T (Technical)** niedrig | Schlechte Tool-Erfahrung → Frustration → sinkende Readiness | T-Katalog (Tool-Zugang, Performance) |
| **C (Compliance)** unklar | Unsicherheit über Erlaubtes → Angst → sinkende Safety | C-Katalog (Governance-Transparenz, klare Policies) |
| **F (Flow)** fehlt | AI als Fremdkörper im Workflow → Nutzen unklar → sinkende Motivation | F-Katalog (Prozesseinbettung, Value Stream Mapping) |

**Faustregel:** Wenn der R-Score niedrig ist, aber die Diagnostik auf technische Hürden oder Governance-Unklarheiten zeigt → Lösung liegt **nicht** in R, sondern in T oder C. Dann zuerst dort intervenieren.

---

## 7. Interventions-Steckbriefe (Detailbeschreibungen)

### R-PS-1: Shadow AI Amnestie

**Kurzbeschreibung:** Offizielle Erklärung, dass bestehende informelle AI-Nutzung nicht bestraft wird. Stattdessen wird sie erfasst und in offizielle Kanäle überführt.

**Voraussetzungen:**
- Leadership-Commitment (muss von oben kommen, nicht vom AI Transformation Manager)
- Governance hat mindestens Stufe 1 Tools freigegeben (sonst gibt es keine offiziellen Kanäle)

**Durchführung:**
1. Vorbereitung (1 Woche): Leadership-Briefing, Kommunikation vorbereiten, offizielle Tool-Liste bereitstellen
2. Team-Event (60 Min): Leadership erklärt die Amnestie, zeigt offizielle Alternativen, beantwortet Fragen
3. Erfassung (1 Woche): Anonyme Umfrage "Welche AI-Tools nutzt du heute?" — nur zur Bedarfsermittlung, nicht zur Kontrolle
4. Follow-up (2 Wochen): Offizielle Wege für die häufigsten Shadow-AI-Use-Cases bereitstellen

**Fallstricke:**
- Amnestie ohne echte Alternativen ist wertlos → Dimension T muss mindestens Basis-Tooling bereitstellen
- Amnestie darf nicht als Kontroll-Instrument wahrgenommen werden → Kommunikation ist entscheidend
- Einmalige Aktion reicht nicht → regelmäßig wiederholen, dass die Kultur sich geändert hat

**Messbare Wirkung:** Shadow-AI-Rate sinkt bei gleichzeitig steigender offizieller Tool-Nutzung (messbar über Dimension A)

---

### R-SK-1: Rollenspezifische Prompt Playbooks

**Kurzbeschreibung:** Konkrete, sofort nutzbare Prompt-Vorlagen für typische Aufgaben jeder Rolle im Team.

**Voraussetzungen:**
- Mindestens ein AI-Tool ist offiziell verfügbar
- Champion oder Technical Lead, der die Playbooks erstellt

**Durchführung:**
1. Use Cases sammeln (2h): Pro Rolle die 3–5 häufigsten Aufgaben identifizieren (z.B. Dev: Code Review, Bug Analysis, Test Writing; QA: Testfall-Erstellung, Testdaten; PO: Story Refinement, Akzeptanzkriterien)
2. Prompts entwickeln (2–3 Tage): Pro Use Case ein konkretes Prompt-Template mit Beispiel-Input und erwarteter Output
3. Format: Problem → Kontext-Setup → Prompt → Variationen → "Was tun wenn es nicht klappt"
4. Veröffentlichen (Wiki, Confluence, oder Git-Repo) und im Team vorstellen (30 Min)
5. Iterieren: Feedback nach 2 Wochen einholen, Playbooks aktualisieren

**Fallstricke:**
- Zu generische Prompts ("Schreibe besseren Code") → müssen aus echten Team-Aufgaben kommen
- Einmal erstellt und nie aktualisiert → quartalsweisen Review-Zyklus einplanen
- Playbooks ohne Pair-Prompting → viele Menschen lernen besser durch Zeigen als durch Lesen

**Messbare Wirkung:** Nutzung der Playbooks (Views/Downloads), R-M-SKILL Score, Adoption Rate (Dimension A)

---

### R-RE-1: "Meine Rolle 2026" Workshop

**Kurzbeschreibung:** Moderierter 2h-Workshop, in dem jedes Teammitglied erarbeitet, wie sich seine Rolle mit AI verändert.

**Voraussetzungen:**
- Rollenentwicklungsmodell aus dem Framework als Input
- Moderation durch Change & People Lead oder externen Coach
- Raum für offenen Austausch (keine Management-Beobachtung)

**Durchführung:**
1. Einstieg (15 Min): Rollenentwicklungsmodell vorstellen (→ Framework Kap. 2.2)
2. Einzelarbeit (20 Min): "Meine 3 häufigsten Aufgaben" → "Was davon kann AI?" → "Was bleibt bei mir?"
3. Kleingruppen (30 Min): Austausch zu dritt, gemeinsame Muster erkennen
4. Plenum (30 Min): Ergebnisse sammeln, Ängste benennen dürfen, Chancen identifizieren
5. Persönliche Entwicklungs-Skizze (15 Min): Jede:r notiert 2–3 Punkte: "Das will ich als nächstes lernen / stärken"
6. Abschluss (10 Min): Nächste Schritte, Lernpfade zeigen, Champion als Ansprechpartner benennen

**Fallstricke:**
- Workshop als einmalige Aktion → Follow-up durch Job Crafting Gespräche (R-RE-3) sicherstellen
- Ängste werden benannt, aber nicht adressiert → Leadership muss verbindlich reagieren
- Zu abstrakt → immer mit konkreten Beispielen aus dem Team-Kontext arbeiten

**Messbare Wirkung:** R-M-ROLE Score, qualitatives Feedback aus Retros, reduzierte Angst-Aussagen in Surveys

---

### R-SU-1: Champion identifizieren & mandatieren

**Kurzbeschreibung:** Formale Benennung von 1–2 AI Champions pro Team mit dediziertem Zeitbudget.

**Voraussetzungen:**
- Management-Commitment für Zeitbudget (mindestens 20% = 1 Tag/Woche)
- Freiwillige aus dem Team (nicht verordnet)

**Durchführung:**
1. Kandidaten identifizieren (1 Woche): Wer nutzt AI bereits aktiv? Wer hilft anderen informell? Diagnostik R-MC-BLOCKER = "Nichts hemmt mich" → potenzielle Champions
2. Gespräch mit Kandidaten: Rolle erklären, Erwartungen klären, Zeitbudget zusichern
3. Formale Benennung: Manager, Champion und AI Transformation Manager unterschreiben Vereinbarung (Rolle, Zeitbudget, Erwartungen, Dauer)
4. Champion Onboarding: Kickoff-Gespräch mit AI Transformation Manager, Zugang zu Champion-Netzwerk, Einführung in Tools und Ressourcen
5. Erste Office Hours nach 2 Wochen starten

**Fallstricke:**
- Zeitbudget wird zugesagt, aber im Sprint nicht berücksichtigt → Sprint-Kapazität reduzieren
- Champion wird "von oben bestimmt" → Freiwilligkeit ist kritisch für Glaubwürdigkeit
- Champion ohne Anbindung an AI Transformation Manager → isoliert, verliert Motivation

**Messbare Wirkung:** Champion ist benannt und hat nachweislich dedizierte Zeit. R-M-SUPPORT Score steigt. Team hat Anlaufstelle.

---

## 8. Priorisierungsmatrix

Für die schnelle Auswahl: Welche Interventionen bringen den größten Hebel bei geringstem Aufwand?

| Intervention | Aufwand | Wirkung | Empfehlung |
|---|---|---|---|
| R-PS-2 Leadership Goes First | Sehr niedrig | Mittel | **Quick Win** — sofort starten |
| R-SK-1 Prompt Playbooks | Niedrig | Hoch | **Quick Win** — größter Hebel für Skills |
| R-PS-5 AI in Retros | Sehr niedrig | Mittel | **Quick Win** — einfach einführbar |
| R-SK-2 Pair-Prompting | Niedrig | Hoch | **Quick Win** — beliebtestes Format laut Diagnostik |
| R-SU-2 AI Office Hours | Niedrig | Mittel | **Quick Win** — setzt Champion voraus |
| R-RE-1 Rolle 2026 Workshop | Mittel | Hoch | **Priorität** — adressiert Angst-Blocker |
| R-PS-1 Shadow AI Amnestie | Mittel | Hoch | **Priorität** — braucht Leadership |
| R-SU-1 Champion mandatieren | Mittel | Sehr hoch | **Priorität** — Voraussetzung für Skalierung |
| R-PS-3 Experimentier-Budget | Niedrig (Entscheidung), Hoch (Kapazität) | Hoch | **Strategisch** — Management muss entscheiden |
| R-RE-4 Lernpfade pro Rolle | Hoch | Hoch | **Strategisch** — nachhaltig, aber braucht Vorlauf |
| R-RE-6 HR-Integration | Hoch | Sehr hoch | **Strategisch** — nachhaltigste Wirkung, längster Vorlauf |

---

## 9. Anhang

### Beziehung zu CRAFT Explorer Fragen

| Deep-Dive Frage | Sub-Topic | Interventions-Bereich |
|---|---|---|
| R-M-SAFETY | Psychologische Sicherheit | R-PS-1 bis R-PS-6 |
| R-M-SKILL | Skill-Level & Vertrauen | R-SK-1 bis R-SK-6 |
| R-M-ROLE | Rollenentwicklung & Klarheit | R-RE-1 bis R-RE-6 |
| R-M-SUPPORT | Peer-Support & Champions | R-SU-1 bis R-SU-6 |
| R-MC-BLOCKER | Diagnostik → Ursache | Kap. 4.1 Blocker-Analyse |
| R-MC-ENABLEMENT | Diagnostik → Hebel | Kap. 4.2 Enablement-Hebel |
| R-PQ | Qualitative Vertiefung | Kap. 5 Powerful Questions |

### Referenzen

- Framework-Vollversion: `framework/ai-transformation-framework-craft.md` (Kap. 2.2)
- Deep-Dive Readiness: `deliverables/question_banks/deep-dive-readiness.yaml`
- Scoring-Methodik: `deliverables/question_banks/METHODOLOGY.md`
- Rollenentwicklungsmodell: Framework Kap. 2.2 (Tabelle)

---

**Nächste Schritte:**
- [ ] Interventionskataloge für C, A, F, T erstellen (nach gleichem Muster)
- [ ] Steckbriefe für alle Interventionen vervollständigen (Kap. 7 erweitern)
- [ ] Integration in CRAFT Explorer App: Score → Interventionsvorschläge automatisieren
- [ ] Pilotierung: Katalog mit erstem Team testen und Feedback einarbeiten
