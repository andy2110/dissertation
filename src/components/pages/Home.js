import {Card, Container, Image, Row, Col} from "react-bootstrap";
import aboutPhoto from "../images/About-TSS-home-page-photo.jpg"
import whatWeDoPhoto from "../images/Contact-home-page-photo.jpg"
import contactPhoto from "../images/What-We-Do-home-page-photo.jpg"
import meetTeam from "../images/Team-home-page-photo.jpg"
import "../../App.css"
import {Link} from "react-router-dom";
import {FontColourContext, SetFontColourContext, TextColourContext} from "../Contexts";
import {useContext} from "react";

const Home = (callback, deps) => {
    const TextColour = useContext(TextColourContext)
    const FontColour = useContext(FontColourContext)
    window['stop']()
    window['clear']()
    window['start']()

    const pageStyle = {
        backgroundColor: TextColour,
        color: FontColour
    }


        return (
            <Container>
                <div>
                <Row>
                    <Col lg={4} md={6}>
                        <Card className="mb-3" style={pageStyle}>
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
                        <Card className="mb-3" style={pageStyle}>
                            <Image
                                src={whatWeDoPhoto}
                                className="card-img-top"
                                alt={"child and male support worker"}
                                height={280}
                                width={187}
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
                        <Card className="mb-3" style={pageStyle}>
                            <Image
                                src={contactPhoto}
                                className="card-img-top"
                                alt={"child and male support worker"}
                                height={280}
                                width={187}

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
                        <Card className="mb-3" style={pageStyle}>
                            <Image
                                src={meetTeam}
                                className="card-img-top"
                                alt={"child and male support worker"}
                                height={280}
                                width={187}
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