import { BookCoverItem } from '@components/common';
import styled from 'styled-components';
import type { BookStatus } from '@projects/types/library';
import { useNavigate } from 'react-router-dom';
import { PAGE_URL } from '@constants';
import { bookStatus } from 'constants/library';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useBookSlider } from './hook/useBookSlider';
import 'swiper/css';

type Props = {
  bookStatus: BookStatus;
};

export default function BookSlider({ bookStatus: status }: Props) {
  const { data, isLoading } = useBookSlider({ bookStatus: status });
  const navigate = useNavigate();

  if (isLoading) return <p>isLoading..</p>;

  return (
    <>
      <Title>{bookStatus[status]}</Title>
      <Container>
        <Swiper
          spaceBetween={5}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
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
        </Swiper>
        <BookShelf />
      </Container>
    </>
  );
}

const Title = styled.h1`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

const Container = styled.div`
  width: 100%;

  margin-bottom: 1rem;
  align-items: baseline;
  .swiper-wrapper {
    align-items: baseline;
    z-index: 0;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const BookShelf = styled.div`
  width: 100%;
  height: 0.7rem;
  box-shadow: 0px -1px 6px rgba(0, 0, 0, 0.05), 0px 4px 16px rgba(0, 0, 0, 0.25);
`;