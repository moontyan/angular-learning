import { createAction, props } from '@ngrx/store';
import { Book } from '../books';

export const loadBooks = createAction('[Books Component] Load Books')
export const getBooks = createAction('[Books Component] Get Books', props<{books: Book[]}>())