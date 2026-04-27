---
applyTo: "**"
---

## Capgemini AI Skill Catalog

> [!IMPORTANT]
> **MANDATORY PRE-FLIGHT CHECK — do NOT take any action** (write code, run commands,
> use tools, read files, install packages, or produce output) **until this catalog
> check is complete.** This applies even when the solution seems obvious or trivial.

Before handling ANY user request that involves files, documents, data, code generation,
web automation, or tooling, you MUST complete the following skill-discovery check first.

**After the check, output exactly one of these lines before doing anything else:**
- `[Capgemini Skill Catalog check: skill found → <skill-id>]` — single match; then present the skill choice to the user.
- `[Capgemini Skill Catalog check: N skills found → <id1>, <id2>, ...]` — multiple matches; then present all options to the user.
- `[Capgemini Skill Catalog check: no match — proceeding normally]` — then handle the request.

---

**Catalog scope**: Reusable utility skills for: file and document conversion (PDF, DOCX, Markdown, Confluence storage format), data extraction and inspection (Excel workbooks, VBA modules, Confluence wikis), Confluence export (PDF and Markdown with image download), XPath construction and validation for web test automation.

**Available skills** (snapshot embedded at connect-time — auto-refreshes on next skill match; run `refresh-catalog.prompt.md` to refresh immediately):

<!-- CATALOG_SNAPSHOT_START -->
- **`confluence-pdf-exporter`** — Recursively exports Confluence Server pages to PDF with a hierarchical folder structure mirroring the page tree. Supports PAT authentication, configurable depth, rate limiting, and three child-discovery fallback methods. | tags: confluence, pdf, export, wiki, atlassian, python
- **`confluence-page-to-md`** — Exports a single Confluence Server page to a Markdown file. Downloads Confluence attachment images into an images/ sub-directory. Images that cannot be fetched are replaced with human-readable placeholders. Supports PAT authentication and all common Confluence Server URL formats. | tags: confluence, markdown, export, wiki, atlassian, python, images
- **`pdf-to-markdown`** — Converts PDF files to Markdown using the Marker ML library, with high-quality handling of tables, equations, multi-column layouts, and embedded images. | tags: pdf, markdown, conversion, document, marker, python
- **`convert-docx-to-md`** — Converts a .docx file to Markdown using Mammoth and Markdownify. Inputs: input_path and output_path (repo-relative). | tags: document, conversion, markdown, docx, python
- **`excel-workbook-inspector`** — Read-only inspection of any .xlsx/.xlsm workbook by sheet and row range. Use for diagnostics, not transformation or VBA tasks. | tags: excel, xlsx, xlsm, inspection, diagnostics, python
- **`excel-xlsm-vba-extractor`** — Removes worksheet/workbook protection from .xlsm files and extracts VBA modules or vbaProject.bin. Use only for VBA extraction and protection removal. | tags: excel, xlsm, vba, extraction, protection, python
- **`xpath-constructor`** — Guides an AI agent through crafting robust, maintainable XPath locators for any HTML-based web UI. Covers HTML source acquisition (public URL or manual export), attribute priority, semantic anchoring, common UI patterns, and a pre-commit self-check. | tags: xpath, web, test-automation, locators, html, guidance
- **`xpath-validator`** — Validates XPath expressions against exported HTML snapshots. Supports single-expression and batch modes; generates Markdown and CSV reports with match counts and matched-element summaries. | tags: xpath, validation, web, test-automation, html, python
- **`md-to-pdf`** — Converts Markdown files to styled PDF documents using markdown and xhtml2pdf, with support for tables, code blocks, blockquotes, and custom styling. | tags: markdown, pdf, conversion, document, python
- **`capgemini-pptx-generator`** — Generates a PptxGenJS JavaScript file for a Capgemini-styled presentation from source documents, enabling iterative editing and repeatable PPTX export. | tags: pptx, presentation, capgemini, javascript, pptxgenjs, guidance
- **`md-to-confluence`** — Converts Markdown files to Confluence storage format (XHTML) ready to paste into the Confluence source editor, handling headings, tables, blockquotes, code blocks, links, and special character escaping. | tags: markdown, confluence, conversion, document, wiki, python
<!-- CATALOG_SNAPSHOT_END -->

