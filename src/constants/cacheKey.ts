import { BookStatus } from '@projects/types/library';

export const CACHE_KEYS = {
  library: (bookStatus: BookStatus) => ['library', bookStatus],
  bookDetail: (bookId: number) => ['bookDetail', bookId],
  memoBooks: (page: number) => ['memobooks', page],
  memoBooksDetail: (bookId: number, page: number) => [
    'memobooks',
    'detail',
    bookId,
    page,
  ],
};
