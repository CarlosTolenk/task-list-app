import {Container, interfaces} from 'inversify';

// Domain
import {IListRepository} from './domain/ListRepository';

// Application
import {GetList, IGetList} from './application/GetList';

// Infrastructure
import {AxiosListRepository} from './infrastructure/AxiosListRepository';

export enum TYPE_LIST_MODULE {
  IGetList = 'IGetList',
  IListRepository = 'IListRepository',
}

export const moduleList = new Container();

moduleList
  .bind<IListRepository>(TYPE_LIST_MODULE.IListRepository)
  .to(AxiosListRepository)
  .inSingletonScope();

moduleList
  .bind<IGetList>(TYPE_LIST_MODULE.IGetList)
  .toDynamicValue((context: interfaces.Context) => {
    return new GetList(context.container.get(TYPE_LIST_MODULE.IListRepository));
  });
