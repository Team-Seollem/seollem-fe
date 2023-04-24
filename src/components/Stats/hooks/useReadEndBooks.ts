import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { bookService } from '@apis/index';
import { CACHE_KEYS } from '@constants';
import { ReadEndBook, ReadEndBookDateMap } from '@projects/types/library';
import { getMonthYearDetails, getNewMonthYear } from 'utils/monthYear';

dayjs.locale('ko');

const fallback: ReadEndBookDateMap = {};

export default function useReadEndBooks() {
  const currentMonthYear = getMonthYearDetails(dayjs());

  const [monthYear, setMonthYear] = useState(currentMonthYear);

  const updateMonthYear = (monthIncrement: number) => {
    setMonthYear((prevData) => getNewMonthYear(prevData, monthIncrement));
  };

  const readEndDateObj = useCallback(
    (data: ReadEndBook[]): ReadEndBookDateMap => {
      return data.reduce((acc, book) => {
        const date = Number(dayjs(book.readEndDate).format('D'));
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(book);
        return acc;
      }, {} as ReadEndBookDateMap);
    },
    []
  );

  const { data: readEndbooks = fallback } = useQuery({
    queryKey: CACHE_KEYS.readEndBooks(monthYear.year, monthYear.month),
    queryFn: () => bookService.getReadEndBooks(monthYear.year, monthYear.month),
    // staleTime: 1000 * 60 * 5,
    select: readEndDateObj,
  });
  return { readEndbooks, monthYear, updateMonthYear };
}
