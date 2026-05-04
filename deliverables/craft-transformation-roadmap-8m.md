# AI Transformation Roadmap — [Projektname]
## 8-Monats-Perspektive: Mai – Dezember 2026

**Erstellt:** April 2026  
**Erstellt durch:** AI Transformation Manager  
**Methodik:** CRAFT AI Transformation Framework v1.0  
**Status:** Entwurf — zur Abstimmung mit Management

---

## Auf einen Blick

**Ziel:** ≥ 30% der definierten Ticketkategorien vollautomatisch bearbeitet bis Dezember 2026  
**Rahmenbedingung:** Air-gapped (public-1), lokale Modelle (Gemma 4, Qwen 3.6), 300+ Personen international

| Phase | Zeitraum | Aktivitäten | Ziel / Output |
|---|---|---|---|
| **Findung Sprint 1** | Mai, Wo. 1–2 | Klärungsgespräch Manager (30%-Ziel präzisieren) · Governance-Klärung starten (public-1: was darf ins Modell?) · AI-Projektteam-Kandidaten identifizieren und freistellen · Ticket-Baseline erheben | Schriftlich definiertes Ziel, Governance-Status, Team steht und ist freigestellt, Baseline-Daten vorhanden |
| **Findung Sprint 2** | Mai, Wo. 3–4 | Kickoff-Workshop AI-Projektteam · CRAFT Deep-Dive (Baseline aller 5 Dimensionen) · Tooling-Setup (IDE-Integration, Modell-Anbindung) · Value Stream Snapshot: Wie fließen Tickets heute? | CRAFT-Baseline (Spider-Chart), lauffähiges Tooling, priorisierter PoC-Scope, erste Pipeline-Hypothese |
| **Pilotzyklus 1** | Juni | Pipeline für Ticketkategorie #1 bauen und mit realen Tickets testen · Qualität und Automatisierungsrate messen · Erste Ergebnisse an Sponsor kommunizieren | Erste validierte Pipeline, messbare Automatisierungsrate, Readiness Gate Entscheidung |
| **Pilotzyklus 2** | Juli | Pipeline #1 stabilisieren · Pipeline für Ticketkategorie #2 starten · Playbooks und Dokumentation für Skalierung schreiben · Koordinatoren-Rollen definieren, Rückkehr vorbereiten | Zwei funktionierende Pipelines, replizierbare Playbooks, Skalierungsplan konkret |
| **Skalierung** | Aug – Okt | AI-Projektteam kehrt in Herkunftsteams zurück (als embedded Change Agents) · 2–3 AI Transformation Koordinatoren übernehmen Team-Begleitung · Tooling und Pipelines in alle Teams ausrollen · Laufende 4-Wochen-Zyklen mit Pulse Check und Business Problem Check | 300+ Personen aktiv mit Tooling, Automatisierung läuft in mehreren Teams, Koordinatoren arbeiten selbstständig |
| **Konsolidierung** | Nov – Dez | Finale Automatisierungsrate messen · CRAFT Pulse Check alle Teams · Management-Report und Präsentation · Retrospektive, Ausblick 2027 | Nachweis des 30%-Ziels (oder begründete Abweichung), Roadmap 2027 |

---

## Executive Summary

Dieses Dokument beschreibt den konkreten Weg zur AI-Transformation in einem internationalen, sicherheitsklassifizierten Softwareprojekt (public-1) mit über 300 Personen in 8 Monaten.

**Der Kernansatz:** Ein dediziertes, vollständig freigestelltes AI-Projektteam — zusammengestellt aus den AI-affinsten und erfahrensten Kolleginnen und Kollegen des Projekts — baut in ca. 3 Monaten operative Automatisierungspipelines auf und trägt das Wissen danach direkt zurück in die Herkunftsteams. Die Skalierung funktioniert nicht durch Workshops, sondern durch Menschen, die es selbst gemacht haben.

**Das Ziel "30% automatisierte Tickets bis Ende 2026" ist erreichbar** — unter der Bedingung, dass Ticketkategorien präzisiert werden, Governance vorab klärt was das Modell verarbeiten darf, und das Management das AI-Projektteam konsequent freistellt.

---

## Ausgangssituation

