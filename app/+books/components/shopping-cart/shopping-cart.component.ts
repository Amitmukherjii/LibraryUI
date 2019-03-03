import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {Books} from '../../../classes/books';
import {Observable,of} from 'rxjs';

@Component({
  selector: 'lib-shopping-cart',
  templateUrl: 'shopping-cart.component.html',
  styleUrls: ['shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public shoppingCartItems$: Observable<Books[]> = of([]);
  public shoppingCartItems: Books[] = [];

  constructor(private cartService: CartService) {
    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
  }

  ngOnInit() {
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(item: Books) {
    this.cartService.removeFromCart(item)
  }
}
