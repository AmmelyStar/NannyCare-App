import React from 'react';
import { Container, Title, Left, Right, Image,Text,Main, Imge, Btn, Img,Blok,Check, Accent, Wrap } from './styled.js'; // Предполагается, что у вас есть компоненты Left, Right и Image

import home from '../../img/home/home.jpeg'
import arrow from '../../img/icons/arrow.svg'
import check from '../../img/icons/fe_check.svg'

import Header from '../header/Header.js';

function Home() {
  return (
    <Container>
      <Wrap>
        <Header />
        <Main>
          <Left>
        <Title>
          <Accent>Make Life Easier <br/> for the Family:</Accent> <br/> Find Babysitters Online for All Occasions
        </Title>
        <Btn >
          Get Started
          <Img src={arrow} alt="icon"/>
        </Btn>
      </Left>
      <Right>
          <Image src={home} alt="Description" /> 
          <Blok>
            <Check>
              <Imge src={check} alt="icon"/>
            </Check>
            <Text>Experienced nannies <br/> <span>15,000</span></Text>
          </Blok>
      </Right>
        </Main>
        
      </Wrap>
      
    </Container>
  );
}

export default Home;