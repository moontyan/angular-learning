import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { CartService } from '../services/cart.service';
import { loadCartItems, getCartItems, addToCart , errorItem } from '../actions/cart.actions';
import { of } from 'rxjs';

@Injectable()

export class CartEffects {
    loadCartItems$ = createEffect(() => this.actions$.pipe(
        ofType(loadCartItems),
        switchMap(() => {
            const cartItems = this.CartService.getItems();
            return of(getCartItems({ items: cartItems }));
        }),
        catchError(error => of(errorItem({ message: error })))
    ));

    addToCart$ = createEffect(() => this.actions$.pipe(
        ofType(addToCart),
        map(action => {
            this.CartService.addToCart(action.item);
            const cartItems = this.CartService.getItems();
            return getCartItems({items: cartItems})
        }),
        catchError(error => {
            console.log(error);
            return of(errorItem({ message: error }))})
    ));

    constructor(private actions$: Actions, private CartService: CartService) {}
}