import {Container, Row, Col, Card, Image} from "react-bootstrap";
import aboutExamplePhoto from "../images/about-page-example-photo.jpg"
import {useContext} from "react";
import {FontColourContext, SimpleContext, TextColourContext} from "../Contexts";
import {Link} from "react-router-dom";

const About = () => {
    window['clear']();
    window['stop']();
    window['start'](3000);
    const Simple = useContext(SimpleContext)
    const TextColour = useContext(TextColourContext)
    const FontColour = useContext(FontColourContext)

    const pageStyle = {
        backgroundColor: TextColour,
        color: FontColour
    }

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
                                resources to help explain it to them and make sure that they are comfortable about having
                                sessions with their support worker.
                            </p>
                            <p>
                                Please <Link to='/contact'>get in touch</Link> today to find out more!
                            </p>
                        </>
                        :
                        <>
                            <p>
                                We are a company that helps people with autism and their families.
                            </p>
                            <p>
                                We know what it is like to have a child with autism. Your child could be:
                                <ul>
                                    <li>Fussy</li>
                                    <li>Easily overwhelmed</li>
                                    <li>Like different things to other children</li>
                                    <li>Be difficult to manage</li>
                                </ul>
                                Our aim is to help you manage this.
                            </p>

                            <h3>What We Do</h3>
                            <p>We offer a service where a support worker can come with you or your child to different
                                activities. This can give you more free time to relax or do chores.</p>
                            <p>
                                When you start with us, we will visit your home to discuss:
                                <ul>
                                    <li>What your child needs</li>
                                    <li>What you need</li>
                                </ul>
                                Once we have spoken to you, we will find a support worker to suit your child. We will
                                look at:
                                <ul>
                                    <li>Shared interests</li>
                                    <li>Availability</li>
                                    <li>Gender</li>
                                </ul>
                            </p>
                            <p>
                                All of our support workers have been DBS-checked, training about autism, and know how to
                                support autistic people.
                            </p>
                            <p>
                                ‘DBS’ means Disclosure and Barring Service. This will ensure that our support workers
                                are able to safely work with you and your child.
                            </p>
                            <p>
                                When a support worker is new, they will practice sessions with other support workers
                                before they can work alone.
                            </p>
                            <p>
                                This means your child will always be cared for safely.
                            </p>
                            <p>
                                If your child is unsure about anything, we can explain it to them visually or with
                                stories. This will make them more comfortable about being with a support worker.
                            </p>
                            <p>
                                Please <Link to='/contact'>get in touch</Link> today to find out more!
                            </p>
                        </>
                    }
                </Col>
                <Col>
                    <Card className="mb-3" style={pageStyle}>
                        <Image
                            src={aboutExamplePhoto}
                            className="card-img-top"
                            alt={"child and female support worker"}
                            fluid
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