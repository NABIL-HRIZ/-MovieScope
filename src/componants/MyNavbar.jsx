import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import '../styles/MyNavbar.css'
const MyNavbar = () => {
   return (
    <Navbar expand="lg" className="navbar">
      <Container className='container'>
        <Navbar.Brand as={Link} to='/'><h1 style={{color:"#fff"}}>Movie<span style={{color:'#EBFFD8'}}>Scope</span></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link as={Link} to='/' className='nav-link active' ><i className="fa-regular fa-house"></i> Accuiel</Nav.Link>
            <Nav.Link as={Link}  to='/propos-nous'className='nav-link '> <i className="fa-regular fa-bookmark"></i> À propos</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar
