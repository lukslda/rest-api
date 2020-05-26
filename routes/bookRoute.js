const express = require('express');
const router = express.Router();
const books = require('../books.json');
const authors = require('../authors.json');
const _ = require('lodash');


// get all books and authors
router.get('/books', (req, res) => {
    try {
        let booksAuthors = [];
        _.forEach(books, (book) => {
            bookAuthor = { "id":"", "title":"", "name":"",  "lastname":""};
            const { id, title, authorID } = book;
            _.forEach(authors, (author) => {
                const { name, lastname } = author;
                if( author.id == authorID ) {
                    bookAuthor.id = id;
                    bookAuthor.title = title;
                    bookAuthor.name = name;
                    bookAuthor.lastname = lastname;
                    booksAuthors.push(bookAuthor);
                }
            });
        });
        res.json(booksAuthors);
    } catch (error) {
        console.log(error);
    }
});

// create a new book
router.post('/books', (req, res) => {
    try {
        const {id, title, authorID} = req.body;
        if (id && title && authorID) {
            const newBook = { ...req.body };
            books.push(newBook);
            res.status(200).json(books);
        } else {
            res.status(400).json({ msg: 'Error. All fields are required.'});
        }
    } catch (error) {
        console.log(error);
    }
});

// delete a book
router.delete('/books/:id', (req, res) => {
    try {
        const id = req.params.id;
        _.remove(books, (book) => {
            return book.id == id;
        })
        res.json(books);
    } catch (error) {
        console.log(error);
    }
});

// change a book
router.put('/books/:id', (req, res) => {
    try {
        const id = req.params.id;
        const { title, authorID } = req.body;
        _.each(books, (book) => {
            if(book.id == id && title && authorID ) {
                book.title = title;
                book.authorID = authorID;
            }
        });
        res.status(200).json(books);
            
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;