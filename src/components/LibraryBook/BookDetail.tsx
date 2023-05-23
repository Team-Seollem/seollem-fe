import { bookService } from '@apis';
import {
  BookCoverItem,
  BookDetailInfoItem,
  Boxcontainer,
  Button,
} from '@components/common';
import StarRating from '@components/PostBook/StarRating';
import { bookStatusList, CACHE_KEYS } from '@constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useBookDetail from './hooks/useBookDetail';

export default function BookDetail() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const {
    title,
    cover,
    author,
    bookStatus,
    publisher,
    itemPage,
    currentPage,
    readStartDate,
    readEndDate,
    star,
  } = useBookDetail({
    bookId: Number(bookId),
  });
  const bookStatusOption = bookStatusList.find(
    (option) => option.typeValue === bookStatus
  );
  const handleEditBook = () => {
    navigate(`/book/library/${bookId}/update`);
  };

  const { mutate } = useMutation(bookService.removeBook);

  const queryClient = useQueryClient();

  const handleDelete = () => {
    mutate(Number(bookId), {
      onSuccess() {
        queryClient.invalidateQueries(CACHE_KEYS.library(bookStatus));
        toast.success('책 삭제에 성공했어요.');
        navigate(`/book/library`);
      },
    });
  };

  return (
    <Boxcontainer>
      <BookCoverItem src={cover} />
      <BookDetailInfoItem>
        <form>
          <label htmlFor="title">제목</label>
          <input id="title" type="text" value={title} readOnly />
          <label htmlFor="author">저자</label>
          <input id="author" type="text" value={author} readOnly />
          <label htmlFor="publisher">출판사</label>
          <input id="publisher" type="text" value={publisher} readOnly />
          <label htmlFor="itemPage">전체 페이지</label>
          <input id="itemPage" type="number" value={itemPage || ''} readOnly />
          <label htmlFor="currentPage">현재 페이지</label>
          <input
            id="currentPage"
            type="number"
            value={currentPage || '0'}
            readOnly
          />
          <label htmlFor="star">별점</label>
          <StarRating star={star} id="star" />
          <label htmlFor="bookStatus">읽기 상태</label>
          <input
            id="bookStatus"
            type="text"
            value={bookStatusOption?.typeText}
            readOnly
          />
          {bookStatus === 'ING' && (
            <>
              <label htmlFor="readStartDate">읽기 시작한 날 </label>
              <input
                id="readStartDate"
                type="datetime-local"
                value={readStartDate || ''}
                readOnly
              />
            </>
          )}
          {bookStatus === 'DONE' && (
            <>
              <label htmlFor="readStartDate">읽기 시작한 날</label>
              <input
                id="readStartDate"
                type="datetime-local"
                value={readStartDate || ''}
                readOnly
              />
              <label htmlFor="readEndDate">다 읽은 날</label>
              <input
                id="readEndDate"
                type="datetime-local"
                value={readEndDate || ''}
                readOnly
              />
            </>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              size="small"
              styleType="solidPositive"
              type="button"
              onClick={handleEditBook}
            >
              수정하기
            </Button>
            <Button
              size="small"
              styleType="solidNegative"
              type="button"
              onClick={handleDelete}
            >
              삭제하기
            </Button>
          </div>
        </form>
      </BookDetailInfoItem>
    </Boxcontainer>
  );
}
