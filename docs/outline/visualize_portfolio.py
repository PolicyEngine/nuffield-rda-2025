#!/usr/bin/env python3
"""
Generate visual representations of project portfolio components.
Creates both a static diagram and interactive HTML visualization.
"""

import yaml
from pathlib import Path
import json

def load_components():
    """Load project components from YAML."""
    yaml_path = Path(__file__).parent / 'project_components.yaml'
    with open(yaml_path, 'r') as f:
        return yaml.safe_load(f)

def generate_mermaid_diagram(data):
    """Generate Mermaid diagram showing component relationships."""

    mermaid = """```mermaid
graph TB
    subgraph "Model Enhancement"
        CT[Council Tax<br/>£32k, 4pm]
        VAT[VAT Distribution<br/>£8k, 1pm]
        LFS[Monthly LFS Updates<br/>£32k, 4pm]
        BUF[Policy Buffer<br/>£40k, 5pm]
    end

    subgraph "User Experience"
        AI[AI Report Authoring<br/>£48k, 6pm]
        DATA[OBR/HMT Integration<br/>£24k, 3pm]
        NOTIF[Notifications<br/>£16k, 2pm]
    end

    subgraph "Community Growth"
        TRAIN[Monthly Trainings<br/>£32k, 4pm]
        SYMP[Annual Symposium<br/>£25k, 2pm]
        CONF[Conference Program<br/>£30k, 3pm]
        CRM[CRM System<br/>£16k, 2pm]
        HACK[Hackathon<br/>£20k, 2pm]
    end

    subgraph "Research Applications"
        POV[Poverty Dashboard<br/>£32k, 4pm]
    end

    %% Relationships
    CT --> POV
    VAT --> POV
    LFS --> AI
    BUF --> AI
    DATA --> AI
    AI --> TRAIN
    AI --> POV
    TRAIN --> SYMP
    SYMP --> CONF
    CRM --> NOTIF
    CRM --> TRAIN
    HACK --> SYMP

    %% Styling
    classDef high fill:#2ecc71,stroke:#27ae60,stroke-width:3px,color:#000
    classDef medium fill:#3498db,stroke:#2980b9,stroke-width:2px,color:#fff
    classDef low fill:#95a5a6,stroke:#7f8c8d,stroke-width:1px,color:#000

    class CT,BUF,AI,TRAIN,SYMP,POV high
    class VAT,LFS,DATA,NOTIF,CONF,CRM,HACK medium
```"""

    return mermaid

def generate_portfolio_comparison_html(data):
    """Generate interactive HTML comparing the three portfolios."""

    scenarios = data['scenarios']

    html = """<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PolicyEngine Nuffield R&D Portfolio Comparison</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: #f5f7fa;
            padding: 20px;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
        }

        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 10px;
        }

        .subtitle {
            text-align: center;
            color: #7f8c8d;
            margin-bottom: 30px;
        }

        .portfolios {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }

        .portfolio-card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            padding: 24px;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .portfolio-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }

        .portfolio-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 3px solid #3498db;
        }

        .portfolio-title {
            font-size: 24px;
            font-weight: 600;
            color: #2c3e50;
        }

        .portfolio-cost {
            font-size: 28px;
            font-weight: 700;
            color: #3498db;
        }

        .portfolio-description {
            color: #7f8c8d;
            margin-bottom: 20px;
            line-height: 1.5;
        }

        .component-list {
            list-style: none;
        }

        .component-item {
            padding: 8px 0;
            border-bottom: 1px solid #ecf0f1;
            display: flex;
            align-items: center;
        }

        .component-item:last-child {
            border-bottom: none;
        }

        .component-check {
            color: #2ecc71;
            margin-right: 8px;
            font-weight: bold;
        }

        .theme-sections {
            margin-top: 40px;
        }

        .theme-section {
            background: white;
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.08);
        }

        .theme-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        .theme-title {
            font-size: 20px;
            font-weight: 600;
            color: #2c3e50;
        }

        .theme-total {
            font-size: 18px;
            font-weight: 600;
            color: #3498db;
        }

        .component-grid {
            display: grid;
            gap: 12px;
        }

        .component-box {
            background: #f8f9fa;
            border-left: 4px solid #3498db;
            padding: 12px;
            border-radius: 4px;
        }

        .component-box.high {
            border-left-color: #2ecc71;
            background: #f0fdf4;
        }

        .component-box.medium {
            border-left-color: #3498db;
            background: #eff6ff;
        }

        .component-box.low {
            border-left-color: #95a5a6;
            background: #f8f9fa;
        }

        .component-name {
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 4px;
        }

        .component-meta {
            display: flex;
            gap: 16px;
            font-size: 14px;
            color: #7f8c8d;
        }

        .priority-badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .priority-badge.high {
            background: #2ecc71;
            color: white;
        }

        .priority-badge.medium {
            background: #3498db;
            color: white;
        }

        .priority-badge.low {
            background: #95a5a6;
            color: white;
        }

        @media (max-width: 768px) {
            .portfolios {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>PolicyEngine Nuffield R&D Fund</h1>
        <p class="subtitle">Project Portfolio Options (£300k-£350k over 24 months)</p>
"""

    # Add portfolio comparison cards
    html += '        <div class="portfolios">\n'

    portfolio_names = {
        'core_package': 'Portfolio A: Core Enhancement',
        'model_focused': 'Portfolio B: Model Deep Dive',
        'engagement_focused': 'Portfolio C: Impact & Reach'
    }

    for scenario in scenarios:
        scenario_id = scenario['id']
        html += f'''
            <div class="portfolio-card">
                <div class="portfolio-header">
                    <div class="portfolio-title">{portfolio_names.get(scenario_id, scenario['title'])}</div>
                    <div class="portfolio-cost">£{scenario['total_cost']:,}</div>
                </div>
                <div class="portfolio-description">{scenario['description']}</div>
                <ul class="component-list">
'''

        for comp in scenario['components']:
            # Get the actual component title from the data
            comp_title = None
            for theme in data['themes']:
                for component in theme['components']:
                    if component['id'] == comp:
                        comp_title = component['title']
                        break
                if comp_title:
                    break

            # Fallback to formatted ID if title not found
            if not comp_title:
                comp_title = comp.replace("_", " ").title()

            html += f'                    <li class="component-item"><span class="component-check">✓</span>{comp_title}</li>\n'

        html += '''                </ul>
            </div>
'''

    html += '        </div>\n'

    # Add detailed component breakdown by theme
    html += '        <div class="theme-sections">\n'

    for theme in data['themes']:
        theme_id = theme['id']
        theme_title = theme['title']
        priority_class = theme['priority']

        # Calculate theme total
        theme_total = sum(
            comp.get('cost_estimate', 0) or 0
            for comp in theme['components']
        )

        html += f'''
            <div class="theme-section">
                <div class="theme-header">
                    <div class="theme-title">{theme_title}</div>
                    <div class="theme-total">£{theme_total:,}</div>
                </div>
                <div class="component-grid">
'''

        for comp in theme['components']:
            comp_id = comp['id']
            comp_title = comp['title']
            comp_cost = comp.get('cost_estimate') or 0
            comp_effort = comp.get('effort_pm') or 'TBD'
            comp_priority = comp.get('priority', 'medium')
            comp_desc = comp.get('description', '')

            html += f'''
                    <div class="component-box {comp_priority}">
                        <div class="component-name">{comp_title}</div>
                        <div class="component-meta">
                            <span>£{comp_cost:,}</span>
                            <span>{comp_effort} pm</span>
                            <span class="priority-badge {comp_priority}">{comp_priority}</span>
                        </div>
                        <div style="font-size: 13px; color: #7f8c8d; margin-top: 4px;">{comp_desc}</div>
                    </div>
'''

        html += '''                </div>
            </div>
'''

    html += '''        </div>
    </div>
</body>
</html>'''

    return html

