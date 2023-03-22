import Pagination from '@components/common/Pagination';
import { useState } from 'react';

export default function MemoBooks() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <div>
      <Pagination
        page={currentPage}
        totalPages={10}
        onChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </div>
  );
}
