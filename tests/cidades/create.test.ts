import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - create', () => {
  it('Cria registro', async () => {
    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Porto Alegre' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
});
