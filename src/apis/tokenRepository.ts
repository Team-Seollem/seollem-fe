interface TokenRepository {
  saveToken: (token: string) => void;
  getToken: () => string;
  removeToken: () => void;
}

export class TokenRepositoryImpl implements TokenRepository {
  private TOKEN_KEY = 'ACCESS_TOKEN';

  saveToken = (token: string) => {
    localStorage.setItem(this.TOKEN_KEY, token);
  };

  getToken = () => {
    return localStorage.getItem(this.TOKEN_KEY) || '';
  };

  removeToken = () => {
    localStorage.removeItem(this.TOKEN_KEY);
  };
}
