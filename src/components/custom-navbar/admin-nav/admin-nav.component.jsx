import React from 'react';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const AdminNav = () => {
    return <>
        <Nav className="mr-auto">
            <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
        </Nav>
        <Nav>
            <NavDropdown alignRight title={<>Admin</>} id="collasible-nav-dropdown">
                <LinkContainer to="/users"><NavDropdown.Item>Users</NavDropdown.Item></LinkContainer>
            </NavDropdown>
        </Nav>
    </>;
};

export default AdminNav;
