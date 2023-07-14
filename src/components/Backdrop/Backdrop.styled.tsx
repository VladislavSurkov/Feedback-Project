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
  background-color: #fff;
`;

export const ModalContainer = styled.div`
  position: relative;
  min-width: 350px;
  min-height: 800px;
  padding: 88px 24px 77px 24px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;

export const BtnGoBack = styled.button`
  position: absolute;
  top: 50px;
  color: #647196;
  border: none;
  background: none;
`;
