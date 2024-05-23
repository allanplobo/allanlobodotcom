import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./blog/blog.component').then((sc) => sc.BlogComponent),
  },
];
