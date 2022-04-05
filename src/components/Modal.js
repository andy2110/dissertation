import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {useCallback, useContext, useMemo, useState} from "react";
import Navbar from "../components/layout/Navbar";
import * as React from "react";
import RangeSlider from "./Slider";
import {
    ColourContext,
    OpacityContext,
    ReadabilityContext,
    SetColourContext,
    SetOpacityContext, SetSimpleContext,
    SimpleContext
} from "./Contexts";
import FontPicker from "font-picker-react";

export function AccessibilityModal(callback, deps) {
    // CONTEXTS
    const SetOpacity = useContext(SetOpacityContext)
    const Opacity = useContext(OpacityContext)
    const SetColour = useContext(SetColourContext)
    const Colour = useContext(ColourContext)
    const Simple = useContext(SimpleContext)
    const SetSimple = useContext(SetSimpleContext)
    const Readability = useContext(ReadabilityContext)


    // HANDLE OPACITY SLIDER
    const sliderValueChanged = useCallback((val) => {
        SetOpacity(val)
    });
    const sliderProps = useMemo(
        () => ({
            min: 0,
            max: 0.9,
            value: Opacity,
            step: 0.01,
            label: 'Overlay Opacity',
            onChange: (e) => sliderValueChanged(e),
        }),
        [Opacity]
    );

    // HANDLE SIMPLIFIED TEXT
    const [buttonText, setButtonText] = useState("Enable");

    const enableSimple = () => {
        SetSimple(!Simple)
        if (Simple === true){
            setButtonText("Enable")
        } else {
            setButtonText("Disable")
        }
    }


    // HANDLE OVERLAY COLOUR
    const colours = ['white', 'yellow', 'red', 'blue', 'green']
    const renderButtons = colours => {
        return colours.map( (colour, index) => {
            return ( <li key={index}
                         className={'colour-selector ' + colour}
                         onClick={() => SetColour(colour)}>
            </li> )
        })
    }

    const resetColours = () => {
        SetColour(null)
        SetOpacity(0.5)
    }


    // HANDLE FONTS
    const [activeFontFamily, setFont] = useState("Open Sans");


    // HANDLE MODAL LOGIC
    const [show, setShow] = useState(false);
    const handleClick = () => {setShow(!show)};
    const handleClose = () => setShow(false);

    return (
        <div>
            <Navbar handleClick={handleClick} />
            <div hidden="True">
            <Modal className="apply-font" size="lg" show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Accessibility Features</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col>
                                <p>
                                    We've noticed you spent a long time on this page, would you like to activate any of
                                    the following reading comprehension features? If not, simply click away from this
                                    notification box and it will not automatically pop-up again.
                                </p>
                                <p>
                                    If you wish to view these settings in the future, you can click 'Accessibility' on
                                    the navigation bar.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} s={8} md={4}>
                                <h4>Colour Overlay</h4>
                                <p>
                                    Many people find it helpful to have a coloured overlay when they are reading on a
                                screen. If you want to try it out, select a colour below and then use the slider to
                                adjust how bright or dark you want the overlay to be.
                                </p>
                                <RangeSlider {...sliderProps} />
                                <div id='toolbox'>
                                    { renderButtons(colours) }
                                </div>
                                <Button onClick={resetColours}>Reset</Button>
                                <br/>
                                <br/>
                            </Col>
                            <Col xs={12} s={8} md={4}>
                                <h4>Simplified Text</h4>
                                <p>If you want a shorter, simplified version of the website content, click the button
                                    below. It will break up larger pieces of text, and use simpler language overall.</p>
                                <div>
                                    <Button onClick={enableSimple}>{buttonText} Simplified Text</Button>
                                </div>
                                <br/>
                                <br/>
                            </Col>
                            <Col xs={12} s={8} md={4}>
                                <h4>Font Options</h4>
                                <p>You can make changes to the font of our website below. You can edit the size, colour,
                                and type of font - please note that making the font size too large may effect how
                                content is displayed.</p>
                                <p>If there are any fonts you would like to see added to our webpage, please contact us.</p>
                                <div>
                                    {/*AIzaSyCwuYnbK1o5D-Y-mkOkYZF5rdTZ9yM8K_E new API key?*/}
                                    {/*AIzaSyDPtqHOkdnMVZb6wrHcyz1Mwyn0Au OLD API key*/}
                                    <FontPicker
                                        apiKey="AIzaSyCwuYnbK1o5D-Y-mkOkYZF5rdTZ9yM8K_E"
                                        families={"Lexend, Open Sans, Courier Prime"}
                                        activeFontFamily={activeFontFamily}
                                        onChange={(nextFont) => setFont(nextFont.family)}
                                    />
                                </div>
                                <br/>
                                <br/>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>

        </div>
    );
}
