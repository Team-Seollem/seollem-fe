import type { AxiosRequestConfig, AxiosError } from 'axios';
import { HttpClientImpl, HttpClient } from './httpClient';
import type { TokenRepositoryImpl } from './tokenRepository';

const addAuthHeader = (
  config: AxiosRequestConfig,
  tokenRepository: TokenRepositoryImpl
) => {
  const newConfig: AxiosRequestConfig = { ...config };
  if (!newConfig.headers) newConfig.headers = {};
  newConfig.headers.Authorization = `Bearer ${tokenRepository.getToken()}`;
  return newConfig;
};

const handleUnauthorizedError = (
  error: AxiosError,
  tokenRepository: TokenRepositoryImpl
) => {
  if (error.response?.status === 401) {
    window.location.href = '/auth/signin';
    tokenRepository.removeToken();
  }
  return Promise.reject(error);
};

export class HttpClientAuthImpl extends HttpClientImpl implements HttpClient {
  constructor(baseURL: string, private tokenRepository: TokenRepositoryImpl) {
    super(baseURL);
    this.tokenRepository = tokenRepository;
    this.instance.interceptors.request.use((config) => {
      return addAuthHeader(config, this.tokenRepository);
    });
    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        return handleUnauthorizedError(error, tokenRepository);
      }
    );
  }
}
