import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { trigger, transition, style, animate } from '@angular/animations';

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
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    MatIconModule,
    MatCheckboxModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.9)' }))
      ])
    ])
  ]
})
export class ServicesComponent implements OnInit {
  ngOnInit() {

    this.services = [
      {
        icon: 'bolt',
        title: 'Applied AI & Copilot Strategy',
        description: 'Help organizations identify, prototype, and integrate AI-powered copilots and automations using LLMs.',
        category: this.getServiceType('Strategy'),
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
        category: this.getServiceType('Strategy'),
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
        category: this.getServiceType('Execution'),
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
        category: this.getServiceType('Execution'),
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
        category: this.getServiceType('People'),
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
        category: this.getServiceType('People'),
        imageUrl: 'assets/imgs/ai culture change.png',
        list_items: [
          'Live AI Demos & Role Play',
          'Prompt Practice & Feedback',
          'Workflow Redesign Sprints',
          'Responsible AI Grounding'
        ]
      }
    ];

    this.services.forEach((service, idx) => {
      service.id = idx;
    });
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  serviceTypes: ServiceType[] = [
    { label: 'People', selected: true },
    { label: 'Strategy', selected: true },
    { label: 'Execution', selected: true },
  ]
  services: Service[] = [];

  getServiceType(label: string): ServiceType {
    const type = this.serviceTypes.find(t => t.label === label);
    if (!type) throw new Error(`Invalid category label: ${label}`);
    return type;
  }
  update(checked: boolean, label: string){
    var type = this.getServiceType(label);
    type.selected = checked;
  }

  getServicesByCategory(): Service[] {
    const orderedSelectedLabels = this.serviceTypes
      .filter(type => type.selected)
      .map(type => type.label);
  
    const orderedServices: Service[] = [];
  
    for (const label of orderedSelectedLabels) {
      const matching = this.services.filter(service => service.category.label === label);
      orderedServices.push(...matching);
    }
  
    return orderedServices;
  }
  activeService = this.services[0];

  setActive(service: any) {
    this.activeService = service;
  }
}
