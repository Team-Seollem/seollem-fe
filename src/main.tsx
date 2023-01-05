import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  DetailBookInfoPage,
  SearchBookPage,
  PostBookPage,
  Landing,
} from '@pages/index';
import App from './App';
import { PAGEURL } from './constants';

const router = createBrowserRouter([
  {
    path: PAGEURL.ROOT,
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: PAGEURL.NOTFOUND, element: <div>not found</div> },
      { path: PAGEURL.SEARCHBOOK, element: <SearchBookPage /> },
      { path: PAGEURL.POSTBOOK, element: <PostBookPage /> },
      { path: PAGEURL.DETAILBOOKINFO, element: <DetailBookInfoPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
