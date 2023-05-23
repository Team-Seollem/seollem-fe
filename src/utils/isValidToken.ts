import jwtDecode from 'jwt-decode';

type JwtPayload = {
  sub: string;
  id: number;
  exp: number;
  email: string;
};

export const isValidToken = (token: string) => {
  if (token) {
    const { exp: expireTime } = jwtDecode<JwtPayload>(token);
    const currentTime = Math.floor(Date.now() / 1000);

    return currentTime < expireTime;
  }
  return false;
};
