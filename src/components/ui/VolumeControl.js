import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import bgMusic from '../../sounds/bg-music.mp3'
import Sound from 'react-sound'

export const VolumeControl = ({ volume, dispatch }) => {
  return (
    <StyledVolumeControl>
      {
        volume === 0 ? <FontAwesomeIcon icon={faVolumeMute} onClick={() => dispatch({ type: 'UNMUTE_VOLUME' })} /> : <FontAwesomeIcon icon={faVolumeUp} onClick={() => dispatch({ type: 'MUTE_VOLUME' })} />
      }
      <StyledSlider>
        <Slider
          min={0}
          max={1}
          step={0.1}
          value={volume}
          orientation='vertical'
          tooltip={false}
          onChange={(value) => dispatch({
            type: 'SET_VOLUME',
            value: value
          })}
        />
      </StyledSlider>
      <Sound
        url={bgMusic}
        playStatus="PAUSED"
        volume={volume * 100}
      />
    </StyledVolumeControl>
  )
}

const mapStateToProps = (state) => ({
  volume: state.audioSettings.volume
});
export default connect(mapStateToProps)(VolumeControl);

const StyledVolumeControl = styled.div`
  cursor: pointer;
  position: relative;
`;

const StyledSlider = styled.div`
  position: absolute;
  transform: translateY(-110%);
`;