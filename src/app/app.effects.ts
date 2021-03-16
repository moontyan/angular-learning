import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { BooksEffects } from './effects/books.effects';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions) {}
}
