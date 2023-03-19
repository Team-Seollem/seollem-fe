import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Boxcontainer, PageTitle } from '@components/common';
import { MemoAuthority, MemoType } from '@projects/types/library';
import MemoTypeSelect from '@components/MemoForm/MemoTypeSelect';
import MemoAuthoritySelect from '@components/MemoForm/MemoAuthoritySelect';
import MemoPageInput from '@components/MemoForm/MemoPageInput';

export default function MemoForm() {
  const [authority, setAuthority] = useState<MemoAuthority>('PRIVATE');
  const [page, setPage] = useState<number>(0);
  const [type, setType] = useState<MemoType>('BOOK_CONTENT');
  const [content, setContent] = useState('');
  const handleAuthorityChange = (newAuthority: MemoAuthority) => {
    setAuthority(newAuthority);
  };

  const handlePageChanage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(400, Number(e.target.value)));
    setPage(value);
  };
  const handleTypeChange = (newType: MemoType) => {
    setType(newType);
  };

  return (
    <>
      <PageTitle title="메모 등록 페이지" />
      <Boxcontainer>
        <MemoAuthoritySelect
          authority={authority}
          onChange={handleAuthorityChange}
        />
        <MemoPageInput page={page} onChange={handlePageChanage} />
        <MemoTypeSelect type={type} onChange={handleTypeChange} />
        <ReactQuill theme="snow" value={content} onChange={setContent} />
      </Boxcontainer>
    </>
  );
}
