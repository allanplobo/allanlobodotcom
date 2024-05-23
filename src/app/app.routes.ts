import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    title:
      'Allan Lobo - Desenvolvedor e criador de conteúdo sobre tecnologia e desenvolvimento.',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    title: 'Sobre | Allan Lobo',
    loadComponent: () =>
      import('./about/about.component').then((sc) => sc.AboutComponent),
  },
  {
    path: 'blog',
    title: 'Blog | Allan Lobo',
    loadComponent: () =>
      import('./blog/blog.component').then((sc) => sc.BlogComponent),
  },
];
