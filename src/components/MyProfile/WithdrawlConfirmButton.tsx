import styled from 'styled-components';
import { Button } from '@components/common';
import Modal from '@components/common/Modal';
import useModal from '@hooks/useModal';
import useDeleteMyProfile from './hook/useDeleteMyProfile';

export default function WithdrawlConfirmButton() {
  const { isOpen, toggle } = useModal();
  const withdrawlProfile = useDeleteMyProfile();

  const handleWithdrawl = () => {
    withdrawlProfile();
  };

  return (
    <Wrapper>
      <Button onClick={toggle} styleType="solidNegative" size="small">
        회원탈퇴
      </Button>
      <Modal
        isOpen={isOpen}
        closeModal={toggle}
        modalWrapperId="withdrawl-modal"
      >
        정말 탈퇴하시겠습니까?
        <ButtonGroup>
          <SButton onClick={toggle} styleType="neutral" size="small">
            취소
          </SButton>
          <SButton
            onClick={handleWithdrawl}
            styleType="solidNegative"
            size="small"
          >
            탈퇴
          </SButton>
        </ButtonGroup>
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  margin: 1.5rem 0;
  @media (max-width: 410px) {
    width: 100%;
  }
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
