import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./Modal.scss"

export const Modal = ({btn, children}) => (
  <Popup trigger={<button className='modal_btn'>{btn}</button>} modal nested>
    <div style={{overflowY: "auto", maxHeight: "800px"}}>{children}</div>
  </Popup>
);