import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { accentGray,redTheme } from '../theme/theme'
import Button from '../common/btn/Button.js';

export const HeaderContainer = styled.header`
  width: 1184px;
  height: 48px;
  padding: 20px 96px;
  background-color: transparent;
  color: white;
  text-align: center;
  position: relative; 
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background-color: ${accentGray.color};
  }
`;

export const HeaderButton = styled(Button)`
  background-color: ${redTheme.mainColor};
   border: none;
  &:hover,
  :focus,
  :active {
      border: none;
      background-color: white;
      color: ${redTheme.mainColor};
    
  }
`;

export const HeaderBtn = styled(Button)`


  &:hover,
  :focus,
  :active {

   border: none;
      background-color: white;
      color: ${redTheme.mainColor};
  }
`;


export const NavLink = styled(Link)`
  margin: 0 15px;
  color: white;
  text-decoration: none;
  position: relative;
   &:hover,
  &:active,
  &:focus {
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

export const Nav = styled.div`
  font-size:  16px;
  line-height: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
`;

export const BtnContainer = styled.div`
display: flex;
gap: 8px;
`;

export const Logo = styled.div`
  font-size:  24px;
  line-height: 28px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Box = styled.div`
display: flex;
gap: 92px;
`;