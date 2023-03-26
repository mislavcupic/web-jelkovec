import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import  NavDropdown  from 'react-bootstrap/NavDropdown';
import CarouselComponent from './CarouselComponent';

export default function NavigationComponent() {
  return (
    <div className='Nav-App'>
      <Navbar  bg='light' expand="md">
      <Container fluid  > 
        <Navbar.Brand href="#home"> <img src="./Black logo - no background.png" alt="SŠJ" className='Nav-logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className='justify-content-space-between'>
        <Nav.Link href="#home" >HOME</Nav.Link>
            <Nav.Link href="#link">LINK</Nav.Link>
        <Nav.Item   defaultActiveKey="/home">
        
        <NavDropdown title="VIJESTI" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
        </Nav.Item>
        
        <NavDropdown title="OGLASNA PLOČA" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Školska liječnica</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Školski savjeti
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nešto...</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
      
            <NavDropdown title="ŠKOLSKI ŽIVOT" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Natjecanja</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Programiranje
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Krejzi shit</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            
            </Nav>
          </Navbar.Collapse>
          
      </Container>
    </Navbar>
    <CarouselComponent/>




    </div>
  )
}
