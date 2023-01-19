import BookCoverItem from '@components/common/BookCoverItem';
import Boxcontainer from '@components/common/BoxContainer';
import { RecommendedBooksQuery } from '@hooks/query';
import { SearchBookInfo } from '@projects/types/basic';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  sort: string;
};

function RecommendedResult({ sort }: Props) {
  const { data, isSuccess } = RecommendedBooksQuery(sort);
  const navigate = useNavigate();
  return (
    <ul>
      {isSuccess &&
        data.map((bookInfoData: SearchBookInfo, idx: number) => {
          return (
            <Boxcontainer
              className="recommendedBooks"
              key={idx}
              onClick={() => {
                navigate(`/detail/book/${bookInfoData.title}`, {
                  state: {
                    bookInfoData,
                  },
                });
              }}
            >
              <BookCoverItem src={bookInfoData.cover} />
              <SSection>
                <div>{bookInfoData.title}</div>
                <div>{bookInfoData.author}</div>
              </SSection>
            </Boxcontainer>
          );
        })}
    </ul>
  );
}

export default RecommendedResult;

const SSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1rem;
  padding: 0.3rem;
`;
