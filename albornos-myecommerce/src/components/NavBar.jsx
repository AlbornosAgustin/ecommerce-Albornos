import {Navbar,Nav,Container} from 'react-bootstrap'
import CartWidget from './CartWidget'


function NavBar () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Ohanna</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Remeras</Nav.Link>
            <Nav.Link href="#pricing">Buzos</Nav.Link>
            <Nav.Link href="#pricing">Pantalones</Nav.Link>
         
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
                <CartWidget/>
            
            </Nav.Link>
       
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar
