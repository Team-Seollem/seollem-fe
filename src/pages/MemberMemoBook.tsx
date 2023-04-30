import { useParams } from 'react-router-dom';
import { PageTitle } from '@components/common';
import useMemberProfile from '@components/MemberProfile/hook/useMemberProfile';
import MemberMemoList from '@components/MemberMemoBook/MemberMemoList';

export default function MemberMemoBook() {
  const { memberId } = useParams();

  const { name } = useMemberProfile({
    memberId: Number(memberId),
  });

  return (
    <>
      <PageTitle title={`${name}님의 작은 책`} />
      <MemberMemoList />
    </>
  );
}
