import React, { useEffect } from 'react';
import { Link } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartPage = ({ match, location, history }) => {
  const productId = match.params.id;

  const size = location.search.split('=')[1];

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, size));
    }
  }, [dispatch, productId, size]);

  console.log(size);
  return <div>Cart</div>;
};

export default CartPage;
