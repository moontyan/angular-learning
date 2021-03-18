import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { cartSelector } from '../reducers/cart.reducer';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})

export class NavBarComponent {
    faShoppingCart = faShoppingCart;
    cartItems$ = this.store.select(cartSelector);
    cartItemsQuantity: number;

    constructor(private store: Store) {
        this.cartItems$.subscribe(event => this.cartItemsQuantity = event.length);
    }

}