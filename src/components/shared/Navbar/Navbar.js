import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const Header = () => {
    
    return (
        <>



<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Products</Nav.Link>

      <Nav.Link href="#pricing">Dashboard</Nav.Link>
      <Nav.Link href="#pricing">Reviews</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


<Navbar bg="light" expand="lg" className='mb-3'>
  <Container>
    {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      

    </Navbar.Collapse>
  </Container>
</Navbar>
        
        </>
    );
};

export default Header;