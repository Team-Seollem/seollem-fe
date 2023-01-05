import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { SearchProps } from '../../types/basic';

function Search({ onChangeInput, keyword }: SearchProps) {
  // onKeyDown 'Enter' 일때 새로고침 막기
  const preventEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };
  return (
    <SSearchForm>
      <FiSearch size="1.5rem" />
      <input
        type="text"
        placeholder="책 제목 혹은 저자 입력 후 ENTER"
        value={keyword}
        onKeyDown={preventEnter}
        onChange={onChangeInput}
      />
    </SSearchForm>
  );
}

export default Search;

const SSearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px soild ${(props) => props.theme.color.gray01};
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;

  input {
    background: transparent;
    font-size: 1.2rem;
    outline: none;
    border: none;
    width: 100%;
    color: ${(props) => props.theme.color.gray01};
    margin-left: 0.25rem;
    font-family: 'Pretendard-Regular';

    &::placeholder {
      font-size: 1rem;
      font-family: 'Pretendard-Regular';
    }
  }
`;
