import {Container, Navbar, Nav, NavDropdown, Row, Col} from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Col>
                <Row className={"col-lg-10 col-xs-1"}>
                    <img
                        src={require('../tss-logo.png')}
                        width="920"
                        height="160"
                        className="d-inline-block align-top"
                        alt="Drawing of an employee holding hands with a child next to the words Time Specialist Support"/>
                </Row>
                <Row>
                    <Navbar.Brand href="/">
                        Time Specialist Support
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/team">Meet the Team</Nav.Link>
                            <Nav.Link href="/vacancies">Vacancies</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
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
    )
}

export default Navigation