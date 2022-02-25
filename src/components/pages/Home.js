import {Button, Card, Container, Image, Row, Col} from "react-bootstrap";
import aboutPhoto from "../images/About-TSS-home-page-photo.jpg"
import contactPhoto from "../images/Contact-home-page-photo.jpg"
import whatWeDoPhoto from "../images/What-We-Do-home-page-photo.jpg"
import meetTeam from "../images/Team-home-page-photo.jpg"
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <Container>
            <Row>
                <Col md={4}>
                    <Card className="mb-3" style={{ width: '24rem' }}>
                        <Image
                            src={aboutPhoto}
                            className="card-img-top"
                            alt={"child and female support worker"}
                            fluid
                        />
                        <Card.Body>
                            <Card.Title>About Time Specialist Support</Card.Title>
                            <Card.Text>
                                What is Time Specialist Support?
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-3" style={{ width: '24rem' }}>
                        <Image
                            src={whatWeDoPhoto}
                            className="card-img-top"
                            alt={"child and male support worker"}
                            fluid
                        />
                        <Card.Body>
                            <Card.Title>What We Do</Card.Title>
                            <Card.Text>
                                Find out more about the services that Time Specialist support provides.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-3" style={{ width: '24rem' }}>
                        <Image
                            src={contactPhoto}
                            className="card-img-top"
                            alt={"child and male support worker"}
                            fluid
                        />
                        <Card.Body>
                            <Card.Title>Contact Us</Card.Title>
                            <Card.Text>
                                How to get in touch with us.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-3" style={{ width: '24rem' }}>
                        <Image
                            src={meetTeam}
                            className="card-img-top"
                            alt={"child and male support worker"}
                            fluid
                        />
                        <Card.Body>
                            <Card.Title>Meet The Team</Card.Title>
                            <Card.Text>
                                Who are we?
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-3" style={{ width: '24rem' }}>
                        <Image
                            src={meetTeam}
                            className="card-img-top"
                            alt={"child and male support worker"}
                            fluid
                        />
                        <Card.Body>
                            <Card.Title>Work For Us</Card.Title>
                            <Card.Text>
                                Apply for a job with Time.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default Home