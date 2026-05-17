import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'cweise.com | Operational Intelligence', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'writing', title: 'Writing | cweise.com', loadComponent: () => import('./pages/writing/writing.component').then(m => m.WritingComponent) },
  { path: 'writing/:slug', title: 'Essay | cweise.com', loadComponent: () => import('./pages/writing-detail/writing-detail.component').then(m => m.WritingDetailComponent) },
  { path: 'frameworks', title: 'Frameworks | cweise.com', loadComponent: () => import('./pages/frameworks/frameworks.component').then(m => m.FrameworksComponent) },
  { path: 'frameworks/:slug', title: 'Framework | cweise.com', loadComponent: () => import('./pages/framework-detail/framework-detail.component').then(m => m.FrameworkDetailComponent) },
  { path: 'initiatives', title: 'Initiatives | cweise.com', loadComponent: () => import('./pages/initiatives/initiatives.component').then(m => m.InitiativesComponent) },
  { path: 'initiatives/:slug', title: 'Initiative | cweise.com', loadComponent: () => import('./pages/initiative-detail/initiative-detail.component').then(m => m.InitiativeDetailComponent) },
  { path: 'about', title: 'About | cweise.com', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'connect', title: 'Connect | cweise.com', loadComponent: () => import('./pages/connect/connect.component').then(m => m.ConnectComponent) },
  { path: '**', redirectTo: '' }
];
