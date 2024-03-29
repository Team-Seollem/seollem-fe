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
  memoLikeDone: boolean;
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

export type MemoEditRequest = Partial<MemoRequest>;

export type DetailBook = LibraryBook & {
  readStartDate: string | null;
  readEndDate: string | null;
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

export type MemberLibraryBook = Pick<
  BasicBook,
  'bookId' | 'author' | 'title' | 'cover'
>;

export type MemberProfileResponse = {
  name: string;
  url: string;
  content: string;
  otherLibrary: MemberLibraryBook[];
  pageInfo: PageInfo;
};

export type MemberMemo = Omit<
  MemoBookDetail,
  'createdAt' | 'updatedAt' | 'memoAuthority'
> & { memoLikeDone: boolean };

export type MemberMemoResponse = Omit<
  RegisterBook,
  'readStartDate' | 'readEndDate'
> & {
  star: number;
  bookStatus: BookStatus;
  memoList: MemberMemo[];
  pageInfo: PageInfo;
};

export type Member = {
  memberId: number;
  url: string;
  name: string;
  count: number;
};

export type MemberResponse = {
  mostReadMember: Member[];
  mostMemoedMember: Member[];
};
