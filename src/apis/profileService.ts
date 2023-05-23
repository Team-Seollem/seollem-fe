import type { Profile } from '../types/basic';
import type { HttpClientAuthImpl } from './httpClientAuth';
import type { TokenRepositoryImpl } from './tokenRepository';

type EditUserParams = {
  name?: string;
  password?: string;
  content?: string;
  url?: string;
};

type EditUserResponse = {
  email: string;
  name: string;
  updatedAt: string;
  content: string;
  url: string;
};

interface ProfileService {
  getProfile: () => Promise<Profile>;
  editProfile: (params: EditUserParams) => Promise<EditUserResponse>;
  deleteProfile: () => Promise<string>;
  imageUpload: (formData: FormData) => Promise<string>;
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

  editProfile = async (params: EditUserParams) => {
    const { data } = await this.httpClient.patch<
      EditUserResponse,
      EditUserParams
    >(this.endPoint, params);

    return data;
  };

  deleteProfile = async () => {
    const response = await this.httpClient.delete(this.endPoint);
    if (response.status === 204) {
      this.tokenRepository.removeToken();
    }
    return '회원 탈퇴되었습니다';
  };

  imageUpload = async (formData: FormData) => {
    const { data } = await this.httpClient.post<{ url: string }, FormData>(
      '/members/member-image',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return data.url;
  };
}
