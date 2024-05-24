import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  background-color: transparent;
  color: white;
  text-align: center;
  position: relative; 
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 1px;
    background-color: rgba(251, 251, 251, 0.4);
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

export const BtnContainer = styled.div`
display: flex;
`;

export const Logo = styled.div`

  color: white;


`;