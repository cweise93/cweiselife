import { Content } from "./content.model";

export const content: Content[] = [
  {
    "title": "Designing a GPT for Boardroom Earnings Calls",
    "bannerImageUrl": "assets/imgs/ai culture change.png",
    "content": "<section>\n  <p>Quarterly earnings briefings move fast. Executives juggle analyst questions, regulatory language, and cross-functional metrics. A GPT-style copilot can act as the boardroom's backstage partner—if it's grounded in curated data and controls.</p>\n</section>\n<section>\n  <h2>Blueprint</h2>\n  <ol>\n    <li><strong>Source the signals:</strong> Pull the final earnings deck, MD&amp;A language, KPI dashboards, and prior transcript Q&amp;A into an Azure Cognitive Search index.</li>\n    <li><strong>Fine-tune the tone:</strong> Provide prompt templates that enforce safe harbor wording, escalation paths, and brand voice.</li>\n    <li><strong>Deliver insights:</strong> Build a Teams-based chat experience where directors can ask: “How did gross margin trend versus Street consensus?” and receive cited answers.</li>\n  </ol>\n</section>\n<section>\n  <h2>Governance</h2>\n  <p>All responses log to Application Insights, sensitive queries are masked, and the copilot cannot hallucinate beyond indexed sources. Compliance signs off before go-live.</p>\n</section>\n<section>\n  <h2>Outcome</h2>\n  <p>Board members walk into the call aligned, confident, and ready to pivot when analysts chase unexpected threads.</p>\n</section>",
    "id": 1,
    "slug": "designing-a-gpt-for-boardroom-earnings-calls",
    "author": "Charles Weise",
    "date": "2025-06-04",
    "bannerImageUrlZoom": "assets/imgs/ai culture change_zoom.png",
    "contentType": "blog",
    "description": "A playbook for building a guidance copilot that briefs executives before they report to Wall Street.",
    "list_items": []
  },
  {
    "title": "Process Wins Require People",
    "bannerImageUrl": "assets/imgs/digital fluency.png",
    "content": "<section>\n  <p>We can blueprint the most elegant workflow—automations, swim lanes, dashboards—but nothing changes until people trust the process. This article unpacks a simple adoption model we use on every engagement.</p>\n</section>\n<section>\n  <h2>People-First Checklist</h2>\n  <ul>\n    <li><strong>Co-create:</strong> Bring representatives from every persona into design sprints.</li>\n    <li><strong>Operationalize storytelling:</strong> Leaders narrate why the process matters using real customer moments.</li>\n    <li><strong>Instrument feedback:</strong> Every workflow includes a “was this helpful?” signal wired into Teams/Slack.</li>\n    <li><strong>Reward adoption:</strong> Spotlight individuals who model the behavior you want to scale.</li>\n  </ul>\n</section>\n<section>\n  <h2>Metrics that Matter</h2>\n  <p>Track participation, sentiment, and outcome KPIs side-by-side. If people feel ignored, even the most efficient process will be routed around.</p>\n</section>",
    "id": 2,
    "slug": "process-wins-require-people",
    "author": "Charles Weise",
    "date": "2025-06-05",
    "bannerImageUrlZoom": "assets/imgs/digital fluency_zoom.png",
    "contentType": "blog",
    "description": "Why every efficiency program rises or falls on the humans asked to run it, and how to orchestrate change with respect.",
    "list_items": []
  },
  {
    "title": "AIA: AI Application in AEC",
    "bannerImageUrl": "assets/imgs/projects-book-cover.png",
    "content": "\n<section>\n  <p>AIA: AI Application in AEC is my field guide for architecture, engineering, and construction leaders who want AI assistants embedded directly into design and jobsite workflows. Instead of glossy hype, the playbook documents concrete use cases pulled from BIM coordination rooms, fabrication shops, and site trailers.</p>\n</section>\n<section>\n  <h2>Blueprint</h2>\n  <ol>\n    <li><strong>Discovery:</strong> Shadowed architects, estimators, and supers to map every manual handoff where AI could shave minutes without disrupting safety or compliance.</li>\n    <li><strong>Agent Catalog:</strong> Created reusable copilots for submittals, RFIs, punch lists, and schedule impact analysis, each tagged with data sources and responsible engineers.</li>\n    <li><strong>Implementation:</strong> Deployed Power Platform canvas apps, Azure OpenAI prompts, and Autodesk Construction Cloud connectors that run on existing tablets.</li>\n  </ol>\n</section>\n<section>\n  <h2>Artifacts</h2>\n  <p>The service ships with sample prompts, wiring diagrams for ACC + Azure, and adoption scorecards so you can measure how many hours the copilots return to field teams.</p>\n</section>\n<section>\n  <h2>Engagement Rhythm</h2>\n  <p>We run two-week sprints: week one validates data access and compliance, week two ships a pilot agent and trains champions. Every iteration ends with a field demonstration and backlog refinement.</p>\n</section>",
    "id": 3,
    "slug": "aia-ai-application-in-aec",
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
    "content": "\n<section>\n  <p>Habit Formation for Life Fulfillment is a coaching-and-platform bundle that helps high performers reconnect to the rituals that give their careers meaning. It blends reflective prompts, biometric clues, and accountability partners so habits stick.</p>\n</section>\n<section>\n  <h2>Program Flow</h2>\n  <ol>\n    <li><strong>Identity Inventory:</strong> Guided journaling surfaces values, non-negotiables, and energy drains.</li>\n    <li><strong>Habit Blueprint:</strong> A Power Pages canvas captures triggers, actions, and rewards, then syncs to Microsoft To Do and Viva Goals.</li>\n    <li><strong>Signals & Feedback:</strong> Weekly Teams check-ins compare mood logs with biometric or calendar data to spot drift.</li>\n  </ol>\n</section>\n<section>\n  <h2>Core Deliverables</h2>\n  <ul>\n    <li>Facilitator playbook with reflection prompts and workshop agendas.</li>\n    <li>Notion + Power BI dashboards to visualize habit streaks and emotional trends.</li>\n    <li>Automation recipes that nudge participants when habits slip.</li>\n  </ul>\n</section>\n<section>\n  <h2>Impact</h2>\n  <p>Clients report clearer focus, reclaimed calendars, and leadership teams that model sustainable performance instead of burnout.</p>\n</section>",
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
    "content": "\n<section>\n  <p>Copilot Agent for Corporate Intelligence is a secure middle layer that lets employees query SharePoint, CRM, ERP, and document stores through a single conversational interface while honoring row-level security.</p>\n</section>\n<section>\n  <h2>Architecture</h2>\n  <ul>\n    <li><strong>Connector Mesh:</strong> Azure Functions adapters normalize metadata across M365, Salesforce, ServiceNow, and on-prem SQL.</li>\n    <li><strong>Policy Engine:</strong> Entra ID + Purview enforce who can ask what, with dynamic masking for restricted data.</li>\n    <li><strong>Reasoning Layer:</strong> Azure OpenAI orchestrates retrieval-augmented prompts and cites every source it touches.</li>\n  </ul>\n</section>\n<section>\n  <h2>Engagement Deliverables</h2>\n  <p>The service includes a data catalog, prompt library, telemetry dashboards, and a governance workbook so legal/audit teams can bless the rollout.</p>\n</section>\n<section>\n  <h2>Outcomes</h2>\n  <p>Customers decommission duplicative BI portals, reduce time-to-insight, and gain full traceability of AI answers.</p>\n</section>",
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
    "content": "\n<section>\n  <p>Applied AI & Copilot Strategy is our flagship advisory engagement for leaders who want a pipeline of copilots tied to measurable ROI. We align executive ambition, data readiness, and change management into a repeatable playbook.</p>\n</section>\n<section>\n  <h2>What We Deliver</h2>\n  <ol>\n    <li><strong>Opportunity Radar:</strong> Workshop series that scores every workflow by business value, feasibility, and responsible AI criteria.</li>\n    <li><strong>Pilot Factory:</strong> Two-week sprint template with backlog, prompts, UX patterns, and telemetry instrumentation.</li>\n    <li><strong>Operating Model:</strong> Governance boards, prioritization cadences, and adoption metrics wired into Power BI.</li>\n  </ol>\n</section>\n<section>\n  <h2>Toolchain</h2>\n  <p>We are platform agnostic—Azure OpenAI, GitHub Copilot, Microsoft 365, or your preferred LLM stack. Every artifact lands in GitHub so IT can extend it.</p>\n</section>\n<section>\n  <h2>Result</h2>\n  <p>Within 90 days clients move from scattered pilots to a roadmap of production copilots backed by finance.</p>\n</section>",
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
    "content": "\n<section>\n  <p>Enterprise Systems & Architecture Design is how we help CIOs rationalize portfolios and design future-ready platforms. We balance strategy decks with executable reference architectures.</p>\n</section>\n<section>\n  <h2>Engagement Phases</h2>\n  <ul>\n    <li><strong>Current-State X-Ray:</strong> Capture integrations, data contracts, and technical debt across cloud/on-prem.</li>\n    <li><strong>Target Patterns:</strong> Produce layered diagrams, sequence flows, and infra-as-code blueprints aligned to business capabilities.</li>\n    <li><strong>Investment Roadmap:</strong> Prioritize modernization waves with cost, risk, and dependent teams.</li>\n  </ul>\n</section>\n<section>\n  <h2>Artifacts</h2>\n  <p>Clients receive architecture decision records, reusable Terraform/Bicep modules, and an executive story that explains the why behind every change.</p>\n</section>",
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
    "content": "\n<section>\n  <p>Custom Software Design & Development is our end-to-end engineering service. We partner with business owners from product vision through deployment, combining design thinking with disciplined delivery.</p>\n</section>\n<section>\n  <h2>How We Work</h2>\n  <ol>\n    <li><strong>Product Framing:</strong> Discovery interviews, user journey maps, and opportunity sizing.</li>\n    <li><strong>Experience + Architecture:</strong> Figma prototypes, accessibility reviews, and target-state diagrams.</li>\n    <li><strong>Build + Operate:</strong> Agile squads delivering secure cloud-native services with automated tests and observability baked in.</li>\n  </ol>\n</section>\n<section>\n  <h2>Stack</h2>\n  <p>We are fluent in Azure, Power Platform, Node, .NET, Python, and modern front-end frameworks—selected to fit your ecosystem.</p>\n</section>\n<section>\n  <h2>Value</h2>\n  <p>The result is production-grade software with measurable adoption, not just a prototype.</p>\n</section>",
    "id": 8,
    "slug": "custom-software-design-development",
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
    "content": "\n<section>\n  <p>Actionable Analytics & Dashboarding turns raw data into decisions. We streamline the data supply chain and build executive-ready visuals with the right granularity.</p>\n</section>\n<section>\n  <h2>Process</h2>\n  <ul>\n    <li><strong>Question Backlog:</strong> Facilitate working sessions to list the decisions that matter and who makes them.</li>\n    <li><strong>Data Engineering:</strong> Model sources in Fabric/Synapse or Snowflake with dbt-style transformations.</li>\n    <li><strong>Visual Stories:</strong> Craft Power BI dashboards with guided navigation, alerts, and drill-throughs.</li>\n  </ul>\n</section>\n<section>\n  <h2>Enablement</h2>\n  <p>We document every measure, train analysts, and set up governance so dashboards stay trustworthy.</p>\n</section>",
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
    "content": "\n<section>\n  <p>Digital Fluency & Leadership Coaching equips executives to speak technology with confidence. It blends coaching, labs, and storytelling practice.</p>\n</section>\n<section>\n  <h2>Program Structure</h2>\n  <ol>\n    <li><strong>Fluency Diagnostics:</strong> Assess comfort with AI, data, cloud, and product concepts.</li>\n    <li><strong>Studio Sessions:</strong> Small-group labs using real scenarios—budget reviews, board updates, customer engagements.</li>\n    <li><strong>Coaching:</strong> One-on-one sessions to craft narratives, Q&A prep, and accountability plans.</li>\n  </ol>\n</section>\n<section>\n  <h2>Outcomes</h2>\n  <p>Leaders leave with a playbook for explaining tech investments, coaching their teams, and modeling curiosity.</p>\n</section>",
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
    "content": "\n<section>\n  <p>AI Culture Change Workshops immerse teams in hands-on experimentation so fear turns into fluency.</p>\n</section>\n<section>\n  <h2>Workshop Agenda</h2>\n  <ul>\n    <li>Responsible AI grounding with real policy examples.</li>\n    <li>Prompt labs that pair SMEs with facilitators to rewrite workflows.</li>\n    <li>Live build of a lightweight automation so everyone sees value in hours.</li>\n  </ul>\n</section>\n<section>\n  <h2>Change Enablers</h2>\n  <p>We provide communications templates, leader talking points, and measurement plans so the energy survives past the workshop.</p>\n</section>",
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
  },
  {
    "title": "Avoiding the LLM Gold Rush",
    "bannerImageUrl": "assets/imgs/projects-copilot.png",
    "content": "<section>\n  <p>We are watching enterprises burn millions on one-off LLM experiments. Each business unit buys a tool, duplicates data, and leaves security scrambling. The antidote: build a centralized Azure interface—Event Grid, API Management, Cognitive Search—that every copilot must pass through.</p>\n</section>\n<section>\n  <h2>Central Integration Pattern</h2>\n  <ol>\n    <li><strong>Catalog sources:</strong> Document every system that copilots need. Use Purview to classify sensitivity.</li>\n    <li><strong>Expose via API Management:</strong> Wrap each source with consistent auth, throttling, and logging.</li>\n    <li><strong>Route prompts:</strong> All copilots call a single orchestrator Function that injects policies, traces requests, and ensures data minimization.</li>\n  </ol>\n</section>\n<section>\n  <h2>Why it Works</h2>\n  <p>Finance can see cost per call, Security can revoke access centrally, and teams can iterate on copilots without reinventing plumbing.</p>\n</section>",
    "id": 12,
    "slug": "avoiding-the-llm-gold-rush",
    "author": "Charles Weise",
    "date": "2025-06-08",
    "bannerImageUrlZoom": "assets/imgs/projects-copilot_zoom.png",
    "contentType": "blog",
    "description": "Avoid burning cash on fragmented copilots by wiring everything through a governed Azure interface.",
    "icon": "insights",
    "list_items": []
  },
  {
    "title": "From PDF Attachments to Platform-first Best Practices",
    "bannerImageUrl": "assets/imgs/pdf-to-platform-banner.jpg",
    "content": "<section>\n  <p>We retired a 32-page PDF best-practices guide and moved the entire experience into iCIMS with Azure + Power Platform telemetry. Now, every guidance session happens inside the system of record and produces real analytics.</p>\n</section>\n<section>\n  <h2>Playbook</h2>\n  <ol>\n    <li><strong>Deconstruct the PDF:</strong> We chunked the content into JSON schema using Azure OpenAI.</li>\n    <li><strong>Ship a responsive web form:</strong> Power Pages components render directly inside iCIMS tabs.</li>\n    <li><strong>Govern content:</strong> Updates flow through GitHub + Azure pipelines, giving compliance version control.</li>\n  </ol>\n</section>\n<section>\n  <h2>Telemetry</h2>\n  <p>Each submission emits Event Grid events to Power BI dashboards, so leaders can see adoption and gaps instantly.</p>\n</section>",
    "id": 13,
    "slug": "from-pdf-attachments-to-platform-first-best-practices",
    "author": "Charles Weise",
    "date": "2025-06-15",
    "bannerImageUrlZoom": "assets/imgs/pdf-to-platform-banner_zoom.jpg",
    "contentType": "blog",
    "description": "How we retired a PDF and launched a governed iCIMS web experience with real telemetry.",
    "list_items": []
  },
  {
    "title": "Charles Weise – Resume",
    "content": "Structured resume content used by the modal experience on the home page.",
    "id": 14,
    "slug": "charles-weise-resume",
    "author": "Charles Weise",
    "date": "2025-01-01",
    "contentType": "resume",
    "list_items": [],
    "resumeDetails": {
      "headerTitle": "CHARLES WEISE",
      "heroTags": [
        "Fractional CTO",
        "Enterprise AI & Systems Architect",
        "AEC Digital Strategy"
      ],
      "summary": "Over two decades of professional experience combined with a formal business education, a history of successfully launched ventures, and program implementation leadership provides an ideal background for delivering solutions to overcome your challenges. Knowledge gained from daily guidance and participation in enterprise architecture modernization focused on preparing for big-data mix-ins, artificial intelligence, and machine learning capabilities can be leveraged by you to unlock answers required to deliver solutions supporting your strategic vision.",
      "contacts": [
        {
          "icon": "location_on",
          "label": "Location",
          "value": "Sebastian, FL 32958",
          "href": "https://www.google.com/maps?q=Sebastian,+FL+32958"
        },
        {
          "icon": "call",
          "label": "Phone",
          "value": "772.971.5116",
          "href": "tel:+17729715116"
        },
        {
          "icon": "mail",
          "label": "Email",
          "value": "cweise@cweise.com",
          "href": "mailto:cweise@cweise.com"
        },
        {
          "icon": "link",
          "label": "LinkedIn",
          "value": "in/cweise",
          "href": "https://www.linkedin.com/in/cweise"
        }
      ],
      "skills": [
        "Solution Architecture",
        "Full-stack Development",
        "Data Modeling",
        "Program Management",
        "Partnership Development",
        "Cost-benefit Analysis",
        "Public Speaking",
        "Team Development",
        "Strategic Leadership"
      ],
      "experiences": [
        {
          "period": "09.2019 – Present",
          "role": "Principal, Director of Application Development",
          "organization": "Bowman (BWMN)",
          "summaryPoints": [
            "Supported the team in applying Microsoft’s Cloud Adoption Framework with a prescriptive Azure landing-zone rollout that unified disparate systems and AI models while preserving specialized technical and relationship knowledge.",
            "Guiding team to develop self-generating, systems agnostic integration mechanisms providing enterprise, scalable knowledge management.",
            "Guided solution development, deployment, and integration of MS Dynamics CRM, Deltek on-prem Vision, and SQL/C# ERP platforms.",
            "Iteratively developed and maintained custom application to facilitate successful delivery of over 30,000 recorded easements and 45,000 signed permits in under four years with less than 50 employees."
          ]
        },
        {
          "period": "07.2018 – 09.2019",
          "role": "Commercial Real Estate Associate",
          "organization": "Keller Williams",
          "summaryPoints": [
            "Used data-mining to identify shovel-ready project appraised at $28M."
          ]
        },
        {
          "period": "06.2013 – 06.2018",
          "role": "Technology Consultant",
          "organization": "W3, LLC",
          "summaryPoints": [
            "Provided individualized support for technology challenges."
          ]
        },
        {
          "period": "06.2004 – 06.2013",
          "role": "Manager Real Estate Support U.S.",
          "organization": "Canadian Pacific Railway (CP)",
          "summaryPoints": [
            "Assembled geographic information systems steering committee to secure and oversee the management of $21M in project funding.",
            "Used data modeling techniques to identify and secure $3M in back-owed oil lease rights throughout the state of North Dakota.",
            "Led program that resulted in a digital repository of over 65,000 original title, easement, license, and lease documents/contracts reducing response time from months to minutes."
          ]
        }
      ],
      "education": [
        {
          "period": "2008 – 2010 MBA",
          "degree": "Master of Business Administration",
          "institution": "University of Minnesota, Carlson School of Management",
          "focus": "Focus: Strategic Initiatives"
        },
        {
          "period": "2006 – 2008 BA",
          "degree": "Bachelor of Arts, Business Administration",
          "institution": "Metropolitan State University",
          "focus": "Focus: Business Administration"
        },
        {
          "period": "1996 – 1998 AA",
          "degree": "Associate of Arts, Mechanical Engineering",
          "institution": "Century College",
          "focus": "Focus: Mechanical Engineering"
        }
      ],
      "techStacks": [
        {
          "title": "MICROSOFT",
          "items": [
            "Azure ALZ",
            "Azure Logic Apps",
            "Power BI",
            "SharePoint",
            "Entra ID",
            "Power Automate",
            "Power Platform",
            "Visio"
          ]
        },
        {
          "title": "PLATFORMS",
          "items": [
            "Atlassian Bitbucket",
            "Deltek Vantagepoint",
            "ESRI",
            "Safe / FME",
            "Atlassian Jira",
            "Deltek Vision",
            "iCIMS",
            "UKG Pro Core + BI"
          ]
        },
        {
          "title": "FRAMEWORKS",
          "items": [
            "Angular",
            "GraphQL",
            "Python / FastAPI",
            "Next.js",
            "Drupal",
            "PHP",
            "React",
            "WordPress"
          ]
        }
      ],
      "pdfUrl": "assets/docs/charles-weise-resume.pdf"
    }
  }
];
