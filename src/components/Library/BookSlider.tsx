import type { BookStatus } from '@projects/types/library';
import { useBookSlider } from './hook/useBookSlider';

type Props = {
  bookStatus: BookStatus;
};

export default function BookSlider({ bookStatus }: Props) {
  const { data, isLoading, isError } = useBookSlider({ bookStatus });

  if (isLoading) return <p>isLoading..</p>;
  if (isError) return <p>error..</p>;
  return (
    <>
      <h1>{bookStatus}</h1>
      {data.pages.map((page) =>
        page.item.map((book) => <p key={book.bookId}>{book.title}</p>)
      )}
    </>
  );
}
