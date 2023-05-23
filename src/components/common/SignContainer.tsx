import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  height: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};
export default function SignContainer({ children, height, onSubmit }: Props) {
  return (
    <SContainer height={height}>
      <form onSubmit={onSubmit}>{children}</form>
    </SContainer>
  );
}

const SContainer = styled.section<Pick<Props, 'height'>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 2rem;
  width: 22rem;
  height: ${(props) => props.height};
  border-radius: 0.25rem;
  box-shadow: 0rem 0rem 0.25rem 0rem rgba(0 0 0 / 20%);
  padding: 1.5rem 2rem;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
  }
`;
