# USE CASE: FinSecure AG – Schadensmeldungs-Plattform

**AI Transformation Framework (CRAFT) – Anwendungsbeispiel**

Ein vollständiger Durchlauf über 2 Iterationszyklen (8 Wochen), alle 5 Dimensionen

---

## Ausgangssituation

### Das Unternehmen

Die **FinSecure AG** ist ein großer deutscher Versicherungskonzern (~15.000 Mitarbeiter, Hauptsitz Frankfurt). Die IT-Abteilung umfasst rund 800 Personen, verteilt auf interne Teams und externe Dienstleister. Der Konzern ist tarifgebunden, der Betriebsrat aktiv und in IT-Entscheidungen einflussreich. Der Datenschutz ist streng – Versicherungsdaten (Gesundheit, Finanzen) fallen unter besondere Kategorien nach DSGVO.

### Das Pilot-Team: „Team Claim"

**Produkt:** Schadensmeldungs-Plattform (Kfz, Hausrat, Haftpflicht) – ein geschäftskritisches System mit ~200.000 aktiven Nutzern (Versicherungsnehmer + Sachbearbeiter).

**Zusammensetzung (12 Personen):**

| Rolle | Anzahl | Namen (fiktiv) | Besonderheiten |
|-------|--------|-----------------|----------------|
| Backend-Entwickler (Java/Spring Boot) | 6 | Stefan, Ayşe, Markus, Priya, Jonas, Lena | Stefan ist Senior mit 15 Jahren Erfahrung, skeptisch gegenüber AI. Ayşe ist die informelle Tech-Leaderin, nutzt privat intensiv Claude. |
| Frontend-Entwickler (Angular) | 2 | Tom, Sara | Tom nutzt Copilot privat seit einem Jahr, hat nie darüber gesprochen. |
| Tester / QA | 2 | Kathrin, Mehmet | Kathrin hat 20 Jahre Testerfahrung und die größte Angst vor Jobverlust durch AI. Mehmet ist offen, aber unerfahren mit AI. |
| Product Owner | 1 | Diana | Aufgeschlossen, aber unter Druck vom Business, schneller zu liefern. |
| Scrum Master | 1 | Florian | Agile Coach im Herzen, sieht AI als Change-Thema, nicht als Tech-Thema. |

**Tech-Stack:**
- Backend: Java 17, Spring Boot 3.x, PostgreSQL, REST APIs
- Frontend: Angular 17, TypeScript
- CI/CD: Jenkins (Build) + Azure DevOps (Pipeline, Tickets, Repos)
- Infrastruktur: Azure Cloud (eigener Tenant), Kubernetes-Cluster
- Monitoring: Datadog
- Kommunikation: Microsoft Teams, Confluence

**SDLC-Rhythmus:**
- 2-Wochen-Sprints
- Deployment alle 2 Wochen (Sprint-Ende)
- Code Reviews über Azure DevOps Pull Requests
- Manuelle QA-Phase nach Dev-Complete (2–3 Tage)
- Release-Approval durch Change Advisory Board (CAB) – monatlich

### Aktueller AI-Stand

| Aspekt | Status |
|--------|--------|
| Offizielle AI-Freigabe | ❌ Keine. Die IT-Governance hat „AI-Nutzung wird geprüft" kommuniziert. Seit 8 Monaten passiert nichts. |
| Shadow AI | ~60% nutzen ChatGPT (Free/Plus) privat auf eigenen Geräten. Ayşe nutzt Claude Pro. Tom nutzt GitHub Copilot privat. Keiner spricht offen darüber. |
| Lizenzen | Keine. Budget wäre vorhanden, aber Governance-Freigabe fehlt. |
| Betriebsrat | Hat gehört, dass „AI die Jobs bedroht". Will informiert und eingebunden werden, blockt aber (noch) nicht aktiv. |

### Die Schmerzen (vom Team selbst benannt)

1. **Code Reviews dauern 3–5 Tage.** Nur Stefan und Ayşe reviewen Backend-PRs, beide sind überlastet. Frontend-PRs liegen teilweise eine Woche.
2. **Testdaten sind ein Albtraum.** Kathrin erstellt Testdaten manuell – für jeden Schadensfall-Typ eigene Konstellationen (Kfz-Unfall, Wasserschaden, Haftpflicht). Dauert pro Testzyklus 1–2 Tage.
3. **Dokumentation ist chronisch veraltet.** API-Docs stimmen nicht mit dem Code überein. Confluence-Seiten wurden zuletzt vor 6 Monaten aktualisiert. Neue Team-Mitglieder brauchen 3–4 Wochen Einarbeitung.
4. **Lead Time ist zu lang.** Von Commit bis Produktion dauert es 3–4 Wochen (2 Wochen Sprint + 1 Woche QA-Nachlauf + CAB-Wartezeit).

### Der Sponsor

**Dr. Thomas Kessler**, Bereichsleiter IT Application Development. Er hat bei einer Konferenz einen Vortrag über AI im SDLC gehört und will „Ergebnisse zeigen". Sein KPI: Lead Time halbieren innerhalb von 6 Monaten. Er hat Budget für Tooling (~50k EUR) und externe Begleitung, aber keinen politischen Willen, gegen den Betriebsrat zu arbeiten.

---

## Das AI Adoption Team (Mindestbesetzung für 1 Pilot-Team)

| Rolle | Person | Kapazität | Herkunft |
|-------|--------|-----------|----------|
| AI Transformation Manager | **Jan** (extern, Berater) | 80% | Bringt Framework, Methodik, Erfahrung. Steuert alle 5 Dimensionen. |
| Technical AI Lead | **Ayşe** (intern, aus dem Team) | 30% zusätzlich | Kennt den Tech-Stack, hat AI-Erfahrung, ist respektiert im Team. |
| Change & People Lead | **Florian** (intern, Scrum Master) | 20% zusätzlich | Kennt die Team-Dynamik, hat Moderationserfahrung, versteht den Betriebsrats-Kontext. |
| Governance Liaison | **Dr. Eva Richter** (intern, IT-Compliance) | On demand (~10%) | Kennt die Datenschutz-Policies, hat Kontakt zum Betriebsrat und zur Rechtsabteilung. |
| Champion | **Tom** (intern, Frontend-Dev) | 20% | Nutzt bereits privat Copilot, ist enthusiastisch aber diskret. Wird offizieller Multiplikator. |

> **Bewusste Entscheidung:** Kein dedizierter Value Stream Coach. Jan übernimmt diese Rolle im Pilot mit. Wenn das Framework skaliert wird, muss diese Rolle besetzt werden.

---

## Vor-Phase: Governance-Vorlauf (2 Wochen vor Zyklus 1)

### Warum ein Vorlauf nötig ist

In einem deutschen Konzern mit aktivem Betriebsrat startet kein Pilot ohne Mindest-Governance. Der Vorlauf klärt die Grundlagen, damit Zyklus 1 nicht sofort an Freigaben scheitert.

### Woche -2: Governance-Grundlagen schaffen

**Montag – Kickoff mit Sponsor (2h)**
Jan trifft Dr. Kessler. Agenda: Framework vorstellen, Erwartungen kalibrieren, Commitment sichern.

Wichtigstes Ergebnis: Dr. Kessler versteht, dass „Lead Time halbieren in 6 Monaten" ein ambitioniertes Ziel ist, das Prozessänderung erfordert – nicht nur Tool-Einführung. Er committet sich auf den iterativen Ansatz und regelmäßige Readiness-Gate-Entscheidungen.

