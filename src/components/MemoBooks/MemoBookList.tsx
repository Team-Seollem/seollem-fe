import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
      <Wrapper>
        {memoBooks.map((item) => (
          <BookCoverItem
            key={item.bookId}
            src={item.cover}
            onClick={() => handleClickMemoBookCover(item.bookId)}
          />
        ))}
      </Wrapper>

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

const Wrapper = styled.ul`
  width: 100%;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: baseline center;
  row-gap: 1rem;
`;
