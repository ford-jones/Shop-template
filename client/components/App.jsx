import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Shop from './Shop'
import ShopItem from './ShopItem'
import About from './About'
import Faqs from './Faqs'
import Contact from './Contact'
import Inquiries from './AdminInquiries'

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:name" element={<ShopItem />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route oath="/admin/inquiries" element={<Inquiries />} />
        </Routes>
      </div>
    </>
  )
}

export default App
