import { createAction, props } from '@ngrx/store';
import { CartItem } from '../cart';

export const loadCartItems = createAction('[Cart Component] Load Cart Items');
export const getCartItems = createAction('[Cart Component] Get Cart Items', props<{ items: CartItem[] }>());
export const addToCart = createAction('[Cart Component] Add To Cart', props<{ item: CartItem }>());
export const deleteFromCart = createAction('[Cart Component] Delete From Cart', props<{ id: number }>());
export const errorItem = createAction('[Cart Component] Show Error', props<{ message: string }>());