| Dimension | Ist-Stand |
|---|---|
| **Teamgröße** | 300+ Personen, international, Entwickler + BAs + Architekten |
| **Sicherheitsumgebung** | Air-gapped, Einstufung public-1 — kein direkter Zugriff auf Public-Cloud-AI-Dienste |
| **Verfügbare Modelle** | Gemma 4, Qwen 3.6 (lokal via Ollama), eigene Hardware |
| **Verfügbare Tools** | Continue.dev / Cline (IDE-Integration), OpenCode |
| **AI-Reifegrad** | Nicht auf Null — Vorarbeiten vorhanden; Verteilung über Teams noch nicht erfasst |
| **Management-Commitment** | Ausdrückliche Unterstützung, Budgetzusage vorhanden |
| **Guiding Coalition** | Noch nicht formell, potenzielle Personen identifiziert |
| **Baseline-Daten** | Noch nicht erhoben (Ticketvolumen, Typenverteilung, Lead Times) |

> **public-1:** Die Einstufung hat konkrete Auswirkungen auf welche Ticket-Inhalte das Modell verarbeiten darf und welche Daten die agentic Pipelines nicht berühren dürfen. Governance-Klärung hierzu ist der kritische Pfad — vor jeder anderen Aktivität.

---

## Das 30%-Ziel — Präzisierung als erster Schritt

Bevor die Roadmap greift, muss folgende Frage mit dem Management beantwortet sein:

> **"Was genau bedeutet 'automatisiertes Ticket'?"**

| Interpretation | Bedeutung | Realisierbarkeit in 8 Monaten |
|---|---|---|
| **A: Vollautonome Pipeline** | Ticket eingehend → AI analysiert, schreibt Code, führt Tests aus, merged und schließt Ticket — ohne menschliche Prüfung | Realistisch nur für definierte Ticketkategorien (s.u.) — nicht für das gesamte Volumen |
| **B: AI-gestützte Bearbeitung** | AI übernimmt >70% der Bearbeitungsarbeit, Mensch validiert am Ende | Für deutlich breiteren Ticketbereich erreichbar |

**Empfehlung für das Manager-Gespräch:**

> *"Ich möchte sicherstellen, dass wir das Ziel so definieren, dass wir es am Ende messen können. Welche Ticketkategorien stehen im Fokus — und was gilt als 'automatisiert bearbeitet': vollständig ohne menschliche Prüfung, oder AI hat die Arbeit gemacht und ein Mensch hat bestätigt?"*

### Welche Ticketkategorien sind vollautomatisierbar?

Mit Gemma 4 / Qwen 3.6 in air-gapped Umgebung (public-1) sind folgende Typen realistisch als End-to-End-Pipeline umsetzbar:

| Ticketkategorie | Automationspotenzial | Voraussetzung |
|---|---|---|
| Dependency-Updates (Libraries, Packages) | Sehr hoch | Reproduzierbare Test-Suite |
| Dokumentations-Tickets (API-Docs, README) | Sehr hoch | Code als Informationsquelle vorhanden |
| Test-Generierung (neue Funktionen) | Hoch | Klare Funktionsgrenzen, Testframeworks vorhanden |
| Kleine Bugfixes mit Testfehler-Reproduktion | Hoch | Fehler ist durch Test reproduzierbar |
| Config- und Infrastruktur-Routineänderungen | Hoch | IaC-Templates standardisiert |
| Komplexe Feature-Tickets | Niedrig | Nicht im 8-Monats-Scope |

**Hypothese:** In den meisten Softwareprojekten machen die ersten vier Kategorien zusammen 25–40% des Ticketvolumens aus. Die genaue Zahl ergibt die Baseline-Erhebung in Sprint 1.

---

## Das AI-Projektteam — Operativer Kern & Wissenstransfer-Einheit

### Grundidee und Doppelrolle

Das AI-Projektteam ist kein Workshop-Team und kein Beratungsgremium. Es ist ein **operatives Team**, das echte Automatisierungspipelines für echte Tickets baut — und danach als verteile Expertise in die Herkunftsteams zurückgeht.

