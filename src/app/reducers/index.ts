import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { bookReducer, BooksState, BOOKS_KEY } from './book.reducer';
import { environment } from '../../environments/environment';

export interface State {
  [BOOKS_KEY]: BooksState,
}

export const reducers: ActionReducerMap<State> = {
  [BOOKS_KEY]: bookReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
