# Agent: Create a New Re-usable AI Skill

**Purpose:** Guide any contributor — human or AI agent — through designing, writing, and registering a new skill in this repository so that it passes review and is immediately usable by Claude Code, GitHub Copilot, and OpenCode agents.

**Re-usable by:** Run this agent whenever you want to add a skill. Works in GitHub Copilot agent mode, as a Claude Code sub-agent, and in OpenCode.

---

## 0 — Understand the skill model before starting

### Two skill types exist. Pick one.

| Type | When to use | Has executable script? |
|------|-------------|------------------------|
| **Script skill** | The agent needs to run a Python (or shell) program to do the work | Yes — `entry` + `requirements.txt` required |
| **Guidance skill** | The agent needs step-by-step methodology instructions; no code runs | No — `entry` and `dependencies` omitted |

Examples in this repo:
- Script skill: `pdf-to-markdown`, `xpath-validator`, `excel-workbook-inspector`
- Guidance skill: `xpath-constructor`

A skill that is 80% methodology and 20% script usually works better as two separate skills. Keep scope narrow.

---

## 1 — Collect the skill definition

Ask (or infer from context) the following before writing anything:

1. **What is the one-line purpose of this skill?** (becomes `description:` in frontmatter)
2. **What type is it?** Script or guidance?
3. **What are the exact trigger conditions?** (Use When / Do Not Use When)
4. **Does an existing skill overlap?** Check `catalog.json` — if yes, either extend that skill or clearly differentiate.
5. **What are the inputs?** Name, required/optional, default, short description for each.
6. **What does the output look like?** File, stdout, report?
7. **What runtime dependencies are needed?** (Python packages, system tools)

> Do not proceed to Step 2 until all answers above are available. Do not guess.

---

## 2 — Choose the skill ID

Rules for the skill ID (folder name):

- Lowercase kebab-case: `my-new-skill`
- Describes the *action*, not the technology: `extract-pdf-text`, not `pdfminer-wrapper`
- Does not duplicate an existing ID in `catalog.json`
- Maximum 40 characters

---

## 3 — Create the skill folder and files

Create `<skill-id>/` at the **repository root**. Required files depend on skill type:

### Script skill

```
<skill-id>/
├── skill.md          ← required: metadata + usage contract
├── <entry>.py        ← required: single executable entry point
└── requirements.txt  ← required: one package per line, pinned or minimal
```

### Guidance skill

```
<skill-id>/
└── skill.md          ← required: metadata + methodology
```

---

## 4 — Write skill.md

Use the canonical template below. Do not invent new frontmatter fields.

### 4a — Script skill template

````markdown
---
name: <skill-id>
description: <One concise sentence. What it does, on what input, using what key technology.>
metadata:
  version: 1.0.0
  tags: [<tag1>, <tag2>, <tag3>]        # 3–6 tags; use existing tags where possible
  entry: <script-filename>.py
  dependencies: requirements.txt
  inputs:
    - name: <param-name>
      description: <What this value controls>
      required: true|false
      default: <value-or-omit-if-required>
    # repeat for each input
---

# <Human-Readable Skill Title>

<One paragraph. What the skill does, what it produces, any key technology or approach worth naming.>

## Use When
- <Concrete trigger condition 1 — specific enough that an agent can match it>
- <Concrete trigger condition 2>

## Do Not Use When
- <Anti-case 1 — refer to the correct alternative skill by ID when one exists>
  Use `<other-skill-id>` instead.
- <Anti-case 2>

## Setup

```bash
pip install -r {SKILLS_ROOT}/<skill-id>/requirements.txt
```

<Add any one-time environment setup here (env vars, credentials, first-run model download, etc.)>

## Command

```bash
python {SKILLS_ROOT}/<skill-id>/<script-filename>.py <required-arg>
```

With all options:

```bash
python {SKILLS_ROOT}/<skill-id>/<script-filename>.py <required-arg> [--option1 <value>] [--option2]
```

## Inputs

| Flag / Argument | Required | Default | Description |
|-----------------|----------|---------|-------------|
| `<param>` | yes | — | <description> |
| `--<option>` | no | `<default>` | <description> |

## Output

<Describe what is produced: file path pattern, stdout format, exit codes.>
Exit code: `0` on success, `1` on any error.

## Notes

