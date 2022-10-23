import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/ContextProvider/ContextProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((e) => console.log(e));
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-5"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Dragon News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">{console.log(user)}</Nav.Link>
            <span href="#memes">
              {user ? (
                <>
                  <Link onClick={handleLogout}>Logout</Link>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </span>
            <Link to="/profile">
              {user?.photoURL ? (
                <Image
                  src={user.photoURL}
                  style={{ width: "50px" }}
                  roundedCircle
                ></Image>
              ) : (
                <PersonCircle></PersonCircle>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
