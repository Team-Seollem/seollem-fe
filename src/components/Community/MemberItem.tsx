import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Avatar } from '@components/common';
import { Member } from '../../apis/communityService';

type Props = {
  member: Member;
};

export default function MemberItem({ member }: Props) {
  const navigate = useNavigate();
  return (
    <ListItem onClick={() => navigate(`/community/member/${member.memberId}`)}>
      <Avatar src={member.url} />
      <Text>{member.name}</Text>
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
