import {injectable} from 'inversify';

import {IAuthRepository} from '../domain/AuthRepository';
import {Auth} from '../domain/Auth';

export interface IAuthLogInUseCase {
  logIn(email: string, password: string): Promise<Auth>;
}

@injectable()
export class AuthLogIn implements IAuthLogInUseCase {
  private repository: IAuthRepository;

  constructor(repository: IAuthRepository) {
    this.repository = repository;
  }

  async logIn(email: string, password: string): Promise<Auth> {
    return this.repository.logIn(email, password);
  }
}
