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

  const onChange = (e) => {
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
        className='select-size'
      >
        <input
          type='radio'
          name='size'
          value='small'
          id='small'
          onChange={onChange}
        />
        <input
          type='radio'
          name='size'
          value='medium'
          id='medium'
          onChange={onChange}
        />
        <input
          type='radio'
          name='size'
          value='large'
          id='large'
          onChange={onChange}
        />
        <input
          type='radio'
          name='size'
          value='xlarge'
          id='xlarge'
          onChange={onChange}
        />

        <label className='size-label' htmlFor='small'>
          S
        </label>
        <label className='size-label' htmlFor='medium'>
          M
        </label>
        <label className='size-label' htmlFor='large'>
          L
        </label>
        <label className='size-label' htmlFor='xlarge'>
          XL
        </label>
      </div>
    </Container>
  );
};

export default SizeSelect;
