import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import VolumeControl from '../components/ui/VolumeControl'
import iconTick from '../sounds/tick.mp3'
import UIfx from 'uifx';
import { connect } from 'react-redux';

export const Footer = ({ volume }) => {

  const iconTickSound = new UIfx(iconTick, { throttleMs: 75 });

  function onIconHover() {
    iconTickSound.play(parseFloat(volume));
  }

  return (
    <StyledFooter>
      <div>
        <StyledIconLink onMouseEnter={onIconHover}>
          <a href="/menu" title="Github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </StyledIconLink>
        <StyledIconLink onMouseEnter={onIconHover}>
          <a href="/menu" title="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </StyledIconLink>
        <StyledIconLink onMouseEnter={onIconHover}>
          <a href="/menu" title="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </StyledIconLink>
        <StyledIconLink onMouseEnter={onIconHover}>
          <a href="/menu" title="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </StyledIconLink>
      </div>
      <div>
        <VolumeControl />
      </div>
    </StyledFooter>
  )
}

const mapStateToProps = (state) => ({
  volume: state.audioSettings.volume
});
export default connect(mapStateToProps)(Footer);

const StyledFooter = styled.footer`
    grid-area: footer;
    grid-column-start: content;
    grid-column-end: content;
    position: relative;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2.4rem;

    &:hover a,
    &:hover a:link {
      opacity: 0.9;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      background: linear-gradient(135deg,rgba(255,255,255,0.1) 0%, rgba(255,255,255,1) 50%,rgba(255,255,255,0.1) 100%);
      top: 0;
      opacity: .4;
    }
`;

const StyledIconLink = styled.div`
  display: inline-block;
  padding: .5rem;

  a, a:link {
    display: inline-block;
    color: inherit;
    opacity: 0.5;
    transition: all .3s ease;

    &:hover svg {
      animation: iconPop .2s ease forwards;
    }

    @keyFrames iconPop {
      0% {
        transform: translate(0,0) scale(1);
      }
      100% {
        transform: translate(0,-5px) scale(1.1);
      }
    }
  }
`;