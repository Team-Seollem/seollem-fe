import styled from 'styled-components';
import { memoTypeList } from '@constants';
import type { MemoType } from '@projects/types/library';

type Props = {
  type: MemoType;
  onChange: (newType: MemoType) => void;
};

export default function MemoTypeSelect({ type, onChange }: Props) {
  return (
    <Wrapper>
      {memoTypeList.map((item) => (
        <Chip
          key={item.typeText}
          value={item.typeValue}
          isActive={item.typeValue === type}
          onClick={() => onChange(item.typeValue)}
        >
          {item.typeText}
        </Chip>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 0.6rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const Chip = styled.button<{ isActive: boolean }>`
  border: none;
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 3rem;
  margin-right: 0.6rem;
  color: white;
  transition: 0.5s;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.color.primary : theme.color.gray02};
`;
