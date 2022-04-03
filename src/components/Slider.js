//destructive props
import {memo, useEffect, useState} from "react";

const RangeSlider = ({ classes, label, onChange, value, ...sliderProps }) => {
    //set initial value to 0 this will change inside useEffect in first render also| or you can directly set useState(value)
    const [sliderVal, setSliderVal] = useState(0);

    // keep mouse state to determine whether to call parent onChange or not.
    // after dragging slider releasing  mouse will call parent onChange, otherwise parent function gets called on every change
    const [mouseState, setMouseState] = useState(null);

    useEffect(() => {
        setSliderVal(value); // set new value when value gets changed, even when first render
    }, [value]);

    const changeCallback = (e) => {
        onChange(sliderVal)// when mouse is up then call the parent onChange
        setSliderVal(e.target.value); // update local state of the value when changing

    }

    useEffect(() => {
        if (mouseState === "up") {
            onChange(sliderVal)// when mouse is up then call the parent onChange
        }
    }, [mouseState])

    return (
        <div className="range-slider">
            {/*<p>{label}</p>*/}
            <h3>Overlay Opacity %: { sliderVal }</h3>
            <input
                type="range"
                value={sliderVal}
                {...sliderProps}
                className={`slider ${classes}`}
                id="myRange"
                onChange={changeCallback}
                onMouseDown={() => setMouseState("down")} // When mouse down set the mouseState to 'down'
                onMouseUp={() => setMouseState("up")} // When mouse down set the mouseState to 'up' | now we can call the parent onChnage
            />
        </div>
    );
};

export default memo(RangeSlider);