import Result from '@components/SearchBook/result';
import Search from '@components/SearchBook/Search';
import { useState } from 'react';

function SearchBookPage() {
  const [keyword, setKeyword] = useState('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);
  return (
    <>
      <Search onChangeInput={onChangeInput} keyword={keyword} />
      <Result keyword={keyword} />
    </>
  );
}

export default SearchBookPage;
