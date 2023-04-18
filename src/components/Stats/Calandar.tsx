import Title from '@components/common/Title';
import { Button } from '@components/common';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import useReadEndBooks from './hooks/useReadEndBooks';
import DateBox from './DateBox';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calandar() {
  const { readEndbooks, updateMonthYear, monthYear } = useReadEndBooks();

  return (
    <div>
      <Title>독서 달력</Title>
      <Wrapper>
        <Hearder>
          <ArrowButton
            styleType="ghost"
            size="small"
            onClick={() => updateMonthYear(-1)}
          >
            <FaChevronLeft />
          </ArrowButton>
          <MonthYear>
            {monthYear.year} 년 {monthYear.monthName}
          </MonthYear>
          <ArrowButton
            styleType="ghost"
            size="small"
            onClick={() => updateMonthYear(1)}
          >
            <FaChevronRight />
          </ArrowButton>
        </Hearder>
        <WeekDays>
          {weekDays.map((day) => (
            <WeekDay key={day}>{day}</WeekDay>
          ))}
        </WeekDays>
        <DateGrid>
          <DateBox date={1} gridColumn={monthYear.firstDayOfWeek + 1} />
          {[...Array(monthYear.lastDate)].map((_, i) =>
            i > 0 ? <DateBox key={i} date={i + 1} /> : null
          )}
        </DateGrid>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.color.gray02};
  border-radius: 0.3rem;
`;

const Hearder = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const ArrowButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.gray01};
`;

const MonthYear = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.gray01};
  font-weight: bold;
`;

const WeekDays = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  margin-top: 0.5rem;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray02};
`;

const WeekDay = styled.div`
  color: ${({ theme }) => theme.color.gray01};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const DateGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
`;
