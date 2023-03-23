import styled from 'styled-components';

const SkeletonBookCoverItem = styled.div`
  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(460px);
    }
  }
  width: 5.3rem;
  height: 7.42rem;
  border-radius: 0.3rem;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5.3rem;
    height: 7.42rem;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: loading 2s infinite linear;
  }
`;

export default SkeletonBookCoverItem;
