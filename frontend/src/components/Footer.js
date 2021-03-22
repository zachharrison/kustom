import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Container
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        fluid
      >
        <Row>
          <Col className='text-center pt-3'>
            <ul className='social-icons'>
              <li>
                <a target='_blank' href='https://github.com/zachharrison'>
                  <i className='fab fa-github'></i>
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href='https://www.instagram.com/zach__harrison/'
                >
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/zach-harrison-333974176/'
                >
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
              <li>
                <a target='_blank' href='https://twitter.com/Zach__Harrison'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <p>Copyright &copy; Kustom</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
