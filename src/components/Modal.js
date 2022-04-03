import {Button, Modal} from "react-bootstrap";
import {useCallback, useContext, useMemo, useState} from "react";
import Navbar from "../components/layout/Navbar";
import * as React from "react";
import RangeSlider from "./Slider";
import {ColourContext, OpacityContext, ReadabilityContext, SetColourContext, SetOpacityContext} from "./Contexts";

export function AccessibilityModal(callback, deps) {
    // CONTEXTS
    const SetOpacity = useContext(SetOpacityContext)
    const Opacity = useContext(OpacityContext)
    const SetColour = useContext(SetColourContext)
    const Colour = useContext(ColourContext)

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
            label: 'Colour Opacity',
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


    // HANDLE MODAL LOGIC
    const [show, setShow] = useState(false);
    const handleClick = () => {setShow(!show)};
    const handleClose = () => setShow(false);

    return (
        <div>
            <Navbar handleClick={handleClick} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Accessibility Features</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    We've noticed you spent a long time on this page, would you like to activate any of the
                    following reading comprehension features?
                    <div id='toolbox'>
                        { renderButtons(colours) }
                    </div>
                    <div>
                        <RangeSlider {...sliderProps} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}
