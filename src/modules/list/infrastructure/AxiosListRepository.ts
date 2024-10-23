import {injectable} from 'inversify';

import {IListRepository} from '../domain/ListRepository';
import {List} from '../domain/List';

import {AxiosClient} from '../../shared/infrastructure/AxiosClient';

const BASE_URL = 'https://6172cfe5110a740017222e2b.mockapi.io/elements';

@injectable()
export class AxiosListRepository
  extends AxiosClient
  implements IListRepository
{
  constructor() {
    super();
  }

  async getAll(): Promise<List[]> {
    try {
      return await this.get<List[]>(BASE_URL);
    } catch (error) {
      console.error(JSON.stringify(error));
      throw error;
    }
  }
}
