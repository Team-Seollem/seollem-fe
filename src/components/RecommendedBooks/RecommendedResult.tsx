import BookCoverItem from '@components/common/BookCoverItem';
import BookInfoItem from '@components/common/BookInfoItem';
import Boxcontainer from '@components/common/BoxContainer';
import { RecommendedBooksQuery } from '@hooks/query';
import { SearchBookInfo } from '@projects/types/basic';
import { HandleClickBookInfo } from '@utils';

type Props = {
  sort: string;
};

function RecommendedResult({ sort }: Props) {
  const { data, isSuccess } = RecommendedBooksQuery(sort);
  return (
    <div>
      {isSuccess &&
        data.map((bookInfoData: SearchBookInfo, idx: number) => {
          return (
            <Boxcontainer
              key={idx}
              className="bookInfo"
              onClick={() => HandleClickBookInfo(bookInfoData)}
            >
              <BookCoverItem src={bookInfoData.cover} />
              <BookInfoItem bookInfo={bookInfoData} />
            </Boxcontainer>
          );
        })}
    </div>
  );
}

export default RecommendedResult;
