import { useState } from 'react';
import { Button } from '@components/common';
import Field, { fieldType, type FieldType } from '../common/Field';
import * as S from './styles';
import useEditMyProfile from './hook/useEditMyProfile';

type Props = {
  field: FieldType;
  value: string;
};

export default function EditField({ field, value }: Props) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);

  const { mutate } = useEditMyProfile();

  const handleEdit = () => {
    mutate({ [field]: text });
    setEditing(false);
  };

  return editing ? (
    <S.Wrapper>
      <S.Label>{fieldType[field]}</S.Label>
      <S.Input defaultValue={value} onChange={(e) => setText(e.target.value)} />
      <S.ButtonWrapper>
        <Button
          onClick={() => setEditing(false)}
          styleType="ghost"
          size="small"
        >
          취소
        </Button>
        <Button styleType="ghostNegative" size="small" onClick={handleEdit}>
          확인
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  ) : (
    <Field field={field} fieldText={value}>
      <S.ButtonWrapper>
        <Button
          onClick={() => setEditing(true)}
          styleType="ghostNegative"
          size="small"
        >
          수정
        </Button>
      </S.ButtonWrapper>
    </Field>
  );
}
