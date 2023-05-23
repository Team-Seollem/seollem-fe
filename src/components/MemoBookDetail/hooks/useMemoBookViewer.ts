import { MemoBookType } from '@projects/types/library';
import { BgType } from 'constants/memoBackground';
import { useState } from 'react';

export default function useMemoBookViewer() {
  const [memoBookType, setMemoBookType] = useState<MemoBookType>('ALL');
  const [memoBookBg, setMemoBookBg] = useState<BgType>('WHITE');

  const handleTypeChange = (newType: MemoBookType) => {
    setMemoBookType(newType);
  };

  const handleValueChange = (newBg: BgType) => {
    setMemoBookBg(newBg);
  };
  return {
    memoBookType,
    handleTypeChange,
    memoBookBg,
    handleValueChange,
  };
}
