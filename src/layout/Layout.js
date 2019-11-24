import React from 'react'
import styled from 'styled-components'
import { black, white } from '../theme/theme'
import Header from './Header'
import Footer from './Footer'
import bgImage from '../images/main-menu-bg.jpg'
import planet from '../images/planet.png'

const Layout = ({ children, bgColor, fontColor }) => {
  return (
    <StyledSection
      bgColor={bgColor}
      fontColor={fontColor}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <Planet>
        <img src={planet} alt="planet" />
      </Planet>
    </StyledSection>
  )
}
export default Layout;

Layout.defaultProps = {
  bgColor: black,
  fontColor: white
}

const Planet = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  img {
    height: 100%;
    position: absolute;
    bottom: -20%;
    right: -10%;
    z-index: 1;
    opacity: 0.8;
    transform: rotate(45deg) translateX(20px) rotate(-45deg);
    animation: planetMove 12s linear infinite;
  }

  @keyframes planetMove {
	from { 	transform: rotate(0deg) translateX(20px) rotate(0deg); }
	to   {  transform: rotate(360deg) translateX(20px) rotate(-360deg); }
}
`;

const StyledSection = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 125px auto 100px;
  grid-template-columns: 10% [content] auto 10%;
  grid-template-areas:
    "header header header"
    "main main main"
    "footer footer footer";

  background-color: ${props => props.bgColor};
  color: ${props => props.fontColor};

  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: url(${bgImage});
    background-size: 110%;
    background-position: 0;
    opacity: .4;
    pointer-events: none;
    z-index: 0;
    animation: bgMove 30s ease infinite;
  }

  @keyFrames bgMove {
    0% {
      left: 0;
    }
    50% {
      left: -4rem;
    }
    100% {
      left: 0;
    }
  }

  main {
    grid-area: main;
    grid-column-start: content;
    grid-column-end: content;
    z-index: 100;
  }
`;