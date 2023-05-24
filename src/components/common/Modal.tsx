import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import Button from './Button';
import ReactPortal from './ReactPortal';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  modalWrapperId: string;
}
export default function Modal({
  closeModal,
  isOpen,
  children,
  modalWrapperId,
}: Props) {
  return (
    <ReactPortal wrapperId={modalWrapperId}>
      {isOpen && (
        <ModalBackground onClick={closeModal}>
          <ModalContainer
            onClick={(event: React.MouseEvent) => event.stopPropagation()}
          >
            <CloseButton
              type="button"
              styleType="ghost"
              size="small"
              onClick={closeModal}
            >
              <GrClose />
            </CloseButton>
            {children}
          </ModalContainer>
        </ModalBackground>
      )}
    </ReactPortal>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(160, 158, 158, 0.5);
`;
const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 22rem;
  min-height: 100px;
  padding: 1.25rem;
  padding-top: 3rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.gray01};
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.color.gray01};
`;
