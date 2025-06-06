import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';

export interface Project {
  icon: string;
  title: string;
  description: string;
  id?: number;
  imageUrl?: string;
  buttonLink?: string;
}
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

    this.projects = [
      {
        icon: 'menu_book',
        title: 'AIA: AI Application in AEC',
        imageUrl: 'assets/imgs/projects-book-cover.png',
        description: 'Authoring a pioneering book exploring how artificial intelligence is reshaping the architecture, engineering, and construction industries, offering practical insights and future strategies.'
      },
      {
        icon: 'self_improvement',
        title: 'Habit Formation for Life Fulfillment',
        imageUrl: 'assets/imgs/projects-app.png',
        description: 'Developing a transformational program that guides individuals to define meaningful life goals through reflective questioning and build habits that drive sustainable personal growth.'
      },
      {
        icon: 'smart_toy',
        title: 'Copilot Agent for Corporate Intelligence',
        imageUrl: 'assets/imgs/projects-copilot.png',
        description: 'Creating a secure, agnostic Copilot Agent that connects employees to their corporate data assets — even when no formal data lake exists — unlocking actionable intelligence from disparate sources.'
      }
    ];
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
