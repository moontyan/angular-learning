import { booksSelector, bookInfoSelector } from '../reducers/book.reducer';
import { State } from '../reducers/index';

describe('Books selectors', () => {
    const initialState: State = {
        books: {
            booksArr: [{
                id: 1,
                title: '1984',
                author: 'George Orwell',
                genre: 'Dystopia',
                description: `Nineteen Eighty-Four: A Novel, often published as 1984, is a dystopian social science fiction novel by English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime. Thematically, Nineteen Eighty-Four centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society. Orwell, himself a democratic socialist, modelled the authoritarian government in the novel after Stalinist Russia. More broadly, the novel examines the role of truth and facts within politics and the ways in which they are manipulated.`,
                imgUrl: 'https://pp.userapi.com/c639628/v639628257/43767/NjoFtgiKh5I.jpg',
                price: 320,
            },
            {
                id: 2,
                title: 'The Great Gatsby',
                author: 'F. Scott Fitzgerald',
                genre: 'Tragedy',
                description: 'The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the "roaring" 1920s as the economy soared. At the same time, Prohibition, the ban on the sale and manufacture of alcohol as mandated by the Eighteenth Amendment, made millionaires out of bootleggers and led to an increase in organized crime, for example the Jewish mafia. Although Fitzgerald, like Nick Carraway in his novel, idolized the riches and glamor of the age, he was uncomfortable with the unrestrained materialism and the lack of morality that went with it, a kind of decadence.',
                imgUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_hr.jpg',
                price: 410,
            }],
            book: {
                id: 1,
                title: '1984',
                author: 'George Orwell',
                genre: 'Dystopia',
                description: `Nineteen Eighty-Four: A Novel, often published as 1984, is a dystopian social science fiction novel by English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime. Thematically, Nineteen Eighty-Four centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society. Orwell, himself a democratic socialist, modelled the authoritarian government in the novel after Stalinist Russia. More broadly, the novel examines the role of truth and facts within politics and the ways in which they are manipulated.`,
                imgUrl: 'https://pp.userapi.com/c639628/v639628257/43767/NjoFtgiKh5I.jpg',
                price: 320,
            }
        },
        cart: {
            cartItems: [],
            total: 0,
            error: '',
            purchase: {
                info: {
                    name: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    service: '',
                    address: '',
                },
                product: [],
                total: 0
            }
        }
    }

    it('should select all books', () => {
        const result = booksSelector.projector(initialState.books);
        expect(result.length).toEqual(2);
        expect(result[0].title).toBe('1984');
    })

    it('should select chosen book', () => {
        const result = bookInfoSelector.projector(initialState.books);
        expect(result?.id).toBe(1);
        expect(result?.title).toBe('1984');
    })
})