import { ReadEndBook } from '@projects/types/library';
import styled from 'styled-components';
import CalendarModal from './CalendarModal';

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
        {readEndBooks && <CalendarModal readEndBooks={readEndBooks} />}
      </Stack>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ gridCloumnStart: number | null }>`
  width: 100%;
  height: auto;
  min-height: 7rem;
  @media (max-width: 450px) {
    min-height: 4.8rem;
  }
  grid-column-start: ${({ gridCloumnStart }) => gridCloumnStart};
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: 0.5rem;
  /* margin-left: 0.5rem; */
`;
