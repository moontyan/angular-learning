import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { getBooks, getBookById } from '../actions/book.actions';
import { Book } from '../books';

export const BOOKS_KEY = 'books'

export interface BooksState {
    booksArr: Book[],
    book: Book | null | undefined
};

export const initialState: BooksState = {
    booksArr: [],
    book: null
};

export const bookReducer = createReducer(
    initialState,
    on(getBooks, (state, action) => ({...state, booksArr: action.books})),
    on(getBookById, (state, action) => ({...state, book: action.book }))
);

export const featureSelector = createFeatureSelector<BooksState>(BOOKS_KEY)
export const booksSelector = createSelector(
    featureSelector,
    state => state.booksArr
);
export const bookInfoSelector = createSelector(
    featureSelector,
    state => state.book
);

