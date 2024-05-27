import React, { useState, useEffect } from 'react';
import { fetchDataFromDatabase } from '../../store/api';
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
            <Avatar src={nanny.avatar_url} alt="Nanny Avatar" />
            <InfoContainer>
              <Nanny>Nanny</Nanny>
              <Name>{nanny.name}</Name>
              <Age>{nanny.birthday}</Age>
              <Experience>{nanny.experience}</Experience>
              <KidsAge>{nanny.kids_age}</KidsAge>
              <Location>{nanny.location}</Location>
              <Rating>Rating: {nanny.rating}</Rating>
              <Price>Price / 1 hour: {nanny.price}</Price>
              <Description>{nanny.description}</Description>
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