def generate_component_costs_table(data):
    """Generate markdown table of all components with costs."""

    lines = [
        "# Component Cost Breakdown\n",
        "| Theme | Component | Effort (pm) | Cost | Priority |",
        "|-------|-----------|-------------|------|----------|"
    ]

    grand_total = 0

    for theme in data['themes']:
        theme_title = theme['title']
        first_in_theme = True

        for comp in theme['components']:
            comp_title = comp['title']
            effort = comp.get('effort_pm', 'TBD')
            cost = comp.get('cost_estimate')
            priority = comp.get('priority', 'medium').upper()

            if cost:
                cost_str = f"£{cost:,}"
                grand_total += cost
            else:
                cost_str = "TBD"

            effort_str = f"{effort}" if effort else "TBD"

            theme_cell = theme_title if first_in_theme else ""
            first_in_theme = False

            lines.append(f"| {theme_cell} | {comp_title} | {effort_str} | {cost_str} | {priority} |")

    lines.append(f"| | **TOTAL (excluding TBD)** | | **£{grand_total:,}** | |")

    return '\n'.join(lines)

def main():
    data = load_components()

    # Generate Mermaid diagram
    mermaid = generate_mermaid_diagram(data)
    mermaid_path = Path(__file__).parent / 'portfolio_diagram.md'
    with open(mermaid_path, 'w') as f:
        f.write("# Project Portfolio Component Relationships\n\n")
        f.write(mermaid)
        f.write("\n\n")
        f.write("## How to view this diagram\n\n")
        f.write("1. Copy the mermaid code above\n")
        f.write("2. Paste into [Mermaid Live Editor](https://mermaid.live)\n")
        f.write("3. Or view in any markdown renderer that supports Mermaid (GitHub, VS Code with extensions)\n")

    print(f"✅ Generated Mermaid diagram: {mermaid_path}")

    # Generate interactive HTML
    html = generate_portfolio_comparison_html(data)
    html_path = Path(__file__).parent / 'portfolio_comparison.html'
    with open(html_path, 'w') as f:
        f.write(html)

    print(f"✅ Generated interactive HTML: {html_path}")
    print(f"   Open file://{html_path} in your browser")

    # Generate cost breakdown table
    costs_table = generate_component_costs_table(data)
    costs_path = Path(__file__).parent / 'component_costs.md'
    with open(costs_path, 'w') as f:
        f.write(costs_table)

    print(f"✅ Generated cost breakdown: {costs_path}")

    # Print summary
    print("\n📊 Portfolio Summary:")
    for scenario in data['scenarios']:
        print(f"   {scenario['title']}: £{scenario['total_cost']:,}")

if __name__ == "__main__":
    main()
