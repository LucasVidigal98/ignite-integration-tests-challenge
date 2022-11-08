import request from 'supertest';

import {app} from '../src/app';

describe('Testing /api/v1/profile', () => {
  it('Should be able return JWT', async () => {
    const response = await request(app).get('/api/v1/profile');

    console.log(response)
  });
})