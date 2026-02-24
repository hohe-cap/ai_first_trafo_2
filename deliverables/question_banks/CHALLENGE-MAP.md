# CRAFT Challenge Map — Diagnostic Backward Design

**Version:** 0.1 DRAFT
**Erstellt:** 2026-02-24
**Zweck:** Systematische Herausforderungen pro CRAFT-Dimension als Grundlage für das Backward-Design der Question Banks

---

## 1. Methodischer Rahmen

### 1.1 Warum Backward Design?

Der klassische Ansatz "Fragen schreiben → hoffen, dass sie etwas Nützliches aufdecken" hat ein Validierungsproblem: Es gibt keine Garantie, dass die Antworten tatsächlich diagnostische Kraft haben.

**Backward Design dreht die Logik um:**

```
Schritt 1: Herausforderungen identifizieren
           "Welche typischen Probleme treten bei AI-Transformationen auf?"

Schritt 2: Diagnostische Signale definieren
           "Woran erkennen wir dieses Problem in einer Befragung?"

Schritt 3: Fragen designen / validieren
           "Welche Fragen erzeugen genau diese Signale?"

Schritt 4: Intervention verknüpfen
           "Was tun wir, wenn das Signal auftritt?"
```

### 1.2 Drei Frage-Rollen im Zusammenspiel

Nicht alle Fragen müssen "aufdeckend" sein. Drei Frage-Typen erfüllen unterschiedliche diagnostische Rollen:

| Rolle | Frage-Typ | Diagnostische Funktion | Beispiel |
|-------|-----------|----------------------|----------|
| **Standort** | Maturity-Frage | WO stehst du? Definiert den Möglichkeitsraum. Implizit auch Defizit-Anzeige: Jedes Level (außer 5) zeigt eine Lücke zur nächsten Stufe | "Welche Stufe beschreibt eure Governance?" |
| **Root Cause** | MC-Diagnostik | WARUM bist du dort? Identifiziert die spezifische Ursache hinter dem Score | "Was blockiert euch am häufigsten?" |
| **Qualitativ** | Powerful Question | WAS brauchst du? Validiert, entdeckt Unerwartetes, gibt Stimme | "Was müsste sich ändern, damit...?" |

**Die Kombination ist mächtiger als jeder Teil allein:**
- Maturity Level 2 → "Experimenting" (Standort)
- PLUS Blocker = "Sorge um Rolle" → Angst-basierte Root Cause
- PLUS Cross-Dimension: T=4 → Technik ist nicht das Problem
- → Intervention: Rollenentwicklungs-Workshop, NICHT mehr Tooling

### 1.3 Maturity-Level als Defizit-Landkarte

Jede Maturity-Stufe beschreibt implizit die Herausforderungen, die für den Sprung zur nächsten Stufe überwunden werden müssen:

| Transition | Typische Blockade | Charakter |
|-----------|-------------------|-----------|
| **1→2** (Exploring → Experimenting) | Kein Zugang, kein Wissen, keine Erlaubnis | **Eisbrecher-Problem** |
| **2→3** (Experimenting → Embedding) | Sporadisch → systematisch, individuell → Team | **Verstetigung** |
| **3→4** (Embedding → Scaling) | Grundlagen → Tiefe, Nutzung → Wirkung, Messung | **Professionalisierung** |
| **4→5** (Scaling → Evolving) | Effektiv → Innovativ, reaktiv → proaktiv | **Selbsttragende Optimierung** |

### 1.4 Cross-Referencing als diagnostischer Verstärker

Einzelne Antworten diagnostizieren. **Antwort-Kombinationen** entlarven:

**Cross-Dimension-Patterns:**

| Pattern | Diagnose | Implikation |
|---------|----------|-------------|
| T hoch, A niedrig | "Build it and they won't come" | Problem liegt bei R oder F, nicht bei T |
| R hoch, A niedrig | "Willig aber unfähig" | Fehlender Zugang (T) oder Governance-Block (C) |
| A hoch, F niedrig | "Individuell ja, im Prozess nein" | Workflow-Redesign nötig |
| C niedrig, Rest mittel-hoch | "Governance als Bremse" | Shadow-AI-Risiko, C priorisieren |
| R heterogen (hohe Streuung) | "Gespaltenes Team" | Differenziertes Programm nötig |
| Shadow AI hoch + C niedrig | "Governance-Lücke bei hoher Nachfrage" | Shadow AI Amnestie + Governance Fast-Track |

**Intra-Dimension-Patterns:**

| Pattern | Diagnose |
|---------|----------|
| Safety=5, Support=1 | Unplausibel → Social Desirability Bias bei Safety |
| Alle Sub-Topics ±0.5 | Halo-Effekt → nicht differenziert beantwortet |
| Ein Sub-Topic >>2 unter Rest | Klarer Blocker → Min-Gewichtung greift, Intervention dort |

---

## 2. Herausforderungs-Katalog

---

### 2.1 Dimension C — Compliance & Governance

**Verantwortung:** Governance Liaison
**Kernfrage:** "Ermöglicht unsere Governance die AI-Nutzung — oder verhindert sie sie?"

#### C-H1: Policy-Vakuum

**Beschreibung:** Es gibt keine geschriebene AI-Usage-Policy, oder sie ist dem Team nicht bekannt. Teammitglieder wissen nicht, was erlaubt ist und was nicht.

**Typische Symptome:**
- "Ich weiß nicht, ob ich das darf"
- Vermeidungsverhalten ("lieber nicht, sicherheitshalber")
- Hohe Shadow-AI-Rate (weil offizielle Wege unbekannt)

**Root Causes:**
- Management hat AI-Governance nicht priorisiert
- Policy existiert, ist aber nur in einem Sharepoint-Grab verlinkt
- Rechtsabteilung / Datenschutz blockiert Veröffentlichung wegen Unsicherheit

**Maturity-Bezug:** Typisch bei Level 1-2 (C-M-POLICY)
- Level 1: "Ich weiß nicht, ob Regeln existieren"
- Level 2: "Ich kenne die Regeln grob, weiß aber nicht wen ich fragen soll"
- **Transition 1→2:** Policy muss existieren und auffindbar sein
- **Transition 2→3:** Policy muss bekannt UND praxisnah sein

**Diagnostische Signale:**
- C-CTX-1 = "none" oder "unknown" (Context: keine Policy vorhanden)
- C-M-POLICY = Level 1-2
- C-MC-BLOCKER = "no_policy"
- Cross-Check: Hohe Shadow-AI-Rate (A-MC3) bei gleichzeitig C-Score < 2

**Cross-Dimension-Wirkung:**
- → T blockiert: Ohne Policy kann kein Tool offiziell freigegeben werden
- → A unterdrückt: Ohne Klarheit keine offizielle Nutzung
- → R sinkt: Unsicherheit frisst psychologische Sicherheit

**Intervention:** → Governance Starter Kit, Policy-Template sofort bereitstellen

---

#### C-H2: Governance als Bottleneck

**Beschreibung:** Policies existieren, aber Freigabeprozesse für neue Tools oder Use Cases dauern zu lang. Governance wird als Bremse wahrgenommen, nicht als Enabler.

**Typische Symptome:**
- Tool-Requests verschwinden in einem Approval-Schwarzen-Loch
- Teams warten Wochen/Monate auf Antworten
- Frustration: "Bis das genehmigt ist, brauchen wir es nicht mehr"

**Root Causes:**
- Keine dedizierten Ressourcen für AI-Governance-Entscheidungen
- Unklar, wer entscheidet (Ping-Pong zwischen Security, Legal, IT)
- Risikoaversion: "Im Zweifel ablehnen" als implizite Kultur
- Fehlende Sicherheitsstufen-Differenzierung (alles gleich behandelt)

**Maturity-Bezug:** Typisch bei Level 2-3 (C-M-SPEED)
- Level 2: "Kein erkennbarer Prozess, unvorhersehbar"
- Level 3: "Prozess existiert, dauert aber zu lang oder ist nicht praxisnah"
- **Transition 2→3:** Es muss überhaupt einen definierten Prozess geben
- **Transition 3→4:** Prozess muss schnell und praxisnah sein

**Diagnostische Signale:**
- C-CTX-2 > 4 Wochen (Tool-Approval-Dauer)
- C-M-SPEED = Level 2-3
- C-MC-BLOCKER = "slow_approval" oder "tool_not_approved"
- Cross-Check: C-M-POLICY auf Level 4 aber C-M-SPEED auf Level 2 = "Regeln da, aber keiner entscheidet"

