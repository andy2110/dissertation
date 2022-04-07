import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Team from './components/pages/Team'
import Vacancies from './components/pages/Vacancies'
import Contact from './components/pages/Contact'
import PageNotFound from "./components/pages/PageNotFound";
import Staff from "./components/pages/Staff"
import ScrollTop from "./components/ScrollTop"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react'
import {AccessibilityModal} from "./components/Modal";
import { useState} from "react";
import FontPicker from "font-picker-react";

function App() {
    const [activeFontFamily, setFont] = useState("Open Sans");

    return (
        <>
            <div hidden={true}>
                <FontPicker
                    apiKey="AIzaSyCwuYnbK1o5D-Y-mkOkYZF5rdTZ9yM8K_E"
                    pickerId="main"
                    activeFontFamily={activeFontFamily}
                    onChange={(nextFont) => setFont(nextFont.family)}
                />
            </div>
                  <span className="apply-font-main">
                      <span className="apply-font">
                              <div>
                                  <Router>
                                      <ScrollTop/>
                                      <AccessibilityModal/>
                                      <div id="body">
                                      <Routes>
                                          <Route path='*' element={<PageNotFound/>}/>
                                          <Route index element={<Home/>}/>
                                          <Route path='/about' element={<About/>}/>
                                          <Route path='/team' element={<Team/>}/>
                                          <Route path='/vacancy' element={<Vacancies/>}/>
                                          <Route path='/contact' element={<Contact/>}/>
                                          <Route path='/staff' element={<Staff/>}/>
                                      </Routes>
                                      </div>
                                      <br/>
                                      <Footer/>
                                  </Router>
                              </div>
                          </span>
                  </span>

        </>
  );
}

export default App;
