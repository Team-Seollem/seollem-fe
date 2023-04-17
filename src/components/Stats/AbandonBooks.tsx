import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';

import Title from '@components/common/Title';
import { BookCoverItem } from '@components/common';

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
      <Container>
        <Swiper
          spaceBetween={5}
          slidesPerView={4}
          onReachEnd={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
        >
          {abandonBooks.map((book) => (
            <SwiperSlide key={book.bookId}>
              <BookCoverItem
                src={book.cover}
                onClick={() => handleBookClick(book.bookId)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  z-index: 0;
  margin-bottom: 1rem;
  .swiper-wrapper {
    align-items: baseline;
    padding: 0 1rem;
  }
`;