**Cross-Dimension-Wirkung:**
- → T direkt blockiert: Neue Tools können nicht ausgerollt werden
- → A stagniert: Ohne Tool-Zugang keine Adoption-Steigerung
- → Shadow AI steigt: Teams umgehen offizielle Wege

**Intervention:** → Fast-Track-Governance, Sicherheitsstufen-Modell, dedizierte Governance-Ressourcen

---

#### C-H3: Datenklassifizierungs-Grauzone

**Beschreibung:** Unklar, welche Daten in welche AI-Tools eingegeben werden dürfen. Teams können nicht unterscheiden zwischen öffentlichen, internen und vertraulichen Daten im AI-Kontext.

**Typische Symptome:**
- "Darf ich diesen Code-Snippet in Copilot eingeben?"
- Vermeidung aus Unsicherheit ("lieber gar nichts eingeben")
- Oder Gegenteil: Sorglosigkeit ("wird schon passen")

**Root Causes:**
- Bestehende Datenklassifizierung nicht auf AI-Kontext angepasst
- Keine klaren Entscheidungsbäume für Entwickler
- "Frag den Datenschutzbeauftragten" als einziger Weg (skaliert nicht)

**Maturity-Bezug:** Typisch bei Level 1-3 (C-M-DATA)
- Level 1: "Keine Regeln bekannt"
- Level 2: "Grobe Regeln, aber Graubereiche unsicher"
- Level 3: "Regeln existieren, aber ich muss oft nachfragen"
- **Transition 2→3:** Klare, auffindbare Regeln statt Grauzone
- **Transition 3→4:** Self-Service-Entscheidungsbaum statt Einzelfreigaben

**Diagnostische Signale:**
- C-M-DATA = Level 1-3
- C-MC-BLOCKER = "data_classification"
- Cross-Check: T-M-AVAILABILITY hoch (Tools da) aber A niedrig (Nutzung gering) = möglicherweise Daten-Angst

**Cross-Dimension-Wirkung:**
- → A gehemmt: Unsicherheit reduziert Nutzungsbereitschaft
- → R betroffen: Datenangst erzeugt Vermeidungsverhalten

**Intervention:** → Datenklassifizierungs-Quick-Guide, Entscheidungsbaum pro Sicherheitsstufe

---

#### C-H4: Betriebsrats-Blockade

**Beschreibung:** Fehlende oder steckengebliebene Betriebsvereinbarung blockiert den AI-Einsatz. Der Betriebsrat ist nicht eingebunden oder hat Bedenken, die nicht adressiert werden.

**Typische Symptome:**
- "Wir warten auf die BV" (seit Monaten)
- Betriebsrat hat grundsätzliche Vorbehalte gegen AI-Monitoring
- Process Mining / Performance-Tracking unmöglich

**Root Causes:**
- Betriebsrat zu spät eingebunden (fait accompli statt Co-Design)
- Berechtigte Sorgen bzgl. Leistungsüberwachung nicht ernst genommen
- Fehlende Expertise beim Betriebsrat zum Thema AI
- Keine dedizierte Ressource für BR-Verhandlungen

**Maturity-Bezug:** Typisch bei Level 1-2 (C-M-REGULATORY)
- Level 1: "Thema nicht auf dem Radar"
- Level 2: "Bewusstsein da, aber steckengeblieben"
- **Transition 1→2:** BR muss als Stakeholder identifiziert sein
- **Transition 2→3:** BV oder Pilotvereinbarung muss existieren

**Diagnostische Signale:**
- C-M-REGULATORY = Level 1-2
- C-MC-BLOCKER = "works_council"
- Cross-Check: F-M-AUTOMATION niedrig (Process Mining blockiert)
- C-PQ / C-PQ1 Freitext-Cluster: "Betriebsrat" / "Betriebsvereinbarung"

**Cross-Dimension-Wirkung:**
- → F direkt blockiert: Process Mining / Flow-Analyse unmöglich
- → T eingeschränkt: Bestimmte Tools können nicht freigegeben werden
- → Gesamte Transformation kann zum Stillstand kommen

**Intervention:** → Betriebsrats-Leitfaden, Co-Design-Workshop, Pilot-BV

---

#### C-H5: Compliance-Angst-Paralyse

**Beschreibung:** Selbst wenn Policies existieren und bekannt sind, führt eine kultur der Risikoaversion dazu, dass Teams lieber gar nichts machen als etwas Falsches. "Im Zweifel nicht" ist die implizite Maxime.

**Typische Symptome:**
- Teams nutzen AI weniger als erlaubt wäre
- Jede Unsicherheit führt zu Stopp statt Klärung
- Keine Eigeninitiative bei neuen Use Cases

**Root Causes:**
- Vergangene Sanktionen bei Regel-Verstößen (kulturelles Gedächtnis)
- Policies zu restriktiv oder zu vage formuliert
- Fehlende "Safe Harbor"-Kommunikation ("im Zweifel fragen ist ok")
- Kein klarer Eskalationsweg bei Unsicherheit

**Maturity-Bezug:** Kann auf jedem Level auftreten, besonders bei Diskrepanz zwischen C-Score (hoch) und A-Score (niedrig)
- **Diagnostic Pattern:** C-M-POLICY = Level 3-4 ABER A-M1 = Level 1-2 → "Regeln bekannt, aber Angst vor Fehltritt"

**Diagnostische Signale:**
- C-Score mittel-hoch, aber A-Score niedrig (Schlüssel-Pattern!)
- R-MC-BLOCKER = "quality_uncertainty" in Kombination mit C-Bewusstsein
- Freitext-Cluster: Angst-Formulierungen trotz existierender Policies
- Cross-Check: Shadow AI niedrig (Teams nutzen auch inoffiziell nichts)

**Cross-Dimension-Wirkung:**
- → A massiv unterdrückt: Compliance-Angst ist einer der stärksten Adoptions-Killer
- → R betroffen: Fehlende psychologische Sicherheit und Compliance-Angst verstärken sich gegenseitig

**Intervention:** → Safe-Harbor-Kommunikation, "Erlaubt-Liste" statt "Verboten-Liste", Leadership Goes First

---

#### C-H6: EU AI Act / Regulierungs-Unvorbereitetheit

**Beschreibung:** Die Organisation hat sich nicht systematisch auf den EU AI Act oder andere AI-Regulierung vorbereitet. Risikoklassifizierung, Dokumentationspflichten und Transparenzanforderungen sind nicht adressiert.

**Typische Symptome:**
- "EU AI Act? Betrifft uns das überhaupt?"
- Keine Risikoklassifizierung der eingesetzten AI-Systeme
- Fehlende Dokumentation der AI-Anwendungen

**Root Causes:**
- Thema als "Zukunftsmusik" abgetan
- Keine dedizierte Verantwortung für Regulatory Monitoring
- Fehlende Expertise (was fordert der AI Act konkret?)

**Maturity-Bezug:** Typisch bei Level 1-2 (C-M-REGULATORY)
- **Transition 1→2:** Bewusstsein schaffen, dass Regulierung existiert
- **Transition 2→3:** Systematische Bestandsaufnahme und Risikoklassifizierung

**Diagnostische Signale:**
- C-M-REGULATORY = Level 1-2
- C-CTX-1 = "none" oder "draft" (keine Policy berücksichtigt Regulierung)
- C-MC-INTERVENTION = "practical_policy" oder "data_classification"

**Intervention:** → EU AI Act Quickcheck, Risikoklassifizierungs-Workshop

---

### 2.2 Dimension R — Readiness (Human & Cultural)

**Verantwortung:** Change & People Lead
**Kernfrage:** "Sind unsere Menschen bereit, fähig und willens, AI zu nutzen?"

#### R-H1: Existenzangst ("AI nimmt mir meinen Job")

**Beschreibung:** Teammitglieder haben fundamentale Angst, dass AI ihre Rolle überflüssig macht. Diese Angst — ob ausgesprochen oder nicht — ist einer der stärksten Blocker für jede Veränderung.

**Typische Symptome:**
- Passive Verweigerung: Compliance, aber kein Engagement
- Aktive Ablehnung: "AI-Output ist sowieso schlecht"
- Zynismus: "Sollen sie uns doch alle ersetzen"
- Schweigen in Meetings zum Thema AI

**Root Causes:**
- Fehlendes Narrativ von Leadership ("Was bedeutet AI für UNSERE Rollen?")
- Medien-Narrative dominieren ("AI ersetzt Millionen Jobs")
- Keine konkreten Rollenentwicklungs-Perspektiven
- Vergangene Erfahrungen mit Outsourcing/Automatisierung

