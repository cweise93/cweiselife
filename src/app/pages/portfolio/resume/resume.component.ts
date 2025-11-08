import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContentService } from '../../../services/content.service';
import { ResumeDetails } from '../../../data/portfolio/content.model';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResumeComponent implements OnInit {
  resume: ResumeDetails | null = null;
  title = 'Resume';

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    const resumeContent = this.contentService.getDetails('resume', 'charles-weise-resume');
    this.resume = resumeContent?.resumeDetails ?? null;
    if (resumeContent?.title) {
      this.title = resumeContent.title;
    }
  }

  trackByValue(_index: number, item: string): string {
    return item;
  }
}
