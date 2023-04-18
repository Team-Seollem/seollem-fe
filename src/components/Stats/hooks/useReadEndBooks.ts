import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { bookService } from '@apis/index';
import { CACHE_KEYS } from '@constants';
import { ReadEndBook, ReadEndBookDateMap } from '@projects/types/library';

type Props = {
  year: number;
  month: number;
};

const fallback: ReadEndBookDateMap = {};

export default function useReadEndBooks({ year, month }: Props) {
  const readEndDateObj = useCallback(
    (data: ReadEndBook[]): ReadEndBookDateMap => {
      return data.reduce((acc, book) => {
        const date = dayjs(book.readEndDate).format('YYYY-MM-DD');
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(book);
        return acc;
      }, {} as ReadEndBookDateMap);
    },
    []
  );

  const { data = fallback } = useQuery({
    queryKey: CACHE_KEYS.readEndBooks(year, month),
    queryFn: () => bookService.getReadEndBooks(1, 30, year, month),
    staleTime: 1000 * 60 * 5,
    select: readEndDateObj,
  });
  return { data };
}
