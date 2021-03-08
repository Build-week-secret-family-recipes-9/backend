exports.up = function (knex) {
  return knex.schema

      .createTable("roles", (tbl) => {
      tbl.increments();

      tbl.string("name", 6).notNullable().unique();
    })

    .createTable("users", (tbl) => {
      tbl.increments();

      tbl.string("username", 88).notNullable().unique().index();
      tbl.string("password", 556).notNullable();

      tbl
        .integer("role")
        .unsigned()
        .references("roles.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .defaultTo(2);
    })

    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("title", 155).notNullable();
      tbl.string("source", 555).notNullable();
      tbl.string("ingredients", 255).notNullable();
      tbl.string("instructions", 655).notNullable();
      tbl.string("category", 55).notNullable();
      tbl.string("img", 355);
    })
};

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists("recipes")
  .dropTableIfExists("users")
  .dropTableIfExists("roles");
};
