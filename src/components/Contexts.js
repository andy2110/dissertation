import * as React from 'react';
import { useState, createContext, useEffect } from 'react';

// create the context, and then the setter of the context
const ReadabilityContext = createContext()
const SetReadabilityContext = createContext()
const OpacityContext = createContext()
const SetOpacityContext = createContext()

const ContextProvider = ({children}) => {
    const [readabilityState, setReadabilityState]= useState ("FALSE")
    const [opacityState, setOpacityState] = useState(0.5)
    console.log("opacity state",opacityState)
    return (
        <>
        <OpacityContext.Provider value = {opacityState}>
            <SetOpacityContext.Provider value = {setOpacityState}>
                <ReadabilityContext.Provider value={readabilityState}>
                    <SetReadabilityContext.Provider value = {setReadabilityState}>
                        {children}
                    </SetReadabilityContext.Provider>
                </ReadabilityContext.Provider>
            </SetOpacityContext.Provider>
        </OpacityContext.Provider>
        </>
    )
}

export {ReadabilityContext, ContextProvider, SetReadabilityContext, OpacityContext, SetOpacityContext}




// https://www.freecodecamp.org/news/react-context-for-beginners/#what-is-react-context use this