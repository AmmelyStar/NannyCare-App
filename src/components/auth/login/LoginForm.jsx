import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import eye from '../../../img/icons/eye.svg';
import eyeOff from '../../../img/icons/eye-off.svg';
import { toast } from 'react-toastify'; // Імпортуємо toast для використання
import {
  Container,
  SubTitle,
  Title,
  Wrap,
  Form,
  BtnLog,
  Input,
  EyeIcon,
} from './styled';

function LoginForm({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Email');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
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

  const handleSubmit = async event => {
    event.preventDefault();

    const isValidEmail = email => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    // Перевірка на правильний формат електронної пошти
    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully');
      setEmail('');
      setPassword('');
      onClose(); // Закриття модального вікна після успішного входу
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.code === 'auth/user-not-found') {
        toast.error('User with this email address is not registered.');
      } else if (error.code === 'auth/wrong-password') {
        toast.error('The email address or password you entered is incorrect.');
      } else {
        toast.error(
          'Incorrect email address or password. Please check your credentials and try again.'
        );
      }
    }
  };

  return (
    <Container>
      <Wrap>
        <Title>Log In</Title>
        <SubTitle>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </SubTitle>
      </Wrap>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          name="email"
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
          name="password"
          onChange={handlePasswordChange}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          placeholder={passwordPlaceholder}
          required
        />
        <EyeIcon
          src={showPassword ? eye : eyeOff}
          alt="Password visibility"
          onClick={togglePasswordVisibility}
        />
        <BtnLog type="submit" onClick={handleSubmit}>
          Log In
        </BtnLog>
      </Form>
    </Container>
  );
}

export default LoginForm;
