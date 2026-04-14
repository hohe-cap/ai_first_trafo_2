# Multi-Repo Architektur: CRAFT Framework Ökosystem

**Status:** Konzept / In Planung
**Erstellt:** 2026-03-31
**Nächste Aktion:** Konkrete Umsetzungsplanung — welche Teile dieses Repos gehen wohin?

---

## Ausgangslage

Dieses Repo (`ai_first_trafo_2`) wächst aus seinen ursprünglichen Grenzen heraus. Was als Framework-Dokumentationsprojekt begann, umfasst inzwischen drei konzeptuell unterschiedliche Bereiche:

1. **Das Framework selbst** — CRAFT, Methodiken, Question Banks, Deliverables (→ hier bleiben)
2. **AI Training** — allgemeines AI-Training + Spezialfall AI Transformation Manager Ausbildung (→ eigenes Repo)
3. **Konkrete Transformationsprojekte** — Umsetzung bei Kunden/Piloten (→ eigenes Repo, ggf. pro Kunde)

Der Anspruch: Dieses Repo bleibt auf das Framework beschränkt. Die anderen Repos konsumieren es, ohne es zu verwässern.

---

## Das Ökosystem

```
┌─────────────────────────────────────────────────────────────────┐
│  ai_first_trafo_2  (dieses Repo)                                │
│  "Source of Truth"                                              │
│                                                                 │
│  framework/          — Vollversion CRAFT Framework              │
│  deliverables/       — Question Banks, Methodiken, Kataloge     │
│  AGENTS.md           — Komprimierter Digest (für alle AI-Agents)│
│                                                                 │
│  → Aktiv entwickelt, versioniert mit Git Tags (v1.x)           │
│  → Änderungen propagieren zu den abhängigen Repos              │
└────────────────────────────┬────────────────────────────────────┘
                             │ publiziert Versionen
                             │ triggert Sync-Signal
                ┌────────────┴────────────┐
                ↓                         ↓
┌───────────────────────┐   ┌─────────────────────────────────────┐
│  craft-training       │   │  craft-transformation-[kunde]       │
│                       │   │                                     │
│  - AI Grundlagen      │   │  - Projektplan, PDCA-Zyklen         │
│  - CRAFT Framework    │   │  - CRAFT Explorer Durchführung      │
│    erklären           │   │  - Pulse Check Ergebnisse           │
│  - AI Trafo Manager   │   │  - Interventionen & Retroos         │
│    Ausbildung         │   │  - Erkenntnisse → zurück ins        │
│                       │   │    Framework                        │
│  Zugriff: Trainer     │   │                                     │
│  KEIN Copilot-Problem │   │  Zugriff: Kollegen (Konsumenten)    │
└───────────────────────┘   │  KEIN GitHub Copilot!              │
                            │  Sensible Daten → Anonymisierer     │
                            └─────────────────────────────────────┘
```

---

## Kernanforderungen

### Framework-Repo (dieses hier)
- Bleibt inhaltlich fokussiert auf CRAFT — keine Kundendaten, kein Trainingscontent
- Bekommt **Git Tags** bei bedeutenden Änderungen (`v1.1`, `v1.2`, ...)
- Jede Änderung wird klassifiziert:
  - `breaking` — muss sofort in abhängige Repos
  - `important` — nächste Iteration der abhängigen Repos
  - `minor` — optional, nach Ermessen

### Training-Repo
- Erklärt das Framework, ergänzt es aber **nicht** inhaltlich
- Darf nicht veralten — Framework-Änderungen mit `breaking` oder `important` müssen eingepflegt werden
- Perspektivisch: andere Trainer haben Zugriff, entwickeln aber nicht das Framework weiter

### Umsetzungs-Repos
- **Kein GitHub Copilot** — sensible Kundendaten dürfen nicht in Cloud-LLMs wandern
- Lösung: Anonymisierer (Microsoft Presidio oder ähnlich) als vorgelagerter Service
- Konsumenten (Kollegen) greifen auf Framework-Wissen zu, entwickeln es nicht weiter
- Erkenntnisse aus der Praxis fließen strukturiert zurück ins Framework (→ Feedback-Loop)

---

## Sync-Mechanismus: "Framework as Versioned Reference"

**Bewusst human-in-the-loop** — kein automatisches Überschreiben von Training- oder Kundendokumenten.

### Ablauf bei Framework-Änderung

```
1. Änderung im Framework-Repo committen
2. Bei bedeutender Änderung: Git Tag setzen (v1.x)
3. GitHub Action: öffnet automatisch ein Issue in Training- und Umsetzungs-Repos
   → "Framework v1.x veröffentlicht — Sync prüfen [breaking/important/minor]"
4. Zuständige Person entscheidet, was propagiert wird
5. Nach Sync: framework-ref.md im abhängigen Repo aktualisieren
```

### `framework-ref.md` in jedem abhängigen Repo

Eine einzige Datei, die den Sync-Stand dokumentiert:

```markdown
# Framework Reference

Framework Version: v1.1
Geprüft am: 2026-04-15
Geprüft von: Jan

Offene Sync-Aufgaben:
- [ ] Neue Challenge Map in Training-Modul 3 einarbeiten (important)
```

---

## Offene Entscheidungen (nächste Session)

1. **Was bleibt hier, was geht wohin?**
   Konkreter Review: Welche Ordner/Dateien dieses Repos gehören logisch ins Training- oder Umsetzungs-Repo?

2. **Repo-Benennung und -Struktur der neuen Repos**
   Vorschläge: `craft-training`, `craft-transformation-[kurzname]`

3. **GitHub Action Setup**
   Welche Trigger, welche Repos werden benachrichtigt, wer ist Assignee der Issues?

4. **Anonymisierer für Kundenprojekte**
   Microsoft Presidio als Basis — ist ein eigenständiges Projekt, nicht in die Umsetzungs-Repos einbetten. Separaten Proof-of-Concept planen.

5. **Copilot-Alternative für Umsetzungs-Repos**
   Continue.dev + lokales Modell (Ollama) oder Azure OpenAI im eigenen Tenant?

---

## Gesprächskontext (warum diese Entscheidungen so getroffen wurden)

- Der Feedback-Loop Praxis → Framework ist zentral: Erkenntnisse aus Umsetzungsprojekten müssen zurückfließen
- Training- und Umsetzungsprojekte haben bewusst **mehr Konstanz** als das Framework — häufige kleine Framework-Änderungen sollen sie nicht destabilisieren
- Aber: `breaking`-Änderungen dürfen nie unbemerkt bleiben (falsches Lehren, falsche Umsetzung wäre schlimmer als kurze Verzögerung)
- Sync ist **menschlich gesteuert**, weil inhaltliche Übertragung Interpretation erfordert — kein automatischer Copy-Paste

---

*Eat your own dogfood: Das ist die CRAFT Governance-Dimension (C) für das eigene Framework-Ökosystem.*
