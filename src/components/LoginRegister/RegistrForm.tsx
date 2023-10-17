import { Formik } from 'formik';
import { FaPencilAlt } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import { register } from 'redux/user/auth-operations';
import { useAppDispatch } from 'hooks/useHooks';
import { ValidRegister } from 'helpers/schemas/Validations';
import { Button } from 'components/Buttons/Button';
import { ErrorMsg } from 'components/FormikModal/FormikModal.styled';
import {
  Content,
  Input,
  Title,
  Eye,
  Container,
  ContForm,
  LinkTo,
  BtnCorrect,
} from './Forms.styled';

const initialValues = {
  email: '',
  password: '',
  username: '',
  name: '',
};

export default function RegistrForm() {
  const [status, setStatus] = useState(false);
  const [eye, setEye] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <Content>
      <Formik
        validationSchema={ValidRegister}
        initialValues={initialValues}
        onSubmit={values => {
          dispatch(register(values));
        }}
      >
        {({ errors, touched }) => {
          const isButtonDisabled =
            !touched.name ||
            !touched.username ||
            !touched.email ||
            !touched.password ||
            Object.keys(errors).length > 0;

          return (
            <ContForm>
              {status && (
                <BtnCorrect onClick={() => setStatus(false)}>
                  Correct email <FaPencilAlt />
                </BtnCorrect>
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
                    Sign up
                  </Button>
                </>
              ) : (
                <>
                  <Title>Sign-Up</Title>
                  <Container>
                    <Input
                      name="name"
                      autoComplete="false"
                      placeholder="Name"
                      error={touched.name && errors.name}
                    />
                    <ErrorMsg component="div" name="name" />
                  </Container>
                  <Container>
                    <Input
                      name="username"
                      autoComplete="false"
                      placeholder="Username"
                      error={touched.username && errors.username}
                    />
                    <ErrorMsg component="div" name="username" />
                  </Container>
                  <Container>
                    <Input
                      name="email"
                      autoComplete="false"
                      placeholder="Enter your email"
                      error={touched.email && errors.email}
                    />
                    <ErrorMsg component="div" name="email" />
                  </Container>

                  <Button
                    type="button"
                    color={'third'}
                    width={'addSave'}
                    onClick={() => setStatus(true)}
                  >
                    Next 
                  </Button>

                  <LinkTo to="/login">Login</LinkTo>
                </>
              )}
            </ContForm>
          );
        }}
      </Formik>
    </Content>
  );
}
