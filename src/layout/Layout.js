import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { black, white } from '../theme/theme'
import Header from './Header'
import Footer from './Footer'
import bgImage from '../images/main-menu-bg.jpg'
import planet from '../images/planet.png'
import bgVideo from '../videos/bg3.mp4'
import mars from '../images/mars.jpg'
import { Power1, TimelineMax } from 'gsap'

const Layout = ({ children, bgColor, fontColor }) => {

  let bgVideoRef = useRef(null);
  let planetRef = useRef(null);

  useEffect(() => {
    bgVideoRef.play();

    const tl = new TimelineMax({ repeat: -1 })
    tl.to(planetRef, 10, { x: -20, y: -20, ease: Power1.easeInOut })
      .to(planetRef, 10, { x: 0, y: -20, ease: Power1.easeInOut })
      .to(planetRef, 10, { x: 0, y: 0, ease: Power1.easeInOut })
  })

  return (
    <StyledSection
      bgColor={bgColor}
      fontColor={fontColor}>
      <div className="background">
        <div className="overlay"></div>
        <video loop muted ref={el => bgVideoRef = el}>
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <Planet ref={el => planetRef = el}>
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
  position: absolute;
  width: 600px;
  height: 600px;
  right: -100px;
  bottom: -100px;
  transform: rotate(15deg);

  img {
    height: 600px;
    z-index: 1;
    opacity: 0.8;
}
`;

const FrontPlanet = styled.div`
  position: absolute;
  top: 50%;
  left: -20%;
  width: 1024px;
  height: 1024px;
  border-radius: 50%;
    background: radial-gradient(#000000, transparent), url(${mars});
          background-size: 2048px 1024px;
          box-shadow:
            0px 0px 100px 30px rgba(108,8,166,0.6),
            0px 0px 20px 0px rgba(255,255,255,1),
            inset 0px 0px 30px 20px rgba(255,255,255,0.4);
          z-index: 5;
          animation: planetSpin 720s linear infinite;

  @keyframes planetSpin {
    from {background-position: 0; }
    to   {background-position: 2048px; }
  }
`;

const StyledSection = styled.section`
  position: relative;
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
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: .4;

    .overlay {
      position: absolute;
      width: 100vw;
      height: 100vh;
      background-color: rgba(108,8,166,0.5);
      z-index: 1;
    }

    video {
      position: absolute;
      width: 100%;
      right: 0;
      z-index: 0;
    }
  }

  main {
      grid-area: main;
      grid-column-start: content;
      grid-column-end: content;
      z-index: 100;
  }
`;