**Handshake-Vereinbarung mit dem Sponsor:**
- Pilot läuft 8 Wochen (2 Zyklen), danach Readiness-Gate-Entscheidung
- Budget-Freigabe für Azure OpenAI Service (Stufe 2, eigener Tenant)
- Dr. Kessler spricht persönlich mit dem Betriebsratsvorsitzenden
- Erfolgsmetrik für den Pilot: DORA-Baseline vs. Delta nach 8 Wochen, nicht „Lead Time halbiert"

**Dienstag–Mittwoch – Governance Starter Kit anpassen**
Jan und Dr. Eva Richter (Governance Liaison) passen das Governance Starter Kit auf FinSecure an:

- **Sicherheitsstufe:** Stufe 2 (Private Cloud) – Azure OpenAI Service im FinSecure-Tenant. Keine Daten verlassen die Azure-Umgebung. Kein Public-Cloud-AI für Code oder Versicherungsdaten.
- **Datenklassifizierung:** Entscheidungsbaum erstellt. Produktionsdaten: nie an AI. Anonymisierte Testdaten: erlaubt. Code ohne Geschäftslogik-Kommentare: erlaubt. Confluence-Inhalte: erlaubt, wenn keine personenbezogenen Daten.
- **IP-Klarstellung:** AI-generierter Code wird wie menschlicher Code behandelt – Review-Pflicht bleibt. Kein Copyright-Claim auf AI-Output.

**Donnerstag – Betriebsrats-Gespräch**
Dr. Kessler und Jan treffen den Betriebsratsvorsitzenden und ein BR-Mitglied aus der IT. Keine Verhandlung, sondern Information und Dialog.

Kernnachrichten:
- Es geht um Produktivitätswerkzeuge, nicht um Stellenabbau. Keine Headcount-Reduktion geplant.
- Das Team wird in die Gestaltung einbezogen (Psychological Safety Workshop).
- Shadow AI ist bereits Realität – der kontrollierte Rahmen ist sicherer als der Status quo.
- Der BR wird regelmäßig informiert und kann jederzeit Bedenken einbringen.

Ergebnis: BR blockt nicht, will aber nach Zyklus 1 informiert werden. Fordert, dass Kathrin (Testerin mit den größten Bedenken) explizit einbezogen wird. Jan sagt zu.

**Freitag – Technische Vorbereitung starten**
Ayşe (Technical AI Lead) beantragt den Azure OpenAI Service im FinSecure-Tenant. Erfahrungsgemäß dauert die Azure-Provisionierung 5–10 Werktage – deshalb jetzt, nicht erst in Zyklus 1.

Bestellte Modelle: GPT-4o (für Code-Aufgaben), GPT-4o-mini (für Dokumentation, kostengünstig).

### Woche -1: Baseline erheben

**Montag–Mittwoch – DORA-Baseline messen**
Jan und Ayşe ziehen die Delivery-Metriken aus Jenkins, Azure DevOps und Datadog:

| Metrik | Baseline-Wert | Quelle | Anmerkung |
|--------|---------------|--------|-----------|
| Deployment Frequency | 1x / 2 Wochen | Jenkins Deploy Logs | An Sprint-Ende gebunden |
| Lead Time for Changes | 22 Tage (Median) | Azure DevOps: Work Item Created → Deployment | Inklusive Sprint-Wartezeit und CAB |
| Change Failure Rate | 12% | Datadog Incidents / Deployments | Leicht über Branchendurchschnitt |
| Time to Restore Service | 4,5 Stunden (Median) | Datadog MTTR | Akzeptabel, aber Wochenend-Incidents dauern länger |
| PR Review Time | 3,2 Tage (Median) | Azure DevOps PR Analytics | Der größte Pain Point |
| Flow Efficiency | ~18% | Geschätzt: aktive Bearbeitung vs. Gesamtzeit | Viel Wartezeit (PR-Queue, QA-Queue, CAB-Queue) |

**Donnerstag – Erster Pulse Check (CRAFT)**
Jan verteilt den Pulse-Check-Fragebogen (Google Forms, 15 Minuten) an alle 12 Teammitglieder.

Ergebnisse (Skala 1–5):

| CRAFT-Dimension | Score | Einordnung |
|-----------------|-------|------------|
| **C** – Compliance & Governance | 1,2 | Exploring. Keine Freigabe, keine Policies, Betriebsrat nicht eingebunden. |
| **R** – Readiness (Human & Cultural) | 2,3 | Experimenting. Privat-Erfahrung vorhanden, Stimmung gemischt: 5 offen, 3 neutral, 4 skeptisch/ängstlich. |
| **A** – Adoption & Usage | 1,0 | Exploring. Offiziell: null. Shadow AI wird nicht gezählt. |
| **F** – Flow & Process Integration | 1,0 | Exploring. Kein AI-Tool in irgendeinem Workflow integriert. |
| **T** – Technical Enablement | 1,3 | Exploring. Kein offizielles Tooling verfügbar. |
| **Gesamt (Durchschnitt)** | **1,4** | **Exploring** |

> **Beobachtung:** Die Diskrepanz zwischen R (2,3) und A (1,0) zeigt den Shadow-AI-Effekt: Die Menschen können mehr als die Organisation erlaubt. Das ist typisch und ein Hebel – nicht ein Problem.

**Freitag – Vorbereitung Zyklus 1**
Jan erstellt den Zyklus-1-Plan, stimmt ihn mit Dr. Kessler und Florian ab.

---

## Zyklus 1: Foundation & First Contact (Wochen 1–4)

### Zyklus-Ziel

> Am Ende von Zyklus 1 hat das Team einen gemeinsam erarbeiteten Value Stream Map, versteht die geplanten AI-Interventionen, hat die Shadow AI Amnestie durchlaufen, und die erste AI-Integration (Code Review Assist) ist technisch verfügbar.

### Schwerpunkte pro Dimension in Zyklus 1

| Dimension | Intensität | Schwerpunkt |
|-----------|------------|-------------|
| D1 **C** – Compliance & Governance | ✅ Aktiv | Governance-Freigabe für Stufe-2-Tooling sicherstellen |
| D2 **R** – Readiness (Human & Cultural) | 🔥 Hoch | Shadow AI Amnestie, Psychological Safety Workshop |
| D3 **A** – Adoption & Usage | 📊 Monitoring | Baseline abgeschlossen, erstes CRAFT-Radar geteilt |
| D4 **F** – Flow & Process Integration | 🔥 Hoch | Value Stream Mapping Workshop, Bottleneck-Priorisierung |
| D5 **T** – Technical Enablement | ⚡ Startend | Azure OpenAI provisioniert, erste IDE-Integration vorbereitet |

---

### Woche 1: Orientierung & Planung

#### Montag: Team-Kickoff (2h, alle 12 Personen)

**Agenda:**
1. Jan stellt sich und das Vorhaben vor – bewusst kein PowerPoint-Framework, sondern: „Wir wollen gemeinsam herausfinden, wo ihr die meiste Zeit verliert und wie AI dabei helfen kann."
2. CRAFT-Radar wird anonym gezeigt (kein individuelles Naming). Team sieht: „Wir stehen bei 1,4 – das ist normal für den Anfang."
3. Vorstellung des 4-Wochen-Plans – was passiert in den nächsten Wochen, was wird von wem erwartet.
4. **Wichtig:** Jan adressiert den Elefanten im Raum: „Ich weiß, dass einige von euch privat schon AI nutzen. Das ist nicht verboten und nicht schlimm – im Gegenteil. Wir werden nächste Woche darüber reden, offen und ohne Konsequenzen."

