import { PageTitle } from '@components/common';
import {
  RecommendedResult,
  RecommendedSort,
} from '@components/RecommendedBooks';
import { RecommendSort } from '@projects/types/basic';
import { useState } from 'react';

function RecommendedBooksPage() {
  const [sort, setSort] = useState<RecommendSort>('best-seller');

  const onChangeList = (value: RecommendSort) => {
    setSort(value);
  };

  return (
    <>
      <PageTitle title="추천책" />
      <RecommendedSort selectedSort={sort} onChangeList={onChangeList} />
      <RecommendedResult sort={sort} />
    </>
  );
}

export default RecommendedBooksPage;
