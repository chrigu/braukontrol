import React from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { Link, IndexLink } from 'react-router';

const Header = () => (
  <Navbar inverse collapseOnSelect>
      <li><Link to="/" activeClassName="active">Index</Link></li>
    <li><Link to="alerts" activeClassName="active">Alerts</Link></li>
    <li><Link to="settings" activeClassName="active">Settings</Link></li>
  </Navbar>
);

export default Header;