**Beobachtungen von Jan (intern, nicht geteilt):**
- Stefan (Senior Backend) hat während der Vorstellung die Arme verschränkt, aber aufmerksam zugehört. Keine offene Ablehnung.
- Kathrin (Testerin) hat gefragt: „Heißt das, AI soll die Testfälle schreiben?" – eine Angstfrage, die ernst genommen werden muss.
- Tom (Frontend, Champion) hat gelächelt, als Shadow AI erwähnt wurde. Er weiß, dass er gemeint ist.
- Diana (PO) hat sofort gefragt: „Können wir damit auch User Stories schneller schreiben?" – pragmatisch, ergebnisorientiert.

#### Dienstag: Einzelgespräche (Jan, 30 Min. pro Person)

Jan führt mit jeder Person ein kurzes 1:1. Keine formale Befragung, sondern offenes Gespräch: „Was nervt dich am meisten an eurem aktuellen Prozess? Was würdest du als erstes ändern?"

**Verdichtete Erkenntnisse:**

| Cluster | Genannte Schmerzen | Häufigkeit |
|---------|-------------------|------------|
| Code Review Bottleneck | „PRs liegen tagelang rum", „Nur Stefan und Ayşe reviewen" | 9 / 12 |
| Testdaten | „Ich bastle jeden Sprint neue Testdaten von Hand" (Kathrin) | 5 / 12 |
| Dokumentation | „Confluence ist ein Friedhof" | 7 / 12 |
| Deployment-Wartezeit | „CAB trifft sich nur monatlich, wir warten 2 Wochen" | 6 / 12 |
| Shadow AI Unbehagen | „Ich nutze ChatGPT, aber ich sage es nicht, weil es vielleicht nicht erlaubt ist" | 4 / 12 (explizit) |

#### Mittwoch–Donnerstag: Value Stream Mapping Workshop (2 × 4h)

**Tag 1 (Mittwoch, 4h): Ist-Zustand kartieren**

Jan moderiert, Florian unterstützt. Das gesamte Team ist anwesend. Material: Großes Whiteboard, Post-its, Timer.

**Methodik:** Jeder Schritt im SDLC wird auf ein Post-it geschrieben. Für jeden Schritt werden erfasst: durchschnittliche Bearbeitungszeit (aktiv), durchschnittliche Wartezeit (passiv), verantwortliche Person(en), und bekannte Probleme.

**Ergebnis – der Value Stream des Teams:**

```
User Story    →  Refinement  →  Sprint Planning  →  Development  →  PR Created
  (Diana)        (Team, 1h)     (Team, 2h)         (2-5 Tage)     (Dev)
                                                                      │
Code Review  ←──────────────────────────────────────────────────────────┘
  (Stefan/Ayşe)
  ⚠️ WARTEZEIT: 3,2 Tage (Median)
       │
       ▼
  Review Done  →  Rework (oft 1-2 Runden)  →  Merge to Main
                   ⚠️ +1-2 Tage                  │
                                                   ▼
                                            QA / Test Phase
                                            (Kathrin, Mehmet)
                                            ⚠️ Testdaten: 1-2 Tage manuell
                                            ⚠️ Test-Ausführung: 1-2 Tage
                                                   │
                                                   ▼
                                            Bug Fixing (wenn nötig)
                                            ⚠️ Rückfragen: +1-2 Tage
                                                   │
                                                   ▼
                                            Release Candidate  →  CAB Approval
                                                                  ⚠️ WARTEZEIT: 5-15 Tage
                                                                       │
                                                                       ▼
                                                                  Deployment
                                                                  (Ops, 2h)
                                                                       │
                                                                       ▼
                                                                  PRODUKTION
```

**Identifizierte Bottlenecks (Team-Priorisierung per Dot-Voting):**

| Rank | Bottleneck | Wartezeit | Impact |
|------|-----------|-----------|--------|
| 1 | Code Review Queue | 3,2 Tage Median, bis 5 Tage | Blockiert alle anderen Schritte |
| 2 | CAB-Wartezeit | 5–15 Tage | Nicht im Team lösbar, aber adressierbar |
| 3 | Testdaten-Erstellung | 1–2 Tage pro Zyklus | Repetitiv, fehleranfällig |
| 4 | Dokumentation (kein Bottleneck, aber technische Schuld) | Kontinuierlich | Onboarding-Problem, Wissensmonopole |
| 5 | Rework nach Code Review | 1–2 Tage pro Runde | Qualitätsproblem, nicht Wartezeit |

**Tag 2 (Donnerstag, 4h): AI-Interventionspunkte zuordnen**

Jan bringt den AI Intervention Katalog (v1, Top 10) mit. Für jeden Bottleneck diskutiert das Team: Welche AI-Intervention könnte helfen? Ist das realistisch mit unserer Sicherheitsstufe?

**Ergebnis – AI Intervention Matching:**

| Bottleneck | AI-Intervention | Tooling (Stufe 2) | Erwarteter Effekt | Priorität Zyklus 1/2 |
|------------|----------------|--------------------|--------------------|---------------------|
| Code Review Queue | AI-assisted Pre-Review: Automatische Code-Analyse vor dem menschlichen Review (Style, Security, Complexity) | Azure OpenAI + Custom Prompt in Azure DevOps Pipeline | Review-Zeit von 3,2 auf ~1,5 Tage. Reviewer fokussiert auf Architektur/Logik statt Formatierung. | Zyklus 1: Setup. Zyklus 2: Live. |
| Testdaten-Erstellung | AI-generierte synthetische Testdaten basierend auf Schema + Geschäftsregeln | Azure OpenAI API + Python-Script | Testdaten-Erstellung von 1–2 Tagen auf 2–4 Stunden. | Zyklus 2 |
| Dokumentation | Automatische API-Doc-Generierung aus Code + Changelog aus Commit-Messages | Azure OpenAI + CI/CD-Integration | Docs immer aktuell. Onboarding-Zeit -50%. | Zyklus 2 |
| CAB-Wartezeit | Nicht direkt AI-lösbar, aber: Automatisierte Risiko-Bewertung als Input für CAB | Azure OpenAI: Change Impact Analysis | CAB-Entscheidung beschleunigt durch bessere Datenbasis. | Später (Zyklus 3+) |
| Rework nach Review | Bessere Erstqualität durch AI-assisted Development (Pair Programming mit LLM) | Continue.dev mit Azure OpenAI Backend in VS Code / IntelliJ | Weniger Rework-Runden. Review-Ergebnis: weniger Findings. | Zyklus 1: Pilot. Zyklus 2: Breit. |

**Reaktion von Stefan (Senior, skeptisch):** „Das mit dem automatischen Review klingt gut – wenn es Formatierungskram filtert, spare ich tatsächlich Zeit. Aber ich will den Code weiterhin selbst sehen." → Jan: „Genau das ist der Plan. Die AI ersetzt dich nicht – sie filtert den Noise, damit du dich aufs Wesentliche konzentrierst."

**Reaktion von Kathrin (Testerin, ängstlich):** „Und wer kontrolliert die generierten Testdaten?" → Jan: „Du. Die AI generiert Vorschläge, du prüfst und ergänzt. Dein Domänenwissen über die Schadensfall-Typen kann keine AI ersetzen." → Kathrin nickt, ist nicht überzeugt, aber akzeptiert.

#### Freitag: Wochenabschluss & Planung Woche 2

Jan teilt das VSM-Ergebnis als Foto + Confluence-Seite. Jeder im Team kann es sehen. Keine Geheimnisse. Schwerpunkte für Woche 2: Shadow AI Amnestie und Psychological Safety Workshop.

---

### Woche 2: Human Transformation & erste technische Schritte

#### Montag: Shadow AI Amnestie (1,5h, moderiert von Jan + Florian)

**Format:** Offene Session, kein Audit. Jan eröffnet: „Wir wissen alle, dass AI-Tools genutzt werden. Heute machen wir das transparent – ohne Konsequenzen, ohne Bewertung. Stattdessen: Was funktioniert? Was nicht? Und wie machen wir es sicher?"

