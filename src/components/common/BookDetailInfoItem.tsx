import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

// 책 상세 페이지 및 등록 페이지 책 정보 UI 컴포넌트
function BookDetailInfoItem({ children }: Props) {
  return <FormWrapper>{children}</FormWrapper>;
}

export default BookDetailInfoItem;

const FormWrapper = styled.div`
  width: 100%;
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${(props) => props.theme.color.gray01};
  }
  input,
  select {
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.75rem;
    border: 0.1rem solid ${(props) => props.theme.color.skyblue02};
    border-radius: 0.25rem;
    outline: none;
    color: ${(props) => props.theme.color.gray01};
    font-family: 'Pretendard-Regular';
  }
  button {
    float: right;
  }
`;
