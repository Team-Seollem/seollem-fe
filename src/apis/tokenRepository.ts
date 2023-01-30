interface TokenRepository {
  saveToken: (token: string) => void;
  getToken: () => string | null;
  removeToken: () => void;
}

export class TokenRepositoryImpl implements TokenRepository {
  private TOKEN_KEY = 'ACCESS_TOKEN';

  saveToken = (token: string) => {
    localStorage.setItem(this.TOKEN_KEY, token);
  };

  getToken = () => {
    return localStorage.getItem(this.TOKEN_KEY);
  };

  removeToken = () => {
    localStorage.removeItem(this.TOKEN_KEY);
  };
}

// TODO: 서버에서 refresh 토큰 응답이 추가되면 수정 필요
