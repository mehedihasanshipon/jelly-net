import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSlidersH } from '@fortawesome/free-solid-svg-icons'

const Navbars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <div className="container-fluid px-5">
      <Link  className="navbar-brand">Jelly <span style={{color:'#68C5E8'}}>net</span></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"><FontAwesomeIcon style={{fontSize:'40px'}} icon={faSlidersH} /></Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Link to="/" className="nav-link" >Home</Link>
          <Link className="nav-link" >About Us</Link>
          <Link to="/dashboard" className="nav-link" >Dashboard</Link>
          <Link className="nav-link" >Contact</Link>
          <Link className="nav-link" >Admin</Link>
          <Link to="/dashboard" className="nav-link" >Login</Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navbars;
