import dayjs from 'dayjs';

export type MonthYear = {
  startDate: dayjs.Dayjs;
  firstDayOfWeek: number; // startDate의 요일 0 === Sunday
  lastDate: number;
  monthName: string;
  month: number;
  year: number;
};

export const getUpdatedMonthYear = (
  monthYear: MonthYear,
  monthIncrement: number
): dayjs.Dayjs => {
  return monthYear.startDate.clone().add(monthIncrement, 'months');
};

export const getMonthYearDetails = (initialDate: dayjs.Dayjs): MonthYear => {
  const month = Number(initialDate.format('M'));
  const year = Number(initialDate.format('YYYY'));
  const startDate = dayjs(initialDate).startOf('month');
  const firstDayOfWeek = Number(startDate.format('d'));
  const lastDate = Number(startDate.clone().endOf('month').format('D'));
  const monthName = startDate.format('MMMM');
  return { startDate, firstDayOfWeek, lastDate, monthName, month, year };
};

export const getNewMonthYear = (
  prevData: MonthYear,
  monthIncrement: number
): MonthYear => {
  const newMonthYear = getUpdatedMonthYear(prevData, monthIncrement);
  return getMonthYearDetails(newMonthYear);
};
