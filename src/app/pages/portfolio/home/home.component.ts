import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  roles = [
    'a Solution Architect',
    'a Program Director',
    'an Engineering Team Lead',
    'a Technical Strategy Advisor',
    'a Full Stack Developer',
    'an Innovation Consultant',
    'an Enterprise Systems Integrator',
    'a Cloud Solutions Specialist',
    'a Business Process Optimizer',
    'a Technology Transformation Leader',
    'a People Development Champion',
    'a Cross-Functional Team Leader'
  ];

  displayedText = '';
  currentRole = 0;
  isDeleting = false;
  typingSpeed = 100;
  deletingSpeed = 50;
  pauseTime = 1500;

  ngOnInit() {
    this.typeEffect();
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  typeEffect() {
    const current = this.roles[this.currentRole];

    if (this.isDeleting) {
      this.displayedText = current.substring(0, this.displayedText.length - 1);
    } else {
      this.displayedText = current.substring(0, this.displayedText.length + 1);
    }

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

  readonly dialog = inject(MatDialog);

  openDialog() {
    let experienceDialogRef = this.dialog.open(ExperienceComponent,
      {
        width: '90%',
        maxWidth: 'none'
      }
    );
    experienceDialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}