import styled from 'styled-components';
import { memoTypeList, memoBookTypeList } from '@constants';

type MemoListType = typeof memoTypeList | typeof memoBookTypeList;

type Props<T extends MemoListType> = {
  type: T[number]['typeValue'];
  onChange: (newType: T[number]['typeValue']) => void;
  typeList: T;
};

export default function MemoTypeSelect<T extends MemoListType>({
  type,
  onChange,
  typeList,
}: Props<T>) {
  return (
    <>
      <Label htmlFor="memo-type">메모타입</Label>
      <Wrapper id="memo-type">
        {typeList.map((item) => (
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
  /* flex-wrap: wrap; */
  width: 100%;
  max-width: 375px;
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
  padding: 0.3rem;
  border-radius: 3rem;
  margin-right: 0.2rem;
  color: white;
  white-space: nowrap;
  transition: 0.5s;
  font-size: ${({ theme }) => theme.fontSize.sm};
  width: 100%;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.color.primary : theme.color.gray02};
  @media (min-width: 410px) {
    max-width: 150px;
    margin-right: 0.6rem;
    padding: 0.6rem;
  }
`;
