# CRAFT Applied Guide — Erstellungs-Roadmap

**Ziel:** Ein operativer Leitfaden für AI Transformation Manager, der beschreibt, wie eine AI-Transformation *konkret* durchgeführt wird — Schritt für Schritt, mit ADKAR als Individual-Change-Methode, Kotter als organisationalem Change-Rahmen und PDCA/CRAFT als Steuerungsmodell.

**Ausgabe-Datei:** `deliverables/craft-applied-guide.md`
**Zielgruppe des Guides:** AI Transformation Manager, Change & People Lead
**Verhältnis zum Framework:** Companion-Dokument — das Framework beschreibt *Was & Warum*, der Guide beschreibt *Wie & Wann*

---

## Methodisches Fundament (vor Beginn zu klären)

### Drei-Ebenen-Modell: Wie die Methoden zusammenwirken

| Ebene | Methode | Steuerungsgegenstand | Einsatzort im Guide |
|---|---|---|---|
| **Gesamtsteuerung** | PDCA / CRAFT | Wohin gehen wir? Was messen wir? Wann skalieren? | Roter Faden, Zyklusstruktur |
| **Organisations-Change** | Kotter 8 Accelerators | Wie bewegen wir die Organisation? Wer trägt die Veränderung? | Phasen 1–3, Skalierung |
| **Individual-Change** | ADKAR (Prosci) | Wo steht jede einzelne Person? Was braucht sie jetzt? | Durchgängig als Diagnose-Linse |

**Kernprinzip:** ADKAR ist keine Sequenz, die man einmal durchläuft — es ist eine Diagnosefrage, die man bei *jeder Interaktion* mit jeder Person stellen kann: *"Wo steht diese Person gerade — fehlt ihr Awareness, Desire, Knowledge, Ability oder Reinforcement?"*

---

## Phase A: Konzept & Struktur

> Ziel: Einigkeit über Scope, Format und Gliederung des Guides — bevor Inhalte entstehen.

### A.1 Scope-Entscheidungen
- [ ] Zeitraum: Für welchen Zeithorizont gilt der Guide? (Empfehlung: 0–12 Wochen / Zyklus 1–3)
- [ ] Detailtiefe: Handlungsanleitung mit konkreten Schritten, Fragen und Workshop-Designs — kein weiteres Konzeptpapier
- [ ] Umgang mit Varianz: Ein generischer Pfad mit Hinweisen auf Kontext-Profile (Agil, Enterprise Reguliert etc.) — kein separater Guide pro Profil
- [ ] Abgrenzung zu Kap. 8 (Engagement-Architektur im Framework): Guide = intern für ATM-Perspektive; Kap. 8 = extern für Sponsor-Perspektive

### A.2 Struktur-Entscheidung
**Vorschlag:** Sieben Phasen mit explizitem ADKAR-Kotter-CRAFT-Mapping pro Phase

```
Pre-Work     Business Impact Discovery & Vorbereitung
Phase 1      Guiding Coalition finden (Kotter: Urgency + Coalition | ADKAR: Awareness)
Phase 2      Key-Player-Gespräche & Early Adopter-Kartierung (Kotter: Volunteer Army | ADKAR: Desire)
Phase 3      Kickoff-Workshop: Gemeinsame Vision & Shadow AI Amnestie (Kotter: Vision | ADKAR: Desire → Knowledge)
Phase 4      Erster Deep Dive & Ergebnis-Workshop (CRAFT: Baseline | ADKAR: Knowledge)
Phase 5      Erste CRAFT-Zyklen: Tooling & Quick Wins (PDCA: Do | ADKAR: Ability)
Phase 6      Business Problem Check & Ergebnisse feiern (Kotter: Short-term Wins | ADKAR: Reinforcement)
Phase 7+     Readiness Gate & Skalierungsentscheidung (CRAFT: Gate | ADKAR: Reinforcement institutionalisieren)
```

- [ ] Struktur bestätigen oder anpassen

### A.3 Format-Entscheidungen
- [ ] Jede Phase enthält als Standard-Elemente: Ziel der Phase, ADKAR-Status (Ziel-Stufe), aktive Kotter-Steps, CRAFT-Werkzeuge, **Aktive Rollen in dieser Phase**, Konkrete Aktivitäten/Schritte, Dauer/Timing, Diagnose-Fragen für ATM, Typische Stolpersteine
- [ ] Arbeitstools je Phase (Checklisten, Fragen, Workshop-Designs): inline oder als Anhang?
- [ ] Sprache: Deutsch, direkte Ansprache des ATM ("Du führst...", "Frage dabei...")

### A.4 Rollen-Aktivitäts-Matrix (neues Kernelement)

**Entscheidung:** Die Rollen des AI Adoption Teams werden auf zwei Ebenen eingebaut:

