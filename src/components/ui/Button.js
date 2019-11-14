import React from 'react'
import styled from 'styled-components'
import { black, color4, whitergb } from '../../theme/theme';

export const Button = ({ children }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  padding: 2rem 3rem;
  border: 2px solid ${color4};
  color: ${color4};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.6rem;
  transition: all .3s ease-in-out;
  cursor: pointer;
  background-color: rgba(255,255,255,0);

  &:hover {
    background-color: rgba(${whitergb},1);
    color: ${black};
  }

`;