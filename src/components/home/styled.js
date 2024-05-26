import styled from 'styled-components';
import { Button } from '../common/btn/Button.js';
import { redTheme, blueTheme, greenTheme, accentGray, Gray } from '../../components/theme/theme'


export const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;
height: 736px;
      width: 1376px;

`;
export const Wrap = styled.div`
display: flex;
flex-direction: column;
 background-color: ${redTheme.mainColor};
 border-radius: 30px;
 width: 1376px;

`;
export const Main = styled.div`
display: flex;
position: relative;


`;

export const Title = styled.h1`
font-weight: 400;
font-size: 28px;
  line-height: 30px;
  `;

export const Accent= styled.p`
  font-size: 70px;
    line-height: 70px;
    font-weight: 500;
`;

export const Btn = styled(Button)`
width: 231px;
height: 60px;
display: flex;
font-size: 20px;
line-height: 24px;
gap: 18px;
padding: 18px 40px;
position: relative;
margin-top: 64px;
&:hover,
:active, 
:focus{
border: 1px solid ${accentGray.color}; 
}


  &:hover img {
    transform: rotate(2deg);

  }
`;

export const Left= styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
justify-content: center;
  padding-left: 96px;
    padding-right: 64px;

`;

export const Img = styled.img`
  transform: rotate(-45deg); 
  width: 28px;
  position: absolute;
  top: 25%; 
  left: 70%;
`;

export const Right= styled.div`
  display: flex;
  height: 736px;
  position: relative;
`;

export const Image= styled.img`
width: 699px;
height: 736px;
  border-radius: 30px;

  
`;



export const Blok= styled.div`
  display: flex;
background-color: white;
border-radius: 30px;
position: absolute;
z-index: 1000;
padding: 32px;
gap: 16px;
justify-content: center;
text-align: center;
bottom: 50px;
right: 50px;

`;

export const Check= styled.div`
  display: flex;
width: 54px;
height: 54px;
background-color: ${redTheme.mainColor};
border-radius: 13px;
justify-content: center;


`;

export const Imge= styled.img`
padding: 12px;
`;

export const Text= styled.div`
  display: flex;
  flex-direction: column;
  color: ${Gray.color};
  font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: start;
  span{
    color: black;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
  }



`;
