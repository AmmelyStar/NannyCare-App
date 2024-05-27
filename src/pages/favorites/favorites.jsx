import React from 'react';
import { FavoritesContainer, FavoritesTitle, HeaderContainer } from './styled';
import Header from '../../components/header/Header';

export const Favorites = () => {
  return (
    <FavoritesContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <FavoritesTitle> Favorites Page</FavoritesTitle>
    </FavoritesContainer>
  );
};

export default Favorites;
