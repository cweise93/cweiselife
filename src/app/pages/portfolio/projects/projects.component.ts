import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';
import { Project, projects } from '../../../data/portfolio/projects';

@Component({
  selector: 'app-projects',
  imports: [
    MatIconModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
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
export class ProjectsComponent implements OnInit {
  ngOnInit(){

    this.projects = projects;
    
    this.projects.forEach((project, idx) => {
      project.id = idx;
    });

  }
  projects: Project[] = [];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
