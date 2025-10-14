// Auto-generated from docs/outline/project_portfolio.md
// DO NOT EDIT DIRECTLY - Run: python3 scripts/sync_content.py

export interface Component {
  title: string
  cost: number
  effort: string
  description: string
  details?: string
  researchQuestion?: string
}

export interface Workstream {
  id: string
  title: string
  icon: string
  total: number
  personMonths: number
  components: Component[]
}

export interface ResearchQuestion {
  title: string
  question: string
}

export interface PortfolioData {
  totalBudget: number
  duration: number
  workstreams: Workstream[]
  researchQuestions: ResearchQuestion[]
}

export const portfolioData: PortfolioData = {
  "totalBudget": 380000,
  "duration": 36,
  "workstreams": [
    {
      "id": "ai_powered_accessibi",
      "title": "AI-POWERED ACCESSIBILITY AND DATA INTEGRATION",
      "icon": "\ud83e\udd16",
      "total": 108000,
      "personMonths": 13.0,
      "components": [
        {
          "title": "Multi-Surface AI Integration",
          "cost": 68000,
          "effort": "8.5 pm",
          "description": "**Why:** Builds on current grant's launch of natural language microsimulation insights; positions PolicyEngine where users work",
          "details": "Builds on current grant's launch of natural language microsimulation insights; positions PolicyEngine where users work",
          "researchQuestion": "How can AI democratise access to elite-grade policy analysis tools through evolving interfaces while maintaining accuracy and trust?"
        },
        {
          "title": "Dataset Integration for Enhanced Value",
          "cost": 40000,
          "effort": "5 pm",
          "description": "**Key Datasets:**\n- **OBR projections:** Enable \"PolicyEngine vs official forecasts\" comparison reports\n- **DWP enrollment data:** Combine policy simulation with actual benefit take-up patterns",
          "details": "Addresses expert validation needs and enables richer analysis combining microsimulation with administrative data",
          "researchQuestion": "How does integrating authoritative datasets enhance the value and trustworthiness of microsimulation tools?"
        }
      ]
    },
    {
      "id": "model_enhancement_an",
      "title": "MODEL ENHANCEMENT AND POLICY RESPONSE",
      "icon": "\ud83e\udd1d",
      "total": 77000,
      "personMonths": 8.5,
      "components": [
        {
          "title": "Council Tax Integration",
          "cost": 32000,
          "effort": "4 pm",
          "description": "**Why:** Significant gap\u2014existing models omit local taxation despite \u00a340bn annual revenue and substantial distributional effects",
          "details": "Significant gap\u2014existing models omit local taxation despite \u00a340bn annual revenue and substantial distributional effects",
          "researchQuestion": null
        },
        {
          "title": "Budget and Policy Moment Analysis",
          "cost": 45000,
          "effort": "5 pm",
          "description": "**Specific Allocations:**\n1. **Spring Budget analysis** (March): Comprehensive distributional analysis, household examples, regional breakdowns\n2. **Autumn Budget analysis** (October/November): Simila",
          "details": "Proven demand from Treasury/No 10; critical moments when evidence has maximum impact",
          "researchQuestion": null
        }
      ]
    },
    {
      "id": "research_partnership",
      "title": "RESEARCH PARTNERSHIPS AND COMMUNITY ENGAGEMENT",
      "icon": "\ud83e\udd1d",
      "total": 195000,
      "personMonths": 25.5,
      "components": [
        {
          "title": "Local Media and Parliamentary Outreach",
          "cost": 35000,
          "effort": "4 pm",
          "description": "**Activities:**\n- Enhanced web app views: \"Your Constituency at a Glance\"\n- Automated local impact report generation\n- Roundtables with regional press associations\n- Workshops with parliamentary staff",
          "details": "Capitalises on 650 constituencies of data from previous grant",
          "researchQuestion": null
        },
        {
          "title": "Expert Engagement and Local Adoption Development",
          "cost": 53000,
          "effort": "7 pm",
          "description": "**Led by:** Dedicated research staff member (Vahid Ahmadi)",
          "details": "- Targeted roundtables with expert users",
          "researchQuestion": "What outreach strategies maximise adoption among both expert stakeholders and under-resourced local organisations?"
        },
        {
          "title": "Annual User Symposia",
          "cost": 25000,
          "effort": "2 pm",
          "description": "**Deliverables:**\n- 3 annual symposia (one per year)\n- 50-100 participants each\n- Case study presentations\n- Expert panel discussions",
          "details": "Proven success from previous grant",
          "researchQuestion": null
        },
        {
          "title": "Poverty and Child Poverty Dashboard",
          "cost": 32000,
          "effort": "4 pm",
          "description": "**Deliverables:**\n- Public-facing dashboard with real-time poverty metrics\n- Child poverty deep-dive analysis\n- Policy scenario comparison interface",
          "details": "Child poverty is major government priority; demonstrates real-world impact",
          "researchQuestion": null
        },
        {
          "title": "Civil Society Workshops and Academic Dissemination",
          "cost": 50000,
          "effort": "5 pm",
          "description": "**Activities:**\n- Specialised workshops for NGOs and charities\n- 9-12 conference presentations over three years\n- Professional CRM system for user segment tracking",
          "details": "- Workshop series development and delivery",
          "researchQuestion": null
        }
      ]
    }
  ],
  "researchQuestions": [
    {
      "title": "AI Evolution",
      "question": "How can AI democratise access to elite-grade policy analysis tools through evolving interfaces while maintaining accuracy and trust?"
    },
    {
      "title": "Dataset Value",
      "question": "How does integrating authoritative datasets (OBR, DWP) enhance the value and trustworthiness of microsimulation tools?"
    },
    {
      "title": "Outreach Strategies",
      "question": "What outreach approaches maximise adoption among both expert stakeholders and under-resourced local organisations?"
    }
  ]
}
