// const book_id = book.id
// const author_id = author.id

exports.up = function(knex, Promise) {
  return knex.schema.createTable("author_book", (table) => {
    table.integer("book_id").references("book.id").onDelete("CASCADE")
    table.integer("author_id").references("author.id").onDelete("CASCADE")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("author_book")
};
