import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/myLogo.png'
import '../styles/MyNavbar.css'
const MyNavbar = () => {
   return (
    <Navbar expand="lg" className="navbar">
      <Container className='container'>
        <Navbar.Brand href="#home"><h1>Movie<span style={{color:'#EBFFD8'}}>Scope</span></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link href="#home"className='nav-link active' ><i class="fa-regular fa-house"></i> Accuiel</Nav.Link>
            <Nav.Link href="#link" className='nav-link btn btn-border-reveal '> <i class="fa-regular fa-bookmark"></i> À propos</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar
