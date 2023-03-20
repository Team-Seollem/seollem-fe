import type {
  MemoBasic,
  MemoBookDetail,
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
  getRandomMemo: () => Promise<MemoBasic>;
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

  getRandomMemo = async () => {
    const { data } = await this.httpClient.get<MemoBasic[]>('/memos/random');
    return data[0];
  };

  imageUpload = async (formData: FormData) => {
    const { data } = await this.httpClient.post<string, FormData>(
      '/memos/image-memo',
      formData
    );
    return data;
  };
}
