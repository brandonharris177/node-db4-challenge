const express = require('express');

const RecipesRouter = require('./recipes/recipes-router');

const server = express();

server.use(express.json());
server.use('/api/recipes', RecipesRouter);

server.get('/', (req, res) => {
    res.json(`index is working`);
});

module.exports = server;