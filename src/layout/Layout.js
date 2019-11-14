import React from 'react'
import styled from 'styled-components'
import { black, white } from '../theme/theme'

const Layout = ({ children, bgColor, fontColor }) => {
  return (
    <StyledSection
      bgColor={bgColor}
      fontColor={fontColor}>
      {children}
    </StyledSection>
  )
}
export default Layout;

Layout.defaultProps = {
  bgColor: white,
  fontColor: black
}

const StyledSection = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.bgColor};
  color: ${props => props.fontColor};
`;