```
Funktion A: Operativer Pilot
  → Team arbeitet an realen Tickets mit AI-Tooling
  → Baut End-to-End-Automatisierungspipelines für definierte Ticketkategorien
  → Generiert replizierbare Playbooks und Patterns aus der eigenen Praxis
  → Liefert die messbaren Short-Term Wins, die die Organisation überzeugen

Funktion B: Enablement Hub
  → Baut die Tooling-Infrastruktur (Pipelines, Prompt-Bibliotheken, IDE-Templates)
  → Entwickelt den Wissenstransfer-Plan für die Rückkehr in die Teams
  → Bereitet Champions vor, die die Transformation eigenständig weiterführen können
```

### Zusammensetzung: Wer ins Team kommt

Das Team besteht aus **selektierten, AI-affinen und erfahrenen Kolleginnen und Kollegen** aus den bestehenden Teams — keine Einsteiger, keine Skeptiker. Die Auswahlkriterien:

- Technische Kompetenz im Kernthema des Projekts (Entwickler + BAs)
- Nachgewiesenes Interesse an oder Erfahrung mit AI-Tooling (auch Shadow AI zählt)
- Kommunikationsstärke: werden danach als Change Agents in ihren Teams auftreten
- Glaubwürdigkeit im Kollegenkreis: Peer-Trust ist entscheidend für Skalierung

### 100% Freistellung — kein Kompromiss

**Die Champions im AI-Projektteam sind vollständig freigestellt.** Nicht zu 20%, nicht zu 50%. Vollständig, für die Dauer des Projekts (ca. 10–14 Wochen).

Warum das kein Verhandlungspunkt ist:
- 20% dedizierte Kapazität für Champions scheitert in der Praxis regelmäßig an der Priorität des Tagesgeschäfts
- Das Ziel ist, dass diese Personen in 10–14 Wochen so tief in AI-Automatisierung eingetaucht sind, dass sie es danach eigenständig in ihren Teams verankern können
- Halbe Aufmerksamkeit = halbes Lernen = Skalierung scheitert

**Was mit dem freigestellten Know-how in den Herkunftsteams passiert**, muss vorab geplant werden:
- Temporäre Kapazitätslücken sind einzuplanen (Scope-Anpassung, temporäre Unterstützung)
- Das Management muss diese Investition explizit genehmigen — sie ist größer als ein Tool-Rollout
- Die Rückkehr der Personen ist der Zeitpunkt, an dem die Transformation in der Fläche beginnt: Nicht als externe Berater, sondern als Peers mit operativer Erfahrung

### Zeithorizont und Auflösungsplan

Das AI-Projektteam ist **explizit befristet**. Das ist kein Mangel, sondern Design. Der Endpunkt wird von Anfang an kommuniziert.

```
Monat 1:    Findungsphase — Team formiert, Basis gelegt, Deep Dive
Monat 2–3:  Operative Phase — Pipelines bauen, PoCs validieren
Monat 4:    Transferphase — Wissen dokumentieren, Rückkehr vorbereiten,
             Skalierungs-ATMs aufbauen
Ab Monat 4: Teammitglieder kehren in Herkunftsteams zurück — als
             embedded Change Agents mit operativer Kompetenz
```

Der Auflösungsplan gehört in den Kickoff-Workshop des Teams: Alle Mitglieder wissen vom ersten Tag, dass ihr Ziel die Rückkehr ist — und was sie bis dahin befähigen müssen.

### CRAFT-Dimensionen im AI-Projektteam

Auch wenn das Team befristet und fokussiert ist: Die CRAFT-Dimensionen müssen abgedeckt sein — nicht als bürokratische Pflicht, sondern weil sie die häufigsten Scheitergründe adressieren.

| Dimension | Im AI-Projektteam | Wie abgedeckt |
|---|---|---|
| **C — Compliance** | Governance für public-1 klären: Was darf ins Modell? | Sprint 1, mit Governance Liaison — MUSS vor operativer Arbeit stehen |
| **T — Technical** | Tooling lauffähig, Modelle integriert, Pipeline-Architektur | Sprint 1–2, Technical AI Lead |
| **R — Readiness** | Team ist AI-affin — aber Psychological Safety und Skill-Gaps trotzdem diagnostizieren | Deep-Dive in Sprint 2 (R-Dimension), C&P Lead |
| **A — Adoption** | DAU-Tracking für das Team selbst einrichten | Sprint 2, als Blaupause für spätere Team-Rollouts |
| **F — Flow** | Value Stream Snapshot für das Team: Wie fließen Tickets jetzt, wie soll es sein? | Sprint 2 (kein volles VSM, aber ausreichend für Priorisierung) |

