import SearchResult from '@components/SearchBook/SearchResult';
import SearchKeyword from '@components/SearchBook/SearchKeyword';
import { useState } from 'react';
import useDebounce from '@hooks/useDebounce';
import { PageTitle } from '@components/common';

function SearchBookPage() {
  const [keyword, setKeyword] = useState('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const searchQuery = useDebounce(keyword.trim(), 200);

  return (
    <>
      <PageTitle title="검색" />
      <SearchKeyword onChangeInput={onChangeInput} keyword={keyword} />
      <SearchResult searchQuery={searchQuery} />
    </>
  );
}

export default SearchBookPage;
