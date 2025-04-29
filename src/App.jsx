import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Screenshots from './components/Screenshots'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Pricing />
        <Screenshots />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App