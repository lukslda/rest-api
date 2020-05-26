const express = require('express');
const router = express.Router();
const authors = require('../authors.json');
const books = require('../books.json');
const _ = require('lodash');


// get all authors
router.get('/authors', (req, res) => {
    try {
        res.json(authors);
    } catch (error) {
        console.log(error);
    }
});

// create a new author
router.post('/authors', (req, res) => {
    const { id, name, lastname } = req.body;
    try {
        if (id && name && lastname ) {
            const newAuthor = { ...req.body };
            authors.push(newAuthor);
            res.json(authors);
        } else {
            res.status(400).json({ msg: 'Error. All fields are required.'});
        }
    } catch (error) {
        console.log(error);
    }
});

// delete the author and the related book
router.delete('/authors/:id', (req, res) => {
    try {
        const id = req.params.id;

        _.remove(books, (book) => {
            if(id == book.authorID){
                return book.authorID == id;
            }
        });
        _.remove(authors, (author) => {
            if(id == author.id){
                return author.id == id;
            }
        });
        
        res.json(authors);
    } catch (error) {
        console.log(error);
    }
});

// change an author
router.put('/authors/:id', (req, res) => {
    try {
        const id = req.params.id;
        const { name, lastname } = req.body;
        _.each(authors, (author) => {
            if(author.id == id && name && lastname) {
                author.name = name;
                author.lastname = lastname;
            }
        });
        res.json(authors);
            
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;