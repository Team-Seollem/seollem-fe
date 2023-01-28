import jwtDecode from 'jwt-decode';

type JwtPayload = {
  sub: string;
  id: number;
  exp: number;
  email: string;
};

interface TokenRepository {
  saveToken: (token: string) => void;
  getToken: () => string | null;
  removeToken: () => void;
  isValidToken: () => boolean;
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

  isValidToken = () => {
    const token = this.getToken();

    if (token) {
      const { exp: expireTime } = jwtDecode<JwtPayload>(token);
      const currentTime = Math.floor(Date.now() / 1000);

      return currentTime < expireTime;
    }

    return false;
  };
}

// TODO: 서버에서 refresh 토큰 응답이 추가되면 수정 필요
