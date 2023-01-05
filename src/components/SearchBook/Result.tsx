import { useQuery } from '@tanstack/react-query';
import { BsPlusSquare } from 'react-icons/bs';
import styled from 'styled-components';
import { AxiosError } from 'axios';
import { SearchBookInfo, SearchProps } from '../../types/basic';
import { getBookInfo } from '../../apis/index';

function Result({ keyword }: Pick<SearchProps, 'keyword'>) {
  const { data, isLoading, isError, error } = useQuery<
    Array<SearchBookInfo>,
    AxiosError
  >(['book', keyword], () => getBookInfo(keyword), {
    enabled: !!keyword,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      <SBookContents>
        <BsPlusSquare />
        <div className="noResults">찾으시는 책이 없다면 직접 등록해보세요</div>
      </SBookContents>

      {data.map((book: SearchBookInfo, idx: number) => {
        return (
          <SBookContents key={idx}>
            <img src={book.cover} alt="도서 이미지" />
            <SBookContentKeyword>
              <div>{book.title}</div>
              <div>{book.author}</div>
            </SBookContentKeyword>
          </SBookContents>
        );
      })}
    </ul>
  );
}

export default Result;

const SBookContents = styled.li`
  display: flex;
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  border: ${(props) => props.theme.color.gray};
  &:hover {
    box-shadow: ${(props) => props.theme.color.gray};
    transform: translate(-0.1rem);
    cursor: pointer;
  }
  .noResults {
    margin-left: 1rem;
  }
`;
const SBookContentKeyword = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1rem;
`;
