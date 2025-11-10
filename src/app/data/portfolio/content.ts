import { Content } from "./content.model";

export const content: Content[] = [
  {
    "title": "Replacing an Excel Form with a Connected Web Experience",
    "bannerImageUrl": "assets/imgs/custom software.png",
    "content": "<section>\n  <p>The finance team lived inside a monolithic Excel workbook. Every quarter, plant managers downloaded a copy, filled in tabs, and emailed the file back. Version drift was constant. Totals broke whenever someone added a column. No one knew which assumptions were up to date.</p>\n  <p>Rather than attempt a big-bang rewrite, we introduced a series of baby steps to ease the transition from spreadsheet to platform.</p>\n</section>\n<section>\n  <h2>Step 1: Document the Workbook DNA</h2>\n  <ul>\n    <li>Exported every tab, field, macro, and formula to a schema table using Python + openpyxl.</li>\n    <li>Interviewed the three power users to understand validation rules that only existed in their heads.</li>\n    <li>Tagged each field with a systems-of-record mapping (ERP, data warehouse, or manual entry).</li>\n  </ul>\n</section>\n<section>\n  <h2>Step 2: Ship a Read-Only Web View</h2>\n  <p>We created a Power Pages site that surfaced the same KPIs as the Excel dashboard but sourced directly from Dataverse and Azure SQL. Users could still download the workbook, but they started to trust the web view for answers.</p>\n</section>\n<section>\n  <h2>Step 3: Componentize the Form Inputs</h2>\n  <ol>\n    <li>Rebuilt each Excel tab as a low-code form component with server-side validation.</li>\n    <li>Embedded the components inside Dynamics + Teams so managers stayed in their daily apps.</li>\n    <li>Logged every submission with version metadata so audit trails replaced mystery attachments.</li>\n  </ol>\n</section>\n<section>\n  <h2>Results</h2>\n  <p>Within two releases we eliminated the emailed workbook, dropped cycle time by 40%, and finally had a centralized system feeding analytics without manual consolidation.</p>\n</section>",
    "id": 1,
    "slug": "replacing-an-excel-form-with-a-connected-web-experience",
    "author": "Charles Weise",
    "date": "6/10/2025",
    "bannerImageUrlZoom": "assets/imgs/custom software_zoom.png",
    "contentType": "blog",
    "description": "How to sunset an Excel workbook using a staged Power Platform rollout that keeps stakeholders comfortable.",
    "list_items": [
      "Inventory the workbook schema and tribal rules",
      "Launch a read-only KPI portal before touching inputs",
      "Componentize form sections with centralized validation",
      "Log submissions for audit + analytics"
    ]
  },
  {
    "title": "Creating a Copilot Agent for Every Data Store",
    "bannerImageUrl": "assets/imgs/projects-copilot.png",
    "content": "<section>\n  <p>Most enterprises don’t have a single source of truth—they have dozens. SharePoint, Confluence, PLM, Jira, SAP, Snowflake. When leaders ask for an “AI copilot,” the pilot almost always fails because it only talks to one of those systems.</p>\n  <p>Here’s the playbook we used to build a federated copilot that respects every data store’s contracts.</p>\n</section>\n<section>\n  <h2>Foundation: Catalog the Sources</h2>\n  <ul>\n    <li>Documented each repository’s API surface, permissions model, and sensitivity tags.</li>\n    <li>Created metadata adapters that normalize titles, owners, and retention policies.</li>\n    <li>Registered every adapter in Azure API Management so the copilot has a consistent broker.</li>\n  </ul>\n</section>\n<section>\n  <h2>Agents per Store</h2>\n  <p>Instead of a single monolithic bot, we spun up lightweight Function-based agents:</p>\n  <ol>\n    <li><strong>SharePoint Agent:</strong> Handles search with Microsoft Graph, enriches results with taxonomy labels.</li>\n    <li><strong>Snowflake Agent:</strong> Executes governed SQL templates, enforces row-level security via OAuth tokens.</li>\n    <li><strong>Jira Agent:</strong> Uses Atlassian APIs to summarize epics, blocked tickets, and due dates.</li>\n  </ol>\n</section>\n<section>\n  <h2>Copilot Orchestration</h2>\n  <p>Azure OpenAI acts as the reasoning layer, but every response cites the agent and record it used. When the user needs to take action, deep links drop them into the native system so ownership stays intact.</p>\n</section>\n<section>\n  <h2>Security + Observability</h2>\n  <p>All calls run through Azure Monitor + App Insights. We log prompt/response pairs with PII redaction and feed adoption metrics into Power BI.</p>\n</section>",
    "id": 2,
    "slug": "creating-a-copilot-agent-for-every-data-store",
    "author": "Charles Weise",
    "date": "6/12/2025",
    "bannerImageUrlZoom": "assets/imgs/projects-copilot_zoom.png",
    "contentType": "blog",
    "description": "Designing a federated copilot that speaks SharePoint, Snowflake, Jira, and more without breaking governance.",
    "list_items": [
      "Catalog APIs + metadata for every repository",
      "Wrap each store with a dedicated adapter agent",
      "Broker access through Azure API Management",
      "Log all prompts/responses for auditing"
    ]
  },
  {
    "title": "From PDF Attachments to Platform-first Best Practices",
    "bannerImageUrl": "assets/imgs/pdf-to-platform-banner.jpg",
    "content": "<section>\n  <p>Legacy hiring workflows love a static PDF. SMEs author a guidance doc, attach it to an email, and hope recruiters read past page three. Meanwhile, the actual system of record—iCIMS—is blind to who opened the file, which fields were completed, or whether legal reviewed the latest version.</p>\n  <p>This post documents how we retired a 32-page “best practices” PDF and replaced it with a governed, componentized web form experience that lives inside iCIMS and Azure. The lift was under four weeks, cost less than the annual PDF maintenance budget, and finally gave our talent team telemetry they could act on.</p>\n</section>\n<section>\n  <h2>Why PDFs Fail Hiring Teams</h2>\n  <ul>\n    <li><strong>No context:</strong> Candidates receive static attachments without responsive layouts or tooltips, so completion rates drop on mobile.</li>\n    <li><strong>Zero governance:</strong> Every time compliance tweaks language, someone has to regenerate or rediscover the file version.</li>\n    <li><strong>Hidden data:</strong> Nothing flows into iCIMS, which means reporting, reminders, and automation are impossible.</li>\n  </ul>\n</section>\n<section>\n  <h2>Platform Blueprint</h2>\n  <ol>\n    <li><strong>Catalog the PDF:</strong> We used Azure OpenAI to chunk each section, tag required fields, and export a JSON schema.</li>\n    <li><strong>Build a responsive shell:</strong> The schema drove a Power Pages form embedded in an iCIMS custom tab via secure iframe.</li>\n    <li><strong>Wire governance:</strong> Content authors now edit a Markdown/JSON record inside GitHub. Merges trigger automated deployments plus versioning in Azure Blob Storage.</li>\n    <li><strong>Stream telemetry:</strong> Every submission emits an Event Grid notification that updates Power BI adoption dashboards and sends nudges via Teams.</li>\n  </ol>\n</section>\n<section>\n  <h2>icims vs. PDF Outcomes</h2>\n  <p>Post-launch, recruiters stopped chasing attachments. Hiring managers complete the same guidance inside the ATS, and compliance sees an immutable audit trail. Most importantly, the business gained an evergreen best-practices engine instead of a stale file.</p>\n  <blockquote>\n    <p>“Moving the experience into iCIMS gave us <em>contextual</em> coaching. People complete it because it’s right where the work happens.”</p>\n  </blockquote>\n</section>\n<section>\n  <h2>Rollout Checklist</h2>\n  <ul>\n    <li>Retire PDFs in stages—redirect old SharePoint links to the new form.</li>\n    <li>Add inline tips, validation, and ownership metadata to each section.</li>\n    <li>Enable Azure Monitor alerts for failed submissions so no request goes dark.</li>\n    <li>Socialize change through LinkedIn, Instagram, and GitHub releases for transparency.</li>\n  </ul>\n</section>\n<section>\n  <h2>Next Iteration</h2>\n  <p>With the baseline in place, we’re layering in persona-based branching logic, PDF auto-generation for stakeholders who still need a document, and LLM copilots that draft responses directly from prior submissions.</p>\n</section>",
    "id": 12,
    "slug": "from-pdf-attachments-to-platform-first-best-practices",
    "author": "Charles Weise",
    "date": "6/15/2025",
    "bannerImageUrlZoom": "assets/imgs/pdf-to-platform-banner_zoom.jpg",
    "contentType": "blog",
    "description": "How we retired a 32-page PDF and moved best-practice guidance straight into iCIMS with Azure + Power Platform telemetry.",
    "publishOn": "2025-06-15T09:00:00Z",
    "list_items": [
      "Chunked PDFs into JSON schema with Azure OpenAI",
      "Delivered responsive Power Pages form embedded in iCIMS",
      "Automated governance with GitHub + Azure deployments",
      "Captured telemetry for adoption dashboards"
    ]
  },
  {
    "title": "AIA: AI Application in AEC",
    "bannerImageUrl": "assets/imgs/projects-book-cover.png",
    "content": "<h1>Gonna put stuff here</h1>",
    "id": 3,
    "slug": "ai-application-in-aec",
    "author": "Charles Weise",
    "date": "6/14/2025",
    "bannerImageUrlZoom": "assets/imgs/projects-book-cover_zoom.png",
    "contentType": "project",
    "description": "Authoring a pioneering book exploring how artificial intelligence is reshaping the architecture, engineering, and construction industries, offering practical insights and future strategies.",
    "icon": "menu_book",
    "list_items": []
  },
  {
    "title": "Habit Formation for Life Fulfillment",
    "bannerImageUrl": "assets/imgs/projects-app.png",
    "content": "<h1>Gonna put stuff here</h1>",
    "id": 4,
    "slug": "habit-formation-for-life-fulfillment",
    "author": "Charles Weise",
    "date": "6/1/2025",
    "bannerImageUrlZoom": "assets/imgs/projects-app_zoom.png",
    "contentType": "project",
    "description": "Developing a transformational program that guides individuals to define meaningful life goals through reflective questioning and build habits that drive sustainable personal growth.",
    "icon": "self_improvement",
    "list_items": []
  },
  {
    "title": "Copilot Agent for Corporate Intelligence",
    "bannerImageUrl": "assets/imgs/projects-copilot.png",
    "content": "<h1>Gonna put stuff here</h1>",
    "id": 5,
    "slug": "copilot-agent-for-corporate-intelligence",
    "author": "Charles Weise",
    "date": "6/5/2025",
    "bannerImageUrlZoom": "assets/imgs/projects-copilot_zoom.png",
    "contentType": "project",
    "description": "Creating a secure, agnostic Copilot Agent that connects employees to their corporate data assets — even when no formal data lake exists — unlocking actionable intelligence from disparate sources.",
    "icon": "smart_toy",
    "list_items": []
  },
  {
    "title": "Applied AI & Copilot Strategy",
    "bannerImageUrl": "assets/imgs/applied ai.png",
    "content": "<h1>Gonna put stuff here</h1>",
    "id": 6,
    "slug": "applied-ai-copilot-strategy",
    "author": "Charles Weise",
    "date": "6/7/2025",
    "bannerImageUrlZoom": "assets/imgs/applied ai_zoom.png",
    "contentType": "service",
    "description": "Help organizations identify, prototype, and integrate AI-powered copilots and automations using LLMs.",
    "icon": "bolt",
    "list_items": [
      "AI Readiness & ROI Mapping",
      "Prompt Engineering Frameworks",
      "Copilot Use Case Design",
      "LLM Deployment Guidance"
    ]
  },
  {
    "title": "Enterprise Systems & Architecture Design",
    "bannerImageUrl": "assets/imgs/enterprise system.png",
    "content": "<h1>Gonna put stuff here</h1>",
    "id": 7,
    "slug": "enterprise-systems-architecture-design",
    "author": "Charles Weise",
    "date": "5/12/2025",
    "bannerImageUrlZoom": "assets/imgs/enterprise system_zoom.png",
    "contentType": "service",
    "description": "Define and guide scalable, resilient architectures across cloud, identity, and application layers.",
    "icon": "architecture",
    "list_items": [
      "Cloud-native & Hybrid Patterns",
      "API & Data Layer Architecture",
      "Integration Blueprinting",
      "Scalability & Risk Mitigation"
    ]
  },
  {
    "title": "Custom Software Design & Development",
    "bannerImageUrl": "assets/imgs/custom software.png",
    "content": "<h1>Gonna put stuff here</h1>",
    "id": 8,
    "slug": "custom-software-design-develop",
    "author": "Charles Weise",
    "date": "4/1/2025",
    "bannerImageUrlZoom": "assets/imgs/custom software_zoom.png",
    "contentType": "service",
    "description": "Lead end-to-end builds of web platforms, apps, and digital business tools.",
    "icon": "code",
    "list_items": [
      "Agile Product Delivery",
      "Full-stack Implementation",
      "API + Data Integration",
      "Solution Prototyping"
    ]
  },
  {
    "title": "Actionable Analytics & Dashboarding",
    "bannerImageUrl": "assets/imgs/actionable analytics.png",
    "content": "<h1>Gonna put stuff here</h1>",
    "id": 9,
    "slug": "actionable-analytics-dashboarding",
    "author": "Charles Weise",
    "date": "3/13/2025",
    "bannerImageUrlZoom": "assets/imgs/actionable analytics_zoom.png",
    "contentType": "service",
    "description": "Convert raw data into dashboards and insight systems that drive decision-making.",
    "icon": "bar_chart",
    "list_items": [
      "KPI Design & Planning",
      "Dashboard Development",
      "ETL & Modeling Strategy",
      "Ops-Integrated Reporting"
    ]
  },
  {
    "title": "Digital Fluency & Leadership Coaching",
    "bannerImageUrl": "assets/imgs/digital fluency.png",
    "content": "<h1>Gonna put stuff here</h1>",
    "id": 10,
    "slug": "digital-fluency-leadership-coaching",
    "author": "Charles Weise",
    "date": "3/12/2025",
    "bannerImageUrlZoom": "assets/imgs/digital fluency_zoom.png",
    "contentType": "service",
    "description": "Empower technical and non-technical leaders to confidently guide digital initiatives.",
    "icon": "psychology",
    "list_items": [
      "1:1 Digital Coaching",
      "Team Enablement Sessions",
      "Strategic Facilitation",
      "Storytelling & Buy-in"
    ]
  },
  {
    "title": "AI Culture Change Workshops",
    "bannerImageUrl": "assets/imgs/ai culture change.png",
    "content": "<h1>Gonna put stuff here</h1>",
    "id": 11,
    "slug": "ai-culture-change-workshops",
    "author": "Charles Weise",
    "date": "4/21/2025",
    "bannerImageUrlZoom": "assets/imgs/ai culture change_zoom.png",
    "contentType": "service",
    "description": "Help teams shift mindset from fear to fluency through hands-on AI interaction.",
    "icon": "groups",
    "list_items": [
      "Live AI Demos & Role Play",
      "Prompt Practice & Feedback",
      "Workflow Redesign Sprints",
      "Responsible AI Grounding"
    ]
  }
];
