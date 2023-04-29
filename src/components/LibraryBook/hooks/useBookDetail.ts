import { useQuery } from '@tanstack/react-query';
import { CACHE_KEYS } from '@constants';
import { bookService } from '@apis/index';
import type { DetailBook } from '@projects/types/library';

type Props = {
  bookId: number;
};

const fallback: DetailBook = {
  bookId: 0,
  title: '',
  cover: '',
  author: '',
  publisher: '',
  bookStatus: 'YET',
  createdAt: '',
  star: 0,
  currentPage: 0,
  itemPage: 0,
  memoCount: 0,
  readStartDate: null,
  readEndDate: null,
};

export default function useBookDetail({ bookId }: Props) {
  const { data = fallback } = useQuery({
    queryKey: CACHE_KEYS.bookDetail(bookId),
    queryFn: () => bookService.getBookDetail(bookId),
    staleTime: 1000 * 60 * 5,
  });
  return data;
}
