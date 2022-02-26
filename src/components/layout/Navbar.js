import {Container, Navbar, Nav, NavDropdown, Row, Col} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
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

            <Navbar bg="light" expand="lg" sticky="top">
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
        </>
    )
}

export default Navigation