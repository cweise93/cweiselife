import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrolltop',
  imports: [
    CommonModule
  ],
  templateUrl: './scrolltop.component.html',
  styleUrl: './scrolltop.component.scss'
})
export class ScrolltopComponent {
  isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isVisible = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
