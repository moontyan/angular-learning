import { initialState, bookReducer, BooksState } from '../reducers/book.reducer';
import { getBookById } from '../actions/book.actions';

describe('Books Reducer', () => {
    describe('unknown action', () => {
        it('should return default state', () => {
            const action = {
                type: '[Unknown Component] Unknown Action'
            };

            const newState = bookReducer(initialState, action);

            expect(newState).toBe(initialState);
        })
    })

    describe('getBookById action', () => {
        it('should return copy of initial state with updated fields', () => {
            const book = {
                id: 1,
                title: '1984',
                author: 'George Orwell',
                genre: 'Dystopia',
                description: '',
                imgUrl: 'https://pp.userapi.com/c639628/v639628257/43767/NjoFtgiKh5I.jpg',
                price: 320,
            }

            const newState: BooksState = {
                booksArr: [],
                book
            }

            const action = getBookById({ book });
            const state = bookReducer(initialState, action);

            expect(state).toEqual(newState);
            expect(state).not.toBe(initialState);
        })
    })
})