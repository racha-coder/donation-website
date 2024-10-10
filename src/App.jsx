import React from 'react'
import Hero from './components/Hero';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import './App.css'
import DonationProcess from './components/DonationProcess';
import './App.css'

const App = () => {
  return (
    <div>
      {/* Write your code here */}
      <Hero />
      <DonationProcess  />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App