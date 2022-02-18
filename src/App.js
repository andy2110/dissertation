import Navbar from './components/layout/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Team from './components/Team'
import Vacancies from './components/Vacancies'
import Contact from './components/Contact'
import PageNotFound from "./components/PageNotFound";
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
          <br/>
          test
          <br/>
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          test
          <br/>
          <br/>
          test
          <br/>
          <br/>
          test
          <br/>
          <br/>
          test
          <br/>
          <Footer/>
      </div>
  );
}

export default App;
