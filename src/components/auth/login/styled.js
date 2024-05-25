import styled from 'styled-components';
 import { redTheme, blueTheme, greenTheme, accentGray, Gray } from '../../theme/theme.js'

 export const Container = styled.div`
  width: 438px;
  height: 362px;
  padding: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const Title = styled.h3`
font-size: 40px;
line-height: 48px;
color: black;
text-align: start;
margin-bottom: 20px;
`;

export const SubTitle = styled.p`
font-size: 16px;
line-height: 20px;
font-weight: 400;
color: ${Gray.color};
`;

export const Wrap = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 40px;
`;

export const Form = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
justify-content: center;
text-align: center;
margin: 0 auto;

`;


export const Input = styled.input`
border: 1px solid rgba(169, 169, 169, 0.5);
border-radius: 12px;
padding: 18px;
position: relative;
`;


export const BtnLog = styled.button`
background-color: ${redTheme.mainColor};
border-radius: 30px;
padding: 18px 196px;
width: 438px;
height: 52px;
border: none;
color:white;
margin-top: 22px;
`;



export const EyeIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  bottom: 36%;
right: 17%;
`;