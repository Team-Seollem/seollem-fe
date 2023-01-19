import { PageTitle } from '@components/common';
import {
  RecommendedResult,
  RecommendedSort,
} from '@components/RecommendedBooks';
import { useState } from 'react';

function RecommendedBooksPage() {
  const [sort, setSort] = useState('best-seller');

  const onChangeList = (value: string) => {
    setSort(value);
  };

  return (
    <>
      <PageTitle title="추천" />
      <RecommendedSort onChangeList={onChangeList} />
      <RecommendedResult sort={sort} />
    </>
  );
}

export default RecommendedBooksPage;
