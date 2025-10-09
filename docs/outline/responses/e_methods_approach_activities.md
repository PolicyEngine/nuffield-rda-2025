<!-- E) Methods, Approach and Activities -->
<!-- Maximum 750 words -->

Our project comprises three interconnected workstreams, each building on previous Nuffield-funded infrastructure while addressing scaling challenges identified through elite adoption.

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

All workstreams employ: test-driven development, expert advisory board review, beta testing with target users, and transparent validation against external benchmarks. We will track adoption metrics, usage patterns during policy moments, and comparative quality of evidence cited in media and parliamentary debates.