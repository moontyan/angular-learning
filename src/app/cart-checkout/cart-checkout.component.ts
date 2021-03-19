import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { checkoutCart, clearCart } from '../actions/cart.actions';
import { cartCheckoutSelector } from '../reducers/cart.reducer'
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-cart-checkout',
    templateUrl: './cart-checkout.component.html',
    styleUrls: ['./cart-checkout.component.css']
})

export class CartCheckoutComponent {
    purchaseSuccess = false
    cartCheckoutSuccess$ = this.store.select(cartCheckoutSelector)
    checkoutForm = this.formBuilder.group({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        service: ''
    });

    onSubmit(): void {
        this.store.dispatch(checkoutCart({info: this.checkoutForm.value}))
        this.checkoutForm.reset();
        this.store.dispatch(clearCart());
        this.purchaseSuccess = true
    }

    onReturn() {
        this.purchaseSuccess = false
        this.router.navigate(['/'])
    }

    constructor(private formBuilder: FormBuilder, private store: Store, private router: Router ) {}
}