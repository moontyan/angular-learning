import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books-list/book-list.component';
import { CartComponent } from './cart/cart.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'checkout', component: CartCheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
