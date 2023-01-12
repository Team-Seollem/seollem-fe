import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  DetailBookInfoPage,
  SearchBookPage,
  PostBookPage,
  Landing,
  SignInPage,
} from '@pages';
import App from './App';
import { PAGE_URL } from './constants';

const router = createBrowserRouter([
  {
    path: PAGE_URL.ROOT,
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: PAGE_URL.NOT_FOUND, element: <div>not found</div> },
      { path: PAGE_URL.SEARCHBOOK, element: <SearchBookPage /> },
      { path: PAGE_URL.POSTBOOK, element: <PostBookPage /> },
      { path: PAGE_URL.DETAILBOOKINFO, element: <DetailBookInfoPage /> },
      { path: PAGE_URL.SIGN_IN, element: <SignInPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
