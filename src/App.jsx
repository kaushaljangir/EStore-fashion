import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/men" element={<Men />} />
          <Route path="/products/women" element={<Women />} />
          <Route path="/products/kids" element={<Kids />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
