import styled from 'styled-components';
import { Button } from '../common/btn/Button';
import { redTheme, blueTheme, greenTheme, accentGray, Gray } from '../theme/theme'
 
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

export const FormField = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Btn = styled(Button)`
background-color: ${redTheme.mainColor};
width: 100%;

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