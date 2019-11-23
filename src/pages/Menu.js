import React, { useState } from "react"
import Layout from '../layout/Layout'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { color4Dark } from '../theme/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import menuClick from '../sounds/menu-click.wav'
import UIfx from 'uifx';

const Home = () => {

  const menuClickSound = new UIfx(menuClick,
    {
      volume: 0.9,
      throttleMs: 50
    });

  function onMenuHover() {
    menuClickSound.play(1);
  }

  return (
    <Layout>
      <StyledSectionContent>
        <div>
          <StyledNavigation>
            <li onMouseEnter={onMenuHover}><Link to="about">About Me<FontAwesomeIcon icon={faArrowCircleRight} /></Link></li>
            <li onMouseEnter={onMenuHover}><Link to="projects">Projects<FontAwesomeIcon icon={faArrowCircleRight} /></Link></li>
            <li onMouseEnter={onMenuHover}><Link to="ui">UI Design<FontAwesomeIcon icon={faArrowCircleRight} /></Link></li>
            <li onMouseEnter={onMenuHover} onMouseEnter={onMenuHover}><Link to="ui">My Code<FontAwesomeIcon icon={faArrowCircleRight} /></Link></li>
            <li onMouseEnter={onMenuHover}><Link to="uses">My Setup<FontAwesomeIcon icon={faArrowCircleRight} /></Link></li>
          </StyledNavigation>
        </div>
      </StyledSectionContent>
    </Layout>
  )
}

export default Home

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
    filter: drop-shadow(0 0 8px rgba(255,255,255,0.6));
  }

  a:hover {
    background: linear-gradient(to right, rgba(255,255,255,.2), rgba(255,255,255,0));
    letter-spacing: 1.5px;
    font-weight: 500;
    border-top: 1px solid rgba(255,255,255,.4);
    border-bottom: 1px solid rgba(255,255,255,.4);
    border-left: 5px solid rgba(255,255,255,.6);
    text-shadow: 0 0 8px rgba(255,255,255,0.6);
  }
`;

const StyledSectionContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  font-family: 'Raleway', sans-serif;
  font-size: 2.8rem;
  font-weight: 500;
  letter-spacing: 1px;
`;
