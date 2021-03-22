import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ marginTop: '20vh' }}>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Kustom</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