**Ablauf:**
1. Anonymes Mentimeter-Voting: „Nutzt du privat AI-Tools für Arbeitszwecke?" → Ergebnis: 8 von 12 (67%).
2. Offene Runde (freiwillig): Wer mag, teilt seine Erfahrung.
   - Tom (Frontend): „Ich nutze Copilot seit einem Jahr. Es hilft massiv bei Angular-Templates und Unit Tests."
   - Ayşe (Backend): „Ich nutze Claude für Architektur-Reviews und API-Design. Es spart mir 1–2 Stunden pro Tag."
   - Jonas (Backend, Junior): „Ich nutze ChatGPT für Java-Patterns, die ich nicht kenne. Ist das schlimm?"
   - Stefan (Senior, skeptisch): Schweigt zuerst. Dann: „Ich habe es ein paar Mal für Regex ausprobiert. War ok." → Größeres Geständnis, als erwartet. Stefan ist nicht anti-AI, er ist anti-Hype.
3. Jan sammelt die genutzten Tools, Use Cases und Bedenken auf einem Whiteboard.
4. Gemeinsame Vereinbarung: Ab jetzt wird AI-Nutzung offen besprochen. Keine privaten Geräte mehr nötig – das offizielle Tooling kommt in Woche 3.

**Ergebnis Shadow AI Amnestie:**

| Was genutzt wird | Wer | Wofür | Risiko bisher |
|-----------------|-----|-------|---------------|
| ChatGPT Free/Plus | 5 Personen | Code Snippets, Regex, Fehlerbehebung | Code-Fragmente in Public Cloud kopiert |
| Claude Pro | 1 Person (Ayşe) | Architektur-Reviews, Dokumentation | Weniger riskant (kein Code-Kontext geteilt) |
| GitHub Copilot (privat) | 1 Person (Tom) | Code Completion, Tests | Copilot hat Code-Kontext gesehen |
| Keine Nutzung | 4 Personen | — | — |

> **Jan (intern):** Die Shadow-AI-Amnestie hat funktioniert. 8/12 haben sich geoutet, die Stimmung war erleichtert. Wichtig: Stefan hat sich beteiligt – das ist ein Signal an die anderen Skeptiker. Kathrin hat zugehört, aber nichts gesagt. Das ist ok – Teilnahme ist kein Zwang.

#### Dienstag: Psychological Safety Workshop (4h, moderiert von Florian + Jan)

**Ziele:**
1. Ängste benennen und ernst nehmen
2. Rollenbilder gemeinsam definieren
3. Vereinbarungen für AI-Experimente treffen

**Block 1: Ängste benennen (1h)**
Anonyme Karten: „Was ist deine größte Sorge bezüglich AI in unserem Team?"

Top-Ängste (nach Clustering):

| Angst | Häufigkeit | Jan's Einordnung |
|-------|------------|------------------|
| „Mein Job wird überflüssig" | 4 Karten | Die Kernangst. Muss direkt adressiert werden. |
| „AI-generierter Code hat Fehler, die niemand findet" | 3 Karten | Berechtigt. Qualitätssicherungsprozess definieren. |
| „Ich bin zu alt / zu langsam, um das zu lernen" | 2 Karten | Vermutlich Stefan und Kathrin. Brauchen persönliche Begleitung. |
| „Der Betriebsrat stoppt es und wir haben umsonst investiert" | 2 Karten | Realistisches Risiko. Transparent kommunizieren. |
| „Es wird Druck geben, noch schneller zu liefern" | 3 Karten | Berechtigt. Erwartungsmanagement mit Sponsor nötig. |

**Block 2: Rollenentwicklung (1,5h)**
Jan präsentiert das Rollenentwicklungsmodell – nicht als fertige Vorgabe, sondern als Diskussionsgrundlage. Das Team erarbeitet gemeinsam:

| Rolle | Heute | Morgen (gemeinsam definiert) | Vereinbarung |
|-------|-------|------------------------------|--------------|
| Backend-Dev (Junior) | Schreibt Code nach Vorgabe, viel Copy-Paste | AI-augmented Developer: Nutzt AI als Pair Partner, fokussiert auf Verständnis statt Tippen | Jonas: „Das klingt besser als das, was ich heute mache." |
| Backend-Dev (Senior) | Architektur, Code Review, Mentoring | AI Architect: Review wird effizienter (AI filtert Noise), mehr Zeit für Architektur und Mentoring | Stefan: „Wenn ich weniger Formatierungs-PRs reviewen muss, hab ich mehr Zeit für die echten Probleme." → Durchbruch. |
| Tester/QA | Manuelle Testfälle, Testdaten von Hand | Quality Intelligence: AI generiert Testdaten und Vorschläge, Tester definiert Strategie und validiert | Kathrin: „Ich will nicht, dass die AI meine Testfälle schreibt. Aber Testdaten generieren – das könnte ich mir vorstellen." → Kompromiss. |
| PO | Story-Erstellung, Priorisierung | AI-informed PO: Nutzt AI für Story-Drafts und Refinement-Vorbereitung | Diana: „Wenn ich damit bessere Akzeptanzkriterien schreiben kann, bin ich dabei." |

**Block 3: Vereinbarungen (1h)**
Das Team definiert seine „AI-Spielregeln":

