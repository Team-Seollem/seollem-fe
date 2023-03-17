import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Boxcontainer, PageTitle } from '@components/common';
import { MemoAuthority, MemoType } from '@projects/types/library';
import MemoTypeSelect from '@components/MemoForm/MemoTypeSelect';
import MemoAuthoritySelect from '@components/MemoForm/MemoAuthoritySelect';

export default function MemoForm() {
  const [value, setValue] = useState('sdfsgsdf');
  const [type, setType] = useState<MemoType>('BOOK_CONTENT');
  const handleTypeChange = (newType: MemoType) => {
    setType(newType);
  };
  const [authority, setAuthority] = useState<MemoAuthority>('PRIVATE');

  const handleAuthorityChange = (newAuthority: MemoAuthority) => {
    setAuthority(newAuthority);
  };

  return (
    <>
      <PageTitle title="메모 등록 페이지" />
      <Boxcontainer>
        <MemoAuthoritySelect
          authority={authority}
          onChange={handleAuthorityChange}
        />
        <MemoTypeSelect type={type} onChange={handleTypeChange} />
        {/* <ReactQuill theme="snow" value={value} onChange={setValue} />; */}
        <ReactQuill value={value} readOnly />
      </Boxcontainer>
    </>
  );
}

/**
 * page
 * text contents
 */