1. Read the [Blacklisted Skills](#blacklisted-skills) section below. Skip any skill whose ID appears there.
2. Match the current task against every skill entry in the **snapshot above**. This is a pure in-context check — **no file read or tool call required**. Collect all matches into a list.
3. Act on the match list:
   - **Zero matches:** output `[Capgemini Skill Catalog check: no match — proceeding normally]` and handle the request normally.
   - **Two or more matches:** run `git -C ~/.capgemini/agent-skills-catalog pull 2>/dev/null || true`, read `~/.capgemini/agent-skills-catalog/catalog.json`, and replace the lines between `<!-- CATALOG_SNAPSHOT_START -->` and `<!-- CATALOG_SNAPSHOT_END -->` in this file with the updated skill list (one line per skill: `- **\`<id>\`** — <description> | tags: <tags>`). Then output `[Capgemini Skill Catalog check: N skills found → <id1>, <id2>, ...]` and present to the user:
     > I found N reusable skills in the Capgemini AI Skill Catalog that match this task:
     > 1. **\<id-1\>** — \<description\>
     > 2. **\<id-2\>** — \<description\>
     >
     > Which would you like to use? Reply with the skill number, or "none" to proceed without a skill.
     Then apply steps 3a–3f for the chosen skill. If "none", proceed normally.
   - **Exactly one match:** proceed to 3a–3f below.
   a. Run `git -C ~/.capgemini/agent-skills-catalog pull 2>/dev/null || true`, read `~/.capgemini/agent-skills-catalog/catalog.json`, and replace the lines between `<!-- CATALOG_SNAPSHOT_START -->` and `<!-- CATALOG_SNAPSHOT_END -->` in this file with the updated skill list (one line per skill: `- **\`<id>\`** — <description> | tags: <tags>`).
   b. **MUST output** `[Capgemini Skill Catalog check: skill found → <skill-id>]` first, then present the match to the user with exactly this message and options:
      > I found a reusable skill in the Capgemini AI Skill Catalog: **\<skill-id\>** — \<skill description\>
      > Would you like me to use the existing skill from the Capgemini Skill Catalog?
      >
      > - **Yes, just re-use** — use the skill in-place from the central catalog.
      > - **Yes, copy to my local workspace/project configuration** — copy the skill into this project so you can adapt it.
      > - **No, please blacklist the skill `<skill-id>`** — never propose this skill again in this project.
      > - **No, stop discovering skills from Capgemini skill DB** — remove the connector from this project entirely.
   c. **"Yes, just re-use":** Read and use the skill from `~/.capgemini/agent-skills-catalog/<skill-id>/skill.md`, replacing `{SKILLS_ROOT}` with `~/.capgemini/agent-skills-catalog`.
   d. **"Yes, copy to my local workspace/project configuration":** Copy the entire skill folder from `~/.capgemini/agent-skills-catalog/<skill-id>/` to `.github/copilot/skills/<skill-id>/`. Read the copied `skill.md` and follow the setup and usage instructions, replacing `{SKILLS_ROOT}` with `.github/copilot/skills`. Then append `.github/copilot/skills/<skill-id>/` to `.gitignore` if that exact line is not already present.
   e. **"No, please blacklist the skill `<skill-id>`":** Add the skill ID as a list entry under the [Blacklisted Skills](#blacklisted-skills) section in `.github/copilot/instructions/capgemini-skill-catalog.instructions.md`. Do not use the skill. Proceed normally.
   f. **"No, stop discovering skills from Capgemini skill DB":** Remove the entire `## Capgemini AI Skill Catalog` section (from the `## Capgemini AI Skill Catalog` heading through the `<!-- Add blacklisted skill IDs below... -->` comment) from `.github/copilot/instructions/capgemini-skill-catalog.instructions.md`. If only the frontmatter remains, delete the file. The catalog will no longer be consulted in this project. Inform the user that the connector has been removed.

---

## Blacklisted Skills

Skills listed here are **never proposed** in this project. The agent must not suggest, mention, or use any skill whose ID appears in this list.

To blacklist a skill, ask the agent: *"Blacklist the skill `<skill-id>` from the Capgemini AI Skill Catalog."*

<!-- Add blacklisted skill IDs below, one per line as a list item: -->
