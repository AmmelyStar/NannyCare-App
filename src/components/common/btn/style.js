import styled from 'styled-components';

export const Btn = styled.button`
  background-color: ${(props) => props.bgColor || '#007bff'};
  color: ${(props) => props.textColor || 'transporant'};
  border: none;
  padding: 14px 40px;
  font-size: ${(props) => props.fontSize || '1rem'};
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverBgColor || '#0056b3'};
  }

  &:focus {
    outline: none;
  }
`;