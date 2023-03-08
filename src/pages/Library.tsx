import { useNavigate } from 'react-router-dom';
import { BookAddButton, PageTitle } from '@components/common';
import BookSlider from '@components/Library/BookSlider';
import { PAGE_URL } from '../constants/path';

export default function Library() {
  const navigate = useNavigate();
  return (
    <>
      <PageTitle title="나만의 서재" />
      <BookAddButton onClick={() => navigate(PAGE_URL.SEARCHBOOK)}>
        읽고 싶은 책을 추가해보세요
      </BookAddButton>
      <BookSlider bookStatus="ING" />
      <BookSlider bookStatus="YET" />
      <BookSlider bookStatus="DONE" />
    </>
  );
}
