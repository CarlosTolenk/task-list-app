import {Container, interfaces} from 'inversify';

// Domain
import {IAuthRepository} from './domain/AuthRepository';

// Application
import {AuthLogIn, IAuthLogInUseCase} from './application/LogIn';

// Infrastructure
import {AxiosAuthRepository} from './infrastructure/AxiosAuthRepository';

export enum TYPE_AUTH_MODULE {
  IAuthRepository = 'IAuthRepository',
  IAuthLogInUseCase = 'IAuthLogInUseCase',
}

export const moduleAuth = new Container();
moduleAuth
  .bind<IAuthRepository>(TYPE_AUTH_MODULE.IAuthRepository)
  .to(AxiosAuthRepository)
  .inSingletonScope();

moduleAuth
  .bind<IAuthLogInUseCase>(TYPE_AUTH_MODULE.IAuthLogInUseCase)
  .toDynamicValue((context: interfaces.Context) => {
    return new AuthLogIn(
      context.container.get(TYPE_AUTH_MODULE.IAuthRepository),
    );
  });
