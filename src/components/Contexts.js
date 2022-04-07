import * as React from 'react';
import { useState, createContext } from 'react';

// create the context, and then the setter of the context
const ReadabilityContext = createContext()
const SetReadabilityContext = createContext()
const OpacityContext = createContext()
const SetOpacityContext = createContext()
const ColourContext = createContext()
const SetColourContext = createContext()
const SimpleContext = createContext()
const SetSimpleContext = createContext()
const TextColourContext = createContext()
const SetTextColourContext = createContext()
const FontColourContext = createContext()
const SetFontColourContext = createContext()

const ContextProvider = ({children}) => {
    const [readabilityState, setReadabilityState]= useState ("FALSE")
    const [opacityState, setOpacityState] = useState(0.5)
    const [colourState, setColourState] = useState(null)
    const [simpleState, setSimpleState] = useState(false)
    const [textColourstate, setTextColourState] = useState("#FAFAC8")
    const [fontColourState, setFontColourState] = useState("#000000")
    return (
        <>
        <ReadabilityContext.Provider value={readabilityState}>
            <SetReadabilityContext.Provider value = {setReadabilityState}>
                <SimpleContext.Provider value = {simpleState}>
                    <SetSimpleContext.Provider value = {setSimpleState}>
                        <TextColourContext.Provider value = {textColourstate}>
                            <SetTextColourContext.Provider value = {setTextColourState}>
                                <ColourContext.Provider value = {colourState}>
                                    <SetColourContext.Provider value = {setColourState}>
                                        <FontColourContext.Provider value = {fontColourState}>
                                            <SetFontColourContext.Provider value = {setFontColourState}>
                                                <OpacityContext.Provider value = {opacityState}>
                                                    <SetOpacityContext.Provider value = {setOpacityState}>
                                                        {children}
                                                    </SetOpacityContext.Provider>
                                                </OpacityContext.Provider>
                                            </SetFontColourContext.Provider>
                                        </FontColourContext.Provider>
                                    </SetColourContext.Provider>
                                </ColourContext.Provider>
                            </SetTextColourContext.Provider>
                        </TextColourContext.Provider>
                    </SetSimpleContext.Provider>
                </SimpleContext.Provider>
            </SetReadabilityContext.Provider>
        </ReadabilityContext.Provider>
        </>
    )
}

export {ContextProvider, ReadabilityContext, SetReadabilityContext, OpacityContext, SetOpacityContext,
    ColourContext, SetColourContext, SimpleContext, SetSimpleContext, TextColourContext, SetTextColourContext,
FontColourContext, SetFontColourContext}




// https://www.freecodecamp.org/news/react-context-for-beginners/#what-is-react-context use this