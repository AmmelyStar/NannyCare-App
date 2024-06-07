import styled from 'styled-components';
import { Button } from '../common/btn/Button';
import { redTheme, blueTheme, greenTheme, accentGray, Gray } from '../theme/theme'
 import Select from 'react-select';
export const Container = styled.div`
  padding: 44px;

`;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 20px;
  color: black;
`;

export const SubTitle = styled.h3`
 font-size: 16px;
line-height: 20px;
font-weight: 400;
color: ${Gray.color};
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
   display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
    margin-bottom: 16px;
`;

export const InputSmall = styled.input`
 padding: 16px 18px;
  border-radius: 12px;
  width: 194px;
    height: 18px;
    border: 1px solid rgba(17, 16, 28, 0.1);
     &:hover, 
     :active,
     :focus {
      background-color: 1px solid rgba(17, 16, 28, 0.1);
          border: 1px solid red;
    }

      &::placeholder {
    color: black;
  }

`;


export const StyledSelect = styled(Select)`
  .css-13cymwt-control {
    width: 232px;
    height: 52px;
    border-radius: 12px;
    border: 1px solid rgba(17, 16, 28, 0.1);
    font-size: 16px;
    color: black;
    background-color: #fff;
     &:hover, 
    &:active,
    &:focus {
      border: 1px solid red;
    }
     &::placeholder {
    color: black;

  
  }

   
  }

  .css-1nmdiq5-menu {
    width: 150px;

   margin-left: 84px;
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
     border-radius: 12px;
      padding: 15px;

       &:hover {
      border: 1px solid red; /* Применение стиля при наведении */
    }

    &:focus {
      border: 1px solid red; /* Применение стиля при фокусе */
    }


      &::placeholder {
    color: black;
    /* width: 150px;
    height: 100px;  */
    padding: 15px;

   
  }


  .css-26l3qy-menu {
      background-color: transparent; 
    }
  }

  
  .css-1fdsijx-ValueContainer{
    padding-left: 16px;
  }

    .css-1u9des2-indicatorSeparator{
      display: none;

    }

      .css-tj5bde-Svg{
      display: none;

    }

  .cVOyyN .css-qbdosj-Input{
     &::placeholder {
    color: black;
  }
  }

  .css-qbdosj-Input{
        color: black;
         &::placeholder {
    color: black;
  }
  }

   .css-t3ipsp-control{
    width: 232px;
    height: 52px;
   }

  .react-select__option {
    font-size: 16px;
    color: black;
    background-color: transparent;

   

    &.react-select__option--is-selected {
      background-color: none;
    }
  }
`;


export const FormField = styled.div`

`;





export const Input = styled.input`
  width: 436px;
  padding: 16px 18px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;
  margin-bottom: 16px;

   &:hover, 
     :active,
     :focus {
      /* background-color: rgba(17, 16, 28, 0.1); */
      border: 1px solid rgba(17, 16, 28, 0.1);
    }
  &::placeholder {
    color: black;
  }
`;

export const Textarea = styled.textarea`
  width: 436px;
  padding: 16px 18px;
    border: 1px solid rgba(17, 16, 28, 0.1);
  border-radius: 12px;
    margin-bottom: 16px;
    &::placeholder {
    color: black;
  }
`;

export const Btn = styled(Button)`
background-color: ${redTheme.mainColor};
width: 100%;
margin-top: 24px;

`;

export const Name = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: black;
span{
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 16px;
  color: rgba(138, 138, 137, 1);
}
`;

export const Nanny = styled.img`
width: 44px;
height: 44px;
border-radius: 15px;


`;

export const NannyAva = styled.div`
display: flex;
gap: 14px;
align-items: center;
margin-bottom: 40px;
`;