import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink}from 'react-router-dom'

const NavbarC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <NavLink to="/" className={'nav-link fs-4'}>Logo</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={'nav-link'}>Inicio</NavLink>
            <NavLink to="about" className={'nav-link'}>Sobre Nosotros</NavLink>
            <NavLink to="contact" className={'nav-link'}>Contacto</NavLink>
          </Nav>
          <Nav className="ms-auto">
            <NavLink to="login" className={'nav-link'}>Iniciar sesion</NavLink>
            <NavLink to="/register" className={'nav-link'}>Registrarse</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarC