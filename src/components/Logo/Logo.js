import React from 'react';
// import Tilt from 'react-tilt'; 
import Tilt from 'react-parallax-tilt';
import brain from './mask.gif';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-3" options={{ max : 50 }} style={{ height: 180, width: 180 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '0px'}} alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;