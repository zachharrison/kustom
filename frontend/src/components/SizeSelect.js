import React, { useState } from 'react';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Container,
  Card,
  Button,
} from 'react-bootstrap';

const SizeSelect = () => {
  const [size, setSize] = useState('');

  const handleSize = (e) => {
    console.log(e.target.value);
    setSize(e.target.value);
  };

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: '5px',
      }}
    >
      <h5 className='text-center py-3'>Select size</h5>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button className='size-btn' onClick={handleSize} value='small'>
          S
        </button>
        <button className='size-btn' onClick={handleSize} value='medium'>
          M
        </button>
        <button className='size-btn' onClick={handleSize} value='large'>
          L
        </button>
        <button className='size-btn' onClick={handleSize} value='xlarge'>
          XL
        </button>
      </div>
    </Container>
  );
};

export default SizeSelect;
