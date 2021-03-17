import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { getCartItems, errorItem } from '../actions/cart.actions';
import { CartItem } from '../cart';

export const CART_KEY = 'cart';

export interface CartState {
    cartItems: CartItem[],
    error: string
};

const initialState: CartState = {
    cartItems: [],
    error: ''
};

export const cartReducer = createReducer(
    initialState,
    on(getCartItems, (state, action) => ({...state, cartItems: action.items})),
    on(errorItem, (state, action) => ({...state, error: action.message }))
);

export const featureSelector = createFeatureSelector<CartState>(CART_KEY);
export const cartSelector = createSelector(
    featureSelector,
    state => state.cartItems
);
export const cartErrorSelector = createSelector(
    featureSelector,
    state => state.error
)