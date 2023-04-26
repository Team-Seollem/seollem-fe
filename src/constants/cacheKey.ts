import { BookStatus, MemoBookType } from '@projects/types/library';

export const CACHE_KEYS = {
  library: (bookStatus: BookStatus) => ['library', bookStatus],
  bookDetail: (bookId: number) => ['bookDetail', bookId],
  memoBooks: ['memobooks'],
  memoBooksPage: (page: number) => [...CACHE_KEYS.memoBooks, page],
  memoBooksDetail: (bookId: number, memoType: MemoBookType) => [
    ...CACHE_KEYS.memoBooks,
    'detail',
    bookId,
    memoType,
  ],
  randomMemo: ['randomMemo'],
  abandonBooks: ['abandonBooks'],
  readEndBooks: (year: number, month: number) => ['readEndBooks', year, month],
  myProfile: ['myProfile'],
  community: ['community'],
};
