import { Routes } from '@angular/router';
import { frameworksContent, guidesContent, siteContent, writingContent } from './core/content/content.catalog';

export const routes: Routes = [
  {
    path: '',
    title: 'cweise.com | Operational Intelligence',
    data: { seoDescription: siteContent.meta.description },
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'writing',
    title: 'Writing | cweise.com',
    data: { seoDescription: writingContent.meta.intro },
    loadComponent: () => import('./pages/writing/writing.component').then(m => m.WritingComponent)
  },
  { path: 'writing/:year/:month/:day/:slug', title: 'Essay | cweise.com', loadComponent: () => import('./pages/writing-detail/writing-detail.component').then(m => m.WritingDetailComponent) },
  {
    path: 'frameworks',
    title: 'Frameworks | cweise.com',
    data: { seoDescription: frameworksContent.meta.intro },
    loadComponent: () => import('./pages/frameworks/frameworks.component').then(m => m.FrameworksComponent)
  },
  {
    path: 'guides',
    title: 'Guides | cweise.com',
    data: { seoDescription: guidesContent.meta.intro },
    loadComponent: () => import('./pages/guides/guides.component').then(m => m.GuidesComponent)
  },
  { path: 'guides/:slug', title: 'Guide | cweise.com', loadComponent: () => import('./pages/guide-detail/guide-detail.component').then(m => m.GuideDetailComponent) },
  {
    path: 'frameworks/:year/:month/:day/:slug',
    title: 'Framework | cweise.com',
    data: { layout: 'framework-workspace' },
    loadComponent: () => import('./pages/framework-detail/framework-detail.component').then(m => m.FrameworkDetailComponent)
  },
  { path: 'about', title: 'About | cweise.com', data: { seoDescription: siteContent.meta.description }, loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'connect', title: 'Connect | cweise.com', data: { seoDescription: siteContent.connect.intro }, loadComponent: () => import('./pages/connect/connect.component').then(m => m.ConnectComponent) },
  { path: '**', redirectTo: '' }
];
