import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import { addToCart, removeFromCart } from '../actions/cartActions';

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

  const removeFromCartHandler = (id, size) => {
    dispatch(removeFromCart(id, size));
    history.push('/cart');
  };

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };

  return (
    <Row className='cart' style={{ margin: 'auto' }}>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'> Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={2} className='cart-info'>
                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2} className='cart-info'>
                    ${item.price}
                  </Col>
                  <Col md={2} className='cart-info'>
                    {item.size.toUpperCase()}
                  </Col>
                  <Col md={4} className='cart-info' style={{ display: 'flex' }}>
                    <Form.Control
                      style={{
                        minWidth: '80px',
                        maxWidth: '60%',
                        marginRight: '5px',
                      }}
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(
                            item.product,
                            item.size,
                            Number(e.target.value)
                          )
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() =>
                        removeFromCartHandler(item.product, item.size)
                      }
                    >
                      <i className='fas fa-trash' />
                    </Button>
                  </Col>
                  {/* <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() =>
                        removeFromCartHandler(item.product, item.size)
                      }
                    >
                      <i className='fas fa-trash' />
                    </Button>
                  </Col> */}
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>
                Subtotal ({cartItems.reduce((acc, cur) => acc + cur.qty, 0)})
                items
              </h4>
              $
              {cartItems
                .reduce((acc, cur) => acc + cur.price * cur.qty, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartPage;