- <Any non-obvious behaviour, edge cases, or known limitations.>
````

### 4b — Guidance skill template

````markdown
---
name: <skill-id>
description: <One concise sentence describing the methodology this skill provides.>
metadata:
  version: 1.0.0
  tags: [<tag1>, <tag2>, <tag3>]
---

# <Human-Readable Skill Title>

<One paragraph. What workflow this skill guides, what problem it solves, who benefits.>

## Use When
- <Concrete trigger condition 1>
- <Concrete trigger condition 2>

## Do Not Use When
- <Anti-case — refer to complementary skills by ID when relevant>

---

## Step 0 — <First prerequisite or context-gathering step>

<Detail what must be in hand before the methodology can begin.>

> **If X is not available, stop and request it. Do not proceed without it.**

## Step 1 — <First action step>

<Detailed instructions.>

## Step N — Self-Check Before Finalising

- [ ] <Criterion 1>
- [ ] <Criterion 2>
- [ ] <Criterion 3>

---

## When the Skill Cannot Proceed

Stop and report to the user when:
- <Blocking condition 1>
- <Blocking condition 2>
````

### 4c — Rules for both templates

| Rule | Detail |
|------|--------|
| **`description:` is mandatory** | One sentence. Must be meaningful without reading the body. Used by agents for skill matching against catalog.json. |
| **Use `<placeholder>` in command examples** | Never use `{{placeholder}}` or `$PLACEHOLDER` — be consistent with the rest of the repo. |
| **Use `{SKILLS_ROOT}` as the path prefix** | All commands must use `{SKILLS_ROOT}/<skill-id>/<entry>.py`. When running from the skill repository: `{SKILLS_ROOT}=.`. When consuming from the catalog in a target project: `{SKILLS_ROOT}=~/.capgemini/agent-skills-catalog`. This single token makes every skill command path-portable. Never hardcode `.github/…` or any other absolute prefix. **Do not add a `> Replace {SKILLS_ROOT}...` hint inside the skill.md** — the resolution is defined once in the project's connector instruction. |
| **Inputs table has a Default column** | Include it even if all inputs are required (use `—` for no default). |
| **`Use When` conditions must be matchable** | Each item should name a concrete situation, file type, or user intent. Vague conditions ("when you need to process something") are rejected in review. |
| **`Do Not Use When` must name alternatives** | If another skill handles the rejected case, reference it by skill ID. |
| **Exit codes documented** | Script skills must state exit codes. `0` success, `1` error is the convention. |

---

## 5 — Write the entry script (script skills only)

Requirements for the entry script:

- **Single file.** No sub-packages inside the skill folder.
- **CLI via `argparse`** — no interactive prompts; agents cannot respond to them.
- **All inputs as CLI flags or positional arguments** — must match the `inputs:` block in `skill.md` exactly.
- **Deterministic output path** — derive output path from input if no output arg provided (e.g. `input.pdf` → `input.md`).
- **Exit `sys.exit(0)` on success, `sys.exit(1)` on any unrecoverable error** — emit a plain-text error message to stderr before exiting 1.
- **No hard-coded paths** — all paths come from CLI arguments.
- **Idempotent** — re-running with the same inputs produces the same result; no duplicate appends.

---

## 6 — Write requirements.txt (script skills only)

- One package per line.
- Pin to a minimum version (`package>=1.2.0`) unless a tighter range is genuinely needed.
- Include only packages imported by the entry script — no dev/test dependencies.
- Keep it short. Fewer dependencies = more portable.

---

## 7 — Add the catalog.json entry

Open `catalog.json` and append to the `"skills"` array. Use this schema exactly:

```json
{
  "id": "<skill-id>",
  "name": "<Human-Readable Name>",
  "description": "<Same one-sentence description as skill.md frontmatter>",
  "tags": ["<tag1>", "<tag2>", "<tag3>"],
  "path": "<skill-id>",
  "entry": "<skill-id>/<script>.py",
  "docs": "<skill-id>/skill.md",
  "manifest": "<skill-id>/skill.md",
  "version": "1.0.0",
  "updated": "<YYYY-MM-DD>",
  "runtime": "python",
  "dependencies": "<skill-id>/requirements.txt"
}
```

For a **guidance skill**, omit `entry`, `runtime`, and `dependencies`:

