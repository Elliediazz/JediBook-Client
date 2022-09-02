import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavBar from './Components/Navbar'
import Home from './Components/Home'
import NewAvatarForm from './Components/NewAvatarForm'
import About from './Components/About'
import TheJedi from './Components/TheJedi'
import TheSith from './Components/TheSith'
import LogIn from './Components/LogIn'
import SingUp from './Components/SignUp'

function App() {
  return (
    <div>
      <Router>
      <NavBar />
      <Routes>
        <Route exact path= '/' element={<Home />} />
        <Route path= '/new' element={<NewAvatarForm />}/>
        <Route path= '/about' element={<About />}/>
        <Route path= '/jedi' element={<TheJedi />}/>
        <Route path= '/sith' element={<TheSith />}/>
        <Route path= '/login' element={<LogIn />}/>
        <Route path= '/signup' element={<SingUp />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

// Nav bar: home, about, jedi, sith, log in, sign up
// Home page : Shows nav bar, plays R2D2, shows millenium falcon *flying in*
    // nav bars has link to all people names, which are links to display page
// Display page: displays all of a persons info
    // has button to delete only new created 
//Create new starwars avatar link 
