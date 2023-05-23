import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const queryErrorHandler = (error: unknown) => {
  let message = 'Error connecting to server';
  if (error instanceof AxiosError && error.response) {
    message =
      error.response.data.message ||
      error.response.data ||
      '잠시 후 다시 시도해보세요';
  }
  toast.error(message);
};
