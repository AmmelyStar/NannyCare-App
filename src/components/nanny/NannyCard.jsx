import React, { useState, useEffect } from 'react';
import { fetchDataFromDatabase } from '../../store/api';
import fav from '../../img/icons/favorite.svg'
import location from '../../img/icons/location.svg';
import {
  CardContainer,
  Avatar,
  InfoContainer,
  Name,
  Location,
  Rating,
  Price,
  Description,
  Nanny,
  KidsAge,
  Experience,
  Age,
  NumberExper,
  TextExper,
  Education,
  Characters,
  Heart,
  Wrap,
  AvatarContainer,
  Circle,
  Wrapper,
  Details,
  Img,
  HeaderCard,
} from './style';

export const NannyCard = () => {
  const [nannyData, setNannyData] = useState(null);

  useEffect(() => {
    fetchDataFromDatabase()
      .then(dataSnapshot => {
        console.log('Received data from database:', dataSnapshot);
        setNannyData(dataSnapshot); // Устанавливаем данные в состояние компонента
      })
      .catch(error => {
        console.error('Error fetching data from database:', error);
      });
  }, []);

  return (
    <div>
      {nannyData ? (
        nannyData.map((nanny, index) => (
          <CardContainer key={index}>
            <Wrap>
              <AvatarContainer>
                <Avatar src={nanny.avatar_url} alt="Nanny Avatar" />
                <Circle />
              </AvatarContainer>
            </Wrap>
            <InfoContainer>
              <HeaderCard>
                <Wrapper>
                  <Nanny>Nanny</Nanny>
                  <Name>{nanny.name}</Name>
                </Wrapper>

                <Details>
                  <Location>
                    <Img src={location} alt={nanny.location} />
                    {nanny.location}
                  </Location>
                  <Rating>Rating: {nanny.rating}</Rating>
                  <Price>
                    Price / 1 hour: {nanny.price_per_hour}
                    {'$'}
                  </Price>
                  <Heart>
                    <img src={fav} alt={nanny.name} />
                  </Heart>
                </Details>
              </HeaderCard>

              <NumberExper>
                <Age>Age: {nanny.birthday}</Age>
                <Experience>Experience: {nanny.experience}</Experience>
                <KidsAge>Kids Age: {nanny.kids_age}</KidsAge>
              </NumberExper>

              <TextExper>
                <Characters>
                  Characters:
                  {nanny.characters.map((character, i) => (
                    <div key={i}> {character}</div>
                  ))}
                </Characters>
                <Education>Education: {nanny.education}</Education>
              </TextExper>

              <Description>{nanny.about}</Description>
            </InfoContainer>
          </CardContainer>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NannyCard;