```json
{
  "id": "<skill-id>",
  "name": "<Human-Readable Name>",
  "description": "<Same one-sentence description as skill.md frontmatter>",
  "tags": ["<tag1>", "<tag2>", "<tag3>"],
  "path": "<skill-id>",
  "docs": "<skill-id>/skill.md",
  "manifest": "<skill-id>/skill.md",
  "version": "1.0.0",
  "updated": "<YYYY-MM-DD>"
}
```

Rules:
- `id` must match the folder name exactly.
- `description` must be identical to the `description:` field in `skill.md`.
- `tags` must match the `tags:` list in `skill.md`.
- `updated` is today's date in ISO 8601 format.

---

## 8 — Update README.md

Open `README.md` and add a row to the **Skill Catalog** table. Match the existing column order exactly:

| Column | Value |
|--------|-------|
| `ID` | Plain skill ID string |
| `Name` | `[Human-Readable Name](<skill-id>/skill.md)` |
| `Description` | Same one-sentence description as `skill.md` and `catalog.json` |
| `Tags` | Comma-separated tag list matching `catalog.json` |

Insert the new row in **alphabetical order by ID** to keep the table easy to scan.

Example row:

```markdown
| my-new-skill | [My New Skill](my-new-skill/skill.md) | Does X on Y using Z. | tag1, tag2, tag3 |
```

---

## 9 — Run the quality checklist

Work through every item before opening the pull request. A reviewer will reject the PR if any item is unmet.

### Structural checklist

- [ ] `<skill-id>/skill.md` exists and uses the canonical template above.
- [ ] `skill.md` is NOT wrapped in a ` ```skill ` … ` ``` ` code fence (the frontmatter delimiter).
- [ ] All mandatory frontmatter fields are present: `name`, `description`, `metadata.version`, `metadata.tags`.
- [ ] Script skill: `entry` and `dependencies` are in frontmatter; script file and requirements.txt exist.
- [ ] Guidance skill: no `entry` or `dependencies` in frontmatter; no script file.
- [ ] Catalog entry added to `catalog.json` with all fields consistent with `skill.md`.
- [ ] Row added to the **Skill Catalog** table in `README.md`; description and tags match `catalog.json` exactly; row is in alphabetical order by ID.

### Content checklist

- [ ] `description:` is a single meaningful sentence an agent can use for matching — not a rephrasing of the skill name.
- [ ] `Use When` has at least 2 concrete, matchable conditions.
- [ ] `Do Not Use When` names at least 1 anti-case; references the correct alternative skill by ID where one exists.
- [ ] Command example uses `<placeholder>` syntax and `{SKILLS_ROOT}/<skill-id>/<entry>.py` path format.
- [ ] Inputs table includes `Required` and `Default` columns; all CLI flags are listed.
- [ ] Output section describes file path, format, and exit codes.
- [ ] No placeholder text left in the template (no `<...>` markers remaining).

### Overlap check

- [ ] Searched `catalog.json` for existing skills with overlapping tags or description.
- [ ] If overlap found: this skill's `Use When` and `Do Not Use When` are clearly differentiated; both skills cross-reference each other.
- [ ] Existing skill `Do Not Use When` sections updated if necessary to reference the new skill.

---

## 10 — Open the pull request

Title format: `feat(skill): add <skill-id>`

PR description must include:
1. One-sentence summary of what the skill does.
2. Why this skill is needed (use case or gap it fills).
3. Confirmation that the quality checklist above is complete.
4. If the skill was tested: paste the command run and output (or screenshot).

A reviewer (see CODEOWNERS) will validate the skill contract before merge.

---

## Quick reference: existing tags

Use existing tags where applicable to improve agent matching accuracy.

| Domain | Tags in use |
|--------|------------|
| Document conversion | `document`, `conversion`, `markdown`, `docx`, `pdf` |
| Excel | `excel`, `xlsx`, `xlsm`, `vba`, `extraction`, `protection`, `inspection`, `diagnostics` |
| Web / test automation | `xpath`, `web`, `test-automation`, `locators`, `html`, `validation`, `guidance` |
| Atlassian | `confluence`, `wiki`, `atlassian` |
| Tooling | `python`, `marker`, `export` |

Introduce a new tag only when none of the above applies and the new tag is reusable across multiple future skills.
