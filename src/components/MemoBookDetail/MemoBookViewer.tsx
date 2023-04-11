import { useParams } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';

import { MemoTypeSelect } from '@components/MemoForm';
import { memoBookTypeList } from '@constants';
import useMemobookDetail from './hooks/useMemobookDetail';
import useMemoBookViewer from './hooks/useMemoBookViewer';
import MemoBgSelect from './MemoBgSelect';
import MemoBookPage from './MemoBookPage';

export default function MemoBookViewer() {
  const { bookId } = useParams();

  const { memoBookType, handleTypeChange, memoBookBg, handleValueChange } =
    useMemoBookViewer();

  const { memoBooks, isLoading, hasNextPage, fetchNextPage } =
    useMemobookDetail({
      bookId: Number(bookId),
      memoType: memoBookType,
    });

  return (
    <>
      <MemoTypeSelect
        typeList={memoBookTypeList}
        type={memoBookType}
        onChange={handleTypeChange}
      />
      <MemoBgSelect value={memoBookBg} onChange={handleValueChange} />
      {memoBooks.length === 0 ? (
        <Text>해당 타입의 메모가 없습니다. 전체 타입으로 조회해 보세요.</Text>
      ) : (
        <Container>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation
            onReachEnd={() => {
              if (hasNextPage && !isLoading) {
                fetchNextPage();
              }
            }}
          >
            {memoBooks.map((memo) => (
              <SwiperSlide key={memo.memoId}>
                <MemoBookPage memo={memo} memoBookBg={memoBookBg} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  z-index: 0;
  margin-bottom: 2rem;
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.color.gray01};
  text-align: center;
`;
