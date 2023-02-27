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
          <Route index path='/' element={<Hero />} />
          <Route path="register" element={<Register />} />
          <Route path="docs" element={<Docs />} />
          <Route path="examples" element={<Examples />} />
          <Route path="*" element={<Hero />} />
        </Routes>
        <Footer />
        <Particles id="tsparticles"/>
      </div>
    </BrowserRouter>
  )
}

export default App
