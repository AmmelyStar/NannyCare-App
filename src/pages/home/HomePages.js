import React from 'react';
import Header from '../../components/header/Header';
import Home from '../../components/home/Home';
import  {Container}  from './styled';

const HomePage = () => {
  return (
    <>
      <Container>
         <Header />
      <Home />
      </Container>
     
    </>
  );
};

export default HomePage;