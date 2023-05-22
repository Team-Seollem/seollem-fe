import { useNavigate } from 'react-router-dom';
import { BookCoverItem, BookInfoItem, Boxcontainer } from '@components/common';
import type { RecommendSort, SearchBookInfo } from '@projects/types/basic';
import { useRecommendBooks } from './hook/useRecommendBooks';

type Props = {
  sort: RecommendSort;
};

function RecommendedResult({ sort }: Props) {
  const { data, isSuccess } = useRecommendBooks(sort);
  const navigate = useNavigate();
  return (
    <div>
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
    </div>
  );
}

export default RecommendedResult;
