import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Register from './pages/Register'
import Docs from './pages/Docs'
import Examples from './pages/Examples'
import Particles from './components/Particles';
import { useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <div className="App h-[100%] flex flex-col justify-between" >
        <Header />
        <Routes>
          <Route index path='/jobs-api/' element={<Hero />} />
          <Route path="/jobs-api/register" element={<Register />} />
          <Route path="/jobs-api/docs" element={<Docs />} />
          <Route path="/jobs-api/examples" element={<Examples />} />
          <Route path="/jobs-api/*" element={<Hero />} />
        </Routes>
        <Footer />
        <Particles id="tsparticles"/>
      </div>
    </BrowserRouter>
  )
}

export default App
