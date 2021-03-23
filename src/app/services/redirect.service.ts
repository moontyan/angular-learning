import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cartSelector } from '../reducers/cart.reducer';

@Injectable({
    providedIn: 'root'
})

export class RedirectService implements CanActivate {
    cartItems$ = this.store.select(cartSelector);
    cartLength: number;

    canActivate() {
        if (this.cartLength === 0) {
            this.router.navigate(['cart']);
        }

        return true
    }

    constructor(private router: Router, private store: Store) {
        this.cartItems$.subscribe(event => this.cartLength = event.length);
    }
}