const request = require('supertest');
const app = require('../app');

describe('testingRouter', () => {
  test('returns {id: 123} when accessing /api/testing/123', async () => {
    const response = await request(app)
      .get('/api/testing/123')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(response.body.id).toEqual('123');
  });
});