Der **CRAFT Deep-Dive in Sprint 2** ist kein bürokratisches Assessment — er ist das diagnostische Werkzeug, mit dem das Team versteht, wo die Hebel liegen. Genau das braucht man, bevor man operative Pipelines baut.

---

## AI Adoption Team — Skalierung nach Auflösung des Projektteams

Das AI-Projektteam kann nicht 300 Personen transformieren. Es schafft die Grundlage — und danach braucht es eine skalierte Change-Kapazität.

### Das Problem

Ein AI Transformation Manager (100%) reicht für die Findungs- und Pilotphase. Für die Skalierung auf 300+ Personen in mehreren internationalen Teams nicht mehr.

### Der Skalierungsplan

```
Findungs- und Pilotphase (Monat 1–3):
  1 ATM + AI-Projektteam (vollständig freigestellt)

Skalierungsphase (ab Monat 4):
  1 ATM (Orchestrierung, Qualitätssicherung, Sponsor-Kommunikation)
  + 2–3 "AI Transformation Koordinatoren" (aus den zurückkehrenden
    Projektteam-Mitgliedern oder neu eingesetzt)
  + Champion-Netzwerk in jedem skalierten Team
```

### Die AI Transformation Koordinatoren

Diese Rolle ist neu — sie entsteht aus dem AI-Projektteam heraus:

- **Wer:** Die 2–3 fähigsten und kommunikativsten Personen aus dem AI-Projektteam, die nicht vollständig in ihre Herkunftsteams zurückkehren, sondern eine koordinierende Funktion übernehmen
- **Was:** Begleiten je 1–2 Teams durch ihre ersten CRAFT-Zyklen, führen Pulse Checks durch, sind operative Ansprechpartner für technische Fragen
- **Kapazität:** 40–60% für die Koordinationsrolle, Rest in ihrem Team — kein reines Overhead-Profil
- **Zeitrahmen:** 3–4 Monate, bis die Teams selbstständig laufen

Die Champions in den skalierten Teams (je 1–2 pro Team) sind die dritte Ebene: Peer-trusted, operativ erfahren (durch den Kontakt mit dem Projektteam), und mit konkreten Pipelines und Playbooks ausgestattet.

---

## CRAFT-Dimensionen: Ausgangslage

```
Dimension    Erwarteter Ist-Stand        Kritischer Pfad?
─────────────────────────────────────────────────────────
C Compliance  public-1 definiert äußeren  ⚠ JA — klären was das
             Rahmen, aber AI-Policy für   Modell verarbeiten darf.
             Ticket-Inhalte noch offen    Alles andere hängt davon ab.

T Technical   Modelle vorhanden,          ✅ Solide Basis für air-gapped.
             Hardware läuft, Tools        IDE-Integration und Pipeline-
             installierbar               Architektur müssen noch stehen.

R Readiness  AI-Projektteam ist per       ✅ Gute Ausgangslage.
             Selektion AI-affin. Rest     Haltung der übrigen 280+ noch
             der Organisation unbekannt.  unbekannt — wird in Zyklen
                                         schrittweise erhoben.

A Adoption   Vorarbeiten vorhanden,       → Tracking-Setup in Sprint 2.
             aber unstrukturiert.         Blaupause im Projektteam,
                                         dann repliziert in Teams.

F Flow       Keine Baseline, kein VSM.    ⚠ Ohne Bottleneck-Analyse
                                         kein zielgerichteter Auto-
                                         matisierungsfokus. Sprint 2.
```

---

## Zeitplan und Phasen

### Übersicht

```
Mai           Juni          Juli          Aug–Okt       Nov–Dez
────────────────────────────────────────────────────────────────
│  Findungsphase  │  Pilotzyklus  │  Pilotzkylus  │  Skalierung  │  Konsolidierung  │
│  (1 Monat)      │  1 (4 Wochen) │  2 (4 Wochen) │  (3 Monate)  │  (2 Monate)      │
│  2 × 2 Wochen   │               │               │              │                  │
```

---

### Findungsphase — Sprint 1 (Wochen 1–2)

**Ziel:** Spielfeld abstecken, Governance klären, Team zusammenstellen, Ziel präzisieren.  
**ADKAR-Fokus:** Awareness bei Schlüsselpersonen erzeugen.

