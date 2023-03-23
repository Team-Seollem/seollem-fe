import { SkeletonBookCoverItem } from '@components/common';
import styled from 'styled-components';

export default function SkeletonLibraryBooks() {
  return (
    <Container>
      <Title />
      <Wrapper>
        {Array.from(new Array(4)).map((el, idx) => (
          <SkeletonBookCoverItem key={idx} />
        ))}
      </Wrapper>
      <BookShelf />
    </Container>
  );
}
const Container = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.div`
  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(460px);
    }
  }

  background-color: #f2f2f2;
  width: 6rem;
  height: 1.5rem;
  margin-bottom: 0.3rem;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6rem;
    height: 1.5rem;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: loading 2s infinite linear;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 0.2rem;
`;

const BookShelf = styled.div`
  width: 100%;
  height: 0.7rem;
  box-shadow: 0px -1px 6px rgba(0, 0, 0, 0.05), 0px 4px 16px rgba(0, 0, 0, 0.25);
`;
