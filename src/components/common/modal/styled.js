import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body.modal-open {
    overflow: hidden;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1440px;

        height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
   z-index: 9999; 
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 30px;
  width: 566px;
  height: auto;
  position: relative;
  z-index: 2001; 
`;

export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  z-index: 2002; 
`;