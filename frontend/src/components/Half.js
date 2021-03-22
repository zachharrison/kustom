import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Half = () => {
  return (
    <Row
      style={{
        height: '60vh',
        width: '100%',
        marginTop: '10vh',
        marginBottom: '10vh',
      }}
    >
      <Col>
        <img
          src='/images/purple-wall.jpeg'
          alt=''
          style={{ width: '100%', height: '100%' }}
        />
      </Col>
      <Col
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            width: '100%',
            margin: '2rem',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <p style={{ fontSize: '3rem' }}>Think Different.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure
            alias et aliquid, autem aspernatur.
          </p>
          <Link to='/shop' className='btn btn-dark'>
            Explore
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default Half;
