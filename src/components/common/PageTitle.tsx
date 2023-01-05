import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';

type Props = {
  title: string;
  path?: string;
};

export default function PageTitle({ title, path }: Props) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      {path && (
        <SLink to={path}>
          <BiLeftArrowAlt />
        </SLink>
      )}
      {!path && <BiLeftArrowAlt onClick={() => navigate(-1)} />}
      <h1>{title}</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  min-width: 355px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.gray};
  padding-bottom: 0.5rem;
  margin-bottom: 1.2rem;
  border-bottom: solid 0.7px ${({ theme }) => theme.color.gray};
  svg {
    cursor: pointer;
    font-size: 2rem;
    margin: 0 0.5rem 0 0.2rem;
    &:focus {
      color: ${({ theme }) => theme.color.mint};
    }
  }
  h1 {
    font-size: 1.2rem;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.gray};
`;
