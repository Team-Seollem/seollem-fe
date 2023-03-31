import { createBrowserRouter } from 'react-router-dom';
import {
  DetailBookInfoPage,
  SearchBookPage,
  PostBookPage,
  Landing,
  SignInPage,
  SignUpPage,
  Library,
  LibraryBook,
  RecommendedBooksPage,
  MemoForm,
  Stats,
} from '@pages';
import { PrivateRoute, PublicRoute } from '@components/layout';
import MemoBooks from '@pages/MemoBooks';
import MemoBookDetail from '@pages/MemoBookDetail';
import { PAGE_URL } from './constants';

const Router = createBrowserRouter([
  {
    path: PAGE_URL.ROOT,
    element: (
      <PublicRoute>
        <Landing />
      </PublicRoute>
    ),
  },
  {
    path: PAGE_URL.NOT_FOUND,
    element: (
      <PublicRoute>
        <div>Page Not Found</div>
      </PublicRoute>
    ),
  },
  {
    path: PAGE_URL.SIGN_IN,
    element: (
      <PublicRoute>
        <SignInPage />
      </PublicRoute>
    ),
  },
  {
    path: PAGE_URL.SIGN_UP,
    element: (
      <PublicRoute>
        <SignUpPage />
      </PublicRoute>
    ),
  },
  {
    path: PAGE_URL.SEARCHBOOK,
    element: (
      <PrivateRoute>
        <SearchBookPage />
      </PrivateRoute>
    ),
  },
  {
    path: PAGE_URL.POSTBOOK,
    element: (
      <PrivateRoute>
        <PostBookPage />
      </PrivateRoute>
    ),
  },
  {
    path: PAGE_URL.DETAILBOOKINFO,
    element: (
      <PrivateRoute>
        <DetailBookInfoPage />
      </PrivateRoute>
    ),
  },
  {
    path: PAGE_URL.RECOMMENDEDBOOKS,
    element: (
      <PrivateRoute>
        <RecommendedBooksPage />
      </PrivateRoute>
    ),
  },
  {
    path: PAGE_URL.LIBRARY,
    element: (
      <PrivateRoute>
        <Library />
      </PrivateRoute>
    ),
  },
  {
    path: PAGE_URL.LIBRARYBOOK,
    element: (
      <PrivateRoute>
        <LibraryBook />
      </PrivateRoute>
    ),
  },
  {
    path: PAGE_URL.MEMO_FORM,
    element: (
      <PrivateRoute>
        <MemoForm />
      </PrivateRoute>
    ),
  },
  {
    path: PAGE_URL.EDIT_MEMO,
    element: (
      <PrivateRoute>
        <MemoForm />
      </PrivateRoute>
    ),
  },
  {
    path: PAGE_URL.MEMO_BOOKS,
    element: (
      <PrivateRoute>
        <MemoBooks />
      </PrivateRoute>
    ),
  },
  {
    path: PAGE_URL.MEMO_BOOK_DETAIL,
    element: (
      <PrivateRoute>
        <MemoBookDetail />
      </PrivateRoute>
    ),
  },
  {
    path: PAGE_URL.MYSTAT,
    element: (
      <PrivateRoute>
        <Stats />
      </PrivateRoute>
    ),
  },
]);
export default Router;
