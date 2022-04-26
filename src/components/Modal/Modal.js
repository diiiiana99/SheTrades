import React from 'react';
import './Modal.css'
import { Zoom } from 'react-reveal'


const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
    <Zoom top>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img className='modal-pic' src='https://i.pinimg.com/originals/87/d3/df/87d3df2d5e7d37283e0e56b32d55a8a2.gif' alt='/' />
        <Zoom bottom>
        <div className='modalRight'>
          <p className='closeBtn' >
            X
          </p>
 
          <div className='content'>
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first trade?</p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>YES</span>, I love NFT's
            </button>
            <button className='btnOutline'  onClick={onClose}>
              <span className='bold'>NO</span>, thanks
            </button>
          </div>
        </div>
        </Zoom>
      </div>
      </Zoom>
    </div>
  );
};

export default Modal;