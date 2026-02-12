# CRAFT Context Exploration — Rahmenbedingungen erfassen (v1)

Stand: Feb 2026 | Draft

## Ziel

Einmalige Erfassung der **Projekt- und Organisations-Rahmenbedingungen** beim Start eines Beratungs-Engagements. Der Context bestimmt:

1. **Erwartungshaltung pro Dimension:** Was ist realistisch erreichbar? (z.B. Stufe 5 bei Compliance ist für Banking anders definiert als für Startups)
2. **Adaptive Filterung der Pulse-Check-Fragen:** Irrelevante Fragen/Optionen werden ausgeblendet, branchenspezifische ergänzt.
3. **Priorisierung:** Welche CRAFT-Dimensionen sind der kritische Pfad?
4. **Interventions-Spielraum:** Welche Hebel sind im gegebenen Rahmen überhaupt ziehbar?

**Ausgefüllt von:** Projektmanager / Engagement Lead (1–2 Personen), einmalig beim Kickoff.
**Dauer:** ~10 Minuten (19 Fragen).
**Aktualisierung:** Nur bei signifikanten Änderungen (neues Vertragsmodell, neue Branche, Reorg).

---

## 1) Projekt & Organisation (4 Fragen)

### CTX-1: Scope (Team-/Org-Größe)

**Frage:** „Wie groß ist der Bereich, den die AI-Transformation betrifft?"

| Option | Beschreibung |
|--------|-------------|
| Einzelnes Team | 2–8 Personen, ein Produktteam/Squad |
| Mehrere Teams | 9–30 Personen, z.B. ein Cluster oder Tribe |
| Bereich/Abteilung | 30–100 Personen, mehrere Cluster |
| Organisation | >100 Personen, unternehmensweiter Rollout |

**Warum wichtig:** Die Größe bestimmt die Change-Komplexität exponentiell. Ein 6-Personen-Team braucht keine Governance-Struktur; bei 100+ Personen ist ohne strukturierte Governance, Segmentierung und Champion-Netzwerk kein nachhaltiger Rollout möglich.

**Beeinflusst:** alle Dimensionen (Change-Komplexität, Governance-Tiefe, Enablement-Aufwand)

**Adaptive Wirkung:**
- Einzelnes Team → Pulse: Governance-Fragen vereinfachen, org-weite Aspekte ausblenden
- Organisation → Pulse: Segment-Auswertung wichtiger, Champion-Coverage als R-Diagnostik ergänzen

---

### CTX-2: AI-Journey-Phase

**Frage:** „Wo steht die Organisation auf ihrer AI-Reise?"

| Option | Beschreibung |
|--------|-------------|
| Noch keine Nutzung | Kein AI-Tool im Einsatz, Thema ist neu |
| Erste Experimente | Einzelne Personen probieren Tools (Chat, Copilot), kein koordinierter Ansatz |
| Gezielte Piloten | Einzelne Teams/Workflows nutzen AI strukturiert |
| Breiter Rollout | Mehrere Teams, Governance existiert, Skalierung läuft |
| Optimierung | AI etabliert, Fokus auf Vertiefung und Effizienz |

**Warum wichtig:** Der Startpunkt definiert, welche CRAFT-Dimensionen überhaupt adressierbar sind. Bei „Noch keine Nutzung" ist Flow-Integration (F) irrelevant — erst muss Adoption (A) und Enablement (T) stehen. Bei „Optimierung" dagegen sind A und T kein Engpass mehr, sondern F und C.

**Beeinflusst:** A, R (Startpunkt bestimmt realistische Ziel-Maturity)

**Adaptive Wirkung:**
- Noch keine Nutzung → Pulse: Usage-Mode-Frage (A-MC1) vereinfachen, A-M1 Stufe 1–3 fokussieren
- Optimierung → Pulse: Agentic-Modi und Multi-Agent-Fragen aktivieren

---

### CTX-3: Projekt-Typ

**Frage:** „Was ist der Haupt-Projekttyp?"

| Option | Beschreibung |
|--------|-------------|
| Greenfield | Neuentwicklung, AI-First von Anfang möglich |
| Brownfield | Bestehende Codebase, aktive Weiterentwicklung |
| Modernisierung | Legacy → Modern, Refactoring/Migration |
| Wartung/Support | Primär Bugfixes, wenig Neuentwicklung |

