import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadBookById } from '../actions/book.actions';
import { bookInfoSelector } from '../reducers/book.reducer';
import { addToCart } from '../actions/cart.actions';
import { Book } from '../books';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent implements OnInit {
    book$ = this.store.select(bookInfoSelector);
    book: any
    imageSrc = 'assets/missing.jpg'

    constructor(private route: ActivatedRoute, private store: Store) {}

    ngOnInit() {
        this.book$.subscribe(event => this.book = event);
        const routeParams = this.route.snapshot.paramMap;
        const bookIdfromParams = Number(routeParams.get('id'));
        this.store.dispatch(loadBookById({ id : bookIdfromParams }));
    }

    addToCart() {
        const item = {
            id: this.book.id,
            title: this.book.title,
            imgUrl: this.book.imgUrl,
            quantity: 1,
            price: this.book.price
        }
        this.store.dispatch(addToCart({item}))
    }
}