import React from 'react'
import busnew from "./assets/busnew.jpeg"
import Navbar from './components/Navbar'
import ImageWithText from "./ImageWithText"
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <ImageWithText image={busnew} text="Welcome" word="To naviGo" sentence="we value your time" line="Get Started"/>
      <Footer/>
    </div>
  )
}

export default App
