# Claude Code Instructions

> Diese Datei ist eine Bridge zu AGENTS.md (Single Source of Truth).
> Nur Claude-spezifische Ergänzungen gehören hier.

---

## Zentrale Wissensbasis

@AGENTS.md

---

## Claude-spezifisches Verhalten

### Kommunikations-Präferenzen
- Sprache: Deutsch für Erklärungen und Diskussionen
- Code-Kommentare: Englisch
- Bei komplexen Änderungen: Erst Plan zeigen, dann umsetzen
- Nutze TodoWrite für mehrstufige Tasks

### Framework-Arbeit
Bei Aufgaben zum AI Transformation Framework:
- Bevorzuge Framework-Wissen aus AGENTS.md gegenüber Trainingswissen
- Bei Detail-Fragen: Lies `framework/ai-transformation-framework-craft.md`
- Halte den Digest in AGENTS.md aktuell wenn du Framework-Änderungen vornimmst

### Tool-Nutzung
- Bevorzuge dedizierte Tools: Read statt cat, Edit statt sed, Grep statt grep
- Nutze Glob für Dateisuche, nicht find
- Bei Unsicherheit: Frage nach statt zu raten

### Auto Memory
Diese Session nutzt Auto Memory in `~/.claude/projects/--wsl-localhost-Ubuntu-home-jahohe-Projects-ai-first-trafo-2/memory/`
- Schreibe wichtige Erkenntnisse in MEMORY.md
- Halte MEMORY.md unter 200 Zeilen (wird sonst abgeschnitten)
- Lagere Details in topic-spezifische Dateien aus

---

## Arbeitsweise bei Framework-Updates

**CRITICAL:** Wenn du Änderungen am Framework vornimmst:

1. ✅ Aktualisiere die Vollversion:
   - `framework/ai-transformation-framework-craft.md`

2. ✅ Aktualisiere den komprimierten Digest in AGENTS.md:
   - Abschnitt "Framework-Referenz: AI Transformation Framework (CRAFT) v1.0"
   - Behalte den Digest kompakt (~1.5-2KB)
   - Stelle sicher, dass Kernaussagen konsistent sind

3. ✅ Update Version-Info:
   - In AGENTS.md: "Letzte Sync mit Vollversion" Datum aktualisieren
   - In Vollversion: Version-Nummer aktualisieren falls Breaking Change

4. ✅ Validierung:
   - Prüfe, dass beide Versionen konsistent sind

---

## Kontext-Optimierung

**Was automatisch geladen wird:**
- Diese CLAUDE.md (immer)
- AGENTS.md via @-Import (immer)
- Nested CLAUDE.md in Unterverzeichnissen (falls vorhanden)
- `.claude/rules/*.md` (falls vorhanden)

**Was NICHT automatisch geladen wird:**
- `framework/` Dokumente (nur bei explizitem Zugriff via Read-Tool)
- `deliverables/` Dokumente (nur bei explizitem Zugriff)
- `research/` Dokumente (nur bei explizitem Zugriff)
- `.private/` (nie - steht in .claudeignore)

**Bei Context-Overflow:**
- Fasse dich kürzer in Erklärungen
- Lade Detail-Dokumente nur bei Bedarf
- Nutze den Digest aus AGENTS.md statt Vollversion wo möglich

---

---

**Version:** 1.0
**Last Updated:** 2026-02-10
