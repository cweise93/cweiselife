import { Routes } from '@angular/router';
import { frameworksContent, operatingToolsContent, siteContent, writingContent } from './core/content/content.catalog';

export const routes: Routes = [
  {
    path: '',
    title: 'cweise.com | Operational Clarity',
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
    path: 'operating-tools',
    title: 'Operating Tools | cweise.com',
    data: { seoDescription: operatingToolsContent.meta.intro },
    loadComponent: () => import('./pages/operating-tools/operating-tools.component').then(m => m.OperatingToolsComponent)
  },
  {
    path: 'guides',
    title: 'Operating Tools | cweise.com',
    loadComponent: () => import('./pages/legacy-guides-redirect/legacy-guides-redirect.component').then(m => m.LegacyGuidesRedirectComponent)
  },
  {
    path: 'guides/:slug',
    title: 'Operating Tool | cweise.com',
    loadComponent: () => import('./pages/legacy-guides-redirect/legacy-guides-redirect.component').then(m => m.LegacyGuidesRedirectComponent)
  },
  { path: 'operating-tools/:slug', title: 'Operating Tool | cweise.com', loadComponent: () => import('./pages/operating-tool-detail/operating-tool-detail.component').then(m => m.OperatingToolDetailComponent) },
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