**Ebene 1 — Übergreifende Matrix (einmalig, früh im Guide, in Phase B.3):**
Eine Tabelle, die zeigt, wer in welcher Phase die Führung hat (●), unterstützt (○) oder nur informiert wird (—). Verhindert, dass der ATM alles alleine versucht.

```
Rolle              Pre  P1  P2  P3  P4  P5  P6  P7+
ATM                 ●    ●   ●   ●   ●   ●   ●   ●    Orchestrierung durchgängig
Change & People     ○    ●   ●   ●   ○   ○   ○   ○    Schwerpunkt Change Foundation
Governance Liaison  ●    ○   —   —   ○   —   —   ○    Frühzeitig klären, dann Monitoring
Value Stream Coach  ○    —   —   —   ●   ○   ●   ●    Deep Dive + Business Check
Technical AI Lead   ○    —   —   —   ○   ●   —   ●    Tooling-Phasen
Champions           —    ○   ●   ●   ●   ●   ●   ●    Ab Phase 2 zentral
```

**Ebene 2 — Inline in jeder Phase (C bis F):**
Jede Phase-Beschreibung bekommt einen Abschnitt `Aktive Rollen` mit: wer, was konkret, wie viel Zeit.

- [ ] Matrix-Format und Legende bestätigen
- [ ] Entscheiden: Mindestbesetzung explizit ausweisen? (z.B. "Diese Phase geht auch ohne Value Stream Coach, wenn...")

---

## Phase B: Pre-Work Kapitel

> Ziel: Was muss der AI Transformation Manager *vor* dem ersten Termin beim Kunden erledigt haben?

### B.1 Business Impact Discovery
- [ ] Verweis auf `business-impact-discovery.md` — wie führt man dieses Gespräch?
- [ ] Ergebnis: 2–3 North Star Metrics, die das Business-Problem messen
- [ ] Typische Fallstricke: Metriken, die sich nicht messen lassen; Sponsor hat kein klares Problem

### B.2 Kontext-Analyse
- [ ] Kontext-Profil vorläufig bestimmen (Agil / Enterprise Reguliert / Public Sector / Konzern Liberal)
- [ ] Commercial Flow Check vorab: T&M oder Festpreis? — beeinflusst Spielraum für Champions
- [ ] Governance-Status vorab: Was ist schon genehmigt? Wo gibt es BR-Themen?

### B.3 AI Adoption Team aufbauen
- [ ] Wer ist schon verfügbar? Wer fehlt noch?
- [ ] Mindestbesetzung für Pilot definieren (ATM + 1 Champion + Sponsor-Zugang)
- [ ] Rollen mit Zeitbudgets klären (vgl. Framework Kap. 6.2)
- [ ] **Rollen-Aktivitäts-Matrix** hier platzieren (aus A.4) — damit der ATM von Anfang an weiß, wann er wen braucht
- [ ] Pro Rolle: Kurzes Profil ("Woran erkenne ich eine gute Change & People Lead?"), typische Fallstricke bei Unterbesetzung, Workaround wenn Rolle fehlt

---

## Phase C: Change Foundation (Phasen 1–3 des Guides)

> Ziel: Die menschliche Basis der Transformation — Coalition, Unterstützer, gemeinsames Bild. Entspricht ADKAR-Ziel: Awareness → Desire.

### C.1 Phase 1 ausarbeiten — Guiding Coalition
- [ ] Wie identifiziert man die richtigen Personen für die Coalition? (Machtposition, Glaubwürdigkeit, Offenheit)
- [ ] Konkrete Gesprächsleitfragen für das erste Coalition-Gespräch
- [ ] Kotter-Link: Urgency erzeugen — ohne Drama, mit echter Datenlage (North Star + CRAFT-Kontext)
- [ ] ADKAR-Diagnose: Ist Awareness da? Wenn nicht — was fehlt konkret?
- [ ] **Aktive Rollen:** ATM führt (alle Gespräche), Change & People Lead begleitet optional; Governance Liaison liefert vorab Compliance-Kontext
- [ ] Dauer/Timing: ~1 Woche, 3–5 Gespräche à 45 Min

### C.2 Phase 2 ausarbeiten — Key-Player-Gespräche
- [ ] Stakeholder-Map: Wer sind die Key Player? (Early Adopter, Skeptiker, stille Blocker)
- [ ] Gesprächsleitfaden für 1:1-Gespräche: Was treibt diese Person? Was sind ihre Ängste?
- [ ] ADKAR-Diagnose pro Person: Muster erkennen — wo steht die Mehrheit?
- [ ] Kotter-Link: Volunteer Army — wer kommt als Champion in Frage?
- [ ] **Aktive Rollen:** ATM + Change & People Lead führen gemeinsam (Aufgabenteilung: ATM = strategische Stakeholder, C&P = Team-Mitglieder); Champions werden hier identifiziert und direkt angesprochen
- [ ] Dokument: Stakeholder-Map-Template (einfach, 1 Seite)

