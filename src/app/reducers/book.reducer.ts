import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { getBooks } from '../actions/book.actions';
import { Book } from '../books';

export const BOOKS_KEY = 'books'

export interface BooksState {
    booksArr: Book[]
};
export const initialState: BooksState = {
    booksArr: []
};

export const bookReducer = createReducer(
    initialState,
    on(getBooks, (state, action) => ({...state, booksArr: action.books}))
);

export const featureSelector = createFeatureSelector<BooksState>(BOOKS_KEY)
export const booksSelector = createSelector(
    featureSelector,
    state => state.booksArr
);

