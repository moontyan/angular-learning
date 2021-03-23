import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { booksSelector } from '../reducers/book.reducer'
import { loadBooks } from '../actions/book.actions';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})

export class BookListComponent implements OnInit {
    books$ = this.store.select(booksSelector)
    gridViewIcon = faThLarge;
    listViewIcon = faBars;
    productView = 'grid';
    activeSort = 'byName'

    constructor(private store: Store) {}

    ngOnInit() {
        this.store.dispatch(loadBooks({ sort: 'byName' }))
    }

    sortHandler(sort: string) {
        this.store.dispatch(loadBooks({ sort }))
        this.activeSort = sort;
    }

    changeView(view: string) {
        view === 'grid' ? this.productView = 'grid' : this.productView = 'list';
    }

    setStyle() {
        return this.productView === 'grid' ? 'book-list' : 'book-list-bars';
    }
}