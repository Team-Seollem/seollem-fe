export const PAGE_URL = {
  ROOT: '/',
  NOT_FOUND: '*',
  SIGN_IN: '/auth/signin',
  SIGN_UP: '/auth/signup',
  MYSTAT: '/mystat',
  MYPAGE: '/profile',
  SEARCHBOOK: '/book/search',
  DIRECTPOSTBOOK: '/book/register/direct',
  POSTBOOK: '/book/register/:id',
  DETAILBOOKINFO: '/book/detail/:id',
  RECOMMENDEDBOOKS: '/book/recommended',
  LIBRARY: '/book/library',
  LIBRARYBOOK: '/book/library/:bookId',
  UPDATEPOSTBOOK: '/book/library/:bookId/update',
  MEMO_FORM: '/book/library/:bookId/memo',
  EDIT_MEMO: '/book/library/:bookId/memo/:memoId',
  MEMO_BOOKS: '/memobook',
  MEMO_BOOK_DETAIL: '/memobook/:bookId',
  COMMUNITY: '/community',
  MEMBER_PROFILE: '/community/member/:memberId',
} as const;
