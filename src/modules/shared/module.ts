import {Container} from 'inversify';

// Domain
import {IHttpClient} from './domain/HttpClient';

// Infrastructure
import {AxiosClient} from './infrastructure/AxiosClient';

export enum TYPE_SHARED_MODULE {
  IHttpClient = 'IHttpClient',
}

export const moduleShared = new Container();
// Shared
moduleShared.bind<IHttpClient>(TYPE_SHARED_MODULE.IHttpClient).to(AxiosClient);
