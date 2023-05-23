import styled, { css } from 'styled-components';

type Props = {
  src: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
  width?: string;
};

const defaultBookCoverUrl = new URL(
  '../../assets/default/bookCoverDefault.png',
  import.meta.url
).href;

export default function BookCoverItem({
  src,
  onClick,
  width = '5.3rem',
}: Props) {
  return (
    <Img
      src={src || defaultBookCoverUrl}
      alt="book_cover"
      onClick={onClick}
      width={width}
    />
  );
}
const ACTIVE = css`
  cursor: pointer;
  transition: transfrom 300ms ease-in;
  &:hover {
    transform: scale(1.02);
  }
`;
const Img = styled.img<Props>`
  border-radius: 0.3rem;
  box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
  ${(props) => props.onClick && ACTIVE}
  width: ${(props) => props.width};
`;
