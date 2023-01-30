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
    const { data } = await this.httpClient.get<SearchBookInfo[]>(
      `/ext-lib/${keyword}`
    );
    return data;
  };

  getRecommendedBooksList = async (sort: RecommendSort) => {
    const { data } = await this.httpClient.get<SearchBookInfo[]>(
      `/ext-lib/${sort}`
    );
    return data;
  };
}
