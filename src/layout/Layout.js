import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { black, white } from '../theme/theme'
import Header from './Header'
import Footer from './Footer'
import bgImage from '../images/main-menu-bg.jpg'
import planet from '../images/planet.png'
import mars from '../images/mars.jpg'
import { TimelineMax, Linear } from 'gsap'

const Layout = ({ children, bgColor, fontColor }) => {

  let planetContainerRef = useRef(null);
  let planetRef = useRef(null);

  useEffect(() => {
    var tl = new TimelineMax({ repeat: -1 })
    tl.to(planetContainerRef, 120, { rotation: 360, transformOrigin: "0px", ease: Linear.easeNone, repeat: -1 })
    tl.to(planetRef, 120, { rotation: -360, ease: Linear.easeNone, repeat: -1 }, 0);

  }, []);

  return (
    <StyledSection
      bgColor={bgColor}
      fontColor={fontColor}>
      <div className="background"></div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <Planet ref={el => { planetContainerRef = el }}>
        <img src={planet} alt="planet" ref={el => { planetRef = el }} />
      </Planet>
      <FrontPlanet />
    </StyledSection>
  )
}
export default Layout;

Layout.defaultProps = {
  bgColor: black,
  fontColor: white
}

const Planet = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 0;
  bottom: 0px;
  overflow: visible;
  transform: rotate(50deg);

  img {
    height: 600px;
    z-index: 1;
    opacity: 0.8;
  }
`;

const FrontPlanet = styled.div`
    position: absolute;
    left: -50%;
    top: 65%;
    width: 2200px;
    height: 2200px;
    border-radius: 50%;
    background:
      radial-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.0) 100%),
      url(${mars});
    background-size: 2200px;
    box-shadow:
      0px 0px 100px 30px rgba(108,8,166,1),
      inset 0px 0px 100px 10px rgba(255,179,112,0.6);
    z-index: 5;
    animation: planetSpin 720s linear infinite;

  @keyframes planetSpin {
    from { 	background-position: 0; transform: rotate(0) }
    to   {  background-position: 2200px; transform: rotate(360) }
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

  .background {
    position: absolute;
    width: 120vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-image: url(${bgImage});
    filter: brightness(60%);
    background-size: cover;
    opacity: .4;
    pointer-events: none;
    z-index: 0;
    animation: bgMove 30s ease infinite;
  }

  @keyframes bgMove {
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