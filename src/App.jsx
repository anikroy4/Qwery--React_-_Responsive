import React from 'react'
import Bromo from './components/Bromo'
import Culture from './components/Culture'
import EastNusa from './components/EastNusa'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <EastNusa />
      <Bromo />
      <Culture />
      <Footer />
    </>
  )
}

export default App