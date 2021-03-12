import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import logo from '../../public/logo/cover.png';

const Header = () => {
  return (
    <header>
      <Navbar bg='light'>
        <Container>
          <Navbar.Brand href='/'>
            <img src='/logo/cover.png' alt='logo' width='100' height='45' />
          </Navbar.Brand>
          <Nav className='ml-auto'>
            <Nav.Link href='/cart'>
              <i className='fas fa-shopping-cart'></i> Cart
            </Nav.Link>
            <Nav.Link href='/login'>
              <i className='fas fa-user'></i>Sign In
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
