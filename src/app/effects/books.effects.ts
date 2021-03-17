import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map as rxMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { BookService } from '../services/book.service';
import { loadBooks, getBooks } from '../actions/book.actions';

@Injectable()

export class BooksEffects {
    loadBook$ = createEffect(() => this.actions$.pipe(
        ofType(loadBooks),
        rxMap(() => getBooks({ books: this.BookService.getBooks() })),
        catchError(() => EMPTY)
        )
    );

    constructor(private actions$: Actions, private BookService: BookService) { }
}