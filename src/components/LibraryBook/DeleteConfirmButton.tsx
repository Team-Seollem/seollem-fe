import styled from 'styled-components';
import { BsTrashFill } from 'react-icons/bs';
import { Button } from '@components/common';
import useModal from '@hooks/useModal';
import Modal from '@components/common/Modal';

type Props = {
  onConfirm: () => void;
};

export default function DeleteConfirmButton({ onConfirm }: Props) {
  const { isOpen, toggle } = useModal();
  return (
    <>
      <OpenConfirmModalButton styleType="ghost" size="small" onClick={toggle}>
        <BsTrashFill />
      </OpenConfirmModalButton>
      <Modal isOpen={isOpen} closeModal={toggle}>
        정말 메모를 삭제하시겠습니까?
        <ButtonGroup>
          <SButton styleType="neutral" size="small" onClick={toggle}>
            취소
          </SButton>
          <SButton styleType="solidNegative" size="small" onClick={onConfirm}>
            메모 삭제
          </SButton>
        </ButtonGroup>
      </Modal>
    </>
  );
}

const OpenConfirmModalButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.gray01};
`;

const ButtonGroup = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SButton = styled(Button)`
  width: 4rem;
`;
