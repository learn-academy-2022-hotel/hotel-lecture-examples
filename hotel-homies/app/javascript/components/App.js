import React from "react"
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"



const App = () => {
  return(
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
