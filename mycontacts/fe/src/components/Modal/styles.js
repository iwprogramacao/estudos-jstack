import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0,0,0, 0.6);
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray[100]};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  padding: 24px;
  max-width: 450px;
  width: 100%;

  h1 {
    font-size: 24px;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button:first-child {
    background: ${({ theme }) => theme.colors.gray.white};
    font-size: 16px;
    padding: 0 16px;
    height: 52px;
    border-radius: 6px;
    border: none;
    outline: none;
  }
`;
