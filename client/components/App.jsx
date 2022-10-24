import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Shop from './Shop'
import ShopItem from './ShopItem'
import Cart from './Cart'
import Checkout from './Checkout'
import About from './About'
import Faqs from './Faqs'
import Contact from './Contact'
import AdminInquiries from './AdminInquiries'

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:name" element={<ShopItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/admin/inquiries" element={<AdminInquiries />} />
        </Routes>
      </div>
    </>
  )
}

export default App
