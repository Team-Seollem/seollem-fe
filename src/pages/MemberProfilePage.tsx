import { useParams } from 'react-router-dom';
import { PageTitle } from '@components/common';

export default function MemberProfile() {
  const { memberId } = useParams();
  return <PageTitle title="회원 정보 보기" />;
}
