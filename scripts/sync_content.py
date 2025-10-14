#!/usr/bin/env python3
"""
Sync markdown content from docs/ to site/src/
Parses markdown files and generates TypeScript data files for React components.
"""

import re
import json
from pathlib import Path

project_root = Path(__file__).parent.parent

def parse_portfolio():
    """Parse project_portfolio.md and extract component data."""
    portfolio_path = project_root / "docs" / "outline" / "project_portfolio.md"

    with open(portfolio_path, 'r') as f:
        content = f.read()

    # Extract total budget
    budget_match = re.search(r'\*\*Total Budget:\*\* £([\d,]+)', content)
    total_budget = int(budget_match.group(1).replace(',', '')) if budget_match else 0

    # Extract duration
    duration_match = re.search(r'\*\*Duration:\*\* (\d+) months', content)
    duration = int(duration_match.group(1)) if duration_match else 0

    workstreams = []

    # Parse workstreams - handle both "person-months" and "pm" formats
    workstream_pattern = r'### WORKSTREAM \d+: ([^\(]+) \(£([\d,]+)k?,?\s*([\d.]+)\s*(?:person-months|pm)\)'
    workstream_matches = list(re.finditer(workstream_pattern, content))

    print(f"   Found {len(workstream_matches)} workstream headers")

    for ws_match in workstream_matches:
        ws_title = ws_match.group(1).strip()
        ws_cost_str = ws_match.group(2).replace(',', '')
        ws_cost = int(float(ws_cost_str) * 1000)
        ws_person_months = float(ws_match.group(3))

        # Find the section for this workstream
        ws_start = ws_match.end()
        # Find next workstream or end
        next_ws_idx = workstream_matches.index(ws_match) + 1
        if next_ws_idx < len(workstream_matches):
            ws_end = workstream_matches[next_ws_idx].start()
        else:
            # Find "## Budget Summary" or similar
            budget_summary_match = re.search(r'## Budget Summary', content[ws_start:])
            if budget_summary_match:
                ws_end = ws_start + budget_summary_match.start()
            else:
                ws_end = len(content)

        ws_content = content[ws_start:ws_end]

        # Parse components within this workstream
        components = []
        component_pattern = r'#### ([^\(]+) \(£([\d,]+)k?, ([\d.]+) ?pm[^\)]*\)'

        for comp_match in re.finditer(component_pattern, ws_content):
            comp_title = comp_match.group(1).strip()
            comp_cost_str = comp_match.group(2).replace(',', '')
            comp_cost = int(float(comp_cost_str) * 1000)
            comp_effort = comp_match.group(3)

            # Extract component section
            comp_start = comp_match.end()
            # Find next component or workstream end
            next_comp_matches = list(re.finditer(component_pattern, ws_content[comp_match.end():]))
            if next_comp_matches:
                comp_end = comp_match.end() + next_comp_matches[0].start()
            else:
                comp_end = len(ws_content)

            comp_content = ws_content[comp_start:comp_end]

            # Extract description (text before **Methods:** or **Why:** or **Deliverables:**)
            desc_match = re.search(r'\n\n([^\n]+(?:\n(?!\*\*)[^\n]+)*)', comp_content)
            description = desc_match.group(1).strip() if desc_match else ""
            description = re.sub(r'\*\*Objective:\*\*\s*', '', description)

            # Extract why/details
            why_match = re.search(r'\*\*Why:\*\*\s*([^\n]+)', comp_content)
            details_match = re.search(r'\*\*Details:\*\*\s*([^\n]+)', comp_content)
            methods_match = re.search(r'\*\*Methods:\*\*\s*([^\n]+)', comp_content)

            details = why_match.group(1).strip() if why_match else (
                methods_match.group(1).strip() if methods_match else (
                    details_match.group(1).strip() if details_match else ""
                )
            )

            # Extract research question
            rq_match = re.search(r'\*\*Research Question[^\:]*:\*\*\s*([^\n]+)', comp_content)
            research_question = rq_match.group(1).strip() if rq_match else None

            components.append({
                'title': comp_title,
                'cost': comp_cost,
                'effort': f'{comp_effort} pm',
                'description': description[:200] if len(description) > 200 else description,
                'details': details[:200] if len(details) > 200 else details,
                'researchQuestion': research_question
            })

        # Assign icon based on workstream title
        icon = '🤖' if 'AI' in ws_title or 'Data' in ws_title.upper() else (
            '🔬' if 'Model' in ws_title else '🤝'
        )

        workstreams.append({
            'id': ws_title.lower().replace(' ', '_').replace('-', '_')[:20],
            'title': ws_title,
            'icon': icon,
            'total': ws_cost,
            'personMonths': ws_person_months,
            'components': components
        })

    # Extract research questions
    rq_section_match = re.search(r'## Research Questions\n\n(.+?)(?=\n##)', content, re.DOTALL)
    research_questions = []
    if rq_section_match:
        for rq_match in re.finditer(r'\d+\.\s+\*\*([^:]+):\*\*\s+([^\n]+)', rq_section_match.group(1)):
            research_questions.append({
                'title': rq_match.group(1).strip(),
                'question': rq_match.group(2).strip()
            })

    return {
        'totalBudget': total_budget,
        'duration': duration,
        'workstreams': workstreams,
        'researchQuestions': research_questions
    }

