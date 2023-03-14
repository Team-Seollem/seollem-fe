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
} from '@pages';
import { PrivateRoute, PublicRoute } from '@components/layout';
import { PAGE_URL } from './constants';

const Router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      { path: PAGE_URL.ROOT, element: <Landing /> },
      { path: PAGE_URL.NOT_FOUND, element: <div>not found</div> },
      { path: PAGE_URL.SIGN_IN, element: <SignInPage /> },
      { path: PAGE_URL.SIGN_UP, element: <SignUpPage /> },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      { path: PAGE_URL.SEARCHBOOK, element: <SearchBookPage /> },
      { path: PAGE_URL.POSTBOOK, element: <PostBookPage /> },
      { path: PAGE_URL.DETAILBOOKINFO, element: <DetailBookInfoPage /> },
      {
        path: PAGE_URL.RECOMMENDEDBOOKS,
        element: <RecommendedBooksPage />,
      },
      { path: PAGE_URL.LIBRARY, element: <Library /> },
      { path: PAGE_URL.LIBRARYBOOK, element: <LibraryBook /> },
      { path: PAGE_URL.MEMO_FORM, element: <MemoForm /> },
      { path: PAGE_URL.EDIT_MEMO, element: <MemoForm /> },
    ],
  },
]);

export default Router;
