import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartSelector, cartTotalSelector } from '../reducers/cart.reducer';
import { loadCartItems, calculateTotal } from '../actions/cart.actions';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
    cartItems$ = this.store.select(cartSelector);
    cartTotal$ = this.store.select(cartTotalSelector);

    constructor(private store: Store) {}

    ngOnInit() {
        this.store.dispatch(loadCartItems());
        this.store.dispatch(calculateTotal());
    }
}