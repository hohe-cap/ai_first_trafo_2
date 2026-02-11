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