### C.3 Phase 3 ausarbeiten — Kickoff-Workshop
- [ ] Workshop-Design: Ablauf, Zeitrahmen (2–4h), Materialien
- [ ] Kernelemente: AI-Landscape im Team (was nutzt jeder schon?), Shadow AI Amnestie einleiten, gemeinsames Problem formulieren, erste Hypothesen über AI-Hebel
- [ ] Kotter-Link: Vision gemeinsam entwickeln (nicht präsentieren)
- [ ] ADKAR-Ziel: Desire erzeugen — Teilnehmer verlassen den Workshop mit persönlichem Bezug
- [ ] **Aktive Rollen:** ATM moderiert, Change & People Lead co-moderiert (Emotion + Sicherheit), Champions sitzen bereits im Raum als sichtbare Verbündete; Technical AI Lead optional für Tool-Demo
- [ ] Mögliche Übungen: AI-Tool-Demo, "Day in the Life with AI", Concern-Harvesting

---

## Phase D: CRAFT Explorer Integration (Phase 4 des Guides)

> Ziel: Den ersten Deep Dive als Wissens- und Orientierungsmoment nutzen. ADKAR-Ziel: Knowledge aufbauen.

### D.1 Phase 4 ausarbeiten — Erster Deep Dive
- [ ] Vorbereitung: Wie erklärt man dem Team den Sinn des Deep Dive? (Kein Assessment, sondern gemeinsame Orientierung)
- [ ] Durchführungshinweise: Wer macht es? (Team eigenständig) Was ist Rolle des ATM dabei?
- [ ] Ergebnis-Workshop: Wie liest man den Spider-Chart gemeinsam? Was ist ein gutes vs. schlechtes Ergebnis?
- [ ] Übersetzung Ergebnisse → Interventionen: Welche 2–3 Prioritäten folgen daraus?
- [ ] Verbindung zu North Star Metrics: "Was bewegt unsere Top-Priorität auf unserem Ziel?"
- [ ] ADKAR-Diagnose nach Deep Dive: Hat das Team jetzt Knowledge? Was fehlt noch?
- [ ] **Aktive Rollen:** ATM moderiert Ergebnis-Workshop; Value Stream Coach interpretiert Flow-Dimension und leitet erste VSM-Hypothesen ab; Technical AI Lead bewertet T-Score und schlägt konkretes Tooling vor; Change & People Lead liest R-Score und identifiziert Psychological-Safety-Bedarf

---

## Phase E: Erste Zyklen (Phasen 5–6 des Guides)

> Ziel: Vom Wissen zum Tun. ADKAR-Ziel: Ability aufbauen, erste Reinforcement-Momente schaffen.

### E.1 Phase 5 ausarbeiten — Erste CRAFT-Zyklen
- [ ] Wie startet man den ersten Zyklus operativ? (Pulse Check, Zieldefinition, Tool-Einführung)
- [ ] Champion-Aktivierung: Was tun Champions in Woche 1–3 konkret?
- [ ] Typische Quick-Win-Kandidaten nach Kontext (z.B. Code Review mit AI, Dokumentationsgenerierung)
- [ ] ATM-Wochenrhythmus: Was macht der ATM in Woche 1, 2, 3?
- [ ] ADKAR-Begleitung: Wer braucht jetzt noch Ability-Support? (Pairing, Mikro-Coaching, Drop-in-Sessions)
- [ ] **Aktive Rollen:** Technical AI Lead übernimmt Tooling-Rollout und IDE-Integration; Champions sind erste Anlaufstelle im Team (20%-Budget aktiv nutzen); Change & People Lead beobachtet Psychological Safety und greift bei Widerstand ein; ATM orchestriert und hält Überblick über alle Dimensionen

### E.2 Phase 6 ausarbeiten — Business Problem Check & Quick Wins feiern
- [ ] Business Problem Check durchführen: Wie bereitet man das vor? Welche Daten braucht man?
- [ ] Ergebnisse kommunizieren: An wen? In welchem Format? (Sponsor vs. Team)
- [ ] Kotter-Link: Short-term Wins — wie macht man sie sichtbar und attribuiert sie richtig?
- [ ] ADKAR-Ziel: Erste Reinforcement-Momente — Erfolge mit Personen verbinden, nicht mit Tools
- [ ] **Aktive Rollen:** ATM + Value Stream Coach führen Business Problem Check durch; ATM kommuniziert an Sponsor; Champions kommunizieren Erfolge ins Team (Peer-zu-Peer ist glaubwürdiger als Top-Down)
- [ ] Stolpersteine: Was tun wenn Quick Wins ausbleiben? (Diagnose, Pivot, nicht Panik)

