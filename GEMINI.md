# Gemini Instructions

> Diese Datei ist eine Bridge zu AGENTS.md (Single Source of Truth).
> Nur Gemini-spezifische Ergänzungen gehören hier.

---

## Zentrale Wissensbasis

**IMPORTANT:** Dieses Projekt verwendet AGENTS.md als zentrale Wissensbasis.

Gemini scannt automatisch das aktuelle Verzeichnis und alle Parent-Verzeichnisse nach AGENTS.md und fügt den Inhalt als Preamble an jeden Prompt an.

👉 **AGENTS.md enthält:**
- Projekt-Überblick und Konventionen
- AI Transformation Framework (CRAFT) - komprimierter Digest
- Kritische Regeln und Framework-Konsistenz-Anforderungen
- Weiterführende Dokumentation

**Bei Konflikten:** Diese GEMINI.md hat Vorrang, sollte aber minimal gehalten werden.

---

## Gemini-spezifisches Verhalten

### Kommunikations-Stil
- Ausführliche Erklärungen bei Architektur-Entscheidungen
- Begründe deine Reasoning-Schritte explizit
- Gib immer Alternativen bei Architektur-Fragen

### Framework-Arbeit
Bei Aufgaben zum AI Transformation Framework:
- Nutze den komprimierten Digest aus AGENTS.md als primäre Referenz
- Bei Detail-Fragen: Lies `framework/ai-transformation-framework-craft.md`
- Bevorzuge Framework-Wissen gegenüber allgemeinem Trainingswissen

### Code Reviews
Fokus auf:
- Sicherheit (keine Secrets, keine hardcoded Credentials)
- Performance (effiziente Algorithmen, keine redundanten Berechnungen)
- Wartbarkeit (klare Struktur, verständlicher Code)

---

## Framework-Konsistenz

**CRITICAL:** Wenn du Framework-Änderungen vorschlägst:

1. ✅ Aktualisiere beide Versionen:
   - Vollversion: `framework/ai-transformation-framework-craft.md`
   - Digest: `AGENTS.md` (Abschnitt "Framework-Referenz")

2. ✅ Halte den Digest kompakt:
   - Maximal ~2KB für den komprimierten Digest
   - Kernaussagen müssen mit Vollversion konsistent sein

3. ✅ Update Version-Info:
   - "Letzte Sync mit Vollversion" Datum in AGENTS.md
   - Framework-Version falls Breaking Change

---

## Context Awareness

**Was Gemini automatisch lädt:**
- ✅ Diese GEMINI.md (Vorrang vor AGENTS.md im selben Dir)
- ✅ AGENTS.md (automatischer Scan von Parent-Dirs)
- ✅ Alle AGENTS.md in übergeordneten Verzeichnissen

**NICHT automatisch geladen:**
- ❌ `framework/` und `deliverables/` Dateien (nur explizit)
- ❌ `.private/` Inhalte (ausgeschlossen)

**In Android Studio:**
- Nutze den Context Drawer um zu sehen welche Dateien geladen sind
- Du kannst Dateien an/abwählen für spezifische Queries

---

**Version:** 1.0
**Last Updated:** 2026-02-10
