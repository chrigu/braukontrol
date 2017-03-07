import React from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, IndexLink } from 'react-router';

const Header = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Braukontrol</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/">
          <NavItem>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="alerts">
          <NavItem>Alerts</NavItem>
        </LinkContainer>
        <LinkContainer to="recipes">
          <NavItem>Recipes</NavItem>
        </LinkContainer>
        <LinkContainer to="settings">
          <NavItem>Settings</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;