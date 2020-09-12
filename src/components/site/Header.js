import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const Header = () => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href="/">IGDB</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://api.igdb.com/" target="_blank">
                            API
                        </NavLink>
                        <NavLink href="https://api-docs.igdb.com/" target="_blank">
                            Documentation
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;