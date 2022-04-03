import * as React from 'react';
import { useState, createContext, useEffect } from 'react';

// create the context, and then the setter of the context
const ReadabilityContext = createContext()
const SetReadabilityContext = createContext()
const OpacityContext = createContext()
const SetOpacityContext = createContext()
const ColourContext = createContext()
const SetColourContext = createContext()
const SimpleContext = createContext()
const SetSimpleContext = createContext()

const ContextProvider = ({children}) => {
    const [readabilityState, setReadabilityState]= useState ("FALSE")
    const [opacityState, setOpacityState] = useState(0.5)
    const [colourState, setColourState] = useState(null)
    const [simpleState, setSimpleState] = useState(false)
    return (
        <>
        <ReadabilityContext.Provider value={readabilityState}>
            <SetReadabilityContext.Provider value = {setReadabilityState}>
                <SimpleContext.Provider value = {simpleState}>
                    <SetSimpleContext.Provider value = {setSimpleState}>
                        <ColourContext.Provider value = {colourState}>
                            <SetColourContext.Provider value = {setColourState}>
                                <OpacityContext.Provider value = {opacityState}>
                                    <SetOpacityContext.Provider value = {setOpacityState}>
                                        {children}
                                    </SetOpacityContext.Provider>
                                </OpacityContext.Provider>
                            </SetColourContext.Provider>
                        </ColourContext.Provider>
                    </SetSimpleContext.Provider>
                </SimpleContext.Provider>
            </SetReadabilityContext.Provider>
        </ReadabilityContext.Provider>
        </>
    )
}

export {ReadabilityContext, ContextProvider, SetReadabilityContext, OpacityContext, SetOpacityContext,
    ColourContext, SetColourContext, SimpleContext, SetSimpleContext}




// https://www.freecodecamp.org/news/react-context-for-beginners/#what-is-react-context use this