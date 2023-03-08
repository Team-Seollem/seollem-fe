import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsPlusSquare } from 'react-icons/bs';

import type { SearchBookInfo } from '@projects/types/basic';
import { SearchBookQuery } from '@hooks/query';
import { BookCoverItem, BookInfoItem, Boxcontainer } from '@components/common';

type Props = {
  searchQuery: string;
};

function SearchResult({ searchQuery }: Props) {
  const { data, isSuccess } = SearchBookQuery(searchQuery);
  const navigate = useNavigate();
  return (
    <>
      <SSection>
        <BsPlusSquare />
        <div className="noResults">찾으시는 책이 없다면 직접 등록해보세요</div>
      </SSection>

      {isSuccess &&
        data.map((bookInfoData: SearchBookInfo, idx: number) => {
          return (
            <Boxcontainer
              key={idx}
              className="bookInfo"
              onClick={() =>
                navigate(`/book/detail/${bookInfoData.title}`, {
                  state: {
                    bookInfoData,
                  },
                })
              }
            >
              <BookCoverItem src={bookInfoData.cover} />
              <BookInfoItem bookInfoData={bookInfoData} />
            </Boxcontainer>
          );
        })}
    </>
  );
}

export default SearchResult;

const SSection = styled.section`
  display: flex;
  padding: 1rem 1.5rem;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 0.25rem 0 rgba(0 0 0 / 20%);
  &:hover {
    transform: translate(-0.2rem);
    cursor: pointer;
  }
  .noResults {
    margin-left: 1rem;
  }
`;
