import React, { useState } from 'react';
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Header(args) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
<div style={{
            display: 'block', width: "100vw"
        }}>
            <Navbar style={{ backgroundColor: '#E6E6FA' }} expand="md" fixed="top" className="mb-5">
                <NavbarBrand href="/" style={{color:"blue"}}>Doggy Hotel &nbsp; &nbsp; &nbsp; &nbsp;</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/" style={{color:"green"}}>Home &nbsp; &nbsp; &nbsp; &nbsp;</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/doggyhotelindex" style={{color:"green"}}>See All &nbsp; &nbsp; &nbsp; &nbsp;</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/doggyhotelnew" style={{color:"green"}}>New Dog Hotel</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}
  
export default Header;
  