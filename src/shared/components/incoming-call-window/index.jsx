/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import './styles.scss';

import PropTypes from 'prop-types';
import { MdCall, MdCameraAlt, MdCallEnd } from 'react-icons/md';

import placeholderImg from '../../../assets/images/no-picture.png';

function StartCallWindow({
  nickname,
  image,
  handleCancelCall,
  handleAceptCall,
}) {
  return (
    <div className="call-container">
      <img src={image || placeholderImg} alt="User profile" />
      <h2>{nickname || 'Usuario'}</h2>
      <p>Is calling...</p>
      <div className="button-container">
        <button type="button" onClick={() => handleAceptCall('audio')}>
          <MdCall />
        </button>
        <button type="button" onClick={() => handleAceptCall('video')}>
          <MdCameraAlt />
        </button>
        <button type="button" onClick={handleCancelCall}>
          <MdCallEnd />
        </button>
      </div>
    </div>
  );
}

StartCallWindow.propTypes = {
  nickname: PropTypes.string.isRequired,
  image: PropTypes.object,
  handleCancelCall: PropTypes.func.isRequired,
  handleAceptCall: PropTypes.func.isRequired,
};

export default StartCallWindow;
