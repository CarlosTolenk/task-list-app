import {List} from './List';

export interface IListRepository {
  getAll(): Promise<List[]>;
}
