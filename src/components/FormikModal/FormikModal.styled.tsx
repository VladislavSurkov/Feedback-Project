import styled from 'styled-components';
import { Field } from 'formik';



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

export const Input = styled(Field)`
  font-family: 'Jost';
  font-size: 13px;
  font-weight: 400;

  width: 100%;
  height: 48px;
  resize: none;

  padding: 8px;
  margin-top: 16px;
  margin-bottom: 24px;

  border: none;
  border-radius: 5px;
  background-color: #f7f8fd;
  color: #3a4374;
`;

export const InputDetails = styled(Field)`
  font-family: 'Jost';
  font-size: 13px;
  font-weight: 400;
  resize: none;

  width: 100%;
  height: 120px;

  padding: 8px;
  margin-top: 16px;
  margin-bottom: 24px;

  border: none;
  border-radius: 5px;
  background-color: #f7f8fd;
  color: #3a4374;
`;
