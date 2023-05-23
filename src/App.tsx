import { ThemeProvider } from 'styled-components';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle, theme } from '@styles';
import { queryErrorHandler } from 'utils/queryErrorHandler';
import { RouterProvider } from 'react-router-dom';
import Router from 'Router';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: queryErrorHandler,
  }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyle />
          <RouterProvider router={Router} />
        </RecoilRoot>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer position="top-center" pauseOnFocusLoss theme="light" />
    </QueryClientProvider>
  );
}
export default App;
