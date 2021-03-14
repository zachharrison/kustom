import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import SizeSelect from '../components/SizeSelect';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productActions';

const ProductPage = ({ history, match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link className='my-3' to='/'>
        <i className='fas fa-long-arrow-alt-left'></i> Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
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
                <SizeSelect product={product} history={history} match={match} />
                <div className='flex-container'>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} ${
                      product.numReviews === 1 ? 'Review' : 'Reviews'
                    }`}
                  />
                  <p className='mt-4'>{product.description}</p>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductPage;
