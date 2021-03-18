import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { getCartItems, errorItem, showTotal } from '../actions/cart.actions';
import { CartItem } from '../cart';

export const CART_KEY = 'cart';

export interface CartState {
    cartItems: CartItem[],
    total: number,
    error: string
};

const initialState: CartState = {
    cartItems: [],
    total: 0,
    error: ''
};

export const cartReducer = createReducer(
    initialState,
    on(getCartItems, (state, action) => ({...state, cartItems: action.items})),
    on(errorItem, (state, action) => ({...state, error: action.message })),
    on(showTotal, (state, action) => ({...state, total: action.total }))
);

export const featureSelector = createFeatureSelector<CartState>(CART_KEY);
export const cartSelector = createSelector(
    featureSelector,
    state => state.cartItems
);
export const cartTotalSelector = createSelector(
    featureSelector,
    state => state.total
);
export const cartErrorSelector = createSelector(
    featureSelector,
    state => state.error
);