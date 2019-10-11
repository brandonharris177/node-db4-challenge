
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, measurement_type: 'cups', ammount: 2},
        {recipe_id: 1, ingredient_id: 2, measurement_type: 'bags', ammount: 1}
      ]);
    });
};
