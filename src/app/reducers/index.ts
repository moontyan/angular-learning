import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { bookReducer, BooksState, BOOKS_KEY } from './book.reducer';
import { cartReducer, CartState, CART_KEY } from './cart.reducer';
import { environment } from '../../environments/environment';

export interface State {
  books: BooksState,
  cart: CartState
}

export const reducers: ActionReducerMap<State> = {
  [BOOKS_KEY]: bookReducer,
  [CART_KEY]: cartReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
