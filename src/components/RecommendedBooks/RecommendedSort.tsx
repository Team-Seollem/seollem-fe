import { RECOMMENDED_SORT } from '@constants';
import { RecommendSort } from '@projects/types/basic';
import styled from 'styled-components';

type Props = {
  onChangeList: (value: RecommendSort) => void;
};

function RecommendedSort({ onChangeList }: Props) {
  const sortDataList = RECOMMENDED_SORT.map((data) => {
    return (
      <li key={data.id}>
        <button type="button" onClick={() => onChangeList(data.value)}>
          {data.name}
        </button>
      </li>
    );
  });
  return <SSortList>{sortDataList}</SSortList>;
}

export default RecommendedSort;

const SSortList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  border-bottom: solid 3px ${({ theme }) => theme.color.gray04};

  li:hover {
    border-bottom: solid 1px ${({ theme }) => theme.color.gray01};
  }

  button {
    background-color: transparent;
    font-family: 'Pretendard-Regular';
    cursor: pointer;
    padding: 1rem;
    color: ${({ theme }) => theme.color.gray02};
    border: none;
    &:hover {
      color: ${({ theme }) => theme.color.gray01};
    }
  }
`;
