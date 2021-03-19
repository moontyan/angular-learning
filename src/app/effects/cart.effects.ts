import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, withLatestFrom, tap } from 'rxjs/operators';
import { CartService } from '../services/cart.service';
import { cartTotalSelector, CartState } from '../reducers/cart.reducer';
import { loadCartItems, getCartItems, addToCart, deleteFromCart, calculateTotal, showTotal, checkoutCart, savePurchse, errorItem, clearCart } from '../actions/cart.actions';
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

    deleteFromCart$ = createEffect(() => this.actions$.pipe(
        ofType(deleteFromCart),
        map(action => {
            this.CartService.deleteFromCart(action.id);
            const cartItems = this.CartService.getItems();
            return getCartItems({items: cartItems});
        }),
        catchError(error => {
            console.log(error);
            return of(errorItem({ message: error }))
        })
    ))

    calculateTotal$ = createEffect(() => this.actions$.pipe(
        ofType(calculateTotal),
        map(() => {
            const total = this.CartService.calculateTotalPrice();
            return showTotal({ total });
        }),
        catchError(error => {
            console.log(error);
            return of(errorItem({ message: error }))
        })
    ))

    checkoutPurchase$ = createEffect(() => this.actions$.pipe(
        ofType(checkoutCart),
        withLatestFrom(this.store.select(cartTotalSelector)),
        map(([action, total]) => {
            const purchase = this.CartService.checkoutPurchase(action.info, total);
            return savePurchse({ purchase })
        })
    ))

    clearCart$ = createEffect(() => this.actions$.pipe(
        ofType(clearCart),
        map(() => {
            const items = this.CartService.clearCart();
            return getCartItems({ items })
        }),
        catchError(error => {
            console.log(error);
            return of(errorItem({ message: error }))
        })
    ))

    constructor(private actions$: Actions, private CartService: CartService, private store: Store<CartState>) {}
}