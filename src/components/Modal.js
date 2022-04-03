//Modal.js
import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import ReactDom from "react-dom";
import RangeSlider from "./Slider";
import {ReadabilityContext, SetOpacityContext, SetReadabilityContext} from "./Contexts";
import {Container} from "react-bootstrap";
import styled from 'styled-components';

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const Modal = ({ setShowModal }) => {
    // close the modal when clicking outside the modal.
    const modalRef = useRef();
    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(false);
        }
    };

    const [colour, setColour] = useState(null)

    const colours = ['yellow', 'red', 'blue', 'green']

    const renderButtons = colours => {
        return colours.map( (colour, index) => {
            return ( <li key={index}
                         className={'colour-selector ' + colour}
                         onClick={() => setColour(colour)}>
            </li> )
        })
    }

    const Readability = useContext(ReadabilityContext)
    const SetReadability = useContext(SetReadabilityContext)
    const SetOpacity = useContext(SetOpacityContext)

    const [ReadVal,SetReadVal] = useState()

    useEffect(() => {

        SetReadVal(Readability)

    },[Readability])

    const [parentVal, setParentVal] = useState(0.5);

    const sliderValueChanged = useCallback((val) => {
        SetOpacity(val)
        setParentVal(val);
    });

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

    //render the modal JSX in the portal div.
    return ReactDom.createPortal(
        <div className="container" ref={modalRef} onClick={closeModal}>
            <div className="modal">
                <ModalContent>
                    <h1>test</h1>
                    <div id='toolbox'>
                        { renderButtons(colours) }
                        <RangeSlider {...sliderProps} />
                    </div>
                </ModalContent>
                <button onClick={() => setShowModal(false)}>X</button>
            </div>
        </div>,
        document.getElementById("portal")
    );
};