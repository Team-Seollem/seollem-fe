import type { MemberResponse } from '@projects/types/library';
import { HttpClientAuthImpl } from './httpClientAuth';

interface CommunityService {
  getMembers: () => Promise<MemberResponse>;
}

export class CommunityServiceImpl implements CommunityService {
  constructor(private httpClient: HttpClientAuthImpl) {}

  getMembers = async () => {
    const { data } = await this.httpClient.get<MemberResponse>(
      '/members/hall-of-fame'
    );
    return data;
  };
}
