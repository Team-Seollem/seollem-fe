import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  page: number;
}

export default function MemoPageInput({ page, onChange }: Props) {
  return (
    <SLabel>
      페이지
      <SInput
        type="number"
        value={page.toString()}
        onChange={onChange}
        min={0}
      />
    </SLabel>
  );
}

const SLabel = styled.label`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: bold;
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const SInput = styled.input`
  margin-left: 1rem;
  width: 5rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  padding: 0.3rem;
  border: 2px solid ${({ theme }) => theme.color.gray03};
  border-radius: 0.3rem;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.color.primary};
  }
`;
