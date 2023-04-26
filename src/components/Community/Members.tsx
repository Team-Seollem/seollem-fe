import Title from '@components/common/Title';
import styled from 'styled-components';
import useMembers from './hook/useMembers';
import MemberItem from './MemberItem';

const memberListType = {
  mostReadMember: '가장 책을 많이 읽은 회원 📚',
  mostMemoedMember: '가장 많은 메모를 남긴 회원 📝',
};

type MemberListType = keyof typeof memberListType;

type Props = {
  type: MemberListType;
};

export default function Members({ type }: Props) {
  const { data: membersList } = useMembers();

  return (
    <Section>
      <Title>{memberListType[type]}</Title>
      <ListWrapper>
        {membersList[type].map((member) => (
          <MemberItem key={member.memberId} member={member} />
        ))}
      </ListWrapper>
    </Section>
  );
}

const Section = styled.section`
  margin-bottom: 2rem;
`;

const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
`;
