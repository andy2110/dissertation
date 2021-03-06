import {Card, Col, Container, Image, Row} from "react-bootstrap";
import toriPhoto from "../images/Tori-3.webp"
import triciaPhoto from "../images/tricia-photo.webp"
import allyPhoto from "../images/Ally-2.webp"
import bradleyPhoto from "../images/bradley-photo.webp"
import sophiePhoto from "../images/sophie-photo.webp"
import {useContext, useEffect} from "react";
import {
    FontColourContext,
    ReadabilityContext, SetAutoContext,
    SetReadabilityContext, SetShowContext, ShowContext,
    SimpleContext,
    TextColourContext
} from "../Contexts";

const Team = () => {
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

    const CONTACT_TIMER = 233400

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.sessionStorage.getItem("timeSpent") > CONTACT_TIMER){
                if (Readability === "FALSE"){
                    handleClickAuto()
                    SetReadability("TRUE")
                }
            }
        }, CONTACT_TIMER);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [Readability])

    return(
        <Container>
            <Row>
                <Col style={pageStyle}>
                    <h1>Meet The Team</h1>
                    <p>At Time Specialist Support, we employ people who understand the needs of people living with special needs. We pride ourselves on being flexible around your specific needs.</p>
                    <p>If you call or email Time Specialist Support ??? here are the faces behind the names of those helping you.</p>
                </Col>
            </Row>

            <Row>
                <Col lg={4} md={6}>
                    <Card className="mb-3" style={pageStyle}>
                        <Image
                            src={toriPhoto}
                            className="card-img-top"
                            alt={"child and female support worker"}
                            width={280}
                            height={280}
                            style={{aspectRatio: 280/280}}
                        />
                        <Card.Body>
                            <Card.Title><h2>Tori</h2></Card.Title>
                            <Card.Text as="div">
                                {
                                    Simple ?
                                        <>
                                            <p>
                                                Tori created Time Specialist Support. She is a speech and language
                                                therapist who has worked with children with autism since 2000.
                                            </p>
                                            <p>
                                                She had the idea to set up the business when she was at university.
                                            </p>
                                            <blockquote className="blockquote mb-0">
                                                ???After putting up an advert for babysitting in a specialist nursery where I was doing
                                                    a clinical placement I was overwhelmed at how much families seemed desperate for
                                                    this kind of support.
                                            </blockquote>
                                            <blockquote className="blockquote mb-0">
                                                It was then I realised the importance of just having a couple
                                                of hours off to do normal things like shopping or to clean the bath.???
                                            </blockquote>
                                            <br/>
                                            <p>
                                                She set up a business called Time Babysitting in 2008 and changed the
                                                name to Time Specialist Support in 2012 because it had grown bigger.
                                            </p>
                                            <br/>
                                            <blockquote className="blockquote mb-0">
                                                ???We began to recruit more and more older children, and families wanted us to take
                                                    their children out rather than staying in.
                                            </blockquote>
                                            <blockquote className="blockquote mb-0">
                                            Our support workers are much more
                                                interactive and hands on than the title babysitter suggested.???
                                            </blockquote>
                                            <br/>
                                            <p>
                                                Tori is also the co-editor of AuKids Magazine (www.aukids.co.uk).
                                            </p>
                                                In her free time, Tori likes to:
                                                <ul>
                                                    <li>Spend time with her son Remy (and their two dogs Tilly and Ted)</li>
                                                    <li>Travel</li>
                                                    <li>Play Tennis</li>
                                                    <li>Sing in a weekly group</li>
                                                </ul>
                                        </>
                                        :
                                        <>
                                        <p>As well as setting up and managing Time Specialist support, Tori is also a qualified
                                            speech and language therapist and has worked with children with autism since
                                            qualifying in 2000.</p>
                                        <p>She was inspired to set up a specialist support agency when she was studying at
                                            university.</p>


                            <blockquote className="blockquote mb-0">
                                <p>???After putting up an advert for babysitting in a specialist nursery where I was doing
                                    a clinical placement I was overwhelmed at how much families seemed desperate for
                                    this kind of support. It was then I realised the importance of just having a couple
                                    of hours off to do normal things like shopping or to clean the bath???</p>
                            </blockquote>
                                <br/>
                                <p>She set up Time Babysitting in 2008 and changed the name to Time Specialist Support
                                    in 2012 to reflect the changing nature of the service.</p>
                                <blockquote className="blockquote mb-0">
                                    <p>???We began to recruit more and more older children, and families wanted us to take
                                        their children out rather than staying in. Our support workers are much more
                                        interactive and hands on than the title babysitter suggested???</p>
                                </blockquote>
                                <br/>
                                <p>As well as running Time Specialist support, Tori is also the co-editor of Aukids
                                    (www.aukids.co.uk) Magazine.</p>
                                <p>In her free time Tori likes to spend time with her son, Remy and  her two dogs, Tilly
                                    and Ted. She loves travelling, playing tennis and  sings in a weekly group.</p>
                                        </>
                                }

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6}>
                    <Card className="mb-3" style={pageStyle}>
                        <Image
                            src={triciaPhoto}
                            className="card-img-top"
                            alt={"child and female support worker"}
                            width={280}
                            height={280}
                            style={{aspectRatio: 280/280}}
                        />
                        <Card.Body>
                            <Card.Title><h2>Tricia</h2></Card.Title>
                            <Card.Text as="div">
                                {
                                    Simple ?
                                        <>
                                            <p>
                                                Tricia is in charge of collecting money for the company and making sure
                                                our workers are paid. Tricia works from home. Before working for Time,
                                                Tricia:

                                            </p>
                                                <ul>
                                                    <li>Helped her husband run his own business</li>
                                                    <li>Owned her own card shop</li>
                                                    <li>Worked as an accountant</li>
                                                </ul>
                                                When she is not working Tricia likes to:
                                                <ul>
                                                    <li>Play golf</li>
                                                    <li>Play bridge</li>
                                                </ul>
                                            <p>
                                                Tricia is also Tori's mum!
                                            </p>
                                        </>
                                        :
                                        <>
                                <p>Tricia is in charge of collecting all the time sheets from the support workers,
                                    invoicing families and the council and most importantly making sure that our valued
                                    support workers get paid! Tricia is not based in the Trafford office but works from
                                    home. Before working for Time, Tricia helped her husband Tony run his own business,
                                    she has also owned her own card shop and worked in an accountancy firm to name but
                                    a few of her jobs!</p>

                                <p>When she is not working, Tricia likes to play golf and bridge. Tricia is also Tori???s
                                    mum!</p>

                                <p>tricia@time-specialist-support.com</p>
                                        </>
                                }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6}>
                    <Card className="mb-3" style={pageStyle}>
                        <Image
                            src={allyPhoto}
                            className="card-img-top"
                            alt={"child and female support worker"}
                            width={280}
                            height={280}
                            style={{aspectRatio: 280/280}}
                        />
                        <Card.Body>
                            <Card.Title><h2>Ally</h2></Card.Title>
                            <Card.Text as="div">
                                {
                                    Simple ?
                                        <>
                                            <p>
                                                Ally started working for Time Specialist Support in July 2016 as the new
                                                Service Manager. She has worked with children and young adults with
                                                autism and special needs since 2003.
                                            </p>
                                            <p>
                                                She is very experienced. She has worked for the Seashell Trust and the NHS.
                                            </p>
                                            <blockquote className="blockquote mb-0">
                                                ???When the chance arose to work for Time I found it was an opportunity too good
                                                    to pass up.
                                            </blockquote>
                                            <br/>
                                            <blockquote className="blockquote mb-0">
                                                We are a forward thinking company that is dedicated to the welfare
                                                    of the families entrusted to us.
                                                </blockquote>
                                            <br/>
                                                <blockquote className="blockquote mb-0">
                                                We constantly strive to improve our service
                                                    and work within a dedicated team to ensure this happens.???
                                            </blockquote>
                                            <br/>
                                                When she is not working, Ally enjoys:
                                                <ul>
                                                    <li>Walking her dog</li>
                                                    <li>Camping (but only when the weather is nice!)</li>
                                                    <li>Cooking</li>
                                                </ul>
                                        </>
                                        :
                                        <>

                                <p>Ally started working for Time in July 2016 as the new Service Manager. She has worked
                                    with children and young adults with autism and special needs since 2003. She has a
                                    broad spectrum of experience ranging from working for the  Seashell Trust to the
                                    NHS.</p>
                                <blockquote className="blockquote mb-0">
                                    ???When the chance arose to work for Time I found it was an opportunity too good
                                        to pass up, we are a forward thinking company that is dedicated to the welfare
                                        of the families entrusted to us. We constantly strive to improve our service
                                        and work within a dedicated team to ensure this happens???
                                </blockquote>
                                <br/>
                                <p>In her spare time Ally enjoys cooking, long walks with the dog and camping, although
                                    after a weekend away with her 2 teenage boys and the dog she found out that 2
                                    teenagers and a wet dog don???t go well in a tent so is definitely a fair weather
                                    camper!</p>
                                        </>
                                }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6}>
                    <Card className="mb-3" style={pageStyle}>
                        <Image
                            src={bradleyPhoto}
                            className="card-img-top"
                            alt={"child and female support worker"}
                            width={280}
                            height={280}
                            style={{aspectRatio: 280/280}}
                        />
                        <Card.Body>
                            <Card.Title><h2>Bradley</h2></Card.Title>
                            <Card.Text as="div">
                                {
                                    Simple ?
                                        <>
                                            <p>
                                                Bradley started working for Time in January 2017 as an Admin Assistant. He
                                                later became the Recruitment Coordinator, so he is in charge of hiring new talent!
                                            </p>
                                            <blockquote className="blockquote mb-0">
                                                ???I initially worked for Time on a part-time basis and eventually had to find
                                                    full-time work.
                                            </blockquote>
                                            <br/>
                                            <blockquote className="blockquote mb-0">
                                                But after almost 2 years away, in a twist of fate, the same
                                                    recruitment role became available on a full-time basis and I jumped at the chance
                                                    to work for this great company again.
                                            </blockquote>
                                            <br/>
                                            <blockquote className="blockquote mb-0">
                                                Having shadowed sessions, I???ve witnessed the hugely positive impact the support
                                                    has on our service users and their families.
                                            </blockquote>
                                            <br/>
                                            <blockquote className="blockquote mb-0">
                                                To be part of this in some
                                                    way gives me a great sense of satisfaction at the end of each day.???
                                            </blockquote>
                                            <br/>
                                                Bradley has a degree in Biology and in his spare time he:
                                                <ul>
                                                    <li>Plays guitar</li>
                                                    <li>Sings</li>
                                                    <li>Writes songs</li>
                                                    <li>Cycles</li>
                                                    <li>Hikes</li>
                                                </ul>
                                        </>
                                        :
                                        <>
                                            <p>Bradley started working for Time in January 2017 as an Admin Assistant and the role
                                                naturally evolved into working more closely in the recruitment side of things, so
                                                much so that his official role became Recruitment Coordinator ??? bringing in great
                                                new support workers for our service users.</p>
                                            <blockquote className="blockquote mb-0">
                                                <p>???I initially worked for Time on a part-time basis and eventually had to find
                                                full-time work but after almost 2 years away, in a twist of fate, the same
                                                recruitment role became available on a full-time basis and I jumped at the chance
                                                to work for this great company again.</p>
                                            </blockquote>
                                            <br/>
                                            <blockquote className="blockquote mb-0">
                                                <p>Having shadowed sessions, I???ve witnessed the hugely positive impact the support
                                                    has on our service users and their families, and to be part of this in some
                                                    way gives me a great sense of satisfaction at the end of each day.???</p>
                                            </blockquote>
                                            <br/>
                                            <p>Bradley has a degree in Biology and in his spare time he plays guitar, sings, and
                                                writes songs. He also likes cycling, and walking in the UK???s national parks.</p>
                                                    </>
                                        }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6}>
                    <Card className="mb-3" style={pageStyle}>
                        <Image
                            src={sophiePhoto}
                            className="card-img-top"
                            alt={"child and female support worker"}
                            width={280}
                            height={280}
                            style={{aspectRatio: 280/280}}
                        />
                        <Card.Body>
                            <Card.Title><h2>Sophie</h2></Card.Title>
                            <Card.Text as="div">
                                {
                                    Simple ?
                                        <>
                                            <p>
                                                Sophie started working for Time Specialist Support in May 2018 as a
                                                support worker. She was also learning Psychology and Criminology at
                                                university!
                                            </p>
                                            <p>
                                                Sophie graduated and became a Supervisor. She later became Field Supervisor, and then Assistant Manager.
                                            </p>
                                            <blockquote className="blockquote mb-0">
                                                    ???I was excited when the opportunity arose for me to join the core team at Time.
                                                    I love the fact that my new role still enables me to do support work as I love
                                                    going out in to the community meeting and building relationships with Time???s
                                                    service users and their families.
                                            </blockquote>
                                            <br/>
                                            <blockquote className="blockquote mb-0">
                                                    Support work is more rewarding than I ever
                                                    could have imagined and working with children has taught me that it really is
                                                    the little things in life that make all the difference!

                                            </blockquote>
                                            <br/>
                                            <blockquote className="blockquote mb-0">
                                                    I like the fact I had
                                                    the chance to meet a lot of our families as a support worker first and was able
                                                    to develop some close relationships with those that I did meet, this is
                                                    definitely something that I think will assist me in my new role as Assistant
                                                    Manager.???
                                            </blockquote>
                                            <br/>
                                                When Sophie isn???t working she enjoys:
                                                <ul>
                                                    <li>Going to the cinema</li>
                                                    <li>Going to the gym</li>
                                                    <li>Sunny days out</li>
                                                </ul>
                                        </>
                                        :
                                        <>
                                <p>Sophie started working for Time Specialist in May 2018 as a support worker whilst
                                    she was studying Psychology and Criminology at university. Sophie has since
                                    graduated from university and joined the core team- starting out as a Field
                                    Supervisor and then moved into the position of Assistant Manager. Sophie still
                                    continues to support our service users. </p>
                                <blockquote className="blockquote mb-0">
                                    ???I was excited when the opportunity arose for me to join the core team at Time.
                                        I love the fact that my new role still enables me to do support work as I love
                                        going out in to the community meeting and building relationships with Time???s
                                        service users and their families. Support work is more rewarding than I ever
                                        could have imagined and working with children has taught me that it really is
                                        the little things in life that make all the difference! I like the fact I had
                                        the chance to meet a lot of our families as a support worker first and was able
                                        to develop some close relationships with those that I did meet, this is
                                        definitely something that I think will assist me in my new role as Field
                                        Supervisor.???
                                </blockquote>
                                <br/>
                                <p>When Sophie isn???t working she loves to spend time socialising with her family and
                                    friends. She enjoys trips to the cinema, going to the gym and sunny days out! </p>
                                        </>
                                }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Team