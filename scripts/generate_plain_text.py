#!/usr/bin/env python3
"""
Generate plain-text versions of responses for the application form.
Strips all markdown formatting.
"""

import re
from pathlib import Path

project_root = Path(__file__).parent.parent

def strip_markdown(text):
    """Remove all markdown formatting."""
    # Remove HTML comments
    text = re.sub(r'<!--.*?-->', '', text, flags=re.DOTALL)

    # Remove bold/italic markers (multiple passes to handle nested)
    for _ in range(3):
        text = re.sub(r'\*\*([^\*]+)\*\*', r'\1', text)
        text = re.sub(r'\*([^\*]+)\*', r'\1', text)

    # Remove headers
    text = re.sub(r'^#+\s+', '', text, flags=re.MULTILINE)

    # Remove checkboxes
    text = re.sub(r'☑\s*', '', text)
    text = re.sub(r'☐\s*', '', text)
    text = re.sub(r'\[x\]\s*', '', text, flags=re.IGNORECASE)
    text = re.sub(r'\[ \]\s*', '', text)

    # Remove bullet markers but keep the text
    text = re.sub(r'^\s*[-•*]\s+', '', text, flags=re.MULTILINE)

    # Remove numbered list markers
    text = re.sub(r'^\s*\d+\.\s+', '', text, flags=re.MULTILINE)

    # Remove inline code backticks
    text = re.sub(r'`([^`]+)`', r'\1', text)

    # Remove any remaining asterisks
    text = text.replace('**', '')
    text = text.replace('*', '')

    # Clean up whitespace
    text = re.sub(r'\n\n\n+', '\n\n', text)
    text = text.strip()

    return text

def main():
    print("Generating Plain Text Versions for Application Form")
    print("=" * 60)

    responses_dir = project_root / "docs" / "outline" / "responses"
    output_dir = project_root / "docs" / "outline" / "plain-text"
    output_dir.mkdir(exist_ok=True)

    response_files = [
        'a_project_summary.md',
        'b_research_questions.md',
        'c_case_for_importance.md',
        'd_outcomes_and_influence.md',
        'e_methods_approach_activities.md',
        'f_research_engagement_team.md',
        'g_budget.md',
        'h_bibliographic_references.md'
    ]

    for filename in response_files:
        input_path = responses_dir / filename
        output_path = output_dir / filename.replace('.md', '.txt')

        if input_path.exists():
            with open(input_path, 'r') as f:
                content = f.read()

            plain_text = strip_markdown(content)

            with open(output_path, 'w') as f:
                f.write(plain_text)

            print(f"✅ {filename} -> {output_path.name}")

    print("\n" + "=" * 60)
    print("✅ Plain text versions created in docs/outline/plain-text/")
    print("\nThese are ready to copy-paste into the application form.")

    return 0

if __name__ == "__main__":
    exit(main())
