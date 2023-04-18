import { BookCoverItem } from '@components/common';
import { ReadEndBook } from '@projects/types/library';
import styled from 'styled-components';

type Props = {
  date: number;
  gridColumn?: number;
  readEndBooks?: ReadEndBook[];
};

export default function DateBox({ date, gridColumn, readEndBooks }: Props) {
  return (
    <Wrapper gridCloumn={gridColumn ?? null}>
      <Stack>
        <Date>{date}</Date>
        {readEndBooks?.map((book) => (
          <BookCoverItem key={book.bookId} width="100%" src={book.cover} />
        ))}
      </Stack>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ gridCloumn: number | null }>`
  width: 100%;
  height: 5rem;
  grid-column-start: ${({ gridCloumn }) => gridCloumn};
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;
