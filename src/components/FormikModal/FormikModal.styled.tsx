import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

export const BoxInput = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const FeedbackTitle = styled.h3`
  font-family: 'Jost';
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.181px;
  color: #3a4374;
`;

export const Placeholder = styled.label`
  color: #647196;
  font-family: 'Jost';
  font-size: 13px;
  font-weight: 400;
`;

export const Input = styled(Field)<{ name: string; error: string }>`
  font-family: 'Jost';
  font-size: 13px;
  font-weight: 400;
  box-sizing: border-box;
  resize: none;
  width: 100%;
  height: ${props => (props.name === 'description' ? '120px' : '48px')};

  padding: 8px;
  margin-top: 16px;

  border: ${props => (props.error ? ' 1px solid #D73737;' : 'none')};
  border-radius: 5px;
  outline: none;

  background-color: #f7f8fd;
  color: #3a4374;

  &:focus {
    border: 1px solid #4661e6;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  font-family: 'Jost';
  font-size: 14px;
  font-weight: 400;

  color: #d73737;
`;
