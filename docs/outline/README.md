# Nuffield Foundation Outline Application Workflow

This directory contains the outline application for the Nuffield Foundation Research, Development and Analysis Fund.

## Structure

```
docs/outline/
├── questions.yaml              # Application structure with word limits
├── responses/                  # Individual response files (one per question)
│   ├── a_project_summary.md
│   ├── b_research_questions.md
│   ├── c_case_for_importance.md
│   ├── d_outcomes_and_influence.md
│   ├── e_methods_approach_activities.md
│   ├── f_research_engagement_team.md
│   ├── g_budget.md
│   └── h_bibliographic_references.md
├── assemble_outline.py         # Script to stitch responses and verify word limits
├── ASSEMBLED_OUTLINE.md        # Generated output (DO NOT EDIT)
└── README.md                   # This file
```

## Workflow

### 1. Edit Individual Response Files

Work on one question at a time in the `responses/` directory:

```bash
# Edit a specific response
code responses/a_project_summary.md
```

Each file has comments showing:
- Question text
- Word limit
- Key requirements

### 2. Assemble and Validate

Run the assembler to check word counts and generate the complete application:

```bash
python3 assemble_outline.py
```

This will:
- ✅ Combine all responses into `ASSEMBLED_OUTLINE.md`
- ✅ Count words in each section (excluding markdown/comments)
- ✅ Flag sections that are over limit or missing
- ✅ Show completion percentage
- ✅ Provide copy-paste friendly output

### 3. Review Output

Check `ASSEMBLED_OUTLINE.md` for:
- Word count status for each section (✅ ⚠️ ❌)
- Overall completion rate
- Sections needing attention

### 4. Copy to Application Portal

The assembled document includes collapsible copy buttons for each section, making it easy to paste into the online application form.

## Word Limits

| Section | Limit |
|---------|-------|
| A) Project Summary | 100 |
| B) Research Questions | 200 |
| C) Case for Importance | 200 |
| D) Outcomes and Influence | 300 |
| E) Methods, Approach and Activities | 750 |
| F) Research and Engagement Team | 250 |
| G) Budget | Table format |
| H) Bibliographic References | 350 |
| **TOTAL** | **2,150 words** |

## Priority Questions

The application must address one or more of these:

1. **Building a prosperous and fair society**
2. **Creating an inclusive society**
3. **Ensuring science and technology benefit people**
4. **Developing climate change policies**
5. **Building trustworthy and effective institutions**

## Assessment Criteria

- Relevance to priority questions
- Potential impact on improving lives in the UK
- Research methodology quality and rigor
- Team expertise and track record
- Value for money

## Tips

### Word Count Best Practices
- The assembler excludes markdown formatting and HTML comments from counts
- Use `[TO BE COMPLETED]` placeholders - they're excluded from word counts
- Run `assemble_outline.py` frequently to check progress
- Aim for 90-95% of word limits (leave buffer for final edits)

### Writing Style
- Use **non-technical language** suitable for reviewers with wide-ranging backgrounds
- Be concise and direct
- Focus on impact and relevance to UK
- Reference previous Nuffield project strategically

### Workflow Commands

```bash
# Quick check
python3 assemble_outline.py

# Watch for changes (requires entr or similar)
ls responses/*.md | entr python3 assemble_outline.py

# View assembled output
cat ASSEMBLED_OUTLINE.md

# Count total words across all responses
wc -w responses/*.md
```

## Previous Application Reference

See the previous successful application for guidance:
- [Full application (markdown)](../../materials/previous-application-2024.md)
- [Executive summary](../../materials/previous-application-summary.md)

## Key Dates

- **Outline Deadline:** October 6, 2025
- **Full Application:** TBD (if invited after outline review)

## Grant Details

- **Typical Award:** Under £300,000
- **Maximum:** £500,000 (occasionally £750,000)
- **Duration:** 6 months - 3 years
- **Application Type:** Two-stage (Outline → Full if invited)
