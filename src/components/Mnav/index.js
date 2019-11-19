import React from "react";
import "./style.css";
import { Nav } from "react-bootstrap"
function Mnav() {

    return (
        <Nav className="justify-content-center align-items-center">
            <Nav.Item>
                <Nav.Link href="/home">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/projects">My Porjects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact">Contact Me</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Mnav;