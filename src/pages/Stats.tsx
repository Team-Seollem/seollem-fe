import { PageTitle } from '@components/common';
import RandomMemo from '@components/Stats/RandomMemo';
import AbandonBooks from '@components/Stats/AbandonBooks';
import Calandar from '@components/Stats/Calandar';

export default function Stats() {
  return (
    <>
      <PageTitle title="나의 독서 통계 보기" />
      <RandomMemo />
      <AbandonBooks />
      <Calandar />
    </>
  );
}
