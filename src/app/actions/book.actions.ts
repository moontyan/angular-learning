import { createAction, props } from '@ngrx/store';
import { Book } from '../books';

export const loadBooks = createAction('[Books Component] Load Books', props<{ sort: string }>());
export const loadBookById = createAction('[Book Component] Load Book By Id', props<{ id: number }>());
export const getBooks = createAction('[Books Component] Get Books', props<{ books: Book[] }>());
export const getBookById = createAction('[Book Component] Get Book By Id', props<{ book: Book | undefined }>());