import { useNavigate } from 'react-router-dom';
import Title from '@components/common/Title';
import { BookCarousel } from '@components/common';

import useAbandonBooks from './hooks/useAbandonBooks';

export default function AbandonBooks() {
  const navigate = useNavigate();

  const handleBookClick = (bookId: number) => {
    navigate(`/book/library/${bookId}`);
  };

  const { abandonBooks, hasNextPage, fetchNextPage } = useAbandonBooks();

  if (abandonBooks.length === 0) return null;

  return (
    <div>
      <Title>잊고 지낸 나의 책</Title>
      <BookCarousel
        books={abandonBooks}
        onBookCoverClick={(bookId) => handleBookClick(bookId)}
        onReachEnd={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
      />
    </div>
  );
}
