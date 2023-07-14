import styled from 'styled-components';
import { Field } from 'formik';

export const Title = styled.h2`
margin-bottom: 24px;
`
export const FeedbackTitle = styled.label`

`;
export const Input = styled(Field)`
  margin-top: 3px;
  width: 100%;
  height: 48px;
  padding: 8px;
  border: none;
  background-color: #f7f8fd;
`;
export const Category = styled.label`
  margin-top: 24px;
  margin-bottom: 3px;
`;
export const FormSelect = styled(Field)`
  margin-top: 16px;
  width: 100%;
  border: none;
  background-color: #f7f8fd;
`;

export const InputDetails = styled(Field)`
  width: 100%;
  height: 120px;
  margin-top: 16px;
  margin-bottom: 40px;
  border: none;
  padding: 8px;
  background-color: #f7f8fd;
`;
export const Label = styled.label`
  margin-top: 24px;
  margin-bottom: 3px;
`;
