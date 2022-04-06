import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {useCallback, useContext, useMemo, useState} from "react";
import Navbar from "../components/layout/Navbar";
import * as React from "react";
import RangeSlider from "./Slider";
import {
    OpacityContext,
    ReadabilityContext,
    SetColourContext,
    SetOpacityContext, SetReadabilityContext, SetSimpleContext,
    SimpleContext
} from "./Contexts";
import FontPicker from "font-picker-react";

export function AccessibilityModal(callback, deps) {
    // CONTEXTS
    const SetOpacity = useContext(SetOpacityContext)
    const Opacity = useContext(OpacityContext)
    const SetColour = useContext(SetColourContext)
    const Simple = useContext(SimpleContext)
    const SetSimple = useContext(SetSimpleContext)
    const SetReadability = useContext(SetReadabilityContext)

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


    // HANDLE OVERLAY COLOUR
    const colours = ['yellow', 'red', 'blue', 'green']
    const renderButtons = colours => {
        return colours.map( (colour, index) => {
            return ( <li key={index}
                         className={'colour-selector ' + colour}
                         onClick={() => SetColour(colour)}>
            </li> )
        })
    }

    const resetSettings = () => {
        SetColour(null)
        SetOpacity(0.5)
        SetSimple(false)
        setButtonText("Enable")
        setFont("Open Sans")
    }


    // HANDLE FONTS
    const [activeFontFamily, setFont] = useState("Open Sans");



    // HANDLE MODAL LOGIC
    const [show, setShow] = useState(false);
    const [auto, setAuto] = useState(false);
    const handleClickAuto = () => {
        setShow(!show)
        setAuto(true)
    };
    const handleClick = () => {
        setShow(!show)
        SetReadability("TRUE")
    };
    const handleClose = () => {
        setShow(false)
        setAuto(false)
    };


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

    return (
        <div>
            <Navbar handleClick={handleClick} handleClickAuto={handleClickAuto} />
            <Modal className="apply-font" size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Accessibility Features</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col>
                                {
                                    Simple ?
                                        auto ?
                                            <div>
                                                <p>You have spent a long time on this page, use these options if they
                                                    will help your reading. Press escape or click outside the box to exit.</p>
                                                <p>To find this page again, click 'Accessibility' on the top of the webpage.
                                                    If you want more settings to change, please email us.</p>
                                            </div>
                                            :
                                            <div>
                                                <p>Use these options if they will help your reading. Press escape or
                                                    click outside the box to exit.</p>
                                                <p>If you want more settings to change, please email us.</p>
                                            </div>

                                    :
                                        auto ?
                                            <div>
                                                <p>We've noticed you spent a long time on this page, would you like to
                                                    activate any of the following reading comprehension features? If you
                                                    want to exit, simply click away from this notification box and it
                                                    will not automatically pop-up again.</p>
                                                <p>If you wish to view these settings in the future, you can click
                                                    'Accessibility' on the navigation bar.If there are any settings you
                                                    would like to see added to our website, please contact us.</p>
                                            </div>
                                            :
                                            <div>
                                                <p>The following features are to assist with reading comprehension. If
                                                    you want to exit, simply click away from this pop-up
                                                    box.</p>
                                                <p>To view these settings in the future, you can click 'Accessibility'
                                                    on the navigation bar. If there are any settings you would like to see
                                                    added to our website, please contact us.</p>
                                            </div>

                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} s={8} md={4}>
                                <h4>Colour Overlay</h4>
                                {
                                    Simple ?
                                        <div>
                                            <p>A coloured screen may make reading easier. Pick a colour, and then slide the bar to make
                                                it dark or light.</p>
                                        </div>
                                        :
                                        <div>
                                            <p>Many people find it helpful to have a coloured overlay when they are reading on a
                                                screen. If you want to try it out, select a colour below and then use the slider to
                                                adjust how bright or dark you want the overlay to be.</p>
                                        </div>
                                }
                            </Col>
                            <Col xs={12} s={8} md={4}>
                                <h4>Simplified Text</h4>
                                {
                                    Simple ?
                                        <div>
                                            <p>Make text shorter and easy to read.</p>
                                        </div>
                                        :
                                        <div>
                                            <p>If you want a shorter, simplified version of the website content, click the button
                                                below. It will break up larger pieces of text, and use simpler language overall.</p>
                                        </div>
                                }
                            </Col>
                            <Col xs={12} s={8} md={4}>
                                <h4>Font Options</h4>
                                {
                                    Simple ?
                                        <div>
                                            <p>Change how the text looks on the website, including colour and size.</p>
                                        </div>
                                        :
                                        <div>
                                            <p>You can make changes to the font of our website below. You can edit the size, colour,
                                                and type of font - please note that making the font size too large may effect how
                                                content is displayed.</p>
                                        </div>
                                }
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col xs={12} s={8} md={4}>
                                <div id='toolbox'>
                                    { renderButtons(colours) }
                                </div>
                                <RangeSlider {...sliderProps} />
                            </Col>
                            <Col xs={12} s={8} md={4}>
                                <div>
                                    <Button onClick={enableSimple}>{buttonText} Simplified Text</Button>
                                </div>
                            </Col>
                            <Col xs={12} s={8} md={4}>
                                <div>
                                    <FontPicker
                                        apiKey="AIzaSyCwuYnbK1o5D-Y-mkOkYZF5rdTZ9yM8K_E"
                                        families={"Lexend, Open Sans, Courier Prime"}
                                        activeFontFamily={activeFontFamily}
                                        onChange={(nextFont) => setFont(nextFont.family)}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={resetSettings}>Reset</Button>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
