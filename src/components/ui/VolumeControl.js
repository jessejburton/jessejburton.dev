import React, { useState } from 'react'
import styled from 'styled-components'
import { white } from '../../theme/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

export const VolumeControl = ({ volume, dispatch }) => {

  const [showControls, setShowControls] = useState(false);

  function hideControls() {
    setTimeout(() => setShowControls(false), 2000);
  }

  return (
    <StyledVolumeControl
      onMouseEnter={() => setShowControls(true)}
      onMouseOut={hideControls}>
      {
        volume === 0 ? <FontAwesomeIcon icon={faVolumeMute} /> : <FontAwesomeIcon icon={faVolumeUp} onClick={() => dispatch({ type: 'MUTE_VOLUME' })} />
      }
      {showControls &&
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
      }
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