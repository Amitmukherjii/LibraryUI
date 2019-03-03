import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../services/book.service';
import {Books} from '../../../classes/books';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'lib-book-details',
  templateUrl: 'book-details.component.html',
  styleUrls: ['book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public book: Books = {};

  constructor(private route: ActivatedRoute
    , private router: Router
    , private bookService: BookService
    , private cartService: CartService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.bookService
        .getBook(id)
        .subscribe(_ => this.book = _)
    });
  }

  public addToCart(book: Books) {
    this.cartService.addToCart(book);
    this.router.navigateByUrl('/');
  }

}
