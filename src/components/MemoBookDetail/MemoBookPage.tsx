/* eslint-disable react/no-danger */
import type { MemoBookDetail } from '@projects/types/library';
import { getLatestUpdateDate } from '@utils';
import { BgType, MEMO_BACKGROUND } from 'constants/memoBackground';
import DOMPurify from 'dompurify';
import styled from 'styled-components';

type Props = {
  memo: MemoBookDetail;
  memoBookBg: BgType;
};

export default function MemoBookPage({ memo, memoBookBg }: Props) {
  const date = getLatestUpdateDate(memo.createdAt, memo.updatedAt);
  return (
    <Wrapper
      fontColor={MEMO_BACKGROUND[memoBookBg].color}
      imageUrl={MEMO_BACKGROUND[memoBookBg].imageUrl}
    >
      <MemoInfo>
        <p>{memo.memoBookPage}</p>
        <p>{date}</p>
      </MemoInfo>
      <MemoContent>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(memo.memoContent),
          }}
        />
      </MemoContent>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ fontColor: string; imageUrl: string }>`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 30rem;
  z-index: 0;
  background-image: url(${({ imageUrl }) => imageUrl});
  font-size: ${({ theme }) => theme.fontSize.base};
  background-size: cover;
  color: ${({ fontColor }) => fontColor};
  font-family: 'RIDIBatang';
`;

const MemoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const MemoContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
`;
