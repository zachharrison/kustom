import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import Half from '../components/Half';
import Showcase from '../components/Showcase';
import { listProducts } from '../actions/productActions';
import ProductCarousel from '../components/ProductCarousel';

const Home = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <>
          <ProductCarousel />
          <Showcase />
          <Half />
        </>
      ) : (
        <Link className='my-3' to='/'>
          <i className='fas fa-long-arrow-alt-left'></i> Back
        </Link>
      )}
    </>
  );
};

export default Home;
