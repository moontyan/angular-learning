export interface Book {
    id: number,
    title: string,
    author: string,
    genre: string,
    description: string,
    imgUrl: string,
    price: number
}

export const books: Book[] = [
    {
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
    },
    {
        id: 3,
        title: 'Moby Dick',
        author: 'Herman Melville',
        genre: 'Novel',
        description: `First published in 1851, Melville's masterpiece is, in Elizabeth Hardwick's words, "the greatest novel in American literature." The saga of Captain Ahab and his monomaniacal pursuit of the white whale remains a peerless adventure story but one full of mythic grandeur, poetic majesty, and symbolic power. Filtered through the consciousness of the novel's narrator, Ishmael, Moby-Dick draws us into a universe full of fascinating characters and stories, from the noble cannibal Queequeg to the natural history of whales, while reaching existential depths that excite debate and contemplation to this day.`,
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81HBvFY7sjL.jpg',
        price: 235,
    },
    {
        id: 4,
        title: 'The Divine Comedy',
        author: 'Dante Alighieri',
        genre: 'Poem',
        description: `Belonging in the immortal company of the great works of literature, Dante Alighieri's poetic masterpiece, The Divine Comedy, is a moving human drama, an unforgettable visionary journey through the infinite torment of Hell, up the arduous slopes of Purgatory, and on to the glorious realm of Paradise — the sphere of universal harmony and eternal salvation.`,
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/91vybHeMSxL.jpg',
        price: 535,
    },
    {
        id: 5,
        title: 'The Catcher in the Rye',
        author: 'J. D. Salinger',
        genre: 'Realistic fiction',
        description: `The Catcher in the Rye is a 1945 novel by J. D. Salinger. Originally published for adults, the novel has become a common part of high school and college curricula throughout the English-speaking world; it has also been translated into almost all of the world's major languages. Around 250,000 copies are sold each year, with total sales of more than sixty-five million. The novel's antihero, Holden Caulfield, has become an icon for teenage rebellion.`,
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg',
        price: 535,
    },
];