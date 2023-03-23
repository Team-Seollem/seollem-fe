import { SkeletonBookCoverItem } from '@components/common';
import * as S from './styles';

export default function SkeletonBookList() {
  return (
    <S.Wrapper>
      {Array.from(new Array(4)).map((item, idx) => (
        <SkeletonBookCoverItem key={idx} />
      ))}
    </S.Wrapper>
  );
}
