import React from "react"
import { useSpring, animated } from 'react-spring'
import Layout from '../layout/Layout'
import styled from 'styled-components'
import { medium, color4 } from '../theme/theme'
import { darken } from 'polished';
import Toggles from '../components/ui/Toggles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'

const Ui = () => {

  const inLeft = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translatex(-20px)' },
    delay: 700,
    config: { duration: 600 }
  });

  const inRight = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translatex(20px)' },
    delay: 1300,
    config: { duration: 600 }
  });

  return (
    <Layout>
      <StyledSectionContent>
        <animated.div style={inLeft}>
          <h1>UI Design</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias doloremque blanditiis nam impedit illo fugit magnam harum culpa aspernatur dolores perferendis nihil, numquam id quos sapiente sequi. Nostrum, eveniet.</p>
          <div className="icons">
            <a
              href="https://codepen.io/jessejburton/pen/qBBMwpd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCodepen} />
            </a>
            <a
              href="https://codepen.io/jessejburton/pen/qBBMwpd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://codepen.io/jessejburton/pen/qBBMwpd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faReact} />
            </a>
            <a
              href="https://codepen.io/jessejburton/pen/qBBMwpd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faNewspaper} />
            </a>
          </div>
        </animated.div>
        <animated.div className="toggles" style={inRight}>
          <Toggles />
        </animated.div>
      </StyledSectionContent>
    </Layout>
  )
}
export default Ui

const StyledSectionContent = styled.div`
  max-width: 110rem;
  padding: ${medium};
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: ${medium};

  h1 {
    font-size: 4rem;
    font-weight: 400;
    margin-top: 0;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.8rem;
    max-width: 80rem;
  }

  .icons {
    padding-top: 2rem;
    font-size: 3rem;

    a, a:link {
      display: inline-block;
      color: inherit;
      transition: all .3s ease;
      padding-right: 1.5rem;
    }

    a:hover {
      transform: scale(1.1) translateY(-.5rem);
      color: ${darken(.2, color4)};
    }
  }
`;
