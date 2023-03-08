import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  DetailBookInfoPage,
  SearchBookPage,
  PostBookPage,
  Landing,
  SignInPage,
  SignUpPage,
  Library,
  LibraryBook,
} from '@pages';
import RecommendedBooksPage from '@pages/RecommendedBooksPage';
import { PrivateRoute, PublicRoute } from '@routes';
import { PAGE_URL } from './constants';
import App from './App';

const router = createBrowserRouter([
  {
    path: PAGE_URL.ROOT,
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: PAGE_URL.NOT_FOUND, element: <div>not found</div> },
      {
        element: <PublicRoute />,
        children: [
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
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
