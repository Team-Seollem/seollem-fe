import {
  BookStatus,
  LibraryResponse,
  DetailBook,
  RegisterBook,
  BasicBook,
  EditBook,
  EditResponse,
} from '@projects/types/library';
import type { HttpClientAuthImpl } from './httpClientAuth';

interface BookService {
  getLibrary: (
    page: number,
    bookStatus: BookStatus
  ) => Promise<LibraryResponse>;
  getBookDetail: (bookId: number) => Promise<DetailBook>;
  registerBook: (bookData: RegisterBook) => Promise<BasicBook>;
  editBookDetail: (bookData: EditBook) => Promise<EditResponse>;
  removeBook: (bookId: number) => Promise<string>;
}

export class BookServiceImpl implements BookService {
  constructor(private httpClient: HttpClientAuthImpl) {}

  getLibrary = async (page: number, bookStatus: BookStatus) => {
    const { data } = await this.httpClient.get<LibraryResponse>(
      '/books/library',
      {
        params: {
          page,
          size: 10,
          bookStatus,
        },
      }
    );
    return data;
  };

  getBookDetail = async (bookId: number) => {
    const { data } = await this.httpClient.get<DetailBook>(`/books/${bookId}`);
    return data;
  };

  registerBook = async (bookData: RegisterBook) => {
    const { data } = await this.httpClient.post<BasicBook, RegisterBook>(
      '/books',
      bookData
    );
    return data;
  };

  editBookDetail = async (bookData: EditBook) => {
    const { data } = await this.httpClient.patch<EditResponse, EditBook>(
      `/book/${bookData.bookId}`,
      bookData
    );
    return data;
  };

  removeBook = async (bookId: number) => {
    await this.httpClient.delete<number>(`/books/${bookId}`);
    return '등록하신 책이 삭제되었습니다';
  };
}
