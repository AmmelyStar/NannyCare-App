import React from 'react';
import {
  HeaderContainer,
  NavLink,
  Logo,
  BtnContainer

} from './styled.js'
import { Button } from '../common/btn/Button.js';

// import SwitchTheme from '../theme/switchTheme.js';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Nanny.Services</Logo>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/nannies">Nannies</NavLink>
      </nav>
      {/* <div><SwitchTheme /> </div> */}
      <BtnContainer>
        <Button>Log In</Button>
        <Button>Registration</Button>

      </BtnContainer>
    </HeaderContainer>
  );
};

export default Header;