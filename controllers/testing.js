const testingRouter = require('express').Router();

testingRouter.get('/:id', (request, response) => {
  response.json({ id: request.params.id });
});

module.exports = testingRouter;
