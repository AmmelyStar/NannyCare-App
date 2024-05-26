import React, { useState } from 'react';
import eye from '../../../img/icons/eye.svg';
import eyeOff from '../../../img/icons/eye-off.svg';
import { Container, SubTitle, Title, Wrap, Form, BtnLog, Input, EyeIcon } from './styled';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [namePlaceholder, setNamePlaceholder] = useState('Name');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Email');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password');
  const [showPassword, setShowPassword] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameFocus = () => {
    setNamePlaceholder('');
  };

  const handleNameBlur = () => {
    if (name === '') {
      setNamePlaceholder('Name');
    }
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
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Wrap>
        <Title>Registration</Title>
        <SubTitle>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</SubTitle>
      </Wrap>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          onFocus={handleNameFocus}
          onBlur={handleNameBlur}
          placeholder={namePlaceholder}
          required
        />
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
        <BtnLog type="submit">Sign Up</BtnLog>
      </Form>
    </Container>
  );
}

export default RegistrationForm;