import type { AxiosRequestConfig, AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { HttpClientImpl, HttpClient } from './httpClient';
import type { TokenRepositoryImpl } from './tokenRepository';
import { PAGE_URL } from '../constants/path';

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
  if (error.response?.status === 403) {
    tokenRepository.removeToken();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    navigate(PAGE_URL.SIGN_IN);
  }
  throw error;
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