---

## Phase F: Skalierung & Institutionalisierung (Phase 7+ des Guides)

> Ziel: Vom Einzelteam zur Organisation. ADKAR-Ziel: Reinforcement institutionalisieren.

### F.1 Readiness Gate entscheiden
- [ ] Entscheidungslogik: Erweitern / Vertiefen / Konsolidieren (vgl. Framework Kap. 4.7)
- [ ] Wer entscheidet? In welchem Setting? Mit welchen Daten?
- [ ] Kotter-Link: Skalierung über Champion-Netzwerk und Volunteer Army
- [ ] **Aktive Rollen:** ATM bereitet Gate vor, alle Rollen liefern Dimensionsfeedback; Sponsor trifft Entscheidung auf Basis CRAFT-Score + North Star Delta

### F.2 Skalierungsschritte
- [ ] Nächste Teams onboarden: Wie nutzt man das Referenzteam als Lernquelle?
- [ ] ADKAR im neuen Team: Der Zyklus beginnt von vorn — aber schneller mit Erfahrung
- [ ] Center of Excellence Aufbau (wenn relevant): Ab wann, mit wem?
- [ ] **Aktive Rollen bei Skalierung:** Champions des Pilot-Teams übernehmen Peer-Onboarding der neuen Teams; ATM-Rolle verschiebt sich von operativ zu Orchestrierung + Qualitätssicherung; Technical AI Lead standardisiert Tooling für neue Teams

---

## Phase G: Werkzeuge & Templates (Anhang des Guides)

> Fertige, direkt nutzbare Materialien, die der ATM mitnehmen kann.

### G.1 ADKAR-Diagnose-Tool
- [ ] Einfache Checkliste: Pro Person / pro Phase — wo steht sie? Was ist die passende Intervention?
- [ ] Beispiel-Interventionen pro ADKAR-Stufe im AI-Transformations-Kontext

### G.2 Stakeholder-Map-Template
- [ ] 1-Seiten-Template: Name, Rolle, ADKAR-Status, Einfluss, Strategie

### G.3 Gesprächsleitfäden
- [ ] Coalition-Gespräch (Phase 1)
- [ ] Key-Player-1:1 (Phase 2)
- [ ] ADKAR-Diagnose-Gespräch (durchgängig)

### G.4 Workshop-Designs
- [ ] Kickoff-Workshop (Phase 3, 2–4h)
- [ ] Deep Dive Ergebnis-Workshop (Phase 4, 1–2h)
- [ ] Pulse Check Review (Phase 5–6, 30 Min)

### G.5 ATM-Wochenplan-Vorlage
- [ ] Exemplarischer Wochenplan für Zyklus 1–2: Was macht der ATM wann?

---

## Phase H: Review & Konsistenz-Check

> Sicherstellen, dass Guide und Framework konsistent sind und sich gegenseitig sinnvoll referenzieren.

### H.1 Cross-Check mit Framework
- [ ] Stimmen alle CRAFT-Referenzen (Kap.-Nummern, Terminologie, Rollen)?
- [ ] Ist die Abgrenzung zu Kap. 8 (Engagement-Architektur) klar?

### H.2 Framework-Update
- [ ] Kap. 9 (Werkzeuge & Deliverables): `craft-applied-guide.md` als neues Deliverable eintragen (Status: Entwurf → fertig)
- [ ] AGENTS.md: Kurz-Referenz im Digest ergänzen

### H.3 Abnahme-Kriterien
- [ ] Ein erfahrener ATM kann den Guide ohne weitere Erklärung nutzen
- [ ] Jeder Schritt beantwortet: Was tue ich? Warum? Mit welchem Werkzeug? Wie lange?
- [ ] ADKAR-Diagnose ist an jeder Stelle des Guides anwendbar

---

## Arbeitsweise

**Pro Phase:**
1. Inhalte im Dialog entwickeln — ich schlage Formulierungen vor, du schärfst
2. Direkt in `craft-applied-guide.md` schreiben (inkrementell, Phase für Phase)
3. Fertige Phase reviewen, dann nächste Phase

**Reihenfolge:** A → B → C → D → E → F → G → H
Phasen G (Templates) können parallel zu C–F entstehen, sobald klar ist was gebraucht wird.

**Geschätzter Aufwand:**
- Phase A: ~15 Min (Struktur klären)
- Phase B: ~20 Min
- Phase C: ~45 Min (3 Phasen mit Workshop-Design)
- Phase D: ~20 Min
- Phase E: ~30 Min
- Phase F: ~20 Min
- Phase G: ~45 Min (Templates sind aufwendig)
- Phase H: ~15 Min

---

*Erstellt: 2026-04-22 | Companion zu: `framework/ai-transformation-framework-craft.md`*
