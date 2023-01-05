export interface Book {
  itemId: number;
  title: string;
  author: string;
  cover: string;
  publisher: string;
}

export interface SearchBookInfo {
  itemPage: number;
  title: string;
  author: string;
  cover: string;
  publisher: string;
}
export interface BookInfoProps {
  bookInfoData: SearchBookInfo;
}
export interface SearchProps {
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
}
