const express = require('express');
const router = express.Router();
const books = require('../books.json');


router.get('/books', (req, res) => {
    res.json(books);
});




module.exports = router;