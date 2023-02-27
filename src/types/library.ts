export type BookStatus = 'YET' | 'ING' | 'DONE';

export interface BasicBook {
  bookId: number;
  title: string;
  cover: string;
  author: string;
  bookStatus: BookStatus;
}

export interface LibraryBook extends BasicBook {
  createdAt: string;
  star: number;
  currentPage: number;
  itemPage: number;
}

interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface LibraryResponse {
  item: LibraryBook[];
  pageInfo: PageInfo;
}

type MemoType = 'BOOK_CONTENT' | 'SUMMARY' | 'THOUGHT' | 'QUESTION';

interface Memo {
  memoId: number;
  memoType: MemoType;
  memoContent: string;
  memoBookPage: number;
}

export interface DetailBook extends LibraryBook {
  createdAt: string;
  readStartDate: string | null;
  readEndDate: string | null;
  memoList: Memo[];
  memoCount: number;
}

export interface RegisterBook {
  title: string;
  author: string;
  cover: string;
  publisher: string;
  itemPage: number;
  currentPage: number;
  bookStatus: string;
  readStartDate: string | null;
  readEndDate: string | null;
}

export interface EditBook {
  author: string;
  itemPage: number;
  currentPage: number;
  publisher: string;
  bookStatus: BookStatus;
  readStartDate: string | null;
  readEndDate: string | null;
  star: number;
  bookId: string;
}

export type EditResponse = Omit<EditBook, 'bookId'>;
