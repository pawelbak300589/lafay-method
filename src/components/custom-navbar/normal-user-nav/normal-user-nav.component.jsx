import React from 'react';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const NormalUserNav = () => {
    return <>
        <Nav className="mr-auto">
            <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
        </Nav>
    </>;
};

export default NormalUserNav;
