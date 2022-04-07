import {useContext} from "react";
import {FontColourContext, TextColourContext} from "../Contexts";
import {Container} from "react-bootstrap";

const Staff = () => {
        window['clear']();
        window['stop']();
        window['start']();

        const TextColour = useContext(TextColourContext)
        const FontColour = useContext(FontColourContext)

        const pageStyle = {
                backgroundColor: TextColour,
                color: FontColour
        }

    return(
        <Container style={pageStyle}>
            <h1>Staff page here</h1>
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

export default Staff