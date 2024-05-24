import React from 'react';
import { Btn } from './style';

export function Button({ onClick, children, ...rest }) {
  return (
    <Btn onClick={onClick} {...rest}>
      {children}
    </Btn>
  );
}

export default Button;