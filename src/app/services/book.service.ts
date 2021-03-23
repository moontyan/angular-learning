import { Injectable } from '@angular/core';
import { books } from '../books';

@Injectable({
    providedIn: 'root'
  })

export class BookService {

    constructor() {}

    getBooks(sortBy:string) {
        switch (sortBy) {
            case 'byName':
                return books.slice().sort((a, b) => {
                    return a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1 
                });
            case 'byHighestPrice':
                return books.slice().sort((a, b) => b.price - a.price);
            case 'byLowestPrice':
                return books.slice().sort((a, b) => a.price - b.price);
            default:
                return books;
        }
    }

    getBookById(id: number) {
        return books.find(book => book.id === id);
    }
}