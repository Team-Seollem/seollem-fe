import { HttpClientAuthImpl } from './httpClientAuth';

export type Member = {
  memberId: number;
  url: string;
  name: string;
  count: number;
};

export type MemberResponse = {
  mostReadMember: Member[];
  mostMemoedMember: Member[];
};

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
