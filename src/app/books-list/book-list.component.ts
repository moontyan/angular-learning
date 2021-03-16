import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { booksSelector } from '../reducers/book.reducer'
import { loadBooks } from '../actions/book.actions';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})

export class BookListComponent implements OnInit {
    books$ = this.store.select(booksSelector)

    constructor(private store: Store) {}

    ngOnInit() {
        this.store.dispatch(loadBooks())
    }
}