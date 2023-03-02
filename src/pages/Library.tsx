import { PageTitle } from '@components/common';
import BookSlider from '@components/Library/BookSlider';

export default function Library() {
  return (
    <>
      <PageTitle title="나만의 서재" />
      <BookSlider bookStatus="ING" />
      <BookSlider bookStatus="YET" />
      <BookSlider bookStatus="DONE" />
    </>
  );
}
