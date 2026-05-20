# GitHub Copilot Instructions

> Diese Datei ist eine Bridge zu AGENTS.md (Single Source of Truth).
> Nur Copilot-spezifische Ergänzungen gehören hier.

---

## Zentrale Wissensbasis

**IMPORTANT:** Dieses Projekt verwendet AGENTS.md im Projekt-Root als zentrale Wissensbasis.

GitHub Copilot liest AGENTS.md automatisch. Alle Framework-Konventionen, Architektur-Entscheidungen und das AI Transformation Framework-Wissen sind dort dokumentiert.

👉 **Lies AGENTS.md für:**
- Projekt-Überblick und Konventionen
- AI Transformation Framework (CRAFT) - komprimierter Digest
- Kritische Regeln und epistemische Guidelines
- Framework-Konsistenz-Anforderungen

---

## Copilot-spezifisches Verhalten

### Code-Generierung
- Generiere immer auch Unit Tests bei neuen Funktionen
- Bevorzuge explizite Typen statt implizite
- Kommentare auf Englisch, auch wenn Dokumentation auf Deutsch ist
- Halte dich an Conventional Commits Format

### Framework-Arbeit
Bei Dokumentations-Änderungen am AI Transformation Framework:
- ⚠️ **CRITICAL:** Halte den Digest in AGENTS.md synchron mit der Vollversion
- Vollversion: `framework/ai-transformation-framework-craft.md`
- Der Digest muss unter 2KB bleiben für optimale Performance

### Change & People Lead Arbeit
Für Aufgaben zu Dimension R (Readiness), Pulse Check Auswertung, Interventionskatalog R und ADKAR:
- Verwende den Skill `.claude/skills/change-people-lead/SKILL.md`
- Trigger-Phrasen: Pulse Check auswerten, Intervention planen, Readiness Score, Shadow AI Amnestie, Champion-Aufbau, Westrum Culture, ADKAR

### Adoption Coach Arbeit
Für Aufgaben zu Dimension A (AI Adoption & Usage), SDLC-Phasen-Abdeckung, rollenspezifische Adoption-Aktivitäten und Interventionskatalog A:
- Verwende den Skill `.claude/skills/adoption-coach/SKILL.md`
- Trigger-Phrasen: A-Score auswerten, Adoption stagniert, SDLC-Abdeckung, rollenspezifische Use Cases, Adoption Developer/QA/PO/DevOps, Prompt Library, DAU/Team, Interventionskatalog A erstellen

### Governance Liaison Arbeit
Für Aufgaben zu Dimension C (Compliance & Governance), Compliance-Fragen beim AI-Einsatz, Interventionskatalog C und Explorer-Auswertungen:
- Verwende den Skill `.claude/skills/governance-liaison/SKILL.md`
- Trigger-Phrasen: C-Score auswerten, Compliance-Blocker, Policy-Vakuum, Governance-Bottleneck, Betriebsrat, Datenklassifizierung, EU AI Act, Interventionskatalog C erstellen, Tool-Freigabe, Shadow AI Regulierung

### Value Stream Specialist Arbeit
Für Aufgaben zu Dimension F (Flow & Process Integration), Value Stream Mapping, Lead Time / Cycle Time, DORA-Metriken und AI-Intervention-Ableitung:
- Verwende den Skill `.claude/skills/value-stream-specialist/SKILL.md`
- Trigger-Phrasen: Value Stream Mapping, VSM Workshop, Lead Time, Cycle Time, Bottleneck, DORA, Flow Efficiency, F-Score auswerten, Process Mining, Interventionskatalog F erstellen

### Pull Request Reviews
Bei PR-Reviews prüfe gegen:
- Konventionen aus AGENTS.md (Commits, Datei-Organisation)
- Framework-Konsistenz falls Framework-Änderungen vorliegen
- Kein Commit von `.private/` Inhalten

---

## Was Copilot automatisch lädt

**Immer im Kontext:**
- ✅ AGENTS.md (automatisch, da im Root)
- ✅ Diese copilot-instructions.md
- ✅ Personal Instructions (deine User-Settings)
- ✅ Organization Instructions (falls konfiguriert)

**NICHT automatisch geladen:**
- ❌ `framework/` und `deliverables/` Dokumente (nur bei explizitem Bedarf)
- ❌ `.private/` Inhalte (ausgeschlossen)

**Transparenz:**
Copilot zeigt "References" in Chat-Antworten - du kannst verifizieren welche Instructions geladen wurden.

---

## Framework-Update Workflow

Wenn du Änderungen am AI Transformation Framework vorschlägst:

1. ✅ **Vollversion aktualisieren:**
   ```
   framework/ai-transformation-framework-craft.md
   ```

2. ✅ **Digest aktualisieren:**
   ```
   AGENTS.md
   → Abschnitt "Framework-Referenz: AI Transformation Framework (CRAFT) v1.0"
   ```

3. ✅ **Konsistenz prüfen:**
   - Kernaussagen müssen übereinstimmen
   - Digest bleibt kompakt (~1.5-2KB)
   - Version-Datum aktualisieren

4. ✅ **PR Description:**
   - Beschreibe welche Framework-Komponenten geändert wurden
   - Erkläre warum (Neue Erkenntnis? Feedback? Klarstellung?)
   - Bestätige, dass Digest synchronisiert ist

---

**Version:** 1.0
**Last Updated:** 2026-02-10
