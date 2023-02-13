import { TokenRepositoryImpl } from './tokenRepository';
import { HttpClientImpl } from './httpClient';
import { HttpClientAuthImpl } from './httpClientAuth';
import { AuthService } from './authService';
import { ExternalServiceImpl } from './externalService';
import { ProfileServiceImpl } from './profileService';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const tokenRepository = new TokenRepositoryImpl();
export const httpClient = new HttpClientImpl(BASE_URL);
export const httpClientAuth = new HttpClientAuthImpl(BASE_URL, tokenRepository);

export const authService = new AuthService(httpClient, tokenRepository);
export const externalService = new ExternalServiceImpl(httpClient);
export const profileService = new ProfileServiceImpl(
  httpClientAuth,
  tokenRepository
);