**Maturity-Bezug:** Typisch bei Level 1-2 (R-M-ROLE)
- Level 1: "Niemand spricht darüber, was AI für unsere Rollen bedeutet"
- Level 2: "Es gibt Diskussionen, aber keine konkreten Antworten"
- **Transition 1→2:** Thema muss überhaupt adressiert werden
- **Transition 2→3:** Konkretes Rollenentwicklungs-Narrativ mit Beispielen

**Diagnostische Signale:**
- R-M-ROLE = Level 1-2
- R-MC-BLOCKER = "role_concern" (stärkstes Signal!)
- R-PQ Freitext-Cluster: Angst-Formulierungen, "Arbeitsplatz", "ersetzt werden"
- Cross-Check: R-M-SAFETY niedrig → Angst wird nicht ausgesprochen, aber spürbar

**Cross-Dimension-Wirkung:**
- → A massiv blockiert: Wer Angst hat, adoptiert nicht (oder nur Alibi)
- → F blockiert: Kein Engagement für Prozessveränderung
- Kann durch C-Unklarheit verstärkt werden: "Wenn nicht mal klar ist was erlaubt ist, wird es eh nur schlimmer"

**Intervention:** → R-RE-1 "Meine Rolle 2026" Workshop, R-RE-2 Skill-Shift-Narrativ, R-RE-3 Job Crafting

---

#### R-H2: Skill-Gap / "Wo-fange-ich-an"-Paralyse

**Beschreibung:** Teammitglieder wissen, dass AI existiert, fühlen sich aber unfähig, sie sinnvoll einzusetzen. Die Einstiegshürde fühlt sich zu hoch an.

**Typische Symptome:**
- "Ich habe es mal probiert, war nicht beeindruckt" (schlechte Prompts → schlechte Ergebnisse)
- "Ich weiß nicht, wo ich anfangen soll"
- Nutzung bleibt bei trivialen Use Cases (Textformulierung)
- Keine Weiterentwicklung der Prompting-Skills

**Root Causes:**
- Kein rollenspezifisches Enablement (generisches "AI-Training" statt konkreter Use Cases)
- Erste Erfahrung war negativ (schlechte Prompts → schlechte Ergebnisse → "bringt nichts")
- Kein Ansprechpartner für Fragen
- Erwartung von "Magie" statt Werkzeug-Verständnis

**Maturity-Bezug:** Typisch bei Level 1-3 (R-M-SKILL)
- Level 1: "Ich weiß nicht, was AI kann"
- Level 2: "Ich verstehe es grob, aber fühle mich unsicher"
- Level 3: "Grundlegend bedienen ja, Qualitätsbewertung nein"
- **Transition 1→2:** Erste positive Erfahrung ermöglichen
- **Transition 2→3:** Regelmäßige Praxis + rollenspezifische Guidance
- **Transition 3→4:** Kritische Bewertungsfähigkeit entwickeln

**Diagnostische Signale:**
- R-M-SKILL = Level 1-3
- R-MC-BLOCKER = "missing_skills" oder "unclear_use_cases"
- R-MC-ENABLEMENT = "playbooks" oder "pairing" (zeigt: Menschen WOLLEN lernen)
- Cross-Check: A-M-DEPTH = "chat" (steckt bei Copy-Paste fest)
- Cross-Check: A-CTX-2 (tägliche AI-Zeit) < 30 Min

**Cross-Dimension-Wirkung:**
- → A gehemmt: Ohne Skills keine sinnvolle, tiefe Nutzung
- → F unmöglich: Ohne Skills kann AI nicht in Workflows eingebettet werden

**Intervention:** → R-SK-1 Prompt Playbooks, R-SK-2 Pair-Prompting, R-SK-3 Micro-Learnings

---

#### R-H3: Fehlende psychologische Sicherheit

**Beschreibung:** Die Teamkultur ermöglicht kein offenes Experimentieren mit AI. Scheitern wird nicht als Lernen gesehen. AI-Nutzung wird skeptisch beäugt oder nur toleriert.

**Typische Symptome:**
- AI-Nutzung wird versteckt ("Hab ich selbst geschrieben")
- Keine offene Diskussion über AI-Erfahrungen
- "Asking for permission" statt "asking for forgiveness"
- Shadow AI als Indikator: Menschen nutzen AI, aber heimlich

**Root Causes:**
- Leadership experimentiert nicht sichtbar mit AI (fehlendes Signal)
- Kultur der Fehler-Vermeidung, nicht des Lernens
- Manager sieht AI als Bedrohung für seine Expertise/Autorität
- Keine explizite Ermutigung zum Experimentieren

**Maturity-Bezug:** Typisch bei Level 1-3 (R-M-SAFETY)
- Level 1: "Experimentieren wird skeptisch gesehen"
- Level 2: "Toleriert, aber nicht gefördert"
- Level 3: "Ok, aber es hängt vom Manager/Projekt ab"
- **Transition 1→2:** Management muss explizit "erlauben"
- **Transition 2→3:** Manager-Unabhängigkeit: Sicherheit ist strukturell, nicht personenabhängig
- **Transition 3→4:** Aktive Ermutigung + Fail-Forward-Kultur

**Diagnostische Signale:**
- R-M-SAFETY = Level 1-3
- Cross-Check: Shadow AI hoch (A-MC3) + R-M-SAFETY niedrig = "nutzen heimlich, trauen sich nicht offen"
- R-PQ Freitext: "Wenn mein Chef..." / "Wenn klar wäre, dass es ok ist..."
- Cross-Check: R-M-SAFETY niedrig + R-M-SKILL hoch = "Können es, trauen sich nicht" (besonders toxisch)

**Cross-Dimension-Wirkung:**
- → A unterdrückt: Offizielle Adoption bleibt niedrig
- → Alle Dimensionen betroffen: Ohne Safety kein offenes Experimentieren möglich

**Intervention:** → R-PS-1 Shadow AI Amnestie, R-PS-2 Leadership Goes First, R-PS-3 Experimentier-Budget

---

#### R-H4: Manager als unsichtbare Bremse

**Beschreibung:** Mittleres Management sendet — bewusst oder unbewusst — Signale, die AI-Adoption bremsen. Nicht durch explizites Verbot, sondern durch Nicht-Priorisierung und fehlende Vorbildfunktion.

**Typische Symptome:**
- "Mach das mit AI wenn du Zeit hast" (= nie)
- AI-Themen werden in Sprint-Planung nicht berücksichtigt
- Manager nutzt selbst keine AI, fragt nicht nach AI-Nutzung
- Lernzeit für AI wird "wegpriorisiert"

**Root Causes:**
- Manager selbst unsicher / nicht enabled
- KPIs des Managers belohnen AI-Adoption nicht
- Angst vor Kontrollverlust ("Was machen die da mit AI?")
- "Business as usual"-Druck lässt keinen Raum für Experimente

**Maturity-Bezug:** Zeigt sich als Diskrepanz:
- R-M-SAFETY = Level 2-3 ("toleriert" / "kommt auf Manager an")
- PLUS R-MC-BLOCKER = "no_time"
- **Transition 3→4:** Erfordert explizites Management-Commitment, nicht nur Toleranz

**Diagnostische Signale:**
- R-MC-BLOCKER = "no_time" (häufigstes Signal für Management-Bremse!)
- R-M-SAFETY = Level 3 ("hängt vom Manager ab") → Manager-Abhängigkeit ist das Problem
- Cross-Check: A-CTX-2 < 30 Min/Tag trotz T-Score > 3 → Tools da, Zeit fehlt
- Cross-Check: Innerhalb eines Segments (Team) homogen niedrig → Team-Ebene-Problem, nicht individuell

**Cross-Dimension-Wirkung:**
- → A direkt gehemmt: Keine Zeit = keine Nutzung
- → R-M-SKILL stagniert: Keine Lernzeit = keine Skill-Entwicklung
- → F blockiert: Kein Raum für Workflow-Redesign

**Intervention:** → R-PS-3 Experimentier-Budget (Management-Entscheidung!), R-PS-2 Leadership Goes First, Manager-Enablement

---

#### R-H5: Champions ohne Mandate

**Beschreibung:** Es gibt informelle AI-Enthusiasten im Team, aber sie haben keine dedizierte Zeit, keine formale Rolle und keine Anbindung an die Transformation.

