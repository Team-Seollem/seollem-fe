import type {
  MemberMemoResponse,
  MemberProfileResponse,
  MemberResponse,
} from '@projects/types/library';
import { HttpClientAuthImpl } from './httpClientAuth';

interface CommunityService {
  getMembers: () => Promise<MemberResponse>;
  getMemberProfile: (
    memberId: number,
    page: number,
    size: number
  ) => Promise<MemberProfileResponse>;
  getMemberMemo: (
    bookId: number,
    page: number,
    size: number
  ) => Promise<MemberMemoResponse>;
}

export class CommunityServiceImpl implements CommunityService {
  constructor(private httpClient: HttpClientAuthImpl) {}

  getMembers = async () => {
    const { data } = await this.httpClient.get<MemberResponse>(
      '/members/hall-of-fame'
    );
    return data;
  };

  getMemberProfile = async (memberId: number, page: number, size: number) => {
    const { data } = await this.httpClient.get<MemberProfileResponse>(
      `/members/other/${memberId}`,
      {
        params: {
          page,
          size,
        },
      }
    );
    return data;
  };

  getMemberMemo = async (bookId: number, page: number, size: number) => {
    const { data } = await this.httpClient.get<MemberMemoResponse>(
      `/members/other/books/${bookId}`,
      {
        params: {
          page,
          size,
        },
      }
    );
    return data;
  };
}
