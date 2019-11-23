import React from 'react'
import styled from 'styled-components';

export const Footer = () => {
  return (
    <StyledFooter>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
    grid-area: footer;
    grid-column-start: content;
    grid-column-end: content;
    position: relative;

    &::after {
        content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      background: linear-gradient(135deg,rgba(255,255,255,0.1) 0%, rgba(255,255,255,1) 50%,rgba(255,255,255,0.1) 100%);
      top: 0;
      opacity: .4;
    }
`;