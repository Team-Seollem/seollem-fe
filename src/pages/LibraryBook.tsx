import { useParams } from 'react-router-dom';

export default function LibraryBook() {
  const { bookId } = useParams();

  return <div>{bookId}</div>;
}
