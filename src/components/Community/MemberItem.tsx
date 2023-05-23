import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar } from '@components/common';
import type { Member } from '@projects/types/library';
import useMyProfile from '@components/MyProfile/hook/useMyProfile';
import { PAGE_URL } from '@constants';
import type { SuffixType } from './Members';

type Props = {
  member: Member;
  suffix: SuffixType;
};

export default function MemberItem({ member, suffix }: Props) {
  const navigate = useNavigate();
  const { data: myProfile } = useMyProfile();

  const path =
    member.memberId === myProfile.memberId
      ? PAGE_URL.MYPAGE
      : `/community/member/${member.memberId}`;

  return (
    <ListItem onClick={() => navigate(path)}>
      <Avatar src={member.url} />
      <Text>{member.name}</Text>
      <Suffix>
        {member.count} {suffix}
      </Suffix>
    </ListItem>
  );
}

const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.gray03};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color.gray01};

  &:hover {
    background-color: ${({ theme }) => theme.color.gray04};
    cursor: pointer;
  }
`;

const Text = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.base};
  margin-left: 1rem;
  @media (max-width: 410px) {
    font-size: ${({ theme }) => theme.fontSize.sm};
    margin-left: 0.5rem;
  }
`;

const Suffix = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-left: 1rem;
  vertical-align: baseline;
`;
