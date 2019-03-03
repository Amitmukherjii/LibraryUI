import {Component, ViewEncapsulation} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {CartService} from './services/cart.service';
import {Observable} from 'rxjs';
import {Books} from './classes/books';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { User } from './classes/users';

@Component({
  selector: 'lib-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  public shoppingCartItems$: Observable<Books[]>;
  currentUser: User;

  constructor(private router: Router,
    private authenticationService: AuthenticationService, 
    public location: Location
  , private cartService: CartService) {

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    this.shoppingCartItems$ = this
      .cartService
      .getItems();

    this.shoppingCartItems$.subscribe(_ => _);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
