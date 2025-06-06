import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { trigger, transition, style, animate } from '@angular/animations';
import { services } from '../../../data/portfolio/services';
import { Service, ServiceType } from '../../../data/portfolio/services.model';

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
    this.services = services;

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
