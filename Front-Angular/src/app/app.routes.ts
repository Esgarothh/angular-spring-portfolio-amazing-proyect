import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent, // Import standalone component directly
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
];