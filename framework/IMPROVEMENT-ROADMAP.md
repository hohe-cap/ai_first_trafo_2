# Framework Improvement Roadmap

**Ziel:** Das AI Transformation Framework (CRAFT) auf ein Qualitätsniveau bringen, das als professionelle Source of Truth für alle abgeleiteten Artefakte (Question Banks, App, Training, Beratung) dient.

**Prinzip:** Substanz erhalten, Struktur schärfen. Keine inhaltlichen Kürzungen ohne Diskussion.

---

## Phase 1: Quick Fixes (faktische Korrektheit)

> Voraussetzung für alles Weitere. Ohne diese Fixes hat das Dokument Glaubwürdigkeitslücken.

### 1.1 Versionierung & Datum aktualisieren
- [ ] Version-Datum: "Februar 2026" → aktuelles Datum
- [ ] CRAFT Explorer: "v2.0 fertig" → "v2.1 fertig" (Kap. 9)
- [ ] Beschreibung der CRAFT Explorer App aktualisieren (Status, Features)

### 1.2 App-Technologie korrigieren
- [ ] Kap. 12.2: "Web-App (React)" → "Web-App (Vue 3 + Vite + TypeScript)" oder als entschiedene Frage markieren
- [ ] Prüfen ob weitere "offene Entscheidungen" in Kap. 12 inzwischen entschieden sind

### 1.3 Kapitel-Nummerierung fixen
- [ ] Kap. 5: Fehlende 5.2 und 5.3 einführen (Schicht 2 → 5.2, Schicht 3 → 5.3, Wirkmodell bleibt 5.4)

---

## Phase 2: Strukturelle Klarheit

> Die inhaltliche Substanz ist da, aber die Anordnung erschwert das Verständnis.

### 2.1 Kapitel 3 entflechten
**Problem:** Kap. 3 mischt drei konzeptionell unterschiedliche Dinge:
- (a) Die 5 CRAFT-Dimensionen als Modell
- (b) Den Explorations-Prozess (CRAFT Explorer, Drei-Ebenen-Architektur, Kontext-Profile)
- (c) Die Detail-Beschreibungen der Dimensionen (3.1–3.5)

**Zu diskutieren:**
- Option A: Kap. 3 = Dimensionen + Dimensionsbeschreibungen, neues Kap. 3b = CRAFT Explorer & Exploration
- Option B: Kap. 3 = Dimensionen (kompakt), Kap. 4 = CRAFT Explorer, Kap. 5 = Iterationsmodell (bisheriges Kap. 4 wird zu 5, etc.)
- Option C: Kap. 3 bleibt, aber mit deutlicheren Unterüberschriften und einer kurzen Leseanleitung am Anfang

**Trade-off:** Option B ist die sauberste Trennung, erfordert aber Umnummerierung aller Kapitel. Option A ist der kleinste Eingriff.

### 2.2 "Discover & Navigate" klären oder streichen
**Problem:** Der Begriff wird in Zeile 229 eingeführt, danach nie wieder verwendet. Die Beziehung zum Iterationsmodell (Kap. 4) ist unklar.

**Zu diskutieren:**
- Option A: Als übergeordnetes Konzept einführen (D&N = Explorations-Logik, die in den Iterationszyklen operationalisiert wird)
- Option B: Streichen — der PDCA-Verweis und das Iterationsmodell leisten das gleiche ohne neuen Begriff

### 2.3 PDCA-Mapping explizit machen oder streichen
**Problem:** PDCA wird erwähnt (Z. 231) aber nie konkret auf die 4-Wochen-Zyklen gemappt.

**Zu diskutieren:**
- Kurzes Mapping ergänzen: Woche 1 = Plan, Woche 2-3 = Do, Woche 4 = Check + Adjust
- Oder PDCA-Referenz entfernen, wenn sie keinen Mehrwert bringt

---

## Phase 3: Redundanzen reduzieren ✅ Erledigt (2026-04-22)

> Ziel: Jedes Konzept wird 1× definiert und danach referenziert. Wiederholung nur wenn sie dem Leser an dieser Stelle wirklich hilft.

### 3.1 Duale Zielsetzung konsolidieren ✅
**Ist:** 3× nahezu gleich erklärt (Kap. 2, Kap. 4, Kap. 5 Schicht 3)
**Umgesetzt:**
- Kap. 4 (nach 4.4): 8-Zeilen-Block auf 2 Sätze gekürzt, Verweis "(→ vgl. Kap. 2)" ergänzt
- Kap. 5.3 Zusammenspiel: "(→ duale Zielsetzung, Kap. 2)" ergänzt, 1 Satz gestrichen

### 3.2 Failure-Rate-Statistiken entduplizieren ✅
**Ist:** "95% Failure Rate" / "80-95% scheitern" erscheint in Kap. 1.3, 2, 8.2, 11.1
**Umgesetzt:**
- Kap. 1.4: Zahl (80–95%) explizit ergänzt mit Verweis "(→ vollständige Datenlage: Kap. 11.1)"
- Kap. 8.1: Explizite Quellennennung (MIT NANDA, S&P, RAND) durch "(→ Datenlage vollständig: Kap. 11.1)" ersetzt
- Kap. 11.1: Vollständige Analyse bleibt als primäre Auswertungsstelle

### 3.3 CRAFT-Dimensionen-Auflistung entduplizieren ✅
**Ist:** Dimensionen werden in Kap. 3 (Tabelle) und Kap. 5.2 Schicht 2 (Liste) aufgelistet
**Umgesetzt:** Einleitungssatz vor Dimensionsliste in Kap. 5.2 ergänzt: "(→ vollständige Beschreibung: Kap. 3)"

