import React from 'react';
import './Header.css';
import logo from'./logo.png';

const Header = () => {
  return (
    <div>
      <img src={logo} />
  
      <div id='header'>
        
        <h1>PROCUREMENT TRACKING TOOL </h1>
      </div>
    </div>
  )
}

export default Header