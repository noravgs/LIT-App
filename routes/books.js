const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home');
const bookController = require('../controllers/books')

router.post('/addBook', bookController.addBook)
router.put('/likeBook/:id', bookController.likeBook);
router.delete('/deleteBook/:id', bookController.deleteBook)

module.exports = router;