### 3.4 Pulse-Check-Beschreibung konsolidieren ✅
**Ist:** 3× beschrieben (Kap. 4.2 Drei-Ebenen-Tabelle, Kap. 4.4 Pulse-Check-Inhalte, Kap. 5.2)
**Umgesetzt:** Kap. 5.2-Bullets: Format-Beschreibung durch Verweise "(→ Kap. 4.4)" und "(→ Kap. 4.2)" ersetzt; nur Scoring-Formeln verbleiben

---

## Phase 4: Fehlende Elemente ergänzen ✅ Erledigt (2026-04-22)

> Neue Inhalte, die das Framework runder machen.

### 4.1 Glossar ✅
**Umgesetzt:** Neuer Anhang "Anhang: Glossar" am Ende des Dokuments (vor dem Copyright-Block). 20 Begriffe alphabetisch mit 1-Zeiler-Definitionen: ADKAR, Air-gapped, BR, CFR, CoE, CoP, CRAFT, DAU, DORA, DPA, EBIT, EU AI Act, IDE, LLM, MCP, PDCA, ROI, SDLC, Shadow AI, T&M, VSM.

### 4.2 Dimensionsbezogene Reifestufen-Tabelle ✅
**Umgesetzt:** Neue Tabelle "Dimensionsspezifische Reifestufen" (5 Dimensionen × 5 Stufen) nach der generischen CRAFT-Reifestufen-Tabelle in Kap. 5.2 eingefügt. Je 1 konkreter Satz pro Zelle — beschreibt, was die Stufe in der Praxis bedeutet (nicht abstrakt).

### 4.3 Kern-Differenzierung nach vorne ziehen ✅
**Umgesetzt:** Das bestehende "Differenzierungsmerkmal"-Callout in Kap. 2 wurde zu "Positionierung" ausgebaut und enthält nun die drei kritischen Ebenen explizit: (1) Maturity-Modelle bleiben abstrakt, (2) Change-Frameworks sind technologie-agnostisch, (3) VSM/DORA sagen nicht wie man Bottlenecks mit AI löst. Kap. 11 bleibt als vollständige Analyse, mit Verweis "(→ Kap. 11)".

---

## Phase 5: Proportionen & Lesbarkeit

> Feinschliff, der das Lesen angenehmer macht.

### 5.1 Commercial Flow Alignment straffen
**Problem:** ~40 Zeilen inkl. Vertragsmatrix, 4 Interventionspfade, Katalogerweiterung. Inhaltlich wertvoll, aber disproportional zur restlichen Flow-Dimension.

**Zu diskutieren:**
- Option A: Straffen auf ~20 Zeilen (Kern-Argument + Matrix, Details in separates Deliverable auslagern)
- Option B: Beibehalten, aber Technical Enablement (Kap. 3.5) auf vergleichbare Tiefe bringen
- Option C: Als eigenen Exkurs/Kasten markieren ("Deep Dive: Das T&M-Paradoxon")

### 5.2 Kap. 8 Tonalität prüfen
**Problem:** Kap. 8 wechselt von Framework-Dokumentation zu Service-Pitch ("Marketing-Aspekt", "Value Proposition"). Das ist für einen externen Beratungskontext richtig, aber im Framework-Dokument ungewöhnlich.

**Zu diskutieren:**
- Option A: Kap. 8 bleibt, "Marketing-Aspekt"-Kommentare werden sachlicher formuliert
- Option B: Kap. 8 wird in ein separates `deliverables/craft-service-offerings.md` ausgelagert (dort existiert es teilweise schon) und im Framework nur referenziert
- Option C: Kap. 8 bleibt, aber mit explizitem Framing: "Dieses Kapitel beschreibt, wie das Framework in der Beratungspraxis angewendet wird"

### 5.3 Kap. 11 straffen
**Problem:** ~80 Zeilen, teilweise redundant mit Kap. 1 und 2. Besonders 11.1 wiederholt die Problemdarstellung aus Kap. 1.

**Soll:** 11.1 kürzen (2-3 Sätze Verweis auf Kap. 1), 11.2 (Was wir übernehmen) und 11.3 (Warum keines reicht) sind der Kern und bleiben. 11.4 und 11.5 können leicht gestrafft werden.

---

## Phase 6: Konsistenz-Check mit Ökosystem

> Sicherstellen, dass Framework, AGENTS.md, Question Banks und App konsistent sind.

### 6.1 AGENTS.md Digest aktualisieren
- [ ] Nach allen Framework-Änderungen den komprimierten Digest in AGENTS.md synchronisieren

### 6.2 Cross-Check mit Question Banks
- [ ] Prüfen: Sind die Dimensionsbeschreibungen im Framework konsistent mit den Deep-Dive-Fragen in den YAMLs?
- [ ] Prüfen: Stimmt die Pulse-Check-Beschreibung mit der tatsächlichen pulse-check.yaml überein?

### 6.3 Cross-Check mit App
- [ ] Prüfen: Beschreibt Kap. 9 die App korrekt (Features, Status)?

---

## Arbeitsweise

**Pro Phase:**
1. Kurz besprechen — ich zeige konkrete Änderungsvorschläge
2. Du gibst Feedback / Anpassungen
3. Ich setze um
4. Nächste Phase

**Geschätzter Gesamtaufwand:**
- Phase 1: ~15 Min (mechanisch)
- Phase 2: ~30 Min (braucht Diskussion)
- Phase 3: ~30 Min (sorgfältiges Kürzen)
- Phase 4: ~45 Min (neue Inhalte)
- Phase 5: ~30 Min (Feinschliff)
- Phase 6: ~20 Min (Konsistenz-Check)

---

*Erstellt: 2026-04-22 | Basierend auf Analyse des Framework-Dokuments v1.0 DRAFT*
