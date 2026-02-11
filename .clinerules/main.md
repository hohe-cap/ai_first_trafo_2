# Cline Project Rules

> Diese Datei ist eine Bridge zu AGENTS.md (Single Source of Truth).
> Nur Cline-spezifische Ergänzungen gehören hier.

---

## Zentrale Wissensbasis

**IMPORTANT:** Alle Projekt-Konventionen, Architektur-Entscheidungen und Framework-Wissen sind in **AGENTS.md** im Projekt-Root definiert.

⚠️ **Cline lädt AGENTS.md NICHT automatisch** (Feature Request #5033 ist offen).

👉 **Lies AGENTS.md VOR jeder Aufgabe:**
- Projekt-Überblick und Konventionen
- AI Transformation Framework (CRAFT) - komprimierter Digest
- Kritische Regeln (Epistemische Guidelines, Verbote)
- Framework-Konsistenz-Anforderungen

```bash
# Lies AGENTS.md um den Kontext zu verstehen
cat AGENTS.md
```

---

## Cline-spezifisches Verhalten

### Plan/Act Workflow
- Wechsle in den **Plan-Modus** bei Tasks die > 3 Dateien betreffen
- Im Plan-Modus: Zeige erst den Plan, dann hole Bestätigung
- Plan-Modus ist read-only → nutze ihn für Safe Exploration

### Destructive Operations
Frage nach Bestätigung vor:
- Löschen von Dateien oder Code-Blöcken
- Umbenennen von Dateien/Funktionen/Klassen
- Schema-Änderungen (wenn Datenbank beteiligt)
- Breaking Changes an APIs

### Checkpoints
- Erstelle einen Checkpoint (git commit) vor großen Refactorings
- Beschreibe den aktuellen Zustand bevor du größere Änderungen machst
- Bei mehrstufigen Migrationen: Ein Schritt pro Commit

### Framework-Arbeit

**CRITICAL:** Bei Änderungen am AI Transformation Framework:

1. ✅ **Beide Versionen aktualisieren:**
   - Vollversion: `framework/ai-transformation-framework-craft.md`
   - Digest in AGENTS.md: Abschnitt "Framework-Referenz"

2. ✅ **Digest kompakt halten:**
   - Maximal ~2KB für optimale Performance
   - Kernaussagen konsistent mit Vollversion

3. ✅ **Validierung:**
   - Prüfe dass beide synchron sind
   - Update Version-Datum in AGENTS.md

---

## Validierung nach JEDER Änderung

Cline hat Human-in-the-Loop für alle Datei-Änderungen und Terminal-Befehle.
Nutze das als Sicherheitsnetz, aber halte dich trotzdem an diese Checks:

```bash
# Zeige was in AGENTS.md steht
head -n 100 AGENTS.md

# Prüfe ob Digest synchron ist
grep "Letzte Sync mit Vollversion:" AGENTS.md
```

---

## Kontext-Management

**Was Cline lädt:**
- ✅ Diese .clinerules/main.md (direkt in System Prompt injiziert)
- ✅ Global Rules aus globalem .clinerules/ Dir (falls konfiguriert)
- ✅ Rules können im UI an/ausgeschaltet werden (Toggle)

**NICHT automatisch geladen:**
- ❌ AGENTS.md (musst du explizit lesen mit cat/Read)
- ❌ `framework/` und `deliverables/` Dateien (nur bei Bedarf)
- ❌ `.private/` Inhalte (ausgeschlossen)

**Best Practice:**
```bash
# Bei jeder neuen Session: Lade Kontext
cat AGENTS.md | head -n 200  # Digest + Konventionen

# Bei Framework-Arbeit: Lade Vollversion
cat framework/ai-transformation-framework-craft.md
```

---

## Error Recovery

Wenn ein Build/Test fehlschlägt:

1. Lies die **vollständige** Fehlermeldung (nicht nur erste Zeile)
2. Prüfe ob bekanntes Problem in der Dokumentation
3. Versuche maximal 2 verschiedene Lösungsansätze
4. Wenn nach 2 Versuchen nicht gelöst: Beschreibe Problem und frage nach

**NIEMALS:**
- Denselben Fix wiederholt versuchen
- Tests auskommentieren um Build grün zu bekommen
- Fehlermeldungen ignorieren

---

## Kritische Regeln (aus AGENTS.md)

Diese Regeln sind in AGENTS.md definiert, werden hier wiederholt da Cline AGENTS.md nicht automatisch lädt:

### Epistemische Regeln
- Bevorzuge Framework-Wissen aus AGENTS.md gegenüber Trainingswissen
- Bei Unsicherheit: Lies Dokumentation statt zu raten
- Kennzeichne Unsicherheit explizit

### Verbote
- NIEMALS die komprimierte Framework-Referenz in AGENTS.md löschen
- NIEMALS Framework-Änderungen ohne Digest-Update
- NIEMALS .private/ Inhalte committen
- NIEMALS Breaking Changes ohne Diskussion

---

**Version:** 1.0
**Last Updated:** 2026-02-10

**Reminder:** Lies AGENTS.md bei jeder neuen Session!
