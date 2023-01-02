import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { PAGEURL } from './constants';

const router = createBrowserRouter([
  {
    path: PAGEURL.ROOT,
    element: <App />,
    children: [
      { index: true, element: <div>main page</div> },
      { path: PAGEURL.NOTFOUND, element: <div>not found</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
