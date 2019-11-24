import React from "react"
import { useSpring, animated } from 'react-spring'
import Layout from '../../layout/Layout'
import styled from 'styled-components'
import { white, color4, color4rgb, color1 } from '../../theme/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpress, faReact } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {

  const inLeft = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(-50px)' },
    delay: 700,
    config: { duration: 600 }
  });

  const inRight = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 1300,
    config: { duration: 600 }
  });

  return (
    <Layout>
      <h1 style={{ fontFamily: "Raleway", position: "absolute", fontSize: "3rem", fontWeight: "700", top: "7rem", left: "50%", transform: "translateX(-50%)" }}>Websites</h1>
      <StyledSectionContent>
        <div className="card">
          <div class="card__image">
            <img src="https://picsum.photos/250/100" alt="Website 1" />
          </div>
          <div className="card__details">
            <h2>Toko-pa</h2>
            <hr />
            <a href="http://www.toko-pa.com">www.toko-pa.com</a>
          </div>
          <div className="card__icons">
            <FontAwesomeIcon icon={faWordpress} />
          </div>
        </div>
        <div className="card">
          <div class="card__image">
            <img src="https://picsum.photos/250/100?2" alt="Website 1" />
          </div>
          <div className="card__details">
            <h2>JesseJBurton</h2>
            <hr />
            <a href="http://www.jessejburton.dev">www.jessejburton.dev</a>
          </div>
          <div className="card__icons">
            <FontAwesomeIcon icon={faReact} />
          </div>
        </div>
        <div className="card">
          <div class="card__image">
            <img src="https://picsum.photos/250/100?3" alt="Website 2" />
          </div>
          <div className="card__details">
            <h2>SSCY</h2>
            <hr />
            <a href="http://www.saltspringcentre.com">www.saltspringcentre.com</a>
          </div>
          <div className="card__icons">
            <FontAwesomeIcon icon={faWordpress} />
          </div>
        </div>
      </StyledSectionContent>
    </Layout>
  )
}
export default Projects

const StyledSectionContent = styled.div`
  width: 90rem;
  display: flex;
  justify-content: space-between;
  font-family: 'Raleway', sans-serif;

  .card {
    display: grid;
    grid-template-rows: 100px 2fr 1fr;
    grid-template-areas:
      'top'
      'middle'
      'bottom';
    width: 250px;
    height: 350px;
    box-shadow: 0 0 20px 5px rgba(${color4rgb}, 0.6);
    border: 1px solid rgba(${color4rgb}, .8);
  }

  .card__image {
    grid-area: top;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .card__details {
    grid-area: middle;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem 0;

    h2 {
      margin: 0;
      text-align: center;
      font-size: 2.4rem;
      text-transform: uppercase;
      font-weight: 900;
    }
    a,
    a:link {
      display: block;
      font-size: 1.8rem;
      text-align: center;
      text-decoration: none;
      color: inherit;
    }

    hr {
      border: none;
      height: 2px;
      width: 6rem;
      background-color: ${color1}
    }
  }

  .card__icons {
    grid-area: bottom;
    color: ${white};
    background-color: ${color1};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;

    svg {
      filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
    }
  }
`;
