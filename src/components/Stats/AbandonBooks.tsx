import { BookCoverItem } from '@components/common';
import Title from '@components/common/Title';
import { AbandonBook } from '@projects/types/library';

import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';

const abandonBooks: AbandonBook[] = [
  {
    bookId: 100,
    createdAt: '2021-01-01',
    title: '사건',
    cover: 'http://image.yes24.com/goods/81631163/M',
  },
  {
    bookId: 101,
    createdAt: '2021-01-01',
    title: '다른 의견',
    cover: 'http://image.yes24.com/goods/104498102/M',
  },
  {
    bookId: 102,
    createdAt: '2021-01-01',
    title: '어른 이후의 어른',
    cover: 'https://image.yes24.com/goods/116790019/M',
  },
  {
    bookId: 103,
    createdAt: '2021-01-01',
    title: '세피아빛 초상',
    cover: 'http://image.yes24.com/goods/110164380/M',
  },
  {
    bookId: 104,
    createdAt: '2021-01-01',
    title: '이선 프롬',
    cover: 'http://image.yes24.com/goods/91887643/M',
  },
  {
    bookId: 105,
    createdAt: '2021-01-01',
    title: '포스트맨은 벨을 두 번 울린다',
    cover: 'http://image.yes24.com/momo/TopCate388/MidCate007/6005508.jpg',
  },
];

export default function AbandonBooks() {
  const navigate = useNavigate();

  const handleBookClick = (bookId: number) => {
    navigate(`/book/library/${bookId}`);
  };

  return (
    <div>
      <Title>잊고 지낸 나의 책</Title>
      <Container>
        <Swiper spaceBetween={5} slidesPerView={4}>
          {abandonBooks.map((book) => (
            <SwiperSlide
              key={book.bookId}
              onClick={() => handleBookClick(book.bookId)}
            >
              <BookCoverItem src={book.cover} />
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
