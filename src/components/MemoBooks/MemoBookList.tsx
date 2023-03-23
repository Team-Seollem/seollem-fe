import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookCoverItem, Pagination } from '@components/common';
import useMemoBooks from './hooks/useMemoBooks';
import * as S from './styles';
import SkeletonBookList from './SkeletonBookList';

export default function MemoBookList() {
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();
  const { memoBooks, pageInfo, isLoading } = useMemoBooks({ page });

  const handleClickMemoBookCover = (bookId: number) => {
    navigate(`/memobook/${bookId}`);
  };
  return (
    <>
      {isLoading ? (
        <SkeletonBookList />
      ) : (
        <S.Wrapper>
          {memoBooks.map((item) => (
            <BookCoverItem
              key={item.bookId}
              src={item.cover}
              onClick={() => handleClickMemoBookCover(item.bookId)}
            />
          ))}
        </S.Wrapper>
      )}
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
