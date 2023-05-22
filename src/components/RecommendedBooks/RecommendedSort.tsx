import { RECOMMENDED_SORT } from '@constants';
import { RecommendSort } from '@projects/types/basic';
import styled from 'styled-components';

type Props = {
  selectedSort: RecommendSort;
  onChangeList: (value: RecommendSort) => void;
};

function RecommendedSort({ selectedSort, onChangeList }: Props) {
  return (
    <SSortList>
      {RECOMMENDED_SORT.map((data) => (
        <STag
          key={data.id}
          isSelected={selectedSort === data.value}
          onClick={() => onChangeList(data.value)}
        >
          {data.name}
        </STag>
      ))}
    </SSortList>
  );
}

export default RecommendedSort;

const SSortList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  border-bottom: solid 3px ${({ theme }) => theme.color.gray04};
`;
const STag = styled.li<{ isSelected: boolean }>`
  background-color: transparent;
  font-family: 'Pretendard-Regular';
  cursor: pointer;
  padding: 1rem;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.gray01 : theme.color.gray02};
  border-bottom: ${({ theme, isSelected }) =>
    isSelected ? `solid 1px ${theme.color.gray01}` : 'none'};

  &:hover {
    color: ${({ theme }) => theme.color.gray01};
  }
`;
