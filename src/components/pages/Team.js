import {Card, Col, Container, Image, Row} from "react-bootstrap";
import aboutExamplePhoto from "../images/about-page-example-photo.jpg";

const Team = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <h1>Meet The Team</h1>
                    <p>At Time Specialist Support, we employ people who understand the needs of people living with special needs. We pride ourselves on being flexible around your specific needs.</p>
                    <p>If you call or email Time Specialist Support – here are the faces behind the names of those helping you.</p>
                </Col>
            </Row>

            <Row>
                <Col lg={4} md={6}>
                    <Card className="mb-3" style={{ width: '18rem' }}>
                        <Image
                            src={aboutExamplePhoto}
                            className="card-img-top"
                            alt={"child and female support worker"}
                            fluid
                        />
                        <Card.Body>
                            <Card.Title>Tori</Card.Title>
                            <Card.Text>
                                Tori text
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6}>
                    <Card className="mb-3" style={{ width: '18rem' }}>
                        <Image
                            src={aboutExamplePhoto}
                            className="card-img-top"
                            alt={"child and female support worker"}
                            fluid
                        />
                        <Card.Body>
                            <Card.Title>Tricia</Card.Title>
                            <Card.Text>
                                Tricia text
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6}>
                    <Card className="mb-3" style={{ width: '18rem' }}>
                        <Image
                            src={aboutExamplePhoto}
                            className="card-img-top"
                            alt={"child and female support worker"}
                            fluid
                        />
                        <Card.Body>
                            <Card.Title>Ally</Card.Title>
                            <Card.Text>
                                Ally text
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6}>
                    <Card className="mb-3" style={{ width: '18rem' }}>
                        <Image
                            src={aboutExamplePhoto}
                            className="card-img-top"
                            alt={"child and female support worker"}
                            fluid
                        />
                        <Card.Body>
                            <Card.Title>Ally</Card.Title>
                            <Card.Text>
                                Ally text
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6}>
                    <Card className="mb-3" style={{ width: '18rem' }}>
                        <Image
                            src={aboutExamplePhoto}
                            className="card-img-top"
                            alt={"child and female support worker"}
                            fluid
                        />
                        <Card.Body>
                            <Card.Title>Ally</Card.Title>
                            <Card.Text>
                                Ally text
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Team