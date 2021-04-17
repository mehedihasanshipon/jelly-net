import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <div className="container-fluid px-5">
      <Link  className="navbar-brand">Jelly <span style={{color:'#68C5E8'}}>net</span></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Link className="nav-link" >Home</Link>
          <Link className="nav-link" >About Us</Link>
          <Link to="/dashboard" className="nav-link" >Dashboard</Link>
          <Link className="nav-link" >Contact</Link>
          <Link className="nav-link" >Admin</Link>
          <Link className="nav-link" >Login</Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navbars;
