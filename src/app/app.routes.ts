import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then((mod) => mod.BlogComponent),
  },
  {
    path: 'sobre',
    loadComponent: () =>
      import('./pages/about/about.component').then((mod) => mod.AboutComponent),
  },
];
