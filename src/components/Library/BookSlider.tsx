import { bookService } from '@apis/index';
import { BookStatus } from '@projects/types/library';
import { useInfiniteQuery } from '@tanstack/react-query';
import { CACHE_KEYS } from 'constants/cacheKey';

type Props = {
  bookStatus: BookStatus;
};

export default function BookSlider({ bookStatus }: Props) {
  const { data, isLoading, isError } = useInfiniteQuery(
    CACHE_KEYS.library(bookStatus),
    ({ pageParam = 1 }) => bookService.getLibrary(pageParam, bookStatus),

    {
      getNextPageParam: (lastpage) => {
        const { pageInfo } = lastpage;
        const nextPage = pageInfo.page + 1;

        return nextPage <= pageInfo.totalPages ? nextPage : undefined;
      },
    }
  );

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
