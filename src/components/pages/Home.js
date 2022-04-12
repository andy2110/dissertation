import {Card, Container, Image, Row, Col} from "react-bootstrap";
import aboutPhoto from "../images/About-TSS-Home-page-photo.webp"
import whatWeDoPhoto from "../images/Contact-home-page-photo.webp"
import contactPhoto from "../images/What-We-Do-home-page-photo.webp"
import meetTeam from "../images/Team-home-page-photo.webp"
import "../../App.css"
import {Link} from "react-router-dom";
import {
    FontColourContext,
    ReadabilityContext, SetAutoContext,
    SetReadabilityContext, SetShowContext, ShowContext,
    TextColourContext
} from "../Contexts";
import {useContext, useEffect} from "react";

const Home = (callback, deps) => {
    const TextColour = useContext(TextColourContext)
    const FontColour = useContext(FontColourContext)
    const Readability = useContext(ReadabilityContext)
    const SetReadability = useContext(SetReadabilityContext)
    const Show = useContext(ShowContext)
    const SetShow = useContext(SetShowContext)
    const SetAuto = useContext(SetAutoContext)

    const pageStyle = {
        backgroundColor: TextColour,
        color: FontColour
    }

    const handleClickAuto = () => {
        SetShow(!Show)
        SetAuto(true)
    };

    const HOME_TIMER = 50000

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.sessionStorage.getItem("timeSpent") > HOME_TIMER){
                if (Readability === "FALSE"){
                    handleClickAuto()
                    SetReadability("TRUE")
                }
            }
        }, HOME_TIMER);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [Readability])

        return (
            <Container>
                <div>
                <Row>
                    <Col xxl={3} xl={4} lg={6} md={8} sm={10} xs={10}>
                        <Card className="mb-3" style={pageStyle}>
                            <Image
                                src={aboutPhoto}
                                className="card-img-top"
                                alt={"child and female support worker on a slide"}
                                width={'100%'}
                                height={187}
                                style={{aspectRatio: 187/280}}
                            />
                            <Card.Body>
                                <Card.Title>About Time Specialist Support</Card.Title>
                                <Card.Text>
                                    Find out more about the services we provide.
                                </Card.Text>
                                <Link to="/about" className="btn btn-primary">Find Out More</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={4} lg={6} md={8} sm={10} xs={10}>
                        <Card className="mb-3" style={pageStyle}>
                            <Image
                                src={whatWeDoPhoto}
                                className="card-img-top"
                                alt={"child and male support worker talking"}
                                width={'100%'}
                                height={187}
                                style={{aspectRatio: 187/280}}
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
                    <Col xxl={3} xl={4} lg={6} md={8} sm={10} xs={10}>
                        <Card className="mb-3" style={pageStyle}>
                            <Image
                                src={contactPhoto}
                                className="card-img-top"
                                alt={"child and female support worker"}
                                width={'100%'}
                                height={187}
                                style={{aspectRatio: 187/280}}
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
                    <Col xxl={3} xl={4} lg={6} md={8} sm={10} xs={10}>
                        <Card className="mb-3" style={pageStyle}>
                            <Image
                                src={meetTeam}
                                className="card-img-top"
                                alt={"child and female support worker high five"}
                                width={'100%'}
                                height={187}
                                style={{aspectRatio: 187/280}}
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