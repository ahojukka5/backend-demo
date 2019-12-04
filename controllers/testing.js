const testingRouter = require('express').Router();

testingRouter.get('/', (request, response) => {
  response.json([1, 2, 3]);
});

testingRouter.get('/:id', (request, response) => {
  response.json({ id: request.params.id });
});

module.exports = testingRouter;
