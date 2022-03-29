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
import useMouse from '@react-hook/mouse-position'
import * as React from 'react'

export const UserContext = React.createContext();
// https://www.freecodecamp.org/news/react-context-for-beginners/#what-is-react-context use this

function App() {
    const ref = React.useRef(null)
    // const mouse = useMouse(ref, {
    //     enterDelay: 100,
    //     leaveDelay: 100,
    //     })
    // console.log(mouse.x,mouse.y)
  return (
      <div ref={ref}>
          <button onClick={window['start']}>start</button>
          <button onClick={window['stop']}>stop</button>
          <button onClick={window['show']}>show results</button>

          {/*add an event listener to the window to try listen for clicks*/}
          <Router>
              <Navbar/>
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
  );
}

export default App;
