import { Injectable } from '@angular/core';
import { books } from '../books';

@Injectable({
    providedIn: 'root'
  })

export class BookService {

    constructor() {}

    getBooks() {
        return books;
    }

    getBookById(id: number) {
        return books.find(book => book.id === id);
    }
}