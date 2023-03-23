import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import { BookCoverItem } from '@components/common';
import type { BookStatus } from '@projects/types/library';
import { PAGE_URL } from '@constants';
import { BOOKSTATUS } from 'constants/library';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import { useEffect } from 'react';
import { useBookSlider } from './hooks/useBookSlider';
import SkeletonLibraryBooks from './SkeletonLibraryBooks';

type Props = {
  bookStatus: BookStatus;
};

export default function BookSlider({ bookStatus: status }: Props) {
  const navigate = useNavigate();

  const { data, isLoading, hasNextPage, fetchNextPage } = useBookSlider({
    bookStatus: status,
  });

  const { ref, isIntersect } = useIntersectionObserver({ threshold: 1.0 });
  useEffect(() => {
    if (isIntersect && hasNextPage) {
      fetchNextPage();
    }
  }, [isIntersect, hasNextPage, fetchNextPage]);

  if (isLoading) return <SkeletonLibraryBooks />;

  return (
    <>
      <Title>{BOOKSTATUS[status]}</Title>
      <Container>
        <Swiper spaceBetween={5} slidesPerView={4}>
          {data?.pages.map((page) =>
            page.item.map((book) => (
              <SwiperSlide key={book.bookId}>
                <BookCoverItem
                  src={book.cover}
                  onClick={() => navigate(`${PAGE_URL.LIBRARY}/${book.bookId}`)}
                />
              </SwiperSlide>
            ))
          )}
          {hasNextPage && <div ref={ref} />}
        </Swiper>
        <BookShelf />
      </Container>
    </>
  );
}

const Title = styled.h1`
  color: ${({ theme }) => theme.color.gray01};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

const Container = styled.div`
  width: 100%;
  z-index: 0;
  margin-bottom: 1rem;
  .swiper-wrapper {
    align-items: baseline;
    padding: 0 1rem;
  }
`;

const BookShelf = styled.div`
  width: 100%;
  height: 0.7rem;
  box-shadow: 0px -1px 6px rgba(0, 0, 0, 0.05), 0px 4px 16px rgba(0, 0, 0, 0.25);
`;
