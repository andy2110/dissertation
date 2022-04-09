import {Container, Row, Col, Card, Image} from "react-bootstrap";
import aboutExamplePhoto from "../images/about-page-example-photo.jpg"
import {useContext, useEffect} from "react";
import {
    FontColourContext,
    ReadabilityContext, SetAutoContext,
    SetReadabilityContext, SetShowContext, ShowContext,
    SimpleContext,
    TextColourContext
} from "../Contexts";
import {Link} from "react-router-dom";
import AboutSimple from "../simplePages/AboutSimple";
import Navbar from "../layout/Navbar";
import * as React from "react";

const About = () => {
    const Simple = useContext(SimpleContext)
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

    const ABOUT_TIMER = 82200

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.sessionStorage.getItem("timeSpent") > ABOUT_TIMER){
                if (Readability === "FALSE"){
                    handleClickAuto()
                    SetReadability("TRUE")
                    console.log("TRIGGER ABOUT PAGE")
                }
            }
        }, ABOUT_TIMER);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [Readability])

    return(
        <Container style={pageStyle}>
            <Row>
                <Col>
                    <h1>About Us</h1>
                    {!Simple ?
                        <>
                            <p>
                                Time Specialist Support is an autism specific support agency that aims to help autistic
                                people and their families.
                            </p>
                            <p>
                                We understand that it’s very difficult to find time for yourself when you have a child
                                with autism. Your child may be fussy, easily overwhelmed, and dislike the things other
                                children like. This can be very difficult to manage. That’s why we’re here to help.
                            </p>
                            <h3>What We Do</h3>
                            <p>
                                At Time, we offer a befriending service where a support worker can accompany you or your
                                child to access community activities or specialist activities. This can free up time in
                                your day to go food shopping, catch up on errands, see a friend, or even just sit down
                                for a well-deserved break! All the while, you can rest assured that your child is safe
                                and in capable hands.
                            </p>
                            <p>
                                When you start with us, we’ll visit your home to discuss your child’s needs, as well as
                                your own needs. Then we will work hard to carefully match you or your child with a
                                support worker who we feel would be suited to them – looking at shared interests as well
                                as availability and gender. All our support workers have an enhanced DBS (formally known
                                as CRB), training about autism and strategies to support autistic people.
                            </p>
                            <p>
                                On top of this training, all new staff carry out at least two trial sessions with more
                                experienced members of the team before they can accompany young people in the community
                                by themselves.
                            </p>
                            <p>
                                If your child is uncertain about the process, we can provide social stories and visual
                                resources to help explain it to them and make sure that they are comfortable about
                                having
                                sessions with their support worker.
                            </p>
                            <p>
                                Please <Link to='/contact'>get in touch</Link> today to find out more!
                            </p>
                        </>
                        :
                        <AboutSimple/>
                    }
                </Col>
                <Col>
                    <Card className="mb-3" style={pageStyle}>
                        <Image
                            src={aboutExamplePhoto}
                            className="card-img-top"
                            alt={"child and female support worker"}
                            height={600}
                            width={206}
                            style={{aspectRatio: 600/206}}
                        />
                        <Card.Body>
                            <Card.Title>What do our sessions look like?</Card.Title>
                            <Card.Text>
                                Here is a photo of one of our support workers on a session.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default About