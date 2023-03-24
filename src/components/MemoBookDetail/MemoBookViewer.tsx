import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';

import { MemoTypeSelect } from '@components/MemoForm';
import { memoBookTypeList } from '@constants';
import useIntersectionObserver from '@hooks/useIntersectionObserver';
import useMemobookDetail from './hooks/useMemobookDetail';
import useMemoBookViewer from './hooks/useMemoBookViewer';
import MemoBgSelect from './MemoBgSelect';
import MemoBookPage from './MemoBookPage';

export default function MemoBookViewer() {
  const { bookId } = useParams();
  const { memoBookType, handleTypeChange, memoBookBg, handleValueChange } =
    useMemoBookViewer();
  const { memoBooks, hasNextPage, fetchNextPage } = useMemobookDetail({
    bookId: Number(bookId),
    memoType: memoBookType,
  });
  const { ref, isIntersect } = useIntersectionObserver({ threshold: 1.0 });

  useEffect(() => {
    if (isIntersect && hasNextPage) {
      fetchNextPage();
    }
  }, [isIntersect, hasNextPage, fetchNextPage]);

  return (
    <>
      <MemoTypeSelect
        typeList={memoBookTypeList}
        type={memoBookType}
        onChange={handleTypeChange}
      />
      <MemoBgSelect value={memoBookBg} onChange={handleValueChange} />
      <Container>
        <Swiper modules={[Navigation]} slidesPerView={1} navigation>
          {memoBooks.map((memo) => (
            <SwiperSlide key={memo.memoId}>
              <MemoBookPage memo={memo} memoBookBg={memoBookBg} />
            </SwiperSlide>
          ))}
          {hasNextPage && <div ref={ref} />}
        </Swiper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  z-index: 0;
  margin-bottom: 2rem;
`;
