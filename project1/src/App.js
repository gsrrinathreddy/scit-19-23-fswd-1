import logo from './logo.svg';
import './App.css';
import IButton from './components/IButton';
import IAutocomplete from './components/IAutocomplete';
import INavbar from './components/INavbar';
import {Routes,Route} from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Hobbies from './pages/Hobbies'
import Projects from './pages/Projects';

function App() {
  return (
    <div className="fswd-19-23-app">
    <INavbar/>
    <Routes>
      <Route path='/AboutMe' element={<AboutMe/>}/>
      <Route path='/Qualification' element={<Qualification/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Certifications' element={<Certifications/>}/>
      <Route path='/Hobbies' element={<Hobbies/>}/>
      <Route path='/Projects' element={<Projects/>}/>
    </Routes>
    </div>
  );
}

export default App;
