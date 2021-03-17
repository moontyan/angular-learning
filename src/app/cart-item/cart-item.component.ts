import { Component, Input } from '@angular/core';
import { CartItem } from '../cart';
import { Store } from '@ngrx/store';
import { deleteFromCart } from '../actions/cart.actions';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent {
    @Input() item: CartItem;
    imageSrc = 'assets/missing.jpg'

    constructor(private store: Store) {}

    deleteItem(id: number) {
        this.store.dispatch(deleteFromCart({ id }));
    }
}