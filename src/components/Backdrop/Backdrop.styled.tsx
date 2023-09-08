import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f7f8fd;
`;

export const ModalContainer = styled.div`
  min-width: 350px;
  min-height: 800px;
  padding: 34px 24px;
`;

export const BtnGoBack = styled.button`
  color: #647196;
  border: none;
  background: none;
  margin-bottom: 55px;
`;
