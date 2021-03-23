import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../books';
import { Store } from '@ngrx/store';
import { addToCart } from '../actions/cart.actions';

@Component({
    selector: 'app-book-card',
    templateUrl: './book-card.component.html',
    styleUrls: ['./book-card.component.css']
})

export class CardComponent implements OnInit {
    @Input() book: Book;
    @Input() view: string;
    imageSrc = 'assets/missing.jpg'

    buyBook(): void{
        const item = {
            id: this.book.id,
            title: this.book.title,
            imgUrl: this.book.imgUrl,
            quantity: 1,
            price: this.book.price
        }
        this.store.dispatch(addToCart({item}))
        window.alert('Book has been added to the cart!')
    }
    constructor(private store: Store) {
    }

    ngOnInit() {

    }

    setStyle() {
        return this.view === 'grid' ? 'info-container' : 'info-container-list'
    }
}