import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { listProductDetails, updateProduct } from '../actions/productActions';
import {
  PRODUCT_UPDATE_RESET,
  PRODUCT_DETAILS_RESET,
} from '../constants/productConstants';

const ProductEditPage = ({ match, history }) => {
  const productId = match.params.id;
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState(0);
  const [description, setDescription] = useState('');
  const [size, setSize] = useState({
    small: 0,
    medium: 0,
    large: 0,
    xlarge: 0,
  });

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  console.log(productDetails);

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch({ type: PRODUCT_DETAILS_RESET });
      history.push('/admin/productlist');
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setCategory(product.category);
        setSize(product.size);
        setDescription(product.description);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        category,
        size,
        description,
        numReviews: product.numReviews,
        rating: product.rating,
      })
    );
  };

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{error}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter name'
                autoComplete='off'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter price'
                autoComplete='off'
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Image URL'
                autoComplete='off'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Category'
                autoComplete='off'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Description'
                autoComplete='off'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='size'>
              <p className='text-center mb-1'>Count In Stock</p>
              <Form.Label>Small</Form.Label>
              <Form.Control
                className='mb-2'
                type='text'
                placeholder='Enter Small Count'
                autoComplete='off'
                value={size.small}
                onChange={(e) =>
                  setSize({ ...size, small: Number(e.target.value) })
                }
              ></Form.Control>
              <Form.Label>Medium</Form.Label>
              <Form.Control
                className='mb-2'
                type='text'
                placeholder='Enter Medium Count'
                autoComplete='off'
                value={size.medium}
                onChange={(e) =>
                  setSize({ ...size, medium: Number(e.target.value) })
                }
              ></Form.Control>
              <Form.Label>Large</Form.Label>
              <Form.Control
                className='mb-2'
                type='text'
                placeholder='Enter Large Count'
                autoComplete='off'
                value={size.large}
                onChange={(e) =>
                  setSize({ ...size, large: Number(e.target.value) })
                }
              ></Form.Control>
              <Form.Label>XLarge</Form.Label>
              <Form.Control
                className='mb-2'
                type='text'
                placeholder='Enter XL Count'
                autoComplete='off'
                value={size.xlarge}
                onChange={(e) =>
                  setSize({ ...size, xlarge: Number(e.target.value) })
                }
              ></Form.Control>
            </Form.Group>

            <Button className='btn-block' type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditPage;
