import React, { useState } from "react";
import {
  Container,
  LoginContainer,
  Logo,
  InputContainer,
  BackgroundError,
  ErrorLabel,
  LogoContainer,
  InsideInputContainer,
  ErrorContainer,
} from "./LoginStyle";

import { InputLabel } from "../../components/Typography/SubTitleStyle";

import { SubmitButton } from "../../components/Buttons/ButtonStyled";

import Input from "../../components/Input/Input";

import { useHistory } from "react-router-dom";

import logo from "../../assets/images/Login/PokemonLogo.png";
import background from "../../assets/images/Login/Background_Image.jpg";

const Login = () => {
  var hasInput = false;
  var hasMensage = false;
  const [values, setValues] = useState(initialState);
  const [loginError, setLoginError] = useState(false);
  const history = useHistory();

  function initialState() {
    return { email: "", senha: "" };
  }

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  const checkAuthentication = (values) => {
    console.log(values);
    if (values.email === "lucassaliba10@gmail.com") {
      if (values.senha === "12345") {
        history.push("/");
      } else {
        setLoginError(!loginError);
      }
    } else {
      setLoginError(!loginError);
    }
  };

  return (
    <Container bg={background}>
      <LoginContainer>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
        <InputContainer hasMensage={hasMensage}>
          <InsideInputContainer hasInput={hasInput}>
            <InputLabel>Email</InputLabel>
            <Input
              id="email"
              name="email"
              type="text"
              onChange={onChange}
              value={values.email}
            />
          </InsideInputContainer>
        </InputContainer>
        <InputContainer hasMensage={!hasMensage}>
          <InsideInputContainer hasInput={!hasInput}>
            <InputLabel>Senha</InputLabel>
            <Input
              id="senha"
              name="senha"
              type="password"
              onChange={onChange}
              value={values.senha}
            />
          </InsideInputContainer>
          <SubmitButton
            onClick={() => {
              checkAuthentication(values);
            }}
          >
            Entrar
          </SubmitButton>
        </InputContainer>
        {loginError && (
          <ErrorContainer>
            <BackgroundError>
              <ErrorLabel>Email e/ou senha incorretos.</ErrorLabel>
            </BackgroundError>
          </ErrorContainer>
        )}
      </LoginContainer>
    </Container>
  );
};

export default Login;
