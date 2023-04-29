import { useParams } from 'react-router-dom';
import { PageTitle } from '@components/common';
import MemberProfile from '@components/MemberProfile/MemberProfile';

export default function MemberProfilePage() {
  const { memberId } = useParams();
  return (
    <>
      <PageTitle title="회원 정보 보기" />
      <MemberProfile />
    </>
  );
}
