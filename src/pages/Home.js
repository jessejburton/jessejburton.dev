import React from "react"
import { useSpring, animated } from 'react-spring'
import Layout from '../layout/Layout';
import styled from 'styled-components';
import { medium, black, color3, color4 } from '../theme/theme';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

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
    <Layout bgColor={black} fontColor={color4}>
      <StyledSectionContent>
        <animated.h1 className="title" style={title}>Hello, my name is <strong>Jesse J Burton</strong>. <br />I'm a fullstack web developer.</animated.h1>
        <animated.div className="centered" style={subtitle}>
          <Link to="/ui">
            <Button>
              Let's build the internet together.
            </Button>
          </Link>
        </animated.div>
      </StyledSectionContent>
    </Layout>
  )
}

export default Home

const StyledSectionContent = styled.div`
  max-width: 110rem;

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
`;