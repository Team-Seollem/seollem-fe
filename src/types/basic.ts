export interface Book {
  itemId: number;
  title: string;
  author: string;
  cover: string;
  publisher: string;
}

export interface SearchBookInfo extends Book {
  data: SearchBookInfo[];
  itemPage: number;
}
export interface SearchProps {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
}
