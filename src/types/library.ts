import {
  BOOKSTATUS,
  MEMO_TYPES,
  MEMO_BOOK_TYPES,
  MEMO_AUTHORITY,
} from '@constants';

type PageableApiResponse<T> = {
  item: T[];
  pageInfo: PageInfo;
};

export type BookStatus =
  typeof BOOKSTATUS[keyof typeof BOOKSTATUS]['typeValue'];

export type BasicBook = {
  bookId: number;
  title: string;
  cover: string;
  author: string;
  publisher: string;
  bookStatus: BookStatus;
};

export type LibraryBook = BasicBook & {
  createdAt: string;
  star: number;
  currentPage: number;
  itemPage: number;
  memoCount: number;
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

export type MemoBasic = {
  memoId: number;
  memoType: MemoType;
  memoContent: string;
  memoBookPage: number;
  createdAt: string;
  updatedAt: string;
};

export type MemoBookDetail = MemoBasic & {
  memoAuthority: MemoAuthority;
  memoLikesCount: number;
};

export type MemoBookDetailResponse = PageableApiResponse<MemoBookDetail>;

export type MemoAuthority =
  typeof MEMO_AUTHORITY[keyof typeof MEMO_AUTHORITY]['typeValue'];

export type MemoType = typeof MEMO_TYPES[keyof typeof MEMO_TYPES]['typeValue'];
export type MemoText = typeof MEMO_TYPES[keyof typeof MEMO_TYPES]['typeText'];
export type MemoBookType =
  typeof MEMO_BOOK_TYPES[keyof typeof MEMO_BOOK_TYPES]['typeValue'];

export type MemoRequest = Pick<
  MemoBookDetail,
  'memoType' | 'memoBookPage' | 'memoContent' | 'memoAuthority'
>;

export type DetailBook = LibraryBook & {
  readStartDate: string | null;
  readEndDate: string | null;
  memosList: MemoBookDetail[];
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
  bookId?: string;
};

export type EditResponse = Omit<EditBook, 'bookId'>;

export type AbandonBook = {
  bookId: number;
  createdAt: string;
  title: string;
  cover: string;
};

export type AbandonBookResponse = PageableApiResponse<AbandonBook>;

export type ReadEndBook = {
  bookId: number;
  readEndDate: string;
  cover: string;
};

export type ReadEndBookDateMap = Record<number, ReadEndBook[]>;
