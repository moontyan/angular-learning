import { Injectable } from '@angular/core';
import { books } from '../books';

@Injectable({
    providedIn: 'root'
  })

export class BookService {

    getBooks() {
        return books;
    }
    constructor() {}
}