import Badge from '@components/common/Badge';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

type Props = {
  likesCount: number;
};
export default function MemoLikes({ likesCount }: Props) {
  return (
    <Badge>
      {likesCount ? <FcLike /> : <FcLikePlaceholder />} {likesCount}
    </Badge>
  );
}
