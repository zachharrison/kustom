import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Container,
  Card,
  Button,
} from 'react-bootstrap';
import SizeSelect from '../components/SizeSelect';
import Rating from '../components/Rating';

import products from '../products';

const ProductPage = ({ match }) => {
  // WILL EVENTUALLY COME FROM THE BACKEND
  const product = products.find((product) => product._id === match.params.id);

  // GET TOTAL NUMBER OF SHIRTS TO CHECK IF IT IS GREATER THAN ZERO
  const totalStock = Object.values(product.quantity).reduce(
    (acc, cur) => (acc += cur)
  );

  return (
    <>
      <Link className='my-3' to='/'>
        <i className='fas fa-long-arrow-alt-left'></i> Back
      </Link>

      <Row className='mt-5'>
        <Col md={8}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col md={8}>
                  <h4>{product.name}</h4>
                </Col>
                <Col md={4}>
                  <h4>${product.price}</h4>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <SizeSelect product={product} />
              <div className='flex-container'>
                <button className='btn-brand mb-4' disabled={totalStock === 0}>
                  {totalStock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} ${
                    product.numReviews === 1 ? 'Review' : 'Reviews'
                  }`}
                />
                <p className='mt-4'>{product.description}</p>
                <p className='mt-4'>{totalStock}</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
