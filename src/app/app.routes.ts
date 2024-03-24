import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title:
      'Allan Lobo | Serviços em Desenvolvimento de sistemas e Blog técnico',
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./pages/blog/blog.component').then((mod) => mod.BlogComponent),
    title: 'Allan Lobo | Blog com conteúdos técnicos sobre programação',
  },
  {
    path: 'sobre',
    loadComponent: () =>
      import('./pages/about/about.component').then((mod) => mod.AboutComponent),
    title: 'Allan Lobo | Sobre mim',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
