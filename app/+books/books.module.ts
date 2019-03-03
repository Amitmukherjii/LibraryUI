import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksComponent} from './books.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { BookFilterComponent } from './components/book-filter/book-filter.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import {RouterModule} from '@angular/router';
import {routes} from './books.routes';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
//import { ColorListComponent } from './components/color-list/color-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BooksComponent,
    BookListComponent,
    BookComponent,
    BookFilterComponent,
    BookDetailsComponent,
    ShoppingCartComponent
    // ColorListComponent,
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule {
}