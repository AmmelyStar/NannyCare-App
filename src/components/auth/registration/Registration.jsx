import React, { useState } from 'react';
import eye from '../../../img/icons/eye.svg';
import eyeOff from '../../../img/icons/eye-off.svg';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Імпортуємо функцію для реєстрації
import { auth } from '../../../firebaseConfig'; // Імпортуємо екземпляр аутентифікації Firebase
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

function RegistrationForm({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [namePlaceholder, setNamePlaceholder] = useState('Name');
  const [emailPlaceholder, setEmailPlaceholder] = useState('Email');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password');
  const [showPassword, setShowPassword] = useState(false);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
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

  const handleSubmit = async event => {
    event.preventDefault();

    const isValidEmail = email => {
      // Регулярний вираз для перевірки правильності формату електронної пошти
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    // Перевірка на пусті поля
    if (!name || !email || !password) {
      toast.error('Please fill in all fields'); // Відображення повідомлення про пусті поля
      return;
    }

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      toast.error('Password should be at least 6 characters long');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User registered successfully:', userCredential.user);
      setName('');
      setEmail('');
      setPassword('');
      onClose(); // Закриття модального вікна після успішної реєстрації
    } catch (error) {
      console.error('Error registering user:', error);
      if (error.code === 'auth/email-already-in-use') {
        toast.error('This email address is already registered.');
      } else {
        toast.error(error.message); // Відображення повідомлення про помилку
      }
    }
  };

  return (
    <Container>
      <Wrap>
        <Title>Registration</Title>
        <SubTitle>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </SubTitle>
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
        <EyeIcon
          src={showPassword ? eye : eyeOff}
          alt="Password visibility"
          onClick={togglePasswordVisibility}
        />
        <BtnLog type="submit" onClick={handleSubmit}>
          Sign Up
        </BtnLog>
      </Form>
    </Container>
  );
}

export default RegistrationForm;
