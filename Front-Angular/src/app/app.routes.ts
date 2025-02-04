import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/view1', pathMatch: 'full' }, // Default redirect
  { path: 'users', component: UserListComponent },
  { 
    path: 'view1', 
    loadComponent: () => import('./herramientas/view1/view1.component')
      .then(m => m.View1Component) 
  },
  { 
    path: 'view2', 
    loadComponent: () => import('./herramientas/view2/view2.component')
      .then(m => m.View2Component) 
  },
  { 
    path: 'view3', 
    loadComponent: () => import('./herramientas/view3/view3.component')
      .then(m => m.View3Component) 
  },
  { path: '**', redirectTo: '/view1' }, // Redirect unknown paths
];