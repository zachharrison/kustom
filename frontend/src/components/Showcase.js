import React from 'react';
import { Button } from 'react-bootstrap';

const divStyle = {
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
      <Button className='btn'>Shop Now</Button>
    </div>
  );
};

export default Showcase;
