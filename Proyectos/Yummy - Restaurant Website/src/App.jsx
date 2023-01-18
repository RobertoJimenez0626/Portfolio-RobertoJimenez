import React from 'react'
import Header from './components/Header'
import NavIcon from './components/NavIcon'
import Home from './components/Home'
import About from './components/About'
import Meals from './components/Meals'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='font-nunito bg-back'>
      <Header />
      <NavIcon />
      <Home />
      <About />
      <Meals />
      <Contact />
      <Footer />
    </div>
  )
}

export default App