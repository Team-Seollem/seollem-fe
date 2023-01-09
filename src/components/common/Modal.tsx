import React from 'react';
import styled from 'styled-components';
import Button from './Button';

interface ModalProps {
  closeModal: () => void;
  children?: React.ReactNode;
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

function Modal({ closeModal, children }: ModalProps) {
  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer
        onClick={(event: React.MouseEvent) => event.stopPropagation()}
      >
        <Button type="button" styleType="ghost" size="small">
          X
        </Button>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
}

export default Modal;
