// TODO
// 새로 추가되는 페이지 컴포넌트명 - url 정의하기
export const PAGE_URL = {
  ROOT: '/',
  NOT_FOUND: '*',
  SIGN_IN: '/auth/signin',
  SIGN_UP: '/auth/signup',
  MYSTAT: '/mystat',
  MYPAGE: '/mypage',
  SEARCHBOOK: '/search/book',
  POSTBOOK: '/post/book/:param',
  DETAILBOOKINFO: '/detail/book/:param',
};
export const EMAIL_REGEX =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

export const PASSWORD_REGEX =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;
