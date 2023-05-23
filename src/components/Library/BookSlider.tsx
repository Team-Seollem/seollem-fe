import { useNavigate } from 'react-router-dom';
import type { BookStatus } from '@projects/types/library';
import { BookCarousel } from '@components/common';
import { PAGE_URL } from '@constants';
import { BOOKSTATUS } from 'constants/library';
import Title from '@components/common/Title';
import SkeletonLibraryBooks from './SkeletonLibraryBooks';
import useBookSlider from './hooks/useBookSlider';

type Props = {
  bookStatus: BookStatus;
};

export default function BookSlider({ bookStatus: status }: Props) {
  const navigate = useNavigate();

  const { books, isLoading, hasNextPage, fetchNextPage } = useBookSlider({
    bookStatus: status,
  });

  if (isLoading) return <SkeletonLibraryBooks />;

  return (
    <>
      <Title>{BOOKSTATUS[status].typeText}</Title>
      <BookCarousel
        books={books}
        onBookCoverClick={(bookId) => navigate(`${PAGE_URL.LIBRARY}/${bookId}`)}
        onReachEnd={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        bookShelf
      />
    </>
  );
}
