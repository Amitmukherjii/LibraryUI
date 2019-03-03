import {Injectable} from '@angular/core';
import {Books} from '../classes/books';
import {BehaviorSubject, Observable, of, Subject, Subscriber} from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class CartService {
  private itemsInCartSubject: BehaviorSubject<Books[]> = new BehaviorSubject([]);
  private itemsInCart: Books[] = [];

  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: Books) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public removeFromCart(item: Books) {
    const currentItems = [...this.itemsInCart];
    const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }

  public getItems(): Observable<Books[]> {
    return this.itemsInCartSubject.asObservable();
  }

  public getTotalAmount(): Observable<number> {
    return this.itemsInCartSubject.pipe(map((items: Books[]) => {
      return items.reduce((prev, curr: Books) => {
        return prev + curr.price;
      }, 0);
    }));
  }
}
