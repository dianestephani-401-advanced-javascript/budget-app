//Dependencies
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

//This function will return the Navbar in the header.
function Header(){

  return(
    <>
    <Navbar bg="info" variant="dark">
        
    <Navbar.Brand href="#home">budgefy</Navbar.Brand>

    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
    </Nav>

  </Navbar>

  <Nav>
    Budget Manager
  </Nav>
    </>
  )
}

export default Header;
