import React , {Component} from 'react';
// import { Nav, Container} from 'react-bootstrap/Navbar'
// import Button from 'react-bootstrap/Button';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

class NavBarMenu extends Component{
  constructor(props){
    super()
  }

  render(){
    return(
        
      <>

        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing">Login</Nav.Link>
              <Nav.Link href="#pricing">Register</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      </>

    )
  }
}

export default NavBarMenu