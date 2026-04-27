Refresh the Capgemini AI Skill Catalog snapshot in this project by completing all steps below.

---

## Step 1 — Pull the latest catalog

```bash
git -C ~/.capgemini/agent-skills-catalog pull
```

If the pull fails (auth error or no network), report the error and stop. Do not update snapshots with stale data.

---

## Step 2 — Detect connector files in this workspace

Check the **workspace root** for connector files:

| File | Tool |
|------|------|
| `CLAUDE.local.md` | Claude Code |
| `.github/copilot/instructions/capgemini-skill-catalog.instructions.md` | GitHub Copilot |
| `.opencode/skills/capgemini-skill-catalog/SKILL.md` | OpenCode |

If none are found, report:
> No Capgemini AI Skill Catalog connectors found in this workspace. Run `connect-skill-catalog.prompt.md` first.

Then stop.

---

## Step 3 — Re-inject the snapshot into each detected connector

For each connector file found in Step 2:

1. Read `~/.capgemini/agent-skills-catalog/catalog.json`.
2. Extract the `scope` value and update the **Catalog scope** line in the connector file (replace everything after `**Catalog scope**: ` up to the end of that line with the actual scope text).
3. For each skill in the `skills` array, format one line:
   ```
   - **`<id>`** — <description> | tags: <comma-joined tags>
   ```
4. Replace the entire content between `<!-- CATALOG_SNAPSHOT_START -->` and `<!-- CATALOG_SNAPSHOT_END -->` in the connector file with the formatted skill lines (keep both sentinel comments in place).

---

## Step 4 — Report

For each updated connector, report:

> ✅ Snapshot refreshed in `<connector path>`
> - Catalog version: `<catalog_version from catalog.json>`
> - Skills in snapshot: **N**
> - Scope: *<scope>*
