const request = require('supertest');
const { app } = require('../../app'); // Importa el enrutador en lugar de la aplicación principal

describe('Endpoints', () => {
  it('should save weather data when POST /weather is called', async () => {
    const response = await request(app)
      .post('/weather')
      .send({ city: 'Bolívar' });

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should return recent weather data when GET /weather is called', async () => {
    const response = await request(app).get('/weather');

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });

  it('should return a 404 error when a non-existing city is provided', async () => {
    const response = await request(app)
      .post('/weather')
      .send({ city: 'NonExistingCity' });

    expect(response.status).toEqual(404);
    expect(response.body).toEqual({ message: 'City not found' });
  });
});
