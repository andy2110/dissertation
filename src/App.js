import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Team from './components/pages/Team'
import Vacancies from './components/pages/Vacancies'
import Contact from './components/pages/Contact'
import PageNotFound from "./components/pages/PageNotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div id="page-container">
          <Navbar/>
          <Router>
              <Routes>
                  <Route path='*' element={<PageNotFound/>}/>
                  <Route path='/' exact element={<Home/>}/>
                  <Route path='/about' component={<About/>}/>
                  <Route path='/team' component={<Team/>}/>
                  <Route path='/vacancies' component={<Vacancies/>}/>
                  <Route path='/contact' component={<Contact/>}/>
              </Routes>
          </Router>
          <Footer/>
      </div>
  );
}

export default App;
