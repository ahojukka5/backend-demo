const request = require('supertest');
const app = require('../app');

describe('testingRouter', () => {
  test('returns [1, 2, 3] when accessing /api/testing', async () => {
    const response = await request(app)
      .get('/api/testing')
      .expect(200)
      .expect('Content-Type', /application\/json/);
    expect(response.body).toEqual([1, 2, 3]);
  });

  test('returns {id: 123} when accessing /api/testing/123', async () => {
    const response = await request(app).get('/api/testing/123');
    expect(response.body.id).toEqual('123');
  });
});
