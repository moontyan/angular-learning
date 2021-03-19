import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
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

    constructor(private store: Store, private router: Router) {}

    ngOnInit() {
        this.store.dispatch(loadCartItems());
        this.store.dispatch(calculateTotal());
    }

    goToCheckout(): void {
        this.router.navigate(['checkout'])
    }
}