import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink,useNavigate } from 'react-router-dom';
import '../App.css'
function NavBar2() {
  let expand='xxl'
  let history=useNavigate();
  return (
    <Navbar key={expand} style={{zIndex:''}} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Top Social</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Top Social
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" style={{offcanvaswidth: "328px"}}>
                  <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/account">Account Page</Nav.Link>
                  {!localStorage.getItem('token')&&<>
                  <Nav.Link as={NavLink} to="/Login">Login</Nav.Link>
                  <Nav.Link as={NavLink} to="/Signup">Signup</Nav.Link>
                  </>
                  }
                  <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}
export default NavBar2;