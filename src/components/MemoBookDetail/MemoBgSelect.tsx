import styled from 'styled-components';
import { type BgType, MEMO_BACKGROUND } from 'constants/memoBackground';

type Props = {
  value: BgType;
  onChange: (newValue: BgType) => void;
};

export default function MemoBgSelect({ value, onChange }: Props) {
  return (
    <>
      <Label>메모 배경 선택</Label>
      <Wrapper>
        {Object.values(MEMO_BACKGROUND).map((bg) => (
          <Button
            key={bg.value}
            imageUrl={bg.btnImageUrl}
            isActive={bg.value === value}
            fontColor={bg.color}
            onClick={() => onChange(bg.value)}
          >
            {bg.value}
          </Button>
        ))}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 375px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.2rem;
  margin-bottom: 1rem;
  @media (min-width: 376px) {
    gap: 1rem;
  }
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: bold;
`;

const Button = styled.button<{
  imageUrl: string;
  isActive: boolean;
  fontColor: string;
}>`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border-radius: 10%;
  border: none;
  font-weight: bold;
  background-image: url(${({ imageUrl }) => imageUrl});
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-size: cover;
  color: ${({ fontColor }) => fontColor};
  transition: all 0.5s;
  filter: ${({ isActive }) => (isActive ? 'blur(0)' : 'blur(0.8px)')};
  transform: ${({ isActive }) => (isActive ? 'scale(1.05)' : 'scale(1)')};
  transition: transform 0.2s;
  @media (min-width: 376px) {
    width: 4rem;
    height: 4rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  &:hover {
    filter: blur(0);
    transform: scale(1.05);
  }
`;
