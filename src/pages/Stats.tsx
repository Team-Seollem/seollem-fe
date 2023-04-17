import { PageTitle } from '@components/common';
import AbandonBooks from '@components/Stats/AbandonBooks';

import RandomMemo from '@components/Stats/RandomMemo';

export default function Stats() {
  return (
    <>
      <PageTitle title="나의 독서 통계 보기" />
      <RandomMemo />
      <AbandonBooks />
    </>
  );
}
