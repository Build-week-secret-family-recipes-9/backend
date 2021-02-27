exports.up = function (knex) {
    return knex.schema
    .createTable('users', (tbl) => {
      tbl.increments();
      tbl.string('username', 255)
        .notNullable()
        .unique();
      tbl.string('password', 255).notNullable();
    })

    .createTable("recipes", (tbl) => {
        tbl.increments()
        tbl.string("title", 255).notNullable();
        tbl.string("source", 255).notNullable();
        tbl.string("ingredients", 255).notNullable();
        tbl.string("instructions", 255).notNullable()
        tbl.string("category", 255).notNullable();
        tbl.string("img")
    })

  };
  
  exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('users')
  };
