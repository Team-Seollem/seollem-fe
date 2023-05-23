import { PageTitle } from '@components/common';
import Members from '@components/Community/Members';

export default function Community() {
  return (
    <>
      <PageTitle title="명예의 전당" />
      <Members type="mostReadMember" />
      <Members type="mostMemoedMember" />
    </>
  );
}
