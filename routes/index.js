const express = require('express');
const router = express.Router();
const books = require('./bookRoute');
const authors = require('./authorRoute');


router.use('/api', books);
router.use('/api', authors);

module.exports = router;