**Typische Symptome:**
- "Der eine Kollege, der sich auskennt" (aber überlastet)
- Champions helfen nebenbei, priorisieren aber Sprint-Arbeit
- Wissen konzentriert sich bei 1-2 Personen (Bus-Factor)
- Champion-Burnout: Engagement sinkt, weil es nicht wertgeschätzt wird

**Root Causes:**
- Management erkennt Champion-Rolle nicht als formale Aufgabe an
- Keine 20% dedizierte Zeit (Framework-Minimum!)
- Kein Onboarding-Kit oder Ressourcen für Champions
- Keine Verbindung zum AI Transformation Manager

**Maturity-Bezug:** Typisch bei Level 2-3 (R-M-SUPPORT)
- Level 2: "Informelle Ansprechpartner, aber nicht formalisiert"
- Level 3: "Champions benannt, aber keine dedizierte Zeit"
- **Transition 2→3:** Formale Benennung + Management-Sichtbarkeit
- **Transition 3→4:** Dedizierte Zeit (20%!) + Anbindung an AI Transformation Manager

**Diagnostische Signale:**
- R-M-SUPPORT = Level 2-3
- R-MC-ENABLEMENT = "champion" (Team wünscht sich Support)
- Cross-Check: R-M-SKILL heterogen (hohe Streuung) → Wissen ist nicht verteilt
- Cross-Check: A-M-SHARING niedrig → kein systematisches Wissensmanagement

**Cross-Dimension-Wirkung:**
- → Skalierung blockiert: Ohne Champions skaliert die Transformation nicht über das Core-Team hinaus
- → R-M-SKILL stagniert teamweit: Nur Einzelne entwickeln sich weiter

**Intervention:** → R-SU-1 Champion mandatieren (mit 20%!), R-SU-4 Zeitbudget durchsetzen, R-SU-5 Community of Practice

---

#### R-H6: Rollenunklarheit ("Was bedeutet AI für MICH?")

**Beschreibung:** Unterschiedlich von R-H1 (Existenzangst): Hier ist die Grundhaltung nicht Angst, sondern Orientierungslosigkeit. Die Person hat kein konkretes Bild davon, wie sich ihre tägliche Arbeit mit AI verändert.

**Typische Symptome:**
- "AI ist cool, aber ich sehe nicht, wie es MIR hilft"
- Nutzung bleibt generisch (Textgenerierung) statt rollenspezifisch
- Kein persönlicher Entwicklungsplan im AI-Kontext
- Wartet darauf, dass "jemand sagt, was ich tun soll"

**Root Causes:**
- Enablement zu generisch (nicht rollenspezifisch)
- Keine Role Models / "Day in the Life"-Beispiele
- HR-Prozesse (Zielvereinbarungen, Stellenprofile) nicht angepasst
- Kein Coaching-Gespräch zu individueller Rollenentwicklung

**Maturity-Bezug:** Typisch bei Level 2-3 (R-M-ROLE)
- Level 2: "Es gibt Diskussionen, aber nichts Konkretes für mich"
- Level 3: "Ich verstehe grob, aber habe keinen Plan"
- **Transition 2→3:** Rollenspezifische Perspektiven (nicht generisch)
- **Transition 3→4:** Persönlicher Entwicklungsplan + kuratierter Lernpfad

**Diagnostische Signale:**
- R-M-ROLE = Level 2-3 (OHNE "role_concern" als Blocker → Unterschied zu R-H1)
- R-MC-BLOCKER = "unclear_use_cases" (typischer als "role_concern")
- R-MC-ENABLEMENT = "playbooks" oder "training"
- Cross-Check: A-M-DEPTH = "chat" (generische Nutzung statt rollenspezifisch)

**Cross-Dimension-Wirkung:**
- → A limitiert: Ohne klare Use Cases bleibt Nutzung oberflächlich
- → F limitiert: Ohne Verständnis der eigenen Rolle im AI-Workflow keine Prozessintegration

**Intervention:** → R-RE-4 Kuratierte Lernpfade, R-RE-5 "Day in the Life" Showcases, R-SK-1 Rollenspezifische Playbooks

---

### 2.3 Dimension A — Adoption & Usage

**Verantwortung:** AI Transformation Manager
**Kernfrage:** "Nutzen unsere Teams AI regelmäßig, tief und breit — und lernen sie dabei?"

#### A-H1: Chat-Only-Plateau

**Beschreibung:** AI-Nutzung stagniert beim Copy-Paste-Modus: Frage in ChatGPT/Claude eingeben, Antwort kopieren. Kein Übergang zu integrierten oder agentischen Workflows.

**Typische Symptome:**
- "Ich nutze ChatGPT ab und zu" (= Web-Chat für Quick Questions)
- Keine IDE-Integration, keine Workflow-Einbettung
- AI als "bessere Google-Suche", nicht als Arbeitswerkzeug
- Nutzungstiefe wächst nicht über Monate

**Root Causes:**
- Keine IDE-Integration verfügbar (→ T-Problem)
- Kein Bewusstsein für tiefere Nutzungsmodi (Chat → IDE → Agentic)
- Gewohnheit: Chat-Modus ist "gut genug" für einfache Aufgaben
- Fehlende Use Cases, die integrierte Nutzung erfordern

**Maturity-Bezug:** Typisch bei Level 2 (A-M-DEPTH)
- Level 2: "Chat-basiert, Copy-Paste, nicht integriert"
- **Transition 2→3:** IDE-Integration + konkrete Workflow-Use-Cases zeigen
- **Transition 3→4:** Agentic workflows einführen (teilautonome Tasks)

**Diagnostische Signale:**
- A-M-DEPTH = Level 2 ("Chat-basiert")
- A-MC1 = "chat" (Usage Mode)
- Cross-Check: T-M-IDE = Level 1-2 (IDE-Integration fehlt) → T-Problem, nicht A-Problem!
- Cross-Check: T-M-IDE = Level 3+ aber A-M-DEPTH = Level 2 → Tools da, Wissen/Gewohnheit fehlt → R-Problem

**Cross-Dimension-Wirkung:**
- → F blockiert: Chat-basierte Nutzung lässt sich nicht in Workflows einbetten
- → Productivity Impact limitiert: Copy-Paste spart weniger Zeit als integrierte Nutzung

**Intervention:** → Je nach Root Cause: T-Katalog (IDE-Integration) ODER R-SK-Katalog (Skill-Aufbau für integrierte Nutzung)

---

#### A-H2: Coding-Only-Adoption

**Beschreibung:** AI wird ausschließlich für Code-Generierung genutzt. Andere SDLC-Phasen (Requirements, Testing, Documentation, Operations) werden nicht adressiert.

**Typische Symptome:**
- Copilot im Einsatz, aber nur für Code-Completion
- Kein AI-Einsatz bei Story Refinement, Test-Erstellung, Dokumentation
- POs, QAs, Ops nutzen gar keine AI-Tools
- "AI ist was für Entwickler"

**Root Causes:**
- Coding-Tools waren First Mover (Copilot-Effekt)
- Andere Rollen haben keine sichtbaren AI-Use-Cases
- Enablement fokussiert auf Developer, nicht auf gesamtes Team
- Fehlende rollenspezifische Playbooks für PO, QA, Ops

**Maturity-Bezug:** Zeigt sich in A-CTX-1 / A-MC2:
- Nur "coding" ausgewählt bei SDLC-Phasen-Frage
- A-MC-SDLC-GAP zeigt: Team erkennt Potenzial in anderen Phasen

**Diagnostische Signale:**
- A-CTX-1 = nur "coding" (oder coding + 1 Phase)
- A-MC-SDLC-GAP: Mehrere Phasen markiert (= Team sieht den Gap selbst!)
- Cross-Check: R-M-SKILL niedrig bei Nicht-Entwickler-Rollen
- Cross-Check: Segmentierung nach Rolle zeigt starke Unterschiede

**Cross-Dimension-Wirkung:**
- → F limitiert: Ohne SDLC-Breite keine durchgängige Value-Stream-Optimierung
- → Business Impact gering: Coding-Phase allein ist selten der größte Bottleneck

**Intervention:** → Rollenspezifische Playbooks für PO/QA/Ops, SDLC-Mapping-Workshop, AI Intervention Katalog

---

#### A-H3: Sporadische Nutzung (nie habituell)

**Beschreibung:** AI wird gelegentlich genutzt, aber nie zum festen Bestandteil des täglichen Workflows. Die Nutzung bleibt anlassbezogen und unregelmäßig.

