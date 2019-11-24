import React from "react"
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { medium, color3 } from '../theme/theme'
import { Button } from '../components/ui/Button'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

const Home = () => {

  const title = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(-20px)' },
    delay: 700,
    config: { duration: 600 }
  });

  const subtitle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1700,
    config: { duration: 1200 }
  });

  return (
    <Layout>
      <StyledSectionContent>
        <animated.h1 className="title" style={title}>Hello, my name is <strong>Jesse J Burton</strong>. <br />I'm a fullstack web developer.</animated.h1>
        <animated.div className="centered" style={subtitle}>
          <Link to="/css-toggle">
            <Button>
              Let's build the internet together.
            </Button>
          </Link>
        </animated.div>
        <animated.div className="centered skip" style={subtitle}>
          <Link to="/menu">
            skip the tour
          </Link>
        </animated.div>
      </StyledSectionContent>
    </Layout>
  )
}

export default Home

const StyledSectionContent = styled.div`
  max-width: 110rem;
  font-family: 'Raleway', sans-serif;

  h1 {
    font-weight: 500;
    font-size: 4.4rem;
    line-height: 5.6rem;
    text-shadow: 2px 2px black;
    text-align: center;
    padding: 0;
    margin: ${medium};

    strong {
      color: ${color3};
    }
  }

  .skip a,
  .skip a:link {
    display: block;
    color: inherit;
    text-decoration: none;
    padding: 2rem;
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
