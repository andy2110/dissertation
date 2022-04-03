import {Container, Navbar, Nav, NavDropdown, Row, Col, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import * as React from "react";
import { useContext, useEffect, useState } from "react";
import {ColourContext, OpacityContext, ReadabilityContext, SetOpacityContext, SetReadabilityContext} from "../Contexts";

export default function Navigation ({ handleClick }) {

    const Opacity = useContext(OpacityContext)
    const SetOpacity = useContext(SetOpacityContext)

    const Readability = useContext(ReadabilityContext)
    const SetReadability = useContext(SetReadabilityContext)

    const Colour = useContext(ColourContext)

    const [ReadVal,SetReadVal] = useState()

    const [ReadOpacity,SetOpacityVal] = useState()

    useEffect(() => {

        SetOpacityVal(Opacity)

    },[Opacity])

    useEffect(() => {

        SetReadVal(Readability)

    },[Readability])

    const overlayStyle = {
        opacity: ReadOpacity,
        backgroundColor: Colour
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.sessionStorage.getItem("timeSpent") > 5000){
                if (Readability === "FALSE"){
                    handleClick()
                    SetReadability("TRUE")
                }
            }
        }, 5000);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [Readability])

    // use state and context to monitor slider value
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Row className={"col-lg-10 col-xs-1"}>
                    <img
                        src={require('../images/tss-logo.png')}
                        width="920"
                        height="160"
                        className="d-inline-block align-top"
                        alt="Drawing of an employee holding hands with a child next to the words Time Specialist Support"
                    />
                    </Row>
                </Container>

            </Navbar>

            {/* FUTURE TASK - MAKE THIS STICKY DEPENDENT ON WHETHER MODAL IS ON */}
            <Navbar bg="light" expand="lg">
                {/* reference opacity using the state*/}
                <div id="overlay" style={overlayStyle}>
                </div>
                <Container>
                    <Col>
                    <Row>
                        <Navbar.Brand>
                            Time Specialist Support
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to="/">
                                        <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <Nav.Link>About us</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/team">
                                    <Nav.Link>Meet the Team</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/vacancy">
                                    <Nav.Link>Vacancies</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/contact">
                                    <Nav.Link>Contact Us</Nav.Link>
                                </LinkContainer>
                                <Nav.Link onClick={handleClick}>
                                    Accessibility
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Row>
                    </Col>
                </Container>
            </Navbar>
            <br/>
        </>
    )
}

// export default Navigation