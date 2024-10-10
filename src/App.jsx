import React from 'react'
import Hero from './components/Hero';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import DonationProcess from './components/DonationProcess';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <div>
      {/* Write your code here */}
      <Hero />
      <DonationProcess  />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App