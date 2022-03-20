import React from 'react'
import {Navbar , Nav,Container} from 'react-bootstrap'
import icon from "../../assets/img/icon.png"
/* import {
  BrowserRouter as
  Link
} from "react-router-dom";
  */
import {useHistory} from "react-router-dom";
import {LinkContainer } from 'react-router-bootstrap';

export const Header= () => {
  const history= useHistory();
  const logMeOut = () =>
  {
    history.push("/");
  };
  return (
    <div>
    <Navbar collapseOnSelect  fixed="top" bg="info" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand>  
    <img src= {icon} alt="logo" width="50px" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' /> 
    <Navbar.Collapse id='responsive-navbar-nav'>  
    <Nav className ="ms-auto">   {/* ms- margin left */}
    {/*  <Nav.Link href ="/dashboard">Dashboard</Nav.Link>
    <Nav.Link href ="/dashboard">Tickets</Nav.Link>
    <Nav.Link href ="/dashboard">Logout</Nav.Link>*/}
    {/* <Link to ="/dashboard">  Dashboard  </Link>


    <Link to ="/tickets">    Tickets     </Link>

    <Link to ="">     Logout    </Link> */}
    <LinkContainer to ="/dashboard">
    <Nav.Link > Dashboard </Nav.Link>
    </LinkContainer>
    <LinkContainer to ="/ticket-list">
    <Nav.Link >Tickets</Nav.Link>
    </LinkContainer>
    <Nav.Link onClick={logMeOut}>Logout</Nav.Link> 

    </Nav>
    
    
    
    </Navbar.Collapse>
    </Container>




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