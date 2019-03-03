import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import {routes} from './app.routes';
import {RouterModule} from '@angular/router';
import {BooksModule} from './+books/books.module';
import {BookService} from './services/book.service';
import {CartService} from './services/cart.service';
import {Location, CommonModule} from '@angular/common';
import { LoginComponent } from './login/login.component';
//import { BooksComponent } from './+books/books.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BooksModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookService, 
    CartService, 
    Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
