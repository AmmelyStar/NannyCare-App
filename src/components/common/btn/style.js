import styled from 'styled-components';
import { hoverBgColor, accentGray } from '../../theme/theme';


export const Btn = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid ${accentGray.color};
  padding: 14px 40px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 30px;


  &:hover,
  :focus,
  :active {
    background-color: ${hoverBgColor.color};
    border: none;
  }

 
`;