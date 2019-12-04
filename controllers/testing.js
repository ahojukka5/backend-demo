const testingRouter = require('express').Router();

/**
 * @swagger
 *
 * /testing:
 *   get:
 *     tags:
 *       - Testing
 *     summary:
 *       Returns a list of numbers.
 *     description:
 *       Get list [1, 2, 3] from API.
 *     responses:
 *       200:
 *         description: A list of numbers.
 */
testingRouter.get('/', (request, response) => {
  response.json([1, 2, 3]);
});

/**
 * @swagger
 *
 * '/testing/{id}':
 *  parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      description: Some id number.
 *      type: string
 *  get:
 *    tags:
 *      - Testing
 *    summary:
 *      Returns an id number that matches to request
 *    description:
 *      Returns the same id number given in request. This is not having
 *      anything meaninful function. The point here is just to demonstrate how
 *      to automatically make API documentation from doc strings.
 *    responses:
 *      '200':
 *        description:
 *          Request succesful. Returns content `{ id }`.
 */
testingRouter.get('/:id', (request, response) => {
  response.json({ id: request.params.id });
});

module.exports = testingRouter;
