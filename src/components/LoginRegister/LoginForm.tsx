import { useState } from 'react';
import { Formik } from 'formik';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { useAppDispatch } from 'hooks/useHooks';
import { login } from 'redux/user/auth-operations';
import { ErrorMsg } from 'components/FormikModal/FormikModal.styled';
import { ValidLogin } from 'helpers/schemas/Validations';
import { Button } from 'components/Buttons/Button';
import {
  ContForm,
  Content,
  Container,
  Title,
  Eye,
  LinkTo,
  Input,
} from 'components/LoginRegister/Forms.styled';

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const [eye, setEye] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <Content>
      <Formik
        validationSchema={ValidLogin}
        onSubmit={values => dispatch(login(values))}
        initialValues={initialValues}
      >
        {({ errors, touched }) => {
          const isButtonDisabled =
            !touched.email ||
            !touched.password ||
            Object.keys(errors).length > 0;

          return (
            <ContForm>
              <Title>Login</Title>
              <Container>
                <Input
                  name="email"
                  autoComplete="false"
                  placeholder="Enter your email"
                  error={touched.email && errors.email}
                />
                <ErrorMsg component="div" name="email" />
              </Container>

              <Container>
                <Input
                  name="password"
                  type={eye ? 'text' : 'password'}
                  autoComplete="false"
                  placeholder="Enter your password"
                  error={touched.password && errors.password}
                />
                <Eye onClick={() => setEye(prev => !prev)}>
                  {eye ? <AiFillEyeInvisible /> : <AiFillEye />}
                </Eye>
                <ErrorMsg component="div" name="password" />
              </Container>

              <Button
                type="submit"
                color={!isButtonDisabled ? 'third' : undefined}
                width={'addSave'}
                disabled={isButtonDisabled}
              >
                Log in
              </Button>

              <LinkTo to="/register">
                Don't have an account? Register here{' '}
              </LinkTo>
            </ContForm>
          );
        }}
      </Formik>
    </Content>
  );
}
