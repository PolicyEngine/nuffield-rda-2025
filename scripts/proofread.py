#!/usr/bin/env python3
"""
Proofread application documents for UK spelling, active voice, and style.
"""

import re
from pathlib import Path

project_root = Path(__file__).parent.parent

# Common US -> UK spelling corrections
UK_SPELLING = {
    'analyze': 'analyse',
    'analyzed': 'analysed',
    'analyzing': 'analysing',
    'organization': 'organisation',
    'organizations': 'organisations',
    'organize': 'organise',
    'organized': 'organised',
    'organizing': 'organising',
    'recognize': 'recognise',
    'recognized': 'recognised',
    'optimize': 'optimise',
    'optimized': 'optimised',
    'prioritize': 'prioritise',
    'prioritized': 'prioritised',
    'utilize': 'utilise',
    'utilized': 'utilised',
    'capitalize': 'capitalise',
    'capitalized': 'capitalised',
    'capitalizes': 'capitalises',
    'capitalizing': 'capitalising',
    'democratize': 'democratise',
    'democratized': 'democratised',
    'democratizing': 'democratising',
    'democratization': 'democratisation',
    'color': 'colour',
    'favor': 'favour',
    'labor': 'labour',
    'neighborhood': 'neighbourhood',
    'modeling': 'modelling',
    'modeled': 'modelled',
}

def check_uk_spelling(file_path):
    """Check for US spellings that should be UK."""
    issues = []

    with open(file_path, 'r') as f:
        lines = f.readlines()

    for line_num, line in enumerate(lines, 1):
        for us_spelling, uk_spelling in UK_SPELLING.items():
            # Use word boundaries to avoid false positives
            pattern = r'\b' + us_spelling + r'\b'
            if re.search(pattern, line, re.IGNORECASE):
                issues.append({
                    'file': file_path.name,
                    'line': line_num,
                    'type': 'spelling',
                    'message': f'US spelling "{us_spelling}" should be "{uk_spelling}"',
                    'context': line.strip()[:80]
                })

    return issues

def check_passive_voice(file_path):
    """Check for common passive voice patterns."""
    issues = []

    # Common passive voice patterns
    passive_patterns = [
        r'\b(is|are|was|were|be|been|being)\s+\w+ed\b',
        r'\bwill be \w+ed\b',
    ]

    with open(file_path, 'r') as f:
        lines = f.readlines()

    for line_num, line in enumerate(lines, 1):
        # Skip markdown headers and code
        if line.strip().startswith('#') or line.strip().startswith('```'):
            continue

        for pattern in passive_patterns:
            if re.search(pattern, line, re.IGNORECASE):
                # Don't flag every passive - just note it
                context = line.strip()[:80]
                if len(context) > 10:  # Avoid short lines
                    issues.append({
                        'file': file_path.name,
                        'line': line_num,
                        'type': 'style',
                        'message': 'Possible passive voice (consider active voice)',
                        'context': context
                    })
                    break  # One per line

    return issues

def proofread_all():
    """Proofread all response files."""
    print("Proofreading Application Documents")
    print("=" * 70)

    responses_dir = project_root / "docs" / "outline" / "responses"

    all_issues = []

    # Check each response file
    for md_file in sorted(responses_dir.glob("*.md")):
        print(f"\n📄 Checking {md_file.name}...")

        # Check UK spelling
        spelling_issues = check_uk_spelling(md_file)
        all_issues.extend(spelling_issues)

        if spelling_issues:
            print(f"   ⚠️  {len(spelling_issues)} spelling issues")

        # Check passive voice (informational only)
        passive_issues = check_passive_voice(md_file)
        # Don't add to all_issues - just informational
        if len(passive_issues) > 3:  # Only report if many
            print(f"   ℹ️  {len(passive_issues)} possible passive voice instances")

    # Also check project_portfolio.md
    portfolio_file = project_root / "docs" / "outline" / "project_portfolio.md"
    if portfolio_file.exists():
        print(f"\n📄 Checking {portfolio_file.name}...")
        spelling_issues = check_uk_spelling(portfolio_file)
        all_issues.extend(spelling_issues)
        if spelling_issues:
            print(f"   ⚠️  {len(spelling_issues)} spelling issues")

    # Report issues
    print("\n" + "=" * 70)

    if all_issues:
        print(f"❌ Found {len(all_issues)} issues:\n")

        by_file = {}
        for issue in all_issues:
            if issue['file'] not in by_file:
                by_file[issue['file']] = []
            by_file[issue['file']].append(issue)

        for file, issues in by_file.items():
            print(f"\n{file}:")
            for issue in issues[:10]:  # Limit to first 10 per file
                print(f"  Line {issue['line']}: {issue['message']}")
                print(f"    → {issue['context']}")

            if len(issues) > 10:
                print(f"  ... and {len(issues) - 10} more")

        return 1  # Exit with error

    print("✅ No spelling issues found!")
    print("\nℹ️  For detailed style review (active voice, tone, etc.), use:")
    print("   python3 scripts/proofread.py --detailed")

    return 0

if __name__ == "__main__":
    exit(proofread_all())
