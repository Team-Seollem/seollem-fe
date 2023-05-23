import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BookCarousel } from '@components/common';
import useMemberProfile from './hook/useMemberProfile';

type Props = {
  memberId: number;
};

export default function MemberLibary({ memberId }: Props) {
  const navigate = useNavigate();

  const handleBookClick = (bookId: number) => {
    navigate(`/community/member/${memberId}/memobook/${bookId}`);
  };

  const { name, library, isLoading, hasNextPage, fetchNextPage } =
    useMemberProfile({
      memberId,
    });

  return (
    <>
      <Title>📚 {name}님의 서재</Title>
      <BookCarousel
        books={library}
        onBookCoverClick={(bookId) => handleBookClick(bookId)}
        onReachEnd={() => {
          if (!isLoading && hasNextPage) {
            fetchNextPage();
          }
        }}
        carouselWidth="100%"
        bookCoverWidth="4.5rem"
        bookShelf
      />
    </>
  );
}

export const Title = styled.h3`
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  margin-right: 1rem;
  white-space: nowrap;
  margin: 1rem 0;
  width: 80%;
  font-size: ${({ theme }) => theme.fontSize.base};
  @media (max-width: 410px) {
    width: 100%;
  }
`;
