import { useQuery } from '@tanstack/react-query';
import { CACHE_KEYS } from '@constants';
import { bookService } from '@apis/index';

type Props = {
  bookId: number;
};

export const useBookDetail = ({ bookId }: Props) => {
  const { data } = useQuery({
    queryKey: CACHE_KEYS.bookDetail(bookId),
    queryFn: () => bookService.getBookDetail(bookId),
    staleTime: 1000 * 60 * 5,
  });
  return data;
};
