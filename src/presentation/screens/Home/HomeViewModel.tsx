import {useDispatch} from 'react-redux';
import {authLogOut} from '../../../store/states/authReducer';

interface IHomeViewModel {
  logOut(): Promise<void>;
}

export const useHomeViewModel = (): IHomeViewModel => {
  const dispatch = useDispatch();
  async function logOut(): Promise<void> {
    dispatch(authLogOut());
  }

  return {
    logOut,
  };
};
