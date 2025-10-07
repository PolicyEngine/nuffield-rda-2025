#!/usr/bin/env python3
"""
Sync markdown content from docs/ to site/src/views/
This script updates the React components with content from markdown files.
"""

import os
import sys
from pathlib import Path

# Add project root to path
project_root = Path(__file__).parent.parent
sys.path.insert(0, str(project_root))

def main():
    """Sync content from docs to site."""
    print("Content sync script")
    print("=" * 50)

    docs_dir = project_root / "docs"
    site_views_dir = project_root / "site" / "src" / "views"

    print(f"Docs directory: {docs_dir}")
    print(f"Site views directory: {site_views_dir}")

    if not docs_dir.exists():
        print("Error: docs directory not found")
        return 1

    if not site_views_dir.exists():
        print("Error: site/src/views directory not found")
        return 1

    print("\nContent is currently embedded in React components.")
    print("To update content, edit the .tsx files in site/src/views/")
    print("\nFuture enhancement: This script could parse markdown files")
    print("and generate React components automatically.")

    return 0

if __name__ == "__main__":
    sys.exit(main())
