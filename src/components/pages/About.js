import {Container, Row, Col, Card, Image} from "react-bootstrap";
import aboutExamplePhoto from "../images/about-page-example-photo.jpg"

const About = () => {
    window['clear']();
    window['stop']();
    window['start'](3000);

    return(
        <Container>
            <Row>
                <Col>
                    <h1>About Us</h1>
                    <p>There’s never enough TIME in the day when you need it. That’s particularly true when you have a
                        child with autism. In fact, sometimes it may feel as if you’re stretched to breaking point.</p>
                    <p>What can you do, though? Your child has an autism spectrum condition. They can be choosy, get
                        overwhelmed, don’t enjoy all the same things that other kids do… and perhaps can be a little
                        difficult, too. You can handle it all, but could a stranger? And would they do it with the same
                        love and care that you do? </p>
                    <p>The answer is YES.</p>
                    <p>At TIME we understand that your child is too precious to leave with just anyone. We recruit and
                        train a team of bright, hard-working, dedicated support workers whose passion is helping young
                        people and adults with autism. We look for people who have that special touch and the ability to
                        cope with anything that’s thrown at them (quite literally, in some cases!).</p>
                    <p>When you get in touch, you’ll receive a home visit to find out about your child’s needs – and
                        yours. Whether you’re looking for a regular break, someone on the occasional weekend, or help
                        during the holidays, we choose a support worker to match.</p>
                    <p>DBS checked, fully trained and full of ideas on what to do and where to go… they’re ready to give
                        you that all important TIME so that you can feel refreshed.</p>
                    <p>So what are you waiting for?</p>

                    <h3>What We Do</h3>
                    <p>Time Specialist Support is an autism specific support agency. We offer a befriending service
                        where a support worker can accompany you or your child to access community activities or
                        specialist activities.</p>

                    <p>We work hard to carefully match you or your child with a support worker who we feel would be
                        suited. We look at interests as well as availability and gender.</p>

                    <p>We can provide social stories and visual resources to help explain this process or to help
                        explain to your child about going out with a support worker.</p>

                    <p>All of our support workers have an enhanced DBS (formally known as CRB),  training about autism
                        and strategies to support autistic people. On top of this training, all new staff carry out at
                        least two trial sessions with more experienced members of the team before they are able to
                        accompany young people in the community by themselves.</p>
                </Col>
                <Col>
                    <Card className="mb-3" style={{ width: '12rem' }}>
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