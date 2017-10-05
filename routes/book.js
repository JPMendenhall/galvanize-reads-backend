const router = require("Express").Router()
const queries = require("../db/queries")

const table = "book"

router.post("/", (req, res) => {
  queries[table].create(req.body)
    .then((book) => res.json(book))
})

router.put("/:id", (req, res) => {
  queries[table].update(req.params.id, req.body)
    .then((book) => res.send(200))
})

router.get("/", (req, res) => {
  queries[table].list()
    .then((data) => res.json(data))
})

router.delete("/:id", (req, res) => {
  queries[table].delete(req.params.id)
    .then(() => res.send(202))
})

router.get("/:id", (req, res) => {
  var withAuthors = req.query.withAuthors
  var query = queries[table].read(req.params.id)
  if (withAuthors) {
    queries.author_book.getAuthorsForBook(req.params.id)
      .then((authors) => {
        return query.then((book) => {
          book.authors = authors
          res.json(book)
        })
      })
  } else {
    query
      .then((book) => res.json(book))
  }
})

module.exports = router;
