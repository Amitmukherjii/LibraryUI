import {Routes} from '@angular/router';
import {BooksComponent} from './books.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';

export const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'details/:id',
    component: BookDetailsComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  }
];