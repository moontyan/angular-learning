import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { checkoutCart, clearCart } from '../actions/cart.actions';
import { cartCheckoutSelector } from '../reducers/cart.reducer'
import { Validators } from '@angular/forms';
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
        name: ['', [ 
        Validators.required,
        Validators.minLength(3) ]],
        lastName: ['', [ 
            Validators.required,
            Validators.minLength(3) ]],
        email: ['', [
            Validators.email,
            Validators.required
        ]],
        phone: ['', [
            Validators.required,
            Validators.pattern('[0-9]*')
        ]],
        address: ['', [
            Validators.required
        ]],
        service: ['', [
            Validators.required
        ]]
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

    get name() {
        return this.checkoutForm.get('name');
    }

    get lastName() {
        return this.checkoutForm.get('lastName');
    }

    get email() {
        return this.checkoutForm.get('email');
    }

    get phone() {
        return this.checkoutForm.get('phone')
    }

    get address() {
        return this.checkoutForm.get('address')
    }

    get service() {
        return this.checkoutForm.get('service')
    }

    constructor(private formBuilder: FormBuilder, private store: Store, private router: Router ) {}
}