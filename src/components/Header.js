import React, { useState } from 'react';
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
<div style={{
            display: 'block', width: "100vw"
        }}>
            <Navbar expand="md"  className="mb-5 navbar bg-info sticky-top">
                <NavbarBrand href="/" style={{ color:"green", fontSize: "30px" }}>Doggy Hotel &nbsp; &nbsp; &nbsp; &nbsp;</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/" className='text-white'>Home &nbsp; &nbsp; &nbsp; &nbsp;</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/doggyhotelindex" className='text-white'>See All &nbsp; &nbsp; &nbsp; &nbsp;</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/doggyhotelnew" className='text-white'>New Dog Hotel</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
    );
}
  
export default Header;
  