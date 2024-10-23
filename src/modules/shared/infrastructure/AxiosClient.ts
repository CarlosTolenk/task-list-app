import 'reflect-metadata';
import {injectable} from 'inversify';
import axios from 'axios';

import {IHttpClient} from '../domain/HttpClient';

@injectable()
export class AxiosClient implements IHttpClient {
  headers = {
    'Content-Type': 'application/json',
  };
  async get<T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
  ): Promise<T | any> {
    const response = await axios.get(path, {
      ...config,
      params: params,
      headers: this.headers,
    });
    return response.data as T;
  }

  async post<T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
  ): Promise<T | any> {
    const response = await axios.post(
      path,
      {...params},
      {...config, headers: this.headers},
    );
    return response.data as T;
  }

  async put<T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
  ): Promise<T | any> {
    const response = await axios.put(
      path,
      {...params},
      {...config, headers: this.headers},
    );
    return response.data as T;
  }
  async delete<T>(path: string, params?: any, config?: any): Promise<T | any> {
    const response = await axios.delete(path, {
      ...config,
      params: params,
      headers: this.headers,
    });
    return response.data as T;
  }
}
