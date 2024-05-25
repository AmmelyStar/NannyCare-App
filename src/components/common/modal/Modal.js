import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, CloseButton, ModalContent } from './styled';
import close from '../../../img/icons/x.svg';

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img src={close} alt="icon" />
        </CloseButton>
        {children}
      </ModalContent>
    </Overlay>,
    document.getElementById('modal-root')
  );
};

export default Modal;