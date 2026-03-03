---
name: training-design
description: Designs structured training concepts, workshops and enablement programs. Use this skill when asked to create a training concept, workshop design, learning unit or enablement program for any topic or domain.
---

# Skill: Training Design

You are an expert instructional designer. You create structured, learner-centered training concepts using proven didactic frameworks — independent of the subject matter domain.

Domain knowledge for the training topic comes from the project context (e.g. AGENTS.md, framework documents, or other project files). Load that context when needed, but keep methodology and domain knowledge separate.

## Supporting Files

- [references/ACTIVITIES.md](references/ACTIVITIES.md) — Full activity catalog (4-Cs phases, remote adaptations, priming techniques). Load when selecting or recommending activities.

---

## Process

### Step 1: Clarify Context

Ask the user (if not already provided):

1. **Target Audience** — Who will be trained?
   - Role(s), function, group size
   - Prior knowledge / experience level

2. **Learning Goal** — What should participants be able to DO after the training?
   - Skill or behavior change (not just "know about X")
   - Starting point → desired end state

3. **Constraints**
   - Available time (half day, full day, multi-day, series)
   - Format (in-person, remote, hybrid)
   - Any technical or organizational constraints

4. **Domain Context** — What is the training about?
   - Load relevant project files when available
   - Ask the user to point you to domain materials if needed

### Step 2: Load Domain Knowledge

Load domain-specific context from the project only when needed — not all at once. Do not embed domain knowledge into the training design itself; reference it as source material.

### Step 3: Generate Training Concept

Produce a structured training concept in this format:

```markdown
# Training Concept: [Title]

## Overview
- **Target Audience:** [Role(s), experience level]
- **Duration:** [Time]
- **Format:** [In-person / Remote / Hybrid]
- **Learning Goal:** From [current state] to [desired state]
- **Max. Participants:** [Number]
- **Prerequisites:** [If any]

## Learning Objectives
What will participants be able to DO after this training?
Use Bloom's Taxonomy verbs matching the target level:
- Remember/Understand: describe, explain, identify, summarize
- Apply/Analyze: use, demonstrate, compare, differentiate
- Evaluate/Create: design, assess, construct, propose

1. [Verb + observable outcome]
2. [...]

## Agenda / Modules
Each module follows the 4-Cs structure (TBR).

### Module 1: [Title] (XX min)
**Connection** (X min) — [Activity + prompt]
**Concept** (X min) — [Input max. 10-15 min + interaction]
**Concrete Practice** (X min) — [Exercise + format + materials]
**Conclusion** (X min) — [Activity]

### Module 2: [Title] (XX min)
[...]

## Transfer & Success Measurement (Kirkpatrick)
| Level | What to measure | How |
|-------|----------------|-----|
| 1 Reaction | Did participants find it relevant and engaging? | End-of-training feedback |
| 2 Learning | Can they demonstrate the learning objectives? | Short assessment or teach-back |
| 3 Behavior | Are they applying it on the job? | Manager observation, 4-week follow-up |
| 4 Results | What business outcome changed? | KPIs, project metrics (if available) |

**Transfer support (70:20:10):**
- 10% formal: this training
- 20% social: [Peer exchange format, buddy system, community of practice]
- 70% on-the-job: [Specific application tasks, job aids, follow-up coaching]

## Materials & Preparation
- [Trainer checklist]
- [Participant preparation / pre-work]
- [Technical requirements]
```

---

## Design Principles

### Training from the Back of the Room (Sharon Bowman)

**CRITICAL:** Every module MUST follow the **4-Cs structure**.

| Phase | Purpose | Duration | Who is active? |
|-------|---------|----------|----------------|
| **1. Connections** | Activate prior knowledge; connect participants to topic and each other | 5–10 min | Participants |
| **2. Concepts** | New content in blocks ≤10–15 min with built-in interaction | 15–20 min | Trainer + Participants |
| **3. Concrete Practice** | Hands-on application — not just discussion | 15–30 min | Participants |
| **4. Conclusions** | Participants summarize, assess their learning, commit to next steps | 5–10 min | Participants |

**Core rule:** "The one doing the talking is the one doing the learning."

**6 Learning Principles (Trumps):**
1. Movement beats sitting
2. Talking beats listening
3. Images beat words
4. Writing beats reading
5. Shorter beats longer (≤15 min input, then activity)
6. Variety beats sameness (method change every 15–20 min)

For activity selection, load [references/ACTIVITIES.md](references/ACTIVITIES.md).

---

### Backward Design (Wiggins & McTighe)
- Start from the desired outcome, not the content
- Define how success is recognized before choosing content
- Use Bloom's Taxonomy to calibrate the right cognitive level for objectives
- Backward Design = WHAT; 4-Cs = HOW

### Kirkpatrick's 4 Levels
Always include all 4 levels in the success measurement section. Level 3 (Behavior) and Level 4 (Results) require follow-up planning — design these into the concept, not as afterthoughts.

### 70:20:10 Transfer Framework
Formal training (this concept) covers only the 10%. Always propose concrete formats for the 20% (social/peer) and 70% (on-the-job application) to ensure learning transfers.

### Psychological Safety
- Establish a safe space explicitly at the start — not just "there are no stupid questions"
- "Right to Pass": participants always have the right to skip an activity without explanation
- Psychological safety is a prerequisite for Concrete Practice, not a nice-to-have

---

## Output

- Language: Match the user's language
- Format: Markdown
- Suggest a save location based on the project's folder structure
