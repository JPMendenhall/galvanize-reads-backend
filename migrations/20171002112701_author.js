exports.up = function(knex, Promise) {
  return knex.schema.createTable("author", (table) => {
    table.increments()
    table.text("name")
    table.text("biography")
    table.text("portrait")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("author")
};
