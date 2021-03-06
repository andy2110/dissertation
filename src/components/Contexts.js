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
const NavContext = createContext()
const SetNavContext = createContext()
const ShowContext = createContext()
const SetShowContext = createContext()
const AutoContext = createContext()
const SetAutoContext = createContext()

const ContextProvider = ({children}) => {
    const [readabilityState, setReadabilityState]= useState ("FALSE")
    const [opacityState, setOpacityState] = useState(0.5)
    const [colourState, setColourState] = useState(null)
    const [simpleState, setSimpleState] = useState(false)
    const [textColourstate, setTextColourState] = useState(null)
    const [fontColourState, setFontColourState] = useState(null)
    const [navColourState, setNavColourState] = useState()
    const [showState, setShowState] = useState()
    const [autoState, setAutoState] = useState()

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
                                                        <NavContext.Provider value = {navColourState}>
                                                            <SetNavContext.Provider value = {setNavColourState}>
                                                                <ShowContext.Provider value={showState}>
                                                                    <SetShowContext.Provider value = {setShowState}>
                                                                        <AutoContext.Provider value={autoState}>
                                                                            <SetAutoContext.Provider value={setAutoState}>
                                                                                {children}
                                                                            </SetAutoContext.Provider>
                                                                        </AutoContext.Provider>
                                                                    </SetShowContext.Provider>
                                                                    </ShowContext.Provider>
                                                            </SetNavContext.Provider>
                                                        </NavContext.Provider>
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
FontColourContext, SetFontColourContext, NavContext, SetNavContext, SetShowContext, ShowContext, SetAutoContext,
AutoContext}




// https://www.freecodecamp.org/news/react-context-for-beginners/#what-is-react-context use this