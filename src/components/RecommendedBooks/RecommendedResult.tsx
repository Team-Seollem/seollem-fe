import { BookCoverItem, BookInfoItem, Boxcontainer } from '@components/common';
import { RecommendedBooksQuery } from '@hooks/query';
import { SearchBookInfo } from '@projects/types/basic';
import { useNavigate } from 'react-router-dom';

type Props = {
  sort: string;
};

function RecommendedResult({ sort }: Props) {
  const { data, isSuccess } = RecommendedBooksQuery(sort);
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
