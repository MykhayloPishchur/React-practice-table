import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../../routes";

const AppBar = () => {
  const navlinks = routes.map(({ path, label }) => (
    <Nav.Link as={Link} to={path} key={label}>
      {label}
    </Nav.Link>
  ));

  return (
    <Navbar bg="dark" className="container-fluid" variant="dark">
      <Navbar.Brand>MyWork</Navbar.Brand>

      <Nav className="mr-auto">{navlinks}</Nav>
    </Navbar>
  );
};

export default AppBar;
