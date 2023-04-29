import * as S from './styles';

export const fieldType = {
  name: '이름',
  email: '이메일',
  content: '자기소개',
};
export type FieldType = keyof typeof fieldType;

type Props = {
  field: FieldType;
  fieldText?: string;
  children?: React.ReactNode;
};
export default function Field({ children, field, fieldText }: Props) {
  return (
    <S.Wrapper>
      <S.Label>{fieldType[field]}</S.Label>
      <S.Text>{fieldText}</S.Text>
      {children}
    </S.Wrapper>
  );
}
