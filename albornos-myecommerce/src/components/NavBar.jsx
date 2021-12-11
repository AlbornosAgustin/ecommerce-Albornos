import {Navbar,Nav,Container} from 'react-bootstrap'
import { Link  } from 'react-router-dom';
import CartWidget from './CartWidget'


function NavBar () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Link to="/"> <Navbar.Brand href="#home">Ohanna</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Link to="/categoria/remeras"> <Nav.Link href="#features">Remeras</Nav.Link></Link>
           <Link to="/categoria/buzos"> <Nav.Link href="#pricing">Buzos</Nav.Link></Link>
           <Link to="/categoria/pantalones"><Nav.Link href="#pricing">Pantalones</Nav.Link></Link>
         
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
            <Link to="/cart"> <CartWidget /> </Link> 
                           
            
            </Nav.Link>
       
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar
