import type { SignInInput, SignUpInput } from '@projects/types/basic';
import type { HttpClientImpl } from './httpClient';
import type { TokenRepositoryImpl } from './tokenRepository';

export class AuthService {
  constructor(
    private httpClient: HttpClientImpl,
    private tokenRepository: TokenRepositoryImpl
  ) {
    this.httpClient = httpClient;
    this.tokenRepository = tokenRepository;
  }

  signUp = async (userData: SignUpInput) => {
    const response = await this.httpClient.post<string, SignUpInput>(
      '/join',
      userData
    );
    return response.data;
  };

  signIn = async (userData: SignInInput) => {
    const response = await this.httpClient.post<string, SignInInput>(
      '/login',
      userData
    );
    const token = response.headers.authorization;
    if (token) {
      this.tokenRepository.saveToken(token.split(' ')[1]); // Bearer를 삭제한 토큰값만 저장
    }
    return '로그인에 성공했습니다';
  };

  signOut = () => {
    this.tokenRepository.removeToken();
  };
}
