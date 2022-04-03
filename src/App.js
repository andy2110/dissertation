import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Team from './components/pages/Team'
import Vacancies from './components/pages/Vacancies'
import Contact from './components/pages/Contact'
import PageNotFound from "./components/pages/PageNotFound";
import Staff from "./components/pages/Staff"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react'
import {ContextProvider} from "./components/Contexts";
import {SignIn} from "./components/Modal";

function App() {
  return (
      <ContextProvider>
          <div>
              <Router>
                  <SignIn/>
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
              </Router>
              <br/>
              <Footer/>
          </div>
      </ContextProvider>
  );
}

export default App;
