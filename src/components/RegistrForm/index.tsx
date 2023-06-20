import { Form, Formik } from 'formik';
import { FaPencilAlt } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {
  Btn,
  Content,
  Email,
  Button,
  Input,
  Login,
  Title,
  Eye,
  Container,
} from './RegisterForm.styled';
import { useState } from 'react';
import { register } from 'redux/user/auth-operations';
import { useAppDispatch } from 'hooks/useHooks';
export default function RegisterForm() {
  const [status, setStatus] = useState(false);
  const [eye, setEye] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <Content>
      <Formik
        onSubmit={values => {
          dispatch(register(values));
        }}
        initialValues={{ email: '', password: '', username: '', name: '' }}
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
          {status && (
            <Email onClick={() => setStatus(false)}>
              Correct email
              <FaPencilAlt />
            </Email>
          )}
          {status ? (
            <>
              <Title>Create a password</Title>
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
              <Button type="submit">Sign up</Button>
            </>
          ) : (
            <>
              <Title>Sign-Up</Title>
              <Input name="name" autoComplete="false" placeholder="Name" />
              <Input
                name="username"
                autoComplete="false"
                placeholder="Username"
              />
              <Input
                name="email"
                autoComplete="false"
                placeholder="Enter your email"
              />

              <Btn onClick={() => setStatus(true)}>Next</Btn>

              <Login to="/login">Login</Login>
            </>
          )}
        </Form>
      </Formik>
    </Content>
  );
}
