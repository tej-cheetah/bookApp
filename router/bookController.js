const express = require('express');
const router = express.Router();

const bookHandler = require('../handler/bookHandler.js');

var app = express();

router.get('/', bookHandler.getBookList);
router.get('/search', bookHandler.findBook);
router.post('/add', bookHandler.addBook);
router.put('/update', bookHandler.updateBook);
router.delete('/delete', bookHandler.deleteBook);

module.exports = router;
