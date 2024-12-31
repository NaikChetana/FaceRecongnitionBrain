import React from "react";
import Tilt from 'react-parallax-tilt'
import './logo.css';
import brain from './brain.png';

export const Logo = ()=>{
  return(
    <div className="ma4 mt0">
      <Tilt className="br2 shadow-2 tilt" style={{ width: '150px', height: '150px'}}>
        <div style={{padding:'20px'}} >
          <img src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  )
}