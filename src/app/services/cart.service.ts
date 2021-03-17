import { Injectable } from '@angular/core';
import { cart, CartItem } from '../cart';

@Injectable({
    providedIn: 'root'
  })

export class CartService {
    itemsCart = [...cart]

    constructor() {}

    getItems() {
        return this.itemsCart;
    }

    addToCart(item: CartItem) {
        let exists = false;
        this.itemsCart.map(el => {
            if (el.id === item.id) {
                el.quantity++
                exists = true
            }
        })
        if (!exists) {
            this.itemsCart = [...this.itemsCart, item]
        }
    }
}