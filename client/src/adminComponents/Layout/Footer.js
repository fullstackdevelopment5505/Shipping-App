import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          Copyright © 2020 MayTem GLOBAL. All rights reserved.
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