**Typische Symptome:**
- "Ich nutze es manchmal" (= 1-2x/Woche, wenn überhaupt)
- AI fällt im Alltags-Stress als erstes weg
- Kein "Muskelgedächtnis" — jedes Mal fühlt es sich wie neu an
- Wöchentliche Nutzungszeit < 30 Minuten

**Root Causes:**
- AI nicht in bestehende Routinen eingebettet
- Einstiegshürde bei jeder Session zu hoch (Login, Tool-Switch)
- Kein "Trigger" im Workflow, der AI-Nutzung auslöst
- Fehlender positiver Feedback-Loop (Zeitspar-Effekt nicht spürbar)

**Maturity-Bezug:** Typisch bei Level 2 (A-M-REGULARITY)
- Level 2: "Gelegentlich, für einfache Aufgaben, nicht regelmäßig"
- **Transition 2→3:** Regelmäßigkeit herstellen — mindestens wöchentlich, in festen Arbeitsbereichen
- **Transition 3→4:** Tägliche Nutzung in mehreren Bereichen

**Diagnostische Signale:**
- A-M-REGULARITY = Level 2
- A-CTX-2 < 30 Min/Tag
- Cross-Check: R-MC-BLOCKER = "no_time" → möglicherweise keine dedizierten Slots
- Cross-Check: T-M-IDE = Level 1-2 → Tool-Wechsel-Friction zu hoch

**Intervention:** → AI-in-Retros (R-PS-5), Pair-Prompting als regelmäßiger Termin, IDE-Integration verbessern (T)

---

#### A-H4: Shadow AI dominiert

**Beschreibung:** Ein signifikanter Anteil der AI-Nutzung findet über nicht-freigegebene Tools statt. Die offizielle Adoption-Rate spiegelt nicht die tatsächliche Nutzung wider.

**Typische Symptome:**
- Hohe private ChatGPT-/Claude-Nutzung für Arbeitszwecke
- Offizielle Tools werden als "schlechter" empfunden
- Sensible Daten landen möglicherweise in nicht-genehmigten Tools
- Offizielle Adoption-Metriken unterschätzen die reale Nutzung

**Root Causes:**
- Offizielle Tools schlechter / langsamer als frei verfügbare
- Governance zu restriktiv (→ C-Problem)
- Freigabeprozess zu langsam (→ C-H2)
- Bequemlichkeit: "Ich habe bereits einen Account bei..."

**Maturity-Bezug:** Zeigt sich in A-MC3 (Shadow AI Frequenz)
- "Gelegentlich" bis "Regelmäßig" = Warnsignal
- **Nicht direkt eine Maturity-Level-Frage**, sondern ein Demand-Signal

**Diagnostische Signale:**
- A-MC3 = "occasionally" bis "regularly" (>30% des Teams)
- Cross-Check: C-Score niedrig → Governance-Lücke treibt Shadow AI
- Cross-Check: T-Score niedrig → offizielle Tools unattraktiv
- Cross-Check: R-M-SAFETY niedrig + Shadow AI hoch = "nutzen heimlich trotz Unsicherheit" → hohes Risiko

**Cross-Dimension-Wirkung:**
- → C-Risiko: Unkontrollierter Datenabfluss
- → Positives Signal: Hohe Nachfrage! Kanalisieren statt unterdrücken

**Intervention:** → Shadow AI Amnestie (R-PS-1), Tool-Verbesserung (T), Governance Fast-Track (C)

---

#### A-H5: Vertrauens-Volatilität ("Hit or Miss")

**Beschreibung:** Die Erfahrung mit AI-Output-Qualität schwankt stark. Manchmal brilliant, manchmal nutzlos. Das führt zu unstabilem Vertrauen und Nutzungsabbrüchen.

**Typische Symptome:**
- "Manchmal spart es Stunden, manchmal ist alles falsch"
- Kein systematischer Umgang mit AI-Limitierungen
- Kein Verständnis für Halluzinationen und Grenzen
- Frustration nach negativen Erfahrungen führt zu Nutzungs-Pausen

**Root Causes:**
- Fehlende Prompt-Engineering-Skills (→ R-H2)
- Kein Verständnis für "wann AI gut funktioniert und wann nicht"
- Fehlende Qualitätssicherungs-Routinen für AI-Output
- Zu hohe Erwartungen ("AI sollte immer perfekt sein")

**Maturity-Bezug:** Typisch bei Level 2-3 (A-M-QUALITY)
- Level 2: "Qualität schwankt stark, oft nacharbeiten"
- Level 3: "Für Standard-Aufgaben ok, bei komplexen Aufgaben unzuverlässig"
- **Transition 2→3:** Verstehen, wo AI gut ist und wo nicht
- **Transition 3→4:** Systematische Qualitätssicherungs-Routinen

**Diagnostische Signale:**
- A-M-QUALITY = Level 2-3
- R-MC-BLOCKER = "quality_uncertainty"
- A-PQ Freitext: "frustrating" / "unzuverlässig" / "Halluzinationen"
- Cross-Check: R-M-SKILL = Level 2-3 (Prompt-Qualität bedingt Output-Qualität)

**Intervention:** → R-SK-6 Workshops zu AI-Grenzen, Fail Forward Sessions (R-PS-4), Prompt Playbooks (R-SK-1)

---

#### A-H6: Wissenssilos (jeder fängt von vorne an)

**Beschreibung:** Es gibt kein systematisches Teilen von AI-Erfahrungen, Prompts oder Best Practices. Jedes Teammitglied entdeckt AI für sich allein.

**Typische Symptome:**
- Keine gemeinsame Prompt-Bibliothek
- "Ich wusste gar nicht, dass du das auch mit AI machst"
- Gleiche Fehler werden wiederholt
- Keine Lernkurve auf Team-Ebene

**Root Causes:**
- Keine Sharing-Kultur oder -Struktur
- Kein dedizierter Kanal / Ort für AI-Wissensaustausch
- Champions nicht mandatiert (→ R-H5)
- AI-Nutzung wird als "privat" empfunden

**Maturity-Bezug:** Typisch bei Level 1-2 (A-M-SHARING)
- Level 1: "Niemand teilt AI-Erfahrungen"
- Level 2: "Gelegentlich, informell, personenabhängig"
- **Transition 1→2:** Erste Sharing-Formate etablieren
- **Transition 2→3:** Systematische Sharing-Strukturen (Wiki, Retro-Punkt, CoP)

**Diagnostische Signale:**
- A-M-SHARING = Level 1-2
- Cross-Check: R-M-SUPPORT niedrig → kein Peer-Netzwerk
- Cross-Check: R-M-SKILL heterogen (hohe Streuung) → Wissen nicht verteilt

**Intervention:** → R-SK-4 Prompt-Review in PRs, R-PS-5 AI in Retros, R-SU-5 Community of Practice, Prompt-Bibliothek (T)

---

### 2.4 Dimension F — Flow & Process Integration

**Verantwortung:** Value Stream Coach
**Kernfrage:** "Ist AI in unsere Wertschöpfungskette integriert — oder nur ein Werkzeug am Rand?"

#### F-H1: AI als Insellösung

**Beschreibung:** Einzelne nutzen AI individuell, aber es ist nicht in Team-Workflows eingebettet. AI existiert "neben" dem Prozess, nicht "im" Prozess.

**Typische Symptome:**
- Jeder nutzt AI auf eigene Faust
- Keine AI-gestützten Team-Workflows (PR-Review, Testgenerierung)
- AI-Nutzung ist nicht in Sprint-Routinen sichtbar
- Kein Einfluss auf Team-Level-Metriken

**Root Causes:**
- Kein Value-Stream-Mapping durchgeführt → unklar, wo AI in den Prozess passt
- Adoption ist individuell gewachsen, nicht orchestriert
- Fehlende Prozess-Templates mit AI-Einbindung
- Workflow-Redesign scheint "zu aufwändig"

**Maturity-Bezug:** Typisch bei Level 2 (F-M-INTEGRATION)
- Level 2: "Einzelne nutzen AI nebenbei, nicht Teil der Team-Workflows"
- **Transition 2→3:** Erste gemeinsame AI-gestützte Workflows definieren
- **Transition 3→4:** AI systematisch in mehrere Kern-Workflows einbetten

**Diagnostische Signale:**
- F-M-INTEGRATION = Level 2
- Cross-Check: A-Score mittel-hoch (individuelle Nutzung da!) aber F-Score niedrig → genau dieses Pattern
- F-MC-INTERVENTION zeigt konkrete Wünsche → Startpunkt für Integration
- F-PQ: "Wenn ich einen Schritt automatisieren könnte..." → Team sieht selbst das Potenzial

