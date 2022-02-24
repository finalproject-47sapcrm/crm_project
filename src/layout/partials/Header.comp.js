import React from 'react'
import {Navbar , Nav} from 'react-bootstrap'
import icon from "../../assets/img/icon.png"

export const Header= () => {
  return (
    <div>
    <Navbar collapseOnSelect bg="dark" variant="primary" expand="lg">
    <Navbar.Brand>  
    <img src= {icon} alt="logo" width="50px" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' /> 
    <Navbar.Collapse id='basic-navbar-nav'>  
    <Nav className ="ms-auto">   {/* ms- margin left */}
    <Nav.Link href ="/dashboard">Dashboard</Nav.Link>
    <Nav.Link href ="/dashboard">Tickets</Nav.Link>
    <Nav.Link href ="/dashboard">Logout</Nav.Link>


    </Nav>
    
    
    
    </Navbar.Collapse>




    </Navbar>

    </div>
  );
};
/* .navbar-brand for your company, product, or project name.
.navbar-nav for a full-height and lightweight navigation (including support for dropdowns).
.navbar-toggler for use with our collapse plugin and other navigation toggling behaviors.
.form-inline for any form controls and actions.
.navbar-text for adding vertically centered strings of text.
.collapse.navbar-collapse for grouping and hiding navbar contents by a parent breakpoint. */