# AI Transformation Roadmap — Teams-First Ansatz
## 8-Monats-Perspektive: Mai – Dezember 2026

**Erstellt:** April 2026  
**Erstellt durch:** AI Transformation Manager  
**Methodik:** CRAFT AI Transformation Framework v1.0  
**Status:** Entwurf — zur Abstimmung mit Management

---

## Business-Ziele der AI Transformation

Die AI Transformation verfolgt drei gleichrangige Zielsetzungen. Sie bilden den Rahmen, an dem alle CRAFT-Aktivitäten gemessen werden.

### Ziel 1 — Effizienz: Kosten und Aufwand senken

**Leitfrage:** Wo kostet uns die heutige Arbeitsweise mehr als nötig — und wo kann AI systematisch entlasten?

Das Management-Ziel von "30% Automatisierung" adressiert diese Dimension. Es muss präzisiert werden: 30% welcher Aktivitäten, gemessen an was? Das ist Aufgabe von Phase 0.

| Kennzahl | Baseline | Ziel | Wann messbar |
|---|---|---|---|
| Anteil automatisiert bearbeiteter Tickets (definierte Kategorien) | TBD | ≥ 30% der definierten Kategorien | Ab Zyklus 1 |
| Durchschnittliche Lead Time (Ziel-Ticketkategorien) | TBD | –X% vs. Baseline | Ab Zyklus 1 |
| Tooling-Nutzung (DAU/Team) | TBD | ≥ 60% der Entwickler täglich | Ab Skalierungsphase |

### Ziel 2 — Qualität: Bessere Ergebnisse, weniger Fehler

**Leitfrage:** Wo entstehen heute Qualitätsprobleme, die AI-Unterstützung systematisch reduzieren kann?

Qualität ist kein Nebeneffekt von Effizienz — sie ist ein eigenständiges Ziel. AI-gestützte Reviews, Testgenerierung und konsistentere Dokumentation können die Fehlerrate senken, ohne dass die Geschwindigkeit das Primärziel ist.

| Kennzahl | Baseline | Ziel | Wann messbar |
|---|---|---|---|
| Change Failure Rate (DORA) | TBD | –X% vs. Baseline | Ab Zyklus 1 |
| Testabdeckung (automatisch generierte Tests) | TBD | +X Prozentpunkte | Ab Zyklus 2 |
| Review-Zyklen je Ticket (Durchschnitt) | TBD | Reduktion vs. Baseline | Ab Zyklus 1 |

### Ziel 3 — Erfahrung und organisationale Lernfähigkeit aufbauen

**Leitfrage:** Was wollen wir als Organisation über AI in unserem spezifischen Kontext gelernt haben — und wie fließt dieses Wissen in weitere geplante Initiativen?

Dieses Ziel ist strategisch und oft unterschätzt. Die Transformation ist nicht nur ein Effizienz-Programm — sie ist eine kontrollierte Lernumgebung. Was in air-gapped Umgebungen mit lokalen Modellen funktioniert, welche Ticketkategorien wirklich automatisierbar sind, wie Teams auf AI-Tooling reagieren: das ist Wissen, das für Folgeinitiativen direkt nutzbar ist.

| Was wir lernen wollen | Wie wir es erheben | Verwendung |
|---|---|---|
| Welche Ticketkategorien sind unter public-1 tatsächlich automatisierbar? | Pilotzyklen 1–2, Qualitätsmessung | Scope-Definition für Skalierung und Folgeinitiativen |
| Wie verändert sich AI-Reife (CRAFT-Score) über Zyklen? | Pulse Check je 4 Wochen | Steuerung der Transformation, Benchmark für weitere Teams |
| Welche Interventionen wirken — welche nicht? | Business Problem Check, Retrospektiven | Interventionskatalog für das Projekt und darüber hinaus |
| Was brauchen Teams, um AI nachhaltig zu nutzen (nicht nur kurzfristig)? | CRAFT Dimension R, Champion-Feedback | Skalierungsdesign, HR-Konsequenzen, Rollenbilder |

> Baselines für alle drei Ziele werden in Phase 1 erhoben. Ohne Baseline ist kein Delta messbar — und kein Erfolg belegbar.

---

## Grundsatz-Entscheidung: Bestehende Teams statt dediziertem Projektteam

**Probleme am "dediziertes AI-Projektteam"-Ansatz:**

