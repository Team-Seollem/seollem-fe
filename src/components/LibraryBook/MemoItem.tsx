import styled from 'styled-components';
import type { MemoBookDetail } from '@projects/types/library';
import { BsTrashFill } from 'react-icons/bs';
import { MEMO_TYPES } from '@constants';
import { getLatestUpdateDate } from '@utils';
import { Button } from '@components/common';

type Props = {
  memo: MemoBookDetail;
};

export default function MemoItem({ memo }: Props) {
  return (
    <Wrapper>
      <InfoContainer>
        <PageInfo>{`p. ${memo.memoBookPage}`}</PageInfo>
        <Button styleType="ghost" size="small">
          <Svg />
        </Button>
      </InfoContainer>
      <InfoContainer>
        <p>{getLatestUpdateDate(memo.createdAt, memo.updatedAt)}</p>
        <Type>{MEMO_TYPES[memo.memoType].typeText}</Type>
      </InfoContainer>

      <div>{memo.memoContent}</div>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  border: 1px solid black;
  border-radius: 0.3rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  cursor: pointer;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
`;

const Svg = styled(BsTrashFill)`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.gray01};
`;

const PageInfo = styled.div`
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.skyblue01};
  padding: 0.5rem 1rem;
  text-align: center;
  color: white;
`;

const Type = styled.div`
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  background-color: ${({ theme }) => theme.color.skyblue01};
  color: ${({ theme }) => theme.color.white};
`;
