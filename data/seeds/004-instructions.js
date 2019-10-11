
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, step_number: 1, description: 'combine chips and cheese'},
        {recipe_id: 1, step_number: 2, description: 'cook to liking'}
      ]);
    });
};
