import {Navbar,Nav,Container} from 'react-bootstrap'
import CartWidget from './CartWidget'


function NavBar () {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <link to="/"> <Navbar.Brand href="#home">Ohanna</Navbar.Brand></link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <link to="/categoria/remeras"> <Nav.Link href="#features">Remeras</Nav.Link></link>
           <link to="/categoria/buzos"> <Nav.Link href="#pricing">Buzos</Nav.Link></link>
           <link to="/categoria/pantalones"><Nav.Link href="#pricing">Pantalones</Nav.Link></link>
         
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
