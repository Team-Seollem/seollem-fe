import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';

import type { BookStatus } from '@projects/types/library';
import { BookCoverItem } from '@components/common';
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
          {books.map((book) => (
            <SwiperSlide key={book.bookId}>
              <BookCoverItem
                src={book.cover}
                onClick={() => navigate(`${PAGE_URL.LIBRARY}/${book.bookId}`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <BookShelf />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  z-index: 0;

  margin-bottom: 1rem;
  .swiper-wrapper {
    align-items: baseline;
    padding: 0 1rem;
    min-height: 8rem;
  }
`;

const BookShelf = styled.div`
  width: 100%;
  height: 0.7rem;
  box-shadow: 0px -1px 6px rgba(0, 0, 0, 0.05), 0px 4px 16px rgba(0, 0, 0, 0.25);
`;
