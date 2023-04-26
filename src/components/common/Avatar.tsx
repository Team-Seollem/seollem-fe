import styled from 'styled-components';

type Props = {
  src: string;
  width?: string;
};
export default function Avatar({ src, width = '2rem' }: Props) {
  return <Img src={src} alt="avatar" width={width} />;
}

const Img = styled.img<Props>`
  border-radius: 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.color.gray02};
  margin: 0.5rem;
`;
