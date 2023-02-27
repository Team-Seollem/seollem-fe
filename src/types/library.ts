type PageableApiResponse<T> = {
  item: T[];
  pageInfo: PageInfo;
};

export type BookStatus = 'YET' | 'ING' | 'DONE';

export type BasicBook = {
  bookId: number;
  title: string;
  cover: string;
  author: string;
  bookStatus: BookStatus;
};

export type LibraryBook = BasicBook & {
  createdAt: string;
  star: number;
  currentPage: number;
  itemPage: number;
};

type PageInfo = {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

export type LibraryResponse = PageableApiResponse<LibraryBook>;

type MemoBook = {
  bookId: number;
  title: string;
  cover: string;
  memoCount: number;
};

export type MemoBooksResponse = PageableApiResponse<MemoBook>;

type MemoBookDetail = {
  memoId: number;
  memoType: MemoType;
  memoContent: string;
  memoBookPage: number;
  memoAuthority: MemoAuthority;
  memoLikesCount: number;
  createdAt: string;
  updatedAt: string;
};

export type MemoBookDetailResponse = PageableApiResponse<MemoBookDetail>;

type MemoAuthority = 'PUBLIC' | 'PRIVATE';
export type MemoType = 'BOOK_CONTENT' | 'SUMMARY' | 'THOUGHT' | 'QUESTION';

type Memo = {
  memoId: number;
  memoType: MemoType;
  memoContent: string;
  memoBookPage: number;
};

export type DetailBook = LibraryBook & {
  createdAt: string;
  readStartDate: string | null;
  readEndDate: string | null;
  memoList: Memo[];
  memoCount: number;
};

export type RegisterBook = {
  title: string;
  author: string;
  cover: string;
  publisher: string;
  itemPage: number;
  currentPage: number;
  bookStatus: string;
  readStartDate: string | null;
  readEndDate: string | null;
};

export type EditBook = {
  author: string;
  itemPage: number;
  currentPage: number;
  publisher: string;
  bookStatus: BookStatus;
  readStartDate: string | null;
  readEndDate: string | null;
  star: number;
  bookId: string;
};

export type EditResponse = Omit<EditBook, 'bookId'>;