**Cross-Dimension-Wirkung:**
- → A bleibt individuell: Ohne Prozesseinbettung keine Skalierung
- → Keine messbare Wirkung auf Team-KPIs: DORA bleibt unverändert

**Intervention:** → Value Stream Mapping Workshop, AI Intervention Katalog, Pilotierung eines ersten Team-AI-Workflows

---

#### F-H2: Bottleneck-Blindheit

**Beschreibung:** Teams wissen nicht, wo ihre größten Engpässe im Delivery-Prozess liegen. Entscheidungen basieren auf Bauchgefühl, nicht auf Daten.

**Typische Symptome:**
- "Wir sind halt langsam" (ohne zu wissen, warum)
- Keine DORA-Metriken, keine Cycle-Time-Messung
- Jeder hat eine andere Meinung, wo der Bottleneck liegt
- AI-Investitionen am falschen Ort (z.B. Coding beschleunigen, wenn Review der Bottleneck ist)

**Root Causes:**
- Keine Tooling-Infrastruktur für Flow-Messung
- Value Stream Mapping nie durchgeführt
- "Wir wissen schon, wo es klemmt" (Dunning-Kruger auf Prozess-Ebene)
- Process Mining blockiert oder unbekannt

**Maturity-Bezug:** Typisch bei Level 1-2 (F-M-BOTTLENECK)
- Level 1: "Noch nie analysiert"
- Level 2: "Grobe Vorstellung, aber nicht datenbasiert"
- **Transition 1→2:** Überhaupt erstmal messen (Cycle Time, Lead Time)
- **Transition 2→3:** Strukturiertes VSM durchführen, Daten systematisch erheben

**Diagnostische Signale:**
- F-M-BOTTLENECK = Level 1-2
- F-CTX-1 = "none" (keine Flow-Analyse-Methode)
- F-M-MEASUREMENT = Level 1-2
- Cross-Check: F-MC-BOTTLENECK zeigt breite Streuung (kein Konsens → niemand weiß es genau)

**Intervention:** → Value Stream Mapping (Kurzformat 4h), DORA-Metriken einführen

---

#### F-H3: Klassische Bottlenecks unverändert

**Beschreibung:** Bekannte Bottlenecks (PR Review, Testing, Release Approvals) bestehen seit langem, und AI hat daran nichts geändert — weil AI-Interventionen nicht dort eingesetzt werden.

**Typische Symptome:**
- PR Reviews dauern >24h (F-CTX-2)
- Testing-Phase ist längster Wartezeitraum
- Release-Approvals blockieren Deployment-Frequenz
- AI beschleunigt Coding, aber der Bottleneck liegt downstream

**Root Causes:**
- AI-Investition falsch priorisiert (Coding statt Bottleneck)
- Kein Mapping von AI-Interventionen auf Bottlenecks
- Organisatorische/kulturelle Barrieren bei Bottleneck (nicht technisch lösbar)
- Fehlende AI-gestützte Alternativen für die Engstelle

**Maturity-Bezug:** Indirekt über F-M-IMPACT
- Level 1-2: "Kein erkennbarer Einfluss auf Flow-Metriken"
- **Transition 2→3:** AI-Interventionen gezielt auf Top-Bottleneck setzen
- **Transition 3→4:** Messbare Verbesserung bei Wartezeiten/Rework

**Diagnostische Signale:**
- F-MC-BOTTLENECK zeigt klaren Spitzenreiter (z.B. 60%+ wählen "PR Review")
- F-M-IMPACT = Level 1-2
- Cross-Check: A-Score mittel-hoch → AI wird genutzt, aber nicht am richtigen Ort
- F-CTX-2 > 24h (Code Review als konkreter Indikator)

**Intervention:** → AI Intervention Katalog (SDLC-Phase → AI-Lösung), PR Pre-Review Pilot

---

#### F-H4: Fehlende Messbarkeit

**Beschreibung:** Es gibt keine systematischen Metriken für den Delivery-Flow. Ohne Messung gibt es keine Evidenz für Verbesserung oder Verschlechterung.

**Typische Symptome:**
- Keine DORA-Metriken
- "Gefühlt ist es besser geworden" (keine Daten)
- Keine Baseline → kein Vorher/Nachher-Vergleich möglich
- AI-ROI kann nicht belegt werden

**Root Causes:**
- CI/CD-Pipeline liefert keine Metriken
- Kein Tool für Flow-Messung (Jira-Daten werden nicht ausgewertet)
- Kulturelle Abneigung gegen "Messung" (="Kontrolle")
- Fehlende Kompetenz in Metriken-Interpretation

**Maturity-Bezug:** Typisch bei Level 1-2 (F-M-MEASUREMENT)
- Level 1: "Keine Metriken, keine Dashboards"
- Level 2: "Manche Daten existieren, werden aber nicht systematisch genutzt"
- **Transition 1→2:** Grundlegende Metriken einrichten (DORA Basics)
- **Transition 2→3:** Regelmäßige Auswertung, Flow-Dashboard

**Diagnostische Signale:**
- F-M-MEASUREMENT = Level 1-2
- F-CTX-1 = "none" oder "manual_only"
- Cross-Check: F-M-IMPACT kann nicht beurteilt werden → ohne Messung keine Impact-Aussage

**Intervention:** → DORA-Metriken Setup, Flow-Dashboard, Cycle Time Tracking

---

#### F-H5: Process Mining blockiert

**Beschreibung:** Fortgeschrittene Flow-Analyse-Methoden (Process Mining, automatisiertes VSM) sind durch regulatorische oder organisatorische Hürden blockiert.

**Typische Symptome:**
- "Der Betriebsrat erlaubt kein Process Mining"
- DSGVO-Bedenken bei Tool-basierten Analysen
- Manuelle Analysen zu aufwändig für regelmäßige Durchführung
- Flow-Optimierung stagniert bei "good enough"

**Root Causes:**
- Betriebsrat nicht eingebunden bei Process-Mining-Planung (→ C-H4)
- DSFA (Datenschutz-Folgenabschätzung) nicht durchgeführt
- Fehlende Anonymisierungskonzepte
- Kein Buy-in für Prozessanalyse-Investition

**Maturity-Bezug:** Typisch bei Level 1-2 (F-M-AUTOMATION)
- Level 1: "Ausschließlich manuell oder gar nicht"
- Level 2: "Tool vorhanden, aber Compliance-Hürden"
- **Transition 1→2:** Überhaupt erstmal Möglichkeiten evaluieren
- **Transition 2→3:** Compliance klären (BR, DSFA), Pilotprojekt starten

**Diagnostische Signale:**
- F-M-AUTOMATION = Level 1-2
- Cross-Check: C-M-REGULATORY niedrig → Compliance-Blocker bestätigt
- Cross-Check: C-H4 (Betriebsrats-Blockade) aktiv

**Cross-Dimension-Wirkung:**
- → C ist direkte Voraussetzung: Ohne BV kein Process Mining
- → F stagniert: Ohne automatisierte Analyse kein kontinuierlicher Verbesserungszyklus

**Intervention:** → Betriebsrats-Leitfaden (C), Anonymisierungskonzept, DSFA durchführen

---

#### F-H6: Workflow-Redesign-Widerstand

**Beschreibung:** Auch wenn Bottlenecks bekannt sind und AI-Interventionen verfügbar wären, gibt es Widerstand gegen die Veränderung bestehender Workflows.

**Typische Symptome:**
- "Das haben wir schon immer so gemacht"
- AI wird "draufgesetzt" statt Prozess neu gedacht
- Angst vor Veränderung des vertrauten Arbeitsablaufs
- Piloten werden gestartet aber nie in den Standard übernommen

**Root Causes:**
- Change Fatigue (zu viele Veränderungen gleichzeitig)
- Fehlende Beteiligung der Betroffenen am Redesign
- Kein klarer Business Case für die Veränderung
- "Es funktioniert doch" (leidliche Zufriedenheit mit Status quo)

**Maturity-Bezug:** Zeigt sich als Diskrepanz:
- F-M-BOTTLENECK hoch (Awareness da), aber F-M-INTEGRATION niedrig (Umsetzung fehlt)
- **Transition 3→4:** Erfordert aktives Change Management für Workflow-Veränderung

**Diagnostische Signale:**
- F-M-BOTTLENECK >= Level 3 ABER F-M-INTEGRATION = Level 1-2 → "Weiß wo es klemmt, tut aber nichts"
- R-Score niedrig (→ Readiness-Problem verursacht Flow-Widerstand)
- F-PQ Freitext: Ambivalenz-Formulierungen ("eigentlich sollten wir..., aber...")

