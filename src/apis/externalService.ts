import type { SearchBookInfo, RecommendSort } from '@projects/types/basic';
import type { HttpClientImpl } from './httpClient';

interface ExternalService {
  searchBooks: (keyword: string) => Promise<SearchBookInfo[]>;
  getRecommendedBooksList: (sort: RecommendSort) => Promise<SearchBookInfo[]>;
}

export class ExternalServiceImpl implements ExternalService {
  constructor(private httpClient: HttpClientImpl) {
    this.httpClient = httpClient;
  }

  searchBooks = async (keyword: string) => {
    const { data } = await this.httpClient.get<{ response: string }>(
      `/ext-lib/${keyword}`
    );
    const bookList: SearchBookInfo[] = JSON.parse(data.response);
    return bookList;
  };

  getRecommendedBooksList = async (sort: RecommendSort) => {
    const { data } = await this.httpClient.get<{ response: string }>(
      `/ext-lib/${sort}`
    );
    const bookList: SearchBookInfo[] = JSON.parse(data.response);
    return bookList;
  };
}
