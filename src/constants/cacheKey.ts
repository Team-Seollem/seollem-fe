import { BookStatus } from '@projects/types/library';

export const CACHE_KEYS = {
  library: (bookStatus: BookStatus) => ['library', bookStatus],
};
