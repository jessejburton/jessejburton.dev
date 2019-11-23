import React from 'react'
import styled from 'styled-components'
import { black, white, fontColor, color4 } from '../theme/theme'
import Header from './Header'
import Footer from './Footer'
import bgImage from '../images/main-menu-bg.jpg';

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
    </StyledSection>
  )
}
export default Layout;

Layout.defaultProps = {
  bgColor: black,
  fontColor: white
}

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
    background-size: cover;
    opacity: .4;
    pointer-events: none;
    z-index: 0;
  }

  main {
    padding-top: 100px;
    grid-area: main;
    grid-column-start: content;
    grid-column-end: content;
    z-index: 100;
  }
`;