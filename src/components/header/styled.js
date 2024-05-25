import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { accentGray } from '../theme/theme'


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

export const NavLink = styled(Link)`
  margin: 0 15px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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