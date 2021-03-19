import { createAction, props } from '@ngrx/store';
import { CartItem, CustomerInfo, Purchase } from '../cart';

export const loadCartItems = createAction('[Cart Component] Load Cart Items');
export const getCartItems = createAction('[Cart Component] Get Cart Items', props<{ items: CartItem[] }>());

export const addToCart = createAction('[Cart Component] Add To Cart', props<{ item: CartItem }>());

export const deleteFromCart = createAction('[Cart Component] Delete From Cart', props<{ id: number }>());

export const calculateTotal = createAction('[Cart Component] Calculate Total');
export const showTotal = createAction('[Cart Component] Show Total', props<{ total: number }>());

export const clearCart = createAction('[Cart Component] Clear Cart');

export const checkoutCart = createAction('[Cart Component] Checkout Cart', props<{ info: CustomerInfo }>());
export const savePurchse = createAction('[Cart Component] Save Purchase', props<{ purchase: Purchase }>());
export const errorItem = createAction('[Cart Component] Show Error', props<{ message: string }>());