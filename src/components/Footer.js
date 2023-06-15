import React from "react"
import { Navbar, NavbarBrand } from "reactstrap"

const Footer = () => {
  return (
    <div style={{
    display: 'block'
    }}>      
      <Navbar className="Footer mt5" fixed="bottom">
        <NavbarBrand href="/" style={{color:"blue"}}> &copy; E & J & C | 2023 </NavbarBrand>
      </Navbar>
    </div>
  )
}
  
export default Footer;
  