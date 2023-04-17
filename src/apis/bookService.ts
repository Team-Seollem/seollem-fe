import type {
  BookStatus,
  LibraryResponse,
  DetailBook,
  RegisterBook,
  BasicBook,
  EditBook,
  EditResponse,
  AbandonBookResponse,
} from '@projects/types/library';
import type { HttpClientAuthImpl } from './httpClientAuth';

interface BookService {
  getLibrary: (
    page: number,
    size: number,
    bookStatus: BookStatus
  ) => Promise<LibraryResponse>;
  getBookDetail: (bookId: number) => Promise<DetailBook>;
  registerBook: (bookData: RegisterBook) => Promise<BasicBook>;
  editBookDetail: (bookData: EditBook) => Promise<EditResponse>;
  removeBook: (bookId: number) => Promise<string>;
  getAbandonBooks: (page: number, size: number) => Promise<AbandonBookResponse>;
}

export class BookServiceImpl implements BookService {
  constructor(private httpClient: HttpClientAuthImpl) {}

  getLibrary = async (page: number, size: number, bookStatus: BookStatus) => {
    const { data } = await this.httpClient.get<LibraryResponse>(
      '/books/library',
      {
        params: {
          page,
          size,
          bookStatus,
        },
      }
    );
    return data;
  };

  getBookDetail = async (bookId: number) => {
    const { data } = await this.httpClient.get<DetailBook>(`/books/${bookId}`, {
      params: { memoAuthority: 'ALL' },
    });
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

  getAbandonBooks = async (page: number, size: number) => {
    const { data } = await this.httpClient.get<AbandonBookResponse>(
      '/books/abandon',
      {
        params: { page, size },
      }
    );
    return data;
  };
}
