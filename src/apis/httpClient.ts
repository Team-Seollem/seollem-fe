import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface HttpClient {
  get: <T>(
    endPoint: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  post: <T, D>(
    endPoint: string,
    data: D,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  patch: <T, D>(
    endPoint: string,
    data: D,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  delete: <T>(
    endPoint: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
}

export class HttpClientImpl implements HttpClient {
  protected instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      withCredentials: true,
    });
  }

  get = async <T>(endPoint: string, config?: AxiosRequestConfig) => {
    return this.instance.get<T>(endPoint, config);
  };

  post = <T, D>(endPoint: string, data: D, config?: AxiosRequestConfig<D>) => {
    return this.instance.post<T, AxiosResponse<T>, D>(endPoint, data, config);
  };

  patch = <T, D>(endPoint: string, data: D, config?: AxiosRequestConfig<D>) => {
    return this.instance.put<T, AxiosResponse<T>, D>(endPoint, data, config);
  };

  delete = <T>(endPoint: string, config?: AxiosRequestConfig) => {
    return this.instance.delete<T, AxiosResponse<T>>(endPoint, config);
  };
}
