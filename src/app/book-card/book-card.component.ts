import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../books';

@Component({
    selector: 'app-book-card',
    templateUrl: './book-card.component.html',
    styleUrls: ['./book-card.component.css']
})

export class CardComponent implements OnInit {
    @Input() book: Book;
    imageSrc = 'assets/missing.jpg'

    buyBook(): void{
        window.alert('Book has been added to the cart!');
    }
    constructor() {
    }

    ngOnInit() {

    }
}