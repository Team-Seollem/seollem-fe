import { MemoTypeSelect } from '@components/MemoForm';
import { useParams } from 'react-router-dom';
import { memoBookTypeList } from '@constants';
import useMemobookDetail from './hooks/useMemobookDetail';
import MemoBgSelect from './MemoBgSelect';
import useMemoBookViewer from './hooks/useMemoBookViewer';

export default function MemoBookViewer() {
  const { bookId } = useParams();
  const { memoBookType, handleTypeChange, memoBookBg, handleValueChange } =
    useMemoBookViewer();
  const { memoBooks, isLoading, hasNextPage, fetchNextPage } =
    useMemobookDetail({ bookId: Number(bookId), memoType: memoBookType });

  return (
    <>
      <MemoTypeSelect
        typeList={memoBookTypeList}
        type={memoBookType}
        onChange={handleTypeChange}
      />
      <MemoBgSelect value={memoBookBg} onChange={handleValueChange} />
    </>
  );
}

/**
 * memoTypeselect
 * 배경 선택 컴포넌트
 * viewer
 */
