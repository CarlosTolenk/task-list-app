import 'reflect-metadata';

import {AuthLogIn} from '../LogIn';
import {IAuthRepository} from '../../domain/AuthRepository';
import {Auth} from '../../domain/Auth';

class AuthRepositoryMock implements IAuthRepository {
  private mockCheck = jest.fn();

  logIn(email: string, password: string): Promise<Auth> {
    return this.mockCheck(email, password);
  }

  assertLogIn(): void {
    expect(this.mockCheck).toHaveBeenCalled();
  }

  assertLogInWithParams(email: string, password: string): void {
    expect(this.mockCheck).toHaveBeenCalledWith(email, password);
  }
}

describe('AuthLogIn', () => {
  test('should correctly instantiate the proper repository', () => {
    const repositoryMock = new AuthRepositoryMock();
    const authLogIn = new AuthLogIn(repositoryMock);

    expect(authLogIn).toBeDefined();
  });

  test('should call the method correctly to the repository', async () => {
    const repositoryMock = new AuthRepositoryMock();
    const authLogIn = new AuthLogIn(repositoryMock);

    await authLogIn.logIn('email@gmail.com', '1230');

    repositoryMock.assertLogIn();
    repositoryMock.assertLogInWithParams('email@gmail.com', '1230');
  });
});
