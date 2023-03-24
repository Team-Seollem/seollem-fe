import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useBookDetail from '@components/LibraryBook/hooks/useBookDetail';
import { parseTitle } from 'utils/parseTitle';
import { Button } from '@components/common';

export default function BookInfo() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const { title } = useBookDetail({ bookId: Number(bookId) });
  const { title: mainTitle, subTitle } = parseTitle(title);

  const handleMemoEdit = () => {
    navigate(`/book/library/${bookId}`);
  };
  return (
    <Wrapper>
      <div>
        <Title>{mainTitle}</Title>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
      </div>
      <Button styleType="solidPositive" size="small" onClick={handleMemoEdit}>
        메모 작성하러 가기
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: flex-start;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray03};
  margin-bottom: 1rem;
`;
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
