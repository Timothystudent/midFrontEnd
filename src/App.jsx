import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './homepage'
import "./assets/css/style.css" 
import Contact from './Contact'
import About from './About'
import Skills from './Skills'
import Hero from './Hero'
import Fact from './Fact'



import Mobile from './Mobile'


function App() {

  return (
    <>
    <Mobile/>  
    <Hero/>
    <About/>
    <Fact/>
    <Skills/>
    <Contact/>
    
    
    </>
  )
}

export default App
