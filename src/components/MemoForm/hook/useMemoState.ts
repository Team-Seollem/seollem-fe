import { useState } from 'react';
import type {
  MemoAuthority,
  MemoRequest,
  MemoType,
} from '@projects/types/library';

export default function useMemoState(initialState: MemoRequest) {
  const [memo, setMemo] = useState<MemoRequest>(initialState);

  const handleAuthorityChange = (newAuthority: MemoAuthority) => {
    setMemo((prev) => ({ ...prev, memoAuthority: newAuthority }));
  };

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(400, Number(e.target.value)));
    setMemo((prev) => ({ ...prev, memoBookPage: value }));
  };

  const handleTypeChange = (newType: MemoType) => {
    setMemo((prev) => ({ ...prev, memoType: newType }));
  };

  const handleContentChange = (content: string) => {
    setMemo((prev) => ({ ...prev, memoContent: content }));
  };

  return {
    memo,
    handleAuthorityChange,
    handlePageChange,
    handleTypeChange,
    handleContentChange,
  };
}
