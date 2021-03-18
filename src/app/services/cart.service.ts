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
        this.itemsCart.forEach(el => {
            if (el.id === item.id) {
                this.itemsCart = this.itemsCart.filter(e => e.id !== item.id)
                const updatedItem = {
                    id: el.id,
                    title: el.title,
                    imgUrl: el.imgUrl,
                    quantity: el.quantity + 1,
                    price: el.price
                }
                this.itemsCart = [...this.itemsCart, updatedItem]
                exists = true
            }
        })
        if (!exists) {
            this.itemsCart = [...this.itemsCart, item]
        }
    }

    deleteFromCart(id: number) {
        this.itemsCart = this.itemsCart.filter(el => el.id !== id)
    }

    calculateTotalPrice()  {
        const priceArr = this.itemsCart.map(item => item.price * item.quantity);
        return priceArr.reduce((acc, current) => acc + current, 0);
    }
}