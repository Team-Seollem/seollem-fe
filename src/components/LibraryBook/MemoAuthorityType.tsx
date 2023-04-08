import Badge from '@components/common/Badge';
import { MEMO_AUTHORITY } from '@constants';
import type { MemoAuthority } from '@projects/types/library';

type Props = {
  authority: MemoAuthority;
};

export default function MemoAuthorityType({ authority }: Props) {
  return <Badge>{MEMO_AUTHORITY[authority].typeText}</Badge>;
}
