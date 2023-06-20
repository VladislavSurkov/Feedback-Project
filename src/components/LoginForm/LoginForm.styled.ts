import { Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #454647;
`;
export const Title = styled.h2`
  margin-bottom: 40px;
`;
export const Input = styled(Field)`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 7px;
  border: none;
  background: transparent;
  outline: none;
  border-bottom: 1px solid white;
`;
export const Button = styled.button`
  margin-bottom: 30px;
  height: 40px;
  background-color: #1a7dab;
  border-radius: 20px;
  border: none;
  border: none;
  cursor: pointer;

  font-style: normal;
  font-size: 17px;
  font-weight: 600;
  line-height: 17px;
`;

export const Login = styled(Link)`
  color: white;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
`;
export const Container = styled.div`
  position: relative;
`;
export const Eye = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  cursor: pointer;
  z-index: 10;
`;