**Intervention:** → Value Stream Workshop mit Team-Beteiligung, Quick-Win-Pilot (ein kleiner Workflow), R-Interventionen parallel

---

### 2.5 Dimension T — Technical Enablement

**Verantwortung:** Technical AI Lead
**Kernfrage:** "Haben unsere Teams die richtigen Tools, zuverlässig, integriert und zugänglich?"

#### T-H1: Tool-Wüste (kein Zugang)

**Beschreibung:** Teams haben keinen Zugang zu freigegebenen AI-Tools. Der grundlegendste Enabler fehlt.

**Typische Symptome:**
- "Ich habe keinen Zugang"
- Freigabeprozess nicht abgeschlossen
- Nur Management hat Lizenzen
- Ergebnis: Entweder keine Nutzung oder Shadow AI

**Root Causes:**
- Governance hat keine Tools freigegeben (→ C-Problem)
- Budget nicht genehmigt
- Beschaffungsprozess zu komplex / langsam
- IT-Abteilung blockiert (Security-Bedenken)

**Maturity-Bezug:** Level 1 (T-M-AVAILABILITY)
- Level 1: "Kein Zugang zu freigegebenen AI-Tools"
- **Transition 1→2:** Mindestens ein Tool offiziell verfügbar machen

**Diagnostische Signale:**
- T-M-AVAILABILITY = Level 1
- T-MC-BLOCKER = "no_tools"
- T-CTX-2 = "none" (kein aktiv genutztes Tool)
- Cross-Check: Shadow AI hoch → Nachfrage da, Angebot fehlt

**Cross-Dimension-Wirkung:**
- → A unmöglich: Ohne Tools keine Adoption
- → R frustriert: Bereite Menschen ohne Werkzeuge werden demotiviert
- → F unmöglich: Ohne Tools keine Prozessintegration

**Intervention:** → Quick-Win: Ein Tool für Stufe 1 (Public Cloud) sofort freigeben, parallel Stufe 2 evaluieren

---

#### T-H2: IDE-Bruch

**Beschreibung:** AI existiert nur als separater Chat im Browser. Es gibt keine Integration in die IDE oder das Haupt-Arbeitswerkzeug. Jede Nutzung erfordert einen Kontextwechsel.

**Typische Symptome:**
- Tab-Switching zwischen IDE und AI-Chat
- Copy-Paste von Code-Snippets hin und her
- Kontextverlust bei jedem Wechsel
- Hohe Friction → niedrige Nutzungsfrequenz

**Root Causes:**
- IDE-Extensions nicht freigegeben
- Technische Hürden (Proxy, VPN, Firewall)
- Kein Budget für IDE-integrierte Tools (nur Chat-Lizenz)
- Unbekannt, dass IDE-Integration möglich ist

**Maturity-Bezug:** Level 2 (T-M-IDE)
- Level 2: "Nur Browser-Chat, nicht in IDE integriert"
- **Transition 2→3:** IDE-Extension installieren und konfigurieren
- **Transition 3→4:** Stable, performant, mit Repo-Kontext

**Diagnostische Signale:**
- T-M-IDE = Level 2
- A-M-DEPTH = "chat" (Konsequenz: Nutzung bleibt oberflächlich)
- T-MC-BLOCKER = "poor_integration"
- Cross-Check: A-Score limitiert durch T-IDE-Gap

**Intervention:** → IDE-Integration als Top-Priorität, Copilot/Continue.dev Setup

---

#### T-H3: Performanz-Frust

**Beschreibung:** AI-Tools sind verfügbar und integriert, aber unzuverlässig, langsam oder instabil. Jedes schlechte Erlebnis reduziert die Nutzungsbereitschaft.

**Typische Symptome:**
- "Dauert zu lang, schreibe es lieber selbst"
- Häufige Timeouts oder Fehler
- Inkonsistente Verfügbarkeit (mal geht es, mal nicht)
- Teams kehren zu manuellen Workflows zurück

**Root Causes:**
- Infrastruktur unterdimensioniert (API-Limits, Rate-Limiting)
- Netzwerk-Latenz (besonders bei Private-Cloud-Setups)
- Modell-Auswahl nicht passend (zu groß/langsam für Use Case)
- Kein Monitoring der AI-Service-Qualität

**Maturity-Bezug:** Typisch bei Level 2-3 (T-M-RELIABILITY)
- Level 2: "Instabil, häufige Ausfälle, frustrierend"
- Level 3: "Grundsätzlich ok, aber Performance schwankt"
- **Transition 2→3:** Stabilität sicherstellen (SLA, Monitoring)
- **Transition 3→4:** Zuverlässig, performant, proaktiv gewartet

**Diagnostische Signale:**
- T-M-RELIABILITY = Level 2-3
- T-MC-BLOCKER = "latency" oder "performance"
- Cross-Check: A-Score sinkt oder stagniert trotz R-Score > 3 → Technik als Bremse
- R-MC-BLOCKER = "tech_barriers" (Spill-over in Readiness-Diagnostik!)

**Intervention:** → Infrastruktur-Review, Monitoring einrichten, Modell-Sizing optimieren

---

#### T-H4: Fehlende Sicherheitsstufen

**Beschreibung:** Es gibt nur eine Sicherheitsstufe für AI-Tools. Teams mit sensiblen Daten (Kundendaten, IP) können AI nicht nutzen, weil kein passendes Tier existiert.

**Typische Symptome:**
- "Für unser Projekt dürfen wir das nicht nutzen" (nur Public Cloud verfügbar)
- Teams mit sensiblen Daten komplett ausgeschlossen
- Oder: Alles muss durch Stufe 3 (air-gapped), obwohl das für viele Use Cases Overkill ist

**Root Causes:**
- Kein mehrstufiges Sicherheitskonzept implementiert
- Private Cloud / air-gapped Optionen nicht evaluiert
- "One-size-fits-all" Governance (→ C-Problem)
- Budget/Ressourcen für höhere Stufen fehlen

**Maturity-Bezug:** Typisch bei Level 2-3 (T-M-AVAILABILITY)
- Level 2: "Ein Tool verfügbar, aber nicht für alle Datenklassen"
- **Transition 2→3:** Mindestens 2 Sicherheitsstufen anbieten
- **Transition 3→4:** Alle 3 Stufen verfügbar + Self-Service-Provisioning

**Diagnostische Signale:**
- T-CTX-1 = nur "public_cloud" (nur eine Stufe)
- T-MC-BLOCKER = "missing_tier"
- Cross-Check: C-M-DATA = Level 2-3 (Datenklassifizierung unklar) → verstärkt das Problem

**Intervention:** → Sicherheitsstufen-Konzept, Private Cloud Evaluation (Azure OpenAI / Bedrock)

---

#### T-H5: Prompt-Ödland

**Beschreibung:** Keine gemeinsamen Prompt-Templates, keine Bibliothek, kein wiederverwendbares Wissen. Jeder erstellt Prompts von Grund auf.

**Typische Symptome:**
- Keine zentrale Prompt-Bibliothek
- Qualität der Prompts stark personenabhängig
- Keine MCP-Server oder Custom Instructions
- Jeder erfindet das Rad neu

**Root Causes:**
- Kein Ort / System für Prompt-Verwaltung definiert
- Kein Champion, der das kuratiert
- "Prompts sind persönlich" (Sharing-Kultur fehlt → A-H6)
- Technische Infrastruktur fehlt (Custom Instructions, MCP-Server)

**Maturity-Bezug:** Level 1-2 (T-M-ECOSYSTEM)
- Level 1: "Jeder auf eigene Faust, keine gemeinsame Infrastruktur"
- Level 2: "Erste informelle Sammlungen, personenabhängig"
- **Transition 1→2:** Erste gemeinsame Sammlung erstellen
- **Transition 2→3:** Kuratierte Bibliothek, versioniert, zugänglich

**Diagnostische Signale:**
- T-M-ECOSYSTEM = Level 1-2
- T-MC-PRIORITY = "prompt_library"
- Cross-Check: A-M-SHARING niedrig → kein Wissenstransfer
- Cross-Check: R-MC-ENABLEMENT = "prompts" → Teams wünschen sich bessere Prompts

**Intervention:** → Prompt Library Setup (Git-Repo oder Wiki), Champion für Kuration mandatieren

---

#### T-H6: CI/CD-Gap

**Beschreibung:** AI-Nutzung existiert nur lokal (IDE/Chat). Es gibt keine Integration in die CI/CD-Pipeline, kein automatisiertes AI-gestütztes Testing, Review oder Deployment.

