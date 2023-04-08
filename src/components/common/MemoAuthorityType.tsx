import { MEMO_AUTHORITY } from '@constants';
import type { MemoAuthority } from '@projects/types/library';
import styled from 'styled-components';

type Props = {
  authority: MemoAuthority;
};

export default function MemoAuthorityType({ authority }: Props) {
  return <Text>{MEMO_AUTHORITY[authority].typeText}</Text>;
}

const Text = styled.div`
  display: inline-block;
  align-self: flex-end;
  padding: 0.2rem 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray02};
  border-radius: 0.3rem;
`;
