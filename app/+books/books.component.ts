import { Component, OnInit } from '@angular/core';
import { Books } from '../classes/books';
import { BookService } from '../services/book.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'spa-books',
  templateUrl: 'books.component.html',
  styleUrls: ['books.component.css']
})
export class BooksComponent implements OnInit {

  public items: Books[] = [];

  constructor(private booksServices: BookService
    , private cartService: CartService) {
      booksServices.getBooks()
      .subscribe(_ => this.items = _);

    this.cartService
      .getItems()
      .subscribe((items: Books[]) => {
      // remove items that are in our cart
        const allItems = this.items;
        this.items = allItems.filter(_ => {
          return !this.itemIsInCart(_, items);
        });
      });
  }
  ngOnInit() {
  }

  private itemIsInCart(item: Books, cart: Books[]): boolean {
    return cart.find(_ => _.id === item.id) != null;
  }
}
