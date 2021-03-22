import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import SizeSelect from '../components/SizeSelect';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Rating from '../components/Rating';
import Meta from '../components/Meta';
import {
  listProductDetails,
  createProductReview,
} from '../actions/productActions';
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants';
const ProductPage = ({ history, match }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  const productCreateReview = useSelector((state) => state.productCreateReview);
  const {
    loading: loadingReview,
    error: errorReview,
    sucess: successReview,
  } = productCreateReview;

  useEffect(() => {
    if (successReview) {
      setRating(0);
      setComment('');
    }
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id));
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
  }, [dispatch, match, successReview]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     createProductReview(match.params.id, {
  //       rating,
  //       comment,
  //     })
  //   );
  // };

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
        <>
          <Meta title={product.name} />
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
                  <SizeSelect
                    match={match}
                    history={history}
                    product={product}
                  />
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
        </>
      )}
    </>
  );
};

export default ProductPage;
