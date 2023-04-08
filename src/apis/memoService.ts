import type {
  MemoBasic,
  MemoBookDetail,
  MemoBookDetailResponse,
  MemoBooksResponse,
  MemoBookType,
  MemoRequest,
} from '@projects/types/library';
import type { HttpClientAuthImpl } from './httpClientAuth';

interface MemoService {
  createMemo: (
    bookId: number,
    memoData: MemoRequest
  ) => Promise<MemoBookDetail>;
  editMemo: (memoId: number, memoData: MemoRequest) => Promise<MemoBookDetail>;
  removeMemo: (memoId: number) => Promise<string>;
  getMemoBooks: (page: number, size: number) => Promise<MemoBooksResponse>;
  getMemoBooksByBookId: (
    bookId: number,
    page: number,
    size: number,
    memoType: MemoBookType
  ) => Promise<MemoBookDetailResponse>;
  getRandomMemo: () => Promise<MemoBasic>;
  imageUpload: (formData: FormData) => Promise<string>;
}

export class MemoServiceImpl implements MemoService {
  constructor(private httpClient: HttpClientAuthImpl) {}

  createMemo = async (bookId: number, memoData: MemoRequest) => {
    const { data } = await this.httpClient.post<MemoBookDetail, MemoRequest>(
      `/memos/${bookId}`,
      memoData
    );
    return data;
  };

  editMemo = async (memoId: number, memoData: MemoRequest) => {
    const { data } = await this.httpClient.patch<MemoBookDetail, MemoRequest>(
      `/memos/${memoId}`,
      memoData
    );
    return data;
  };

  removeMemo = async (memoId: number) => {
    await this.httpClient.delete<number>(`/memos/${memoId}`);
    return '등록한 메모가 삭제되었습니다.';
  };

  getMemoBooks = async (page: number, size: number) => {
    const { data } = await this.httpClient.get<MemoBooksResponse>(
      '/books/memo-books',
      {
        params: {
          page,
          size,
        },
      }
    );
    return data;
  };

  getMemoBooksByBookId = async (
    bookId: number,
    page: number,
    size: number,
    memoType: MemoBookType
  ) => {
    const { data } = await this.httpClient.get<MemoBookDetailResponse>(
      `/books/${bookId}/memos`,
      {
        params: {
          page,
          size,
          memoType,
        },
      }
    );
    return data;
  };

  getRandomMemo = async () => {
    const { data } = await this.httpClient.get<MemoBasic>('/memos/random');
    return data;
  };

  imageUpload = async (formData: FormData) => {
    const { data } = await this.httpClient.post<string, FormData>(
      '/memos/image-memo',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return data;
  };
}
