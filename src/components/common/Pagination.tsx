import styled from 'styled-components';

type Props = {
  page: number;
  totalPages: number;
  onChange: (newPage: number) => void;
};
const LIMIT = 5;

export default function Pagination({ page, totalPages, onChange }: Props) {
  const startIndex = Math.floor((page - 1) / LIMIT) * LIMIT;
  const endIndex = Math.min(startIndex + LIMIT - 1, totalPages - 1);

  const pageNumberArray = Array.from(
    new Array(endIndex - startIndex + 1),
    (_, i) => startIndex + i + 1
  );

  return (
    <PageContainer>
      <PageButton
        onClick={() => {
          onChange(page - 1);
        }}
        disabled={page === 1}
      >
        {'<'}
      </PageButton>
      {pageNumberArray.map((el) => (
        <PageButton
          key={el}
          isActive={el === page}
          onClick={() => onChange(el)}
        >
          {el}
        </PageButton>
      ))}
      <PageButton
        onClick={() => {
          onChange(page + 1);
        }}
        disabled={page === totalPages}
      >
        {'>'}
      </PageButton>
    </PageContainer>
  );
}

const PageContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

const PageButton = styled.button<{ isActive?: boolean }>`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-family: 'Pretendard';
  margin: 0 0.5rem;
  padding: 0.3rem;
  border: none;
  border-radius: 0.3rem;
  outline: none;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.color.gray03 : theme.color.white};
`;
