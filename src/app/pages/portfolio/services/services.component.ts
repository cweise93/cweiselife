import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { trigger, transition, style, animate } from '@angular/animations';
import { content } from '../../../data/portfolio/content';
import { Content } from '../../../data/portfolio/content.model';
import { Router } from '@angular/router';

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
    this.content = content.filter(item => item.contentType == 'service');
  }
  content: Content[] = [];
  constructor(private router: Router){}
  openServiceDetails(serviceDetailsId: number): void {
    const service = this.content.find(b => b.id === serviceDetailsId);
    if (!service) return;

    const { title, date } = service;
    const serviceDate = new Date(date);
    const year = serviceDate.getFullYear();
    const month = String(serviceDate.getMonth() + 1).padStart(2, '0');
    const day = String(serviceDate.getDate()).padStart(2, '0');

    const formattedTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')       // replace spaces/symbols with dashes
      .replace(/^-+|-+$/g, '');           // remove leading/trailing dashes

    this.router.navigate([
      '/details/service',
      year,
      month,
      day,
      formattedTitle
    ]);
  }
}
