import styled from 'styled-components';

export const SwitchButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: ${({ active }) => (active ? 'rgba(255, 255, 255, 0.3)' : 'transparent')};
  color: ${({ active }) => (active ? '#000' : '#fff')};
`;