import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const divStyle = {
  marginTop: '10vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '80vh',
  backgroundImage: 'url(' + '/images/skate-ramp.jpg' + ')',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const Showcase = () => {
  return (
    <div style={divStyle}>
      <Link to='/shop' className='btn btn-dark'>
        Shop Now
      </Link>
    </div>
  );
};

export default Showcase;
