import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { Dispatch, SetStateAction } from 'react';

interface StarRatingProps {
  id: string;
  star: number;
  setStar?: Dispatch<SetStateAction<number>>;
}

const Wrapper = styled.div`
  display: flex;
  width: 10rem;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  .inactive {
    color: #c9c8c8;
  }
  .active {
    color: #3e3e3e;
  }
`;
const Star = styled(BsStarFill)`
  cursor: pointer;
  font-size: 1.375rem;
`;

function StarRating({ star, setStar, id }: StarRatingProps) {
  const starArr = [1, 2, 3, 4, 5];
  const handleClick = (score: number) => {
    if (setStar) setStar(score);
  };
  return (
    <Wrapper>
      {starArr.map((score, index) => (
        <Star
          key={index}
          className={score <= star ? 'active' : 'inactive'}
          onClick={() => handleClick(score)}
        />
      ))}
    </Wrapper>
  );
}

export default StarRating;