**Warum wichtig:** Greenfield-Projekte können AI von Anfang an in Architektur und Workflows einbauen. Bei Brownfield und Modernisierung muss AI sich in bestehende Strukturen einfügen — das erfordert andere Interventionen (inkrementell statt transformativ) und beeinflusst, welche Flow-Verbesserungen realistisch sind.

**Beeinflusst:** T (Tool-Integration), F (Workflow-Redesign-Spielraum)

**Adaptive Wirkung:**
- Greenfield → Pulse: F-MC2 betont „AI-First Workflows" statt „Bottleneck-Reduktion"
- Wartung → Pulse: F-MC2 betont „Incident Assist", „Legacy-Code-Verständnis"

---

### CTX-4: Executive Sponsorship

**Frage:** „Gibt es einen Sponsor auf Führungsebene für die AI-Transformation?"

| Option | Beschreibung |
|--------|-------------|
| C-Level mit Budget & Zeit | Dedizierter Executive Sponsor mit allokiertem Budget |
| C-Level verbal | Unterstützung signalisiert, aber kein dediziertes Budget/Mandat |
| Middle Management | Teamleiter/Abteilungsleiter treiben, kein C-Level-Sponsor |
| Kein Sponsor | Bottom-up Initiative ohne Management-Backing |

**Warum wichtig:** Ohne Executive Sponsorship scheitern ~70% aller Transformationsprojekte im ersten Jahr. Ein Sponsor sichert Budget, räumt organisatorische Blocker aus dem Weg und signalisiert kulturelle Legitimität. Ohne Sponsor funktionieren nur Bottom-up Quick Wins auf Team-Ebene.

**Beeinflusst:** R (alle Dimensionen profitieren von Sponsorship, aber besonders Readiness und Change)

**Adaptive Wirkung:**
- Kein Sponsor → Pulse: R-MC2 ergänzt „fehlendes Management-Commitment" als Hemmnis-Option

---

## 2) Business & Compliance (5 Fragen)

### CTX-5: Branche

**Frage:** „In welcher Branche ist die Organisation tätig?"

| Option | Typische Regulierung |
|--------|---------------------|
| Banking/Finance | BaFin, MaRisk, BAIT, EBA Guidelines |
| Versicherung | BaFin, VAIT, Solvency II |
| Healthcare/Pharma | MDR, HIPAA (falls US), GxP |
| Automotive/Manufacturing | TISAX, ISO 27001, UNECE |
| Public Sector | BSI IT-Grundschutz, EVB-IT |
| Technology/Software | Primär DSGVO, ggf. SOC2/ISO 27001 |
| Retail/E-Commerce | DSGVO, PCI-DSS (Zahlungsdaten) |
| Sonstige | Freitext |

**Warum wichtig:** Die Branche bestimmt den regulatorischen Rahmen und damit die Grenzen des Möglichen. Banking darf keine Public-Cloud-AI für Kundendaten nutzen, Healthcare braucht Nachvollziehbarkeit für klinische Entscheidungen. Diese Constraints sind nicht verhandelbar und bestimmen die Compliance-Dimension (C) fundamental.

**Beeinflusst:** C (Compliance-Erwartung und -Komplexität)

---

### CTX-6: Regulierungsgrad

**Frage:** „Wie stark ist die Organisation reguliert in Bezug auf AI/Datenverarbeitung?"

| Stufe | Beschreibung | Beispiele |
|-------|-------------|-----------|
| Hoch | Strenge Vorgaben: explizite Freigaben, Audit-Trails, Datenklassifizierung Pflicht, Aufsichtsbehörde | Banking (BaFin), Healthcare (MDR), Versicherung (VAIT) |
| Mittel | Branchenspezifische Standards, aber Spielräume bei Umsetzung; Zertifizierungen erforderlich | Automotive (TISAX), Public Sector (BSI), größere Unternehmen mit ISO 27001 |
| Niedrig | Primär DSGVO, wenig branchenspezifische Regulierung; Self-Governance | Software/Tech, Startups, E-Commerce (ohne Zahlungsdaten) |

