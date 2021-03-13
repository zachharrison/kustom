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
        marginBottom: '25px',
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
          <strong>S</strong>
        </button>
        <button className='size-btn' onClick={handleSize} value='medium'>
          <strong>M</strong>
        </button>
        <button className='size-btn' onClick={handleSize} value='large'>
          <strong>L</strong>
        </button>
        <button className='size-btn' onClick={handleSize} value='xlarge'>
          <strong>XL</strong>
        </button>
      </div>
    </Container>
  );
};

export default SizeSelect;