| Tag | Aktivität | Wer |
|---|---|---|
| 1–2 | Klärungsgespräch Manager: 30%-Ziel präzisieren, Ticketkategorien und Automatisierungsdefinition schriftlich festhalten | ATM |
| 1–3 | **Governance-Klärung starten:** Was darf unter public-1 durch das Modell? Ticket-Inhalte, Code, Metadaten? | Governance Liaison |
| 3–5 | AI-Projektteam zusammenstellen: Kandidaten ansprechen, Kapazität freistellen (mit Management abstimmen) | ATM |
| 3–7 | Baseline-Erhebung: Ticketvolumen nach Typ, aktuelle Lead Times, Fehlerquoten — ohne Baseline kein Delta | Value Stream Coach |
| 5–10 | CRAFT Context Readiness: 4–6 Schlüsselpersonen (aus dem zukünftigen Projektteam + Schlüsselstakeholder) | ATM |
| 10–14 | **Business Problem Check:** Ist das Business-Ziel klar? Governance-Status? Baseline vorhanden? Team steht? | ATM |

**Output Sprint 1:** Schriftlich definiertes Ziel (spezifische Ticketkategorien + Automatisierungsdefinition), Governance-Status, AI-Projektteam besetzt und freigestellt, Baseline-Daten.

---

### Findungsphase — Sprint 2 (Wochen 3–4)

**Ziel:** CRAFT-Basis legen, Team ausrichten, Tooling lauffähig machen, Scope für Pilot fixieren.  
**Wichtig:** Dieser Sprint enthält den **CRAFT Deep-Dive** (nicht nur Pulse-Check) — es ist die Kickoff-Baseline des AI-Projektteams. Das ist der Startpunkt, der in 3 Monaten als Referenz für den Fortschritt dient.

| Tag | Aktivität | Wer |
|---|---|---|
| 15–17 | **Kickoff-Workshop AI-Projektteam** (2–3h): Gemeinsame Vision, Auflösungsplan kommunizieren, Spielregeln festlegen | ATM + C&P Lead |
| 15–17 | Shadow AI Amnestie: Was nutzt das Team schon? Offene Bestandsaufnahme, keine Konsequenzen | ATM |
| 17–20 | **CRAFT Deep-Dive** mit dem AI-Projektteam (alle 5 Dimensionen): Wo stehen wir? Was blockiert uns? | ATM |
| 17–20 | IDE-Integration und Tooling-Setup: Continue.dev / Cline, Modell-Anbindung, erste Tests | Technical AI Lead |
| 20–22 | Ergebnis-Workshop Deep-Dive: Spider-Chart gemeinsam lesen, Top-2-Bottlenecks identifizieren | ATM + VSC |
| 22–28 | Value Stream Snapshot: Wie fließen Ziel-Tickets heute durch die Pipeline? Wo sind die Wartezeiten? | Value Stream Coach |
| 28 | **Business Problem Check:** Deep-Dive-Ergebnisse und VSM-Snapshot — passt das Business-Ziel noch? Anpassungen? | ATM |

**Output Sprint 2:** CRAFT-Baseline für das AI-Projektteam (Spider-Chart), lauffähiges Tooling, priorisierter Scope für Pilotzyklus 1, klare Hypothese für erste Pipeline.

---

### Pilotzyklus 1 — Wochen 5–8 (Juni)

**Ziel:** Erste vollautomatische Pipeline für Ticketkategorie #1 bauen und validieren.  
**ADKAR-Fokus:** Ability im AI-Projektteam aufbauen, erste Reinforcement-Momente für Sponsoren schaffen.

| Woche | Aktivität | Wer |
|---|---|---|
| 5 | CRAFT Pulse Check (erster regulärer — 4 Wochen nach Deep-Dive), Zieldefinition Zyklus | ATM |
| 5–6 | Pipeline-Bau Kategorie #1: Architektur festlegen, Prompt-Engineering, Workflow-Design | Tech Lead + Entwickler des Teams |
| 6–7 | Pipeline-Test mit realen Tickets (kontrolliert): Qualitätsmessung, Fehleranalyse | Gesamtes AI-Projektteam |
| 7 | **Quick Win kommunizieren:** Erste Ergebniszahlen an Sponsor — auch wenn noch nicht perfekt | ATM |
| 8 | **Business Problem Check:** Wie hoch ist die Automatisierungsrate in Kategorie #1? Qualität akzeptabel? Kurskorrektur? | ATM + VSC |

