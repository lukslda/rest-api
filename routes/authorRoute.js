const express = require('express');
const router = express.Router();
const authors = require('../authors.json');


router.get('/authors', (req, res) => {
    res.json(authors);
});




module.exports = router;