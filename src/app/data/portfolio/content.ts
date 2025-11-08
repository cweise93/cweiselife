import { Content } from "./content.model";

export const content: Content[] = [
  {
    "title": "First Blog Post",
    "bannerImageUrl": "assets/imgs/ai culture change.png",
    "content": "This is the greatest article ever.",
    "id": 1,
    "slug": "first-blog-post",
    "author": "Charles Weise",
    "date": "6/9/2025",
    "bannerImageUrlZoom": "assets/imgs/ai culture change_zoom.png",
    "contentType": "blog",
    "list_items": []
  },
  {
    "title": "Second Blog Post",
    "bannerImageUrl": "assets/imgs/enterprise system.png",
    "content": "<h1>Definitely the coolest</h1><p>Happy this is the best <s>EVER</s></p>",
    "id": 2,
    "slug": "second-blog-post",
    "author": "Charles Weise",
    "date": "6/9/2025",
    "bannerImageUrlZoom": "assets/imgs/enterprise system_zoom.png",
    "contentType": "blog",
    "list_items": []
  },
  {
    "title": "AIA: AI Application in AEC",
    "bannerImageUrl": "assets/imgs/projects-book-cover.png",
    "content": "<section>\n  <p>AIA: AI Application in AEC is a field guide I'm writing for architects, engineers, contractors, and owners who want to move AI from slideware to site plans. The book chronicles real scenarios—design iteration loops, submittal processing, safety observations—and shows how AI agents fit into the workflows teams already use.</p>\n  <p>This detail page captures the current manuscript snapshot so readers and collaborators can follow progress. As chapters firm up, I publish the working diagrams, prompts, and data models here.</p>\n</section>\n<section>\n  <h2>Chapter Themes</h2>\n  <ul>\n    <li><strong>Design Intelligence:</strong> Generative design companions that evaluate zoning, sustainability, and constructability early.</li>\n    <li><strong>Field Copilots:</strong> Mobile assistants that summarize RFIs, compare as-built photos to BIM, and escalate safety gaps.</li>\n    <li><strong>Document Discipline:</strong> AI services that classify submittals, extract specs, and keep drawings synchronized.</li>\n    <li><strong>Partner Ecosystem:</strong> How to blend Autodesk, Bentley, and custom data lakes without duplicating effort.</li>\n  </ul>\n</section>\n<section>\n  <h2>Artifacts Shared</h2>\n  <p>Readers get access to prompt libraries, workflow swimlanes, system architecture, and adoption scorecards. Each artifact is built from real engagements so you can adapt them to your own projects.</p>\n</section>\n<section>\n  <h2>How to Engage</h2>\n  <p>I'm interviewing owners, designers, GC superintendents, and technology partners throughout the writing process. If you'd like to contribute a case study or review a chapter, you'll find contact links and submission guidelines on this page.</p>\n</section>",
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
    "content": "<section>\n  <p>Habit Formation for Life Fulfillment is a program I built for professionals who feel successful on paper but disconnected from the habits that give their work meaning. It combines guided reflection, AI-assisted journaling, and behavioral science so participants design rituals that match their values instead of copying the latest productivity trend.</p>\n  <p>The project page captures the toolkit as it evolves: prompts, dashboards, and coaching scripts. Participants use it as a workbook, and facilitators use it as a repeatable curriculum.</p>\n</section>\n<section>\n  <h2>Program Flow</h2>\n  <ul>\n    <li><strong>Identity Inventory:</strong> Workshops and journaling exercises that surface personal values, energy drains, and non-negotiables.</li>\n    <li><strong>Habit Blueprint:</strong> A canvas that maps goals to triggers, environment tweaks, and friction-removal tactics.</li>\n    <li><strong>Copilot Companion:</strong> A chat-based guide (built with Azure OpenAI) that checks in daily, nudges alignment, and celebrates streaks.</li>\n  </ul>\n</section>\n<section>\n  <h2>Artifacts</h2>\n  <p>The download includes facilitation decks, playlist suggestions, a Notion template, and a Power BI wellness dashboard that visualizes mood, focus, and time allocation. Everything is modular so you can run it solo or inside a leadership offsite.</p>\n</section>\n<section>\n  <h2>Impact</h2>\n  <p>Participants report clearer priorities, better boundaries, and a renewed sense of ownership over their calendar. Organizations use the framework to reduce burnout and to help high-performers navigate big transitions.</p>\n</section>",
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
    "content": "<section>\n  <p>Copilot Agent for Corporate Intelligence is a productized integration layer that lets employees chat with their enterprise data even if they don’t have a formal data lake. The agent connects to SharePoint, CRM, email, and file systems, then enforces security trims so responses respect the org chart.</p>\n  <p>The goal is to ship a vendor-agnostic agent that can be deployed in weeks, not months. The detail page shares the reference architecture and the latest deployment playbooks.</p>\n</section>\n<section>\n  <h2>Core Capabilities</h2>\n  <ul>\n    <li><strong>Data Federation:</strong> Connectors for SharePoint, OneDrive, Exchange, CRM, and SQL that normalize metadata and apply retention policies.</li>\n    <li><strong>Contextual Memory:</strong> Prompt orchestration that injects user profile, role, and historical Q&A so the agent feels personal but stays compliant.</li>\n    <li><strong>Safety Rails:</strong> Redaction, citation, and audit logging baked in so legal and InfoSec can approve deployments quickly.</li>\n  </ul>\n</section>\n<section>\n  <h2>Deployment Kit</h2>\n  <p>Clients receive Terraform/Bicep templates, Azure OpenAI orchestration scripts, and a governance dashboard showing usage, satisfaction, and flagged interactions. There are also change-management assets—email templates, training decks, and office hour agendas.</p>\n</section>\n<section>\n  <h2>Why It Matters</h2>\n  <p>By unifying unstructured knowledge under a single copilot, teams answer questions in minutes instead of days, executives make faster decisions, and new hires ramp quicker. It’s the practical step between disconnected departmental bots and a full enterprise knowledge graph.</p>\n</section>",
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
    "content": "<section>\n  <p>Applied AI & Copilot Strategy is the playbook I use to align C-suites, product teams, and frontline operators around a single goal: implement copilots that actually move the needles leadership cares about. The approach is pragmatic—every workshop, sprint, and proof of concept is tied to an operational KPI, a financial metric, or a compliance requirement.</p>\n  <p>The services page gives you the single-slide summary, but the details matter. This article is what you reach when you tap “Learn more”: a deep dive into how the program runs week by week, what assets clients receive, and the maturity model we use to track adoption across business units.</p>\n</section>\n<section>\n  <h2>Program Pillars</h2>\n  <ul>\n    <li><strong>Opportunity Radar:</strong> A discovery track that maps existing workflows, data exhaust, and employee journeys to shortlist use cases with clear ROI and risk constraints.</li>\n    <li><strong>Pilot Factory:</strong> A two-week sprint that pairs SMEs with engineers to stand up copilots using Microsoft 365, GitHub Copilot, Azure OpenAI, or whatever stack the client already pays for.</li>\n    <li><strong>Governance Layer:</strong> Security, data residency, prompt logging, and feedback capture wired in from day one so legal and InfoSec sign off quickly.</li>\n    <li><strong>Change Playbooks:</strong> Training, comms, and leadership nudges at each phase so adoption isn't left to chance.</li>\n  </ul>\n</section>\n<section>\n  <h2>What the Client Sees</h2>\n  <p>Every engagement includes a Copilot Opportunity Matrix (spider charts for effort vs. impact), architecture diagrams showing how copilots connect to remaining systems, prompt packs for the top five workflows, and an executive dashboard that reports progress in business terms—hours saved, deals accelerated, tickets auto-resolved.</p>\n  <p>The assets live in a shared workspace so departments can self-serve future requests. IT leadership gets reference implementations, compliance gets documentation, and business leaders see the metrics needed to fund the next phase.</p>\n</section>\n<section>\n  <h2>Why This Works</h2>\n  <p>We focus on surfaced friction: the tasks engineers, analysts, account managers, or field teams repeat daily. By coupling those tasks with copilots that live inside Teams, Outlook, Dynamics, or CRM systems people already use, we avoid white-elephant projects. The strategy isn’t to boil the ocean—it’s to land a working copilot in 30 days, learn, and scale responsibly.</p>\n  <p>If you want the full execution details, the link above routes to the live engagement page hosted on the site. I keep it updated with anonymized case studies, templated artifacts, and the current list of accelerators we use to fast-track adoption.</p>\n</section>",
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
    "content": "<section>\n  <p>Enterprise Systems & Architecture Design is the framework I use to help organizations align application portfolios, integration patterns, and data contracts with the realities of modern delivery. The service blends hands-on architecture with stakeholder facilitation so engineering and business leaders can make decisions based on traceable models instead of tribal knowledge.</p>\n  <p>Clients use this engagement when they are migrating to cloud-native platforms, rationalizing overlapping CRMs/ERPs, or building a digital foundation for acquisitions. The goal is to leave teams with reference architectures they can evolve, not a shelf-ware blueprint.</p>\n</section>\n<section>\n  <h2>Architecture Tracks</h2>\n  <ul>\n    <li><strong>Current-State Mapping:</strong> Rapid discovery sessions that capture integrations, environments, and dependencies in a living system catalog.</li>\n    <li><strong>Target-State Patterns:</strong> Cloud, hybrid, and edge patterns expressed through layered diagrams, sequence flows, and interface contracts.</li>\n    <li><strong>Transition Waves:</strong> Incremental rollout plans aligned to budget cycles with clearly named owners and success criteria.</li>\n    <li><strong>Governance Kit:</strong> Architecture decision records, backlog hygiene templates, and review cadences so teams keep the design healthy.</li>\n  </ul>\n</section>\n<section>\n  <h2>Deliverables</h2>\n  <p>Engagements include interactive diagrams (C4 and BPMN views), interface catalogs with latency/SLA annotations, reusable Terraform/Bicep scaffolding, and executive-ready scorecards that show risk reduction and ROI. Everything is stored in a shared repo so future projects can fork proven components.</p>\n</section>\n<section>\n  <h2>Impact</h2>\n  <p>The result is a pragmatic architecture runway: product teams know what to build next, infrastructure teams have automation to rely on, and leadership can connect technology investments to the initiatives they sponsor.</p>\n</section>",
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
    "content": "<section>\n  <p>Custom Software Design & Development is the end-to-end build track for teams that need a modern web application, workflow engine, or internal tool delivered without reinventing their SDLC. I step in as a fractional product+engineering lead, pairing discovery, UX, and development into a single cadence.</p>\n</section>\n<section>\n  <h2>How the Build Cadence Works</h2>\n  <ul>\n    <li><strong>Discovery & Framing:</strong> Workshops that translate business outcomes into user stories, non-functional requirements, and definition of done.</li>\n    <li><strong>Experience Design:</strong> Rapid prototyping in Figma with accessibility baked in, followed by component libraries teams can reuse.</li>\n    <li><strong>Delivery Pods:</strong> Full-stack pods (Angular/React, .NET/Node, Azure) that ship increments every two weeks with automated testing and observability.</li>\n    <li><strong>Adoption & Handoff:</strong> Runbooks, CI/CD pipelines, and enablement sessions so client teams can own the stack on day one.</li>\n  </ul>\n</section>\n<section>\n  <h2>What You Receive</h2>\n  <p>Expect production-grade code, infrastructure as code, telemetry dashboards, and a backlog groomed with technical debt + roadmap items. We measure success through features shipped, defects prevented, and the ability for your team to maintain the platform independently.</p>\n</section>\n<section>\n  <h2>Use Cases</h2>\n  <p>Common builds include partner portals, operations dashboards, quote-to-cash tools, and AI-assisted knowledge apps. Each solution is anchored to the KPIs leadership cares about—cycle time, revenue capture, compliance, or customer experience.</p>\n</section>",
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
    "content": "<section>\n  <p>Actionable Analytics & Dashboarding turns raw operational data into decision-ready insights. Instead of shipping static reports, we design data products that plug into daily standups, exec reviews, and frontline workflows.</p>\n</section>\n<section>\n  <h2>Analytics Playbook</h2>\n  <ul>\n    <li><strong>KPI Design:</strong> Workshops that tie metrics to levers the business can actually pull and document the formula, owner, and refresh cadence.</li>\n    <li><strong>Data Supply Chain:</strong> Source-to-dashboard mapping, semantic modeling, and quality checks baked into pipelines (Fabric, Power BI, Databricks, Snowflake).</li>\n    <li><strong>Visualization System:</strong> Accessible dashboards with drill-downs, alerting rules, and narrative context so leaders know what to do next.</li>\n  </ul>\n</section>\n<section>\n  <h2>Outcomes</h2>\n  <p>Clients walk away with governed datasets, reusable visuals, and a measurement operating model. That means faster close cycles, proactive risk flags, and a single source of truth for revenue, operations, or customer health.</p>\n</section>",
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
    "content": "<section>\n  <p>Digital Fluency & Leadership Coaching equips executives and functional leaders to sponsor technology initiatives with confidence. We mix 1:1 coaching, cohort workshops, and live demos so leaders experience the tools they are funding.</p>\n</section>\n<section>\n  <h2>Coaching Tracks</h2>\n  <ul>\n    <li><strong>Executive Labs:</strong> Hands-on sessions where leaders pilot copilots, automation, or analytics solutions against their own workflows.</li>\n    <li><strong>Story Crafting:</strong> Narrative playbooks that connect technology investments to the mission, complete with slides, talking points, and FAQs.</li>\n    <li><strong>Enablement Kits:</strong> Micro-learnings, office hours, and scorecards so managers can reinforce behaviors and track adoption.</li>\n  </ul>\n</section>\n<section>\n  <h2>Why Leaders Like It</h2>\n  <p>Coaching is rooted in actual deliverables—leaders leave each session with artifacts they can use in steering committees, town halls, or board updates. The result is faster decision making and less resistance from teams asked to change how they work.</p>\n</section>",
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
    "content": "<section>\n  <p>AI Culture Change Workshops help teams shift from \"AI will replace us\" to \"AI augments our work.\" The format is experiential: live demos, hands-on labs, and facilitated retros so participants see how copilots impact their actual processes.</p>\n</section>\n<section>\n  <h2>Workshop Flow</h2>\n  <ul>\n    <li><strong>Mindset Reset:</strong> Stories and data showing how similar organizations adopted AI responsibly.</li>\n    <li><strong>Live Roleplay:</strong> Participants bring real tasks; we co-create prompts, build automations, and critique results together.</li>\n    <li><strong>Workflow Sprints:</strong> Small groups redesign a process with AI in mind and present the impact to leadership.</li>\n    <li><strong>Guardrails:</strong> Practical guidance on governance, legal, and change management so teams move forward safely.</li>\n  </ul>\n</section>\n<section>\n  <h2>Lasting Change</h2>\n  <p>After the workshop, teams receive prompt libraries, workflow canvases, and adoption metrics. Leaders see sentiment shift, backlog ideas increase, and most importantly, volunteers eager to champion the next wave of automation.</p>\n</section>",
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
    "title": "Charles Weise – Resume",
    "id": 12,
    "slug": "charles-weise-resume",
    "author": "Charles Weise",
    "date": "2025-01-01",
    "content": "Structured resume content used by the modal experience on the home page.",
    "contentType": "resume",
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
