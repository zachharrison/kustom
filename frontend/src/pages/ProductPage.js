import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import SizeSelect from '../components/SizeSelect';
import Rating from '../components/Rating';
// import products from '../products';
import axios from 'axios';

const ProductPage = ({ match }) => {
  // const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [stock, setStock] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
      // const quantities = await Object.values(product.quantity);
      // const totalStock = await quantities.reduce((acc, cur) => (acc += cur));
      // setStock(totalStock);
    };

    fetchProduct();
    console.log(product);
    // console.log(stock);
  }, []);

  // WILL EVENTUALLY COME FROM THE BACKEND
  // const product = products.find((product) => product._id === match.params.id);

  // GET TOTAL NUMBER OF PRODUCTS TO CHECK IF IT IS GREATER THAN ZERO
  // const totalStock = stock.reduce((acc, cur) => (acc += cur));

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
              {/* <SizeSelect product={product} /> */}
              <div className='flex-container'>
                {/* <button className='btn-brand mb-4' disabled={stock === 0}>
                  {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button> */}
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
  );
};

export default ProductPage;
