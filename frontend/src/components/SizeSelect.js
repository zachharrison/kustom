import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const SizeSelect = ({ size }) => {
  const [orderSize, setOrderSize] = useState('');

  const onChange = (e) => {
    console.log(e.target.value);
    setOrderSize(e.target.value);
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
          disabled={size.small === 0}
        />
        <input
          type='radio'
          name='size'
          value='medium'
          id='medium'
          onChange={onChange}
          disabled={size.medium === 0}
        />
        <input
          type='radio'
          name='size'
          value='large'
          id='large'
          onChange={onChange}
          disabled={size.large === 0}
        />
        <input
          type='radio'
          name='size'
          value='xlarge'
          id='xlarge'
          onChange={onChange}
          disabled={size.xlarge === 0}
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
