#!/usr/bin/env python3
"""
Assemble Nuffield Foundation Outline Application from individual response files.
Tracks word counts and ensures compliance with limits.
"""

import yaml
import os
from pathlib import Path
import re
from datetime import datetime

def count_words(text):
    """Count words in text, excluding markdown formatting and comments."""
    # Remove HTML comments
    text = re.sub(r'<!--.*?-->', '', text, flags=re.DOTALL)
    # Remove markdown formatting
    clean_text = re.sub(r'[#*\-|`\[\]()]', '', text)
    clean_text = re.sub(r'\n+', ' ', clean_text)
    # Remove common placeholder text
    clean_text = clean_text.replace('[TO BE COMPLETED]', '')
    words = clean_text.split()
    return len(words)

def load_response(file_path):
    """Load a response file and return content with word count."""
    if not os.path.exists(file_path):
        return None, 0

    with open(file_path, 'r') as f:
        content = f.read().strip()

    word_count = count_words(content)
    return content, word_count

def format_section(section, content, word_count):
    """Format a section with word count indicator and copy button."""
    limit = section.get('word_limit')

    # Budget section has no word limit
    if limit is None:
        status = "📊"
        limit_text = "Table format"
    else:
        if word_count == 0:
            status = "❌"
        elif word_count <= limit:
            status = "✅"
        else:
            status = "⚠️"  # Over limit
        limit_text = f"{word_count}/{limit} words"

    header = f"## {section['title']}"

    # Add question context
    question = section.get('question', '').strip()
    if question:
        question_box = f"\n> **Question:** {question}\n"
    else:
        question_box = ""

    # Add copy button HTML (works in markdown renderers that support HTML)
    if limit is not None:
        copy_button = f"""
<details>
<summary>📋 Copy this response ({limit_text} {status})</summary>

```
{content}
```

</details>"""
    else:
        copy_button = f"""
<details>
<summary>📋 Copy this response ({limit_text})</summary>

```
{content}
```

</details>"""

    if limit is not None:
        footer = f"\n*[Word count: {word_count}/{limit} {status}]*\n"
    else:
        footer = f"\n*[{limit_text}]*\n"

    return f"{header}\n{question_box}\n{content}\n{copy_button}\n{footer}"

def main():
    # Load configuration
    config_path = Path(__file__).parent / 'questions.yaml'
    with open(config_path, 'r') as f:
        config = yaml.safe_load(f)

    # Create output document
    output = []
    output.append("# Nuffield Foundation R&D Fund - Outline Application")
    output.append(f"**Program:** {config['metadata']['program']}")
    output.append(f"**Deadline:** {config['metadata']['deadline']}")
    output.append(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M')}\n")
    output.append("---\n")

    # Summary statistics
    total_sections = len(config['sections'])
    completed_sections = 0
    sections_needing_work = []
    total_word_count = 0
    max_words_available = 0

    # Process each section
    for section in config['sections']:
        # Load response
        response_path = Path(__file__).parent / section['file']
        content, word_count = load_response(response_path)

        # Update stats (skip budget section for word count totals)
        if section.get('word_limit') is not None:
            max_words_available += section['word_limit']
            total_word_count += word_count

        if content:
            limit = section.get('word_limit')
            if limit is None:  # Budget section
                if word_count > 0:
                    completed_sections += 1
            elif word_count > 0 and word_count <= limit:
                completed_sections += 1
            elif word_count > limit:
                sections_needing_work.append({
                    'title': section['title'],
                    'current': word_count,
                    'target': limit,
                    'issue': 'over_limit'
                })
            elif word_count == 0:
                sections_needing_work.append({
                    'title': section['title'],
                    'current': 0,
                    'target': limit,
                    'issue': 'missing'
                })

            # Add formatted section
            output.append(format_section(section, content, word_count))
        else:
            # Missing section
            output.append(f"## {section['title']}\n")
            output.append(f"❌ **MISSING** - {section.get('question', '')}\n")
            limit = section.get('word_limit')
            if limit is not None:
                output.append(f"*[Word count: 0/{limit} ❌]*\n")
            else:
                output.append(f"*[Table format - missing]*\n")
            sections_needing_work.append({
                'title': section['title'],
                'current': 0,
                'target': limit if limit else 'N/A',
                'issue': 'missing'
            })

        output.append("---\n")

    # Add summary at the end
    output.append("\n# Application Status Summary\n")
    output.append(f"- **Sections Complete:** {completed_sections}/{total_sections}")
    output.append(f"- **Completion Rate:** {completed_sections/total_sections*100:.1f}%")
    output.append(f"- **Total Words Used:** {total_word_count}/{max_words_available} ({total_word_count/max_words_available*100:.1f}% of available space)")

    if sections_needing_work:
        output.append("\n## Sections Needing Attention:\n")
        for section in sections_needing_work:
            if section.get('issue') == 'over_limit':
                over_by = section['current'] - section['target']
                output.append(f"- **{section['title']}**: ⚠️ Reduce by {over_by} words ({section['current']}/{section['target']})")
            elif section.get('issue') == 'missing':
                if isinstance(section['target'], int):
                    output.append(f"- **{section['title']}**: ❌ Missing (need up to {section['target']} words)")
                else:
                    output.append(f"- **{section['title']}**: ❌ Missing")

    # Priority questions
    output.append("\n## Priority Questions to Address:\n")
    for pq in config['priority_questions']:
        output.append(f"\n### {pq['id']}. {pq['title']}")
        for area in pq['areas']:
            output.append(f"  - {area}")

    # Assessment criteria
    output.append("\n## Assessment Criteria:\n")
    for criterion in config['assessment_criteria']:
        output.append(f"- {criterion}")

    # Write output
    output_path = Path(__file__).parent / 'ASSEMBLED_OUTLINE.md'
    with open(output_path, 'w') as f:
        f.write('\n'.join(output))

    print(f"✅ Outline application assembled: {output_path}")
    print(f"📊 Completion: {completed_sections}/{total_sections} sections")
    print(f"📝 Word count: {total_word_count}/{max_words_available} words")

    if sections_needing_work:
        print("\n⚠️  Sections needing attention:")
        for section in sections_needing_work:
            if section.get('issue') == 'over_limit':
                print(f"   - {section['title']}: {section['current']}/{section['target']} words (OVER LIMIT)")
            else:
                print(f"   - {section['title']}: MISSING")

    # Exit with error code if incomplete
    if completed_sections < total_sections:
        return 1
    return 0

if __name__ == "__main__":
    exit(main())
