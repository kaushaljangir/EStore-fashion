import React from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import Cart from './pages/Cart'
import Login from './pages/Login'
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <Toaster position="top-right" />
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products/men" element={<Men />} />
              <Route path="/products/women" element={<Women />} />
              <Route path="/products/kids" element={<Kids />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  )
}

export default App