**Warum wichtig:** Regulierung ist nicht binär — auch innerhalb einer Branche gibt es Abstufungen. Ein Fintech mit Vollbanklizenz hat andere Constraints als eine Banking-nahe SaaS-Firma. Der Regulierungsgrad bestimmt, wie schnell Compliance (C) aufgebaut werden muss und wie viel Spielraum bei Tool-Auswahl (T) besteht.

**Beeinflusst:** C (Compliance-Ceiling), T (Tool-Auswahl eingeschränkt)

**Adaptive Wirkung:**
- Hoch → Pulse: C-M1 Stufe 5 beschreibt „automatisierte Audit-Trails"; C-MC1 ergänzt branchenspezifische Blocker
- Niedrig → Pulse: C-Fragen auf Minimum reduzieren (Compliance ist vermutlich kein Engpass)

---

### CTX-7: Datenverarbeitungs-Standort

**Frage:** „Wo dürfen Daten in diesem Projekt verarbeitet werden?"

| Option | Beschreibung |
|--------|-------------|
| EU-Only | Nur EU-Rechenzentren (DSGVO-strict, kein US-Transfer) |
| US akzeptabel | Data Processing Agreement vorhanden, US-Verarbeitung möglich |
| Global/Flexibel | Keine standortbezogenen Einschränkungen |
| On-Premise-Only | Ausschließlich eigene Infrastruktur, keine Cloud |

**Warum wichtig:** Der Datenstandort schränkt die Tool-Auswahl massiv ein. EU-Only eliminiert viele US-Cloud-Dienste. On-Premise-Only bedeutet Self-Hosted-Modelle (z.B. Ollama, vLLM) — das ist technisch anspruchsvoller, teurer und limitiert die erreichbare Enablement-Stufe (T).

**Beeinflusst:** C (Compliance), T (Tool-Auswahl: On-Premise → nur Self-Hosted-Modelle)

**Adaptive Wirkung:**
- On-Premise-Only → Pulse: T-M1 Stufe 4–5 beschreibt Self-Hosted statt Cloud; T-MC2 ergänzt „Self-Hosting-Komplexität"

---

### CTX-8: Projekt-Kritikalität

**Frage:** „Wie kritisch ist das Projekt/Produkt für das Business?"

| Option | Beschreibung |
|--------|-------------|
| Mission-Critical | Direkter Revenue- oder Kunden-Impact; Ausfall = Business-Impact |
| Business-Critical | Wichtig für Operations, aber kein direkter Revenue-Impact |
| Important | Support-Funktion, nicht zeitkritisch |
| Experimental | Innovation, PoC, Sandbox |

**Warum wichtig:** Kritikalität bestimmt den Risikoappetit. Bei Mission-Critical-Projekten ist jede AI-Intervention ein Risiko (Halluzinationen in Production-Code, ungeprüfte Vorschläge). Bei Experimental-Projekten kann man „Move Fast" fahren. Das beeinflusst die Change-Geschwindigkeit und ob im Readiness Gate eher „Konsolidieren" oder „Erweitern" empfohlen wird.

**Beeinflusst:** C (Risikoappetit), R (Change-Geschwindigkeit)

**Adaptive Wirkung:**
- Mission-Critical → Pulse: konservativere Maturity-Erwartungen; Konsolidieren bevorzugt vor Erweitern
- Experimental → Pulse: höhere Maturity-Ambitionen, „Move Fast" realistisch

---

### CTX-9: Vertragsmodell

**Frage:** „Welches Vertragsmodell gilt für das Projekt?" *(Für IT-Dienstleister und Beratung)*

| Option | AI-Incentive | Risiko |
|--------|-------------|--------|
| Time & Material (T&M) | **Fehlanreiz:** +30% AI-Effizienz = -30% abrechenbare Stunden | Shadow AI, Vermeidung, keine Transparenz |
| Fixed Price | **Positiv:** Höhere Produktivität = höhere Marge | Scope-Creep-Konflikte |
| Value-Based / Outcome-Based | **Optimal:** Mehr Output = mehr Vergütung | Outcome-Metriken müssen definiert sein |
| Hybrid (T&M + Success Bonus) | **Gemischt:** Basis gesichert, Effizienz-Bonus möglich | Bonus-Trigger müssen klar sein |
| Internes Projekt | **Neutral:** Keine externen Abrechnungs-Incentives | — |

