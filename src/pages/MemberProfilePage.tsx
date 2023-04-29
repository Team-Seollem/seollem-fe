import { PageTitle } from '@components/common';
import MemberProfile from '@components/MemberProfile/MemberProfile';

export default function MemberProfilePage() {
  return (
    <>
      <PageTitle title="회원 프로필 조회" />
      <MemberProfile />
    </>
  );
}
