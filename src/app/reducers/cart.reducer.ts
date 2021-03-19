import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { getCartItems, errorItem, showTotal, savePurchse } from '../actions/cart.actions';
import { CartItem, Purchase } from '../cart';

export const CART_KEY = 'cart';

export interface CartState {
    cartItems: CartItem[],
    total: number,
    purchase: Purchase | null,
    error: string
};

const initialState: CartState = {
    cartItems: [],
    total: 0,
    purchase: null,
    error: ''
};

export const cartReducer = createReducer(
    initialState,
    on(getCartItems, (state, action) => ({...state, cartItems: action.items})),
    on(errorItem, (state, action) => ({...state, error: action.message })),
    on(showTotal, (state, action) => ({...state, total: action.total })),
    on(savePurchse, (state, action) => ({...state, purchase: action.purchase }))
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
export const cartCheckoutSelector = createSelector(
    featureSelector,
    state => state.purchase
);
export const cartErrorSelector = createSelector(
    featureSelector,
    state => state.error
);