**Warum wichtig:** Das Vertragsmodell ist einer der stärksten, aber am häufigsten übersehenen Einflussfaktoren auf AI-Adoption. Bei T&M-Verträgen rationalisiert sich das Team durch AI-Nutzung selbst weg — das erzeugt strukturellen Widerstand und Shadow AI (heimliche Nutzung ohne Transparenz). Ohne Incentive-Alignment auf Vertragsebene kann die beste Enablement-Strategie scheitern.

**Beeinflusst:** A (Shadow AI Risiko!), Change-Strategie

**Adaptive Wirkung:**
- T&M → Pulse: A-MC3 (Shadow AI) bekommt erhöhte Aufmerksamkeit; Interventions-Empfehlung: Gainsharing-Modell prüfen
- Fixed Price / Value-Based → Pulse: Shadow-AI-Risiko niedriger; Fokus auf Adoption-Beschleunigung

---

## 3) Tech Stack & Arbeitsweise (6 Fragen)

### CTX-10: Hauptprogrammiersprachen (Mehrfachauswahl)

**Frage:** „Welche Programmiersprachen werden primär verwendet?"

- Python
- Java/Kotlin
- JavaScript/TypeScript
- C#/.NET
- Go
- Ruby
- PHP
- C/C++
- Sonstige (Freitext)

**Warum wichtig:** AI-Coding-Assistenten performen je nach Sprache sehr unterschiedlich. Python, JavaScript/TypeScript und Java haben exzellenten Support (Copilot, Cursor, Claude). Nischen-Sprachen (COBOL, RPG, Fortran) haben kaum AI-Support — das limitiert die erreichbare Technical Enablement-Stufe und die Effektivität von AI in Workflows.

**Beeinflusst:** T (AI-Tool-Support variiert stark nach Sprache)

**Adaptive Wirkung:**
- Sprachen mit exzellentem AI-Support (Python, JS/TS, Java) → T-M1 Stufe 4–5 realistischer
- Sprachen mit limitiertem AI-Support (COBOL, RPG, Niche) → T-M1 Ceiling niedriger; T-MC2 ergänzt „limitierter Sprachsupport"

---

### CTX-11: IDE / Entwicklungsumgebung

**Frage:** „Welche IDE(s) werden primär verwendet?"

- VS Code / Cursor
- JetBrains (IntelliJ, PyCharm, WebStorm, etc.)
- Visual Studio
- Eclipse
- Vim/Neovim
- Sonstige (Freitext)

**Warum wichtig:** Die IDE ist das primäre Werkzeug, in dem AI-Integration stattfindet. VS Code und JetBrains haben das breiteste AI-Extension-Ökosystem. Eclipse oder proprietäre IDEs haben oft keinen oder schlechten AI-Support — ein IDE-Wechsel ist dann eine eigene Intervention mit erheblichem Change-Aufwand.

**Beeinflusst:** T (Integration Depth: nicht jede IDE hat gleich guten AI-Support)

**Adaptive Wirkung:**
- VS Code / Cursor → T-M1 Stufe 3–5 leichter erreichbar (breites Extension-Ökosystem)
- Eclipse / Legacy-IDEs → T-MC2 ergänzt „IDE-Wechsel als Hürde"

---

### CTX-12: Legacy-Code-Anteil

**Frage:** „Wie hoch ist der Anteil an Legacy-Code in der Codebase?"

| Option | Beschreibung |
|--------|-------------|
| Kein Legacy | 100% Modern Stack, <2 Jahre alt |
| Wenig (<20%) | Überwiegend modern, vereinzelte Legacy-Module |
| Moderat (20–50%) | Mix aus Modern und Legacy |
| Viel (50–80%) | Überwiegend Legacy, moderne Teile in Entwicklung |
| Mostly Legacy (>80%) | Fast ausschließlich Legacy-Code |

