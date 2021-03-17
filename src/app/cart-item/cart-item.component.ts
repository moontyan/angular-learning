import { Component, Input } from '@angular/core';
import { CartItem } from '../cart';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent {
    @Input() item: CartItem;
    imageSrc = 'assets/missing.jpg'

    constructor() {}
}