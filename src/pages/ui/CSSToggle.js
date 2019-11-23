import React from "react"
import { useSpring, animated } from 'react-spring'
import Layout from '../../layout/Layout'
import styled from 'styled-components'
import { medium, small } from '../../theme/theme'
import Toggles from '../../components/ui/Toggles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const CSSToggle = () => {

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
      <StyledSectionContent>
        <animated.div style={inLeft}>
          <h1>Pure CSS Toggles</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias doloremque blanditiis nam impedit illo fugit magnam harum culpa aspernatur dolores perferendis nihil, numquam id quos sapiente sequi. Nostrum, eveniet.</p>
          <div className="icons">
            <a
              href="https://codepen.io/jessejburton/pen/qBBMwpd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCodepen} />
              <span className="tooltip">Codepen</span>
            </a>
            <a
              href="https://codepen.io/jessejburton/pen/qBBMwpd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="tooltip">Github</span>
            </a>
            <a
              href="https://codepen.io/jessejburton/pen/qBBMwpd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faReact} />
              <span className="tooltip">React Component</span>
            </a>
            <a
              href="https://codepen.io/jessejburton/pen/qBBMwpd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faNewspaper} />
              <span className="tooltip">Blog Post</span>
            </a>
          </div>
          <div className="back">
            <Link to="/menu">
              <FontAwesomeIcon icon={faAngleDoubleLeft} /> Backward
            </Link>
          </div>
          <div className="forward">
            <Link to="/physics-based-carousel">
              Forward <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Link>
          </div>
        </animated.div>
        <animated.div className="toggles" style={inRight}>
          <Toggles />
        </animated.div>
      </StyledSectionContent>
    </Layout>
  )
}
export default CSSToggle

const StyledSectionContent = styled.div`
  max-width: 110rem;
  padding: ${medium};
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: ${medium};

  h1 {
    font-size: 4rem;
    font-weight: 500;
    margin-top: 0;
    font-family: 'Raleway', sans-serif;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.8rem;
    max-width: 80rem;
    letter-spacing: 1px;
  }

  .icons {
    font-size: 3rem;
    margin: ${medium} 0 ${small} 0;

    a, a:link {
      position: relative;
      display: inline-block;
      color: inherit;
      transition: all .3s ease;
      padding-right: 1.5rem;

      .tooltip {
        position: absolute;
        display: inline-block;
        font-size: 1.2rem;
        font-weight: 200;
        opacity: 0;
        left: 50%;
        filter: blur(2px);
        transform: translate(-50%, 0rem);
        transition: all .3s ease;
        white-space: nowrap;
      }
    }

    a:hover {
      transform: scale(1.1);

      .tooltip {
        opacity: 1;
        filter: blur(0);
        transform: translate(-50%, -2rem);
      }
    }

  }

  .back,
  .forward {
    display: inline-block;
    font-size: 1.7rem;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    font-style: italic;
    text-transform: uppercase;

    a, a:link {
      color: inherit;
      text-decoration: none;
      transition: all .3s ease;
      display: inline-block;

      svg {
        position: absolute;
        opacity: 0;
        transition: all .3s ease;
        filter: blur(2px);
      }
    }

    a:hover {
      transform: scale(1.05);
      letter-spacing: 1px;
    }

    a:hover svg {
      opacity: 1;
      filter: blur(0);
    }
  }

  .back svg {
    transform: translate(-1rem, 0.15rem);
  }
  .back a:hover svg {
    transform: translate(-2rem, 0.15rem);
  }

  .forward {
    padding-left: 2rem;
  }
  .forward svg {
    transform: translate(-1rem, 0.15rem);
  }
  .forward a:hover svg {
    transform: translate(.5rem, 0.15rem);
  }

`;
