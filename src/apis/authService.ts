import type { SignInInput, SignUpInput } from '@projects/types/basic';
import type { HttpClientImpl } from './httpClient';
import type { TokenRepositoryImpl } from './tokenRepository';

type EmailAuthCodeParams = {
  joinAuthCodeEmail: string;
};

type TempPasswordParams = {
  tempPasswordEmail: string;
};

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

  getEmailAuthCode = async (email: string) => {
    const response = await this.httpClient.post<string, EmailAuthCodeParams>(
      'email/join',
      {
        joinAuthCodeEmail: email,
      }
    );
    return response.status === 201
      ? '입력하신 이메일로 인증번호가 발송되었습니다.'
      : '';
  };

  getTempPassword = async (email: string) => {
    const response = await this.httpClient.post<string, TempPasswordParams>(
      'email/password-change',
      {
        tempPasswordEmail: email,
      }
    );
    return response.status === 201
      ? '입력하신 이메일로 임시 비밀번호가 발송되었습니다.'
      : '';
  };
}
