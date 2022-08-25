import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import { LinkContainer } from "react-router-bootstrap";

import Logo from "../assets/logo-notext.png";
import ConnectWallet from "./reach/ConnectWallet";
// import FaucetButton from "../../../../../../Downloads/ReachInsuranceDapp-main/src/components/reach/FaucetButton";
// import Balance from "../../../../../../Downloads/ReachInsuranceDapp-main/src/components/reach/Balance";
// import RegularPayment from "../../../../../../Downloads/ReachInsuranceDapp-main/src/components/reach/RegularPayment";


const AppNavbar = () => {


    return (
        <Navbar className="color-nav" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img
                        src={Logo}
                        width="60"
                        className="d-inline-block align-top"
                        alt="Reach Logo" />
                    {' '}
                    <p className="d-inline-block ml-3">Crowdfunding.</p>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>

                    {/* <ConnectWallet/> */}
                   
                   
                </Nav>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;