# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository organizes PolicyEngine's application to the Nuffield Foundation's Research, Development and Analysis Fund. The fund supports research that aims to improve lives in the UK through addressing priority questions about society, technology, climate, and institutions.

## Previous Support

PolicyEngine received £251,296 from Nuffield Foundation (September 2024 - September 2025) for "Enhancing, localising and democratising tax-benefit policy analysis" - a project focused on improving PolicyEngine's tax-benefit microsimulation model's comprehensiveness, accuracy, and accessibility.

## Grant Details

- **Award**: Typically under £300,000 (max £500,000, occasionally up to £750,000)
- **Duration**: Six months to three years
- **Outline Deadline**: October 6, 2025
- **Application Type**: Two-stage (Outline, then Full application if invited)
- **Focus**: Research improving lives in the UK

## Repository Structure

- `docs/`: Application documents and responses
  - `outline/`: Outline application (first stage)
  - `full-application/`: Full application (if invited after outline)
  - `budget/`: Budget documentation
- `materials/`: Reference materials including grant guidelines
- `scripts/`: Python scripts for content assembly and site synchronization
- `site/`: React + Vite microsite for reviewing application progress

## Key Commands

### Site Development
```bash
# From site/ directory
npm install                     # Install dependencies
npm run dev                     # Start development server
npm run build                   # Build for production
```

### Content Assembly
```bash
# From root directory
python3 scripts/sync_content.py  # Sync content to site
```

## Development Workflow

### Making Content Changes

**IMPORTANT:** The site is generated from markdown source files. To avoid misalignment:

1. **Edit markdown source files** in `docs/outline/responses/*.md` (individual question responses) or `docs/outline/project_portfolio.md` (portfolio)
2. **Run assembly script** to generate ASSEMBLED_OUTLINE.md:
   ```bash
   cd docs/outline && python3 assemble_outline.py
   ```
3. **Run sync script** to update React site data:
   ```bash
   python3 scripts/sync_content.py
   ```
4. **Review on dev site** at http://localhost:5173/nuffield-rda-2025/
5. **Commit all changes** (both markdown sources and generated files)

### Key Files

**Source Files (edit these):**
- `docs/outline/responses/a_project_summary.md` - Project summary (100 words)
- `docs/outline/responses/b_research_questions.md` - Research questions (200 words)
- `docs/outline/responses/c_case_for_importance.md` - Case for importance (200 words)
- `docs/outline/responses/d_outcomes_and_influence.md` - Outcomes and influence (300 words)
- `docs/outline/responses/e_methods_approach_activities.md` - Methods (750 words)
- `docs/outline/responses/f_research_engagement_team.md` - Team (250 words)
- `docs/outline/responses/g_budget.md` - Budget table
- `docs/outline/responses/h_bibliographic_references.md` - References (350 words)
- `docs/outline/project_portfolio.md` - Full portfolio description

**Generated Files (do not edit directly):**
- `docs/outline/ASSEMBLED_OUTLINE.md` - Auto-generated from responses/*.md
- `site/src/data/portfolioData.ts` - Auto-generated from project_portfolio.md

**React Components (render generated data):**
- `site/src/views/Portfolio.tsx` - Imports from portfolioData.ts
- Other views in `site/src/views/*.tsx` - Manually maintained

## Grant Priority Questions

Applications must address one or more of these five priority questions:

1. **Building a prosperous and fair society**
   - Economic opportunity and mobility
   - Income distribution and poverty
   - Employment and skills

2. **Creating an inclusive society**
   - Social cohesion and integration
   - Equality and discrimination
   - Access to services

3. **Ensuring science and technology benefit people**
   - AI and automation impacts
   - Digital inclusion
   - Ethical use of technology

4. **Developing climate change policies**
   - Net zero transitions
   - Climate adaptation
   - Just transitions

5. **Building trustworthy and effective institutions**
   - Democratic participation
   - Public trust
   - Effective governance

## Content Development Guidelines

- Focus on UK impact and UK-based research
- Emphasize relevance to priority questions
- Demonstrate potential impact
- Show strong research methodology
- Highlight team expertise
- Justify value for money
- Address assessment criteria explicitly

## PolicyEngine Context

PolicyEngine is a nonprofit organization that builds open-source tools to analyze the impacts of public policy on society. Our work directly addresses multiple Nuffield priority questions:

- **Priority 1 (Prosperity & Fairness)**: Tax and benefit policy analysis, poverty reduction
- **Priority 2 (Inclusion)**: Accessible policy tools for all communities
- **Priority 3 (Science & Technology)**: AI-powered policy analysis democratizing access to complex modeling
- **Priority 5 (Effective Institutions)**: Evidence-based policymaking tools for government

## UK Focus

While PolicyEngine operates internationally, this application should emphasize:
- UK-specific benefits and impact
- UK policy analysis capabilities
- UK partnerships and collaborations
- UK data and modeling improvements

## Site Navigation

The review site includes these key sections:
- **Home**: Overview and grant summary
- **Outline**: Outline application content
- **Full Application**: Full application (if invited)
- **Budget**: Project budget details
- **Project Plan**: Timeline and methodology
- **Team**: Key personnel and expertise

## Deployment

- Site auto-deploys to GitHub Pages on pushes to `main`
- CI/CD validates builds on pull requests

This repository provides a foundation for developing a comprehensive grant application to the Nuffield Foundation's Research, Development and Analysis Fund.
