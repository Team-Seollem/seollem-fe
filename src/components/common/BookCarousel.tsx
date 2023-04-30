import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import BookCoverItem from './BookCoverItem';

type Book = { bookId: number; cover: string };

type Props<T extends Book> = {
  books: T[];
  onBookCoverClick: (bookId: number) => void;
  onReachEnd: () => void;
  carouselWidth?: string;
  bookCoverWidth?: string;
  navigation?: boolean;
  bookShelf?: boolean;
};
export default function BookCarousel<T extends Book>({
  books,
  onBookCoverClick,
  onReachEnd,
  carouselWidth,
  bookCoverWidth,
  navigation,
  bookShelf,
}: Props<T>) {
  return (
    <Container carouselWidth={carouselWidth || '100%'}>
      <Swiper
        modules={navigation ? [Navigation] : []}
        navigation={navigation}
        spaceBetween={5}
        slidesPerView={4}
        slidesPerGroup={4}
        speed={1000}
        onReachEnd={onReachEnd}
      >
        {books.map((book) => (
          <SwiperSlide key={book.bookId}>
            <BookCoverItem
              src={book.cover}
              width={bookCoverWidth}
              onClick={() => onBookCoverClick(book.bookId)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {bookShelf && <BookShelf />}
    </Container>
  );
}

const Container = styled.div<{ carouselWidth: string }>`
  width: ${({ carouselWidth }) => carouselWidth};
  z-index: 0;
  margin-bottom: 1rem;
  .swiper-wrapper {
    align-items: baseline;
    padding: 0 1rem;
    min-height: 8rem;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.color.gray03};
  }
`;

const BookShelf = styled.div`
  width: 100%;
  height: 0.7rem;
  box-shadow: 0px -1px 6px rgba(0, 0, 0, 0.05), 0px 4px 16px rgba(0, 0, 0, 0.25);
`;