**Output:** Erste validierte Pipeline, messbare Automatisierungsrate für Kategorie #1, Entscheidung Readiness Gate (Erweitern / Vertiefen / Konsolidieren).

---

### Pilotzyklus 2 — Wochen 9–12 (Juli)

**Ziel:** Pipeline stabilisieren, Kategorie #2 starten, Playbooks für Skalierung vorbereiten.  
**Parallel:** Erste Gespräche mit Herkunftsteams — die Rückkehr wird sichtbar vorbereitet.

| Woche | Aktivität | Wer |
|---|---|---|
| 9 | Pulse Check #2, Pipeline #1 optimieren (Edge Cases, Fehlerrate senken) | Tech Lead |
| 9–10 | Pipeline Kategorie #2: Scope festlegen, PoC starten | Tech Lead + Champions |
| 10–11 | **Playbook-Sprint:** Was haben wir gelernt? Was ist replizierbar? Dokumentation für andere Teams | Gesamtes AI-Projektteam |
| 11 | Erste Champion-Kandidaten in Herkunftsteams identifizieren und ansprechen | ATM + C&P Lead |
| 11–12 | Skalierungs-ATMs identifizieren: Wer aus dem Projektteam übernimmt Koordinations-Rolle? | ATM |
| 12 | **Business Problem Check (Meilenstein):** Wo stehen wir gesamt? Sind wir auf Kurs für 30%? | ATM + Management |

**Output:** Zwei funktionierende Pipelines, Playbooks verfügbar, Skalierungsplan konkret, Koordinatoren-Rollen definiert.

---

### Skalierungsphase — August bis Oktober (ca. 3 Zyklen)

**Ziel:** AI-Projektteam löst sich auf, Wissen verteilt sich in die Organisation.  
**Die entscheidende Phase:** Jetzt zeigt sich, ob der Wissenstransfer funktioniert.

**Monat 4 (August) — Transfermonat:**

| Aktivität | Wer |
|---|---|
| AI-Projektteam-Mitglieder kehren schrittweise in Herkunftsteams zurück | Alle + ATM |
| Koordinatoren-Rollen beginnen: 2–3 Personen begleiten je 1–2 Teams | Koordinatoren |
| Kickoff-Workshop je Herkunftsteam (Kurzformat 2h, nicht 4h — mit Peer als Co-Moderator) | Koordinator + Champion |
| CRAFT Pulse Check in jedem skalierten Team als Baseline | Koordinatoren |
| Pipelines in Herkunftsteams integrieren: Tooling-Rollout, IDE-Setup | Champions + Tech Lead |

**Monate 5–6 (September/Oktober) — Scaling läuft:**

| Aktivität | Wer |
|---|---|
| Laufende 4-Wochen-Zyklen mit je einem Pulse Check und Business Problem Check | Koordinatoren |
| ATM orchestriert Gesamtbild, hält Sponsor-Kommunikation aufrecht | ATM |
| Nachzügler-Teams adressieren: Wer hat Widerstand? Was fehlt? | C&P Lead |
| Metriken aggregieren: Wie entwickelt sich die Automatisierungsrate über alle Teams? | ATM + VSC |

---

### Konsolidierung — November bis Dezember

**Ziel:** Finale Messung, Management-Präsentation, Ausblick 2027.

| Aktivität | Timing | Wer |
|---|---|---|
| Finale Automatisierungsrate messen: % Tickets in Ziel-Kategorien ohne menschliche Hauptarbeit | November | ATM + VSC |
| CRAFT Pulse Check final (alle Teams) | November | Koordinatoren |
| Management-Report vorbereiten: Business-Impact-Kennzahlen, CRAFT-Delta, ROI-Rechnung | November–Dezember | ATM |
| **Management-Präsentation** | Dezember | ATM |
| Retrospektive: Was hat funktioniert? Was würden wir anders machen? | Dezember | Gesamtes AI Adoption Team |

---

## Kritische Abhängigkeiten

