import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Modal from '@components/common/Modal';
import useModal from '@hooks/useModal';
import { ReadEndBook } from '@projects/types/library';

type Props = {
  readEndBooks: ReadEndBook[];
};

export default function CalendarModal({ readEndBooks }: Props) {
  const navigate = useNavigate();
  const { isOpen, toggle } = useModal();

  const handleBookClick = (booId: number) => {
    navigate(`/book/library/${booId}`);
  };

  return (
    <>
      <BookCoverButton src={readEndBooks[0].cover} onClick={toggle} />
      <Modal isOpen={isOpen} closeModal={toggle}>
        <h1>다 읽은 책 보러가기</h1>
        <Container>
          <Swiper spaceBetween={3} slidesPerView={3.5}>
            {readEndBooks.map((book) => (
              <SwiperSlide key={book.bookId}>
                <BookCoverButton
                  src={book.cover}
                  onClick={() => handleBookClick(book.bookId)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Modal>
    </>
  );
}
const BookCoverButton = styled.img`
  width: 80%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transfrom 300ms ease-in;
  &:hover {
    transform: scale(1.02);
  }
`;

const Container = styled.div`
  width: 20rem;
  z-index: 0;
  .swiper-wrapper {
    align-items: baseline;
    margin: 1rem;
  }
`;
