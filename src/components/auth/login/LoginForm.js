import React, { useState } from 'react';
import eye from '../../../img/icons/eye.svg';
import eyeOff from '../../../img/icons/eye-off.svg';
import { Container, SubTitle, Title, Wrap, Form, BtnLog, Input, EyeIcon } from './styled';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Email');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailFocus = () => {
    setEmailPlaceholder('');
  };

  const handleEmailBlur = () => {
    if (email === '') {
      setEmailPlaceholder('Email');
    }
  };

  const handlePasswordFocus = () => {
    setPasswordPlaceholder('');
  };

  const handlePasswordBlur = () => {
    if (password === '') {
      setPasswordPlaceholder('Password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    // Ваши действия по обработке введенных данных (например, отправка на сервер или локальная проверка)

    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Wrap>
        <Title>Log In</Title>
        <SubTitle>Welcome back! Please enter your credentials to access your account and continue your babysitter search.</SubTitle>
      </Wrap>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          placeholder={emailPlaceholder}
          required
        />
        <Input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={handlePasswordChange}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          placeholder={passwordPlaceholder}
          required
        />
        <EyeIcon src={showPassword ? eye : eyeOff} alt="Password visibility" onClick={togglePasswordVisibility} />
        <BtnLog type="submit">Log In</BtnLog>
      </Form>
    </Container>
  );
}

export default LoginForm;