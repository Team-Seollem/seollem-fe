import styled from 'styled-components';
import type { MemoAuthority } from '@projects/types/library';

type Props = {
  authority: MemoAuthority;
  onChange: (value: MemoAuthority) => void;
};

export default function MemoAuthoritySelect({ authority, onChange }: Props) {
  const isChecked = authority === 'PUBLIC';

  const handleChange = () => {
    const newValue = isChecked ? 'PRIVATE' : 'PUBLIC';
    onChange(newValue);
  };

  return (
    <Wrapper>
      <Label>
        메모 공개
        <Input type="checkbox" checked={isChecked} onChange={handleChange} />
        <Slider />
      </Label>
      <Text>{isChecked ? '비공개' : '공개'}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: bold;
`;

const Input = styled.input`
  display: none;
`;

const Slider = styled.span`
  cursor: pointer;
  margin-left: 1rem;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.color.gray02};
  position: relative;
  transition: 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.color.white};
    transition: transform 0.3s ease;
  }

  ${Input}:checked + & {
    background-color: ${({ theme }) => theme.color.primary};
  }

  ${Input}:checked + &::before {
    transform: translateX(1.5rem);
  }
`;

const Text = styled.p`
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.gray01};
`;
