import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";

const myStyle = {
  background: "#0c0c0c",
  color: 'white',
}

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
      style={{color:'white'}}
    >
      <strong>Home</strong>
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/sidelined"
      exact
      activeClassName="router-link-exact-active"
      style={{color:'white'}}
    >
      <strong>Sidelined</strong>
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/how-it-works"
      exact
      activeClassName="router-link-exact-active"
      style={{color:'white'}}
    >
      <strong>How It Works</strong>
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/about"
      exact
      activeClassName="router-link-exact-active"
      style={{color:'white'}}
    >
      <strong>About</strong>
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
      style={{color:'white'}}
    >
      <strong>Profile</strong>
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/external-api"
      exact
      activeClassName="router-link-exact-active"
      style={{color:'white'}}
    >
      <strong>External API</strong>
    </Nav.Link>
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Nav className="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Nav>
  );
};

const NavBar = () => {

  
    
  return (
    <Navbar style={myStyle} expand="md">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
