import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Screenshots from './components/Screenshots'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TermsAndConditions from './pages/TermsAndConditions'
import RefundPolicy from './pages/RefundPolicy'
import CancellationPolicy from './pages/CancellationPolicy'
import PromotionTerms from './pages/PromotionTerms'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <Features />
              <Pricing />
              {/*<Screenshots />*/}
              <Contact />
            </main>
            <Footer />
          </>
        } />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/promotion-terms" element={<PromotionTerms />} />
      </Routes>
    </Router>
  )
}

export default App