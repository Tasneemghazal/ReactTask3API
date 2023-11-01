import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../dishes.css';
import {Link} from 'react-router-dom'
function customNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-4 mb-5 nav">
      <Container>
        <Navbar.Brand href="#home" className='text-primary'>API Task</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link  className='me-2 text-decoration-none' to='/'>Home</Link>
            <Link  className='me-2 text-decoration-none' to='/resturant'>Resturant</Link>
            <Link className='me-2 text-decoration-none' to='/products'>Products</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default customNavbar;
