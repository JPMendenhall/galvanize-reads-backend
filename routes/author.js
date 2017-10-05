const router = require("Express").Router()
const queries = require("../db/queries")

const table = "author"


router.post("/", (req, res) => {
  queries[table].create(req.body)
    .then((author) => res.json(author))
})

router.put("/:id", (req, res) => {
  queries[table].update(req.params.id, req.body)
    .then((author) => res.send(200))
})

router.get("/:id", (req, res) => {
  var withBooks = req.query.withBooks
  var query = queries[table].read(req.params.id)
  if (withBooks) {
    queries.author_book.getBooksForAuthor(req.params.id)
      .then((books) => {
        return query.then((author) => {
          author.books = books
          res.json(author)
        })
      })
  } else {
    query
      .then((author) => res.json(author))
  }
})

router.get("/", (req, res) => {
  queries[table].list()
    .then((data) => res.json(data))
})

router.delete("/:id", (req, res) => {
  queries[table].delete(req.params.id)
    .then(() => res.send(202))
})



module.exports = router;
