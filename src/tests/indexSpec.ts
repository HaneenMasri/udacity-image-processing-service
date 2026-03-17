import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('gets the images endpoint with valid parameters', async () => {
    const response = await request.get(
      '/api/images?filename=view&width=200&height=200',
    );
    expect(response.status).toBe(200);
  });

  it('returns 400 if parameters are missing', async () => {
    const response = await request.get('/api/images?filename=view');
    expect(response.status).toBe(400);
  });
});
