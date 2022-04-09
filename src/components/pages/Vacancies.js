import {useContext} from "react";
import {FontColourContext, TextColourContext} from "../Contexts";
import {Container} from "react-bootstrap";

const Vacancies = () => {
    const TextColour = useContext(TextColourContext)
    const FontColour = useContext(FontColourContext)
    window['stop']()
    window['clear']()

    const pageStyle = {
        backgroundColor: TextColour,
        color: FontColour
    }

    return(
        <Container style={pageStyle}>
            <h1>Work For Us</h1>
            <hr/>
            <p>We do not have any jobs available right now.</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>

    )
}

export default Vacancies