import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const SizeSelect = ({ history, match, product }) => {
  const [orderSize, setOrderSize] = useState('');

  const onChange = (e) => {
    setOrderSize(e.target.value);
  };

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?size=${orderSize}`);
  };

  // const addToCartHandler = () => {
  //   dispatch(addToCart(product._id, orderSize));
  //   history.push('/cart');
  // };

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
          disabled={product.size.small === 0}
        />
        <input
          type='radio'
          name='size'
          value='medium'
          id='medium'
          onChange={onChange}
          disabled={product.size.medium === 0}
        />
        <input
          type='radio'
          name='size'
          value='large'
          id='large'
          onChange={onChange}
          disabled={product.size.large === 0}
        />
        <input
          type='radio'
          name='size'
          value='xlarge'
          id='xlarge'
          onChange={onChange}
          disabled={product.size.xlarge === 0}
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
      <div className='flex-container'>
        <button
          onClick={addToCartHandler}
          className='btn-brand mb-4'
          disabled={product.totalStock === 0}
        >
          {product.totalStock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </Container>
  );
};

export default SizeSelect;
