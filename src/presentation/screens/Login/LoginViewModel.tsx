import {useDispatch, useSelector} from 'react-redux';
import {useInjection} from '../../../container/iocProvider';

//Use Cases
import {IAuthLogInUseCase} from '../../../modules/auth/application/LogIn';

// Store
import {authError, authLogIn} from '../../../store/states/authReducer';
import {TYPE_AUTH_MODULE} from '../../../modules/auth/module';
import {IGlobalStore} from '../../../store/interfaces';

interface ILoginViewModel {
  errorInLogIn: string | null;

  login(email: string, password: string): void;
}

export const useLoginViewModel = (): ILoginViewModel => {
  const dispatch = useDispatch();
  const logInUseCase = useInjection<IAuthLogInUseCase>(
    TYPE_AUTH_MODULE.IAuthLogInUseCase,
  );
  const errorInLogIn = useSelector((state: IGlobalStore) => state.auth.error);

  async function login(email: string, password: string) {
    try {
      const user = await logInUseCase.logIn(email, password);
      dispatch(authLogIn(user));
    } catch (error) {
      dispatch(authError('Error'));
    }
  }

  return {login, errorInLogIn: errorInLogIn ?? null};
};
