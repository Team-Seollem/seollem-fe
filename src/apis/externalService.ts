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
    return JSON.parse(data.response) as SearchBookInfo[];
  };

  getRecommendedBooksList = async (sort: RecommendSort) => {
    const { data } = await this.httpClient.get<{ response: string }>(
      `/ext-lib/${sort}`
    );
    return JSON.parse(data.response) as SearchBookInfo[];
  };
}