**Warum wichtig:** AI-Coding-Assistenten arbeiten am effektivsten mit modernem, gut strukturiertem Code. Bei hohem Legacy-Anteil sinkt die AI-Effektivität (weniger Trainingsbeispiele, ungewöhnliche Patterns, fehlende Tests). Gleichzeitig ist Legacy-Refactoring einer der stärksten AI-Use-Cases — aber erst, wenn die Basis (T, A) steht.

**Beeinflusst:** T (AI-Tool-Effektivität sinkt bei Legacy), F (Refactoring als Voraussetzung)

**Adaptive Wirkung:**
- Viel/Mostly Legacy → Pulse: F-MC2 ergänzt „Legacy-Refactoring mit AI"; T-M1 Ceiling anpassen

---

### CTX-13: Entwicklungs-Methodik

**Frage:** „Welche Entwicklungs-Methodik wird primär verwendet?"

| Option | Beschreibung |
|--------|-------------|
| Scrum | Sprints, Backlog, Retros |
| Kanban | Continuous Flow, WIP-Limits |
| SAFe / Scaled Agile | Programm-Inkrement-Planung, ARTs |
| Waterfall / V-Modell | Phasenbasiert, Gate-Reviews |
| Ad-hoc | Keine formalisierte Methodik |

**Warum wichtig:** Die Methodik bestimmt, wie schnell AI-Interventionen iteriert werden können. Scrum/Kanban-Teams können im 4-Wochen-CRAFT-Zyklus direkt Experimente einbauen. Waterfall-Teams brauchen andere Change-Strategien (Phase-Gate-Integration statt Sprint-Experimente). SAFe-Teams haben zusätzliche Koordinations-Komplexität (PI-Planning, ART-Abhängigkeiten).

**Beeinflusst:** F (Workflow-Integration-Potenzial)

**Adaptive Wirkung:**
- Scrum/Kanban → Pulse: F-M1 Beschreibungen passen; 4-Wochen-CRAFT-Zyklus mappt auf Sprints
- Waterfall → Pulse: F-M1 muss Phase-Gates statt Sprints referenzieren; Zyklen ggf. länger
- SAFe → Pulse: F-MC1 ergänzt „PI-Planning" und „ART-Abhängigkeiten" als Bottleneck

---

### CTX-14: Deployment-Frequenz

**Frage:** „Wie häufig wird in Produktion deployed?"

| Option | Beschreibung |
|--------|-------------|
| Continuous | Mehrmals täglich (CD) |
| Täglich | Mindestens einmal pro Tag |
| Wöchentlich | 1–2 Deployments pro Woche |
| Monatlich oder seltener | Geplante Releases mit langen Zyklen |

**Warum wichtig:** Deployment-Frequenz ist ein Proxy für den Flow-Reifegrad. Hohe Frequenz bedeutet: kurze Feedback-Loops, CI/CD existiert, AI-generierter Code wird schnell validiert. Niedrige Frequenz bedeutet: lange Zyklen, manuelle Prozesse, AI-generierte Änderungen stauen sich. Außerdem steigt bei hoher Frequenz die Bedeutung von AI-gestütztem Testing.

**Beeinflusst:** F (Flow-Baseline: hohe Frequenz = AI-Testing kritischer)

**Adaptive Wirkung:**
- Continuous/Täglich → Pulse: F-MC2 betont „AI in CI/CD Pipeline"; F-M1 Stufe 4–5 realistischer
- Monatlich → Pulse: F-MC1 ergänzt „Release-Prozess" als Bottleneck-Option

---

### CTX-15: Zusammenarbeitsmodell

**Frage:** „Wie arbeitet das Team primär zusammen?"

| Option | Beschreibung |
|--------|-------------|
| Remote-First | Überwiegend remote; Meetings und Zusammenarbeit primär virtuell |
| Hybrid | Mix aus Remote und Office; regelmäßige Präsenztage |
| Office-Based | Überwiegend vor Ort; tägliche physische Zusammenarbeit |
| Async-First | Primär asynchron (Docs, PRs, Messages); wenige synchrone Meetings |

**Warum wichtig:** Das Zusammenarbeitsmodell beeinflusst, wie AI-Enablement und Wissenstransfer funktionieren. Remote-/Async-Teams sind stärker auf gute Tool-Integration angewiesen (IDE-AI ist kritischer als Pairing). Office-Teams können In-Person-Pairing und Mob-Programming mit AI nutzen. Async-Teams brauchen bessere Dokumentation und asynchrone Review-Workflows — beides starke AI-Use-Cases.

