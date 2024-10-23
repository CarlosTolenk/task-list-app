import AuthSlice, {authError, authLogIn, authLogOut} from '../authReducer';
import {AuthEmptyState} from '../../models/auth';

describe('AuthSlice', () => {
  test('should initialize slice with initialValue', () => {
    const authSlice = AuthSlice(AuthEmptyState, {type: 'unknown'});
    expect(authSlice).toBe(AuthEmptyState);
  });

  test('should change the status by the authenticated user information', () => {
    const userLogged = {
      userId: 1,
      name: '',
      lastName: '',
      email: '',
      avatar: '',
      lastLogin: '',
      phoneNumber: '',
      token: 'token_valid',
    };

    const afterReducerOperation = AuthSlice(
      AuthEmptyState,
      authLogIn(userLogged),
    );

    expect(afterReducerOperation).toStrictEqual({
      avatar: '',
      email: '',
      lastLogin: '',
      lastName: '',
      name: '',
      phoneNumber: '',
      token: 'token_valid',
      userId: 1,
    });
  });

  test('should return to initial state when session is closed', () => {
    const userLogged = {
      userId: 1,
      name: '',
      lastName: '',
      email: '',
      avatar: '',
      lastLogin: '',
      phoneNumber: '',
      token: 'token_valid',
    };
    const afterReducerOperation = AuthSlice(
      AuthEmptyState,
      authLogIn(userLogged),
    );
    expect(afterReducerOperation).toStrictEqual({
      avatar: '',
      email: '',
      lastLogin: '',
      lastName: '',
      name: '',
      phoneNumber: '',
      token: 'token_valid',
      userId: 1,
    });

    const postReducerOperation = AuthSlice(userLogged, authLogOut());
    expect(postReducerOperation).toStrictEqual(AuthEmptyState);
  });

  test('should change the status to show the error message', () => {
    const errorMessage = 'errorMessage';
    const afterReducerOperation = AuthSlice(
      AuthEmptyState,
      authError(errorMessage),
    );
    expect(afterReducerOperation).toStrictEqual({
      error: 'errorMessage',
      token: null,
    });
  });
});
