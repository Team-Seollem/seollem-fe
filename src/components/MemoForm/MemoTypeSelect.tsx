import styled from 'styled-components';
import { memoTypeList } from '@constants';
import type { MemoType } from '@projects/types/library';

type Props = {
  type: MemoType;
  onChange: (newType: MemoType) => void;
};

export default function MemoTypeSelect({ type, onChange }: Props) {
  return (
    <>
      <Label htmlFor="memo-type">메모타입</Label>
      <Wrapper id="memo-type">
        {memoTypeList.map((item) => (
          <Chip
            type="button"
            key={item.typeText}
            value={item.typeValue}
            isActive={item.typeValue === type}
            onClick={() => onChange(item.typeValue)}
          >
            {item.typeText}
          </Chip>
        ))}
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 1rem;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const Label = styled.label`
  width: 100%;
  display: inline-block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: bold;
`;

const Chip = styled.button<{ isActive: boolean }>`
  border: none;
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 3rem;
  margin-right: 0.6rem;
  color: white;
  white-space: nowrap;
  transition: 0.5s;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.color.primary : theme.color.gray02};
`;
