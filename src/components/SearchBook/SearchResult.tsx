import { useNavigate } from 'react-router-dom';

import type { SearchBookInfo } from '@projects/types/basic';
import { SearchBookQuery } from '@hooks/query';
import {
  BookAddButton,
  BookCoverItem,
  BookInfoItem,
  Boxcontainer,
} from '@components/common';

type Props = {
  searchQuery: string;
};

function SearchResult({ searchQuery }: Props) {
  const { data, isSuccess } = SearchBookQuery(searchQuery);
  const navigate = useNavigate();
  return (
    <>
      <BookAddButton>찾으시는 책이 없다면 직접 등록해보세요</BookAddButton>

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
