import { useParams } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';

import useMemberMemoBook from './hook/useMemberMemoBook';
import MemberMemoBookPage from './MemberMemoBookPage';

export default function MemberMemoList() {
  const { memberId, bookId } = useParams();

  const { memoList, isLoading, hasNextPage, fetchNextPage } = useMemberMemoBook(
    {
      memberId: Number(memberId),
      bookId: Number(bookId),
    }
  );

  console.log(memoList);

  return (
    <Container>
      {memoList[0] === undefined ? (
        <p>작성된 메모가 없습니다</p>
      ) : (
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
          {memoList.map((memo) => (
            <SwiperSlide key={memo.memoId}>
              <MemberMemoBookPage
                memo={memo}
                bookId={Number(bookId)}
                memberId={Number(memberId)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  z-index: 0;
  margin-bottom: 2rem;
  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.color.primary_light};
  }
`;
