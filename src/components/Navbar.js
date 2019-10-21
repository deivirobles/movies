import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import Logo from './../images/logo.png'

export default class Navigation extends Component{
  render(){
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><img src={Logo} alt="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/series">TV Shows</Nav.Link>
            <Nav.Link href="/">Favorites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
