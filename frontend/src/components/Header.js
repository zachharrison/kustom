import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import logo from '../../public/logo/cover.png';

const Header = () => {
  return (
    <header>
      <Navbar bg='light'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src='/logo/cover.png' alt='logo' width='100' height='45' />
            </Navbar.Brand>
          </LinkContainer>

          <Nav className='ml-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to='/login'>
              <Nav.Link>
                <i className='fas fa-user'></i> Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
