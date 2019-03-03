import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
},

// { path: '**', redirectTo: '' },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books'
  },
  {
    path: 'books',
    loadChildren: './+books/books.module#BooksModule'
  }
];
