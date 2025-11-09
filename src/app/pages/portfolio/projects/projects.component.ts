import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';
import { content } from '../../../data/portfolio/content';
import { Content } from '../../../data/portfolio/content.model';
import { Router } from '@angular/router';
import { buildResponsiveImageSet, CARD_IMAGE_WIDTHS } from '../../../utils/image-utils';

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
  readonly cardImageWidths = CARD_IMAGE_WIDTHS;
  readonly cardImageSizes = '(max-width: 599px) 90vw, (max-width: 959px) 45vw, 320px';

  ngOnInit(){
    this.content = content.filter(item => item.contentType === 'project');
  }
  content: Content[] = [];
  constructor(private router: Router){}

  getCardImage(path?: string | null) {
    return buildResponsiveImageSet(path, this.cardImageWidths);
  }
  
  openProjectDetails(projectDetailsId: number): void {
    const project = this.content.find(b => b.id === projectDetailsId);
    if (!project) return;

    const { title, date } = project;
    const projectDate = new Date(date);
    const year = projectDate.getFullYear();
    const month = String(projectDate.getMonth() + 1).padStart(2, '0');
    const day = String(projectDate.getDate()).padStart(2, '0');

    const formattedTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')       // replace spaces/symbols with dashes
      .replace(/^-+|-+$/g, '');           // remove leading/trailing dashes

    this.router.navigate([
      '/details/project',
      year,
      month,
      day,
      formattedTitle
    ]);
  }
}
