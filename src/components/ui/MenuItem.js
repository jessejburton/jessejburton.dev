import React, { useState } from 'react'
import UIfx from 'uifx';
import menuHover from '../../sounds/menu-click.wav'
import menuSelect from '../../sounds/menuSelect.wav'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const MenuItem = ({ onMenuHover, volume, link, children, message }) => {

  const menuHoverSound = new UIfx(menuHover, { throttleMs: 75 });
  const menuSelectSound = new UIfx(menuSelect, { throttleMs: 75 });

  function handleOnHover(e) {
    menuHoverSound.play(parseFloat(volume));
    onMenuHover(message);
  }

  function handleMenuClick(e) {
    menuSelectSound.play(parseFloat(volume));
  }

  return (
    <li onMouseEnter={handleOnHover} onClick={handleMenuClick}>
      <Link to={link}>{children}<FontAwesomeIcon icon={faArrowCircleRight} /></Link>
    </li>
  )
}

const mapStateToProps = (state) => ({
  volume: state.audioSettings.volume
});
export default connect(mapStateToProps)(MenuItem);