import React from 'react';
import { NanniesContainer, NanniesTitle, HeaderContainer } from './styled';
import  Header  from '../../components/header/Header';


export const Nannies = () => {
  return (
    <NanniesContainer>
      <HeaderContainer>
      <Header />
      </HeaderContainer>
      <NanniesTitle>Nannies Page</NanniesTitle>
    </NanniesContainer>
  );
};

export default Nannies;