1. ✅ AI-generierter Code wird immer reviewed (kein „AI hat gesagt, also stimmt es").
2. ✅ Wer AI nutzt, dokumentiert es im PR-Kommentar (Transparenz, kein Verstecken).
3. ✅ Fehler durch AI sind Lernmomente, keine Schuld. Kein Finger-Pointing.
4. ✅ Jeder bestimmt selbst sein Tempo. Niemand wird gezwungen, AI zu nutzen.
5. ✅ Wir messen Ergebnisse, nicht Tool-Nutzung. (Kein „Du nutzt Copilot zu wenig"-Tracking.)

#### Mittwoch–Donnerstag: Technical Enablement starten

**Ayşe (Technical AI Lead) + Jan:**

- Azure OpenAI Service ist provisioniert. GPT-4o und GPT-4o-mini sind verfügbar.
- **Continue.dev Setup:** Ayşe konfiguriert das Continue.dev-Plugin für VS Code und IntelliJ mit dem Azure OpenAI Backend als Gegenstelle. Kein Code verlässt den FinSecure-Tenant.
- **Test auf 3 Rechnern:** Ayşe, Tom und Jonas installieren Continue.dev und testen es mit nicht-produktivem Code (ein kleines Demo-Projekt).
- **Ergebnis:** Funktioniert. Latenz akzeptabel (~1–2 Sekunden für Completions). GPT-4o liefert brauchbare Java/Spring-Boot-Vorschläge.

**Prompt Library v0:**
Ayşe erstellt eine erste Sammlung von 5 Team-Prompts:
1. Code Review Checkliste (Security, Performance, Style)
2. Unit Test Generator für Spring Boot Services
3. JavaDoc aus Code generieren
4. Angular Component Boilerplate
5. SQL Query Optimizer

#### Freitag: Wochenabschluss

Jan teilt Status-Update mit dem Team (Slack/Teams). Keine große Präsentation, sondern: „Das haben wir diese Woche geschafft, das machen wir nächste Woche."

Dr. Kessler bekommt ein 15-Minuten-Update: Shadow AI Amnestie war ein Erfolg, Workshop-Feedback ist positiv, Tooling steht technisch. Betriebsrat wird nach Zyklus 1 informiert.

---

### Woche 3: Erste AI-Integration live

#### Montag–Mittwoch: Continue.dev Rollout auf das gesamte Team

**Schrittweises Vorgehen:**
- Montag: Ayşe führt Backend-Devs einzeln ein (30 Min. pro Person). Zeigt Setup, Basis-Prompts, und die „AI-Spielregeln" in Aktion.
- Dienstag: Tom führt Frontend-Devs ein. Sara (Frontend) ist anfangs skeptisch: „Angular-spezifische Dinge kann das doch nicht." Tom zeigt ihr live eine Component-Generierung. Sara: „Ok, das spart mir tatsächlich 20 Minuten."
- Mittwoch: Kathrin und Mehmet (Tester) bekommen eine angepasste Einführung – Fokus auf Testfall-Generierung und Testdaten-Vorschläge, nicht auf Code-Completion.

**Stefan (Senior, skeptisch) – Sondergespräch mit Jan:**
Stefan hat Continue.dev installiert, aber kaum genutzt. Jan spricht ihn an: „Was bräuchtest du, damit es dir nützt?" Stefan: „Ich schreibe nicht mehr so viel Code. Mein Hauptproblem sind die PRs." → Jan: „Genau dafür bauen wir das AI-assisted Pre-Review. Du könntest das mit Ayşe designen – du weißt am besten, worauf ein guter Review achtet." → Stefan wird vom Skeptiker zum Mitgestalter des Review-Prompts. Kritischer Wendepunkt.

#### Donnerstag: AI-assisted Pre-Review – Design

Stefan und Ayşe designen den Pre-Review-Prompt. Sie definieren, was die AI prüfen soll:
- Code Style (FinSecure-Coding-Guidelines)
- Offensichtliche Security-Issues (SQL Injection, XXS, unvalidierte Inputs)
- Complexity Metrics (Methoden > 30 Zeilen, zyklomatische Komplexität > 10)
- Test Coverage Hinweis (neue Methode ohne Test)

Was die AI NICHT prüfen soll:
- Architekturentscheidungen
- Business-Logik-Korrektheit
- Fachliche Kommentare

**Technische Umsetzung:** Ein Python-Script, das bei PR-Erstellung den Diff an Azure OpenAI sendet und das Ergebnis als PR-Kommentar postet. Integration über Azure DevOps Pipeline Trigger.

#### Freitag: Sprint-Review anpassen

Florian (Scrum Master) integriert ein 10-Minuten-AI-Segment in die Sprint-Review: „Was haben wir diese Woche mit AI gemacht? Was hat funktioniert, was nicht?" Keine zusätzliche Zeremonie – Einbettung in bestehende Rituale.

**Erste Beobachtungen:**
- Jonas (Junior): „Ich habe einen Service in der Hälfte der Zeit geschrieben. Aber ich habe 20 Minuten gebraucht, den Prompt richtig zu formulieren."
- Ayşe: „Continue.dev schlägt manchmal veraltete Spring-Boot-2-Patterns vor. Wir brauchen einen System Prompt, der Spring Boot 3 erzwingt."
- Kathrin: Hat Continue.dev nicht genutzt. Das ist ok – Vereinbarung #4.

---

### Woche 4: Review & Anpassung – Readiness Gate Zyklus 1

#### Montag–Dienstag: AI Pre-Review Pilot-Test

Stefan und Ayşe testen das Pre-Review-Script an 5 existierenden PRs (retrospektiv). Ergebnisse:

| PR | AI-Findings | Stefan's Bewertung |
|----|------------|---------------------|
| PR-341 | 2 Style-Issues, 1 Missing-Test-Hinweis | „Korrekt. Das hätte ich auch gesagt, aber 5 Minuten statt 45." |
| PR-342 | 0 Findings | „Stimmt, war ein sauberer PR." |
| PR-343 | 1 Security-Warnung (SQL-Fragment), 3 Style | „Security-Fund ist gut. Style-Findings sind teilweise Geschmackssache." |
| PR-344 | 4 Findings, davon 1 False Positive | „False Positive bei einem Factory-Pattern. Muss in den Prompt." |
| PR-345 | 2 Complexity-Warnungen | „Berechtigt. Methode war 60 Zeilen lang." |

**Stefans Fazit:** „4 von 5 waren nützlich. Wenn das in der Pipeline läuft, spare ich pro PR 20–30 Minuten. Dann reviewe ich lieber mehr PRs mit Fokus auf die wichtigen Dinge." → Stefan wird vom Skeptiker zum Befürworter. Das ist der Beweis, dass die Human-Dimension funktioniert: Nicht Technik überzeugt, sondern erlebter Nutzen.

#### Mittwoch: Zyklus-1-Retrospektive (2h, gesamtes Team)

**Format:** Standard-Retro (Was lief gut? Was lief nicht? Was ändern wir?)

**Was lief gut:**
- Shadow AI Amnestie: „Endlich können wir offen reden." (Tom)
- Workshop Rollenbilder: „Gut, dass wir das gemeinsam definiert haben, nicht von oben verordnet." (Diana)
- Continue.dev für schnelle Code-Aufgaben: „Boilerplate schreiben ist nicht mehr mein Job." (Jonas)
- Stefan gestaltet Pre-Review mit: „Er hat sich selbst überzeugt – das war besser als jede Präsentation." (Florian)

**Was lief nicht:**
- Prompt-Qualität noch niedrig: „Ich formuliere schlecht und bekomme schlechte Ergebnisse." (Markus)
- Kathrin nutzt die Tools nicht: „Ich fühle mich noch nicht bereit." → Team akzeptiert das.
- Continue.dev schlägt veraltete Patterns vor: „Braucht bessere Konfiguration." (Ayşe)
- Azure OpenAI Latenz in Stoßzeiten: „Manchmal 5 Sekunden Wartezeit." (Priya)

**Was ändern wir:**
- Prompt Engineering Mini-Workshop in Zyklus 2 (Ayşe leitet)
- System Prompt für Continue.dev optimieren (Spring Boot 3, FinSecure-Coding-Guidelines)
- Kathrin bekommt ein persönliches Angebot: Testdaten-Generierung als ihren eigenen Use Case in Zyklus 2.

#### Donnerstag: Metriken-Review

Jan zieht die ersten Metriken nach 4 Wochen (begrenzte Aussagekraft, aber Trend-Indikation):

| Metrik | Baseline | Nach Zyklus 1 | Delta | Anmerkung |
|--------|----------|---------------|-------|-----------|
| PR Review Time | 3,2 Tage | 2,8 Tage | -12% | Pre-Review noch nicht live, Effekt nur durch Awareness |
| Lead Time | 22 Tage | 22 Tage | 0% | Erwartet – CAB und Sprint-Rhythmus unverändert |
| Change Failure Rate | 12% | 11% | -1pp | Statistisch nicht signifikant nach 2 Sprints |
| Deployment Frequency | 1x / 2 Wo | 1x / 2 Wo | 0% | Erwartet – Deployment-Rhythmus nicht adressiert in Zyklus 1 |
| AI-assisted Commits | 0% | ~15% (geschätzt) | +15pp | Basierend auf Selbstauskunft, noch keine Telemetrie |

#### Freitag: Readiness Gate – Entscheidung

**Anwesend:** Jan, Dr. Kessler (Sponsor), Florian, Ayşe.

**Frage: Erweitern, Vertiefen oder Konsolidieren?**

**Bewertung:**
- ✅ Governance-Freigabe steht (Stufe 2, Azure OpenAI)
- ✅ Team-Buy-in ist hoch (10/12 positive Haltung)
- ⚠️ Adoption Rate noch gering (15% AI-assisted Commits, Ziel: 60%)
- ✅ Kulturelle Readiness deutlich gestiegen (Stefan aktiv, Shadow AI transparent)
- ⚠️ Technische Integration noch oberflächlich (nur IDE-Plugin, noch kein Pipeline-Integration)

**Entscheidung: VERTIEFEN.**
Zyklus 2 bleibt bei Team Claim, aber geht tiefer: Pre-Review in Pipeline live, Testdaten-Generierung starten, Prompt Engineering Skill-Building. Keine Erweiterung auf andere Teams – das wäre zu früh.

**Dr. Kessler:** „Die Metriken haben sich noch nicht bewegt. Ist das normal?" → Jan: „Ja. Die ersten 4 Wochen sind Foundation – Governance, Trust, erste Werkzeuge. Die Metriken werden sich in Zyklus 2 und 3 bewegen, wenn die Pipeline-Integrationen live gehen und das Team routinierter wird. Bain zeigt, dass Teams typischerweise 12–16 Wochen brauchen, bevor messbare DORA-Verbesserungen sichtbar werden."

---

## Zyklus 2: Vertiefung & erste messbare Ergebnisse (Wochen 5–8)

### Zyklus-Ziel

> Am Ende von Zyklus 2 ist das AI-assisted Pre-Review in der Pipeline live und hat die Review-Wartezeit messbar reduziert. Testdaten-Generierung funktioniert. Das Team hat Prompt-Engineering-Grundlagen, und die DORA-Metriken zeigen einen positiven Trend.

### Schwerpunkte pro Dimension in Zyklus 2

| Dimension | Intensität | Schwerpunkt |
|-----------|------------|-------------|
| D1 **C** – Compliance & Governance | ✅ Aktiv | BR-Update, Dokumentation der Policy-Anwendung |
| D2 **R** – Readiness (Human & Cultural) | ✅ Aktiv | Prompt Engineering Workshop, Kathrin einbinden |
| D3 **A** – Adoption & Usage | 📊 Monitoring | Metriken tracken, Mid-Pilot CRAFT-Check |
| D4 **F** – Flow & Process Integration | 🔥 Hoch | Pre-Review live, Testdaten-Generierung implementieren |
| D5 **T** – Technical Enablement | 🔥 Hoch | Pipeline-Integration, System-Prompt-Optimierung |

---

### Woche 5: Orientierung & Skill-Building

#### Montag: Zyklus-2-Kickoff (1h)

Jan teilt die Zyklus-1-Ergebnisse und den Plan für Zyklus 2. Schwerpunkt: „Jetzt gehen wir von Experimentieren zu Einbetten."

#### Dienstag: Prompt Engineering Workshop (3h, Ayşe leitet)

**Teilnehmer:** Alle, die wollen (10 von 12 kommen, Kathrin und Stefan auch – Stefan „weil ich den Pre-Review-Prompt verstehen will").

**Inhalte:**
1. Grundlagen: System Prompt vs. User Prompt, Temperature, Kontext-Fenster
2. Live-Übungen mit dem Azure OpenAI Playground (FinSecure-Tenant, sichere Umgebung)
3. Team-spezifische Patterns: Java-Code-Review-Prompt, Testfall-Generierung, Dokumentation
4. Anti-Patterns: Zu vage Prompts, halluzinierte Methoden, Blindes Copy-Paste

**Ergebnis:** Das Team hat jetzt ein gemeinsames Grundverständnis. Markus (der mit schlechten Prompts kämpfte) sagt: „Jetzt verstehe ich, warum meine Ergebnisse schlecht waren – ich habe nie Kontext gegeben."

#### Mittwoch: Kathrins Use Case – Testdaten-Generierung

Jan und Ayşe setzen sich mit Kathrin zusammen. Statt ihr ein Tool vorzusetzen, fragen sie: „Zeig uns, wie du heute Testdaten erstellst."

**Kathrins aktueller Prozess:**
1. Schadensfall-Typ auswählen (z.B. Kfz-Unfall mit Personenschaden)
2. Manuell in der Datenbank: Versicherungsnehmer anlegen, Police erstellen, Schadensfall mit Parametern befüllen
3. Für jeden Testfall: 15–20 Datenbankeinträge über 5 Tabellen
4. Pro Testzyklus: 20–30 Konstellationen → 1–2 Tage Arbeit

**AI-Lösung (gemeinsam designt):**
- Ein Python-Script, das basierend auf Schema-Definition und Geschäftsregeln synthetische Testdaten generiert
- Kathrin definiert die Regeln: „Kfz-Unfall mit Personenschaden braucht: Police-Typ A oder B, Versicherungsnehmer > 18 Jahre, Schadenshöhe zwischen 500 und 50.000 EUR, …"
- Azure OpenAI generiert Varianten innerhalb dieser Regeln
- Kathrin prüft und gibt frei

**Kathrins Reaktion:** „Das ist eigentlich genau das, was ich mir wünsche. Ich sage, was ich brauche, und die AI macht die Fleißarbeit." → Der Durchbruch bei Kathrin. Sie fühlt sich nicht ersetzt, sondern entlastet.

#### Donnerstag–Freitag: Pipeline-Integration Pre-Review

Ayşe und Jonas (der sich als Pipeline-Enthusiast herausgestellt hat) bauen die Azure DevOps Pipeline-Integration:

1. Trigger: Neuer Pull Request → Webhook
2. Pipeline-Step: Diff extrahieren, an Azure OpenAI senden mit Review-Prompt (Stefan-approved)
3. Ergebnis als PR-Kommentar posten (Label: „AI Pre-Review")
4. Reviewer sieht: AI-Findings als ersten Kommentar, kann sie ignorieren oder aufgreifen

**Technische Herausforderung:** Große PRs (>500 Zeilen Diff) übersteigen das Context Window. Lösung: Chunking – Diff in Dateien aufteilen, pro Datei separat reviewen.

**Go-Live-Entscheidung:** Montag Woche 6, zunächst nur für Backend-PRs (wo der Bottleneck am größten ist).

---

### Woche 6: Live-Integration & Iteration

#### Montag: AI Pre-Review geht live 🚀

Erster „echter" PR mit AI-Pre-Review: PR-358 von Priya (Backend, neuer Endpoint für Schadensfall-Statusabfrage).

**AI Pre-Review Ergebnis (automatisch als Kommentar):**
```
🤖 AI Pre-Review (automated)

✅ Security: No obvious vulnerabilities found
⚠️ Style: Method `getClaimStatus()` exceeds 35 lines (guideline: max 30)
⚠️ Test Coverage: New method has no unit test
ℹ️ Suggestion: Consider extracting validation logic into a separate method

Note: This is an automated pre-review. Human review is still required.
```

**Stefans Review danach:** 25 Minuten statt üblicher 45–60. Er sagt: „Die AI hat die Formatierungssachen schon abgedeckt. Ich konnte mich auf die Fachlogik konzentrieren. Der Extrahierungs-Vorschlag war übrigens gut."

#### Dienstag–Mittwoch: Testdaten-Generator v1

Ayşe und Kathrin bauen den Testdaten-Generator. Kathrin definiert 8 Schadensfall-Konstellationen mit Regeln, Ayşe implementiert die AI-Anbindung.

**Erster Test:** Kathrin generiert 25 Testdaten-Sets in 45 Minuten. Bisher: 1,5 Tage. Sie prüft die Daten, findet 3 Inkonsistenzen (Schadenshöhe nicht plausibel für Schadenstyp), korrigiert den Prompt.

**Kathrin am Ende des Tages:** „Das ist wie ein Assistent, der meine Regeln kennt. Ich muss die Regeln immer noch definieren – aber die Fleißarbeit macht die AI. Damit kann ich mehr Konstellationen testen als vorher." → Kathrin ist jetzt AI-Nutzerin. Sie hat ihren eigenen Weg gefunden.

#### Donnerstag: Betriebsrats-Update

Jan und Dr. Kessler informieren den Betriebsrat wie vereinbart:

- Was läuft: AI-unterstützte Code Reviews und Testdaten-Generierung
- Was nicht passiert: Keine Überwachung individueller Produktivität, keine Stellenstreichungen
- Feedback vom Team: Positive Stimmung, Spielregeln vom Team selbst definiert
- Kathrins Erfahrung: Jan erzählt (mit Kathrins Erlaubnis) ihre Geschichte. Der BR ist beeindruckt: „Wenn die Mitarbeiterin selbst gestaltet, haben wir weniger Bedenken."

**BR-Ergebnis:** Pilot darf weiterlaufen. BR möchte in 8 Wochen nochmal informiert werden und bei einer Ausweitung auf andere Teams frühzeitig eingebunden werden.

#### Freitag: System-Prompt-Optimierung

Ayşe optimiert den Continue.dev System Prompt basierend auf 4 Wochen Erfahrung:

Hinzugefügt:
- „Verwende Spring Boot 3.x Patterns. Vermeide deprecated APIs."
- „Befolge FinSecure Coding Guidelines: max 30 Zeilen pro Methode, keine Raw SQL, Lombok für DTOs."
- „Bei Security-relevanten Operationen: Immer Input-Validierung vorschlagen."

Team-Feedback: „Die Vorschläge sind jetzt deutlich besser als in Woche 3." (Markus)

---

### Woche 7: Verbreiterung & Dokumentation

#### Montag–Dienstag: Continue.dev für alle optimiert

Alle 12 Team-Mitglieder haben jetzt Continue.dev mit dem optimierten System Prompt. Die Nutzung ist freiwillig, aber der Impuls kommt jetzt aus dem Team selbst:

- Mehmet (Tester, bisher zurückhaltend) fragt Kathrin: „Kannst du mir zeigen, wie du die Testdaten generierst?" → Peer Learning funktioniert.
- Lena (Backend) beginnt, API-Dokumentation mit AI zu generieren – initial auf eigene Initiative.
- Stefan nutzt Continue.dev jetzt für Architektur-Reviews: Er füttert Design-Dokumente und lässt sich alternative Ansätze vorschlagen.

#### Mittwoch: Dokumentations-Quick-Win

Lenas Initiative wird aufgegriffen. Jan und Lena designen einen CI/CD-Step, der bei jedem Merge auf Main automatisch:
1. JavaDoc für geänderte Klassen generiert (Azure OpenAI)
2. Changelog-Einträge aus Commit-Messages erstellt
3. Beides als Confluence-Seite aktualisiert

**Erster Durchlauf:** 15 Minuten Laufzeit, 12 API-Docs aktualisiert, 1 Changelog generiert. Lena: „Das hat mir einen halben Tag gespart, den ich normalerweise vor dem Release für Doku einplane."

#### Donnerstag–Freitag: Metriken & Vorbereitung Readiness Gate

Jan zieht die Woche-7-Metriken und bereitet den Zyklus-2-Abschluss vor.

**Zwischenstand Metriken:**

| Metrik | Baseline (Woche 0) | Nach Zyklus 1 (Woche 4) | Aktuell (Woche 7) | Delta gesamt |
|--------|--------------------|--------------------------|--------------------|--------------|
| PR Review Time | 3,2 Tage | 2,8 Tage | 1,6 Tage | **-50%** ✅ |
| Lead Time | 22 Tage | 22 Tage | 19 Tage | -14% |
| Change Failure Rate | 12% | 11% | 9% | -3pp |
| Deployment Frequency | 1x / 2 Wo | 1x / 2 Wo | 1x / 2 Wo | 0% |
| AI-assisted Commits | 0% | ~15% | ~40% | +40pp |
| Testdaten-Erstellungszeit | 1–2 Tage | 1–2 Tage | 3–4 Stunden | **~-70%** ✅ |
| Flow Efficiency | ~18% | ~18% | ~24% | +6pp |

> **Analyse:** Die PR Review Time hat sich halbiert – das ist der stärkste Einzeleffekt und validiert die Value-Stream-Analyse (Bottleneck #1 = Code Review Queue). Lead Time ist leicht gesunken, wird aber weiterhin vom CAB-Rhythmus dominiert. Das ist ein strukturelles Problem, das über diesen Pilot hinausgeht. Die Deployment Frequency hat sich nicht verändert – sie hängt am Sprint-Rhythmus, der nicht Scope dieses Pilots war.

---

### Woche 8: Review, Readiness Gate & Ausblick

#### Montag: Zweiter Pulse Check (CRAFT)

Alle 12 Teammitglieder füllen den Pulse Check erneut aus:

| CRAFT-Dimension | Baseline (Woche 0) | Nach Zyklus 2 (Woche 8) | Delta |
|-----------------|--------------------|-----------------------------|-------|
| **C** – Compliance & Governance | 1,2 | 2,8 | +1,6 |
| **R** – Readiness (Human & Cultural) | 2,3 | 3,5 | +1,2 |
| **A** – Adoption & Usage | 1,0 | 2,8 | +1,8 |
| **F** – Flow & Process Integration | 1,0 | 2,4 | +1,4 |
| **T** – Technical Enablement | 1,3 | 3,2 | +1,9 |
| **Gesamt** | **1,4 (Exploring)** | **3,0 (Embedding)** | **+1,6** |

> **Interpretation:** Das Team hat sich in 8 Wochen von „Exploring" zu „Embedding" entwickelt. Readiness (3,5) liegt über der technischen Adoption (2,8) – das ist ideal: die Bereitschaft ist da, die Nutzung kann nachziehen. Flow & Process Integration (2,4) ist das Schlusslicht – logisch, weil erst zwei Pipeline-Integrationen existieren (Pre-Review und Testdaten).

#### Dienstag: Zyklus-2-Retrospektive (2h)

**Was lief gut:**
- Pre-Review hat den größten Bottleneck adressiert: „Ich reviewe jetzt 2 PRs pro Tag statt 1." (Stefan)
- Kathrin ist dabei: „Ich habe meinen eigenen Weg gefunden." (Kathrin → Applaus vom Team)
- Team-Spirit: „Es fühlt sich an, als hätten wir etwas gemeinsam aufgebaut, nicht verordnet bekommen." (Florian)
- Dokumentation wird automatisch aktuell: „Confluence lebt wieder." (Sara)

**Was lief nicht:**
- Deployment Frequency unverändert: „Das CAB-Problem können wir im Team nicht lösen." (Diana)
- Prompt-Qualität variiert stark: „Manche bekommen super Ergebnisse, andere kämpfen." (Mehmet)
- Continue.dev Latenz in Peaks: „Morgens um 9 ist es langsam, weil alle gleichzeitig queryen." (Tom)
- Kein Monitoring der AI-Nutzung: „Wir wissen nicht genau, wie viele Commits AI-unterstützt sind." (Jan)

**Was brauchen wir für Zyklus 3:**
- Mehr Prompt-Templates für spezifische Use Cases (das Team sammelt bereits)
- Azure OpenAI Quota prüfen (Latenz-Problem)
- Gespräch mit CAB über Fast-Track für Low-Risk-Changes
- Telemetrie einbauen (AI-Nutzung messen, aber anonym – Vereinbarung #5 respektieren)

#### Mittwoch: Readiness Gate – Entscheidung

**Anwesend:** Jan, Dr. Kessler, Florian, Ayşe, Dr. Eva Richter (Governance).

**Bewertung Readiness-Gate-Kriterien:**

| Kriterium | Status | Bewertung |
|-----------|--------|-----------|
| Adoption Rate > 60% | 40% AI-assisted Commits | ⚠️ Unter Ziel, aber starker Trend |
| DORA-Metriken stabil oder verbessert | PR Review -50%, Lead Time -14%, CFR -3pp | ✅ Klar verbessert |
| Kein offener Governance-Blocker | BR-Update positiv, Azure OpenAI Stufe 2 läuft | ✅ |
| Readiness positiv | CRAFT R = 3,5, Team-Feedback sehr positiv | ✅ |
| Technische Basis solide | 2 Pipeline-Integrationen, Continue.dev für alle | ✅ |

**Entscheidung: ERWEITERN.**
Zyklus 3 nimmt ein zweites Team auf. Team Claim wird zur Blueprint-Referenz. Ayşe und Tom werden Champions, die das zweite Team mit onboarden. Stefan wird gebeten, den Pre-Review-Ansatz im Architecture Board zu präsentieren – er sagt zu. (Vor 8 Wochen hätte er abgelehnt.)

**Dr. Kessler:** „Die PR-Review-Zeit hat sich halbiert. Das ist ein Ergebnis, das ich zeigen kann. Lead Time ist noch nicht da, aber ich verstehe den CAB-Bottleneck – das ist ein strukturelles Thema, das ich auf Management-Ebene adressieren muss."

#### Donnerstag–Freitag: Pilot-Report & Skalierungsvorbereitung

Jan erstellt den Pilot-Report für interne und externe Nutzung:

**Pilot-Report Kernzahlen:**

| KPI | Vorher | Nachher (8 Wochen) | Veränderung |
|-----|--------|---------------------|-------------|
| PR Review Time | 3,2 Tage | 1,6 Tage | **-50%** |
| Lead Time for Changes | 22 Tage | 19 Tage | -14% |
| Change Failure Rate | 12% | 9% | -25% |
| Testdaten-Erstellungszeit | 1–2 Tage | 3–4 Stunden | **-70%** |
| CRAFT Gesamt | 1,4 (Exploring) | 3,0 (Embedding) | +1,6 Stufen |
| AI-assisted Commits | 0% | ~40% | — |
| Team-Zufriedenheit (NPS) | Nicht erhoben | 78 | Baseline für Folge-Zyklen |

**Investition vs. Wert (vereinfacht):**

| Position | Kosten (8 Wochen) |
|----------|--------------------|
| Externer AI Transformation Manager (80%) | ~32 PT |
| Interne Zusatzkapazität (Ayşe 30%, Florian 20%, Tom 20%) | ~28 PT |
| Azure OpenAI Service | ~800 EUR |
| Continue.dev Lizenzen | Open Source (kostenlos) |
| **Gesamt** | **~60 PT + 800 EUR** |

| Wertbeitrag (geschätzt, konservativ) |
|--------------------------------------|
| Zeitersparnis Code Reviews: ~3 Stunden / Woche × 8 Wochen = 24h |
| Zeitersparnis Testdaten: ~10 Stunden / Sprint × 4 Sprints = 40h |
| Zeitersparnis Dokumentation: ~4 Stunden / Sprint × 4 Sprints = 16h |
| **Direkte Zeitersparnis: ~80 Stunden in 8 Wochen** |
| Indirekter Wert: Schnelleres Feedback, weniger Rework, bessere Qualität → nicht quantifiziert |

> **Ehrliche Bewertung:** Der ROI des Pilots ist noch nicht positiv, wenn man die externe Begleitung einrechnet. Das ist erwartbar – der Pilot ist eine Investition in Lernen und Validierung, nicht in sofortige Effizienz. Der ROI wird positiv, wenn (a) die externen Kosten sinken (Team wird selbstständig) und (b) die Interventionen auf weitere Teams skalieren (einmalige Setup-Kosten, wiederkehrender Nutzen).

---

## Lessons Learned: Was hat das Framework validiert – und was nicht?

### Validiert ✅

| Framework-Element | Beobachtung im Pilot |
|-------------------|---------------------|
| **Value Stream First** funktioniert | Das VSM-Workshop-Ergebnis hat direkt die richtigen Interventionen identifiziert. Pre-Review adressierte den größten Bottleneck → größter Impact. |
| **Shadow AI Amnestie** ist ein Gamechanger | 8/12 haben sich geoutet. Die Energie im Team war sofort anders. Wichtigstes Learning: Nicht verbieten, sondern kanalisieren. |
| **Rollenentwicklung bottom-up** erzeugt Buy-in | Das Team hat seine eigenen Rollenbilder definiert. Kathrin hat ihren eigenen Use Case gefunden. Stefan hat sich selbst überzeugt. Das wäre top-down nicht passiert. |
| **4-Wochen-Zyklen** erzwingen Fokus | Zyklus 1 war Foundation, Zyklus 2 war Vertiefung. Die klare Taktung verhinderte Scope Creep und ewiges Planen. |
| **Readiness Gates** verhindern Overscaling | Nach Zyklus 1 war Erweitern zu früh – Vertiefen war richtig. Das Gate hat eine voreilige Skalierung verhindert. |

### Teilweise validiert ⚠️

| Framework-Element | Beobachtung | Anpassungsbedarf |
|-------------------|-------------|------------------|
| **CRAFT-Modell** | Die 5 Dimensionen bilden die Realität gut ab. Die Scoring-Logik ist aber noch zu grob – 5 Stufen sind zu wenig Granularität für Fortschrittsmessung innerhalb eines Quartals. | Zwischenstufen einführen (z.B. 1,0 – 1,5 – 2,0 statt nur ganzzahlig). |
| **Pulse Check Dauer** | 15 Minuten war realistisch beim ersten Mal. Beim zweiten Mal sagten 3 Personen: „Die Fragen sind gleich, das nervt." | Adaptive Fragen: Beim zweiten Durchlauf nur geänderte Dimensionen vertiefen. |
| **Champion-Rolle** | Tom war ein guter Champion für Frontend. Für Backend fehlte ein expliziter Champion – Ayşe hat es implizit gemacht, aber sie war gleichzeitig Technical AI Lead. | Pro Technologie-Bereich einen Champion. Rollen nicht doppelt besetzen. |

### Nicht validiert / offen ❌

| Framework-Element | Warum nicht? | Nächster Schritt |
|-------------------|-------------|------------------|
| **Skalierung auf mehrere Teams** | Pilot war auf 1 Team begrenzt. | Zyklus 3–4 wird die Skalierung testen. |
| **Business Impact (Schicht 3)** | 8 Wochen sind zu kurz für EBIT-Impact. | Quartalsweise Messung ab Zyklus 5. |
| **AI Transformation Manager als dauerhafte Rolle** | Jan war extern. Kann ein interner diese Rolle übernehmen? | Florian als Kandidat für eine interne Transition identifiziert. Ausbildungspfad nötig. |
| **Governance für Stufe 3 (Air-gapped)** | Nicht relevant für diesen Pilot. | Separat testen, wenn ein Public-Sector-Team als Pilot dazukommt. |

---

## Ausblick: Was passiert in Zyklus 3–6?

| Zyklus | Schwerpunkt | Erwartete Ergebnisse |
|--------|-------------|----------------------|
| 3 | Zweites Team onboarden, CAB-Prozess adressieren | Blueprint-Transfer validiert, Fast-Track-Proposal beim CAB eingereicht |
| 4 | Agentic Workflows (CI/CD-Automatisierung) | AI-gesteuerte Deployment-Risikobewertung, automatische Release Notes |
| 5 | Institutionalisierung | AI-Nutzung in Onboarding-Prozess, Rollenentwicklung in HR integriert, CoP gegründet |
| 6 | Messung & Skalierungsentscheidung | Vollständiger DORA-Vergleich Baseline vs. 6 Monate, Business Case für organisationsweite Skalierung |

---

*AI Transformation Framework (CRAFT) – Use Case FinSecure AG*
*Version 1.0 | Februar 2026 | Fiktives Szenario zu Illustrationszwecken*
