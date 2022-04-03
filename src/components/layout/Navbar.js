import {Container, Navbar, Nav, NavDropdown, Row, Col} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import * as React from "react";
import {useContext, useEffect, useState} from "react";
import {OpacityContext, SetOpacityContext} from "../Contexts";
import {Modal} from "../Modal";

const Navigation = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const Opacity = useContext(OpacityContext)
    const SetOpacity = useContext(SetOpacityContext)

    const [ReadOpacity,SetOpacityVal] = useState()

    useEffect(() => {

        SetOpacityVal(Opacity)

    },[Opacity])

    const [colour, setColour] = useState(null)

    const colours = ['yellow', 'red', 'blue', 'green']

    const renderButtons = colours => {
        return colours.map( (colour, index) => {
            return ( <li key={index}
                         className={'colour-selector ' + colour}
                         onClick={() => setColour(colour)}>
            </li> )
        })
    }

    const overlayStyle = {
        opacity: ReadOpacity,
        backgroundColor: colour
    }

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
                        <Navbar.Brand href="/">
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
                                <NavDropdown title="Further Links" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Row>
                    </Col>
                </Container>
            </Navbar>
            <br/>
            <div id='toolbox'>
                { renderButtons(colours) }
                <button onClick={openModal}>Open Modal</button>
                {showModal ? <Modal setShowModal={setShowModal} /> : null}
            </div>
        </>
    )
}

export default Navigation