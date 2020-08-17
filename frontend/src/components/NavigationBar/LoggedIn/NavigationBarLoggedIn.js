import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Styles from '../NavigationBarStyles';

export class NavigationBarLoggedIn extends React.Component {

  render () {
    return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">HomeAwayCrime</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/listings">Listings</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/logout">Logout</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/userinput">UserInput</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
    )
  };
}
