import {Container, Navbar, Nav, NavDropdown, Row, Col, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import * as React from "react";
import { useContext, useEffect, useState } from "react";
import {
    ColourContext, FontColourContext,
    OpacityContext,
    ReadabilityContext,
    SetOpacityContext,
    SetReadabilityContext,
    TextColourContext
} from "../Contexts";

export default function Navigation ({ handleClick }) {
    const Opacity = useContext(OpacityContext)
    const SetOpacity = useContext(SetOpacityContext)
    const Readability = useContext(ReadabilityContext)
    const SetReadability = useContext(SetReadabilityContext)
    const Colour = useContext(ColourContext)
    const TextColour = useContext(TextColourContext)
    const FontColour = useContext(FontColourContext)

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
        backgroundColor: Colour,
    }

    function tracker(){
        window['stop']()
        window['clear']()
        window['start']()
    }

    function trackerStop(){
        window['stop']()
        window['clear']()
    }


    let pageStyle;
    if (FontColour !== "#000000"){
            pageStyle = {
                backgroundColor: TextColour,
                color: FontColour
            }
        } else {
        pageStyle = {
            backgroundColor: TextColour
        }
    }

    const imgStyle = {
        aspectRatio: 920/160,
    }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Row className={"col-lg-10 col-xs-1"}>
                    <img
                        src={require('../images/tss-logo.webp')}
                        className="d-inline-block align-top"
                        alt="Drawing of an employee holding hands with a child next to the words Time Specialist Support"
                        width={'100%'}
                        height={160}
                        style={imgStyle}
                    />
                    </Row>
                </Container>

            </Navbar>

            {/* FUTURE TASK - MAKE THIS STICKY DEPENDENT ON WHETHER MODAL IS ON */}
            <Navbar bg="light" expand="lg">
                {/* reference opacity using the state*/}
                <div id="overlay" style={overlayStyle}>
                </div>
                <Container style={pageStyle}>
                    <Col>
                    <Row>
                        <Navbar.Brand style={pageStyle}>
                            Time Specialist Support
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to="/" style={pageStyle}>
                                        <Nav.Link onClick={tracker}>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about" style={pageStyle}>
                                    <Nav.Link onClick={tracker}>About us</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/team" style={pageStyle}>
                                    <Nav.Link onClick={tracker}>Meet the Team</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/vacancy" style={pageStyle}>
                                    <Nav.Link onClick={trackerStop}>Vacancies</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/contact" style={pageStyle}>
                                    <Nav.Link onClick={tracker}>Contact Us</Nav.Link>
                                </LinkContainer>
                                <Nav.Link onClick={handleClick} style={pageStyle}>
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