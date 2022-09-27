const Book = require("../models/book");
module.exports = {
    getIndex: async (req, res) => {
        try{
            const books = await
            Book.find()
            res.render('index.ejs', {books: books})
        }catch (err){
            if (err) return res.status(500).send(err)
        }
    },
}

