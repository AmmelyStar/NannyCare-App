import React from 'react';
import { NanniesContainer, NanniesTitle} from './styled';
// import  Header  from '../../components/header/Header';
import {NannyCard} from '../../components/nanny/NannyCard'


export const Nannies = () => {
  return (
    <NanniesContainer>
      {/* <HeaderContainer>
      <Header />
      </HeaderContainer> */}
      <NanniesTitle>Nannies Page</NanniesTitle>
      <NannyCard/>
    </NanniesContainer>
  );
};

export default Nannies;
