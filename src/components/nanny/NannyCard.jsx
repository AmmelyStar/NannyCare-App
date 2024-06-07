import React, { useState, useEffect } from 'react';
import { fetchDataFromDatabase } from '../../store/api';
import fav from '../../img/icons/favorite.svg';
import favFilled from '../../img/icons/favorite_filled.svg';
import location from '../../img/icons/location.svg';
import star from '../../img/icons/Star.svg';
import { Bubble } from '../common/bubble/Bubble';
import { Appointment } from '../appointment/Appointment';
import { Modal } from '../common/modal/Modal';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid'; // Імпортуємо бібліотеку uuid
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
  ReviewContainer,
  ImgRew,
  NameRew,
  RewRating,
  Ava,
  Cont,
  Comment,
  ContCont,
  BtnApp,
} from './style';

export const StyledModal = styled(Modal)`
  background-color: rgba(17, 16, 28, 0.1);
`;

const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

const saveFavoritesToLocalStorage = favorites => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const NannyCard = () => {
  const [nannyData, setNannyData] = useState(null);
  const [showReviews, setShowReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNanny, setSelectedNanny] = useState(null);
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

  useEffect(() => {
    fetchDataFromDatabase()
      .then(dataSnapshot => {
        console.log('Received data from database:', dataSnapshot);
        // Додамо унікальний ідентифікатор для кожного об'єкта перед рендерингом
        const dataWithIds = dataSnapshot.map(nanny => ({
          ...nanny,
          id: uuidv4(), // Генеруємо унікальний ідентифікатор за допомогою v4
        }));
        setNannyData(dataWithIds);
        setShowReviews(Array(dataWithIds.length).fill(false));
      })
      .catch(error => {
        console.error('Error fetching data from database:', error);
      });
  }, []);

   useEffect(() => {
     const favoritesFromStorage = getFavoritesFromLocalStorage();
     setFavorites(favoritesFromStorage);
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

  function formatRating(rating) {
    return Number.isInteger(rating) ? `${rating}.0` : rating;
  }

  function formatingRating(rating) {
    return parseFloat(rating).toFixed(1);
  }

  const handleOpenModal = nanny => {
    setSelectedNanny(nanny);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



 const handleFavoriteToggle = nanny => {
   // Перевірка, чи обрана няня є в списку обраних
   const isCurrentlyFavorite = isFavorite(nanny.id);

   // Якщо няня вже в обраних, видалимо її зі списку
   if (isCurrentlyFavorite) {
     const updatedFavorites = favorites.filter(fav => fav.id !== nanny.id);
     setFavorites(updatedFavorites);
     saveFavoritesToLocalStorage(updatedFavorites);
   } else {
     // Якщо няня не в обраних, додамо її до списку
     const updatedFavorites = [...favorites, nanny];
     setFavorites(updatedFavorites);
     saveFavoritesToLocalStorage(updatedFavorites);
   }
 };



 const isFavorite = nannyId => {
   return favorites.some(fav => fav.id === nannyId);
  };
  localStorage.getItem('favorites');

  return (
    <div>
      {nannyData ? (
        nannyData.map((nanny, index) => (
          <CardContainer key={nanny.id}>
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
                    Rating: {formatingRating(nanny.rating)}
                  </Rating>
                  <Price>
                    Price / 1 hour: <span>{nanny.price_per_hour}$</span>
                  </Price>
                  <Heart onClick={() => handleFavoriteToggle(nanny)}>
                    <img
                      src={isFavorite(nanny.id) ? favFilled : fav}
                      alt="Favorite icon"
                    />
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
              {!showReviews[index] && (
                <BtnMore onClick={() => handleToggleReviews(index)}>
                  <strong>Read more</strong>
                </BtnMore>
              )}
              {showReviews[index] && (
                <ReviewContainer>
                  {nanny.reviews.map((review, i) => (
                    <Review key={i}>
                      <ContCont>
                        <Ava>
                          <strong>{review.reviewer.charAt(0)}</strong>
                        </Ava>
                        <Cont>
                          {' '}
                          <NameRew>
                            <strong>{review.reviewer}</strong>
                          </NameRew>
                          <RewRating>
                            <ImgRew src={star} alt="Rating star" />
                            <strong>{formatRating(review.rating)}</strong>
                          </RewRating>
                        </Cont>
                      </ContCont>

                      <Comment>{review.comment}</Comment>
                    </Review>
                  ))}
                  <BtnApp onClick={() => handleOpenModal(nanny)}>
                    Make an appointment
                  </BtnApp>
                </ReviewContainer>
              )}
            </InfoContainer>
          </CardContainer>
        ))
      ) : (
        <p>Loading...</p>
      )}
      {isModalOpen && selectedNanny && (
        <StyledModal onClose={handleCloseModal}>
          <Appointment
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            nanny={selectedNanny}
          />
        </StyledModal>
      )}
    </div>
  );
};

export default NannyCard;