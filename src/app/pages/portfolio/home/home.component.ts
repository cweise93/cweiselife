import {
  Component,
  inject,
  AfterViewInit,
  ElementRef,
  ViewChild,
  HostListener
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ExperienceComponent } from '../experience/experience.component';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  roles = [
    'Solution Architect',
    'Program Director',
    'Engineering Team Lead',
    'Technical Strategy Advisor',
    'Full Stack Developer',
    'Innovation Consultant',
    'Enterprise Systems Integrator',
    'Cloud Solutions Specialist',
    'Business Process Optimizer',
    'Technology Transformation Leader',
    'People Development Champion',
    'Cross-Functional Team Leader'
  ];

  displayedText = '';
  currentRole = 0;
  isDeleting = false;
  typingSpeed = 100;
  deletingSpeed = 50;
  pauseTime = 1500;

  subtitleWrapped = false;

  @ViewChild('subtitleRef') subtitleRef!: ElementRef;

  readonly dialog = inject(MatDialog);

  ngOnInit() {
    this.typeEffect();
  }

  ngAfterViewInit() {
    this.checkSubtitleWrap();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkSubtitleWrap();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openDialog() {
    const experienceDialogRef = this.dialog.open(ExperienceComponent, {
      width: '90%',
      maxWidth: 'none'
    });

    experienceDialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openResume() {
    const resumeDialogRef = this.dialog.open(ResumeComponent, {
      width: '100%',
      maxWidth: '1024px',
      panelClass: 'resume-dialog-panel',
      autoFocus: false
    });

    resumeDialogRef.afterClosed().subscribe(result => {
      console.log(`Resume dialog closed: ${result}`);
    });
  }

  typeEffect() {
    const current = this.roles[this.currentRole];

    if (this.isDeleting) {
      this.displayedText = current.substring(0, this.displayedText.length - 1);
    } else {
      this.displayedText = current.substring(0, this.displayedText.length + 1);
    }

    // ✅ Delay wrap check until DOM updates
    setTimeout(() => this.checkSubtitleWrap(), 0);

    let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.displayedText === current) {
      delay = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayedText === '') {
      this.isDeleting = false;
      this.currentRole = (this.currentRole + 1) % this.roles.length;
      delay = this.typingSpeed;
    }

    setTimeout(() => this.typeEffect(), delay);
  }

  checkSubtitleWrap() {
    const element = this.subtitleRef?.nativeElement;
    if (!element) return;

    const isWrapped = element.scrollWidth > element.clientWidth;

    this.subtitleWrapped = isWrapped;

    console.log('Scroll width:', element.scrollWidth);
    console.log('Client width:', element.clientWidth);
    console.log('Subtitle wrapped:', isWrapped);
  }
}
