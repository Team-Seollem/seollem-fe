import { bookService } from '@apis';
import {
  BookCoverItem,
  BookDetailInfoItem,
  Boxcontainer,
  Button,
  PageTitle,
} from '@components/common';
import useBookDetail from '@components/LibraryBook/hooks/useBookDetail';
import { bookStatusList, CACHE_KEYS } from '@constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import StarRating from './StarRating';

export default function UpdatePostBook() {
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
  const [updateCurrentPage, setUpdateCurrentPage] = useState(currentPage);
  const [updateBookStatus, setUpdateBookStatus] = useState(bookStatus);
  const [updateReadStartDate, setUpdateStartDate] = useState(readStartDate);
  const [updateReadEndDate, setUpdateEndDate] = useState(readEndDate);
  const [updateStar, setUpdateStar] = useState(star);

  const handleUpdateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const bookStatusOption = bookStatusList.find(
      (option) => option.typeValue === value
    );
    if (bookStatusOption) {
      setUpdateBookStatus(bookStatusOption.typeValue);
      setUpdateStartDate(readStartDate || null);
      setUpdateEndDate(readEndDate || null);
    }
  };

  const handleUpdateCurrentPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setUpdateCurrentPage(value);
  };

  const handleUpdateCancle = () => {
    setUpdateCurrentPage(currentPage);
    setUpdateBookStatus(bookStatus);
    setUpdateStartDate(readStartDate);
    setUpdateEndDate(readEndDate);
    setUpdateStar(star);
  };

  const updatePostBookInfoData = {
    author,
    bookStatus: updateBookStatus,
    publisher,
    itemPage,
    currentPage: updateCurrentPage,
    readStartDate: updateReadStartDate,
    readEndDate: updateReadEndDate,
    star: updateStar,
    bookId,
  };
  const { mutate } = useMutation(bookService.editBookDetail);
  const queryClient = useQueryClient();
  const handleUpdateSubmit = () => {
    mutate(updatePostBookInfoData, {
      onSuccess() {
        queryClient.invalidateQueries(CACHE_KEYS.bookDetail(Number(bookId)));
        queryClient.invalidateQueries(CACHE_KEYS.library(updateBookStatus));
        queryClient.invalidateQueries(CACHE_KEYS.library(bookStatus));
        toast.success('책 수정에 성공했어요.');
        navigate(`/book/library/${bookId}`);
      },
    });
  };
  return (
    <>
      <PageTitle title="책 수정 페이지" />
      <Boxcontainer title={title}>
        <BookCoverItem src={cover} />
        <BookDetailInfoItem>
          <form>
            <label htmlFor="author">저자</label>
            <input id="author" type="text" value={author} readOnly />
            <label htmlFor="publisher">출판사</label>
            <input id="publisher" type="text" value={publisher} readOnly />
            <label htmlFor="itemPage">전체 페이지</label>
            <input
              id="itemPage"
              type="number"
              value={itemPage || ''}
              readOnly
            />
            <label htmlFor="currentPage">현재 페이지</label>
            <input
              id="currentPage"
              type="number"
              value={updateCurrentPage || '0'}
              onChange={handleUpdateCurrentPage}
            />
            <label htmlFor="star">별점</label>
            <StarRating star={updateStar} setStar={setUpdateStar} id="star" />
            <label htmlFor="bookStatus">읽기 상태</label>
            <select
              id="bookStatus"
              value={updateBookStatus}
              onChange={handleUpdateSelect}
            >
              {bookStatusList.map((item, idx) => (
                <option value={item.typeValue} key={idx}>
                  {item.typeText}
                </option>
              ))}
            </select>
            {updateBookStatus === 'ING' && (
              <>
                <label htmlFor="readStartDate">읽기 시작한 날 </label>
                <input
                  id="readStartDate"
                  type="datetime-local"
                  value={updateReadStartDate || ''}
                  onChange={(e) => setUpdateStartDate(`${e.target.value}:00`)}
                />
              </>
            )}
            {updateBookStatus === 'DONE' && (
              <>
                <label htmlFor="readStartDate">읽기 시작한 날</label>
                <input
                  id="readStartDate"
                  type="datetime-local"
                  value={updateReadStartDate || ''}
                  onChange={(e) => setUpdateStartDate(`${e.target.value}:00`)}
                />
                <label htmlFor="readEndDate">다 읽은 날</label>
                <input
                  id="readEndDate"
                  type="datetime-local"
                  value={updateReadEndDate || ''}
                  onChange={(e) => setUpdateEndDate(`${e.target.value}:00`)}
                />
              </>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                size="small"
                styleType="solidPositive"
                type="button"
                onClick={handleUpdateSubmit}
              >
                수정하기
              </Button>
              <Button
                size="small"
                styleType="solidNegative"
                type="button"
                onClick={handleUpdateCancle}
              >
                취소하기
              </Button>
            </div>
          </form>
        </BookDetailInfoItem>
      </Boxcontainer>
    </>
  );
}
