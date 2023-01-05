import styled, { css } from 'styled-components';

type Props = {
  src: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
  width?: string;
};

export default function BookCoverItem({
  src,
  onClick,
  width = '5.3rem',
}: Props) {
  return (
    <Wrapper>
      <Img src={src} alt="book_cover" onClick={onClick} width={width} />
    </Wrapper>
  );
}
const ACTIVE = css`
  cursor: pointer;
  transition: transfrom 300ms ease-in;
  &:hover {
    transform: scale(1.02);
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  padding: 0.3rem;
`;

const Img = styled.img<Props>`
  border-radius: 0.3rem;
  box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
  ${(props) => props.onClick && ACTIVE}
  width: ${(props) => props.width};
`;
