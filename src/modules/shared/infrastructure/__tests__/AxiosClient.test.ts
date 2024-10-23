import {AxiosClient} from '../AxiosClient';
import nock from 'nock';

describe('AxiosClient', () => {
  let httClient: AxiosClient;

  beforeAll(() => {
    httClient = new AxiosClient();
  });

  test('should to defined', () => {
    expect(httClient.get).toBeDefined();
    expect(httClient.put).toBeDefined();
    expect(httClient.post).toBeDefined();
    expect(httClient.delete).toBeDefined();
  });

  test('should call method get', async () => {
    nock('http://test.invalid')
      .get('/data.json')
      .reply(200, {name: 'Hairy Potter'});

    const result = await httClient.get<any>('http://test.invalid/data.json');
    expect(result).toEqual({name: 'Hairy Potter'});
  });

  test('should call method post', async () => {
    nock('http://test.invalid')
      .post('/data.json')
      .reply(200, {name: 'Hairy Potter'});

    const result = await httClient.post<any>('http://test.invalid/data.json');
    expect(result).toEqual({name: 'Hairy Potter'});
  });

  test('should call method put', async () => {
    nock('http://test.invalid')
      .put('/data.json')
      .reply(200, {name: 'Hairy Potter'});

    const result = await httClient.put<any>('http://test.invalid/data.json');
    expect(result).toEqual({name: 'Hairy Potter'});
  });

  test('should call method delete', async () => {
    nock('http://test.invalid')
      .delete('/data.json')
      .reply(200, {name: 'Hairy Potter'});

    const result = await httClient.delete<any>('http://test.invalid/data.json');
    expect(result).toEqual({name: 'Hairy Potter'});
  });
});
