import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '@components/common/Pagination';
import { BookCoverItem } from '@components/common';
import useMemoBooks from './hooks/useMemoBooks';

export default function MemoBookList() {
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();
  const { item: memoBooks, pageInfo } = useMemoBooks({ page });

  const handleClickMemoBookCover = (bookId: number) => {
    navigate(`/memobook/${bookId}`);
  };

  return (
    <>
      <ul>
        {memoBooks.map((item) => (
          <BookCoverItem
            key={item.bookId}
            src={item.cover}
            onClick={() => handleClickMemoBookCover(item.bookId)}
          />
        ))}
      </ul>
      <Pagination
        page={page}
        totalPages={pageInfo.totalPages}
        onChange={(newPage) => {
          setPage(newPage);
        }}
      />
    </>
  );
}

/**
 * memobooks 페이지 기본 기능
 * 페이지 네이션 - page에대한 정보를 공유해야 함 - useMemoBooks에서 처리
 * 메모가 담긴 책들을 보여준다
 * ui 수정 필요할까? 디 에디트
 */
