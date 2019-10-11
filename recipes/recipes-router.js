const express = require('express');

const Recipes = require('./recipies-model');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.find()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id/shoppingList', (req, res) => {
  const { id } = req.params;
  console.log(id)

  Recipes.findShoppingList(id)
  .then(shoppingList => {
    console.log(shoppingList)
    if (shoppingList.length) {
      res.json(shoppingList);
    } else {
      res.status(404).json({ message: 'Could not find shoppingList for given recipe' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get shoppingList' });
  });
});

router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;

  Recipes.findInstructions(id)
  .then(instructions => {
    console.log(instructions)
    if (instructions.length) {
      res.json(instructions);
    } else {
      res.status(404).json({ message: 'Could not find instructions for given recipe' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get instructions' });
  });
});


module.exports = router;