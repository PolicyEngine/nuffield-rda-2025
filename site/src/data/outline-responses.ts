// Outline application responses - synced from docs/outline/responses/

export const responses = {
  a_project_summary: `PolicyEngine's free microsimulation model enables analysis of tax and benefit policies at household and national levels. Following successful elite adoption—including an HM Treasury pilot and integration with major think tanks—this project scales proven capabilities to civil society. Building on Nuffield-funded infrastructure (local disaggregation, AI pilot, training program), we will enhance accessibility through AI-powered report authoring, expand coverage with council tax modeling, and scale community engagement through training and partnerships. This enables local media, MPs, and civil society organizations to analyze any policy proposal with the same tools trusted by government, democratizing evidence-based policymaking.`,

  b_research_questions: `This project addresses three interconnected research questions about democratizing policy analysis:

**1. How can AI democratize access to elite-grade policy analysis tools while maintaining accuracy and trust?**

We will develop and evaluate AI-powered report authoring tools that translate natural language queries into rigorous microsimulation analysis. By measuring user comprehension, accuracy of AI-generated outputs, and trust levels across different stakeholder groups, we will establish best practices for responsible AI deployment in policy analysis.

**2. What is the impact of providing local policymakers and civil society with constituency-level microsimulation capabilities?**

Building on our Nuffield-funded local disaggregation work, we will assess how access to constituency-level analysis affects policy engagement by MPs, local media, and community organizations. We will track usage patterns, measure quality of policy discourse, and evaluate whether local granularity increases evidence-based decision-making.

**3. Can rapid-response evidence provision improve the quality and inclusivity of policy debates during critical moments?**

During Budget announcements and election periods, we will evaluate whether 48-hour policy analysis turnaround affects media coverage quality, parliamentary debate, and public understanding, comparing periods with and without rapid PolicyEngine analysis.`,

  c_case_for_importance: `This project addresses a critical inflection point: elite institutions have validated PolicyEngine—HM Treasury published an official algorithmic transparency record of their pilot, and our estimates consistently align with the Institute for Fiscal Studies and Resolution Foundation—yet civil society lacks equivalent access to rigorous policy analysis.

The previous Nuffield grant built comprehensive infrastructure (650 parliamentary constituencies, childcare modeling, AI pilot, validation dashboards). This investment exceeded expectations: rather than serving only under-resourced think tanks, it attracted the UK's most powerful policy institutions. This success creates an unprecedented opportunity to democratize elite-grade analysis.

The project is distinctive in combining proven technical capacity with strategic timing. Budget cycles and election periods create natural experiments for evaluating rapid evidence provision. Our constituency-level data, developed with Nuffield support, enables at-scale partnerships with local media and MPs that were previously impossible.

This directly addresses Nuffield priorities: building trustworthy institutions through evidence democratization (Priority 5), ensuring AI technology benefits all stakeholders not just elites (Priority 3), and advancing prosperity through more informed, inclusive policy debates (Priorities 1 and 2). The research capitalizes on substantial previous investment while addressing new questions about scaling technical tools to democratic participation.`,

  d_outcomes_and_influence: `**Expected Impact Types:**
- Informing policy/legislative change (Budgets, manifestos)
- Improving understanding of distributional consequences
- Building capability across diverse stakeholders
- Changing attitudes about evidence accessibility

**Impact Pathways:**

Our outputs will directly inform policy debates during critical moments. The policy response buffer ensures Budget analysis reaches media and MPs within 48 hours of announcements, when public attention peaks. The poverty dashboard will provide real-time tracking of child poverty—a major government priority—enabling accountability and evidence-based policy adjustments.

**Dissemination and Influencing Strategy:**

We will prioritize four audience segments with tailored engagement:

**1. Government and Parliament (direct influence):**
Parliamentary constituency toolkit and training sessions enable MPs and officials to analyze local impacts of any policy proposal. Building on existing relationships with HM Treasury and parliamentary groups.

**2. Media (public discourse):**
Local media training program reaches journalists serving 650 constituencies, multiplying our reach through regional coverage. National media workshops ensure Budget analysis appears in quality outlets within news cycles.

**3. Civil Society (inclusive representation):**
NGO and charity training workshops provide the same free tools used by government, leveling the playing field. Pre-built templates lower barriers to evidence-based advocacy while maintaining our strict political neutrality.

**4. Research Community (knowledge generation):**
Conference presentations (6-8 over two years) and annual user symposia share findings with academic economists and policy researchers. Open-source outputs enable replication and extension.

Our success metrics include adoption by target audiences, media citations during policy moments, parliamentary usage, and measurable improvements in evidence quality within policy debates compared to baseline periods.`,

  e_methods_approach_activities: `Our project comprises three interconnected workstreams, each building on previous Nuffield-funded infrastructure while addressing scaling challenges identified through elite adoption.

**WORKSTREAM 1: ACCESSIBILITY THROUGH TECHNOLOGY (£110k, 13.5 person-months)**

**AI-Powered Report Authoring (£53k, 6pm)**

Building on our proven AI pilot from the previous grant, we will develop production-ready natural language interfaces for policy analysis. Users will query in plain English ("How much would increasing Child Benefit by £10/week cost?") and receive rigorous analysis with charts, tables, and distributional impacts.

Methods: We will employ large language models (Claude, GPT-4) to parse queries, extract policy parameters, invoke our Python microsimulation engine, and generate formatted reports. Quality assurance includes: (1) validation against known policy costings, (2) expert review of AI-generated explanations, (3) user comprehension testing across stakeholder groups, (4) bias auditing to ensure neutrality.

Deliverables: Natural language query interface, automated chart generation, PDF/Word/HTML export, template library for common analyses.

**OBR/HMT Validation Integration (£28k, 3.5pm)**

We will create automated validation dashboards comparing PolicyEngine estimates against official Office for Budget Responsibility and HM Treasury projections. When discrepancies exceed thresholds, the system will flag them and generate explanatory notes about differing assumptions.

Methods: Systematic collection of official costings, automated comparison algorithms, discrepancy analysis, public-facing dashboard updated with each model release.

**Local Media and Parliamentary Tools (£35k, 4pm)**

We will develop constituency-specific features and training programs: enhanced web application views showing "Your Constituency at a Glance," automated local impact report generation, and workshops with regional press associations and parliamentary staff.

Methods: UI/UX enhancements for constituency views, reusable report templates, training curriculum development, partnership coordination with regional media and parliamentary offices.

**WORKSTREAM 2: MODEL ENHANCEMENT AND POLICY RESPONSE (£82k, 9pm)**

**Council Tax Integration (£32k, 4pm)**

We will add council tax to our microsimulation, enabling analysis of combined local and national tax burdens. This addresses a significant gap—existing models typically omit local taxation despite its £40bn annual revenue and substantial distributional effects.

Methods: Following our proven test-driven development approach used for childcare subsidies, we will: (1) implement council tax bands and local authority rates from MHCLG data, (2) create validation test cases from published examples, (3) compare aggregate outputs against administrative totals, (4) validate distributional impacts against external analyses.

Deliverables: Council tax calculation by band and local authority, integration with national tax-benefit model, validation report, policy analysis examples.

**Policy Response Buffer (£50k, 5pm)**

Reserve capacity for rapid response to Budgets, manifestos, and emerging policy proposals. This flexible allocation can include model enhancements (VAT improvements, monthly data integration) if situations warrant.

Methods: Rapid analysis protocols ensuring 48-hour turnaround from Budget announcement to published analysis. Template-based report generation, pre-positioning of common reform scenarios, weekend/urgent response capacity.

Deliverables: Analysis of 2 Spring Budgets (March), 2 Autumn Budgets (October/November), election manifestos, ad-hoc requests. Model enhancements as needed.

**WORKSTREAM 3: COMMUNITY SCALING AND EVIDENCE DEMOCRATIZATION (£132k, 18pm)**

**External Citations and Adoption Program (£40k, 5pm)**

Rather than a fixed training schedule, we will employ a flexible, output-oriented approach targeting 50+ external citations and reports using PolicyEngine over 24 months. As AI features improve tool accessibility, we will focus on discovering user needs and providing tailored support.

Methods: Hybrid training sessions (virtual and in-person as needed), regional visits to local organizations, smaller community-building events, user needs discovery interviews, tailored technical support. We will track citations in external reports, media coverage, and parliamentary references as success metrics.

**Annual User Symposia (£25k, 2pm)**

Continue the successful symposium model: annual gatherings of 50-100 PolicyEngine users for case study presentations, methodology discussions, and networking.

Methods: Venue arrangement (London-based for accessibility), user presentation curation, expert panel discussions, feedback collection for product development.

**Poverty and Child Poverty Dashboard (£32k, 4pm)**

Public-facing dashboard providing real-time poverty metrics and policy scenario comparisons, with particular focus on child poverty given current policy salience.

Methods: Dashboard development using established visualization libraries (Plotly), integration with microsimulation outputs, scenario comparison interface, public deployment and promotion.

**Civil Society and Conference Engagement (£50k, 5pm)**

Training for NGOs and charities, presentations at major economics conferences (6-8 total), and professional CRM system for engagement tracking.

Methods: Workshop development and delivery for civil society, conference paper development and presentation, CRM implementation and user segmentation.

**QUALITY ASSURANCE AND EVALUATION**

All workstreams employ: test-driven development, expert advisory board review, beta testing with target users, and transparent validation against external benchmarks. We will track adoption metrics, usage patterns during policy moments, and comparative quality of evidence cited in media and parliamentary debates.`,

  f_research_engagement_team: `**Max Ghenis** (PI, PolicyEngine CEO, 40% FTE) will supervise all workstreams and lead dissemination strategy and stakeholder engagement. Max previously founded the UBI Center and served as a data scientist at Google. He holds degrees from UC Berkeley (B.A. Operations Research) and MIT (M.S. Development Economics).

**Nikhil Woodruff** (Co-I, PolicyEngine CTO and UK Director, 50% FTE) leads technical development and UK operations. Nikhil holds a B.Sc. in Computer Science from Durham University and previously served as UBI Center UK Research Director. He will supervise contractor developers and coordinate with advisory board members. (Note: FTE adjusted from previous grant due to other commitments.)

**Vahid Ahmadi** (UK Research Associate, 87% FTE) focuses on model development (council tax), policy analysis production, and user support. Vahid brings experience in UK economic policy modeling and will support training and outreach activities.

**Anthony Volk** (Full-stack Engineer, contractor, 40% FTE) leads UI development including AI authoring interface and constituency toolkit. Anthony conducted infrastructure research at the Institute for State Effectiveness and holds degrees from Harvard University.

**Pavel Makarchuk** (Policy Modeling Manager, contractor, 15% FTE) supports model development drawing on his experience leading our US and Canada rules engines. Bachelor's degree in Economics from Marist College.

Max and Nikhil will jointly lead dissemination and influencing strategy. All team members contribute to dissemination through their respective channels (technical, policy, outreach).`,

  g_budget: `| Budget Category | Amount (£) |
|----------------|-----------|
| Staff costs: PI Time | 76,800 |
| Staff costs: Co-I Time | 96,000 |
| Staff costs: Team Members | 75,000 |
| Staff costs: Consultants | 12,000 |
| Staff costs: Overheads and Estate costs | 28,000 |
| Non staff costs: Qualitative research | 0 |
| Non staff costs: Quantitative research | 0 |
| Non staff costs: Communications and stakeholder engagement | 55,200 |
| Non staff costs: Equipment | 14,000 |
| Non staff costs: Other direct costs | 21,000 |
| **Grand Total** | **324,000** |`,

  h_bibliographic_references: `HM Treasury (2024). *Algorithmic Transparency Recording Standard: HMT Modelling - Policy Engine*. Retrieved from https://www.gov.uk/algorithmic-transparency-records/hmt-modelling-policy-engine

Ministry of Housing, Communities and Local Government (MHCLG) (2024). *Council Tax Statistics*. Retrieved from https://www.gov.uk/government/collections/council-tax-statistics

Office for Budget Responsibility (2024). *Economic and Fiscal Outlook*. Retrieved from https://obr.uk/efo/economic-and-fiscal-outlook-october-2024/

PolicyEngine (2024). *PolicyEngine UK Validation Dashboard*. Retrieved from https://policyengine-uk-validation.streamlit.app

PolicyEngine (2024). *Labour Party Manifesto Analysis*. Retrieved from https://policyengine.org/uk/research/labour-manifesto-2024

PolicyEngine (2024). *Autumn Budget 2024 Analysis*. Retrieved from https://policyengine.org/uk/research/autumn-budget-2024

Woodruff, N., & Ghenis, M. (2024). *Enhancing UK Household Microdata for Policy Analysis*. International Journal of Microsimulation (under peer review).

Digital Public Goods Alliance (2024). *Digital Public Goods Registry: PolicyEngine*. Retrieved from https://digitalpublicgoods.net/registry/policyengine.html`
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
  a_project_summary: 93,
  b_research_questions: 178,
  c_case_for_importance: 200,
  d_outcomes_and_influence: 279,
  e_methods_approach_activities: 725,
  f_research_engagement_team: 183,
  g_budget: 0, // Table format
  h_bibliographic_references: 67
}

export const wordLimits = {
  a_project_summary: 100,
  b_research_questions: 200,
  c_case_for_importance: 200,
  d_outcomes_and_influence: 300,
  e_methods_approach_activities: 750,
  f_research_engagement_team: 250,
  g_budget: null,
  h_bibliographic_references: 350
}
