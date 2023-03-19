import styled, { css } from 'styled-components';
import { ReactComponent as LoadingSVG } from '@assets/loading.svg';

type ButtonStyleType =
  | 'ghost'
  | 'ghostNegative'
  | 'solidPositive'
  | 'solidNegative'
  | 'solidDisabled'
  | 'neutral'
  | 'outlineDisabled'
  | 'outlineNegative';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleType: ButtonStyleType;
  size: 'small' | 'medium' | 'large';
  className?: string;
  isLoading?: boolean;
}

export default function Button({
  onClick,
  styleType,
  size,
  children,
  className,
  type,
  isLoading = false,
}: Props) {
  return (
    <SButton
      disabled={
        styleType === 'outlineDisabled' || styleType === 'solidDisabled'
      }
      onClick={onClick}
      styleType={styleType}
      size={size}
      className={className}
      type={type}
      isLoading={isLoading}
    >
      {isLoading ? <LoadingSVG /> : children}
    </SButton>
  );
}

const STYLETYPE = {
  ghost: css`
    color: ${({ theme }) => theme.color.black};
  `,
  ghostNegative: css`
    color: ${({ theme }) => theme.color.negative};
  `,
  solidPositive: css`
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.primary};
  `,
  solidNegative: css`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.negative};
  `,
  solidDisabled: css`
    background-color: ${({ theme }) => theme.color.gray03};
    color: ${({ theme }) => theme.color.gray04};
    cursor: not-allowed;
  `,
  neutral: css`
    color: ${({ theme }) => theme.color.gray01};
    border: 1px solid ${({ theme }) => theme.color.gray01};
  `,
  outlineDisabled: css`
    border: 1px solid ${({ theme }) => theme.color.gray02};
    color: ${({ theme }) => theme.color.gray02};
    cursor: not-allowed;
  `,
  outlineNegative: css`
    border: 1px solid ${({ theme }) => theme.color.negative};
    color: ${({ theme }) => theme.color.negative};
  `,
};

const SIZETYPE = {
  small: css`
    padding: 0.4rem 0.6rem;
    width: fit-content;
  `,
  medium: css`
    height: 3rem;
    max-width: 18rem;
    border-radius: 3rem;
  `,
  large: css`
    height: 3rem;
    width: 100%;
  `,
};

const SButton = styled.button<Props>`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 0.5rem 1rem;
  text-align: center;
  white-space: nowrap;
  font-weight: 800;
  font-family: 'Pretendard';
  border: none;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.color.white};
  ${(props) => props.styleType && STYLETYPE[props.styleType]}
  ${(props) => props.size && SIZETYPE[props.size]}
`;
