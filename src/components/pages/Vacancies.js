import {useContext} from "react";
import {FontColourContext, TextColourContext} from "../Contexts";
import {Container} from "react-bootstrap";

const Vacancies = () => {
    const TextColour = useContext(TextColourContext)
    const FontColour = useContext(FontColourContext)
    window['stop']()
    window['clear']()
    window['start']()

    const pageStyle = {
        backgroundColor: TextColour,
        color: FontColour
    }

    return(
        <Container style={pageStyle}>
            <h1>Vacancy page here</h1>
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