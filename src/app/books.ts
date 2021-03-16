export interface Book {
    id: number,
    title: string,
    author: string,
    genre: string,
    imgUrl: string,
    price: number
}

export const books: Book[] = [
    {
        id: 1,
        title: '1984',
        author: 'George Orwell',
        genre: 'Dystopia',
        imgUrl: 'https://pp.userapi.com/c639628/v639628257/43767/NjoFtgiKh5I.jpg',
        price: 320,
    },
    {
        id: 2,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Tragedy',
        imgUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_hr.jpg',
        price: 410,
    },
    {
        id: 3,
        title: 'Moby Dick',
        author: 'Herman Melville',
        genre: 'Novel',
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81HBvFY7sjL.jpg',
        price: 235,
    },
    {
        id: 4,
        title: 'The Divine Comedy',
        author: 'Dante Alighieri',
        genre: 'Poem',
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/91vybHeMSxL.jpg',
        price: 535,
    },
    {
        id: 5,
        title: 'The Catcher in the Rye',
        author: 'J. D. Salinger',
        genre: 'Realistic fiction',
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg',
        price: 535,
    },
];