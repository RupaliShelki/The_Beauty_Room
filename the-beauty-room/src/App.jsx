import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import About from './components/About'
import Services from "./components/Services"
import Gallery from "./components/Gallery"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <Navbar></Navbar>
   <Hero></Hero>
   <About></About>
   <Services></Services>
   <Gallery></Gallery>
   <Contact></Contact>
    
    </>
  )
}

export default App
