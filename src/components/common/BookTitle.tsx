import styled from 'styled-components';
import { parseTitle } from 'utils/parseTitle';

type Props = {
  title: string;
};

export default function BookTitle({ title }: Props) {
  const { title: mainTitle, subTitle } = parseTitle(title);
  return (
    <div>
      <Title>{mainTitle}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </div>
  );
}

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.black};
`;

const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.gray01};
  margin-top: 0.5rem;
  line-height: 1.5rem;
`;
