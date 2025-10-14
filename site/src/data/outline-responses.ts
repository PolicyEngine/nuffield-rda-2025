// Auto-generated from docs/outline/responses/*.md
// DO NOT EDIT DIRECTLY - Run: python3 scripts/sync_content.py

export const responses = {
  a_project_summary: `PolicyEngine's open-source microsimulation model enables tax and benefit policy analysis at household, local, and national levels. Following successful elite adoption—including an HM Treasury pilot and use by major think tanks—this three-year project enhances the model's capacity to provide evidence on the UK's most critical policy issues. We will expand coverage with council tax modelling, integrate policy-critical datasets (OBR projections, DWP data), develop AI capabilities for natural language insights, and ensure rapid Budget response. Through targeted roundtables and research partnerships with expert stakeholders and local organisations, we ensure microsimulation evidence informs policy debates when decisions are made.`,

  b_research_questions: `This three-year project addresses interconnected research questions about using microsimulation to inform policy decisions:

**1. How can AI enable broader use of microsimulation evidence for policy decisions through evolving interfaces while maintaining accuracy and trust?**

Building on our current grant's natural language microsimulation insights, we will develop household-level AI capabilities, Model Context Protocol (MCP) servers for AI assistant integration, and explore emerging platforms. Tracking comprehension, accuracy, and trust across interfaces over three years establishes best practices for AI-enabled policy analysis.

**2. How does integrating authoritative datasets enhance microsimulation's capacity to inform policy on critical issues?**

We will assess how integrated OBR projections (enabling validation against official forecasts) and DWP enrollment data (combining simulation with actual programme participation) improve the model's ability to address policy questions around child poverty, benefit reform, and fiscal sustainability—issues central to current UK policy debates.

**3. What outreach strategies maximise adoption among both expert stakeholders and under-resourced local organisations?**

Through a dedicated research staff member partnering on research questions, targeted roundtables, and constituency-level analysis, we will identify effective approaches for engaging expert feedback while establishing effective adoption at the local level.`,

  c_case_for_importance: `This project addresses a critical need: validating and enhancing microsimulation's capacity to inform policy on the UK's most pressing issues. Elite institutions have validated PolicyEngine—HM Treasury published an official algorithmic transparency record (HM Treasury, 2024), and our estimates align with IFS, OBR, and Resolution Foundation. Building on this validation, we will expand the model's capabilities to address policy questions these institutions face.

The previous Nuffield grant (Nuffield Foundation, 2024) built infrastructure (650 constituencies, childcare modelling (PolicyEngine, 2024a), AI pilot, validation dashboards) proving valuable beyond expectations to the UK's most powerful policy institutions. This demonstrates the model's relevance for critical policy questions and creates opportunity to enhance capacity further.

The project combines proven capacity with strategic timing and sustained AI development. Budget cycles and elections create natural experiments for evidence evaluation. Our constituency data enables partnerships with local media and MPs. The three-year timeline tracks AI evolution while building dataset integrations enhancing model capacity and validation.

This addresses Nuffield's interests in trustworthy institutions through evidence-based policymaking, technology serving society's needs, and prosperity through better-informed decisions on poverty and fiscal sustainability. The research capitalises on substantial previous investment while addressing how microsimulation can inform the UK's most critical policy questions.`,

  d_outcomes_and_influence: `This project will inform policy and legislative change during critical moments (Budgets, manifestos), improve understanding of distributional consequences, and build capability across diverse stakeholders.

Our outputs directly inform policy debates when public attention peaks. Our rapid Budget analysis capacity ensures findings reach media and MPs within 48 hours of announcements. The poverty dashboard provides real-time tracking of child poverty—a major government priority—enabling accountability and evidence-based policy adjustments.

We prioritise four audience segments with tailored engagement:

**Government and Parliament:** Parliamentary constituency toolkit and targeted sessions enable MPs and officials to analyse local impacts, building on HM Treasury relationships.

**Media:** Programme reaches journalists serving 650 constituencies through regional coverage, while national workshops ensure Budget analysis appears in quality outlets within news cycles.

**Civil Society:** Workshops equip NGOs and charities with the same tools used by government. Pre-built templates lower barriers while maintaining strict political neutrality.

**Research Community:** Conference presentations (9-12 over three years) and annual symposia share findings with academic economists, with open-source outputs enabling replication.

Our success metrics include adoption by target audiences, media citations during policy moments, parliamentary usage, and measurable improvements in evidence quality within policy debates compared to baseline periods.`,

  e_methods_approach_activities: `Our three-year project comprises interconnected workstreams building on previous Nuffield-funded infrastructure while addressing scaling challenges identified through elite adoption.

**WORKSTREAM 1: AI-POWERED ACCESSIBILITY AND DATA INTEGRATION**

**Multi-Surface AI Integration**

Our current grant launches natural language microsimulation insights and policy interaction explanations. We expand these over three years: Year 1 develops natural language query interfaces, household-level AI capabilities, and Model Context Protocol (MCP) servers—standardised interfaces enabling AI assistants to access PolicyEngine programmatically; Years 2-3 monitor and integrate with emerging AI surfaces as they become available (e.g., ChatGPT's recently announced external app support (OpenAI, 2025)).

Methods: LLM integration (Claude, GPT-4), MCP development, validation against known costings, expert review, user testing, bias auditing. We track accuracy, trust, and usage patterns (Research Question 1).

**Dataset Integration for Enhanced Value**

We integrate authoritative datasets including OBR projections (enabling "PolicyEngine vs official forecasts" comparisons), DWP enrollment data (combining simulation with actual take-up patterns), and others from ONS, HMT, and HMRC as needed. This addresses Research Question 2 by measuring how dataset integration affects user confidence and research partnerships.

Methods: Data collection protocols, automated comparison algorithms, discrepancy analysis, public dashboards, API development, historical integration.

**WORKSTREAM 2: MODEL ENHANCEMENT AND POLICY RESPONSE**

**Council Tax Integration**

We will add council tax to microsimulation, enabling combined local and national tax burden analysis. This addresses a significant gap—existing models omit local taxation despite £40bn annual revenue.

Methods: Test-driven development (proven with childcare (PolicyEngine, 2024a)): (1) implement council tax bands and local authority rates from MHCLG data (MHCLG, 2024), (2) validation test cases, (3) compare against administrative totals, (4) validate distributional impacts.

Deliverables: Council tax by band and local authority, national model integration, validation report, policy examples.

**Budget and Policy Moment Analysis**

We will provide rapid-response analysis for critical policy moments: (1) Spring Budget analysis (distributional impacts, household examples, regional breakdowns); (2) Autumn Budget analysis; (3) Election manifesto comparisons; (4) Ad hoc urgent requests. Flexible allocation permits model enhancements if needed.

Methods: 48-hour turnaround protocols, template-based generation, pre-positioned scenarios, weekend capacity. Each Budget requires 1-2 person-weeks intensive work.

Deliverables: 3 Spring Budgets, 3 Autumn Budgets (e.g., PolicyEngine, 2024c), manifestos (e.g., PolicyEngine, 2024b), ad hoc requests, model enhancements (VAT, monthly data) as needed.

**WORKSTREAM 3: RESEARCH PARTNERSHIPS AND COMMUNITY ENGAGEMENT**

**Local Media and Parliamentary Outreach**

We will develop constituency-specific features and coordinate targeted engagement: enhanced web views showing "Your Constituency at a Glance," automated local reports, roundtables with regional press, workshops with parliamentary staff.

Methods: UI/UX enhancements (Citizen Codex design agency), report templates, roundtable/workshop development, partnership coordination.

**Expert Engagement and Local Market Development**

A dedicated research staff member balances: (1) engaging expert stakeholders for feedback and validation, and (2) establishing effective adoption among local organisations and under-resourced groups new to microsimulation. Target: 75+ external citations over three years through research partnerships.

Methods: Targeted expert roundtables, research partnership development, regional workshops with local councils, user needs discovery, co-creation with new organisations. Track citations, partnerships, and adoption patterns (Research Question 3).

**Annual User Symposia**

We will host three annual gatherings: 50-100 PolicyEngine users, case study presentations, methodology discussions, networking.

Methods: London venue arrangement, user presentation curation, expert panels, feedback collection.

**Poverty and Child Poverty Dashboard**

We will develop a public dashboard with real-time poverty metrics and policy scenario comparisons, focusing on child poverty given policy salience.

Methods: Dashboard development (Plotly), microsimulation integration, scenario comparison, public deployment.

**Civil Society Workshops and Academic Dissemination**

We will deliver specialised NGO/charity workshops, 9-12 conference presentations over three years, and implement a professional CRM for user segment tracking.

Methods: Workshop development/delivery, conference papers, CRM implementation with segmentation.

**QUALITY ASSURANCE AND EVALUATION**

All workstreams employ test-driven development, expert review, beta testing, and transparent external validation. We track adoption metrics, usage during policy moments, and evidence quality in debates.`,

  f_research_engagement_team: `**Max Ghenis** (PI, PolicyEngine CEO, 25% FTE) will supervise all workstreams and lead dissemination strategy and stakeholder engagement. Max previously founded the UBI Center and served as a data scientist at Google. He holds degrees from UC Berkeley (B.A. Operations Research) and MIT (M.S. Development Economics).

**Nikhil Woodruff** (PolicyEngine CTO and UK Director, 25% FTE) leads technical development and UK operations. Nikhil holds a B.Sc. in Computer Science from Durham University and previously served as UBI Center UK Research Director. He will supervise contractor developers and coordinate with advisory board members.

**Vahid Ahmadi** (UK Research Associate, 75% FTE) serves as the dedicated research staff member leading outreach and partnership development. Previously a pre-doctoral researcher at the Centre for Macroeconomics at the London School of Economics, Vahid holds an M.Sc. in Economics from the University of Munich and a B.Sc. in Electrical Engineering from Sharif University of Technology. He focuses on model development (council tax), policy analysis production, and coordinating targeted roundtables, workshops, and research partnerships balancing expert stakeholder engagement with fostering adoption among local organisations.

**Anthony Volk** (Full-stack Engineer, contractor, 22% FTE) leads UI development including AI authoring interface and constituency toolkit. Anthony conducted infrastructure research at the Institute for State Effectiveness and holds degrees from Harvard University.

Max will lead dissemination and influencing strategy with support from Nikhil. All team members contribute to dissemination through their respective channels (technical, policy, outreach).`,

  g_budget: `| Budget Category | Amount (£) |
|----------------|-----------|
| Staff costs: PI Time | 60000 |
| Staff costs: Co-I Time | 0 |
| Staff costs: Team Members | 152000 |
| Staff costs: Consultants | 48000 |
| Staff costs: Overheads and Estate costs | 28000 |
| Non staff costs: Qualitative research | 0 |
| Non staff costs: Quantitative research | 0 |
| Non staff costs: Communications and stakeholder engagement | 50000 |
| Non staff costs: Equipment | 8000 |
| Non staff costs: Other direct costs | 34000 |
| **Grand Total** | **380000** |

**Notes for application form (numbers only, no decimals/symbols):**
- PI Time: 60000
- Co-I Time: 0
- Team Members: 152000
- Consultants: 48000
- Overheads: 28000
- Communications: 50000
- Equipment: 8000
- Other direct: 34000
- **Grand total: 380000**`,

  h_bibliographic_references: `HM Treasury (2024). *Algorithmic Transparency Recording Standard: HMT Modelling - Policy Engine*. Retrieved from https://www.gov.uk/algorithmic-transparency-records/hmt-modelling-policy-engine

Ministry of Housing, Communities and Local Government (2024). *Council Tax Statistics*. Retrieved from https://www.gov.uk/government/collections/council-tax-statistics

Nuffield Foundation (2024). *Enhancing, localising and democratising tax-benefit policy analysis*. Retrieved from https://www.nuffieldfoundation.org/project/enhancing-localising-and-democratising-tax-benefit-policy-analysis

OpenAI (2025). *Introducing apps in ChatGPT*. Retrieved from https://openai.com/index/introducing-apps-in-chatgpt/

PolicyEngine (2024a). *Childcare programmes in PolicyEngine UK*. Retrieved from https://policyengine.org/uk/research/uk-childcare-report

PolicyEngine (2024b). *The Labour Party Manifesto*. Retrieved from https://policyengine.org/uk/research/labour-2024-manifesto

PolicyEngine (2024c). *Autumn Budget 2024 policy choices*. Retrieved from https://policyengine.org/uk/research/autumn-budget-2024-policy-choices`,

}

// Word count helper
export function countWords(text: string): number {
  // Remove markdown and HTML
  const clean = text
    .replace(/<!--.*?-->/gs, '')
    .replace(/[#*\-|`\[\]()]/g, '')
    .replace(/\n+/g, ' ')
  return clean.split(/\s+/).filter(w => w.length > 0).length
}

export const wordCounts = {
  a_project_summary: 96,
  b_research_questions: 185,
  c_case_for_importance: 198,
  d_outcomes_and_influence: 192,
  e_methods_approach_activities: 617,
  f_research_engagement_team: 232,
  g_budget: 0,
  h_bibliographic_references: 79,
}

export const wordLimits = {
  a_project_summary: 100,
  b_research_questions: 200,
  c_case_for_importance: 200,
  d_outcomes_and_influence: 300,
  e_methods_approach_activities: 750,
  f_research_engagement_team: 250,
  g_budget: null,
  h_bibliographic_references: 350,
}

export const totalBudget = 380000
