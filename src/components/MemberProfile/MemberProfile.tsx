import { useParams } from 'react-router-dom';
import { Avatar, Boxcontainer, Field } from '@components/common';
import useMemberProfile from './hook/useMemberProfile';

export default function MemberProfile() {
  const { memberId } = useParams();

  const { name, content, url, library, isLoading, hasNextPage, fetchNextPage } =
    useMemberProfile({ memberId: Number(memberId) });

  return (
    <Boxcontainer>
      <Avatar src={url} width="9rem" />
      <Field field="name" fieldText={name} />
      <Field field="content" fieldText={content} />
    </Boxcontainer>
  );
}
