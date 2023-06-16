import React from "react"
import { Navbar, NavbarBrand } from "reactstrap"

const Footer = () => {
    return (
        <div style={{display: 'block'}}>
            <Navbar className="Footer mt5 sticky-bottom">
                <NavbarBrand href="/" className="navbar bg-white text-primary"> <h5>&copy; E & J & C | 2023</h5> </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Footer;