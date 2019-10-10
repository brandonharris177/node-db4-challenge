
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
    })

    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();
    })

    .createTable('recipe_ingredients', tbl => {
      tbl.increments();

      tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');

    tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');

      tbl.string('measurement_type', 128).notNullable;

        tbl.integer('ammount').notNullable;


    })

    .createTable('instructions', tbl => {
        tbl.increments();
  
          tbl
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');

          tbl.integer('step_number', 128).notNullable;
          tbl.string('description', 400).notNullable;
      });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipies');
};
