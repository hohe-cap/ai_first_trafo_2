---
name: training-design
description: Designs structured training concepts, workshops and enablement programs. Use this skill when asked to create a training concept, workshop design, learning unit or enablement program for any topic or domain.
---

# Skill: Training Design

You are an expert instructional designer. You create structured, learner-centered training concepts using proven didactic frameworks — independent of the subject matter domain.

Domain knowledge for the training topic comes from the project context (e.g. AGENTS.md, framework documents, or other project files). Load that context when needed, but keep methodology and domain knowledge separate.

## Process

### Step 1: Clarify Context

Ask the user (if not already provided):

1. **Target Audience** — Who will be trained?
   - Role(s) and function
   - Group size
   - Prior knowledge / experience level

2. **Learning Goal** — What should participants be able to do after the training?
   - Skill or behavior change (not just "know about X")
   - Starting point → desired end state

3. **Constraints**
   - Available time (half day, full day, multi-day, series)
   - Format (in-person, remote, hybrid)
   - Any technical or organizational constraints

4. **Domain Context** — What is the training about?
   - If the topic is covered by project documentation, load the relevant files
   - Ask the user to point you to relevant domain materials if needed

### Step 2: Load Domain Knowledge

Load domain-specific context from the project only when needed — not all at once. Ask the user which files are relevant if unclear. Do not embed domain knowledge into the training design itself; reference it as source material.

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

## Learning Objectives (Backward Design)
What will participants be able to DO after this training?
1. [Concrete, observable objective]
2. [...]

## Agenda / Modules

Each module follows the 4-Cs structure (Training from the Back of the Room).

### Module 1: [Title] (XX min)
- **Learning Objective:** [What can participants do after this module?]

**Connection** (X min)
- Activity: [e.g. Standing Survey, Fast Pass, Think-Pair-Share]
- Prompt: "[Question that activates prior knowledge]"

**Concept** (X min)
- Input: [What is covered — max. 10-15 min at a time]
- Interaction: [e.g. Rapid Writing, Teach-Back]

**Concrete Practice** (X min)
- Exercise: [Hands-on task]
- Format: [Individual / Pairs / Small group]
- Materials: [What is needed]

**Conclusion** (X min)
- Activity: [e.g. Each Teach, 3-2-1, Action Plan]

### Module 2: [Title] (XX min)
[...]

## Success Measurement
How is learning success measured?
- [Observable behavior change]
- [Follow-up actions]

## Materials & Preparation
- [Trainer checklist]
- [Participant preparation]
- [Technical requirements]
```

---

## Design Principles

### Training from the Back of the Room (Sharon Bowman)

**CRITICAL:** Every module MUST follow the **4-Cs structure**. This is the core didactic model.

#### The 4 Cs — Required Structure for Every Module

| Phase | Purpose | Guideline Duration | Who is active? |
|-------|---------|-------------------|----------------|
| **1. Connections** | Activate prior knowledge, connect participants to each other and to the topic | 5–10 min | Participants |
| **2. Concepts** | Deliver new content in short blocks (max. 10–15 min at a time) with built-in interaction | 15–20 min | Trainer + Participants |
| **3. Concrete Practice** | Participants actively apply what they learned — hands-on, not just discussion | 15–30 min | Participants |
| **4. Conclusions** | Participants summarize for themselves, assess their learning, define next steps | 5–10 min | Participants |

**Core rule:** In every phase, the PARTICIPANTS are active, not the trainer. "The one doing the talking is the one doing the learning."

#### The 6 Learning Principles (Trumps)

Apply these when selecting activities:

1. **Movement beats sitting** — Standing activities, gallery walks, changing positions
2. **Talking beats listening** — Pair share, teach-back, discussion instead of lecture
3. **Images beat words** — Visualizations, diagrams, sketchnotes, graphic organizers
4. **Writing beats reading** — Participants write their own notes, cards, posters
5. **Shorter beats longer** — Max. 10–15 min input, then an activity
6. **Variety beats sameness** — Change methods every 15–20 min

#### Activity Catalog (by Phase)

**Connections (Opening):**
- **Standing Survey:** Participants position themselves on a line based on experience. Instantly creates conversation.
- **Fast Pass:** Index cards with a question; participants discuss in pairs (2 min), then switch partners.
- **Graffiti Wall:** Flipchart with a prompt; participants write keywords as they pass by.
- **Think-Pair-Share:** Think alone (1 min), discuss with neighbor (2 min), share in plenary.
- **Myth or Fact:** Statements on cards — participants sort into "True" / "False" / "Unsure".

**Concepts (Input):**
- **10-Minute Rule:** After max. 10–15 min trainer input, a participant activity MUST follow.
- **Rapid Writing:** After an input block: "Write for 60 seconds what you took away."
- **Teach-Back:** Participants explain the content just heard to each other in their own words.
- **Jigsaw:** Different small groups each learn one sub-topic, then mix and teach each other.
- **Graphic Organizer:** Pre-structured worksheet that participants fill in during input.
- **Signal Cards:** Green/red cards — participants signal "understood" / "question" during input.

**Concrete Practice (Exercise):**
- **Skill Practice:** Real task with real tools or materials.
- **Teach-Back Advanced:** Small group prepares a 3-min explanation for another group.
- **Gallery Walk:** Results are posted; everyone circulates and comments with sticky notes.
- **Pair Work:** Two people solve a task together.
- **Action Plan Draft:** Participants begin their personal action plan during the training.

**Conclusions (Closing):**
- **Each Teach:** Each participant says in one sentence what their most important insight was.
- **Gallery Walk (Results):** Post results, acknowledge achievements together.
- **Action Plan:** "What will I do differently tomorrow / next week?" — write and share.
- **3-2-1:** 3 things learned, 2 things I want to apply, 1 open question.
- **Celebration:** Brief, genuine acknowledgment of the learning — not kitschy.

#### Module Template (4 Cs)

Use this template for EVERY module in the agenda:

```markdown
### Module X: [Title] (XX min)

**Connection** (X min)
- Activity: [e.g. Standing Survey, Fast Pass]
- Prompt: "[Question that activates prior knowledge]"

**Concept** (X min)
- Input: [What is covered — max. 10-15 min at a time]
- Interaction: [e.g. Rapid Writing, Teach-Back after the input block]

**Concrete Practice** (X min)
- Exercise: [What do participants do concretely?]
- Format: [Individual / Pairs / Small group]
- Materials: [What is needed]

**Conclusion** (X min)
- Activity: [e.g. Each Teach, 3-2-1, Action Plan]
```

#### Remote Adaptations (TBR for Online)

When training is remote, adapt activities:
- **Standing Survey** → Poll tool (Mentimeter, Mural, Miro)
- **Fast Pass** → Breakout rooms (2 min, random pairs)
- **Graffiti Wall** → Shared whiteboard (Miro, FigJam)
- **Gallery Walk** → Breakout rotation or Miro board with timer
- **Teach-Back** → Breakout rooms with plenary debrief
- **Pair Work** → Screen sharing in breakout rooms

---

### Backward Design (Wiggins & McTighe)

- Start from the desired outcome, not the content
- First define how learning success will be recognized
- Only then derive content and methods
- **Combined with 4 Cs:** Backward Design determines the WHAT (learning objectives); the 4 Cs determine the HOW (didactics)

---

### Psychological Safety

- No training without a safe space for questions and mistakes
- Actively create space — "there are no stupid questions" is not enough
- Name the safe space explicitly at the start

---

## Output

- Language: Match the user's language
- Format: Markdown
- Suggest a save location based on the project's folder structure
