import 'reflect-metadata';
import {injectable} from 'inversify';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = axios.create({
  validateStatus: function (status) {
    return status >= 200 && status < 500;
  },
});

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
    const response = await axiosInstance.get(path, {
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
    const response = await axiosInstance.post(
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
    const response = await axiosInstance.put(
      path,
      {...params},
      {...config, headers: this.headers},
    );
    return response.data as T;
  }
  async delete<T>(path: string, params?: any, config?: any): Promise<T | any> {
    const response = await axiosInstance.delete(path, {
      ...config,
      params: params,
      headers: this.headers,
    });
    return response.data as T;
  }
}
