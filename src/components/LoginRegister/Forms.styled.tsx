import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #454647;
  overflow: hidden;
`;

export const ContForm = styled(Form)`
  color: white;
  max-width: 400px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-family: 'Jost';
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 40px;
`;
export const BtnCorrect = styled.p`
  font-family: 'Jost';
  font-weight: 400;
  font-size: 16px;
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const Input = styled(Field)`
  font-family: 'Jost';
  font-size: 13px;
  font-weight: 400;
  width: 100%;
  height: 40px;

  color: #f7f8fd;
  padding: 0 10px;
  border: none;
  background: transparent;
  outline: none;
  border-bottom: 1px solid white;
`;

export const Eye = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  cursor: pointer;
  z-index: 10;
`;

export const LinkTo = styled(Link)`
  font-family: 'Jost';
  font-weight: 400;
  font-size: 17px;
  color: white;
`;
