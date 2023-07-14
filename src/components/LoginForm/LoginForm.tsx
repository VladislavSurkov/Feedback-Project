import { Form, Formik } from 'formik';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useAppDispatch } from 'hooks/useHooks';

import {
  Content,
  Button,
  Input,
  Login,
  Title,
  Eye,
  Container,
} from './LoginForm.styled';
import { useState } from 'react';
import { login } from 'redux/user/auth-operations';

export default function LoginForm() {
  const [eye, setEye] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <Content>
      <Formik
        onSubmit={values => dispatch(login(values))}
        initialValues={{ email: '', password: '' }}
      >
        <Form
          style={{
            color: 'white',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Title>Login</Title>
          <Input
            name="email"
            autoComplete="false"
            placeholder="Enter your email"
          />
          <Container>
            <Input
              name="password"
              type={eye ? 'text' : 'password'}
              autoComplete="false"
              placeholder="Enter your password"
            />
            <Eye onClick={() => setEye(prev => !prev)}>
              {eye ? <AiFillEyeInvisible /> : <AiFillEye />}
            </Eye>
          </Container>
          <Button type="submit">Log in</Button>

          <Login to="/register">Don't have an account? Register here </Login>
        </Form>
      </Formik>
    </Content>
  );
}
