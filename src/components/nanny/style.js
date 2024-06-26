import styled from 'styled-components';
import { redTheme, Green, Gray } from '../theme/theme'
import { Button } from '../common/btn/Button';


export const CardContainer = styled.div`
width: 1184px;
border-radius: 24px;
color: black;
background-color: white;
display: flex;
margin: 32px auto;
padding: 24px;
gap: 24px;



`;

export const Wrap = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 30px;
  border: 1px solid ${redTheme.accentColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
    position: relative; 
`;

export const AvatarContainer = styled.div`

  width: 96px;
  height: 96px;
  border-radius: 30px; // Ensuring the container has a consistent border radius
  overflow: hidden; // Ensuring the image does not overflow the container
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // Ensure the image covers the entire area without being squished
`;

export const Circle = styled.div`
  position: absolute;
  top: 10px; 
  right: 14px; 
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${Green.color};
  border: 4px solid white; 
`;

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 14px;
`;


export const HeaderCard = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 24px;

`;


export const Wrapper = styled.div`
color: black;
background-color: weight;
gap: 8px;
display: flex;
flex-direction: column;
`;

export const Nanny = styled.div`
color: ${Gray.mainColor};
line-height: 24px;
font-size: 16px;

`;


export const Name = styled.div`
line-height: 24px;
font-size: 24px;

`;

export const Details = styled.div`
display: flex;
font-weight: 600;
margin: 0;
justify-content: center;
text-align: center;



`;


export const Location= styled.div`
display: flex;
line-height: 24px;
font-size: 16px;
margin-top: -3px;
margin-right: 32px;
margin-left: 8px;
position: relative;
padding-top: 6px;


`;


export const Img = styled.img`
width: 16px;
height: 16px;
position: absolute;
top: 3px;
left: -24px;
padding-top: 6px;

`;

export const ImgStar = styled.img`
width: 16px;
height: 16px;
position: absolute;
top: 0;
left: -20px;
padding-top: 6px;


`;


export const Rating = styled.div`
position: relative;
margin-left: 16px;
margin-right: 16px;
padding-top: 6px;

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    bottom: 0;
    right: 110px;
    width: 1px;
    height: 16px;
    background-color: rgba(17, 16, 28, 0.2);
    margin-right:6px;
  }


  &::after {
    content: '';
    position: absolute;
    top: 6px;
    bottom: 0;
    right: -18px;
    width: 1px;
    height: 16px;
    background-color: rgba(17, 16, 28, 0.2);
   
    
  }
`;

export const Price = styled.div`
margin-left: 16px;
margin-right: 48px;
padding-top: 6px;
span{
color: ${Green.color};
}

`;



export const Description = styled.div`
color: rgba(17, 16, 28, 0.5);
margin-bottom: 14px;
font-weight: 400;


`;





export const BubbleContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;
margin-bottom: 24px;
color: rgba(138, 138, 137, 1);
  font-weight: 500;
span{
  color: black;
  font-weight: 600;
}
`;




export const BtnMore = styled.div`
border-bottom: black 2px solid;
color: black;
  width: 84px;
  cursor: pointer;
`;

export const Heart = styled.div`
cursor: pointer;

`;
export const ReviewContainer = styled.div`
gap: 25px;
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
margin-top: 48px;

`;

export const Review = styled.div`
  display: flex;
flex-direction: column;
`;
export const ContCont = styled.div`
  display: flex;
  gap: 12px;
  margin: 0;
`;

export const ImgRew = styled.img`
position: absolute;
top: -1px;
 left: -24px;
 width: 16px;
 height: 16px;

`;

export const NameRew = styled.div`
margin-bottom: 4px;
  font-size: 14px;
  line-height: 20px;



`;


 export const RewRating = styled.div`
 display: flex;
 gap: 8px;
 position: relative;
  left: 8px;
  font-size: 14px;
  line-height: 16px;
  justify-content: start;



 `;

export const Ava = styled.div`
 width: 44px;
 height: 44px;
 border-radius: 50px;
 background-color: ${redTheme.accentColor};
${redTheme.accentColor};
display: flex;
justify-content: center;
text-align: center;
color: ${redTheme.mainColor};
font-size: 20px;
line-height: 20px;
align-items: center;
margin: 0;
 `;

 
export const Cont = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
gap: 8px;
 `;

 export const Comment = styled.div`
color: ${Gray.color};
font-size: 16px;
line-height:  20px;
margin-top: 16px;
 `;


 export const BtnApp = styled(Button)`
color:white;
 background-color: ${redTheme.mainColor};

 &:hover,
 :active,
 :focus{
  border:  1px solid ${redTheme.mainColor};
  color: ${redTheme.mainColor};
 background-color: white;

 }
 `;

