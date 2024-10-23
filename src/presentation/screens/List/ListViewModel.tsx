import {useEffect, useState} from 'react';
import {useInjection} from '../../../container/iocProvider';
import {TYPE_LIST_MODULE} from '../../../modules/list/module';
import {IGetList} from '../../../modules/list/application/GetList';
import {List} from '../../../modules/list/domain/List';

interface IListViewModel {
  list: List[];
  loading: boolean;
  error: string | null;
}

export const useListViewModel = (): IListViewModel => {
  const [list, setList] = useState<List[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getListUseCase = useInjection<IGetList>(TYPE_LIST_MODULE.IGetList);

  useEffect(() => {
    const getList = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const list = await getListUseCase.getAll();
        setList(list);
      } catch (error) {
        setError('Error getting list');
      } finally {
        setLoading(false);
      }
    };

    getList();
  }, []);

  return {list, loading, error};
};
