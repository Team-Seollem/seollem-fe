import type { Profile } from '../types/basic';
import type { HttpClientAuthImpl } from './httpClientAuth';
import type { TokenRepositoryImpl } from './tokenRepository';

type EditUserParams = {
  name?: string;
  password?: string;
};

type EditUserResponse = {
  email: string;
  name: string;
  updatedAt: Date;
};

interface ProfileService {
  getProfile: () => Promise<Profile>;
  editProfileName: (name: string) => Promise<EditUserResponse>;
  editProfilePassword: (password: string) => Promise<EditUserResponse>;
  deleteProfile: () => Promise<string>;
}

export class ProfileServiceImpl implements ProfileService {
  private endPoint = '/members/me';

  constructor(
    private httpClient: HttpClientAuthImpl,
    private tokenRepository: TokenRepositoryImpl
  ) {}

  getProfile = async () => {
    const { data } = await this.httpClient.get<Profile>(this.endPoint);
    return data;
  };

  editProfileName = async (name: string) => {
    const { data } = await this.httpClient.patch<
      EditUserResponse,
      EditUserParams
    >(this.endPoint, { name });

    return data;
  };

  editProfilePassword = async (password: string) => {
    const { data } = await this.httpClient.patch<
      EditUserResponse,
      EditUserParams
    >(this.endPoint, { password });

    return data;
  };

  deleteProfile = async () => {
    const response = await this.httpClient.delete(this.endPoint);
    if (response.status === 204) {
      this.tokenRepository.removeToken();
    }
    return '회원 탈퇴되었습니다';
  };
}
