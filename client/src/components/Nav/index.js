import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Nav(){
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Caleb Hay</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">About </Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Nav;