import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Screenshots from './components/Screenshots'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MDXComponents from './components/blog/MDXComponents'
import TermsAndConditions from './pages/TermsAndConditions'
import RefundPolicy from './pages/RefundPolicy'
import CancellationPolicy from './pages/CancellationPolicy'
import PromotionTerms from './pages/PromotionTerms'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'

function App() {
  return (
    <MDXProvider components={MDXComponents}>
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
              <Blog />
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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </Router>
    </MDXProvider>
  )
}

export default App