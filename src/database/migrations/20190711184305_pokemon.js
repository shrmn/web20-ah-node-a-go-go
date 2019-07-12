exports.up = function(knex) {
  return knex.schema.createTable("pokemon", table => {
    table.increments("id");
    table
      .string("name")
      .unique()
      .notNullable();
    table.string("type").notNullable();
    table.string("fighting_style").notNullable();
    table.timestamp("date_created").defaultTo(knex.fn.now());
    table.timestamp("date_modified").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("pokemon");
};
