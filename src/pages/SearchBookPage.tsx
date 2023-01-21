import SearchResult from '@components/SearchBook/SearchResult';
import SearchKeyword from '@components/SearchBook/SearchKeyword';
import { useState } from 'react';
import useDebounce from '@hooks/useDebounce';

function SearchBookPage() {
  const [keyword, setKeyword] = useState('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setKeyword(value);
  };

  const searchQuery = useDebounce(keyword, 200);

  return (
    <>
      <SearchKeyword onChangeInput={onChangeInput} keyword={keyword} />
      <SearchResult searchQuery={searchQuery} />
    </>
  );
}

export default SearchBookPage;
