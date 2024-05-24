import React from 'react';
import { Container, Title, Left, Right, Image } from './styled.js'; // Предполагается, что у вас есть компоненты Left, Right и Image
import { Button } from '@mui/material';

function Home() {
  return (
    <Container>
      <Left>
        <Title>
          <span>Make Life Easier for the Family:</span> Find Babysitters Online for All Occasions
        </Title>
        <Button variant="contained" color="primary">Get Started</Button> 
      </Left>
      <Right>
        <Image src="../home.jpeg" alt="Description" /> 
      </Right>
    </Container>
  );
}

export default Home;