import {Auth} from './Auth';

export interface IAuthRepository {
  logIn(email: string, password: string): Promise<Auth>;
}
