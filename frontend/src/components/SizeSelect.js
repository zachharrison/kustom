import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import products from '../products';
import axios from 'axios';

const SizeSelect = (props) => {
  const [size, setSize] = useState('');
  // const [product, setProduct] = useState({});

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(`/api/products/${match.params.id}`);
  //     setProduct(data);
  //   };

  //   fetchProduct();
  // });

  // const product = product.find()

  const onChange = (e) => {
    console.log(e.target.value);
    setSize(e.target.value);
  };

  console.log(props);

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
          disabled={props.product.quantity.small === 0}
        />
        <input
          type='radio'
          name='size'
          value='medium'
          id='medium'
          onChange={onChange}
          disabled={props.product.quantity.medium === 0}
        />
        <input
          type='radio'
          name='size'
          value='large'
          id='large'
          onChange={onChange}
          disabled={props.product.quantity.large === 0}
        />
        <input
          type='radio'
          name='size'
          value='xlarge'
          id='xlarge'
          onChange={onChange}
          disabled={props.product.quantity.xlarge === 0}
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
