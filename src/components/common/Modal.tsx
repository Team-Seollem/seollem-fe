import styled from 'styled-components';
import Button from './Button';
import ReactPortal from './ReactPortal';

interface Props {
  closeModal: () => void;
  children: React.ReactNode;
}
export default function Modal({ closeModal, children }: Props) {
  return (
    <ReactPortal wrapperId="modal-root">
      <ModalBackground onClick={closeModal}>
        <ModalContainer
          onClick={(event: React.MouseEvent) => event.stopPropagation()}
        >
          <Button
            type="button"
            styleType="ghost"
            size="small"
            onClick={closeModal}
          >
            X
          </Button>
          {children}
        </ModalContainer>
      </ModalBackground>
    </ReactPortal>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(160, 158, 158, 0.5);
  z-index: 10;
`;
const ModalContainer = styled.div`
  padding: 1.875rem;
  padding-top: 3rem;
  border-radius: 0.3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.gray01};
`;
/**
 * 배경을 클릭하면 모달이 닫힌다
 * x 버튼을 클릭하면 모달이 닫힌다 -> 위치는 고정되어도 될 것 같음
 * width, height 값을 props로 전달받을 수 있도록 한다.
 *
 * 모달을 보이게 하고(isOpen) closeModal => useModal 훅으로 만든다.
 *
 * (전역 상태로 만들 필요는 없을 듯 )
 * potal을 사용할 것으로 예상되는 부분이 있다면 createPortal을 따로 컴포넌트로 만든다.
 *
 *
 */
