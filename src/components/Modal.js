import {Button, Modal} from "react-bootstrap";
import {useCallback, useContext, useMemo, useState} from "react";
import Navbar from "../components/layout/Navbar";
import * as React from "react";
import RangeSlider from "./Slider";
import {SetOpacityContext} from "./Contexts";

export function SignIn(callback, deps) {
    const [show, setShow] = useState(true);

    const SetOpacity = useContext(SetOpacityContext)

    const handleClick = () => {
        setShow(!show);
    };
    const handleClose = () => setShow(false);


    const [colour, setColour] = useState(null)
    // parent val for opacity slider, change variable names later!
    const [parentVal, setParentVal] = useState(0.5);

    const sliderValueChanged = useCallback((val) => {
        SetOpacity(val)
        setParentVal(val);
    });

    const colours = ['yellow', 'red', 'blue', 'green']

    const sliderProps = useMemo(
        () => ({
            min: 0,
            max: 0.9,
            value: parentVal,
            step: 0.01,
            label: 'Colour Opacity',
            onChange: (e) => sliderValueChanged(e),
        }),
        [parentVal]
    );

    const renderButtons = colours => {
        return colours.map( (colour, index) => {
            return ( <li key={index}
                         className={'colour-selector ' + colour}
                         onClick={() => setColour(colour)}>
            </li> )
        })

    }



    return (
        <div>
            <Navbar handleClick={handleClick} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Accessibility Features</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    We've noticed you spent a long time on this page, would you like to activate any of the
                    following features?
                    <div id='toolbox'>
                        { renderButtons(colours) }
                    </div>
                    <div>
                        <RangeSlider {...sliderProps} />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