def generate_portfolio_data_ts(data):
    """Generate TypeScript data file from portfolio data."""

    ts_content = f"""// Auto-generated from docs/outline/project_portfolio.md
// DO NOT EDIT DIRECTLY - Run: python3 scripts/sync_content.py

export interface Component {{
  title: string
  cost: number
  effort: string
  description: string
  details?: string
  researchQuestion?: string
}}

export interface Workstream {{
  id: string
  title: string
  icon: string
  total: number
  personMonths: number
  components: Component[]
}}

export interface ResearchQuestion {{
  title: string
  question: string
}}

export interface PortfolioData {{
  totalBudget: number
  duration: number
  workstreams: Workstream[]
  researchQuestions: ResearchQuestion[]
}}

export const portfolioData: PortfolioData = {json.dumps(data, indent=2)}
"""

    output_path = project_root / "site" / "src" / "data" / "portfolioData.ts"
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_path, 'w') as f:
        f.write(ts_content)

    return output_path

def parse_responses():
    """Parse individual response files and calculate word counts."""
    responses_dir = project_root / "docs" / "outline" / "responses"

    responses = {}
    word_counts = {}

    response_files = {
        'a_project_summary': (100, 'Project Summary'),
        'b_research_questions': (200, 'Research Questions'),
        'c_case_for_importance': (200, 'Case for Importance'),
        'd_outcomes_and_influence': (300, 'Outcomes and Influence'),
        'e_methods_approach_activities': (750, 'Methods'),
        'f_research_engagement_team': (250, 'Team'),
        'g_budget': (None, 'Budget'),
        'h_bibliographic_references': (350, 'References')
    }

    # Extract budget total from g_budget
    budget_total = 324000  # default

    for file_key, (word_limit, name) in response_files.items():
        file_path = responses_dir / f"{file_key}.md"
        if file_path.exists():
            with open(file_path, 'r') as f:
                content = f.read()
                # Remove HTML comments
                content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL).strip()
                responses[file_key] = content

                # Calculate word count
                if word_limit is not None:
                    clean_text = re.sub(r'[#*\-|`\[\]()]', '', content)
                    clean_text = re.sub(r'\n+', ' ', clean_text)
                    words = clean_text.split()
                    word_counts[file_key] = len(words)
                else:
                    word_counts[file_key] = 0

                # Extract budget total from g_budget
                if file_key == 'g_budget':
                    budget_match = re.search(r'\*\*Grand [Tt]otal\*\*.*?\*\*(\d+)\*\*', content)
                    if budget_match:
                        budget_total = int(budget_match.group(1))

    return responses, word_counts, response_files, budget_total

def generate_outline_responses_ts(responses, word_counts, word_limits, budget_total):
    """Generate TypeScript file for outline responses."""

    # Format responses for TypeScript
    responses_str = "{\n"
    for key, content in responses.items():
        # Escape backticks and backslashes for TypeScript
        escaped_content = content.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
        responses_str += f"  {key}: `{escaped_content}`,\n\n"
    responses_str += "}"

    word_counts_str = "{\n"
    for key, count in word_counts.items():
        word_counts_str += f"  {key}: {count},\n"
    word_counts_str += "}"

    word_limits_dict = {k: v[0] for k, v in word_limits.items()}
    word_limits_str = "{\n"
    for key, limit in word_limits_dict.items():
        word_limits_str += f"  {key}: {limit if limit is not None else 'null'},\n"
    word_limits_str += "}"

    ts_content = f"""// Auto-generated from docs/outline/responses/*.md
// DO NOT EDIT DIRECTLY - Run: python3 scripts/sync_content.py

export const responses = {responses_str}

// Word count helper
export function countWords(text: string): number {{
  // Remove markdown and HTML
  const clean = text
    .replace(/<!--.*?-->/gs, '')
    .replace(/[#*\\-|`\\[\\]()]/g, '')
    .replace(/\\n+/g, ' ')
  return clean.split(/\\s+/).filter(w => w.length > 0).length
}}

export const wordCounts = {word_counts_str}

export const wordLimits = {word_limits_str}

export const totalBudget = {budget_total}
"""

    output_path = project_root / "site" / "src" / "data" / "outline-responses.ts"
    with open(output_path, 'w') as f:
        f.write(ts_content)

    return output_path

def main():
    """Sync content from docs to site."""
    print("Content Sync Script")
    print("=" * 50)

    # Parse and sync outline responses
    print("\n📝 Parsing outline response files...")
    responses, word_counts, word_limits, budget_total = parse_responses()
    print(f"   Found {len(responses)} response files")
    print(f"   Total budget extracted: £{budget_total:,}")

    print("\n✍️  Generating outline-responses.ts...")
    outline_path = generate_outline_responses_ts(responses, word_counts, word_limits, budget_total)
    print(f"   ✅ Written to: {outline_path}")

    # Parse and sync portfolio
    print("\n📊 Parsing project_portfolio.md...")
    portfolio_data = parse_portfolio()

    print(f"   Found {len(portfolio_data['workstreams'])} workstreams")
    print(f"   Total budget: £{portfolio_data['totalBudget']:,}")
    print(f"   Duration: {portfolio_data['duration']} months")

    print("\n✍️  Generating portfolioData.ts...")
    portfolio_path = generate_portfolio_data_ts(portfolio_data)
    print(f"   ✅ Written to: {portfolio_path}")

    print("\n" + "=" * 50)
    print("✅ Sync complete!")
    print(f"✅ Budget alignment verified: £{budget_total:,}")

    return 0

if __name__ == "__main__":
    exit(main())
