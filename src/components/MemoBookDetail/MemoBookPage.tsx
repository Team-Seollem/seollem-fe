/* eslint-disable react/no-danger */
import { useRef } from 'react';
import DOMPurify from 'dompurify';
import { toPng } from 'html-to-image';
import styled from 'styled-components';
import { FiDownload } from 'react-icons/fi';

import type { MemoBookDetail } from '@projects/types/library';
import { getLatestUpdateDate } from '@utils';
import { BgType, MEMO_BACKGROUND } from 'constants/memoBackground';

type Props = {
  memo: MemoBookDetail;
  memoBookBg: BgType;
};

export default function MemoBookPage({ memo, memoBookBg }: Props) {
  const date = getLatestUpdateDate(memo.createdAt, memo.updatedAt);

  const imgRef = useRef<HTMLDivElement>(null);

  const downloadImage = async () => {
    if (!imgRef.current) return;
    const dataUrl = await toPng(imgRef.current);

    const link = document.createElement('a');
    link.download = 'selloem-memo.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <DownloadWrapper>
      <Wrapper
        fontColor={MEMO_BACKGROUND[memoBookBg].color}
        imageUrl={MEMO_BACKGROUND[memoBookBg].imageUrl}
        ref={imgRef}
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
      <DownloadIcon onClick={downloadImage} />
    </DownloadWrapper>
  );
}

const DownloadWrapper = styled.div`
  position: relative;
`;

const Wrapper = styled.div<{ fontColor: string; imageUrl: string }>`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 30rem;
  z-index: 0;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  color: ${({ fontColor }) => fontColor};
  font-family: 'RIDIBatang';
`;

const MemoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const MemoContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const DownloadIcon = styled(FiDownload)`
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
