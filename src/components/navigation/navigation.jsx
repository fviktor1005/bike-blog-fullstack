import React from "react";
import {NavLink} from "react-router-dom";
import UserItem from "Components/user-item";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
} from "reactstrap";

export function Navigation({isOpen, toggle}) {
    return (
        <Navbar color="light" light expand="md" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <NavbarBrand tag={NavLink} href="/" to="/">bike blog</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink activeClassName="nav-item active"
                                 className="nav-link"
                                 to="/new-post">New post</NavLink>
                    </NavItem>
                    <UserItem />
                </Nav>
            </Collapse>
        </Navbar>
    );
}
