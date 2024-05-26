import React, { useState } from 'react';
import {
  HeaderContainer,
  Logo,
  BtnContainer,
  Nav,
  Box,
  HeaderButton,
  HeaderBtn
} from './styled.js'
import { Modal } from '../common/modal/Modal.js'
import RegistrationForm from '../auth/registration/Registration.js'; // Импортируем компонент регистрации
import LoginForm from '../auth/login/LoginForm.js';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavLink = styled(RouterNavLink)`
  margin: 0 15px;
  color: white;
  text-decoration: none;
  position: relative;

  &:hover,
  &:active,
  &:focus,
  &.active { 
    &::after {
      content: '';
      position: absolute;
      bottom: -14px;
      left: 50%;
      transform: translateX(-50%);
      width: 8px;
      height: 8px;
      background-color: white;
      border-radius: 50%;
    }
  }
`;

const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false); 
  const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false); // Добавляем состояние для модального окна регистрации
  
  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openRegistrationModal = () => { // Функция для открытия модального окна регистрации
    setRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => { // Функция для закрытия модального окна регистрации
    setRegistrationModalOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>Nanny.Services</Logo>
      <Box>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/nannies">Nannies</NavLink>
        </Nav>
        <BtnContainer>
          <HeaderBtn onClick={openLoginModal}>Log In</HeaderBtn>
          <HeaderButton onClick={openRegistrationModal}>Registration</HeaderButton> {/* Изменяем обработчик события onClick */}
        </BtnContainer>
      </Box>
      {isLoginModalOpen && (
        <Modal onClose={closeLoginModal}>
          <LoginForm />
        </Modal>
      )}
      {isRegistrationModalOpen && ( // Добавляем модальное окно для регистрации
        <Modal onClose={closeRegistrationModal}>
          <RegistrationForm />
        </Modal>
      )}
    </HeaderContainer>
  );
};

export default Header;