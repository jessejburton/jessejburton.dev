import React from 'react'
import styled from 'styled-components';

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Jesse J Burton<span>FULLSTACK DEVELOPER</span></h1>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
    grid-area: header;
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
      bottom: 0;
      opacity: .4;
    }

    h1 {
      margin: 0;
      font-family: 'Raleway';
      font-size: 3.2rem;
      font-weight: 700;
      position: absolute;
      bottom: 4rem;
      left: 0;
      letter-spacing: 3px;

      span {
        font-weight: 300;
        position: relative;
        font-size: 1.6rem;
        display: inline-block;
        transform: translate(-100%,110%);
        letter-spacing: 1px;
      }
    }
`;