- **Brain Drain in den Quellteams** — die AI-affinsten Personen werden herausgezogen, also genau die, die eigentlich die Transformation in ihren Teams tragen sollten. Die Teams werden dadurch AI-ärmer, nicht AI-reifer.
- **Rückkehr-Illusion** — nach 10–14 Wochen in einem Sonderteam ist die Reintegration in der Praxis schwieriger als geplant. Die Teams haben sich ohne sie entwickelt, die Rückkehrenden fühlen sich als Fremde.
- **Wissenstransfer ist das ungelöste Problem** — Wissen entsteht im Sonderkontext, landet aber nicht wirklich im Alltag der Teams. Das ist der häufigste Scheiterpunkt in Consulting-Projekten.
- **Elite-Dynamik** — ein Sonderteam schafft ein "die vs. wir"-Gefühl. Die übrigen Personen sehen ein Eliteprojekt, nicht ihre eigene Transformation.
- **Verzögerung** — die echten Teams starten ihre Transformation erst in Monat 4, nicht jetzt.

**Warum "in bestehenden Teams" besser ist:**

- Transformation passiert dort, wo die Arbeit ist — nicht in einer parallelen Struktur.
- Ein Kollege im gleichen Team, der ein Problem mit AI löst, wirkt mehr als ein externer Change Agent.
- Feedback-Loops sind direkt: wenn ein Tool nicht funktioniert, zeigt sich das sofort im realen Kontext.
- Psychological Safety bleibt im vertrauten Team erhalten.
- Das AI Adoption Team ist keine Projektstruktur — es ist eine koordinierende Querschnittsfunktion.

---

## AI Adoption Team — Warum, Was, Wer

### Warum brauchen wir ein AI Adoption Team?

AI Transformation ist kein Projekt mit definierbarem Ende. Sie ist eine parallele Betriebsform, die neben dem laufenden Entwicklungsbetrieb läuft — und genau deshalb braucht sie eine dedizierte koordinierende Struktur.

Ohne diese Struktur entstehen bekannte Muster:

- **Unkontrollierte Einzelinitiativen** — jedes Team macht sein eigenes Ding, Shadow AI wird zum Standard, Governance-Risiken häufen sich
- **Fehlende Messung** — niemand aggregiert, ob die Transformation wirkt; das 30%-Ziel bleibt unbeweisbar
- **Kein gemeinsames Lernen** — was Team A herausfindet, hilft Team B nie, weil es keinen Kanal gibt
- **Governance-Lücken** — technische und fachliche Aktivitäten passieren ohne Abstimmung mit Compliance, was zu Rückrufen und Vertrauensverlust führt
- **Fehlende Verbindung zum Business-Ziel** — operative Aktivitäten in den Teams (Tools, Prozesse) entkoppeln sich von den Metriken, die das Management interessieren

Das AI Adoption Team ist die Antwort auf genau diese Muster. Es ist kein Linienhierarchie-Element, sondern eine **koordinierende Querschnittsfunktion** — für die Dauer der Transformation.

---

### Was ist seine Aufgabe?

Das AI Adoption Team hat drei Kernaufgaben:

**1. Transformation steuern**
- CRAFT-Zyklen taktieren: alle 4 Wochen Pulse Check + Business Problem Check + Readiness Gate
- Interventionen auswählen, priorisieren und in Teams einbringen
- Kurskorrektur wenn Metriken stagnieren oder Blocker auftauchen

**2. Business-Verbindung halten**
- Sponsor-Kommunikation: was wurde erreicht, was kommt als nächstes
- Business-Impact-Kennzahlen definieren und laufend messen
- Sicherstellen, dass operative Aktivitäten das tatsächliche Business-Problem adressieren

**3. Teams verbinden und gemeinsames Lernen ermöglichen**
- Champions-Netzwerk aufbauen und pflegen (je 1 Champion pro Team)
- Was ein Team lernt, fließt zum nächsten — strukturiert, nicht zufällig
- Interventionskatalog pflegen: was hat wo gewirkt?

---

### Welche fachlichen Dimensionen müssen verankert sein?

Das CRAFT Framework benennt 5 Dimensionen, die bei jeder AI Transformation gleichzeitig aktiv sein müssen. Das AI Adoption Team muss alle 5 abdecken — nicht jede Person jede Dimension, aber jede Dimension muss eine klare Heimat haben:

| Dimension | Inhalt | Verantwortung im Team |
|---|---|---|
| **C — Compliance & Governance** | EU AI Act, Betriebsrat, Datenschutz, public-1-Grenzen, Policy-Rahmen | Governance Liaison |
| **R — Readiness (Human & Cultural)** | Rollenentwicklung, Psychological Safety, Shadow AI Amnestie, Champion-Aufbau, ADKAR | People & Staffing Lead |
| **A — Adoption & Usage** | Nutzungsmessung (DAU), AI-Tiefe je Team, SDLC-Phasenabdeckung, Adoption-Tracking | AI Transformation Manager |
| **F — Flow & Process Integration** | Value Stream Mapping, Bottleneck-Analyse, AI-Interventionen nach SDLC-Phase | Value Stream Coach |
| **T — Technical Enablement** | Tools, Modell-Anbindung, IDE-Integration, Prompt Libraries, Pipeline-Architektur | Technical AI Lead |

