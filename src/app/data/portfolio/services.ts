import { Service } from './services.model';

export const services: Service[] = [
  {
    "id": 1,
    "icon": "bolt",
    "title": "Applied AI & Copilot Strategy",
    "description": "Help organizations identify, prototype, and integrate AI-powered copilots and automations using LLMs.",
    "imageUrl": "assets/imgs/applied ai.png",
    "category": {
      "label": "Strategy",
      "selected": true
    },
    "list_items": [
      "AI Readiness & ROI Mapping",
      "Prompt Engineering Frameworks",
      "Copilot Use Case Design",
      "LLM Deployment Guidance"
    ]
  },
  {
    "id": 2,
    "icon": "architecture",
    "title": "Enterprise Systems & Architecture Design",
    "description": "Define and guide scalable, resilient architectures across cloud, identity, and application layers.",
    "imageUrl": "assets/imgs/enterprise system.png",
    "category": {
      "label": "Strategy",
      "selected": true
    },
    "list_items": [
      "Cloud-native & Hybrid Patterns",
      "API & Data Layer Architecture",
      "Integration Blueprinting",
      "Scalability & Risk Mitigation"
    ]
  },
  {
    "id": 3,
    "icon": "code",
    "title": "Custom Software Design & Development",
    "description": "Lead end-to-end builds of web platforms, apps, and digital business tools.",
    "imageUrl": "assets/imgs/custom software.png",
    "category": {
      "label": "Execution",
      "selected": true
    },
    "list_items": [
      "Agile Product Delivery",
      "Full-stack Implementation",
      "API + Data Integration",
      "Solution Prototyping"
    ]
  },
  {
    "id": 4,
    "icon": "bar_chart",
    "title": "Actionable Analytics & Dashboarding",
    "description": "Convert raw data into dashboards and insight systems that drive decision-making.",
    "imageUrl": "assets/imgs/actionable analytics.png",
    "category": {
      "label": "Execution",
      "selected": true
    },
    "list_items": [
      "KPI Design & Planning",
      "Dashboard Development",
      "ETL & Modeling Strategy",
      "Ops-Integrated Reporting"
    ]
  },
  {
    "id": 5,
    "icon": "psychology",
    "title": "Digital Fluency & Leadership Coaching",
    "description": "Empower technical and non-technical leaders to confidently guide digital initiatives.",
    "imageUrl": "assets/imgs/digital fluency.png",
    "category": {
      "label": "People",
      "selected": true
    },
    "list_items": [
      "1:1 Digital Coaching",
      "Team Enablement Sessions",
      "Strategic Facilitation",
      "Storytelling & Buy-in"
    ]
  },
  {
    "id": 6,
    "icon": "groups",
    "title": "AI Culture Change Workshops",
    "description": "Help teams shift mindset from fear to fluency through hands-on AI interaction.",
    "imageUrl": "assets/imgs/ai culture change.png",
    "category": {
      "label": "People",
      "selected": true
    },
    "list_items": [
      "Live AI Demos & Role Play",
      "Prompt Practice & Feedback",
      "Workflow Redesign Sprints",
      "Responsible AI Grounding"
    ]
  }
];
