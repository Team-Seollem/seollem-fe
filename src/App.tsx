import { Layout } from '@components/layout';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle, theme } from '@styles';
import { queryErrorHandler } from 'utils/queryErrorHandler';

const defaultQueryClientOptions = {
  queries: {
    onError: queryErrorHandler,
  },
  mutations: {
    onError: queryErrorHandler,
  },
};
const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer position="top-center" pauseOnFocusLoss theme="light" />
    </QueryClientProvider>
  );
}
export default App;
