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
      <h1>{bookStatus[status]}</h1>
      <Container>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
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
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;
