# Nuffield Foundation Research, Development and Analysis Fund Application

PolicyEngine's application to the Nuffield Foundation's Research, Development and Analysis Fund.

## Grant Overview

- **Funder**: Nuffield Foundation
- **Fund**: Research, Development and Analysis Fund
- **Award Range**: Typically under £300,000 (max £500,000, occasionally up to £750,000)
- **Duration**: Six months to three years
- **Next Deadline**: October 6, 2025
- **Application Type**: Two-stage (Outline, then Full application if invited)

## Focus Areas

The fund supports research that aims to improve lives in the UK, addressing one or more priority questions:

1. **Building a prosperous and fair society**
2. **Creating an inclusive society**
3. **Ensuring science and technology benefit people**
4. **Developing climate change policies**
5. **Building trustworthy and effective institutions**

## Eligibility

- Must be affiliated with a UK-based organization
- Not for individual researchers without institutional affiliation
- Not for undergraduate/master's students or PhD fees
- Not for establishing academic posts

## Previous Nuffield Support

PolicyEngine received £251,296 from Nuffield Foundation (September 2024 - September 2025) for "Enhancing, localising and democratising tax-benefit policy analysis" - improving PolicyEngine's comprehensiveness, accuracy, and accessibility.

**Previous Application Materials:**
- [Full application with hyperlinks (markdown)](./materials/previous-application-2024.md)
- [Executive summary and analysis](./materials/previous-application-summary.md)
- [Google Doc](https://docs.google.com/document/d/1P0gTHNfVcXyIMuW5w4T8Ji_uSaqnhjOPmjU8J5YVW5I/edit?tab=t.0)
- [Word document](./materials/Nuffield%20application.docx)

## Repository Structure

```
nuffield-rda-2025/
├── docs/                    # Application documents and responses
│   ├── outline/            # Outline application (first stage)
│   │   ├── questions.yaml  # Question structure and word limits
│   │   ├── responses/      # Individual answer files (one per question)
│   │   ├── assemble_outline.py  # Stitcher with word count validation
│   │   └── README.md       # Workflow documentation
│   ├── full-application/   # Full application (if invited)
│   └── budget/             # Budget documentation
├── materials/               # Reference materials and grant documents
│   ├── previous-application-2024.md  # Previous award (with hyperlinks)
│   └── previous-application-summary.md  # Analysis of what worked
├── scripts/                 # Assembly and content management scripts
└── site/                   # React microsite for proposal review
```

## Development

### Working on the Outline Application

Edit individual response files in `docs/outline/responses/`:

```bash
# Edit a specific response
code docs/outline/responses/a_project_summary.md

# Assemble and validate word counts
cd docs/outline
python3 assemble_outline.py
```

See [docs/outline/README.md](./docs/outline/README.md) for full workflow documentation.

### View the Application Site

```bash
cd site
npm install
npm run dev
```

Visit http://localhost:5173/nuffield-rda-2025 to view the microsite.

### Update Content

Edit markdown files in `docs/` and run the sync script (if needed):

```bash
python3 scripts/sync_content.py  # If this script exists
```

## Assessment Criteria

- Relevance to priority questions
- Potential impact
- Research methodology
- Team expertise
- Value for money

## Key Dates

- **October 6, 2025**: Outline application deadline
- **TBD**: Full application deadline (if invited)

## Links

- [R&D Fund Information](https://www.nuffieldfoundation.org/funding/research-development-and-analysis-fund)
- [Previous PolicyEngine Project](https://www.nuffieldfoundation.org/project/enhancing-localising-and-democratising-tax-benefit-policy-analysis)
- [Nuffield Foundation](https://www.nuffieldfoundation.org/)
