const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    info: {
      title: 'Test Application API', // Title (required)
      version: '0.1.0', // Version (required)
    },
    basePath: '/api',
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  // Path to the API docs
  apis: ['./controllers/*.js'],
};

const swaggerDocument = swaggerJSDoc(options);

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

module.exports = router;
