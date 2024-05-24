import styled from 'styled-components';
import { redTheme, blueTheme, greenTheme } from '../../components/theme/theme'


export const Container = styled.div`
  display: flex;
  width: 1440px;
margin: 32px;
  flex-direction: column;
  border-radius: 30px;


  height: 100vh;
  background-color: ${redTheme.mainColor};
  text-align: center;
`;


