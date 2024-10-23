import {injectable} from 'inversify';

import {IAuthRepository} from '../domain/AuthRepository';
import {Auth} from '../domain/Auth';
import {AxiosClient} from '../../shared/infrastructure/AxiosClient';

@injectable()
export class AxiosAuthRepository
  extends AxiosClient
  implements IAuthRepository
{
  async logIn(email: string, password: string): Promise<Auth> {
    return new Promise((resolve, reject) => {
      if (email === 'carlos@tolentino.com' && password === '123456') {
        const user = {
          userId: 1,
          name: '',
          lastName: '',
          email: email,
          avatar: '',
          lastLogin: '',
          phoneNumber: '',
          token: 'token_valid',
        };
        resolve(new Auth({...user}));
      }

      reject(new Error('Not Valid'));
    });
  }
}
