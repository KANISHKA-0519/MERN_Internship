import Navbar from './components/functionalComponents/Navbar.jsx'
import './App.css'
import ClassComponent from './components/ClassComponents/ClassComponent.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/functionalComponents/Home.jsx'
import About from './components/functionalComponents/About.jsx'
import LearningReact from './components/functionalComponents/LearningReact.jsx'
import Contact from './components/functionalComponents/Contact.jsx'
import Login from './components/functionalComponents/Login.jsx'
import Signup from './components/functionalComponents/Signup.jsx'
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/learning-react' element={<LearningReact/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
