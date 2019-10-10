const db = require('../data/db.config');

module.exports = {
    find,
    // findById,
    // findSteps,
    // add,
    // update,
    // remove
};

function find() {
    return db('recipes');
}

// function findById(id) {
//     return db('recipes')
//     .where({id})
//     .first();
// }

// function findSteps(recipeId) {
//     return db('steps as s')
//     .join('recipes as sc', 'sc.id', '=', 's.recipe_id')
//     .where({ recipe_id: recipeId })
//     .select('s.id', 'sc.recipe_name', 's.step_number', 's.instructions')
// }

// function add(newRecipe) {
//     return db('recipes')
//       .insert(newRecipe, 'id')
//       .then(([id]) => {
//         return findById(id);
//       });
// }

// function update(changes, id) {
//     return db('recipes')
//     .where('id', `=`, id)
//     .update(changes, 'id')
//     .then(res => {
//         if (res === 1) {
//             return findById(id)
//         } else {
//             res.status(500).json('server error')
//         }
//       });
// }

// function remove(id) {
//     return db('recipes')
//     .where({id})
//     .del()
// }