**Beeinflusst:** R (Enablement-Format), A (Adoptions-Muster), F (Workflow-Design), T (Tool-Kritikalität)

**Adaptive Wirkung:**
- Remote-First/Async-First → Pulse: T-M1 IDE-Integration wird kritischer (kein „mal kurz rüberrufen"); R-MC1 betont „asynchrone Lernformate" und „Self-Service-Playbooks"; F-MC2 betont „AI-PR-Review" und „Doc-Automation"
- Office-Based → Pulse: R-MC1 betont „Pairing-Sessions" und „Mob-Programming mit AI"; F-MC2 betont „Live-Coding mit AI im Team"

---

## 4) Kultur & Rahmenbedingungen (4 Fragen)

### CTX-16: Fehlerkultur / Risikobereitschaft

**Frage:** „Wie geht die Organisation mit Fehlern bei Experimenten um?"

| Option | Beschreibung |
|--------|-------------|
| Lernkultur | Fehler werden als Lernchance gesehen; Experimente ausdrücklich erwünscht |
| Vorsichtig-offen | Experimente erlaubt, aber kontrolliert; Fehler werden toleriert |
| Risikoavers | Fehler werden vermieden; Neues wird nur mit Absicherung eingeführt |
| Blame Culture | Fehler werden bestraft; Mitarbeiter vermeiden Risiken aktiv |

**Warum wichtig:** Fehlerkultur ist der stärkste Prädiktor für Adoptions-Geschwindigkeit. In einer Lernkultur probieren Menschen AI-Tools freiwillig aus und teilen Erfahrungen. In einer Blame Culture nutzen Menschen Tools heimlich (Shadow AI) oder gar nicht. Bei Blame Culture muss zuerst psychologische Sicherheit aufgebaut werden — ohne das ist jede Enablement-Maßnahme wirkungslos.

**Beeinflusst:** R (Psychological Safety), A (Adoptions-Geschwindigkeit)

**Adaptive Wirkung:**
- Blame Culture → Pulse: R-M1 Stufe 3 enthält „offene Kommunikation" als explizite Hürde; R-MC2 ergänzt „Angst vor Fehlern" als Hemmnis
- Lernkultur → Pulse: R-Fragen auf Minimum; Readiness ist vermutlich kein Engpass

---

### CTX-17: AI-Budget (Tools & Lizenzen)

**Frage:** „Wie ist die Budget-Situation für AI-Tools und Lizenzen?"

| Option | Beschreibung |
|--------|-------------|
| Dediziertes Budget | Budget explizit für AI-Tools allokiert (z.B. pro Kopf / pro Team) |
| Budget möglich | Kann beantragt werden, Genehmigung wahrscheinlich |
| Kein Budget | Nur Free/Open-Source-Tools; kein dediziertes AI-Budget |
| Unklar | Budget-Situation nicht geklärt |

**Warum wichtig:** Ohne Budget gibt es kein Copilot Enterprise, kein Cursor Business, keine Claude-API. Das beschränkt die erreichbare Enablement-Stufe (T) auf Open-Source-Alternativen. Unklare Budget-Situationen erzeugen Unsicherheit und verzögern Tool-Rollouts — „Unklar" ist oft schlimmer als „Kein Budget", weil niemand planen kann.

**Beeinflusst:** T (Tool-Auswahl), A (Adoption wird durch Tool-Verfügbarkeit begrenzt)

**Adaptive Wirkung:**
- Kein Budget → Pulse: T-M1 Ceiling bei Stufe 3 (Open-Source/Free Tools); T-MC2 ergänzt „Kosten/Budget"
- Dediziertes Budget → Pulse: T-M1 Stufe 4–5 realistisch

---

### CTX-18: Timeline / Zeitdruck

**Frage:** „Bis wann werden erste sichtbare Ergebnisse der AI-Transformation erwartet?"

| Option | Beschreibung |
|--------|-------------|
| Hoch (<3 Monate) | Schnelle Ergebnisse erwartet; Quick Wins priorisieren |
| Mittel (3–6 Monate) | Strukturierter Ansatz möglich, aber Ergebnisse müssen folgen |
| Niedrig (6–12 Monate) | Strategischer Zeithorizont, Raum für Fundament |
| Kein definierter Timeline | Kein expliziter Zeitdruck |

**Warum wichtig:** Zeitdruck bestimmt die Interventions-Strategie. Bei hohem Zeitdruck müssen Quick Wins (z.B. Copilot-Rollout, PR Pre-Review) priorisiert werden — nachhaltige Governance oder kulturelle Veränderung braucht mehr Zeit. Ohne definierten Timeline fehlt oft das Momentum, und die Transformation versandet.

**Beeinflusst:** Priorisierung aller Dimensionen (Quick Wins vs. nachhaltige Transformation)

**Adaptive Wirkung:**
- Hoch → Interventions-Empfehlungen priorisieren „sofort umsetzbar" und „reversibel"
- Niedrig → Raum für Governance-Aufbau und nachhaltige Enablement-Programme

---

### CTX-19: Betriebsrat / Mitbestimmung

**Frage:** „Gibt es einen Betriebsrat oder vergleichbare Mitbestimmung, der bei AI-Tool-Einführung eingebunden werden muss?"

| Option | Beschreibung |
|--------|-------------|
| Ja, aktiv eingebunden | BR existiert und ist bereits in AI-Themen involviert |
| Ja, noch nicht eingebunden | BR existiert, wurde aber noch nicht zum Thema AI konsultiert |
| Nein / nicht relevant | Kein BR vorhanden oder nicht zuständig |

**Warum wichtig:** In Deutschland ist der Betriebsrat bei Einführung von IT-Systemen, die Leistung und Verhalten überwachen könnten, mitbestimmungspflichtig (§87 BetrVG). AI-Coding-Assistenten fallen potenziell darunter. Ein nicht eingebundener BR kann Tool-Rollouts komplett stoppen. Frühe Einbindung ist kein Nice-to-have, sondern kritischer Pfad für die Compliance-Dimension.

**Beeinflusst:** C (Compliance: BR-Zustimmung als Gate), Timeline (kann Freigaben verzögern)

**Adaptive Wirkung:**
- Ja, noch nicht eingebunden → Pulse: C-MC1 ergänzt „BR-Freigabe ausstehend" als Blocker; Interventions-Empfehlung: BR-Einbindung priorisieren

---

## 5) Context → Pulse-Check-Filterung

### Prinzip

Der Context erzeugt ein **Projekt-Profil**, das die Pulse-Check-Fragen in drei Weisen beeinflusst:

1. **Fragen ein-/ausblenden:** Irrelevante Fragen werden nicht gezeigt (z.B. keine Agentic-Fragen bei „Noch keine Nutzung").
2. **MC-Optionen anpassen:** Diagnostik-Optionen werden kontextspezifisch (z.B. branchenspezifische Blocker).
3. **Maturity-Ceiling markieren:** Bei bestimmten Rahmenbedingungen ist Stufe 5 nicht erreichbar — das Spider-Diagramm zeigt eine „realistische Zielzone".

### Filterregeln (Beispiele)

```
WENN Regulierungsgrad = Hoch:
  → C-MC1: Ergänze branchenspezifische Blocker (BaFin-Freigabe, Audit-Trail)
  → C-M1: Stufe 5 = "Compliance automatisiert mit Audit-Trails" (statt Self-Service)
  → T-MC1: Filtere "Chat-only" und "multi-agentisch" (unrealistisch im hochregulierten Umfeld)

WENN Vertragsmodell = T&M:
  → A-MC3 (Shadow AI): Erhöhte Sichtbarkeit + Warnhinweis zu Incentive-Misalignment
  → Interventions-Empfehlung: "Gainsharing-Modell prüfen" als Top-Priorität

WENN AI-Journey-Phase = Noch keine Nutzung:
  → A-MC1 (Usage Mode): Vereinfachen auf Stufe 1–3
  → F-M1: Stufe 4–5 ausblenden (nicht realistisch ohne Basis-Adoption)

WENN Scope = Einzelnes Team:
  → C-M1: Org-weite Governance-Aspekte vereinfachen
  → R-MC1: "Champion-Support" durch "Peer-Support" ersetzen

WENN Legacy-Code-Anteil = Viel/Mostly:
  → T-M1: Ceiling bei Stufe 3–4 (volle Integration schwierig bei Legacy)
  → F-MC2: "Legacy-Refactoring mit AI" als Interventions-Option ergänzen

WENN On-Premise-Only:
  → T-M1: Beschreibungen auf Self-Hosted-Modelle anpassen
  → T-MC1 (Supported Mode): Stufe 4–5 nur mit Self-Hosted realistisch

WENN Betriebsrat = Ja, noch nicht eingebunden:
  → C-MC1: "BR-Freigabe ausstehend" als Blocker-Option
  → C-M1: Stufe 3+ erst nach BR-Einbindung realistisch

WENN Kein Budget:
  → T-M1: Ceiling bei Stufe 3
  → T-MC2: "Kosten/Budget" als Reibungs-Option ergänzen

WENN Fehlerkultur = Blame Culture:
  → R-M1: Stufe 3+ erst nach kultureller Intervention realistisch
  → R-MC2: "Angst vor Fehlern" als Hemmnis-Option

WENN Zusammenarbeit = Remote-First ODER Async-First:
  → T-M1: IDE-Integration wird zum kritischen Pfad (kein „kurz rüberrufen")
  → R-MC1: Asynchrone Lernformate priorisieren
  → F-MC2: "AI-PR-Review" und "Doc-Automation" betonen

WENN Zusammenarbeit = Office-Based:
  → R-MC1: "Pairing-Sessions" und "Mob-Programming mit AI" betonen
```

---

## 6) Context-Profil: Zusammenfassung & Empfehlung

Nach Ausfüllen generiert das System ein **Context-Profil** als Grundlage für das Beratungs-Engagement:

### Profil-Elemente
- **Compliance-Tier:** Hoch / Mittel / Niedrig (abgeleitet aus CTX-5, CTX-6, CTX-7, CTX-19)
- **Adoption-Startpunkt:** Phase der AI-Journey (CTX-2)
- **Incentive-Risk:** T&M-Warnung ja/nein (CTX-9)
- **Tech-Readiness:** Modern/Legacy/Mixed (CTX-10, CTX-11, CTX-12)
- **Change-Komplexität:** Einfach/Mittel/Hoch (CTX-1, CTX-4, CTX-15, CTX-16)
- **Zeitdruck:** Hoch/Mittel/Niedrig (CTX-18)
- **Empfohlene CRAFT-Priorität:** Welche 2–3 Dimensionen zuerst fokussieren

### Beispiel-Profile

**Profil: „Regulierte Brownfield-Migration"**
> Banking, hohes Regulierungsniveau, Brownfield, 50+ Personen, T&M, viel Legacy, Scrum, Hybrid, BR vorhanden
>
> **Priorität:** C → T → R (Compliance first, dann Tooling-Grundlage, dann People)
> **Warnung:** T&M-Incentive-Risiko, BR-Einbindung als Gate
> **Ceiling:** A-Stufe 3–4 realistisch im ersten Jahr

**Profil: „Agiles Startup-Team"**
> Tech/Software, niedriger Regulierungsgrad, Greenfield, 8 Personen, internes Projekt, kein Legacy, Kanban, CD, Remote-First
>
> **Priorität:** A → F → T (Adoption pushen, Workflows optimieren)
> **Ceiling:** Stufe 5 in allen Dimensionen erreichbar
> **Hinweis:** Remote-First → IDE-Integration und async Playbooks priorisieren
> **Zeitrahmen:** Quick Wins in 4 Wochen möglich

**Profil: „Enterprise-Pilot mit Sponsor"**
> Versicherung, mittleres Regulierungsniveau, Brownfield, 20 Personen, C-Level-Sponsor, moderater Legacy-Anteil, Hybrid
>
> **Priorität:** R → A → C (Readiness aufbauen, dann Adoption, Compliance parallel)
> **Stärke:** Sponsor vorhanden → Change-Momentum nutzen
> **Risiko:** BR noch nicht eingebunden
