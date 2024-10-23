import {injectable} from 'inversify';

import {List} from '../domain/List';
import {IListRepository} from '../domain/ListRepository';

export interface IGetList {
  getAll(): Promise<List[]>;
}

@injectable()
export class GetList implements IGetList {
  constructor(private readonly listRepository: IListRepository) {}

  async getAll(): Promise<List[]> {
    const result = this.listRepository.getAll();
    console.log('Los datos....');
    return result;
  }
}
