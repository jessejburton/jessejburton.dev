import React, { useRef, useState } from "react"
import Layout from '../layout/Layout'
import styled from 'styled-components'
import MenuItem from '../components/ui/MenuItem'

const Home = () => {

  const [infoText, setInfoText] = useState("Find out more about who I am");

  const handleMenuHover = (message) => {
    setInfoText(message);
  }

  return (
    <Layout>
      <StyledSectionContent>
        <div className="menu">
          <StyledNavigation>
            <MenuItem
              onMenuHover={handleMenuHover}
              link="/about"
              message="Some more information about who I am"
            >
              About Me
            </MenuItem>
            <MenuItem
              onMenuHover={handleMenuHover}
              link="/projects"
              message="See a selection of projects I am working on"
            >
              Projects
            </MenuItem>
            <MenuItem
              onMenuHover={handleMenuHover}
              link="/projects"
              message="Some of my user interface design work"
            >
              UI Design
            </MenuItem>
            <MenuItem
              onMenuHover={handleMenuHover}
              link="/projects"
              message="Writings about how I like to write code"
            >
              My Code
            </MenuItem>
            <MenuItem
              onMenuHover={handleMenuHover}
              link="/projects"
              message="The current tools, software, hardware etc. that I use"
            >
              My Setup
            </MenuItem>
          </StyledNavigation>
        </div>
        <div>
          <div className="info-text">{infoText}</div>
        </div>
      </StyledSectionContent>

    </Layout>
  )
}

export default Home;

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
  position: relative;

  .menu {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;

    .info-text {
      position: absolute;
      bottom: 0;
      left: 0;
      font-family: 'Raleway', sans-serif;
      font-size: 2.4rem;
      font-weight: 300;
      padding: 1rem 0;
      transition: all .3s ease;
    }
  }

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