**Typische Symptome:**
- Kein AI-gestütztes Code-Review in der Pipeline
- Keine automatisierte Test-Generierung
- Keine AI-unterstützte Dokumentations-Erstellung im Build-Prozess
- AI bleibt "Developer-Tool", nicht "Team-Infrastruktur"

**Root Causes:**
- CI/CD-Integration erfordert höheren technischen Aufwand
- Security-Bedenken (AI in der Pipeline = Angriffsfläche)
- Kein klarer Use Case definiert / priorisiert
- Fehlende Expertise für Pipeline-Integration

**Maturity-Bezug:** Typisch bei Level 2-3 (T-M-IDE / T-M-ECOSYSTEM)
- **Transition 3→4:** Von IDE-nur zu Pipeline-Integration
- **Transition 4→5:** End-to-End AI-native Delivery-Pipeline

**Diagnostische Signale:**
- T-M-ECOSYSTEM = Level 2-3 (lokal ok, Pipeline fehlt)
- T-MC-PRIORITY = "cicd_integration"
- Cross-Check: F-Score niedrig (AI nicht im Prozess) → Pipeline-Gap ist ein Teilaspekt

**Intervention:** → CI/CD AI-Integration Playbook, Pilot: AI-gestütztes Code-Review in Pipeline

---

## 3. Herausforderungs-Übersicht (Cross-Reference Matrix)

### 3.1 Alle Herausforderungen im Überblick

| ID | Dimension | Herausforderung | Typisches Level | Stärkster Indikator |
|----|-----------|-----------------|-----------------|---------------------|
| C-H1 | Compliance | Policy-Vakuum | 1-2 | C-CTX-1 = "none"/"unknown" |
| C-H2 | Compliance | Governance als Bottleneck | 2-3 | C-CTX-2 > 4 Wochen |
| C-H3 | Compliance | Datenklassifizierungs-Grauzone | 1-3 | C-MC-BLOCKER = "data_classification" |
| C-H4 | Compliance | Betriebsrats-Blockade | 1-2 | C-MC-BLOCKER = "works_council" |
| C-H5 | Compliance | Compliance-Angst-Paralyse | beliebig | C hoch + A niedrig (Pattern!) |
| C-H6 | Compliance | EU AI Act Unvorbereitetheit | 1-2 | C-M-REGULATORY = Level 1 |
| R-H1 | Readiness | Existenzangst | 1-2 | R-MC-BLOCKER = "role_concern" |
| R-H2 | Readiness | Skill-Gap / Paralyse | 1-3 | R-MC-BLOCKER = "missing_skills" |
| R-H3 | Readiness | Fehlende psych. Sicherheit | 1-3 | Shadow AI hoch + Safety niedrig |
| R-H4 | Readiness | Manager als unsichtbare Bremse | 2-3 | R-MC-BLOCKER = "no_time" |
| R-H5 | Readiness | Champions ohne Mandate | 2-3 | R-MC-ENABLEMENT = "champion" |
| R-H6 | Readiness | Rollenunklarheit | 2-3 | R-MC-BLOCKER = "unclear_use_cases" |
| A-H1 | Adoption | Chat-Only-Plateau | 2 | A-MC1 = "chat" |
| A-H2 | Adoption | Coding-Only-Adoption | 2-3 | A-CTX-1 = nur "coding" |
| A-H3 | Adoption | Sporadische Nutzung | 2 | A-CTX-2 < 30 Min/Tag |
| A-H4 | Adoption | Shadow AI dominiert | beliebig | A-MC3 = "frequently"/"regularly" |
| A-H5 | Adoption | Vertrauens-Volatilität | 2-3 | R-MC-BLOCKER = "quality_uncertainty" |
| A-H6 | Adoption | Wissenssilos | 1-2 | A-M-SHARING = Level 1-2 |
| F-H1 | Flow | AI als Insellösung | 2 | A hoch + F niedrig (Pattern!) |
| F-H2 | Flow | Bottleneck-Blindheit | 1-2 | F-CTX-1 = "none" |
| F-H3 | Flow | Bottlenecks unverändert | 2-3 | F-M-IMPACT = Level 1-2 |
| F-H4 | Flow | Fehlende Messbarkeit | 1-2 | F-M-MEASUREMENT = Level 1-2 |
| F-H5 | Flow | Process Mining blockiert | 1-2 | F-M-AUTOMATION + C-REGULATORY niedrig |
| F-H6 | Flow | Workflow-Redesign-Widerstand | 3 | F-BOTTLENECK hoch + F-INTEGRATION niedrig |
| T-H1 | Technical | Tool-Wüste | 1 | T-M-AVAILABILITY = Level 1 |
| T-H2 | Technical | IDE-Bruch | 2 | T-M-IDE = Level 2 |
| T-H3 | Technical | Performanz-Frust | 2-3 | T-MC-BLOCKER = "latency" |
| T-H4 | Technical | Fehlende Sicherheitsstufen | 2-3 | T-CTX-1 = nur "public_cloud" |
| T-H5 | Technical | Prompt-Ödland | 1-2 | T-M-ECOSYSTEM = Level 1-2 |
| T-H6 | Technical | CI/CD-Gap | 2-3 | T-MC-PRIORITY = "cicd_integration" |

### 3.2 Kausalketten (Herausforderungen die andere verursachen)

```
C-H1 (Policy-Vakuum)
  └─→ T-H1 (kein Tool freigegeben)
       └─→ A-H4 (Shadow AI)
            └─→ C-H3 (Daten-Risiko)

R-H4 (Manager-Bremse)
  └─→ R-H2 (Skill-Gap, keine Lernzeit)
       └─→ A-H3 (sporadische Nutzung)
            └─→ F-H1 (AI als Insellösung)

C-H4 (Betriebsrat-Block)
  └─→ F-H5 (Process Mining blockiert)
       └─→ F-H2 (Bottleneck-Blindheit)
            └─→ F-H3 (Bottlenecks unverändert)

T-H2 (IDE-Bruch)
  └─→ A-H1 (Chat-Only-Plateau)
       └─→ A-H3 (sporadische Nutzung)
            └─→ F-H1 (AI als Insellösung)
```

### 3.3 Die "Big 5" — Herausforderungen mit dem größten Hebel

Diese Herausforderungen blockieren überproportional viele andere und sollten mit höchster Priorität diagnostiziert werden:

1. **C-H1 Policy-Vakuum** — Blockiert T, A, erzeugt Shadow AI
2. **R-H4 Manager als Bremse** — Blockiert R, A, F indirekt
3. **R-H1 Existenzangst** — Blockiert A massiv, vergiftet gesamte Transformation
4. **T-H1 Tool-Wüste** — Ohne Tools ist alles andere irrelevant
5. **F-H2 Bottleneck-Blindheit** — Ohne Wissen wo es klemmt, werden AI-Investitionen verschwendet

---

## 4. Nächste Schritte

### 4.1 Validierung gegen bestehende Question Banks

- [ ] Für jede Herausforderung prüfen: Wird sie durch bestehende Fragen aufgedeckt?
- [ ] Gaps identifizieren: Welche Herausforderungen haben kein diagnostisches Signal?
- [ ] Redundanzen identifizieren: Welche Fragen decken keine Herausforderung ab?

### 4.2 Question Bank Optimierung

- [ ] Diagnostische MC-Optionen an Root Causes anpassen
- [ ] Cross-Validation-Matrix in Scoring-Engine implementieren
- [ ] Normalisierungs-Framing für sensitive Fragen ergänzen

### 4.3 Interventions-Kataloge vervollständigen

- [ ] Interventionskataloge für C, A, F, T erstellen (R existiert bereits)
- [ ] Jede Intervention mit Herausforderungs-IDs verknüpfen

### 4.4 Survey-Methodik-Verbesserungen

- [ ] Streuungs-Indikator (IQR) im Scoring implementieren
- [ ] Response-Quality-Indikatoren (Straight-lining, Speeding) in App
- [ ] Cross-Dimension-Patterns als automatische Narrative

---

**Referenzen:**
- Framework: `framework/ai-transformation-framework-craft.md`
- Question Banks: `deliverables/question_banks/*.yaml`
- Methodik: `deliverables/question_banks/METHODOLOGY.md`
- Interventionskatalog R: `deliverables/intervention-catalogue-readiness.md`
- Survey-Methodik-Research: Dillman (2014), DeVellis (2017), Wiggins & McTighe (2005)
