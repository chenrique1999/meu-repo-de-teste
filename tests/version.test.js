const request = require('supertest');
const app = require('../server');

describe('GET /version', () => {
  it('should return 200 and {"version":"1.0.0"}', async () => {
    const res = await request(app).get('/version');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ version: '1.0.0' });
  });
});