> Die häufigste Fehlerquelle in AI-Transformationen: Dimension T wird besetzt, Dimension R und F werden vergessen. Das Ergebnis: gute Tools, die niemand nutzt, an den falschen Stellen.

---

### Was haben wir — was brauchen wir noch?

**Besetzt:**

| Person | Rolle im AI Adoption Team | CRAFT-Dimension(en) | Anmerkung |
|---|---|---|---|
| AI Transformation Managment | Orchestrierung, Zyklus-Steuerung, Messung, Sponsor-Kommunikation | A (primär), F (Support) | — |
| Org-Enablering | Organisatorische Anbindung, Raum schaffen, Kapazitäten freischaufeln, Management-/Sponsor-Interface | Enabler-Funktion (keine CRAFT-Dimension direkt, aber Voraussetzung für alle) | Deckt die Dimension R **nicht** ab — ist Org-Enabler, nicht Change & People Lead |
| Technical AI Experience | Tooling, Modell-Anbindung, IDE-Integration, technische Teambegleitung | T (primär), A (Support: wie wird AI konkret im SDLC eingesetzt?) | Adoption-Mitgestaltung möglich, Technical bleibt Kern |

**Offen:**

| Rolle | CRAFT-Dimension | Priorität | Mögliche Lösung |
|---|---|---|---|
| **Change & People Fokus** | R — Readiness (Human & Cultural) | **Hoch — größte aktuelle Lücke.** Psychological Safety, ADKAR-Begleitung, Champion-Onboarding, Umgang mit Widerstand: das sind keine Nebenaufgaben, sondern der häufigste Scheiterpunkt von AI Transformationen | Interne Person mit Change-Management-Erfahrung identifizieren; alternativ externe Begleitung für die Pilotphase |
| **Governance / Data Fokus** | C — Compliance & Governance | Kritisch für public-1 — muss vor Phase 1 geklärt sein | Keine neue Stelle nötig — bestehende Compliance-/Datenschutzfunktion in der Organisation einbinden und als Liaison benennen; Ansprechpartner sind bereits bekannt |

**Zum Stand Dimension F:**
Flow & Process Integration wird durch den ATM mit abgedeckt (Value Stream Snapshot, Bottleneck-Analyse). Für die Pilotphase mit 1–2 Teams ausreichend. Bei Skalierung auf weitere Teams neu bewerten.

**Rollenpapier-Empfehlung:**
Das Rollenpapier (1 Seite) sollte explizit festhalten, wer welche Dimension verantwortet. Es verhindert Doppelzuständigkeiten und schafft Klarheit darüber, wo Entscheidungen getroffen werden — nicht als Hierarchiedokument, sondern als Arbeitsverteilung im Sinne des Frameworks.

> Das Rollenpapier sollte als "CRAFT Adoption Team Setup" verankert werden — als Methodik-Anforderung des Frameworks.

---

## Roadmap

### PHASE 0 — AI Adoption Team konstituieren
**Zeitraum:** Sofort / KW 18–19 (~1 Woche)  
**Ziel:** Klare Struktur, bevor die Transformation startet

- Rollenpapier erstellen (1 Seite, CRAFT-basiert) — wer entscheidet was
- **Manager-Gespräch: 30%-Ziel operationalisieren**
  - Welche Ticketkategorien sind gemeint?
  - Was gilt als "automatisiert bearbeitet"?
  - Ergebnis: schriftliche Zieldefinition + Auftrag Baseline-Erhebung
  - Empfehlung: *"Ich möchte sicherstellen, dass wir das Ziel so definieren, dass wir es am Ende belegen können. Welche Ticketkategorien stehen im Fokus — und was gilt als 'automatisiert': vollständig ohne menschliche Prüfung, oder AI hat die Arbeit gemacht und ein Mensch hat bestätigt?"*
- **Governance-Check beauftragen**
  - Welche Daten/Inhalte dürfen durch das Modell?
  - Wenn unklar: kritischer Pfad — alles andere wartet

---

### PHASE 1 — CRAFT-Baseline & Startteam-Auswahl
**Zeitraum:** KW 19–20 (~2 Wochen)  
**Ziel:** Verstehen wo wir stehen, bevor wir loslaufen

- **Context Assessment mit allen 4 Kandidatenteams**
  - Je 45–60 min Gespräch mit Software Lead + 1–2 Personen
  - Fragen aus CRAFT Context Readiness (Ebene 1)
  - Parallel: kurze Selbsteinschätzung per Pulse Check
  - Ziel: Reifegrad einschätzen, Offenheit ertasten, potenzielle Champions identifizieren