| # | Abhängigkeit | Auswirkung wenn offen | Deadline |
|---|---|---|---|
| 1 | **Governance (public-1): Welche Daten darf das Modell verarbeiten?** | Ticket-Automatisierung blockiert — kein PoC möglich | Sprint 1, Tag 1 |
| 2 | **Definition "automatisiertes Ticket" schriftlich** | Kein messbares Ziel, Erwartungsmanagement scheitert | Sprint 1, Woche 1 |
| 3 | **AI-Projektteam 100% freigestellt (Management-Entscheidung)** | Team arbeitet mit halber Aufmerksamkeit, Skalierung scheitert | Sprint 1, Woche 1–2 |
| 4 | **Kapazitätsplanung Herkunftsteams** | Freistellung erzeugt unkontrollierten Druck in den Teams | Sprint 1, Woche 2 |
| 5 | **Modellqualität für Ziel-Ticketkategorien** | PoC liefert nicht die nötige Qualität → Kategorie-Scope anpassen | Pilotzyklus 1 |
| 6 | **Baseline-Daten vorhanden** | Kein Delta messbar, kein Fortschritt nachweisbar | Sprint 1, Woche 2–3 |
| 7 | **Koordinatoren-Rollen besetzt** | Skalierung scheitert, ATM als Engpass | Pilotzyklus 2 |

---

## Business-Impact-Kennzahlen (Vorschlag)

> Werden im Klärungsgespräch (Sprint 1) gemeinsam mit dem Management finalisiert.

| Kennzahl | Baseline | Ziel bis Dez. 2026 | Wann messbar |
|---|---|---|---|
| **Anteil automatisiert bearbeiteter Tickets** (Ziel-Kategorien) | TBD Mai 2026 | ≥ 30% der definierten Kategorien | Ab Pilotzyklus 1 |
| **Durchschnittliche Lead Time** (Ziel-Ticketkategorien) | TBD | –50% vs. Baseline | Ab Pilotzyklus 1 |
| **Tooling-Nutzung (DAU/Team)** | TBD | ≥ 60% der Entwickler täglich | Ab Skalierungsphase |
| **Developer Satisfaction** | TBD | Kein Rückgang, idealerweise +10 | Ende Skalierungsphase |

---

## Sofortmaßnahmen (nächste 2 Wochen)

```
Priorität  Maßnahme                                          Bis
──────────────────────────────────────────────────────────────────────────
1          Manager-Gespräch: 30%-Ziel präzisieren,            Diese Woche
           Ticketkategorien + Automatisierungsdefinition
           schriftlich festhalten

2          Governance-Klärung starten: Wer entscheidet        Diese Woche
           unter public-1, welche Daten ins Modell dürfen?

3          AI-Projektteam-Kandidaten ansprechen:               Nächste Woche
           Kriterien: AI-affin, erfahren, kommunikationsstark,
           Peer-Vertrauen — kein Einsteigerprofil

4          Management-Entscheidung: 100% Freistellung          Nächste Woche
           für Projektteam-Mitglieder + Kapazitätsplanung
           für Herkunftsteams klären

5          Baseline-Erhebung starten:                          Nächste Woche
           Ticketvolumen nach Typ, Lead Times, Fehlerquoten
```

---

## Was diese Roadmap nicht ist

- **Kein Versprechen:** 30% ist erreichbar für spezifische Ticketkategorien unter den genannten Bedingungen. Wenn Governance die Kern-Kategorien unter public-1 ausschließt, muss das Ziel angepasst werden.
- **Kein fester Ablaufplan:** Jeder Zyklus endet mit einem Business Problem Check — die Roadmap passt sich an, was die Daten zeigen.
- **Kein Tool-Rollout:** Die verfügbare Technologie (Gemma 4, Qwen 3.6, eigene Hardware) ist eine solide Basis für diese Aufgabe. Die Transformation gelingt oder scheitert an Menschen, Prozessen und Governance — nicht an Modellqualität.
- **Kein Parallelauftrag:** Das AI-Projektteam kann seinen Auftrag nur erfüllen, wenn es vollständig freigestellt ist. Halbe Freistellungen produzieren halbfertige Pipelines und keine skalierbare Transformation.

---

**Version:** 0.2  
**Nächste Review:** Nach Klärungsgespräch mit Management (Sprint 1)  
**Referenz:** CRAFT AI Transformation Framework v1.0 | `framework/ai-transformation-framework-craft.md`
