import { ReadEndBook } from '@projects/types/library';
import styled from 'styled-components';

type Props = {
  date: number;
  gridColumn?: number;
  readEndBooks?: ReadEndBook[];
};

export default function DateBox({ date, gridColumn, readEndBooks }: Props) {
  return (
    <Wrapper gridCloumnStart={gridColumn ?? null}>
      <Stack>
        <Date>{date}</Date>
        {readEndBooks?.map((book) => (
          <BookCover key={book.bookId} src={book.cover} alt="book-cover-img" />
        ))}
      </Stack>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ gridCloumnStart: number | null }>`
  width: 100%;
  height: 100%;
  min-height: 5rem;
  grid-column-start: ${({ gridCloumnStart }) => gridCloumnStart};
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

const BookCover = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;

  overflow: hidden;
`;
