'use strict';

var books = [ {
    "title": "In Search of Lost Time",
    "author": "Marcel Proust",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51me-a8zgcL._SL160_.jpg"
}, {
    "title": "Ulysses",
    "author": "James Joyce",
    "img": "http://ecx.images-amazon.com/images/I/41BS9YHQF1L._SL160_.jpg"
}, {
    "title": "The Odyssey",
    "author": "Homer",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51cUwb0DUPL._SL160_.jpg"
}, {
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "img": "https://images-na.ssl-images-amazon.com/images/I/510UE7bvHoL._SL160_.jpg"
}, {
    "title": "Moby Dick",
    "author": "Herman Melville",
    "img": "http://ecx.images-amazon.com/images/I/51K5TZOIvtL._SL160_.jpg"
}, {
    "title": "The Divine Comedy",
    "author": "Dante Alighieri",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51zYBhmaIML._SL160_.jpg"
}, {
    "title": "Hamlet",
    "author": "William Shakespeare",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51xBp-sLaSL._SL160_.jpg"
}, {
    "title": "The Adventures of Huckleberry Finn",
    "author": "Mark Twain",
    "img": "http://ecx.images-amazon.com/images/I/51Ht1M-GPXL._SL160_.jpg"
}, {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51khWutZqCL._SL160_.jpg"
}, {
    "title": "The Iliad",
    "author": "Homer",
    "img": "http://ecx.images-amazon.com/images/I/512j6byhjvL._SL160_.jpg"
}, {
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel Garcia Marquez",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51tkcSAhSDL._SL160_.jpg"
}, {
    "title": "Madame Bovary",
    "author": "Gustave Flaubert",
    "img": "http://ecx.images-amazon.com/images/I/51o5dnjk07L._SL160_.jpg"
}, {
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoyevsky",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51zZH9paouL._SL160_.jpg"
}, {
    "title": "The Brothers Karamazov",
    "author": "Fyodor Dostoyevsky",
    "img": "http://ecx.images-amazon.com/images/I/51c4Gb6Uo0L._SL160_.jpg"
}, {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51wpT1I4S%2BL._SL160_.jpg"
}, {
    "title": "Wuthering Heights",
    "author": "Emily Brontë",
    "img": "http://ecx.images-amazon.com/images/I/51-6ApKTHaL._SL160_.jpg"
}, {
    "title": "The Sound and the Fury",
    "author": "William Faulkner",
    "img": "http://ecx.images-amazon.com/images/I/51--Odn0keL._SL160_.jpg"
}, {
    "title": "Lolita",
    "author": "Vladimir Nabokov",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41s2G6WxLvL._SL160_.jpg"
}, {
    "title": "Nineteen Eighty Four",
    "author": "George Orwell",
    "img": "http://ecx.images-amazon.com/images/I/41-nF-VjPxL._SL160_.jpg"
}, {
    "title": "Alice's Adventures in Wonderland",
    "author": "Lewis Carroll",
    "img": "http://ecx.images-amazon.com/images/I/41h9Pz2qeIL._SL160_.jpg"
}, {
    "title": "To the Lighthouse",
    "author": "Virginia Woolf",
    "img": "https://images-na.ssl-images-amazon.com/images/I/512RH0o4H2L._SL160_.jpg"
}, {
    "title": "Great Expectations",
    "author": "Charles Dickens",
    "img": "http://ecx.images-amazon.com/images/I/61buI5-QU5L._SL160_.jpg"
}, {
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "img": "http://ecx.images-amazon.com/images/I/51vPf2CfSEL._SL160_.jpg"
}, {
    "title": "The Catcher in the Rye",
    "author": "J. D. Salinger",
    "img": "http://ecx.images-amazon.com/images/I/41gTM5%2BdbfL._SL160_.jpg"
}, {
    "title": "Middlemarch",
    "author": "George Eliot",
    "img": "http://ecx.images-amazon.com/images/I/51eRjEMiOgL._SL160_.jpg"
}, {
    "title": "Gulliver's Travels",
    "author": "Jonathan Swift",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51Wi%2B3rUsdL._SL160_.jpg"
}, {
    "title": "The Aeneid",
    "author": "Virgil",
    "img": "http://ecx.images-amazon.com/images/I/517qYmrcfpL._SL160_.jpg"
}, {
    "title": "Heart of Darkness",
    "author": "Joseph Conrad",
    "img": "https://images-na.ssl-images-amazon.com/images/I/517-qbTGBdL._SL160_.jpg"
}, {
    "title": "One Thousand and One Nights",
    "author": "India/Iran/Iraq/Egypt",
    "img": "http://ecx.images-amazon.com/images/I/518Nb9heqmL._SL160_.jpg"
}, {
    "title": "The Canterbury Tales",
    "author": "Geoffrey Chaucer",
    "img": "http://ecx.images-amazon.com/images/I/5127gBD7WYL._SL160_.jpg"
}, {
    "title": "The Stranger",
    "author": "Albert Camus",
    "img": "https://images-na.ssl-images-amazon.com/images/I/5186RLIXsLL._SL160_.jpg"
}, {
    "title": "The Stories of Anton Chekhov",
    "author": "Anton Chekhov",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51Hw4%2BqGKFL._SL160_.jpg"
}, {
    "title": "The Grapes of Wrath",
    "author": "John Steinbeck",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41s2Apn3AuL._SL160_.jpg"
}, {
    "title": "Catch-22",
    "author": "Joseph Heller",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51kqbC3YKvL._SL160_.jpg"
}, {
    "title": "The Red and the Black",
    "author": "Stendhal",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51IX4%2BIlryL._SL160_.jpg"
}, {
    "title": "The Trial",
    "author": "Franz Kafka",
    "img": "http://ecx.images-amazon.com/images/I/51gnpjiiu%2BL._SL160_.jpg"
}, {
    "title": "Leaves of Grass",
    "author": "Walt Whitman",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41Of-QZhVVL._SL160_.jpg"
}, {
    "title": "Absalom, Absalom!",
    "author": "William Faulkner",
    "img": "http://ecx.images-amazon.com/images/I/417VRKNDMYL._SL160_.jpg"
}, {
    "title": "Oedipus the King",
    "author": "Sophocles",
    "img": "http://ecx.images-amazon.com/images/I/51%2BoIEyVJXL._SL160_.jpg"
}, {
    "title": "Candide",
    "author": "Voltaire",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51BE2AiJyeL._SL160_.jpg"
}, {
    "title": "David Copperfield",
    "author": "Charles Dickens",
    "img": "http://ecx.images-amazon.com/images/I/51-GTHVUv7L._SL160_.jpg"
}, {
    "title": "Invisible Man",
    "author": "Ralph Ellison",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41AlDDhzNlL._SL160_.jpg"
}, {
    "title": "Mrs. Dalloway",
    "author": "Virginia Woolf",
    "img": "http://ecx.images-amazon.com/images/I/51XYS19wKML._SL160_.jpg"
}, {
    "title": "Beloved",
    "author": "Toni Morrison",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41aYxI0eOyL._SL160_.jpg"
}, {
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51ef-UI-b6L._SL160_.jpg"
}, {
    "title": "The Complete Tales and Poems of Edgar Allan Poe",
    "author": "Edgar Allan Poe",
    "img": "http://ecx.images-amazon.com/images/I/515bRPN6s3L._SL160_.jpg"
}, {
    "title": "As I Lay Dying",
    "author": "William Faulkner",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51osn%2BQnE%2BL._SL160_.jpg"
}, {
    "title": "Faust",
    "author": "Johann Wolfgang von Goethe",
    "img": "http://ecx.images-amazon.com/images/I/41iEJahbPwL._SL160_.jpg"
}, {
    "title": "The Complete Stories of Franz Kafka",
    "author": "Franz Kafka",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41ys3RmMrFL._SL160_.jpg"
}, {
    "title": "A Portrait of the Artist as a Young Man",
    "author": "James Joyce",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41FNJDD740L._SL160_.jpg"
}, {
    "title": "Paradise Lost",
    "author": "John Milton",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51C3yUUM9lL._SL160_.jpg"
}, {
    "title": "Things Fall Apart",
    "author": "Chinua Achebe",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41Lxo4smZ4L._SL160_.jpg"
}, {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "img": "http://ecx.images-amazon.com/images/I/51f7ZwJN-NL._SL160_.jpg"
}, {
    "title": "Les Misérables",
    "author": "Victor Hugo",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51YLHdUoO9L._SL160_.jpg"
}, {
    "title": "Dead Souls",
    "author": "Nikolai Gogol",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51JIBDUkuvL._SL160_.jpg"
}, {
    "title": "Collected Fiction",
    "author": "Jorge Luis Borges",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51-r5H5xvML._SL160_.jpg"
}, {
    "title": "Tristram Shandy",
    "author": "Laurence Sterne",
    "img": "http://ecx.images-amazon.com/images/I/51B6LBsVwFL._SL160_.jpg"
}, {
    "title": "The Magic Mountain",
    "author": "Thomas Mann",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51bYuVwa5SL._SL160_.jpg"
}, {
    "title": "Animal Farm",
    "author": "George Orwell",
    "img": "http://ecx.images-amazon.com/images/I/61rEm4nCfoL._SL160_.jpg"
}, {
    "title": "The Sun Also Rises",
    "author": "Ernest Hemingway",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51lmTfDL9fL._SL160_.jpg"
}, {
    "title": "Antigone",
    "author": "Sophocles",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51X8diRfeeL._SL160_.jpg"
}, {
    "title": "The Idiot",
    "author": "Fyodor Dostoyevsky",
    "img": "http://ecx.images-amazon.com/images/I/51MB3RjD2OL._SL160_.jpg"
}, {
    "title": "Midnight's Children",
    "author": "Salman Rushdie",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51yqNUCZu6L._SL160_.jpg"
}, {
    "title": "Emma",
    "author": "Jane Austen",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41C7ishzJvL._SL160_.jpg"
}, {
    "title": "A Passage to India",
    "author": "E.M. Forster",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51IaTtJ2bfL._SL160_.jpg"
}, {
    "title": "The Metamorphosis",
    "author": "Franz Kafka",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51BwQxQJI-L._SL160_.jpg"
}, {
    "title": "Gargantua and Pantagruel",
    "author": "Francois Rabelais",
    "img": "http://ecx.images-amazon.com/images/I/51C0fj3v2kL._SL160_.jpg"
}, {
    "title": "The Portrait of a Lady",
    "author": "Henry James",
    "img": "http://ecx.images-amazon.com/images/I/41bSZh6ckCL._SL160_.jpg"
}, {
    "title": "The Castle",
    "author": "Franz Kafka",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41bEU3cS1VL._SL160_.jpg"
}, {
    "title": "The Old Man and the Sea",
    "author": "Ernest Hemingway",
    "img": "https://images-na.ssl-images-amazon.com/images/I/411pakPjvdL._SL160_.jpg"
}, {
    "title": "Fathers and Sons",
    "author": "Ivan Turgenev",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51lbkonXd5L._SL160_.jpg"
}, {
    "title": "Tom Jones",
    "author": "Henry Fielding",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51H7lhCMEPL._SL160_.jpg"
}, {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41le8ej-fiL._SL160_.jpg"
}, {
    "title": "Fairy Tales and Stories",
    "author": "Hans Christian Anderson",
    "img": "http://ecx.images-amazon.com/images/I/41lpb-bC72L._SL160_.jpg"
}, {
    "title": "Lord of the Flies",
    "author": "William Golding",
    "img": "http://ecx.images-amazon.com/images/I/31acUUuC7mL._SL160_.jpg"
}, {
    "title": "Oresteia",
    "author": "Aeschylus",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51-FmbtiW9L._SL160_.jpg"
}, {
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "img": "http://ecx.images-amazon.com/images/I/411myDRSSQL._SL160_.jpg"
}, {
    "title": "Decameron",
    "author": "Giovanni Boccaccio",
    "img": "https://images-na.ssl-images-amazon.com/images/I/512ekSdLokL._SL160_.jpg"
}, {
    "title": "A Farewell to Arms",
    "author": "Ernest Hemingway",
    "img": "http://ecx.images-amazon.com/images/I/514omBy1BgL._SL160_.jpg"
}, {
    "title": "The Scarlet Letter",
    "author": "Nathaniel Hawthorne",
    "img": "http://ecx.images-amazon.com/images/I/418SAsSCimL._SL160_.jpg"
}, {
    "title": "The Tale of Genji",
    "author": "Murasaki Shikibu",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41stcBUo6lL._SL160_.jpg"
}, {
    "title": "Vanity Fair",
    "author": "William Makepeace Thackeray",
    "img": "http://ecx.images-amazon.com/images/I/513XRBsUYIL._SL160_.jpg"
}, {
    "title": "Oedipus at Colonus",
    "author": "Sophocles",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41VaspiUyBL._SL160_.jpg"
}, {
    "title": "Robinson Crusoe",
    "author": "Daniel Defoe",
    "img": "http://ecx.images-amazon.com/images/I/51sItHl3apL._SL160_.jpg"
}, {
    "title": "Waiting for Godot",
    "author": "Samuel Beckett",
    "img": "https://images-na.ssl-images-amazon.com/images/I/410gnFMui1L._SL160_.jpg"
}, {
    "title": "Metamorphoses",
    "author": "Ovid",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51CSWyp-RhL._SL160_.jpg"
}, {
    "title": "Cousin Bette",
    "author": "Honoré de Balzac",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51V3AgbESqL._SL160_.jpg"
}, {
    "title": "The Tin Drum",
    "author": "Günter Grass",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51EgqoXPw-L._SL160_.jpg"
}, {
    "title": "Pale Fire",
    "author": "Vladimir Nabokov",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41oRt0-5XXL._SL160_.jpg"
}, {
    "title": "For Whom the Bell Tolls",
    "author": "Ernest Hemingway",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51ITaxhiA8L._SL160_.jpg"
}, {
    "title": "Father Goriot",
    "author": "Honoré de Balzac",
    "img": "http://ecx.images-amazon.com/images/I/51IAIWeI6sL._SL160_.jpg"
}, {
    "title": "A Doll's House",
    "author": "Henrik Ibsen",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51-4r80QokL._SL160_.jpg"
}, {
    "title": "Under the Volcano",
    "author": "Malcolm Lowry",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51evtEktP1L._SL160_.jpg"
}, {
    "title": "Journey to the End of The Night",
    "author": "Louis-Ferdinand Céline",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51KV50P21yL._SL160_.jpg"
}, {
    "title": "Buddenbrooks",
    "author": "Thomas Mann",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51mf70Pjz8L._SL160_.jpg"
}, {
    "title": "The Lord of the Rings",
    "author": "J. R. R. Tolkien",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41i-SJkyCQL._SL160_.jpg"
}, {
    "title": "Poems of Emily Dickinson",
    "author": "Emily Dickinson",
    "img": "http://ecx.images-amazon.com/images/I/416YXYY1KGL._SL160_.jpg"
}, {
    "title": "Sons and Lovers",
    "author": "D. H. Lawrence",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51UqEFobmiL._SL160_.jpg"
}, {
    "title": "Collected Poems of W. B. Yeats",
    "author": "W. B. Yeats",
    "img": "http://ecx.images-amazon.com/images/I/414v7UblakL._SL160_.jpg"
}];