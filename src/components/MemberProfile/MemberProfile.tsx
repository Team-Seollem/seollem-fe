import { useParams } from 'react-router-dom';
import { Avatar, Boxcontainer, Field } from '@components/common';
import useMemberProfile from './hook/useMemberProfile';
import MemberLibary from './MemberLibary';

export default function MemberProfile() {
  const { memberId } = useParams();

  const { name, content, url } = useMemberProfile({
    memberId: Number(memberId),
  });

  return (
    <Boxcontainer>
      <Avatar src={url} width="9rem" />
      <Field field="name" fieldText={name} />
      <Field field="content" fieldText={content} />
      <MemberLibary memberId={Number(memberId)} />
    </Boxcontainer>
  );
}
