const request = require('supertest');
const app = require('../server');
const { version } = require('../package.json');

describe('GET /version', () => {
  it('should return 200 and current package.json version', async () => {
    const res = await request(app).get('/version');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ version });
  });
});
