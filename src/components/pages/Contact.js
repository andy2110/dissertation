import {useContext, useEffect} from "react";
import {
    FontColourContext,
    ReadabilityContext,
    SetAutoContext, SetReadabilityContext,
    SetShowContext,
    ShowContext,
    TextColourContext
} from "../Contexts";
import {Container} from "react-bootstrap";

const Contact = () => {
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

    const CONTACT_TIMER = 69000

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.sessionStorage.getItem("timeSpent") > CONTACT_TIMER){
                if (Readability === "FALSE"){
                    handleClickAuto()
                    SetReadability("TRUE")
                    console.log("TRIGGER CONTACT PAGE")
                }
            }
        }, CONTACT_TIMER);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [Readability])

    return(
        <Container style={pageStyle}>
            <h3>NOTE FOR TESTERS</h3>
            <p>This page has not had simplified text implemented.</p>
                <h1>Contact Us</h1>
                <hr/>
                <h4>General Enquiries</h4>
                To get in touch, use the following methods:
                        <ul>
                                <li>Email: info@time-specialist-support.com</li>
                                <li>Phone: 0161 879 7984</li>
                        </ul>
                <h4>Feedback and Complaints</h4>
                <p>We are committed to ensuring that any person or organisation using services provided by Time Specialist Support has the right to lodge a complaint or have their concerns addressed.</p>
                <p><b>A comment</b> is a remark, observation or criticism that may require immediate action but does not require a full investigation. Time Specialist Support records all comments received and will discuss these in Team meetings as and when they arise so that improvements can be discussed and implemented.</p>
                <p><b>A compliment</b> is a polite expression of praise or commendation. If a compliment is about an individual staff member then they will be informed in writing and a copy of the compliment is stored in their personnel file. Compliments can help us share good practice and improve our services.</p>
                <p><b>A complaint</b> is an expression of dissatisfaction, whether verbal or written, and whether justified or not and which requires further investigation. You can make a complaint about any aspect of the delivery of Time Specialist Support’s services.</p>
                        If you file a complaint, we will:
                        <ul>
                                <li>Listen and treat you with respect</li>
                                <li>Tell you what to expect while your complaint is being looked into</li>
                                <li>Carry out the complaint handling process in a fair and open way</li>
                                <li>Provide reasons for decisions that are made</li>
                                <li>Protect your privacy</li>
                        </ul>

                        If your complaint involves any of the management team, you can directly email our Director, Tori Houghton, at tori@time-specialist-support.com
        </Container>
    )
}

export default Contact