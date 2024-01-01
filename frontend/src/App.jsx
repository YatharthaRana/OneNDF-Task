import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Caraousel from './components/Caraousel';
import Footer from './components/Footer';
import About from './components/About';
import Signup from './components/Signup';
import Error from './components/Alert';
import Dashboard from './components/Dashboard';
import Navigbar from './components/Navigbar';
import Navigationbar from './components/Navigationbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<><Navbar/> <Caraousel/> <Footer/></>} />
        <Route path = "/about" element = {<> <Navbar/> <About/> <Footer/> </>} />
        <Route path = "/signup" element = {<> <Navigbar/> <Signup/> <Footer/> </>} />
        <Route path = "/signup-again" element = {<> <Navbar/> <Error/> <Signup/> <Footer/> </>} />
        <Route path = "/dashboard" element = {<> <Navigationbar/> <Dashboard/> <Footer/> </>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App