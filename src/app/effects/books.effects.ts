import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { BookService } from '../services/book.service';
import { loadBooks, getBooks, loadBookById, getBookById } from '../actions/book.actions';

@Injectable()

export class BooksEffects {
    loadBook$ = createEffect(() => this.actions$.pipe(
        ofType(loadBooks),
        map(action => { 
            return getBooks({ books: this.BookService.getBooks(action.sort) })}),
        catchError(() => EMPTY)
        )
    );

    loadBookById$ = createEffect(() => this.actions$.pipe(
        ofType(loadBookById),
        map(action => {
            const selectedBook = this.BookService.getBookById(action.id);
            return getBookById({ book: selectedBook})
        }),
        catchError(() => EMPTY)
    ))

    constructor(private actions$: Actions, private BookService: BookService) { }
}