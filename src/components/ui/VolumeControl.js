import React, { Component } from 'react'
import styled from 'styled-components'
import { black, white } from '../../theme/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import bgMusic from '../../sounds/bg-music.mp3'
import UIfx from 'uifx';

export default class VolumeControl extends Component {
  state = {
    mute: false
  }

  toggleMute = () => {
    this.setState({
      mute: !this.state.mute,
    });
  }

  render() {
    return (
      <StyledVolumeControl onClick={this.toggleMute}>
        {
          this.state.mute ? <FontAwesomeIcon icon={faVolumeMute} /> : <FontAwesomeIcon icon={faVolumeUp} />
        }
      </StyledVolumeControl>
    )
  }
}

const StyledVolumeControl = styled.div`
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 4rem;
    height: 0rem;
    background-color: rgba(0,0,0,0.5);
    border-radius: 1rem;
    box-shadow: 0 0 15px 1px rgba(255,255,255,0.4);
    opacity: 0;
    left: 0;
    transform: translate(-0.6rem, -110%);
    transition: all .3s ease;
  }

  &:hover::before {
    opacity: 1;
    height: 18rem;
  }

  &::after {
    cursor: grab;
    content: '';
    position: absolute;
    width: 4rem;
    height: 2rem;
    background-color: ${white};
    border-radius: 1.8rem;
    box-shadow: 0 0 15px 1px rgba(255,255,255,0.4);
    opacity: 0;
    left: 0;
    transform: translate(-0.6rem, -4rem);
    transition: all .3s ease;
  }

  &:hover::after {
    opacity: 1;
  }

`;