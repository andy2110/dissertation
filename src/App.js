import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Team from './components/pages/Team'
import Vacancies from './components/pages/Vacancies'
import Contact from './components/pages/Contact'
import PageNotFound from "./components/pages/PageNotFound";
import Staff from "./components/pages/Staff"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div id="page-container">
          <Router>
              <Navbar/>
              <div id="body">
              <Routes>
                  <Route path='*' element={<PageNotFound/>}/>
                  <Route path='/' exact element={<Home/>}/>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/team' element={<Team/>}/>
                  <Route path='/vacancy' element={<Vacancies/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/staff' element={<Staff/>}/>
              </Routes>
              </div>
          </Router>
          <Footer/>
      </div>
  );
}

export default App;
