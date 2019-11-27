import React, { useRef } from "react"
import Layout from '../layout/Layout'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import menuClick from '../sounds/menu-click.wav'
import menuSelect from '../sounds/menuSelect.wav'
import UIfx from 'uifx';
import { connect } from 'react-redux'
import { gsap, Power2, Linear } from 'gsap'

const Home = ({ volume }) => {

  const menuClickSound = new UIfx(menuClick, { throttleMs: 75 });
  const menuSelectSound = new UIfx(menuSelect, { throttleMs: 75 });

  let menuButton = useRef(null);

  function onMenuHover() {
    menuClickSound.play(parseFloat(volume));
  }

  function handleMenuClick(e) {
    menuSelectSound.play(parseFloat(volume));



  }

  return (
    <Layout>
      <StyledSectionContent>
        <div>
          <StyledNavigation>
            <li onMouseEnter={onMenuHover} onClick={handleMenuClick}>
              <Link to="/menu">About Me<FontAwesomeIcon icon={faArrowCircleRight} /></Link>
            </li>
            <li onMouseEnter={onMenuHover} onClick={handleMenuClick}>
              <Link to="/menu">Projects<FontAwesomeIcon icon={faArrowCircleRight} /></Link>
            </li>
            <li onMouseEnter={onMenuHover} onClick={handleMenuClick}>
              <Link to="/menu">UI Design<FontAwesomeIcon icon={faArrowCircleRight} /></Link>
            </li>
            <li onMouseEnter={onMenuHover} onClick={handleMenuClick}>
              <Link to="/menu">My Code<FontAwesomeIcon icon={faArrowCircleRight} /></Link>
            </li>
            <li onMouseEnter={onMenuHover} onClick={handleMenuClick}>
              <Link to="/menu">My Setup<FontAwesomeIcon icon={faArrowCircleRight} /></Link>
            </li>
          </StyledNavigation>
        </div>
      </StyledSectionContent >
    </Layout >
  )
}

const mapStateToProps = (state) => ({
  volume: state.audioSettings.volume
})
export default connect(mapStateToProps)(Home);

const StyledSectionContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 50% 50%;
  font-family: 'Raleway', sans-serif;
  font-size: 2.8rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

const StyledNavigation = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;

  li {
    width: 100%;
  }

  a, a:link {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: block;
    width: 100%;
    height: 6.5rem;
    padding: 1.5rem 2rem;
    transition: all .3s ease;
    font-weight: 300;
    border-top: 1px solid rgba(255,255,255,0);
    border-bottom: 1px solid rgba(255,255,255,0);
    border-left: 5px solid rgba(255,255,255,0);
    background-color: rgba(255,255,255,0);
  }

  a svg {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translate(-2rem, -50%);
    font-size: 2.8rem;
    opacity: 0;
    transition: all .3s ease;
  }

  a:hover svg {
    opacity: 0.9;
    transform: translate(0, -50%);
  }

  a:hover {
    background: linear-gradient(to right, rgba(255,255,255,.2), rgba(255,255,255,0));
    letter-spacing: 1.5px;
    font-weight: 500;
    border-top: 1px solid rgba(255,255,255,.4);
    border-bottom: 1px solid rgba(255,255,255,.4);
    border-left: 5px solid rgba(255,255,255,.6);
  }
`;

