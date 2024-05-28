import React, { useState, useEffect } from 'react';
import { fetchDataFromDatabase } from '../../store/api';
import fav from '../../img/icons/favorite.svg'
import location from '../../img/icons/location.svg';
import star from '../../img/icons/Star.svg';
import { Bubble } from '../common/bubble/Bubble';
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
  Heart,
  Wrap,
  AvatarContainer,
  Circle,
  Wrapper,
  Details,
  Img,
  HeaderCard,
  ImgStar,
  BubbleContainer,
  BtnMore,
  Review,
  ReviewContainer
} from './style';

export const NannyCard = () => {
  const [nannyData, setNannyData] = useState(null);
  const [showReviews, setShowReviews] = useState([]);

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

  const calculateAge = birthday => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleToggleReviews = index => {
    setShowReviews(prevState => {
      const newShowReviews = [...prevState];
      newShowReviews[index] = !newShowReviews[index];
      return newShowReviews;
    });
  };

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
                    <Img src={location} alt="Location icon" />
                    {nanny.location}
                  </Location>
                  <Rating>
                    <ImgStar src={star} alt="Rating star" />
                    Rating: {nanny.rating}
                  </Rating>
                  <Price>
                    Price / 1 hour: <span>{nanny.price_per_hour}$</span>
                  </Price>
                  <Heart>
                    <img src={fav} alt="Favorite icon" />
                  </Heart>
                </Details>
              </HeaderCard>
              <BubbleContainer>
                <Bubble>
                  Age: <span>{calculateAge(nanny.birthday)}</span>
                </Bubble>
                <Bubble>
                  Experience: <span>{nanny.experience}</span>
                </Bubble>
                <Bubble>
                  Kids Age: <span>{nanny.kids_age}</span>
                </Bubble>
                <Bubble>
                  Characters:{' '}
                  {nanny.characters.map((character, i) => (
                    <span key={i}>
                      {character}
                      {i !== nanny.characters.length - 1 && ', '}
                    </span>
                  ))}
                </Bubble>
                <Bubble>
                  Education: <span>{nanny.education}</span>
                </Bubble>
              </BubbleContainer>
              <Description>{nanny.about}</Description>
              <BtnMore onClick={() => handleToggleReviews(index)}>
                {showReviews[index] ? 'Hide reviews' : 'Read more'}
              </BtnMore>
              {showReviews[index] && (
                <ReviewContainer>
                  {nanny.reviews.map((review, i) => (
                    <Review key={i}>
                      <p>
                        <strong>{review.reviewer}</strong>
                      </p>
                      <p>Rating: {review.rating}</p>
                      <p>{review.comment}</p>
                    </Review>
                  ))}
                </ReviewContainer>
              )}
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
