import { Component, HostListener, OnInit, Type } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';

export interface NavItem {
  title: string;
  nav: boolean;
  link: string;
  loadComponent: () => Promise<Type<any>>;
  readyToTrigger: boolean;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    NgClass,
    MatButtonModule,
    CommonModule,
    ScrollAnimateDirective
],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  navItems: NavItem[] = [
    { title: 'Home', nav: false, link: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent), readyToTrigger: true },
    { title: 'Services', nav: true, link: 'services', loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent), readyToTrigger: true },
    { title: 'Projects', nav: true, link: 'projects', loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent), readyToTrigger: true },
//    { title: 'Testimony', nav: false, link: 'testimony', loadComponent: () => import('./testimony/testimony.component').then(m => m.TestimonyComponent), readyToTrigger: true },
//    { title: 'Blog', nav: true, link: 'blog', loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent), readyToTrigger: true },
    { title: 'Contact Me', nav: true, link: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent), readyToTrigger: true },
  ];
  scrolled = false;
  activeSection = 'home';
  loadedComponents: { [key: string]: Type<any> } = {};
  selectedNavLink: string = '';
  selectedTheme: 'light' | 'dark' | 'custom' = 'light';
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private router: Router, private seo: SeoService) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('selectedTheme') as 'light' | 'dark' | 'custom';
    if (savedTheme) {
      this.setTheme(savedTheme);
    }

    const currentPath = this.router.url.replace('/', '');
    if (currentPath) {
      setTimeout(() => {
        const el = document.getElementById(currentPath);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    this.setHomeSeo();
    this.navItems.forEach(item => this.loadComponent(item.link));
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 10;
    const sections = this.navItems.map(i => i.link);

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          if (this.selectedNavLink !== section) {
            this.selectedNavLink = section;
            this.loadComponent(section);
            this.router.navigateByUrl(`/${section}`, { replaceUrl: true });
          }
          break;
        }
      }
    }
  }

  scrollToSection(navItem: NavItem): void {
    if (navItem.readyToTrigger) {
      navItem.readyToTrigger = false;
    }

    const element = document.getElementById(navItem.link);
    if (element) {
      const yOffset = 0;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      this.loadComponent(navItem.link);
      this.router.navigateByUrl(`/${navItem.link}`, { replaceUrl: true });
    }
  }

  async loadComponent(section: string): Promise<void> {
    if (!this.loadedComponents[section]) {
      const item = this.navItems.find(n => n.link === section);
      if (item) {
        const module = await item.loadComponent();
        this.loadedComponents[section] = module;
      }
    }
    this.activeSection = section;
  }

  selectNav(navItem: NavItem): void {
    this.selectedNavLink = navItem.link;
    this.scrollToSection(navItem);
  }

  get themeIcon(): string {
    switch (this.selectedTheme) {
      case 'dark': return 'dark_mode';
      case 'light': return 'light_mode';
      case 'custom': return 'palette';
      default: return 'brightness_6';
    }
  }

  toggleTheme(): void {
    const themes: ('light' | 'dark' | 'custom')[] = ['light', 'dark', 'custom'];
    const nextIndex = (themes.indexOf(this.selectedTheme) + 1) % themes.length;
    this.setTheme(themes[nextIndex]);
  }

  setTheme(theme: 'light' | 'dark' | 'custom'): void {
    this.selectedTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('selectedTheme', theme);
  }

  private setHomeSeo(): void {
    const origin = this.getBaseUrl();
    this.seo.updatePageMeta({
      title: 'Charles Weise | Technology Strategy & Applied AI Leader',
      description: 'Technology strategist helping enterprises ship AI copilots, modernize architecture, and coach leaders through transformation.',
      keywords: [
        'Charles Weise',
        'technology strategy',
        'applied AI',
        'copilot consulting',
        'enterprise architecture'
      ],
      image: `${origin}/assets/imgs/headshot-960w.png`,
      url: origin,
      type: 'website'
    });

    this.seo.injectJsonLd('home-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Charles Weise',
      jobTitle: 'Technology Strategy & Applied AI Leader',
      url: origin,
      image: `${origin}/assets/imgs/headshot-960w.png`,
      sameAs: [
        'https://linkedin.com/in/cweise',
        'https://github.com/cweise93'
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Weise Industries'
      }
    });
  }

  private getBaseUrl(): string {
    if (typeof window !== 'undefined' && window.location) {
      return window.location.origin;
    }
    return 'https://cweise.com';
  }
}