- **Ticketkategorien-Analyse (parallel)**
  - VSM-Blick: Welche Ticket-Typen gibt es?
  - Welche sind automatisierbar (Dependency-Updates, Docs, Tests, kleine Bugfixes)?
  - Volumenschätzung: Wie viel % des Gesamtvolumens?
  - Ergebnis: konkrete Basis für 30%-Gespräch mit Manager

- **Startteam-Auswahl: 1–2 Teams**

  Auswahlkriterien (transparent, nicht politisch):
  - Höchster CRAFT-Score in Readiness & Technical
  - Software Lead signalisiert Bereitschaft
  - Potenzielle Champions erkennbar
  - Tickets aus automatisierbaren Kategorien vorhanden

  Ergebnis im AI Adoption Team abstimmen + kurze Information an Sponsor (1 Seite)

---

### PHASE 2 — Kickoff mit Startteams
**Zeitraum:** KW 21 (~1 Woche)  
**Ziel:** Commitment, Baseline, erste Richtung

- **CRAFT Deep-Dive je Startteam** (2–3h Workshop)
  - Alle 5 Dimensionen, Spider-Chart als Output
  - Shadow AI Amnestie: "Was nutzt ihr schon?" — offen, keine Konsequenzen, Erkenntnisinteresse
  - Hypothesen für erste Interventionen entwickeln
  - Das Team entwickelt das gemeinsam — kein Präsentationsformat

- **Champions ansprechen**
  - 1 Person pro Team, die Lust hat tiefer reinzugehen
  - Commitment: ~20–30% für AI-Themen im eigenen Team
  - Bleibt im Team — kein Herauslösen, Rolle als Peer
  - Direkter Kanal zum AI Adoption Team

- **Tooling-Setup** (Technical AI Lead führt durch)
  - Continue.dev / Cline, Modell-Anbindung
  - In der ersten Team-Session demonstrieren, nicht vorab

- Readiness Gate Entscheidung: Bereit für Zyklus 1?

---

### PHASE 3 — Zyklus 1 (4 Wochen)
**Zeitraum:** KW 22–25 / Juni  
**Ziel:** Erste messbare Ergebnisse, Muster verstehen

**Woche 1: Maßnahmenplan pro Team**
- Basierend auf Deep-Dive: Welche 1–2 Interventionen?
- SDLC-Phase + Ticketkategorie + Werkzeug
- Metriken festlegen (Lead Time, Automatisierungsrate)

**Woche 2–3: Teams arbeiten**
- Teams nutzen AI-Tooling an echten Tickets
- Champions als erste Anlaufstelle im Team
- ATM: wöchentlicher kurzer Check-in mit Champions (Champions sind die Brücke, kein direktes Hineinarbeiten in Teams)

**Woche 4: Business Problem Check**
- Kennzahlen: Was hat sich gemessen verändert?
- CRAFT Pulse Check (16 Fragen, ~15 min)
- AI Adoption Team: Was lernen wir aus beiden Teams?
- Readiness Gate: Erweitern / Vertiefen / Konsolidieren
- Kurzes Update an Sponsor (1–2 Slides)

---

### PHASE 4 — Weitere Teams (ab Zyklus 2)
**Zeitraum:** Ab KW 26, wenn Readiness Gate "Erweitern"  
**Ziel:** Skalierung durch Peer-Effekt

- Champions aus Startteams begleiten neue Teams — Peer überzeugt Peer
- Erkenntnisse aus Zyklus 1 fließen direkt ein
- ATM koordiniert, Champions tragen
- Messung aggregieren: Gesamtbild für Manager

---

## Strukturelle Leitprinzipien

**Framework als Entscheidungsreferenz**
Wenn Interventionen oder Rollen diskutiert werden: Bezug auf das CRAFT Framework herstellen. "Das CRAFT Framework empfiehlt X, weil Y" ist strukturell stabiler als eine persönliche Meinung — und nimmt Reibung aus Rollendiskussionen heraus.

**Wer definiert, was gemessen wird, führt**
Das Klärungsgespräch zum 30%-Ziel ist keine administrative Pflicht. Wer die KPIs definiert, steuert die Wahrnehmung des Erfolgs. Der ATM ist der Autor der Messung.

**Champions als strukturelle Verbindung zu den Teams**
Der Einfluss des AI Adoption Teams in den Teams läuft über die Champions — nicht über direkte Präsenz. Wenn diese Beziehungen früh aufgebaut werden, entstehen direkte Kontakte in jedem Team. Das ist strukturelle Stärke, die keine kontinuierliche Intervention erfordert.

---

**Version:** 0.1  
**Nächste Review:** Nach Klärungsgespräch mit Management (Phase 0)  
**Referenz:** CRAFT AI Transformation Framework v1.0 | `framework/ai-transformation-framework-craft.md`
