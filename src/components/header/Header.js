import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  NavLink,
  Logo,
  BtnContainer,
  Nav,
  Box
} from './styled.js'
import { Modal } from '../common/modal/Modal.js'
import { Button } from '../common/btn/Button.js';
import RegistrationForm from '../auth/registration/Registration.js'; // Импортируем компонент регистрации
import LoginForm from '../auth/login/LoginForm.js';


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
          <Button onClick={openLoginModal}>Log In</Button>
          <Button onClick={openRegistrationModal}>Registration</Button> {/* Изменяем обработчик события onClick */}
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