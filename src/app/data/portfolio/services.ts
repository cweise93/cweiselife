export interface ServiceType {
  label: string;
  selected: boolean;
}
export interface Service {
  icon: string;
  title: string;
  description: string;
  id?: number;
  list_items: string[];
  category: ServiceType;
  imageUrl: string;
}
export const services: Service[] = [
    {
    icon: 'bolt',
    title: 'Applied AI & Copilot Strategy',
    description: 'Help organizations identify, prototype, and integrate AI-powered copilots and automations using LLMs.',
    category: { label: 'Strategy', selected: true },
    imageUrl: 'assets/imgs/applied ai.png',
    list_items: [
        'AI Readiness & ROI Mapping',
        'Prompt Engineering Frameworks',
        'Copilot Use Case Design',
        'LLM Deployment Guidance'
    ]
    },
    {
    icon: 'architecture',
    title: 'Enterprise Systems & Architecture Design',
    description: 'Define and guide scalable, resilient architectures across cloud, identity, and application layers.',
    category: { label: 'Strategy', selected: true },
    imageUrl: 'assets/imgs/enterprise system.png',
    list_items: [
        'Cloud-native & Hybrid Patterns',
        'API & Data Layer Architecture',
        'Integration Blueprinting',
        'Scalability & Risk Mitigation'
    ]
    },
    {
    icon: 'code',
    title: 'Custom Software Design & Development',
    description: 'Lead end-to-end builds of web platforms, apps, and digital business tools.',
    category: { label: 'Execution', selected: true },
    imageUrl: 'assets/imgs/custom software.png',
    list_items: [
        'Agile Product Delivery',
        'Full-stack Implementation',
        'API + Data Integration',
        'Solution Prototyping'
    ]
    },
    {
    icon: 'bar_chart',
    title: 'Actionable Analytics & Dashboarding',
    description: 'Convert raw data into dashboards and insight systems that drive decision-making.',
    category: { label: 'Execution', selected: true },
    imageUrl: 'assets/imgs/actionable analytics.png',
    list_items: [
        'KPI Design & Planning',
        'Dashboard Development',
        'ETL & Modeling Strategy',
        'Ops-Integrated Reporting'
    ]
    },
    {
    icon: 'psychology',
    title: 'Digital Fluency & Leadership Coaching',
    description: 'Empower technical and non-technical leaders to confidently guide digital initiatives.',
    category: { label: 'People', selected: true },
    imageUrl: 'assets/imgs/digital fluency.png',
    list_items: [
        '1:1 Digital Coaching',
        'Team Enablement Sessions',
        'Strategic Facilitation',
        'Storytelling & Buy-in'
    ]
    },
    {
    icon: 'groups',
    title: 'AI Culture Change Workshops',
    description: 'Help teams shift mindset from fear to fluency through hands-on AI interaction.',
    category: { label: 'People', selected: true },
    imageUrl: 'assets/imgs/ai culture change.png',
    list_items: [
        'Live AI Demos & Role Play',
        'Prompt Practice & Feedback',
        'Workflow Redesign Sprints',
        'Responsible AI Grounding'
    ]
    }
];