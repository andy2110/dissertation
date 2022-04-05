import {Card, Container, Image, Row, Col} from "react-bootstrap";
import aboutPhoto from "../images/About-TSS-home-page-photo.jpg"
import contactPhoto from "../images/Contact-home-page-photo.jpg"
import whatWeDoPhoto from "../images/What-We-Do-home-page-photo.jpg"
import meetTeam from "../images/Team-home-page-photo.jpg"
import "../../App.css"
import {Link} from "react-router-dom";
import {useState} from "react";

const Home = (callback, deps) => {
    window['stop']()
    window['clear']()
    window['start']()

    const [sampleText, setSampleText] = useState(
        "The font will be applied to this text."
    );

        return (
            <Container>
                <div>
                <Row>
                    <Col lg={4} md={6}>
                        <Card className="mb-3">
                            <Image
                                src={aboutPhoto}
                                className="card-img-top"
                                alt={"child and female support worker"}
                                fluid
                            />
                            <Card.Body>
                                <Card.Title>About Time Specialist Support</Card.Title>
                                <Card.Text>
                                    What is Time Specialist Support? Find out more about the services we provide.
                                </Card.Text>
                                <Link to="/about" className="btn btn-primary">Find Out More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card className="mb-3">
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
                                <Link to="/about" className="btn btn-primary">Find Out More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card className="mb-3">
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
                                <Link to="/contact" className="btn btn-primary">Find Out More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card className="mb-3">
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
                                <Link to="/team" className="btn btn-primary">Find Out More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card className="mb-3">
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
                                <Link to="/vacancies" className="btn btn-primary">Find Out More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </div>
            </Container>
        )
}
export default Home