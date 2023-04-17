/* eslint-disable react/no-danger */
import styled from 'styled-components';
import Title from '@components/common/Title';
import { getLatestUpdateDate } from '@utils';
import { MEMO_TYPES } from '@constants';
import DOMPurify from 'dompurify';
import useRandomMemo from './hooks/useRandomMemo';

export default function RandomMemo() {
  const randomMemo = useRandomMemo();
  const date = getLatestUpdateDate(randomMemo.createdAt, randomMemo.updatedAt);

  return (
    <>
      <Title>랜덤 메모</Title>
      <Wrapper>
        <Content>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(randomMemo.memoContent),
            }}
          />
        </Content>
        <Info>{date}</Info>
        <Info>{MEMO_TYPES[randomMemo.memoType].typeText}</Info>
        <Info>{`p. ${randomMemo.memoBookPage}`}</Info>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.color.skyblue01};
  color: ${({ theme }) => theme.color.gray01};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const Content = styled.div`
  line-height: 150%;
  margin-bottom: 1rem;
  min-height: 5rem;
  font-family: 'RIDIBatang';
  overflow: hidden;
  & img {
    max-width: 100%;
    height: auto;
  }
`;

const Info = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: right;
  margin-bottom: 0.3rem;
`;
