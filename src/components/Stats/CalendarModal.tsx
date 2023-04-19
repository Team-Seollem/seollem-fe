import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Modal from '@components/common/Modal';
import useModal from '@hooks/useModal';
import { ReadEndBook } from '@projects/types/library';
import { BookCoverItem } from '@components/common';

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
      <OpenModalButton src={readEndBooks[0].cover} onClick={toggle} />
      <Modal isOpen={isOpen} closeModal={toggle}>
        <h1>다 읽은 책 보러가기</h1>
        <Container>
          <Swiper spaceBetween={1} slidesPerView={3}>
            {readEndBooks.map((book) => (
              <SwiperSlide key={book.bookId}>
                <BookCoverItem
                  src={book.cover}
                  width="3rem"
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
const OpenModalButton = styled.img`
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
  width: 100%;
  z-index: 0;
  .swiper-wrapper {
    align-items: baseline;
    justify-content: center;
    margin: 1rem;
  }
`;
