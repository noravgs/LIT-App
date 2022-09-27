const Book = require("../models/book");
module.exports = {
  addBook: async (req, res)=>{
    const book = new Book(
      {
        bookName: req.body.bookName,
        authorName: req.body.authorName,
        reasonForLiking: req.body.reasonForLiking,
        likes: 0,
      })
      try{
        await book.save()
          console.log(book)
          res.redirect('/')
        }catch(err){
          console.log(err)
        }
    },
  likeBook: async (req, res) => {
    try {
      await Book.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
        );
        console.log("Likes +1");
        res.redirect('/');
        } catch (err) {
          console.log(err);
        }
      },
  deleteBook: async (req, res) => {
    try {
      // Find post by id and delete post from db
      await Book.remove({ _id: req.params.id });
      console.log("Deleted Book");
      res.redirect('/');
      } catch (err) {
        res.redirect('/');
      }
    },
}