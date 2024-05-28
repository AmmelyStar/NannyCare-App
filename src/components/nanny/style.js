import styled from 'styled-components';
import { redTheme, Green, Gray } from '../theme/theme'
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
position: relative;

`;


export const Location= styled.div`
display: flex;
gap: 8px;
line-height: 24px;
font-size: 16px;
font-weight: 600;

`;
export const Img = styled.img`
width: 16px;
height: 16px;
position: absolute;
top: 2px;
left: -20px;

`;

export const HeaderCard = styled.div`
display: flex;
justify-content: space-between;

`;




export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
`;





export const Rating = styled.div`
color: black;
background-color: weight;
`;

export const Price = styled.div`
color: black;
background-color: weight;
`;


export const Description = styled.div`
color: black;
background-color: weight;
`;



export const KidsAge = styled.div`
color: black;
background-color: weight;
`;

export const Experience = styled.div`
color: black;
background-color: weight;
`;

export const Age = styled.div`
color: black;
background-color: weight;
`;


export const NumberExper = styled.div`
color: black;
background-color: weight;
`;


export const TextExper= styled.div`
color: black;
background-color: weight;
`;


export const Education = styled.div`
color: black;
background-color: weight;
`;


export const Characters = styled.div`
color: black;
background-color: weight;
`;


export const Heart = styled.div`

`;